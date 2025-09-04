"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

export default function FineloQuizStep5() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Função para lidar com a seleção e passar todos os parâmetros para a próxima página
  const handleSelection = (incomeSource: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("incomeSource", incomeSource) // Adiciona a resposta desta página
    router.push(`/step6?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Progress */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          {/* Botão de voltar agora usa o histórico do navegador */}
          <button onClick={() => router.back()} aria-label="Voltar">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
          <div className="text-white text-sm">3/18</div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-400 h-1" style={{ width: "16.67%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 max-w-4xl mx-auto min-h-[80vh]">
        {/* Question */}
        <div className="w-full max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-white text-4xl font-bold mb-4 text-balance">
              What income source are
              <br />
              you most familiar with?
            </h1>
          </div>

          {/* Income Source Options - Agora usam onClick para navegação dinâmica */}
          <div className="space-y-4">
            <button
              onClick={() => handleSelection("Full-time job")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">💼</span>
              <span className="text-lg">Full-time job</span>
            </button>
            <button
              onClick={() => handleSelection("Passive income")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">📊</span>
              <span className="text-lg">Passive income</span>
            </button>
            <button
              onClick={() => handleSelection("Other")}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4"
            >
              <span className="text-2xl">🤔</span>
              <span className="text-lg">Other</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
