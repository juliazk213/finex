"use client" // Necessário para usar hooks

import { useRouter, useSearchParams } from "next/navigation" // Adicionado useSearchParams

export default function FineloQuizStep18() {
  const router = useRouter()
  const searchParams = useSearchParams() // Adicionado para ler os parâmetros da URL

  // A função agora repassa todos os parâmetros existentes para a próxima página
  const handleContinue = () => {
    router.push(`/step19?${searchParams.toString()}`)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col p-4">
      {/* Header */}
      <header className="flex items-center justify-center py-4">
        <div className="text-green-400 text-2xl sm:text-3xl font-bold">
          <span className="text-green-400">F</span>inelo
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">
          {/* Right Side - Trading Chart Visualization (Aparece primeiro no mobile) */}
          <div className="flex-1 max-w-lg order-first lg:order-none">
            <img
              src="/trading-chart-dark.webp"
              alt="Trading chart with buy and sell indicators"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Left Side - Text Content (Centralizado no mobile) */}
          <div className="flex-1 max-w-lg text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Get the Right Tools to Trade with Confidence!
            </h1>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              Why start trading unprepared? We provide everything you need—expert tips, AI coaching, personalized
              learning, and risk-free simulations. No more guessing—just clear, step-by-step guidance to level up your
              trading journey.
            </p>
          </div>
        </div>
      </main>

      {/* Continue Button */}
      <footer className="flex justify-center py-4">
        <div className="w-full max-w-md">
          <button
            onClick={handleContinue}
            className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            CONTINUE
          </button>
        </div>
      </footer>
    </div>
  )
}
