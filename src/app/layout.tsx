import type { Metadata } from 'next'
import { Caveat_Brush, Nunito_Sans } from 'next/font/google'
import './globals.css'
import { NerdModeProvider } from '@/lib/NerdModeContext'
import { publicFile } from '@/lib/site'

const bodyFont = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-body',
  adjustFontFallback: false,
})
const displayFont = Caveat_Brush({ subsets: ['latin'], weight: '400', variable: '--font-display' })

export const metadata: Metadata = {
  title: 'EigenLore',
  description: 'Personal website',
  icons: {
    icon: publicFile('/eigenPi.svg'),
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
