'use client'
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import PostModal from './PostModal';

const EnhancedSearchBar = ({ img}) => {

  

  return (
    <div className="w-full p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
        <img className="w-16 h-16 rounded-full shadow-md border-2 border-white" src={img} alt="Profile" />
        <div className="relative flex-grow max-w-3xl w-full">
          <input

            type="text"
            placeholder="Post your story..........."
            className="w-full h-12 pl-12 pr-4 ring text-gray-700 bg-white rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
            onClick={()=>document.getElementById('my_modal_1').showModal()}
          />
          <Search className="absolute left-4  top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      
      </div>
    
    </div>
  );
};
    
export default EnhancedSearchBar;