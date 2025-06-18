import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next Key App',
  description: 'Created by Sam.',
  generator: 'sam.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
