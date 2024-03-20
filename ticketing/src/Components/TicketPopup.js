import React from 'react';

const TicketPopup = ({ eventName, ticketType, numTickets, totalAmount, onClose, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md h-4/5 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
        <p className="mb-2">You are about to purchase {numTickets} {ticketType} ticket(s) for {eventName} at a total cost of ${totalAmount}.</p>
        <p className="mb-4">Please confirm your purchase.</p>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleConfirm}>Confirm</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TicketPopup;
