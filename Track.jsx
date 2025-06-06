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
    <div className="track">
      <span>{title}</span>
      <button onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</button>
      <audio ref={audioRef} src={src} />
    </div>
  );
};

export default Track;
