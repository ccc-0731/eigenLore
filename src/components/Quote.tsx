'use client'

import { useState, useEffect } from 'react'

interface QuoteProps {
  isNerdMode: boolean
}

const normalQuotes = [
  "But Why?",
  "But Why?",
  "But Why?",
  "But Why?",
  "Three point one four one five nine, two six five three five eight nine!~",
  "Fun fact: I know 400 digits of pi and I am very proud of it (:",
  "What if the world is a simulation...? 🤔",
  "🤔",
  "Look, Shiri; stars!",
  "I will grow up, but I'll never be a boring grown-up like you!' -- The Little Prince Movie (2015)"
]

const nerdQuotes = [
  "What is my largest eigenvalue?",
  "The taste vectors of this pho at Tin Drum don't seem linearly independent.",
  "My column vectors seem orthogonal, but they are secretly linearly dependent.",
  "One must still have chaos within oneself to give birth to a dancing star. —Nietzsche (who was arguably nerdy AF)",
  "To understand recursion, you must first understand recursion. --Claude, when writing this feature",
  "The universe is made of math. Change my mind.",
  "Complexity is the only constant, entropy the only guarantee.",
  "If debugging is the process of removing bugs, then programming must be the process of putting them in. --Claude, when writing this feature",
]

function getRandomQuote(quotes: string[]): string {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

export default function Quote({ isNerdMode }: QuoteProps) {
  const [quote, setQuote] = useState<string>('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Reset visibility for fade animation
    setIsVisible(false)

    // Select quote from appropriate array
    const selectedQuote = getRandomQuote(isNerdMode ? nerdQuotes : normalQuotes)
    setQuote(selectedQuote)

    // Trigger fade-in animation
    const timer = requestAnimationFrame(() => {
      setIsVisible(true)
    })

    return () => cancelAnimationFrame(timer)
  }, [isNerdMode])

  return (
    <div
      className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <p className="text-lg italic text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  )
}