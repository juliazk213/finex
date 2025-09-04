"use client"

import { useRouter } from "next/navigation"
import Image from "next/image" // Importa o componente Image

export default function FineloQuizStep27() {
  const router = useRouter()

  const handleContinue = () => {
    // Navigate to next step
    router.push("/step28")
  }

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
      <div className="flex flex-col items-center px-4 max-w-4xl mx-auto py-16">
        {/* Title */}
        <h1 className="text-white text-2xl font-semibold text-center mb-8">
          Your trading skills level
        </h1>

        {/* Imagem Centralizada */}
        <div className="w-full max-w-2xl mx-auto mb-12">
          <Image
            src="/progresse-curve.png"
            alt="Gráfico ilustrativo do nível de habilidades de trading"
            width={700} // Largura original da imagem para manter a proporção
            height={350} // Altura original da imagem para manter a proporção
            className="w-full h-auto" // Classes para tornar a imagem responsiva
          />
          <p className="text-gray-500 text-xs text-center mt-2">
            This chart is for illustrative purposes only
          </p>
        </div>

        {/* Bottom Section */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl font-bold mb-2">Your 28-Day Trading Challenge</h2>
          <p className="text-white text-3xl font-bold">is ready!</p>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-12 rounded-lg text-lg transition-colors w-full max-w-md"
        >
          CONTINUE
        </button>
      </div>
    </div>
  )
}
