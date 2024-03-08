import React from 'react';
import EventImage1 from '../images/colorfest.jpg';
import EventImage2 from '../images/halloween.jpg';
import EventImage3 from '../images/food.jpg';
import EventImage4 from '../images/music.jpg';

const eventData = [
  {
    id: 1,
    name: 'Event 1',
    description: 'Description for Event 1',
    date: '2024-03-10',
    image: EventImage1,
  },
  {
    id: 2,
    name: 'Event 2',
    description: 'Description for Event 2',
    date: '2024-04-15',
    image: EventImage2,
  },
  {
    id: 3,
    name: 'Event 3',
    description: 'Description for Event 3',
    date: '2024-05-10',
    image: EventImage3,
  },
  {
    id: 4,
    name: 'Event 4',
    description: 'Description for Event 4',
    date: '2024-06-10',
    image: EventImage4,
  },
];

const Events = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-4 mt-20"> {/* Added mt-20 for top margin */}
      {eventData.map((event) => (
        <div key={event.id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={event.image} alt={event.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">{event.name}</div> {/* Changed text-gray-700 to text-white */}
            <p className="text-white text-base"> {/* Changed text-gray-700 to text-white */}
              {event.description}
            </p>
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
