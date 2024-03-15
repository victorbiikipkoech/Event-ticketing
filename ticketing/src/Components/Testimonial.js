import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import John_Morgan from '../images/John_Morgan.jpg';
import Ellie_Anderson from '../images/Ellie_Anderson.jpg';
import Nia_Adebayo from '../images/Nia_Adebayo.jpg';
import Rigo_Louie from '../images/Rigo_Louie.jpg';
import Mia_Williams from '../images/Mia_Williams.jpg';
import Footer from './Footer';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const generateRandomReview = () => {
    const adjectives = ['Amazing', 'Incredible', 'Fantastic', 'Awesome', 'Wonderful'];
    const nouns = ['event', 'experience', 'opportunity', 'occasion', 'gathering'];
    const verbs = ['enjoyed', 'loved', 'appreciated', 'cherished', 'embraced'];
    const adverbs = ['very', 'extremely', 'highly', 'truly', 'immensely'];

    const getRandomWord = (arr) => arr[Math.floor(Math.random() * arr.length)];

    return `${getRandomWord(adjectives)} ${getRandomWord(nouns)}! ${getRandomWord(verbs)} it ${getRandomWord(adverbs)}.`;
  };


  const data = [
    {
      name: `James Kin`,
      img: John_Morgan,
      review: generateRandomReview(),
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    },
    {
      name: `Ellie Mike`,
      img: Ellie_Anderson,
      review: generateRandomReview(),
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    },
    {
      name: `Maurine Wam`,
      img: Nia_Adebayo,
      review: generateRandomReview(),
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    },
    {
      name: `Rigo luis`,
      img: Rigo_Louie,
      review: generateRandomReview(),
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    },
    {
      name: `Diko Milliams`,
      img: Mia_Williams,
      review: generateRandomReview(),
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    },
  ];

  return (
    <div className='w-3/4 m-auto mt-28'>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
              <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <div className="flex justify-center gap-4">
                  <a href={d.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a href={d.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href={d.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    
    </div>
  );
}

export default Testimonial;