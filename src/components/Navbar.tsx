'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useNerdMode } from '@/lib/NerdModeContext'
import { publicFile } from '@/lib/site'

export default function Navbar() {
  const { isNerdMode } = useNerdMode()
  const labels = {
    blog: isNerdMode ? '🪵 Logs' : 'Blog',
    projects: isNerdMode ? '🧪 Lab' : 'Projects',
    stories: isNerdMode ? '🐿️ Whims' : 'Stories',
    about: isNerdMode ? '🔍 Metadata' : 'About',
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-8">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Image
            src={publicFile('/eigenPi.svg')}
            alt="EigenLore Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </Link>
        <div className="flex items-center gap-3 text-sm sm:gap-6 sm:text-base">
          <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
            {labels.projects}
          </Link>
          <Link href="/stories" className="text-muted-foreground hover:text-primary transition-colors">
            {labels.stories}
          </Link>
          <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
            {labels.blog}
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
            {labels.about}
          </Link>
        </div>
      </div>
    </nav>
  )
}
