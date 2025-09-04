"use client" // Necessário para usar hooks

import { useRouter, useSearchParams } from "next/navigation"

export default function FineloQuizStep22() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Função para lidar com a seleção e passar TODOS os parâmetros adiante
  const handleSelection = (target: string) => {
    // 1. Cria um novo objeto de parâmetros baseado em TUDO que já existe na URL
    const params = new URLSearchParams(searchParams)
    // 2. Adiciona ou atualiza o parâmetro 'target' com a nova seleção
    params.set("target", target)
    // 3. Navega para o próximo passo com TODOS os parâmetros
    router.push(`/step23?${params.toString()}`)
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
          <div className="text-white text-sm">17/18</div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-500 h-1" style={{ width: "94.44%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center px-4 max-w-4xl mx-auto py-12">
        <h1 className="text-white text-3xl font-bold text-center mb-4 text-balance">
          Is there something special you wish to achieve?
        </h1>
        <p className="text-gray-300 text-center mb-12 max-w-2xl">
          You are more likely to reach your goal if you have something important to aim for
        </p>

        {/* Options - <Link> substituído por onClick */}
        <div className="w-full max-w-2xl space-y-4 mb-12">
          <button
            onClick={() => handleSelection("Buy a house")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4"
          >
            <span className="text-2xl">🏠</span>
            <span className="text-lg">Buy a house</span>
          </button>
          <button
            onClick={() => handleSelection("A perfect wedding")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4"
          >
            <span className="text-2xl">💍</span>
            <span className="text-lg">A perfect wedding</span>
          </button>
          <button
            onClick={() => handleSelection("Vacation")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4"
          >
            <span className="text-2xl">✈️</span>
            <span className="text-lg">Vacation</span>
          </button>
          <button
            onClick={() => handleSelection("Buy a car")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4"
          >
            <span className="text-2xl">🚗</span>
            <span className="text-lg">Buy a car</span>
          </button>
          <button
            onClick={() => handleSelection("Worry-free retirement")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4"
          >
            <span className="text-2xl">🥂</span>
            <span className="text-lg">Worry-free retirement</span>
          </button>
          <button
            onClick={() => handleSelection("Other")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4"
          >
            <span className="text-2xl">💬</span>
            <span className="text-lg">Other</span>
          </button>
        </div>
      </div>
    </div>
  )
}
