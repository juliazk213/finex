import { Menu } from "lucide-react"
import Link from "next/link"

export default function FineloQuizStep2() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col p-4">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="w-6 h-6"></div> {/* Placeholder to center the logo */}
        <div className="text-green-400 text-2xl sm:text-3xl font-bold">
          <span className="text-green-400">F</span>inelo
        </div>
        <Menu className="w-6 h-6 text-white" />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-8">
        {/* Social Proof Section */}
        <div className="rounded-lg p-6 sm:p-8 w-full max-w-lg text-center bg-[#1E1E1E]">
          {/* User Count */}
          <div className="mb-6">
            <h2 className="text-green-400 text-3xl font-bold mb-2">1,000,000+ people</h2>
            <p className="text-white text-lg">already use Finelo</p>
          </div>

          {/* Testimonial */}
          <div className="mb-6 bg-black rounded-lg p-4">
            <blockquote className="text-white text-base sm:text-lg mb-4 leading-relaxed">
              &quot;A good trader is someone who manages to make money while limiting risk.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="/bill-lipschutz-avatar.webp" alt="Bill Lipschutz" className="w-full h-full object-cover" />
              </div>
              <span className="text-gray-300 text-sm">Bill Lipschutz</span>
            </div>
          </div>

          {/* Media Mentions */}
          <div className="text-center">
            <p className="text-gray-300 text-sm mb-4">Trading strategies mentioned in</p>
            <div className="flex justify-center">
              <div className="rounded-lg p-4 max-w-[200px]">
                <img src="/the-economist-logo-new.webp" alt="The Economist" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Continue Button */}
      <footer className="flex justify-center py-4">
        <Link href="/step3" className="w-full max-w-md">
          <button className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            CONTINUE
          </button>
        </Link>
      </footer>
    </div>
  )
}
