"use client" // Necessário para usar hooks

import { useRouter, useSearchParams } from "next/navigation"

export default function FineloQuizStep21() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Função para lidar com a seleção e passar TODOS os parâmetros adiante
  const handleSelection = (readiness: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("readiness_level", readiness) // Adiciona a resposta desta página
    router.push(`/step22b?${params.toString()}`) // Navega para a próxima com a URL completa
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => router.back()}
            aria-label="Voltar"
            className="text-white hover:text-green-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
          <div className="text-white text-sm">16/18</div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-400 h-1" style={{ width: "88.89%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 max-w-2xl mx-auto py-12 min-h-[80vh]">
        <h1 className="text-white text-3xl font-bold text-center mb-12 text-balance">Rate your readiness to trade</h1>

        <div className="w-full space-y-4">
          <button
            onClick={() => handleSelection("All set")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
          >
            <span className="text-2xl">🤩</span>
            <span className="text-lg">All set</span>
          </button>

          <button
            onClick={() => handleSelection("Ready")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
          >
            <span className="text-2xl">😛</span>
            <span className="text-lg">Ready</span>
          </button>

          <button
            onClick={() => handleSelection("Somewhat Ready")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
          >
            <span className="text-2xl">🤔</span>
            <span className="text-lg">Somewhat Ready</span>
          </button>

          <button
            onClick={() => handleSelection("Not Ready")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
          >
            <span className="text-2xl">😬</span>
            <span className="text-lg">Not Ready</span>
          </button>
        </div>
      </div>
    </div>
  )
}
