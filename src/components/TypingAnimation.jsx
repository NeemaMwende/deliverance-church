import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, 100); // Adjust the speed of typing here

    return () => clearInterval(interval);
  }, [text]);

  return <h2 className="typing-animation">{displayedText}</h2>;
};

export default TypingAnimation;
