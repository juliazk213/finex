"use client" // 1. O arquivo inteiro precisa ser um Componente Cliente

import Link from "next/link"
import Image from "next/image"
// 2. Importe 'Suspense' do React e 'useSearchParams' do Next.js
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

// 3. Crie um componente interno SÓ para ler e exibir o objetivo.
//    Isso isola a lógica que depende da URL.
function GoalDisplay() {
  const searchParams = useSearchParams()
  const userGoal = searchParams.get('goal') || 'Your Goal'
  
  return (
    <span className="text-white font-semibold">{userGoal}</span>
  )
}

// Seu componente de página principal
export default function FineloQuizStep24() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col p-4">
      {/* Header */}
      <header className="flex items-center justify-center py-4">
        <div className="text-green-400 text-2xl sm:text-3xl font-bold">
          <span className="text-green-400">F</span>inelo
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-lg mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Your Personal 28-Day Trading Challenge
          </h1>

          <p className="text-gray-300 mb-2">
            Based on your answers, we expect you to
          </p>
          <p className="text-gray-300 mb-8">
            gain necessary trading skills of
          </p>

          <h2 className="text-white text-2xl font-bold mb-12">
            <span className="underline">Confident Trader</span> by Nov, 2025
          </h2>

          {/* Goal Section */}
          <div className="mb-8">
            <div className="bg-gray-800 px-4 py-2 rounded-lg inline-block">
              <span className="text-white text-sm">Your goal: </span>
              {/* 4. Envolva o componente dinâmico com Suspense. */}
              {/*    Isso corrige o erro de build e o piscar do conteúdo padrão. */}
              <Suspense fallback={<span className="font-semibold">...</span>}>
                <GoalDisplay />
              </Suspense>
            </div>
          </div>

          <div className="w-full max-w-md my-12 mx-auto">
            <Image
              src="/chart.png"
              alt="Chart showing progress from Beginner to Confident Trader"
              width={500}
              height={250}
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>

      {/* Continue Button */}
      <footer className="flex justify-center py-4">
        <Link href="/step25" className="w-full max-w-md">
          <button className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            CONTINUE
          </button>
        </Link>
      </footer>
    </div>
  )
}
