import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="wrapper">
      <header className="header">
      <nav className="bg-white shadow-lg">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
  
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          aria-label="Main menu"
          aria-expanded="false"
        >
      
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

  
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
    
        <div className="">
          <a href="#" className="flex items-center">
        
            <span className="text-gray-900 text-lg font-semibold">FindUni</span>
          </a>
        </div>

    
        <div className="hidden sm:block sm:ml-6">
          <div className="flex">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">Home</Link>
            <Link to="/universities" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">Universitetlar</Link>
            <Link to="/filter" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">Aqlli Filtr</Link>
            <Link to="/programs" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">Dasturlar</Link>
          </div>
        </div>
      </div>

  
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    
      <button
          type="button"
          className="inline-flex items-center p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          aria-label="Toggle dark mode"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-gray-500">
            <path d="M21 12.79c-.017-4.518-3.672-8.18-8.19-8.187-4.518.006-8.188 3.67-8.188 8.187 0 4.518 3.67 8.188 8.188 8.188 4.518 0 8.19-3.67 8.19-8.188z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

      </header>
    </div>
  );
}

export default Header;
