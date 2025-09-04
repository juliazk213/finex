"use client"

import Link from "next/link"

export default function FineloQuizStep23() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <Link href="/step22" className="text-white hover:text-green-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
          <div className="text-white text-sm">18/18</div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-500 h-1" style={{ width: "100%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center px-4 max-w-4xl mx-auto py-12">
        <h1 className="text-white text-3xl font-bold text-center mb-12 text-balance">
          How much time are you ready to spend to achieve your goal?
        </h1>

        {/* Options */}
        <div className="w-full max-w-2xl space-y-4 mb-12">
          <Link href="/step24" className="block">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4">
              <span className="text-2xl">👍</span>
              <span className="text-lg">5 min/day</span>
            </button>
          </Link>

          <Link href="/step24" className="block">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4">
              <span className="text-2xl">👌</span>
              <span className="text-lg">10 min/day</span>
            </button>
          </Link>

          <Link href="/step24" className="block">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4">
              <span className="text-2xl">🤟</span>
              <span className="text-lg">15 min/day</span>
            </button>
          </Link>

          <Link href="/step24" className="block">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4">
              <span className="text-2xl">💪</span>
              <span className="text-lg">20 min/day</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
