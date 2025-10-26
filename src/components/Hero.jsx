import React from 'react'
import { motion } from 'framer-motion'
import { Award, Gamepad2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-10 sm:pt-14 lg:pt-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            Gamified learning for young explorers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-lg text-gray-700"
          >
            Naledi Learn blends story quests, mini‑games, and local languages to make Science, Math, Tech, Engineering, and Arts fun and culturally relevant for ages 9–13.
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#minigames" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
              <Gamepad2 className="w-5 h-5" />
              Play the Demo
            </a>
            <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-emerald-200 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors">
              <Award className="w-5 h-5" />
              See Features
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            Offline‑first • Low‑power devices • Designed with African stories and nature
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-emerald-200 via-amber-100 to-orange-200 p-1 shadow-xl">
            <div className="h-full w-full rounded-[14px] bg-white flex items-center justify-center">
              <div className="p-6 text-center">
                <div className="text-6xl">🌍✨</div>
                <div className="mt-3 font-semibold text-xl">Stories from the Kalahari to the Cosmos</div>
                <div className="mt-2 text-sm text-gray-600 max-w-md mx-auto">Solve puzzles about water conservation, build simple circuits, and explore stars—guided by friendly characters speaking English and Setswana.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
