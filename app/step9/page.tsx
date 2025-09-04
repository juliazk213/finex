"use client" // Necessário para usar hooks

import { useRouter, useSearchParams } from "next/navigation"

export default function FineloQuizStep9() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Função para lidar com a seleção e passar TODOS os parâmetros adiante
  const handleSelection = (confidenceLevel: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("financial_confidence", confidenceLevel) // Adiciona a resposta desta página
    router.push(`/step10?${params.toString()}`) // Navega para a próxima com a URL completa
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Navigation */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
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

          <div className="text-gray-400 text-sm">6/18</div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-400 h-1" style={{ width: "33.33%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 max-w-4xl mx-auto min-h-[80vh]">
        <div className="w-full max-w-2xl">
          <h1 className="text-white text-3xl font-bold mb-12 text-center text-balance">
            How confident are you about your financial future?
          </h1>

          {/* Answer Options - <Link> substituído por onClick */}
          <div className="space-y-4">
            <button
              onClick={() => handleSelection("Very confident")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">😊</span>
              <span className="text-lg">Very confident</span>
            </button>

            <button
              onClick={() => handleSelection("Somewhat confident")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">😐</span>
              <span className="text-lg">Somewhat confident</span>
            </button>

            <button
              onClick={() => handleSelection("Not confident at all")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">😟</span>
              <span className="text-lg">Not confident at all</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
