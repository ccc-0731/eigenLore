'use client'

import { useEffect, useState } from 'react'
import { publicFile } from '@/lib/site'

const backgrounds = ['/lugulake_storiesbg1.png', '/story_background.JPG']

export default function RandomStoryBackground() {
  const [background, setBackground] = useState<string | null>(null)

  useEffect(() => {
    setBackground(backgrounds[Math.floor(Math.random() * backgrounds.length)])
  }, [])

  if (!background) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10"
      style={{ backgroundImage: `url("${publicFile(background)}")` }}
    />
  )
}
