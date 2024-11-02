"use client"
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaStar, FaUsers, FaCheck, FaHeart } from 'react-icons/fa';
import member1 from '../../images/member1.jpg';
import member2 from '../../images/member5.jpg';
import member3 from '../../images/member4.png';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="relative flex items-center justify-center h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Fuel Your Fitness, Transform Your Life</h1>
          <p className="text-md md:text-lg">At Susan protein Suppliers, we’re committed to delivering top-quality protein products crafted to power your goals.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-md md:text-lg text-gray-600">Founded on the belief that everyone deserves quality, clean nutrition, [Your Brand Name] strives to help you reach your full potential. We create premium protein products that are both effective and delicious, using only the finest ingredients.</p>
      </section>

      <section className="bg-gray-100 py-8 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Feature icon={<FaCheck />} title="Quality Ingredients" description="We source only the best to ensure purity and effectiveness." />
            <Feature icon={<FaHeart />} title="Delicious Flavors" description="Our unique flavors make protein enjoyable and easy to incorporate into your daily life." />
            <Feature icon={<FaStar />} title="Scientifically-Backed" description="Each product is designed by experts to support performance and recovery." />
            <Feature icon={<FaUsers />} title="Customer-Centric Service" description="From our lab to your doorstep, our commitment is your satisfaction." />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
        <p className="text-md md:text-lg text-gray-600">Our team of nutritionists, scientists, and fitness enthusiasts is dedicated to creating protein products that inspire and empower you.</p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <TeamMember name="Susan Shrestha" role="Nutrition Expert" image={member1} />
          <TeamMember name="Samikshya Tiwari" role="Product Developer" image={member2} />
          <TeamMember name="Nabin Dhami" role="Customer Support Lead" image={member3} />
        </div>
      </section>

      <section className="bg-gray-100 py-8 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <p className="text-md md:text-lg text-gray-600">Integrity, quality, and transparency are the core values that shape everything we do. We’re here to make a positive difference in your journey towards health and fitness.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">What Our Customers Say</h2>
        <p className="text-md md:text-lg text-gray-600">Real people, real results.</p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <Testimonial name="Amrita" text="The best protein powder I’ve ever tried! Helps me recover faster and tastes amazing!" />
          <Testimonial name="Sudipa" text="Highly recommend! The flavors are awesome, and it’s super effective." />
          <Testimonial name="Anusha" text="Finally a protein that tastes great without all the fillers!" />
        </div>
      </section>
    </div>
  );
};

const Feature: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="w-full sm:w-1/2 md:w-1/4 max-w-xs px-4 py-6 bg-white shadow-md rounded-lg mb-4">
    <div className="text-4xl text-purple-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TeamMember: React.FC<{ name: string; role: string; image: StaticImageData }> = ({ name, role, image }) => (
  <div className="w-full sm:w-1/2 md:w-1/4 max-w-xs px-4 py-6 bg-white shadow-md rounded-lg text-center mb-4">
    <Image src={image} alt={`${name}'s photo`} width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

const Testimonial: React.FC<{ name: string; text: string }> = ({ name, text }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 max-w-xs px-4 py-6 bg-white shadow-md rounded-lg text-center mb-4">
    <p className="text-gray-600 mb-4">"{text}"</p>
    <h3 className="text-lg font-semibold text-purple-600">{name}</h3>
  </div>
);

export default About;
