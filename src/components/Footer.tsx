import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-16">
      <div className="max-w-3xl mx-auto px-8 py-8">
        <div className="flex justify-center space-x-6">
          <Link href="https://github.com/ccc-0731" className="text-muted-foreground hover:text-foreground transition-colors">
            GitHub
          </Link>
          <Link href="https://space.bilibili.com/453932065" className="text-muted-foreground hover:text-foreground transition-colors">
            BiliBili
          </Link>
          <Link href="https://www.youtube.com/@cccPanda" className="text-muted-foreground hover:text-foreground transition-colors">
            YouTube
          </Link>
          <Link href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
            Email
          </Link>
        </div>
        <p className="text-center text-muted-foreground text-sm mt-4">
          © 2026 EigenLore. No rights reserved yet. 🐼
        </p>
      </div>
    </footer>
  )
}