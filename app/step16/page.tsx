"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Image from "next/image" // 1. Importar o Image de next/image

export default function Step16() {
  const router = useRouter()
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([])

  // 2. Atualizar a estrutura de dados para usar caminhos de imagem
  const companies = [
    { name: "Netflix", image: "/stocks/netflix.webp" },
    { name: "Tesla", image: "/stocks/tesla.webp" },
    { name: "Apple", image: "/stocks/apple.webp" },
    { name: "Amazon", image: "/stocks/amazon.webp" },
    { name: "McDonalds", image: "/stocks/mac.webp" },
    { name: "Shell", image: "/stocks/shell.webp" },
    { name: "Exxon", image: "/stocks/exxon.webp" },
    { name: "Microsoft", image: "/stocks/microsoft.webp" },
    { name: "Google", image: "/stocks/google.webp" },
    { name: "Pfizer", image: "/stocks/pfizer.webp" },
  ]

  const toggleCompany = (company: string) => {
    setSelectedCompanies((prev) => (prev.includes(company) ? prev.filter((c) => c !== company) : [...prev, company]))
  }

  const handleNext = () => {
    router.push("/step17")
  }

  const handleBack = () => {
    router.push("/step15")
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

        <div className="text-white text-sm">15 / 18</div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-gray-800 h-1 rounded-full my-4">
        <div className="bg-green-400 h-1 rounded-full transition-all duration-300" style={{ width: "83.33%" }}></div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Which companies are you most interested in?</h1>
          <p className="text-gray-400 text-lg">Choose all that apply</p>
        </div>

        {/* Companies Grid */}
        <div className="w-full max-w-3xl mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {companies.map((company) => (
              <button
                key={company.name}
                onClick={() => toggleCompany(company.name)}
                className={`
                  flex items-center gap-3 p-3 rounded-lg border-2 transition-all duration-200
                  ${
                    selectedCompanies.includes(company.name)
                      ? "border-green-400 bg-green-400/10"
                      : "border-gray-700 hover:border-gray-500"
                  }
                `}
              >
                {/* 3. Substituir o div do ícone pelo componente Image */}
                <Image
                  src={company.image}
                  alt={`${company.name} logo`}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover" // rounded-full para manter o formato circular
                />
                <span className="text-white font-medium text-sm sm:text-base">{company.name}</span>
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
