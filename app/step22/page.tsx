"use client"

import Link from "next/link"

export default function FineloQuizStep22() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <Link href="/step21" className="text-white hover:text-green-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
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

        {/* Options */}
        <div className="w-full max-w-2xl space-y-4 mb-12">
          <Link href="/step23" className="block">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4">
              <span className="text-2xl">🏠</span>
              <span className="text-lg">Buy a house</span>
            </button>
          </Link>

          <Link href="/step23" className="block">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4">
              <span className="text-2xl">💍</span>
              <span className="text-lg">A perfect wedding</span>
            </button>
          </Link>

          <Link href="/step23" className="block">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4">
              <span className="text-2xl">✈️</span>
              <span className="text-lg">Vacation</span>
            </button>
          </Link>

          <Link href="/step23" className="block">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4">
              <span className="text-2xl">🚗</span>
              <span className="text-lg">Buy a car</span>
            </button>
          </Link>

          <Link href="/step23" className="block">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4">
              <span className="text-2xl">🥂</span>
              <span className="text-lg">Worry-free retirement</span>
            </button>
          </Link>

          <Link href="/step23" className="block">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors flex items-center gap-4">
              <span className="text-2xl">💬</span>
              <span className="text-lg">Other</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
