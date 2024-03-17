// OrderForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Order() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [event_id, setEventId] = useState('');
  const [ticket_type, setTicketType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('access_token');
    if (token) {
      setLoggedIn(true);
      // Fetch user ID from localStorage or server
      const userId = localStorage.getItem('user_id');
      setUserId(userId);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/userorder', {
        user_id: userId,
        event_id,
        ticket_type,
        quantity
      });

      console.log(response.data); // Log response from the backend
      alert('Order created successfully');

      // Optionally, reset the form after successful order submission
      setEventId('');
      setTicketType('');
      setQuantity('');
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to create order');
    }
  };

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  if (redirect) {
    return <Navigate to="/orders" />;
  }

  return (
    <div>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event ID</label>
          <input
            type='text'
            placeholder='Event ID'
            value={event_id}
            onChange={(e) => setEventId(e.target.value)}
          />
        </div>
        <div>
          <label>Ticket Type</label>
          <input
            type='text'
            placeholder='Ticket Type'
            value={ticket_type}
            onChange={(e) => setTicketType(e.target.value)}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type='number'
            placeholder='Quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <button>Create Order</button>
        </div>
      </form>
    </div>
  );
}

export default Order;
