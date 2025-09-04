"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import ImageSlider from "@/components/ImageSlider"
import Image from "next/image"

// --- Ícones para o novo card ---
const PercentIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.533 4.466a5.002 5.002 0 0 0-7.072 7.072L4.467 14.533a5 5 0 0 0 7.072-7.072l2.994-2.995ZM7.5 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12.5 12.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      fill="#8EE054"
    />
  </svg>
)
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.333 4L6 11.333 2.667 8" stroke="#8EE054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)


// --- Componentes Auxiliares para um Código Mais Limpo ---
const images = [
  "/pagina30/finelo_appoverview_en_1-1.jpg",
  "/pagina30/finelo_appoverview_en_2.jpg",
  "/pagina30/finelo_appoverview_en_3.jpg",
  "/pagina30/finelo_appoverview_en_4.jpg",
  "/pagina30/finelo_appoverview_en_5.jpg",
]

const SkillBar = ({ level, label }) => {
  const percentage = level === "Low" ? "20%" : level === "Moderate" ? "50%" : "100%"
  const color = level === "High" ? "bg-green-500" : "bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"

  return (
    <div>
      <p className="text-white text-sm mb-2 font-semibold">{label}</p>
      <div className="w-full h-2 bg-gray-600 rounded-full relative">
        <div className={`h-2 rounded-full ${color}`} style={{ width: percentage }}></div>
        <div
          className="absolute top-1/2 -mt-2 w-4 h-4 rounded-full bg-white border-2 border-gray-900"
          style={{ left: `calc(${percentage} - 8px)` }}
        ></div>
      </div>
      <p className="text-gray-400 text-xs mt-1 capitalize">{level}</p>
    </div>
  )
}

