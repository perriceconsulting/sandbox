import React, { useRef, useState } from 'react';

const Track = ({ title, src }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="flex items-center mb-4">
      <span>{title}</span>
      <button className="ml-4 px-2 py-1 bg-spotify text-white rounded" onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</button>
      <audio ref={audioRef} src={src} />
    </div>
  );
};

export default Track;
