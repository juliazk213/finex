"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FineloQuiz() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <header className="flex items-center justify-between bg-black">
        <div className="w-6"></div>
        {/* Texto menor no mobile (text-2xl), maior em telas sm+ (sm:text-3xl) */}
        <div className="text-green-400 text-2xl sm:text-3xl font-bold">
          <span className="text-green-400">F</span>
          inelo
        </div>
        <Menu className="w-6 h-6 text-white" />
      </header>

      {/* Badges */}
      <div className="flex flex-row gap-4 justify-center items-stretch mt-8 mb-8">
        {/* Badge 1 com Ícone */}
        {/* Padding e gap menores no mobile, maiores em sm+ */}
        <div className="flex-1 bg-[#1A2E26] border border-[#2A4A3A] rounded-lg p-2 sm:p-3 flex items-center justify-center gap-2 sm:gap-3">
          <Image
            src="/icon-choice.webp"
            alt="Users' Choice Icon"
            width={32}
            height={32}
            className="w-6 h-6 sm:w-8 sm:h-8" // Ícone menor no mobile
          />
          <div className="text-left">
            <p className="text-xs text-white font-bold leading-tight">
              1M+ USERS' CHOICE
            </p>
            <p className="text-[10px] sm:text-xs text-gray-400 leading-tight">
              Learned new skills
            </p>
          </div>
        </div>
        {/* Badge 2 com Ícone */}
        <div className="flex-1 bg-[#1A2E26] border border-[#2A4A3A] rounded-lg p-2 sm:p-3 flex items-center justify-center gap-2 sm:gap-3">
          <Image
            src="/icon-star.webp"
            alt="Trustpilot Star Icon"
            width={32}
            height={32}
            className="w-6 h-6 sm:w-8 sm:h-8" // Ícone menor no mobile
          />
          <div className="text-left">
            <p className="text-xs text-white font-bold leading-tight">
              RATED ON TRUSTPILOT
            </p>
            <p className="text-[10px] sm:text-xs text-gray-400 leading-tight">
              4.6 Satisfaction Score
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        {/* Trading Chart Section */}
        <div className="relative mb-8 w-full max-w-2xl">
          <img
            src="/founder-finelo-chart.webp"
            alt="Founder of Finelo with trading chart showing 130.81 value and performance metrics"
            className="w-full h-auto"
          />
        </div>

        {/* Challenge Title */}
        <div className="text-center mb-8">
          {/* Título menor no mobile (text-3xl), e vai aumentando em telas maiores */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-normal leading-tight">
            28-DAY TRADING
            <br />
            CHALLENGE
          </h1>
          {/* Subtítulo menor no mobile (text-sm), maior em sm+ */}
          <p className="text-gray-400 text-sm sm:text-base font-semibold tracking-wider">
            HAVE YOU EVER TRADED BEFORE?
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row gap-4 mb-8 w-full max-w-md">
          <Link href="/step2" className="flex-1">
            {/* Texto do botão menor no mobile (text-base), maior em sm+ */}
            <Button className="w-full bg-[#9EFF00] hover:bg-[#8ee000] text-black font-bold py-5 px-6 rounded-lg text-base sm:text-lg">
              YES ›
            </Button>
          </Link>
          <Link href="/step2" className="flex-1">
            <Button className="w-full bg-[#9EFF00] hover:bg-[#8ee000] text-black font-bold py-5 px-6 rounded-lg text-base sm:text-lg">
              NO ›
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-xs max-w-md">
          <p className="mb-2">
            By proceeding, you agree with{" "}
            <Link href="/terms" className="underline">
              Terms and Conditions
            </Link>
            ,{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            ,{" "}
            <Link href="/subscription" className="underline">
              Subscription Terms
            </Link>
          </p>
          <p>FINELO LIMITED, Limassol, Cyprus</p>
        </div>
      </div>
    </div>
  )
}