// Componente para os itens da lista "O que você recebe"
const CheckListItem = ({ children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 mt-1">
      <Image src="/pagina30/svgexport-6.png" alt="Checkmark" width={24} height={24} />
    </div>
    <span className="text-white text-lg">{children}</span>
  </div>
)

// --- Componente Principal da Página ---

export default function FineloQuizStep30() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 54 })
  const [selectedPlan, setSelectedPlan] = useState("4-week") // Define o plano popular como padrão
  
  // Lógica para obter o nome e gerar o código de cupom
  const nameFromUrl = searchParams.get("name") || "promo"
  const couponCode = `${nameFromUrl.toLowerCase().replace(/\s+/g, "")}_sep2025` // Formato da imagem de referência
  
  // Lógica para obter goal e target (mantida por enquanto)
  const goalFromUrl = searchParams.get("goal") || "Financial independence"
  const targetFromUrl = searchParams.get("target") || "A perfect wedding"
  

  const subscriptionTerms = {
    "1-week":
      'By clicking "Get My Plan", you agree to automatic subscription renewal to Finelo: first week at €13.86, then €39.99 every 4 weeks (both excluding taxes) until you cancel. You can cancel anytime via support or account settings. See Subscription Terms for details.',
    "4-week":
      'By clicking "Get My Plan", you agree to automatic subscription renewal to Finelo: first 4 weeks at €39.99, then €39.99 every 4 weeks (both excluding taxes) until you cancel. You can cancel anytime via support or account settings. See Subscription Terms for details.',
    "12-week":
      'By clicking "Get My Plan", you agree to automatic subscription renewal to Finelo: first 12 weeks at €79.99, then €79.99 every 12 weeks (both excluding taxes) until you cancel. You can cancel anytime via support or account settings. See Subscription Terms for details.',
  }

  useEffect(() => {
    if (timeLeft.minutes === 0 && timeLeft.seconds === 0) return
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft])

  const formatTime = (time) => time.toString().padStart(2, "0")

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header Fixo */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-green-400 text-2xl font-bold">
            <span className="text-white">F</span>inelo
          </div>
          <a
            href="#pricing"
            className="bg-lime-400 text-black px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-lime-500 transition-colors pulse-animation"
          >
            GET MY PLAN
          </a>
        </div>
      </header>

      <main>
        {/* Seção Hero */}
        <section className="bg-black py-16">
          <div className="container mx-auto px-4 flex flex-row items-stretch justify-center gap-2 md:gap-4">
            <div className="bg-[#1C1C1E] p-3 md:p-6 rounded-2xl w-1/2">
              <p className="text-white text-lg font-semibold mb-4">Now</p>
              <Image src="/pagina30/1-21.webp" alt="Current state" width={330} height={200} className="rounded-lg mb-6" />
              <div className="space-y-4">
                <SkillBar label="Trading skills" level="Moderate" />
                <SkillBar label="Financial confidence" level="Low" />
              </div>
            </div>
            <div className="text-lime-400 text-6xl font-thin hidden md:flex items-center mx-4">→</div>
            <div className="bg-[#1C1C1E] p-3 md:p-6 rounded-2xl w-1/2">
              <p className="text-white text-lg font-semibold mb-4">Goal</p>
              <Image src="/pagina30/2-25.webp" alt="Goal state" width={330} height={200} className="rounded-lg mb-6" />
              <div className="space-y-4">
                <SkillBar label="Trading skills" level="High" />
                <SkillBar label="Financial confidence" level="High" />
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">This is not a guarantee or promise of results.</p>
        </section>

        {/* Seção "Trading is easier" */}
        <section className="bg-lime-400 py-16 text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Trading is easier than you think</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <div className="flex flex-row items-stretch w-full max-w-lg md:max-w-xl gap-4">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_21frYAk7PKWPUKXqvzsGwgLLS80F/cqVWNBNZglh5v4uxkFB9Mc/public/pagina30/Image%202.webp" alt="Man smiling" width={250} height={300} className="rounded-lg w-1/2 object-cover"/>
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_21frYAk7PKWPUKXqvzsGwgLLS80F/v2TFEw_1Dce93all5eiyv2/public/pagina30/SP%20easier%20dark.webp" alt="Daily progress examples" width={300} height={300} className="w-1/2 object-contain"/>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><Image src="/pagina30/easier_emoji.webp" alt="coin" width={24} height={24} /><span>You can start with $20</span></div>
                <div className="flex items-center gap-3"><Image src="/pagina30/easier_emoji.webp" alt="hat" width={24} height={24} /><span>No need for a Finance degree</span></div>
                <div className="flex items-center gap-3"><Image src="/pagina30/easier_emoji.webp" alt="chart" width={24} height={24} /><span>No need to be a market expert</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção "Try Finelo" & Preços */}
        <section id="pricing" className="bg-black py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-white text-3xl font-bold mb-8">Try Finelo and you will:</h2>
            <div className="space-y-4 mb-12 max-w-2xl mx-auto text-left">
              <CheckListItem>Discover different trading strategies</CheckListItem>
              <CheckListItem>Master everything to become an intelligent trader</CheckListItem>
              <CheckListItem>Know key trading terms and rules</CheckListItem>
            </div>
            
            {/* Cards de Objetivo e Target */}
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch mb-8">
                <div className="bg-[#1C1C1E] rounded-xl px-5 py-4 flex flex-row items-center gap-4 w-full sm:w-1/2">
                  <Image src="/pagina30/svgexport-10.png" alt="Goal icon" width={24} height={24} className="flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm leading-tight">Your goal</p>
                    <p className="text-white font-bold text-lg leading-tight">{goalFromUrl}</p>
                  </div>
                </div>
                <div className="bg-[#1C1C1E] rounded-xl px-5 py-4 flex flex-row items-center gap-4 w-full sm:w-1/2">
                  <Image src="/pagina30/svgexport-9.png" alt="Target icon" width={24} height={24} className="flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm leading-tight">Your target</p>
                    <p className="text-white font-bold text-lg leading-tight">{targetFromUrl}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- INÍCIO DA NOVA SEÇÃO DO CÓDIGO PROMOCIONAL --- */}
            <div className="max-w-xl mx-auto mb-10">
              <div className="bg-[#2E392A] rounded-xl p-4 text-left relative">
                {/* Detalhe de recorte na borda */}
                <div className="absolute -top-2 left-1/2 -ml-3 w-6 h-4 bg-black rounded-b-full"></div>
                <div className="absolute -bottom-2 left-1/2 -ml-3 w-6 h-4 bg-black rounded-t-full"></div>
                
                <div className="flex items-center gap-2 mb-3">
                  <PercentIcon />
                  <p className="text-[#8EE054] font-bold">Your promo code is applied!</p>
                </div>

                <div className="bg-black rounded-lg p-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span className="text-white font-semibold">{couponCode}</span>
                  </div>
                  <div className="bg-[#2E392A] rounded-md px-3 py-1 text-center">
                    <p className="text-white font-bold text-xl tracking-wider">
                      {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                    </p>
                    <div className="flex justify-center gap-2 text-xs text-gray-400">
                      <span>minutes</span>
                      <span>seconds</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* --- FIM DA NOVA SEÇÃO --- */}

            {/* Planos de Preços */}
            <div className="flex flex-col gap-4 max-w-xl mx-auto mb-8">
              {/* 1-WEEK PLAN */}
              <div onClick={() => setSelectedPlan("1-week")} className={`bg-[#1C1C1E] rounded-xl p-5 border-2 transition-all cursor-pointer flex items-center justify-between ${selectedPlan === "1-week" ? "border-lime-400" : "border-transparent hover:border-gray-600"}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 ${selectedPlan === "1-week" ? "border-lime-400" : "border-gray-600"} flex items-center justify-center flex-shrink-0`}>
                    {selectedPlan === "1-week" && <div className="w-3 h-3 bg-lime-400 rounded-full"></div>}
                  </div>
                  <div>
                    <h3 className="text-white font-bold">1-WEEK PLAN</h3>
                    <p className="text-gray-400 text-sm">€13.86</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-baseline text-white font-bold"><span className="text-xl">€</span><span className="text-4xl tracking-tighter pr-0.5">1.</span><span className="text-xl font-semibold">98</span></div>
                  <p className="text-gray-400 text-sm -mt-1">per day</p>
                </div>
              </div>
              {/* 4-WEEK PLAN (O mais popular) */}
              <div onClick={() => setSelectedPlan("4-week")} className={`bg-[#1C1C1E] rounded-xl border-2 transition-all cursor-pointer ${selectedPlan === "4-week" ? "border-lime-400" : "border-transparent hover:border-gray-600"}`}>
                <div className="bg-lime-400 text-black text-sm font-bold flex items-center justify-center gap-2 py-2 rounded-t-lg"><span>MOST POPULAR</span></div>
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 ${selectedPlan === "4-week" ? "border-lime-400" : "border-gray-600"} flex items-center justify-center flex-shrink-0`}>
                      {selectedPlan === "4-week" && <div className="w-3 h-3 bg-lime-400 rounded-full"></div>}
                    </div>
                    <div>
                      <h3 className="text-white font-bold">4-WEEK PLAN</h3>
                      <p className="text-gray-400 text-sm">€39.99</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-baseline text-white font-bold"><span className="text-xl">€</span><span className="text-4xl tracking-tighter pr-0.5">1.</span><span className="text-xl font-semibold">43</span></div>
                    <p className="text-gray-400 text-sm -mt-1">per day</p>
                  </div>
                </div>
              </div>
              {/* 12-WEEK PLAN */}
              <div onClick={() => setSelectedPlan("12-week")} className={`bg-[#1C1C1E] rounded-xl p-5 border-2 transition-all cursor-pointer flex items-center justify-between ${selectedPlan === "12-week" ? "border-lime-400" : "border-transparent hover:border-gray-600"}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 ${selectedPlan === "12-week" ? "border-lime-400" : "border-gray-600"} flex items-center justify-center flex-shrink-0`}>
                    {selectedPlan === "12-week" && <div className="w-3 h-3 bg-lime-400 rounded-full"></div>}
                  </div>
                  <div>
                    <h3 className="text-white font-bold">12-WEEK PLAN</h3>
                    <p className="text-gray-400 text-sm">€79.99</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-baseline text-white font-bold"><span className="text-xl">€</span><span className="text-4xl tracking-tighter pr-0.5">0.</span><span className="text-xl font-semibold">95</span></div>
                  <p className="text-gray-400 text-sm -mt-1">per day</p>
                </div>
              </div>
            </div>

            {/* Container principal */}
            <div className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              <div className="flex items-start gap-2">
                <Image src="/pagina30/svgexport-9.png" alt="Info icon" width={16} height={16} className="mt-0.5 flex-shrink-0"/>
                <span className="text-white">People using plan for 3 months achieve twice as many results as for 1 month</span>
              </div>
              <p className="text-xs max-w-lg mx-auto text-slate-200 pt-2 pb-2 mt-1 border-solid border-[0.5px] rounded-sm border-[rgba(43,43,45,1)] pl-1 pr-1">
                {subscriptionTerms[selectedPlan]}
              </p>
              <p className="mt-2 text-xs text-slate-300">*According to a research by Finelo, 2023</p>
            </div>
            
            <button className="bg-lime-400 text-black font-bold py-4 px-8 rounded-lg text-xl mb-6 w-full max-w-md hover:bg-lime-500 transition-colors pulse-animation">
              GET MY PLAN
            </button>

            <div className="flex w-full items-center justify-center mb-4">
              <div className="flex flex-row items-center gap-2 rounded-lg bg-[#F2F9ED] py-1.5 px-3">
                <Image src="/pagina30/svgexport-10.png" alt="Secure payment icon" width={16} height={16} />
                <p className="text-sm font-medium text-[#7ABF4C]">Pay safe & secure</p>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <Image src="/pagina30/payment_methods.webp" alt="Payment methods" width={250} height={25} />
            </div>
            <p className="text-xs max-w-lg mx-auto text-slate-200">
              {"Finelo Limited, Georgiou A, 83, Shop 17, Potamos Germasogeias, 4047, Limassol, the Republic of Cyprus"}
            </p>
          </div>
        </section>

        {/* Seção Garantia */}
        <section className="bg-lime-400 py-16 text-black">
          <div className="container mx-auto px-4 text-center flex flex-col items-center">
            <Image src="/pagina30/svgexport-11.png" alt="Money-Back Guarantee" width={100} height={100} className="mb-6"/>
            <h2 className="text-3xl font-bold mb-4">Money-Back Guarantee</h2>
            <p className="max-w-3xl mx-auto">
              We are so confident in our service that we are ready to offer a full refund within 30 days of your first
              purchase OR before the end of your first subscription period, whichever comes first. Additional terms and
              conditions apply.
              <br /><br />
              For full details, please review our complete refund policy{" "}
              <a href="#" className="underline">here</a>.
            </p>
          </div>
        </section>

        {/* Seção "Access Anywhere" */}
        <section className="bg-black py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-white text-3xl font-bold mb-4">Access Finelo anywhere using your mobile device </h2>
            <ImageSlider images={images} />
          </div>
        </section>

        {/* Seção Final "What you get" e Testimonials */}
        <section className="bg-black pt-8 pb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-white text-3xl font-bold text-center mb-10">What you get</h2>
            <div className="space-y-4 max-w-2xl mx-auto text-left mb-16">
              <CheckListItem>Know key trading terms and rules</CheckListItem>
              <CheckListItem>2,000 insightful, easy and fun lesson-questions</CheckListItem>
              <CheckListItem>Virtual trading simulator with real-world data</CheckListItem>
              <CheckListItem>Personal mastery challenges based on your interests</CheckListItem>
              <CheckListItem>24/7 online support to help on your learning journey</CheckListItem>
            </div>
            <h2 className="text-white text-3xl font-bold text-center mb-10">People love Finelo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-[#1C1C1E] rounded-lg p-6">
                <p className="mb-4">😎 @laura</p>
                <p className="text-gray-300 text-sm mb-4">"The company excelled by not rushing beginners into trading, instead ensuring that they first receive proper learning and practice."</p>
                <div className="flex text-yellow-400">★★★★★</div>
              </div>
              <div className="bg-[#1C1C1E] rounded-lg p-6">
                <p className="mb-4">😎 @alex</p>
                <p className="text-gray-300 text-sm mb-4">"Initially skeptical, I've been pleasantly surprised by the app's effectiveness. It provides a wealth of insights and helped me to increase my balance saving and investing wisely."</p>
                <div className="flex text-yellow-400">★★★★★</div>
              </div>
              <div className="bg-[#1C1C1E] rounded-lg p-6">
                <p className="mb-4">😎 @sarah</p>
                <p className="text-gray-300 text-sm mb-4">"This app has completely altered my approach to finances. Originally a big spender, I've learned to embrace smarter financial habits. The lessons are straightforward, engaging, and highly applicable."</p>
                <div className="flex text-yellow-400">★★★★★</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
