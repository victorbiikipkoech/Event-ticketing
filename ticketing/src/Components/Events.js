import React, { useState } from 'react';
import eventData from './eventData';

const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  const handleSearch = () => {
    const filtered = eventData.filter(event =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleReset = () => {
    setSearchQuery('');
    setFilteredEvents([]);
  };

  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-4 mt-20">
      <div className="relative flex items-center w-full mb-4">
        <input
          type="text"
          placeholder="Search by event name"
          className="w-4/6 px-5 py-2  ml-40 border rounded-l-md focus:outline-none"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md ml-2"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded-md ml-2"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {(filteredEvents.length > 0 ? filteredEvents : eventData).map(event => (
        <div key={event.id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={event.image} alt={event.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">{event.name}</div>
            <p className="text-white text-base">{event.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{event.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
