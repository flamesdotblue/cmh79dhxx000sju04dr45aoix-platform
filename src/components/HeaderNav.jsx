import React from 'react'
import { Rocket, Languages, Star } from 'lucide-react'

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
            <Rocket className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight text-lg">Naledi Learn</div>
            <div className="text-[11px] text-gray-500 uppercase">Play. Learn. Shine.</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-gray-700 hover:text-emerald-700 transition-colors">Features</a>
          <a href="#minigames" className="text-gray-700 hover:text-emerald-700 transition-colors">Mini‑Games</a>
          <a href="#" className="text-gray-700 hover:text-emerald-700 transition-colors">For Teachers</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg border hover:bg-gray-50 transition-colors">
            <Languages className="w-4 h-4" />
            <span>EN • ST</span>
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
            <Star className="w-4 h-4" />
            Try Demo
          </button>
        </div>
      </div>
    </header>
  )
}
