'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi'; 
import { BiSearch } from 'react-icons/bi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-gradient-to-r from-purple-500 to-indigo-500 h-34 shadow-lg z-50' : 'bg-gradient-to-r from-purple-500 to-indigo-500 h-18'
      }`}
      style={{
        zIndex: isScrolled ? 50 : 10,
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="logo flex items-center space-x-3">
          <span className="text-3xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">
            My Website
          </span>
        </div>

        {/* Enhanced Search Bar with White Gradient */}
        <div className="hidden md:flex items-center space-x-2 mr-6 bg-gradient-to-r from-white to-gray-200 rounded-full p-1 shadow-lg w-[40rem]">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none rounded-l-full"
          />
          <button className="text-gray-600 p-2 rounded-full hover:bg-gray-300 transition-colors duration-300">
            <BiSearch size={29} />
          </button>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        {/* Navigation Links with Color & Size Animation */}
        <nav className="hidden md:flex items-center space-x-8 text-lg">
          {['Home', 'About', 'Contact'].map((text, index) => (
            <Link
              key={index}
              href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
              className="relative px-4 py-2 transition-all duration-300 ease-in-out group transform hover:text-indigo-300 hover:scale-110"
            >
              <span className="text-white transition-colors duration-300 ease-in-out">{text}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav
            className={`fixed top-0 z-50 left-0 h-full w-64 bg-white transform ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out md:hidden`}
          >
            <ul className="flex flex-col space-y-4 text-center text-lg py-4 text-black">
              {['Home', 'About', 'Contact'].map((text, index) => (
                <li key={index}>
                  <Link
                    href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                    className="block py-2"
                    onClick={toggleMenu}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
