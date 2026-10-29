import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border/80 bg-white/55">
      <div className="mx-auto max-w-5xl px-8 py-8">
        <div className="flex justify-center space-x-6">
          <Link href="https://github.com/ccc-0731" className="text-muted-foreground hover:text-primary transition-colors">
            GitHub
          </Link>
          <Link href="https://space.bilibili.com/453932065" className="text-muted-foreground hover:text-primary transition-colors">
            Bilibili
          </Link>
          <Link href="https://www.youtube.com/@cccPanda" className="text-muted-foreground hover:text-primary transition-colors">
            YouTube
          </Link>
          <Link href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
            Email
          </Link>
        </div>
        <p className="text-center text-muted-foreground text-sm mt-4">
          © 2026 EigenLore. No rights reserved yet. 🐼
        </p>
        <p className="mt-2 text-center text-xs text-muted-foreground/80">
          <time dateTime="2026-10-28">Last Updated: 10.28.2026</time>
          <span aria-hidden="true"> &nbsp;•&nbsp; </span>
          <span>Designed with real human creativity myself; Brought to life by some vibe-coding (;</span>
        </p>
      </div>
    </footer>
  )
}
