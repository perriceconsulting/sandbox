import React from 'react';
import Sidebar from './Sidebar';
import Playlist from './Playlist';

const App = () => (
  <div className="app">
    <Sidebar />
    <main className="content">
      <Playlist />
    </main>
  </div>
);

export default App;
