import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FineloQuizStep4() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col p-4">
      {/* Header with Progress */}
      <header className="flex items-center justify-between">
        <Link href="/step3">
          <ArrowLeft className="w-6 h-6 text-white" />
        </Link>
        <div className="text-green-400 text-xl font-bold">
          <span className="text-green-400">F</span>inelo
        </div>
        <div className="text-white text-sm">2/18</div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-gray-800 h-1 rounded-full my-4">
        <div className="bg-green-400 h-1 rounded-full" style={{ width: "11.11%" }}></div>
      </div>


      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">What is your main goal?</h1>
          </div>

          {/* Goal Options */}
          <div className="space-y-4">
            <Link href="/step5" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 sm:p-6 rounded-lg text-left transition-colors flex items-center gap-4">
                <span className="text-2xl">💰</span>
                <span className="text-base sm:text-lg">Grow wealth</span>
              </button>
            </Link>
            <Link href="/step5" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 sm:p-6 rounded-lg text-left transition-colors flex items-center gap-4">
                <span className="text-2xl">⚡</span>
                <span className="text-base sm:text-lg">Passive income</span>
              </button>
            </Link>
            <Link href="/step5" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 sm:p-6 rounded-lg text-left transition-colors flex items-center gap-4">
                <span className="text-2xl">🚀</span>
                <span className="text-base sm:text-lg">Financial independence</span>
              </button>
            </Link>
            <Link href="/step5" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 sm:p-6 rounded-lg text-left transition-colors flex items-center gap-4">
                <span className="text-2xl">😎</span>
                <span className="text-base sm:text-lg">Be my own boss</span>
              </button>
            </Link>
            <Link href="/step5" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 sm:p-6 rounded-lg text-left transition-colors flex items-center gap-4">
                <span className="text-2xl">🏖️</span>
                <span className="text-base sm:text-lg">Retire wealthy</span>
              </button>
            </Link>
            <Link href="/step5" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 sm:p-6 rounded-lg text-left transition-colors flex items-center gap-4">
                <span className="text-2xl">🌍</span>
                <span className="text-base sm:text-lg">Travel the world</span>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
