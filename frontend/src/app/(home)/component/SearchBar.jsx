import React from 'react'

const SearchBar = () => {
  return (
    <div className="w-full p-2  ">
      <div className="relative max-w-[800px] mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-14 pl-12 pr-4 text-white bg-slate-500 rounded-2xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </div>
  )
}

export default SearchBar    