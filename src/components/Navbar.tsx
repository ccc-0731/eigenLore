'use client'

import Link from 'next/link'
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
        <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
          🐼 Home
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