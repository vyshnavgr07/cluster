import React from 'react';
import { Search } from 'lucide-react';

const EnhancedSearchBar = ({ img }) => {

  return (
    <div className="w-full p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
        <img className="w-16 h-16 rounded-full shadow-md border-2 border-white" src={img} alt="Profile" />
        <div className="relative flex-grow max-w-3xl w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-12 pl-12 pr-4 text-gray-700 bg-white rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <button className="hidden sm:block bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition-colors duration-300 ease-in-out">
          Advanced
        </button>
      </div>
    </div>
  );
};

export default EnhancedSearchBar;