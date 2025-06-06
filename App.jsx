import React from 'react';
import Sidebar from './Sidebar';
import Playlist from './Playlist';

const App = () => (
  <div className="flex h-screen">
    <Sidebar />
    <main className="flex-1 p-4 bg-gray-100">
      <Playlist />
    </main>
  </div>
);

export default App;
