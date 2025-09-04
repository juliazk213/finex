"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function FineloQuizStep29() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [isScratching, setIsScratching] = useState(false)
  const [showModal, setShowModal] = useState(false)
  // 1. Novo estado para controlar a visibilidade do prêmio
  const [isPrizeVisible, setIsPrizeVisible] = useState(false)

  const nameFromUrl = searchParams.get("name") || "promo"
  const couponCode = `${nameFromUrl.toLowerCase().replace(/\s+/g, "")}_set25`

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    const size = 230
    canvas.width = size
    canvas.height = size

    const gradient = ctx.createLinearGradient(0, 0, size, size)
    gradient.addColorStop(0, "#d1d5db")
    gradient.addColorStop(0.5, "#9ca3af")
    gradient.addColorStop(1, "#d1d5db")
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size, size)

    ctx.fillStyle = "#4b5563"
    ctx.font = "bold 24px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("SCRATCH HERE", size / 2, size / 2)
  }, [])

  const scratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    let clientX, clientY

    if ("touches" in e) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    const x = clientX - rect.left
    const y = clientY - rect.top

    ctx.globalCompositeOperation = "destination-out"
    ctx.beginPath()
    ctx.arc(x, y, 25, 0, 2 * Math.PI)
    ctx.fill()

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data
    let transparent = 0
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparent++
    }
    const percentage = (transparent / (pixels.length / 4)) * 100
    if (percentage > 50 && !showModal) {
      setShowModal(true)
    }
  }

  // 2. Atualizado para ativar a visibilidade do prêmio na primeira interação
  const handleStartScratching = () => {
    setIsScratching(true)
    setIsPrizeVisible(true) // <-- Torna o prêmio visível no DOM
  }
  const handleEndScratching = () => setIsScratching(false)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isScratching) scratch(e)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    if (isScratching) scratch(e)
  }

  const handleClaimDiscount = () => {
    router.push("/step30")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <div></div>
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center px-4 min-h-[calc(100vh-80px)]">
        <h1 className="text-white text-3xl font-semibold text-center mb-4">Scratch & Save on Your</h1>
        <h1 className="text-green-400 text-3xl font-semibold text-center mb-8">Personal Trading Challenge!</h1>
        <p className="text-white text-lg text-center mb-8">
          Reveal your surprise deal <span className="text-xl">🎁</span>
        </p>

        <div className="relative w-[230px] h-[230px]">
          <canvas
            ref={canvasRef}
            // 3. Efeito de piscar (animate-pulse) removido
            className="absolute top-0 left-0 z-10 rounded-3xl cursor-pointer touch-none"
            onMouseDown={handleStartScratching}
            onMouseUp={handleEndScratching}
            onMouseLeave={handleEndScratching}
            onMouseMove={handleMouseMove}
            onTouchStart={handleStartScratching}
            onTouchEnd={handleEndScratching}
            onTouchMove={handleTouchMove}
          />
          
          {/* 4. O prêmio agora é renderizado condicionalmente */}
          {isPrizeVisible && (
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="aspect-square w-[230px] overflow-hidden rounded-3xl bg-yellow-400 text-black">
                <div className="flex h-[50%] items-end justify-center pb-6">
                  <div className="text-[64px] font-semibold leading-[100%]">50</div>
                  <div className="text-[28px] leading-[100%]">%<div className="inline-block align-baseline">off</div></div>
                </div>
                <div className="relative">
                  <div className="absolute left-[-16px] top-[-16px] h-[32px] w-[32px] rounded-full bg-black"></div>
                  <div className="border-b border-dashed border-gray-700"></div>
                  <div className="absolute right-[-16px] top-[-16px] h-[32px] w-[32px] rounded-full bg-black"></div>
                </div>
                <div className="px-4 pb-10 pt-6">
                  <p className="text-center text-base font-semibold tracking-wider">{couponCode}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
          <div className="bg-gray-800 rounded-t-2xl p-6 w-full max-w-md mx-4 mb-0 animate-slide-up">
            <div className="text-center">
              <div className="text-4xl mb-4">🤩</div>
              <h2 className="text-white text-2xl font-bold mb-4">Woo hoo!</h2>
              <p className="text-white text-lg mb-2">You won a promo code with</p>
              <p className="text-green-400 text-2xl font-bold mb-4">50% off</p>
              <p className="text-gray-300 text-sm mb-6">It will be applied automatically</p>
              <button
                onClick={handleClaimDiscount}
                className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-6 rounded-lg transition-colors"
              >
                CLAIM MY DISCOUNT
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
