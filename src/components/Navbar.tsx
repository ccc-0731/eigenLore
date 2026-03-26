'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useNerdMode } from '@/lib/NerdModeContext'

export default function Navbar() {
  const { isNerdMode } = useNerdMode()

  const labels = {
    blog: isNerdMode ? '🪵 Logs' : 'Blog',
    projects: isNerdMode ? '🧪 Lab' : 'Projects',
    stories: isNerdMode ? '🐿️ Whims' : 'Stories',
    about: isNerdMode ? '🔍 Metadata' : 'About',
  }

  return (
    <nav className="sticky top-0 bg-white border-b border-border z-10">
      <div className="max-w-3xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Image
            src="/eigenPi.svg"
            alt="EigenLore Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </Link>
        <div className="flex space-x-6 items-center">
          <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
            {labels.blog}
          </Link>
          <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
            {labels.projects}
          </Link>
          <Link href="/stories" className="text-muted-foreground hover:text-foreground transition-colors">
            {labels.stories}
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            {labels.about}
          </Link>
        </div>
      </div>
    </nav>
  )
}