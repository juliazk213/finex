"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ImageSliderProps {
  images: string[]
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Muda a imagem a cada 3 segundos

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Container da imagem */}
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Finelo app overview ${currentIndex + 1}`}
          width={415}
          height={205}
          className="mx-auto transition-opacity duration-500"
        />

        {/* Botões de navegação */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          ←
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          →
        </button>
      </div>

      {/* Indicadores de pontos */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-lime-400" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
