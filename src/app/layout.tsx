import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NerdModeProvider } from '@/lib/NerdModeContext'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <NerdModeProvider>
          {children}
        </NerdModeProvider>
      </body>
    </html>
  )
}