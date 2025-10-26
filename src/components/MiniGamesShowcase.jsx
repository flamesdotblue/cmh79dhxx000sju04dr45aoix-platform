import React, { useMemo, useState } from 'react'
import { Gamepad2, Award, Star } from 'lucide-react'

function Badge({ label }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
      <Star className="w-3 h-3" /> {label}
    </span>
  )
}

function Divider() {
  return <div className="my-6 border-t" />
}

function ScienceQuiz({ onWin }) {
  const question = {
    text:
      'A village needs clean water. If we heat water until it becomes steam and then cool it back to water, what process cleans the water?',
    options: [
      { key: 'A', text: 'Filtration' },
      { key: 'B', text: 'Evaporation and condensation (distillation)' },
      { key: 'C', text: 'Freezing' },
      { key: 'D', text: 'Magnetism' }
    ],
    answer: 'B',
    explain:
      'Heating turns water to vapor (evaporation), leaving dirt behind. Cooling the vapor gives clean water (condensation). Together this is distillation.'
  }
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const correct = submitted && selected === question.answer

  return (
    <div className="rounded-xl border p-4 bg-white">
      <div className="text-sm font-semibold text-emerald-700">Science Quest • Earth & Water</div>
      <div className="mt-2 font-medium">{question.text}</div>
      <div className="mt-3 grid sm:grid-cols-2 gap-2">
        {question.options.map((o) => {
          const isChosen = selected === o.key
          let cls = 'rounded-lg border px-3 py-2 text-sm cursor-pointer hover:bg-gray-50'
          if (submitted) {
            if (o.key === question.answer) cls += ' border-emerald-300 bg-emerald-50'
            else if (isChosen) cls += ' border-rose-300 bg-rose-50'
          } else if (isChosen) {
            cls += ' border-emerald-300 bg-emerald-50'
          }
          return (
            <button key={o.key} onClick={() => !submitted && setSelected(o.key)} className={cls}>
              <span className="font-semibold mr-2">{o.key}.</span> {o.text}
            </button>
          )
        })}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <button
          onClick={() => {
            if (!submitted && selected) {
              setSubmitted(true)
              if (selected === question.answer) onWin(50, 'Water Wise')
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
        >
          Submit
        </button>
        {submitted && (
          <div className={`text-sm ${correct ? 'text-emerald-700' : 'text-rose-700'}`}>
            {correct ? 'Great job! Distillation cleans water.' : 'Not quite. Think about what happens when water boils and cools.'}
          </div>
        )}
      </div>
      {submitted && (
        <div className="mt-2 text-xs text-gray-600">{question.explain}</div>
      )}
    </div>
  )
}

function MathPuzzle({ onWin }) {
  const prompt = '3, 6, 9, ?, 15 — what number completes the pattern?'
  const answer = 12
  const [value, setValue] = useState('')
  const [feedback, setFeedback] = useState(null)

  return (
    <div className="rounded-xl border p-4 bg-white">
      <div className="text-sm font-semibold text-emerald-700">Math Quest • Patterns</div>
      <div className="mt-2 font-medium">{prompt}</div>
      <div className="mt-3 flex items-center gap-2">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-28 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="Your answer"
        />
        <button
          onClick={() => {
            const correct = Number(value) === answer
            if (correct) {
              setFeedback('Correct! Each step adds 3.')
              onWin(50, 'Pattern Pro')
            } else {
              setFeedback('Try again. What is 6−3? 9−6?')
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
        >
          Check
        </button>
      </div>
      {feedback && <div className="mt-2 text-sm text-gray-700">{feedback}</div>}
      <div className="mt-3 text-xs text-gray-500">
        Tip: Think of equal hops on a number line. 3 → 6 → 9 → 12 → 15.
      </div>
    </div>
  )
}

export default function MiniGamesShowcase() {
  const [points, setPoints] = useState(0)
  const [badges, setBadges] = useState([])

  function handleWin(earned, badge) {
    setPoints((p) => p + earned)
    setBadges((b) => (b.includes(badge) ? b : [...b, badge]))
  }

  const progressTier = useMemo(() => {
    if (points >= 150) return 'Explorer III'
    if (points >= 100) return 'Explorer II'
    if (points >= 50) return 'Explorer I'
    return 'New Adventurer'
  }, [points])

  return (
    <section id="minigames" className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Play mini‑games</h2>
        <div className="flex items-center gap-3">
          <div className="rounded-xl border bg-white px-4 py-2 text-sm flex items-center gap-2">
            <Gamepad2 className="w-4 h-4 text-emerald-700" />
            <span className="font-semibold">Points:</span> {points}
          </div>
          <div className="rounded-xl border bg-white px-4 py-2 text-sm">
            <span className="font-semibold">Rank:</span> {progressTier}
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-700">
        Earn points and badges by solving quick challenges. Designed to run offline. Audio and more languages are coming soon.
      </div>

      <div className="mt-6 grid lg:grid-cols-2 gap-6">
        <ScienceQuiz onWin={handleWin} />
        <MathPuzzle onWin={handleWin} />
      </div>

      <Divider />

      <div className="rounded-2xl border bg-white p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-emerald-700">Your Achievements</div>
            <div className="text-xs text-gray-600">Collect badges by mastering quests</div>
          </div>
          <div className="inline-flex items-center gap-2 text-amber-600">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">Total: {badges.length}</span>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {badges.length === 0 && (
            <span className="text-sm text-gray-500">No badges yet. Play a quest to earn your first star.</span>
          )}
          {badges.map((b) => (
            <Badge key={b} label={b} />
          ))}
        </div>
      </div>
    </section>
  )
}
