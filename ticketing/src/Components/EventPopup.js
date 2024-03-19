import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
// import AddToCalendar from 'react-add-to-calendar';

const EventPopup = ({ event, onClose }) => {
  // const [eventName, setEventName] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [numTickets, setNumTickets] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Fetch ticket prices when ticketType changes
    if (ticketType !== '') {
      axios.get(`https://event-ticketing-backend.onrender.com/events/${event.id}/tickets`)
        .then(response => {
          // Find the ticket with the corresponding type
          const ticket = response.data.find(ticket => ticket.ticket_type === ticketType);
          if (ticket) {
            setTicketPrice(ticket.price);
          } else {
            // Handle case when ticket type is not found
            setTicketPrice(0);
          }
        })
        .catch(error => {
          // Handle error
          console.error('Error fetching ticket data:', error);
        });
    }
  }, [ticketType, event.id]);

  const handleTicketTypeChange = (event) => {
    setTicketType(event.target.value);
  };

  const handleNumTicketsChange = (event) => {
    setNumTickets(parseInt(event.target.value));
  };

  const calculateTotalAmount = () => {
    setTotalAmount(numTickets * ticketPrice);
  };
//

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md h-4/5 overflow-y-auto">
        <img src={event.event_image} alt={event.event_name} className="w-full h-auto rounded-md mb-4" />
        <h2 className="font-bold text-xl mb-4">EVENT NAME: {event.event_name}</h2>
        {/* Ticket form */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Ticket Payment</h3>
          <form className="space-y-4">
            <div>
              <label className="block">
                <span className="text-gray-700">Ticket Type:</span>
                <select
                  value={ticketType}
                  onChange={handleTicketTypeChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Ticket Type</option>
                  <option value="VVIP">VVIP</option>
                  <option value="VIP">VIP</option>
                  <option value="Regular">Regular</option>
                </select>
              </label>
            </div>
            <div>
              <label className="block">
                <span className="text-gray-700">Ticket Price:</span>
                <input
                  value={ticketPrice}
                  readOnly // Prevent user input
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
            </div>
            <div>
              <label className="block">
                <span className="text-gray-700">Number of Tickets:</span>
                  <input
                    type='text'
                    pattern='\d*'
                    inputMode='numeric'                  
                    value={numTickets}
                  onChange={handleNumTicketsChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
            </div>
            <button
              type="button"
              onClick={calculateTotalAmount}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Calculate Total
            </button>
          </form>
          {/* Summary */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Summary:</h4>
            <p>Event Name: {event.event_name}</p>
            <p>Ticket Type: {ticketType}</p>
            <p>Number of Tickets: {numTickets}</p>
            <p>Total Amount: KSH{totalAmount}</p>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-end mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={onClose}>
            Close
          </button>
          {/* integrate the order section button onclick */}
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;
