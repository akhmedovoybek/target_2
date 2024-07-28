import React, { useState } from 'react';
import './Search.css'; // Import the CSS file

const Search = ({ data, setSelectedValue }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    const filtered = data.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleItemClick = (item) => {
    setQuery(item);
    setFilteredData([item]);
    setSelectedValue(item); // Update selected value in App component
  };

  return (
    <div className="relative">
    <div className="rounded-2xl shadow-2xl bg-slate-300 p-8 flex flex-col justify-center items-center gap-y-2">
      <h3 className="text-slate-900 font-semibold text-3xl">
        Dream Uni
      </h3>
      <div>
        <div className="relative">
          <input
            value={query}
            type="text"
            className="w-96 pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
            onChange={handleSearch}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0 1 14 0z"
              ></path>
            </svg>
          </div>
        </div>
        <ul className="scrollable-list">
          {filteredData.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Search;
