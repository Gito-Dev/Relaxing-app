import React from 'react';

const Sidebar = () => {
  return (
    <ul className="fixed top-1/2 left-4 transform -translate-y-1/2 flex flex-col space-y-8 z-10">
      <li className="group relative flex items-center justify-center w-4 h-4 transition-all duration-200 ease-in-out cursor-pointer bg-white rounded-full hover:w-6 hover:h-6">
        <span className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 text-white text-xs px-2 py-1 rounded-md">Rain</span>
      </li>
      <li className="group relative flex items-center justify-center w-4 h-4 transition-all duration-200 ease-in-out cursor-pointer bg-white rounded-full hover:w-6 hover:h-6">
        <span className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 text-white text-xs px-2 py-1 rounded-md">Sun</span>
      </li>
      <li className="group relative flex items-center justify-center w-4 h-4 transition-all duration-200 ease-in-out cursor-pointer bg-white rounded-full hover:w-6 hover:h-6">
        <span className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 text-white text-xs px-2 py-1 rounded-md">Cloud</span>
      </li>
    </ul>
  );
};

export default Sidebar;
