import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FineloQuizStep3() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Progress */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <Link href="/step2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
          <div className="text-white text-sm">1/18</div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-400 h-1" style={{ width: "5.56%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-between px-4 max-w-6xl mx-auto min-h-[80vh]">
        {/* Left Side - Question */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-8">
            <h1 className="text-white text-4xl font-bold mb-4 text-center">What is your age?</h1>
            <p className="text-gray-300 text-lg text-center">We will personalize your Trading Challenge based on your answers</p>
          </div>

          {/* Age Options */}
          <div className="space-y-4">
            <Link href="/step4" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-lg text-left transition-colors">
                18-24
              </button>
            </Link>
            <Link href="/step4" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-lg text-left transition-colors">
                25-34
              </button>
            </Link>
            <Link href="/step4" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-lg text-left transition-colors">
                35-44
              </button>
            </Link>
            <Link href="/step4" className="block">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-lg text-left transition-colors">
                45+
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Founder Image */}
        <div className="hidden lg:block flex-1 max-w-md mr-[-100px] mb-[-220px]">
          <img src="/founder-with-phone.webp" alt="Founder of Finelo" className="w-full h-auto" />
        </div>
      </div>
    </div>
  )
}
