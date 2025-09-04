import Link from "next/link"

export default function FineloQuizStep7() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header - Simple logo only */}
      <header className="bg-black">
        <div className="flex items-center justify-center p-4">
          <div className="text-green-400 text-2xl sm:text-3xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
        </div>
      </header>

      {/* Main Content - Adicionado 'flex-grow' para empurrar o botão para baixo */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">
          {/* Right Side - Motivational Image (Aparece primeiro no mobile) */}
          <div className="flex-1 max-w-md order-first lg:order-none">
            <img
              src="/ed-phone-mountains.webp"
              alt="Person with phone in snowy mountain landscape"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Left Side - Text Content (Centralizado no mobile) */}
          <div className="flex-1 max-w-lg text-center lg:text-left">
            <h1 className="text-white text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Great news! We can help you to get to the next level
            </h1>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              Our challenge is backed by thousands of research hours and content carefully crafted for your needs and
              skills!
            </p>
          </div>
        </div>
      </main>

      {/* Continue Button */}
      <footer className="flex justify-center p-4">
        <Link href="/step8" className="w-full max-w-md">
          <button className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-4 px-12 rounded-lg text-lg transition-colors">
            CONTINUE
          </button>
        </Link>
      </footer>
    </div>
  )
}
