"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FineloQuizStep14() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <Link href="/step13">
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>

          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>

          <div className="text-white text-sm">13/18</div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-400 h-1" style={{ width: "72.22%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 max-w-4xl mx-auto min-h-[80vh]">
        <div className="w-full max-w-2xl">
          {/* Question */}
          <div className="text-center mb-12">
            <h1 className="text-white text-4xl font-bold mb-4 text-balance">
              Which trading topic interests you the most?
            </h1>
          </div>

          {/* Options */}
          <div className="w-full max-w-2xl space-y-4">
            <Link href="/step15" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
                <span className="text-2xl">⏰</span>
                <span className="text-lg">Right time to sell and buy</span>
              </button>
            </Link>

            <Link href="/step15" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
                <span className="text-2xl">🔍</span>
                <span className="text-lg">Different asset types</span>
              </button>
            </Link>

            <Link href="/step15" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
                <span className="text-2xl">⚖️</span>
                <span className="text-lg">Risks and rewards</span>
              </button>
            </Link>

            <Link href="/step15" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
                <span className="text-2xl">🤔</span>
                <span className="text-lg">I'm not sure yet</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
