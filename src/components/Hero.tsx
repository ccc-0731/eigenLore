'use client'

import { useNerdMode } from '@/lib/NerdModeContext'
import Quote from './Quote'

export default function Hero() {
  const { isNerdMode, toggleNerdMode } = useNerdMode()

  return (
    <section className="text-center space-y-8">
      <Quote isNerdMode={isNerdMode} />
      <div className="flex justify-center">
        {/* Subtle line art placeholder - you can replace with actual SVG */}
        <svg width="200" height="100" viewBox="0 0 200 100" className="text-primary">
          <path d="M10 50 Q50 10 100 50 T190 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="30" r="3" fill="currentColor" />
          <circle cx="150" cy="70" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="flex justify-center">
        <button
          onClick={toggleNerdMode}
          className="text-gray-500 underline decoration-orange-400 decoration-dotted hover:bg-yellow-100 px-2 py-1 rounded transition-colors"
        >
          {isNerdMode ? 'I cant stand this anymore. Return to Regular Nerd Mode 😖' : 'Get the Extra Nerd Mode full experience! 🚀'}
        </button>
      </div>
    </section>
  )
}