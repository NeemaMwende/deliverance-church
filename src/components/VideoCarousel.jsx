import React, { useState, useEffect } from 'react';
import './VideoCarousel.css';

const videos = [
  'https://tenor.com/view/hillsong-worship-christian-music-praise-worship-praise-and-worship-gif-23185397',
  'path/to/video2.mp4',
  'path/to/video3.mp4'
  // Add more video paths as needed
];

const VideoCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleWatchClick = () => {
    // Implement the logic for what happens when "Watch Me" is clicked
    alert('Watch Me button clicked!');
  };

  return (
    <div className="video-carousel">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`video-container ${index === currentVideoIndex ? 'active' : ''}`}
        >
          <video src={video} autoPlay muted loop className="video" />
          <div className="watch-button" onClick={handleWatchClick}>
            Watch Me
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCarousel;
