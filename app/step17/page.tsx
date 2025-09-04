"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Lightbulb, BookOpen, TrendingUp } from "lucide-react"

export default function Step17() {
  const router = useRouter()
  const [selectedTools, setSelectedTools] = useState<string[]>([])

  const tools = [
    {
      id: "tips",
      title: "Regular trading tips and tricks",
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    },
    {
      id: "coach",
      title: "AI Trading Coach",
      icon: <div className="text-2xl">🤖</div>,
    },
    {
      id: "learning",
      title: "Personal Learning Plan",
      icon: <BookOpen className="w-8 h-8 text-green-400" />,
    },
    {
      id: "simulator",
      title: "Virtual risk-free trading simulator",
      icon: <TrendingUp className="w-8 h-8 text-red-400" />,
    },
    {
      id: "strategies",
      title: "Strategies of successful traders",
      icon: <div className="text-2xl">😎</div>,
    },
  ]

  const toggleTool = (toolId: string) => {
    setSelectedTools((prev) => (prev.includes(toolId) ? prev.filter((id) => id !== toolId) : [...prev, toolId]))
  }

  const handleNext = () => {
    router.push("/step18")
  }

  const handleBack = () => {
    router.push("/step16")
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <header className="flex items-center justify-between">
        <button onClick={handleBack} className="text-white hover:text-green-400 transition-colors">
          <ArrowLeft size={24} />
        </button>

        <div className="text-green-400 text-xl font-bold">
          <span className="text-green-400">F</span>inelo
        </div>

        <div className="text-white text-sm">16 / 18</div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-gray-800 h-1 rounded-full my-4">
        <div className="bg-green-400 h-1 rounded-full transition-all duration-300" style={{ width: "88.89%" }}></div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Which tools would you like to have for your trading journey?
          </h1>
          <p className="text-gray-400 text-lg">Choose all that apply</p>
        </div>

        {/* Tools Grid - Simplificado para um único map */}
        <div className="w-full max-w-3xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => toggleTool(tool.id)}
                className={`
                  p-4 rounded-lg border-2 transition-all duration-200 text-left flex items-center gap-4
                  ${
                    selectedTools.includes(tool.id)
                      ? "border-green-400 bg-green-400/10"
                      : "border-gray-700 hover:border-gray-500"
                  }
                `}
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">{tool.icon}</div>
                <span className="text-white font-medium text-base sm:text-lg">{tool.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <div className="w-full max-w-md">
          <button
            onClick={handleNext}
            className="w-full bg-green-400 text-black font-bold py-4 px-8 rounded-lg hover:bg-green-500 transition-colors text-lg"
          >
            NEXT STEP
          </button>
        </div>
      </div>
    </div>
  )
}
