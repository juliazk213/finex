"use client" // Necessário para usar hooks

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation" // Adicionado useSearchParams

export default function FineloQuizStep28() {
  const router = useRouter()
  const searchParams = useSearchParams() // Adicionado para ler parâmetros existentes
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name.trim()) {
      setError("Please enter your name to continue.")
      return
    }

    setIsLoading(true)
    
    // --- CORREÇÃO APLICADA AQUI ---
    const params = new URLSearchParams(searchParams)
    const formattedName = encodeURIComponent(name.trim())
    params.set("name", formattedName) // Adiciona o nome aos outros parâmetros
    
    router.push(`/step29?${params.toString()}`) // Navega com a URL completa
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
      <div className="flex flex-col items-center justify-center px-4 min-h-[calc(100vh-80px)]">
        <h1 className="text-white text-3xl font-semibold text-center mb-16">What is your name?</h1>

        <form onSubmit={handleContinue} className="w-full max-w-md">
          <div className="mb-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full bg-transparent text-white text-lg py-3 px-0 border-0 border-b-2 border-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
              disabled={isLoading}
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          <button
            type="submit"
            disabled={isLoading || !name.trim()}
            className="bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-12 rounded-lg text-lg transition-colors w-full max-w-md disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {isLoading ? "Saving..." : "CONTINUE"}
          </button>
        </form>
      </div>
    </div>
  )
}
