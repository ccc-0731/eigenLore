import type { Metadata } from 'next'
import { Fraunces, Nunito_Sans } from 'next/font/google'
import './globals.css'
import { NerdModeProvider } from '@/lib/NerdModeContext'

const bodyFont = Nunito_Sans({ subsets: ['latin'], variable: '--font-body' })
const displayFont = Fraunces({ subsets: ['latin'], variable: '--font-display' })

// Get basePath from environment
const basePath = process.env.GITHUB_PAGES ? '/eigenLore' : ''

export const metadata: Metadata = {
  title: 'EigenLore',
  description: 'Personal website',
  icons: {
    icon: `${basePath}/eigenPi.svg`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <NerdModeProvider>
          {children}
        </NerdModeProvider>
      </body>
    </html>
  )
}
