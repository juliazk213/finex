"use client"

import Link from "next/link"

export default function FineloQuizStep20() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <Link href="/step19" className="text-white hover:text-green-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
          <div className="text-white text-sm">15/18</div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-400 h-1" style={{ width: "83.33%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 max-w-2xl mx-auto py-12 min-h-[80vh]">
        <h1 className="text-white text-3xl font-bold text-center mb-12 text-balance">
          What would you do with extra income from trading?
        </h1>

        <div className="w-full space-y-4">
          <Link href="/step21" className="block">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
              <span className="text-2xl">💳</span>
              <span className="text-lg">Paying off bills or loans</span>
            </button>
          </Link>

          <Link href="/step21" className="block">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
              <span className="text-2xl">🎯</span>
              <span className="text-lg">Investing and growing it</span>
            </button>
          </Link>

          <Link href="/step21" className="block">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
              <span className="text-2xl">🏖️</span>
              <span className="text-lg">Enjoying life experiences</span>
            </button>
          </Link>

          <Link href="/step21" className="block">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
              <span className="text-2xl">💰</span>
              <span className="text-lg">Saving for unexpected expenses</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
