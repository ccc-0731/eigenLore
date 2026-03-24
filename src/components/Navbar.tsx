import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white border-b border-border z-10">
      <div className="max-w-3xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
          EigenLore
        </Link>
        <div className="flex space-x-6">
          <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#writing" className="text-muted-foreground hover:text-foreground transition-colors">
            Writing
          </Link>
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}