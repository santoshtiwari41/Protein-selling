'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import carousel1 from '../images/carousel1.jpg';
import carousel2 from '../images/carousel2.jpg';
import carousel3 from '../images/carousel3.jpg';

const slides = [
  {
    img: carousel1,
    title: 'Whey Protein Isolate',
    description: '',
  },
  {
    img: carousel2,
    title: 'Vegan Protein Blend',
    description: '',
  },
  {
    img: carousel3,
    title: 'Casein Protein',
    description: '',
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden max-h-[70vh]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex flex-col items-center">
            <Image
              src={slide.img}
              alt={slide.title}
              layout="responsive"
              width={1920}
              height={1080}
              className="object-cover w-full h-[10vh]" 
              priority={index === currentIndex}
            />
            <div className="absolute bottom-6 left-0 right-0 text-center text-white px-4">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p className="text-sm mt-1">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        ›
      </button>

      <div className="flex justify-center mt-2 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
}
