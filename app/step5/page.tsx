import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FineloQuizStep5() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Progress */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <Link href="/step4">
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
          <div className="text-white text-sm">3/18</div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-400 h-1" style={{ width: "16.67%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 max-w-4xl mx-auto min-h-[80vh]">
        {/* Question */}
        <div className="w-full max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-white text-4xl font-bold mb-4 text-balance">
              What income source are
              <br />
              you most familiar with?
            </h1>
          </div>

          {/* Income Source Options */}
          <div className="space-y-4">
            <Link href="/step6" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
                <span className="text-2xl">💼</span>
                <span className="text-lg">Full-time job</span>
              </button>
            </Link>
            <Link href="/step6" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
                <span className="text-2xl">📊</span>
                <span className="text-lg">Passive income</span>
              </button>
            </Link>
            <Link href="/step6" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
                <span className="text-2xl">🤔</span>
                <span className="text-lg">Other</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
