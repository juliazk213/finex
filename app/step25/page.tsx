"use client"

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation' // Importa useRouter para navegação

// Lista de depoimentos para o carrossel
const testimonials = [
  {
    author: "Neil Chase",
    title: "The experience is topnotch",
    text: "“The material offered has taught me various aspects of trading via a website or app effectively. The content is very straightforward and accurate. Most importantly, it's simple to grasp, particularly for newcomers just beginning to explore trading strategies.”",
  },
  {
    author: "Damian Paton",
    title: "Great insights...",
    text: "“The information provided here, especially trading insights, has truly been a revelation for me. It feels like a dream come true, as I've longed to connect with this level of knowledge for a while.”",
  },
  {
    author: "Liam Stanford",
    title: "Awesome investment...",
    text: "“Incredible! Finelo has given me enhanced insights into trading, and I'm really enjoying the process of learning more about trading strategies and challenges.”",
  },
]

export default function FineloQuizStep25() {
  const [progress, setProgress] = useState(0)
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [loadingComplete, setLoadingComplete] = useState(false)
  const router = useRouter() // Inicializa o hook useRouter

  useEffect(() => {
    // Tempo total de progresso: 35 segundos = 35000 ms
    // Para ir de 0 a 100 em 35 segundos, precisamos de 100 passos.
    // Intervalo de cada passo: 35000 ms / 100 passos = 350 ms
    // No seu código, você definiu 250ms, o que fará o carregamento mais rápido (25 segundos).
    // Se quiser 35 segundos exatos, mantenha 350ms.
    // Usei 250ms como no seu último código, para manter a consistência, mas comentei a explicação.
    const progressInterval = 180 // ms (250ms * 100 passos = 25 segundos. Se quiser 35s, mude para 350ms)

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          setLoadingComplete(true) // Define que o carregamento foi completado
          router.push('/step26') // Redireciona para a página /step26
          return 100
        }
        return prev + 1
      })
    }, progressInterval)

    // Timer para o carrossel de depoimentos (a cada 5 segundos)
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Troca de depoimento a cada 5 segundos

    return () => {
      clearInterval(progressTimer)
      clearInterval(testimonialTimer)
    }
  }, [router]) // Adicione router como dependência para useEffect

  const currentTestimonial = testimonials[currentTestimonialIndex]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <div></div>
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center px-4 max-w-4xl mx-auto py-12">
        {/* Progress Circle */}
        <div className="relative w-32 h-32 mb-8">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle cx="60" cy="60" r="50" stroke="rgb(55, 65, 81)" strokeWidth="8" fill="none" />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="rgb(34, 197, 94)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 50}`}
              strokeDashoffset={`${2 * Math.PI * 50 * (1 - progress / 100)}`}
              className="transition-all duration-100 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">{progress}%</span>
          </div>
        </div>

        <p className="text-gray-300 text-center mb-16">Creating your personal challenge...</p>

        {/* Social Proof Section */}
        <div className="text-center mb-8">
          <h2 className="text-green-400 text-3xl font-bold mb-2">1 million+ people</h2>
          <p className="text-white text-xl">have chosen Finelo</p>
        </div>

        {/* Testimonial Card (Carrossel) */}
        <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full min-h-[250px] flex flex-col justify-between">
          {/* Stars */}
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-green-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <h3 className="text-white font-semibold mb-3">{currentTestimonial.title}</h3>

          <p className="text-gray-300 text-sm mb-4 flex-grow">
            {currentTestimonial.text}
          </p>

          <p className="text-white font-medium text-right">{currentTestimonial.author}</p>
        </div>
      </div>
    </div>
  )
}
