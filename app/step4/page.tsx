"use client" // Necessário para usar hooks

import { ArrowLeft } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

export default function FineloQuizStep4() {
  const router = useRouter()
  const searchParams = useSearchParams() // Usado para manter parâmetros anteriores (como o nome)

  // Função que constrói a URL e navega
  const handleSelection = (goalValue: string) => {
    // 1. Cria um novo objeto de parâmetros baseado nos que já existem na URL
    const params = new URLSearchParams(searchParams)
    
    // 2. Adiciona ou atualiza o parâmetro 'goal' com a nova seleção
    params.set("goal", goalValue)

    // 3. Navega para o próximo passo com TODOS os parâmetros (antigos + o novo)
    router.push(`/step5?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col p-4">
      <header className="flex items-center justify-between">
        <button onClick={() => router.back()} aria-label="Voltar">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="text-green-400 text-xl font-bold">
          <span className="text-green-400">F</span>inelo
        </div>
        <div className="text-white text-sm">2/18</div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-gray-800 h-1 rounded-full my-4">
        <div className="bg-green-400 h-1 rounded-full" style={{ width: "11.11%" }}></div>
      </div>

      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">What is your main goal?</h1>
          </div>

          {/* Goal Options - Agora usando onClick */}
          <div className="space-y-4">
            <button onClick={() => handleSelection('Grow wealth')} className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 sm:p-6 rounded-lg text-left transition-colors flex items-center gap-4">
              <span className="text-2xl">💰</span>
              <span className="text-base sm:text-lg">Grow wealth</span>
            </button>
            <button onClick={() => handleSelection('Passive income')} className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 sm:p-6 rounded-lg text-left transition-colors flex items-center gap-4">
              <span className="text-2xl">⚡</span>
              <span className="text-base sm:text-lg">Passive income</span>
            </button>
            <button onClick={() => handleSelection('Financial independence')} className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 sm:p-6 rounded-lg text-left transition-colors flex items-center gap-4">
              <span className="text-2xl">🚀</span>
              <span className="text-base sm:text-lg">Financial independence</span>
            </button>
            <button onClick={() => handleSelection('Be my own boss')} className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 sm:p-6 rounded-lg text-left transition-colors flex items-center gap-4">
              <span className="text-2xl">😎</span>
              <span className="text-base sm:text-lg">Be my own boss</span>
            </button>
            <button onClick={() => handleSelection('Retire wealthy')} className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 sm:p-6 rounded-lg text-left transition-colors flex items-center gap-4">
              <span className="text-2xl">🏖️</span>
              <span className="text-base sm:text-lg">Retire wealthy</span>
            </button>
            <button onClick={() => handleSelection('Travel the world')} className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 sm:p-6 rounded-lg text-left transition-colors flex items-center gap-4">
              <span className="text-2xl">🌍</span>
              <span className="text-base sm:text-lg">Travel the world</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
