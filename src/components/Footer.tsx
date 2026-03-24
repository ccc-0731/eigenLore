import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-16">
      <div className="max-w-3xl mx-auto px-8 py-8">
        <div className="flex justify-center space-x-6">
          <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
            GitHub
          </Link>
          <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
            Twitter
          </Link>
          <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
            LinkedIn
          </Link>
          <Link href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
            Email
          </Link>
        </div>
        <p className="text-center text-muted-foreground text-sm mt-4">
          © 2024 EigenLore. All rights reserved.
        </p>
      </div>
    </footer>
  )
}