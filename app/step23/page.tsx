"use client" // Necessário para usar hooks

import { useRouter, useSearchParams } from "next/navigation"

export default function FineloQuizStep23() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Função para lidar com a seleção e passar TODOS os parâmetros adiante
  const handleSelection = (timeSpent: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("time_spent_goal", timeSpent) // Adiciona a resposta desta página
    router.push(`/step24?${params.toString()}`) // Navega para a próxima com a URL completa
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
          <div className="text-white text-sm">18/20</div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-500 h-1" style={{ width: "100%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center px-4 max-w-4xl mx-auto py-12">
        <h1 className="text-white text-3xl font-bold text-center mb-12 text-balance">
          How much time are you ready to spend to achieve your goal?
        </h1>

        {/* Options - <Link> substituído por onClick */}
        <div className="w-full max-w-2xl space-y-4 mb-12">
          <button
            onClick={() => handleSelection("5 min/day")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4"
          >
            <span className="text-2xl">👍</span>
            <span className="text-lg">5 min/day</span>
          </button>

          <button
            onClick={() => handleSelection("10 min/day")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4"
          >
            <span className="text-2xl">👌</span>
            <span className="text-lg">10 min/day</span>
          </button>

          <button
            onClick={() => handleSelection("15 min/day")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4"
          >
            <span className="text-2xl">🤟</span>
            <span className="text-lg">15 min/day</span>
          </button>

          <button
            onClick={() => handleSelection("20 min/day")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4"
          >
            <span className="text-2xl">💪</span>
            <span className="text-lg">20 min/day</span>
          </button>
        </div>
      </div>
    </div>
  )
}
