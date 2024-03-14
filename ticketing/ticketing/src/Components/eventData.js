import EventImage1 from '../images/colorfest.jpg';
import EventImage2 from '../images/halloween2.jpg';
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
    style: { width: '300px', height: '350px', objectFit: 'cover' }
  },
  {
    id: 2,
    name: 'HALLOWEEN',
    description: 'Embrace the chills at Halloween Fest: haunted houses, live spooky performances, and a grand costume contest await! Grab your tickets for a night of frightful delight.',
    date: '2024-04-15',
    image: EventImage2,
    style: { width: '300px', height: '350px', objectFit: 'cover' }
  },
  {
    id: 3,
    name: 'RALLY',
    description: 'Gear up for the thrill at the Ultimate Rally Event: high-speed races and automotive showcases! Secure your spot for adrenaline-packed action.',
    date: '2024-05-10',
    image: EventImage3,
    style: { width: '300px', height: '350px', objectFit: 'cover' }
  },
  {
    id: 4,
    name: 'MUSIC',
    description: 'Join the beat at Music Extravaganza: a night of live performances from top artists! Get your tickets for an unforgettable journey through sound.',
    date: '2024-06-10',
    image: EventImage4,
    style: { width: '300px', height: '350px', objectFit: 'cover' }
  },
  {
    id: 5,
    name: 'CULTURAL FEST',
    description: 'Explore the world at Global Culture Fest: music, dance, art, and culinary wonders await! Secure your tickets for a vibrant celebration of diversity.',
    date: '2024-06-10',
    image: EventImage5,
    style: { width: '300px', height: '350px', objectFit: 'cover' }
  },
  {
    id: 6,
    name: 'STREET FOOD FEST',
    description: 'Feast at the Street Food Festival: A culinary journey of global tastes and local delights! Secure your tickets for an epicurean adventure.',
    date: '2024-07-10',
    image: EventImage6,
    style: { width: '300px', height: '350px', objectFit: 'cover' }
  },
];

export default eventData;
