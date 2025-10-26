import React from 'react'
import { Award, Book, Globe, Shield, WifiOff, Languages, Star } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Gamification',
    desc: 'Points, badges, levels, and story quests keep motivation high with joyful rewards.'
  },
  {
    icon: Book,
    title: 'Interactive Learning',
    desc: 'Mini‑games, quizzes, and creative challenges across Science, Math, Tech, and Arts.'
  },
  {
    icon: Languages,
    title: 'Multilingual',
    desc: 'English and Setswana first, scalable to Kalanga, Shiyeyi, Sekgalagadi, and Sesarwa.'
  },
  {
    icon: WifiOff,
    title: 'Offline‑first',
    desc: 'Works on low‑power Android devices with optional cloud sync when online.'
  },
  {
    icon: Shield,
    title: 'Safe for Kids',
    desc: 'No ads, privacy‑first design, and teacher/parent controls for classrooms.'
  },
  {
    icon: Globe,
    title: 'Culturally Relevant',
    desc: 'Examples from local environments—savanna, delta, villages—root concepts in daily life.'
  }
]

export default function FeaturesGrid() {
  return (
    <section id="features" className="mt-16">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">What makes Naledi Learn shine</h2>
      <p className="mt-2 text-gray-700">A playful, accessible platform built for African learners—designed to travel offline and speak many languages.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <div key={i} className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                <f.icon className="w-5 h-5" />
              </div>
              <div className="font-semibold">{f.title}</div>
            </div>
            <div className="mt-3 text-sm text-gray-700">{f.desc}</div>
            {f.title === 'Gamification' && (
              <div className="mt-3 flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <span className="ml-2 text-xs text-amber-700">Earn and learn</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
