import React, { useState } from 'react';
import axios from 'axios';

function CompanyEvent() {
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [event_time, setEventTime] = useState('');
  const [event_name, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [event_type, setEventType] = useState('');
  const [venue_name, setVenueName] = useState('');

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
        event_time,
        description,
        event_type,
        venue_name,
      }, config);

      alert('Event created successfully');

      // Reset form fields after successful event submission
      setEventName('');
      setStartDate('');
      setEndDate('');
      setEventTime('');
      setDescription('');
      setEventType('');
      setVenueName('');
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to create event');
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4 mr-96">New Event</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-4">
        <div className="mb-4">
          <label className="block">Venue Name</label>
          <input
            type='text'
            placeholder='Venue Name'
            value={venue_name}
            onChange={e => setVenueName(e.target.value)}
            className="input"
          />
        </div>
        <div className="mb-4">
          <label className="block">Location</label>
          <input
            type='text'
            placeholder='Event Location'
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="input"
          />
        </div>
        <div className="mb-4">
          <label className="block">Event Name</label>
          <input
            type='text'
            placeholder='Event Name'
            value={event_name}
            onChange={e => setEventName(e.target.value)}
            className="input"
          />
        </div>
        <div className="mb-4">
          <label className="block">Start Date</label>
          <input
            type='date'
            placeholder='Start Date'
            value={start_date}
            onChange={e => setStartDate(e.target.value)}
            className="input"
          />
        </div>
        <div className="mb-4">
          <label className="block">End Date</label>
          <input
            type='date'
            placeholder='End Date'
            value={end_date}
            onChange={e => setEndDate(e.target.value)}
            className="input"
          />
        </div>
        <div className="mb-4">
          <label className="block">Event Time</label>
          <input
            type='time'
            placeholder='Event Time'
            value={event_time}
            onChange={e => setEventTime(e.target.value)}
            className="input"
          />
        </div>
        <div className="mb-4">
          <label className="block">Event Description</label>
          <textarea
            placeholder='Description of the event'
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="mb-4">
          <label className="block">Event Type</label>
          <select
            value={event_type}
            onChange={e => setEventType(e.target.value)}
            className="input"
          >
            <option>Select Event Type</option>
            <option>VVIP</option>
            <option>VIP</option>
            <option>REGULAR</option>
          </select>
        </div>
        <div className="col-span-2 flex justify-center">
          <button type='submit' className="btn bg-blue-500 text-white px-4 py-2 rounded mr-96 hover:bg-blue-600">Create Event</button>
        </div>
      </form>
    </div>
  );
}

export default CompanyEvent;
