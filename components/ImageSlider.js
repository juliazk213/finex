// components/ImageSlider.js
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div className="flex-shrink-0 w-full" key={index}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={800}
                height={400}
                className="mx-auto object-contain" // object-contain pode ser melhor para screenshots
              /> {/* Certifique-se que esta tag termina com '/>' */}
            </div>
          ))}
        </div>
      </div>
      {/* Botão Esquerda */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        <ChevronLeft size={24} /> {/* Certifique-se que esta tag termina com '/>' */}
      </button>
      {/* Botão Direita */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        <ChevronRight size={24} /> {/* Certifique-se que esta tag termina com '/>' */}
      </button>
      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
          /> /* Note que este button também é auto-fechado com '/>' */
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
