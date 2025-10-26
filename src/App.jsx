import React from 'react'
import HeaderNav from './components/HeaderNav'
import Hero from './components/Hero'
import FeaturesGrid from './components/FeaturesGrid'
import MiniGamesShowcase from './components/MiniGamesShowcase'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-orange-50 text-gray-900">
      <HeaderNav />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <FeaturesGrid />
        <MiniGamesShowcase />
      </main>
      <footer className="mt-16 border-t bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Naledi Learn. Made for curious minds across Africa and the world.</p>
          <div className="text-xs text-gray-500">Optimized for low-power devices • Offline-first approach</div>
        </div>
      </footer>
    </div>
  )
}
