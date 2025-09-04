"use client" // Necessário para usar hooks

import { ArrowLeft } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

export default function FineloQuizStep6() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Função para lidar com a seleção e passar TODOS os parâmetros adiante
  const handleSelection = (financialSituation: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("financial_situation", financialSituation) // Adiciona a resposta desta página
    router.push(`/step7?${params.toString()}`) // Navega para a próxima com a URL completa
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Progress */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => router.back()} aria-label="Voltar">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
          <div className="text-white text-sm">4/18</div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-400 h-1" style={{ width: "22.22%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 max-w-4xl mx-auto min-h-[80vh]">
        {/* Question */}
        <div className="w-full max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-white text-4xl font-bold mb-4 text-balance">
              How do you feel about your
              <br />
              financial situation?
            </h1>
          </div>

          {/* Financial Situation Options - <Link> substituído por onClick */}
          <div className="space-y-4">
            <button
              onClick={() => handleSelection("I'm comfortable")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">😊</span>
              <span className="text-lg">I'm comfortable</span>
            </button>
            <button
              onClick={() => handleSelection("I would like to have more stability")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">😐</span>
              <span className="text-lg">I would like to have more stability</span>
            </button>
            <button
              onClick={() => handleSelection("I'm struggling to meet my financial goals")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">😟</span>
              <span className="text-lg">I'm struggling to meet my financial goals</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
