"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation" // Adicionado useSearchParams

export default function FineloQuizStep26() {
  const [email, setEmail] = useState("")
  const [privacyChecked, setPrivacyChecked] = useState(true)
  const [newsletterChecked, setNewsletterChecked] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const router = useRouter()
  const searchParams = useSearchParams() // Adicionado para ler os parâmetros da URL

  const isEmailValid = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/
    return emailRegex.test(email)
  }

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!isEmailValid(email)) {
      setError("Please enter a valid email address.")
      return
    }
    if (!privacyChecked) {
      setError("You must agree to the Privacy Policy to continue.")
      return
    }

    setIsLoading(true)

    // --- CORREÇÃO APLICADA AQUI ---
    // 1. Coleta todos os dados da URL em um objeto
    const quizData = Object.fromEntries(searchParams.entries())

    const webhookUrl = "https://get.flwg.cc/webhook/49e56c7951d9fefe1a82c831185a9b78a2317d3502381595692c62debcde33d2"
    
    // 2. Mescla os dados do quiz com os dados do formulário atual
    const dataToSend = {
      email: email,
      newsletter_opt_in: newsletterChecked,
      ...quizData, // Adiciona todos os outros dados do quiz (goal, target, etc.)
      tag: "finelo - usuario criado",
      event: "Usuário Criado",
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      })

      if (!response.ok) {
        throw new Error("Failed to submit data. Please try again.")
      }
      
      console.log("Webhook successful:", await response.json());
      
      // 3. Adiciona o e-mail aos parâmetros da URL antes de navegar
      const params = new URLSearchParams(searchParams)
      params.set("email", email)
      router.push(`/step27?${params.toString()}`)

    } catch (err: any) {
      console.error("Webhook error:", err)
      setError(err.message || "An unexpected error occurred.")
    } finally {
      setIsLoading(false)
    }
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
      <div className="flex flex-col items-center px-4 max-w-2xl mx-auto py-16">
        <h1 className="text-white text-3xl font-bold text-center mb-12 leading-tight">
          Enter your email to get your <span className="text-green-400">Personal Trading</span>
          <br />
          Challenge!
        </h1>
        <form onSubmit={handleContinue} className="w-full max-w-md">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
              disabled={isLoading}
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="relative flex-shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={privacyChecked}
                  onChange={(e) => setPrivacyChecked(e.target.checked)}
                  className="sr-only"
                />
                <div
                  onClick={() => setPrivacyChecked(!privacyChecked)}
                  className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center ${
                    privacyChecked ? "bg-blue-500 border-blue-500" : "border-gray-400"
                  }`}
                >
                  {privacyChecked && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <label htmlFor="privacy" className="text-gray-300 text-sm cursor-pointer">
                By continuing, you agree and acknowledge our{" "}
                <span className="text-blue-400 underline">Privacy Policy</span>.
              </label>
            </div>
            <div className="flex items-start gap-3">
              <div className="relative flex-shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={newsletterChecked}
                  onChange={(e) => setNewsletterChecked(e.target.checked)}
                  className="sr-only"
                />
                <div
                  onClick={() => setNewsletterChecked(!newsletterChecked)}
                  className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center ${
                    newsletterChecked ? "bg-blue-500 border-blue-500" : "border-gray-400"
                  }`}
                >
                  {newsletterChecked && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <label htmlFor="newsletter" className="text-gray-300 text-sm cursor-pointer">
                I'd like to receive valuable insights, exclusive offers, and the latest news straight to my inbox!
              </label>
            </div>
          </div>
          <div className="bg-green-900/30 border border-green-700 rounded-lg p-4 mb-12 w-full">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🎁</div>
              <p className="text-gray-300 text-sm">
                Make sure your email is valid — don't miss your{" "}
                <span className="text-green-400 font-semibold">BONUS!</span>
              </p>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-12 rounded-lg text-lg transition-colors w-full disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {isLoading ? "Processing..." : "UNLOCK MY BONUS!"}
          </button>
        </form>
      </div>
    </div>
  )
}
