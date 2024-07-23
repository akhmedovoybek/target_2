// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
          <p>123 Example Street, City, Country</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="mb-4 md:mb-0 flex-col flex">
          <Link to='/' className='hover:underline'>About</Link>
          <Link to='universities' className='hover:underline'>Services</Link>
          <Link to='/' className='hover:underline'>Contact</Link>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0a10 10 0 110 20 10 10 0 010-20zm2.363 4.393c.673 0 1.222.55 1.222 1.222v8.77c0 .672-.55 1.222-1.222 1.222H7.637c-.672 0-1.222-.55-1.222-1.222V5.615c0-.672.55-1.222 1.222-1.222h4.726zm-2.363 12.698a4.99 4.99 0 01-3.54-1.463 4.987 4.987 0 01-1.463-3.54 4.99 4.99 0 011.463-3.54 4.987 4.987 0 013.54-1.463 4.99 4.99 0 013.54 1.463 4.987 4.987 0 011.463 3.54 4.99 4.99 0 01-1.463 3.54 4.987 4.987 0 01-3.54 1.463z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0a10 10 0 110 20 10 10 0 010-20zm2.5 5h-5c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h5c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5zm-1.5 3h-2v6h2v-6z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0a10 10 0 110 20 10 10 0 010-20zm2.51 3.005H7.49C6.67 3.005 6 3.674 6 4.495v11.01c0 .82.67 1.49 1.49 1.49h4.02c.82 0 1.49-.67 1.49-1.49V4.495c0-.82-.67-1.49-1.49-1.49zm.49 2.255l-3.625 2.505 3.625 2.31V5.26z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
