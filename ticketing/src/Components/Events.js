import React, { useState,useEffect } from 'react';
import Footer from './Footer';
import EventPopup from './EventPopup'; // Import the popup component
import axios from 'axios';

const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [visibleDescription, setVisibleDescription] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null); // State to store the selected event
  const [event, setEvents] = useState([]);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user's company data
        const response = await axios.get('/events');
        setEvents(response.data);
        console.log(response.data);
        
        } catch(error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const handleSearch = () => {
    const filtered = event.filter(event =>
      event.event_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleReset = () => {
    setSearchQuery('');
    setFilteredEvents([]);
    setVisibleDescription({});
  };

  const toggleDescription = id => {
    setVisibleDescription(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Function to handle when "View Event" button is clicked
  const handleViewEvent = event => {
    setSelectedEvent(event);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-center gap-4 mt-28 mb-16"> {/* Increased margin-bottom for more space */}
        <div className="relative flex items-center w-full mb-4">
          <input
            type="text"
            placeholder="Search by event name"
            className="w-4/6 px-5 py-2 ml-40 border rounded-l-md focus:outline-none"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md ml-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {(filteredEvents.length > 0 ? filteredEvents : eventData).map(event => (
          <div key={event.id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-80 h-80 " src={event.image} alt={event.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white text-center">{event.name}</div> {/* Changed text color to white */}
                {visibleDescription[event.id] && (
                  <p className="text-white text-base">{event.description}</p>
                )}
              </div>
              <div className="px-6 pt-4 pb-2 text-center">
                <button
                  className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  onClick={() => handleViewEvent(event)} // Pass the event to the handleViewEvent function
                >
                  View Event
                </button>
              </div>
            </div>
            ))}
            </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <button
              className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
              onClick={() => handleViewEvent(event)}
            >
              View Event
            </button>
          </div>
      
        
        {/* Render the EventPopup component if selectedEvent is not null */}
        {selectedEvent && (
          <EventPopup event={selectedEvent} onClose={handleClosePopup} />
        )}
    
      <Footer />
    </>
  );
};

export default Events;
