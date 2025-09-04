"use client" // Necessário para usar hooks

import { ArrowLeft } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

export default function FineloQuizStep13() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Função para lidar com a seleção e passar TODOS os parâmetros adiante
  const handleSelection = (tradingFear: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("trading_fear", tradingFear) // Adiciona a resposta desta página
    router.push(`/step14?${params.toString()}`) // Navega para a próxima com a URL completa
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => router.back()} aria-label="Voltar">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>

          <div className="text-white text-sm">12/18</div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-400 h-1" style={{ width: "66.67%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 max-w-4xl mx-auto min-h-[80vh]">
        <div className="w-full max-w-2xl">
          {/* Question */}
          <div className="text-center mb-12">
            <h1 className="text-white text-4xl font-bold mb-4 text-balance">What scares you the most about trading?</h1>
          </div>

          {/* Options - <Link> substituído por onClick */}
          <div className="w-full max-w-2xl space-y-4">
            <button
              onClick={() => handleSelection("Losing money")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">😡</span>
              <span className="text-lg">Losing money</span>
            </button>

            <button
              onClick={() => handleSelection("Not knowing what to invest in")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">🤯</span>
              <span className="text-lg">Not knowing what to invest in</span>
            </button>

            <button
              onClick={() => handleSelection("Fear of missing out (FOMO)")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">😱</span>
              <span className="text-lg">Fear of missing out (FOMO)</span>
            </button>

            <button
              onClick={() => handleSelection("It's too complicated for me")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">😰</span>
              <span className="text-lg">It's too complicated for me</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
