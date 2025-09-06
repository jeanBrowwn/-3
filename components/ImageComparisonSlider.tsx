
import React, { useState, useRef, useEffect } from 'react';

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
}

export const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };
  
  return (
    <div ref={containerRef} className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-2xl select-none group">
      <img
        src={afterImage}
        alt="After"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div
        className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute top-0 bottom-0 bg-white w-1 cursor-ew-resize opacity-50 group-hover:opacity-100 transition-opacity"
        style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
      ></div>

      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute top-0 left-0 w-full h-full cursor-ew-resize opacity-0"
        aria-label="Image Comparison Slider"
      />
       <div 
        className="slider-thumb absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      ></div>
    </div>
  );
};
