"use client" // Necessário para usar hooks

import { ArrowLeft } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

export default function FineloQuizStep11() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Função para lidar com a seleção e passar TODOS os parâmetros adiante
  const handleSelection = (fomoLevel: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("fomo_level", fomoLevel) // Adiciona a resposta desta página
    router.push(`/step12?${params.toString()}`) // Navega para a próxima com a URL completa
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

          <div className="text-white text-sm">10/18</div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-400 h-1" style={{ width: "55.56%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 max-w-4xl mx-auto min-h-[80vh]">
        <div className="w-full max-w-2xl">
          {/* Question */}
          <div className="text-center mb-12">
            <h1 className="text-white text-4xl font-bold mb-4 text-balance mt-3.5">
              Do you feel FOMO (Fear of missing out) when you see others making money?
            </h1>
          </div>

          {/* Options - <Link> substituído por onClick */}
          <div className="w-full max-w-2xl space-y-4">
            <button
              onClick={() => handleSelection("Yes, all the time")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">😱</span>
              <span className="text-lg">Yes, all the time</span>
            </button>

            <button
              onClick={() => handleSelection("Sometimes")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">😐</span>
              <span className="text-lg">Sometimes</span>
            </button>

            <button
              onClick={() => handleSelection("Rarely")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">😔</span>
              <span className="text-lg">Rarely</span>
            </button>

            <button
              onClick={() => handleSelection("Not at all")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">😎</span>
              <span className="text-lg">Not at all</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
