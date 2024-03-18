import React, { useState } from 'react';
import axios from 'axios';

function CompanyEvent() {
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [event_name, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [event_type, setEventType] = useState('');
  const [venue_name, setVenueName] = useState('');
  const [ticket_type, setTicketType] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accessToken = localStorage.getItem('access_token');
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      if (!accessToken) {
        console.error('Access token not found');
        return;
      }

      await axios.post('/events', {
        event_name,
        start_date,
        location,
        end_date,
        description,
        event_type,
        venue_name,
      }, config);

      // Create ticket purchase
      await axios.post('/ticket-purchase', {
        event_name,
        ticket_type,
        price,
        quantity,
      }, config);

      alert('Event created successfully');

      // Reset form fields after successful event submission
      setEventName('');
      setStartDate('');
      setEndDate('');
      setDescription('');
      setEventType('');
      setVenueName('');
      // Reset ticket purchase fields
      setTicketType('');
      setPrice('');
      setQuantity('');
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to create event');
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4 mr-96">New Event</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4 md:col-span-1">
          <label className="block">Event Name</label>
          <input
            type='text'
            placeholder='Event Name'
            value={event_name}
            onChange={e => setEventName(e.target.value)}
            className="input"
          />
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block">Venue Name</label>
          <input
            type='text'
            placeholder='Venue Name'
            value={venue_name}
            onChange={e => setVenueName(e.target.value)}
            className="input"
          />
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block">Start Date</label>
          <input
            type='date'
            placeholder='Start Date'
            value={start_date}
            onChange={e => setStartDate(e.target.value)}
            className="input"
          />
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block">End Date</label>
          <input
            type='date'
            placeholder='End Date'
            value={end_date}
            onChange={e => setEndDate(e.target.value)}
            className="input"
          />
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block">Event Type</label>
          <select
            value={event_type}
            onChange={e => setEventType(e.target.value)}
            className="input"
          >
            <option>Select Event Type</option>
            <option>Physical</option>
            <option>Remote</option>
          </select>
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block">Event Description</label>
          <textarea
            placeholder='Description of the event'
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block">Location</label>
          <input
            type='text'
            placeholder='Event Location'
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="input"
          />
        </div>
        {/* Additional fields for ticket purchase */}
        <div className="mb-4 md:col-span-1">
          <label className="block">Ticket Type</label>
          <select
            value={ticket_type}
            onChange={e => setTicketType(e.target.value)}
            className="input"
          >
            <option value="">Select Ticket Type</option>
            <option value="VVIP">VVIP</option>
            <option value="VIP">VIP</option>
            <option value="Regular">Regular</option>
          </select>
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block">Quantity</label>
          <input
            type='number'
            placeholder='Quantity'
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            className="input"
          />
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block">Price</label>
          <input
            type='number'
            placeholder='Price (500 - 10000)'
            value={price}
            min="500"
            max="10000"
            onChange={e => setPrice(e.target.value)}
            className="input"
          />
        </div>
        <div className="col-span-2 flex justify-center">
          <button type='submit' className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-96">Create Event</button>
        </div>
      </form>
    </div>
  );
}

export default CompanyEvent;
