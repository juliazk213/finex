"use client" // Necessário para usar hooks

import { useRouter, useSearchParams } from "next/navigation"

export default function FineloQuizStep15() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Função para navegar para a próxima página, mantendo todos os parâmetros existentes
  const handleContinue = () => {
    router.push(`/step16?${searchParams.toString()}`)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="bg-black">
        <div className="flex items-center justify-center p-4">
          <div className="text-green-400 text-2xl sm:text-3xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">
          {/* Right Side - Phone Mockup (Aparece primeiro no mobile) */}
          <div className="flex-1 max-w-md order-first lg:order-none">
            <img
              src="/finelo-app-explore.webp"
              alt="Finelo App Interface"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Left Side - Text Content (Centralizado no mobile) */}
          <div className="flex-1 max-w-lg text-center lg:text-left">
            <h1 className="text-white text-3xl lg:text-4xl font-bold mb-6 text-balance">
              We've Got You!
            </h1>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              From fundamentals to advanced strategies, we cover it all. Our step-by-step challenge adapts to your
              skills and knowledge, helping you gain confidence and master trading in just a few weeks. Let's make your
              trading journey simple and successful!
            </p>
          </div>
        </div>
      </main>

      {/* Continue Button - <Link> substituído por <button> com onClick */}
      <footer className="flex justify-center p-4">
        <div className="w-full max-w-md">
          <button
            onClick={handleContinue}
            className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-4 px-12 rounded-lg text-lg transition-colors"
          >
            CONTINUE
          </button>
        </div>
      </footer>
    </div>
  )
}
