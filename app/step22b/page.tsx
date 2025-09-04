"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

// 1. Componente renomeado para FineloQuizStep22b
export default function FineloQuizStep22b() {
  const router = useRouter()

  const handleContinue = () => {
    // 2. Redirecionamento ajustado para /step22
    router.push("/step22")
  }

  const profileData = [
    {
      icon: "/pagina23/motivation.webp",
      label: "Motivation",
      value: "High",
    },
    {
      icon: "/pagina23/potential.webp",
      label: "Potential",
      value: "High",
    },
    {
      icon: "/pagina23/income.webp",
      label: "Income",
      value: "Fit for trading",
    },
    {
      icon: "/pagina23/knowledge.webp",
      label: "Knowledge",
      value: "Intermediate",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col p-4">
      {/* Header */}
      <header className="flex items-center justify-center py-4">
        <div className="text-green-400 text-2xl sm:text-3xl font-bold">
          <span className="text-green-400">F</span>inelo
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            Here's your Trading profile
          </h1>

          {/* Readiness Score Section */}
          <div className="mb-8 max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-lg font-semibold text-gray-300">Readiness score</h2>
              <span className="border border-gray-500 rounded-md px-3 py-1 text-sm">
                Result: Perfect
              </span>
            </div>
            <div className="relative">
              <div className="relative h-2 w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full">
                <div className="absolute top-[-35px] left-2/3 -translate-x-1/2">
                  <div className="bg-gray-700 text-white text-sm rounded-md px-3 py-1 whitespace-nowrap">
                    Moderate
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-700" />
                </div>
                <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-4 border-gray-800" />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>LOW</span>
                <span>INTERMEDIATE</span>
                <span>HIGH</span>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-[#1E1E1E] rounded-lg p-4 flex items-start gap-4 my-8 max-w-3xl mx-auto">
            <span className="text-2xl mt-1">👍</span>
            <div>
              <h3 className="font-bold text-white">Impressive score to succeed in trading</h3>
              <p className="text-gray-400 text-sm">
                In 2024, global hedge funds achieved an impressive average return of 12.75%. With the right
                strategies and knowledge, you can benefit from trading too.
              </p>
            </div>
          </div>

          {/* Attributes and Image Section - SEMPRE LADO A LADO */}
          <div className="flex flex-row items-end justify-center gap-4">
            
            {/* Left Column: Attributes List */}
            <div className="w-7/12">
              <div className="space-y-3 md:space-y-4">
                {profileData.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 md:gap-4">
                    <div className="p-2 rounded-lg bg-white">
                      <Image 
                        src={item.icon} 
                        alt={`${item.label} icon`} 
                        width={24} 
                        height={24} 
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs md:text-sm">{item.label}</p>
                      <p className="font-bold text-white text-sm md:text-base">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Man's Image */}
            <div className="relative w-5/12 h-64 sm:h-80 lg:h-96">
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/pagina23/ed_phone_profile.webp"
                  alt="Finelo Founder on the phone"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="bottom"
                />
              </div>
            </div>
            
          </div>
        </div>
      </main>

      {/* Continue Button */}
      <footer className="flex justify-center pt-8 pb-4">
        <div className="w-full max-w-md">
          <button
            onClick={handleContinue}
            className="w-full bg-[#9EFF00] hover:bg-[#8ee000] text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            CONTINUE
          </button>
        </div>
      </footer>
    </div>
  )
}
