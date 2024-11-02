"use client";

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_xphu1gl', 'template_fvrmvzo', form.current!, 'hOgYAZ27ebGWnPFme')
      .then(() => {
        setIsSent(true);
        setFormData({ user_name: '', user_email: '', message: '' }); 
        setTimeout(() => setIsSent(false), 3000); 
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Have any questions? We'd love to hear from you! Fill out the form below to get in touch with us.
      </p>
      
    
      {isSent && (
        <div className="text-center mb-6">
          <p className="bg-green-100 text-green-700 py-2 px-4 rounded-lg inline-block animate-fade-in">
            Message sent successfully!
          </p>
        </div>
      )}
      
      <form ref={form} onSubmit={sendEmail} className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input 
            required
            type="text" 
            name="user_name" 
            value={formData.user_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
            placeholder="Your Name" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input 
            type="email" 
            name="user_email"
            required
            value={formData.user_email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
            placeholder="Your Email" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
            rows={4}
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="text-center">
          <button 
            type="submit" 
            className="bg-indigo-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-400 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
