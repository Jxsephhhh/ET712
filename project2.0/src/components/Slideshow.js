import React, { useState, useEffect } from 'react';

export default function Slideshow({ images }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  // Auto-play slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);

  return (
    <div className="slideshow">
      <button onClick={prev} className="slide-btn">‹</button>
      <img src={images[current]} alt={`Slide ${current + 1}`} className="slide-img" />
      <button onClick={next} className="slide-btn">›</button>
    </div>
  );
}