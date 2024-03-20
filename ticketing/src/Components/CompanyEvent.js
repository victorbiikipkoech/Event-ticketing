import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Import the Navbar component

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

      await axios.post('https://event-ticketing-backend.onrender.com/events', {
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
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4 mr-96">New Event</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
        </form>
      </div>
    </div>
  );
}

export default CompanyEvent;
