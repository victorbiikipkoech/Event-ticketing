import React, { useState } from 'react';
import AddToCalendar from 'react-add-to-calendar'; // Import 'react-add-to-calendar' if you have installed it

const EventPopup = ({ event, onClose }) => {
  // State for ticket information
  const [eventName, setEventName] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [numTickets, setNumTickets] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Handlers for ticket information changes
  const handleTicketTypeChange = (event) => {
    setTicketType(event.target.value);
    switch (event.target.value) {
      case 'VVIP':
        setTicketPrice(100); 
        break;
      case 'VIP':
        setTicketPrice(75); 
        break;
      case 'Regular':
        setTicketPrice(50); 
        break;
      default:
        setTicketPrice(0);
    }
  };

  const handleNumTicketsChange = (event) => {
    setNumTickets(parseInt(event.target.value));
  };

  const calculateTotalAmount = () => {
    setTotalAmount(numTickets * ticketPrice);
  };

  // Define calendar event
  const calendarEvent = {
    title: event.name,
    description: event.description,
    location: event.venue,
    startTime: new Date(event.startDate),
    endTime: new Date(event.endDate)
  };

  return (
    <div className="fixed top-0 left-0 w-full h-4/5 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md">
        <img src={event.image} alt={event.name} className="w-full h-auto rounded-md mb-4" />
        <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
        <p className="mb-2"><strong>Venue:</strong> {event.venue}</p>
        <p className="mb-2"><strong>Start Date:</strong> {event.startDate}</p>
        <p className="mb-2"><strong>End Date:</strong> {event.endDate}</p>
        <p className="mb-2"><strong>Time:</strong> {event.time}</p>
        <p><strong>Number of People:</strong> {event.capacity}</p>
        
        {/* Ticket Payment Form */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Ticket Payment</h3>
          <form className="space-y-4">
            <div>
              <label className="block">
                <span className="text-gray-700">Event Name:</span>
                <input
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
            </div>
            <div>
              <label className="block">
                <span className="text-gray-700">Ticket Type:</span>
                <select
                  value={ticketType}
                  onChange={handleTicketTypeChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="VVIP">VVIP</option>
                  <option value="VIP">VIP</option>
                  <option value="Regular">Regular</option>
                </select>
              </label>
            </div>
            <div>
              <label className="block">
                <span className="text-gray-700">Number of Tickets:</span>
                <input
                  type="number"
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
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Summary:</h4>
            <p>Event Name: {eventName}</p>
            <p>Ticket Type: {ticketType}</p>
            <p>Number of Tickets: {numTickets}</p>
            <p>Total Amount: ksh.{totalAmount}</p>
          </div>
        </div>
        {/* End Ticket Payment Form */}

        <div className="flex justify-end mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={onClose}>
            Close
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;
