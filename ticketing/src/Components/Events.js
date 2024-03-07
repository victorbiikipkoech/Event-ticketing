import React from 'react';
import EventImage1 from '../images/colorfest.jpg';
import EventImage2 from '../images/halloween.jpg';
import EventImage3 from '../images/rally.jpg';
import EventImage4 from '../images/music.jpg';
import EventImage5 from '../images/Culture.jpeg';
import EventImage6 from '../images/food.jpg';

const eventData = [
  {
    id: 1,
    name: 'COLORFEST',
    description: 'Dive into Color Fest - a vibrant celebration of music, art, and colorful fun! Secure your ticket for an unforgettable day of joy and unity.',
    date: '2024-03-10',
    image: EventImage1,
    // Additional style for Event 1 image
    style: { width: '300px', height: '350px', objectFit: 'cover' }
  },
  {
    id: 2,
    name: 'HALLOWEEN',
    description: 'Embrace the chills at Halloween Fest: haunted houses, live spooky performances, and a grand costume contest await! Grab your tickets for a night of frightful delight.',
    date: '2024-04-15',
    image: EventImage2,
    // Additional style for Event 2 image
    style: { width: '300px', height: '350px', objectFit: 'contain' }
  },
  {
    id: 3,
    name: 'RALLY',
    description: 'Gear up for the thrill at the Ultimate Rally Event: high-speed races and automotive showcases! Secure your spot for adrenaline-packed action.',
    date: '2024-05-10',
    image: EventImage3,
    // Additional style for Event 3 image
    style: { width: '300px', height: '350px', objectFit: 'cover' }
  },
  {
    id: 4,
    name: 'MUSIC',
    description: 'Join the beat at Music Extravaganza: a night of live performances from top artists! Get your tickets for an unforgettable journey through sound.',
    date: '2024-06-10',
    image: EventImage4,
    // Additional style for Event 4 image
    style: { width: '300px', height: '350px', objectFit: 'cover' }
  },
  {
    id: 5,
    name: 'CULTURAL FEST',
    description: 'Explore the world at Global Culture Fest: music, dance, art, and culinary wonders await! Secure your tickets for a vibrant celebration of diversity.',
    date: '2024-06-10',
    image: EventImage5,
    // Additional style for Event 3 image
    style: { width: '300px', height: '350px', objectFit: 'cover' }
  },
  {
    id: 6,
    name: 'STREET FOOD FEST',
    description: 'Feast at the Street Food Festival: A culinary journey of global tastes and local delights! Secure your tickets for an epicurean adventure.',
    date: '2024-07-10',
    image: EventImage6,
    // Additional style for Event 3 image
    style: { width: '300px', height: '350px', objectFit: 'cover' }
  },
];

const Events = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-4 mt-20">
      {eventData.map((event) => (
        <div key={event.id} className="max-w-sm rounded overflow-hidden shadow-lg">
          {/* Apply additional style for each image */}
          <img className="w-full" src={event.image} alt={event.name} style={event.style} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">{event.name}</div>
            <p className="text-white text-base">
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