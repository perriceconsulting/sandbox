import React from 'react';

const Sidebar = () => (
  <nav className="w-48 bg-spotify-black text-white p-4">
    <ul className="space-y-2">
      <li><a className="text-spotify hover:text-white" href="#home">Home</a></li>
      <li><a className="text-spotify hover:text-white" href="#search">Search</a></li>
      <li><a className="text-spotify hover:text-white" href="#library">Your Library</a></li>
    </ul>
  </nav>
);

export default Sidebar;
