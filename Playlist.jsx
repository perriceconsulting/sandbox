import React from 'react';
import Track from './Track';

const tracks = [
  {
    id: 1,
    title: 'Sample Track 1',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 2,
    title: 'Sample Track 2',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  }
];

const Playlist = () => (
  <div className="playlist">
    {tracks.map(track => (
      <Track key={track.id} {...track} />
    ))}
  </div>
);

export default Playlist;
