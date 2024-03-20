import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams hook

function Ticketspage() {
  const { event_name } = useParams(); // Extract eventId from URL parameter
  const [ticket_type, setTicketType] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleTickets = (e)=>{
    e.preventDefault();
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

     axios.post("https://event-ticketing-backend.onrender.com/tickets",{event_name:event_name, ticket_type,price,quantity},config)
    .then ((res)=>{
      console.log(res)
      alert('ticket created successfully')

      // Reset ticket purchase fields
      setTicketType('');
      setPrice('');
      setQuantity('');
    })
    .catch((err)=>{
      console.log(err)
      alert("ticket cannot be created")
    })
  }


  return (
    <div className="container mx-auto mt-14 mb-14 p-4">
      <h1 className="text-2xl font-bold text-gray-800">Set Tickets for {event_name}</h1>
     <form onSubmit={handleTickets}>
        <div className="mb-4 md:col-span-1">
          <label className="block">Ticket Type</label>
          <select
            value={ticket_type}
            onChange={e => setTicketType(e.target.value)}
            required
          >
            <option value="">Select Ticket Type</option>
            <option value="vvip">VVIP</option>
            <option value="vip">VIP</option>
            <option value="regular">Regular</option>
          </select>
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block">Quantity</label>
          <input
            type='number'
            placeholder='Quantity'
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block">Price</label>
          <input
            type='number'
            placeholder='Enter ticket price'
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="col-span-2 flex justify-center">
          <button type='submit' className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-96">Create Ticket</button>
        </div>
      </form>
    </div>
  );
}

export default Ticketspage;
