import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Winter Expedition: St. Anton am Arlberg | Project Arlberg-26',
  description: 'Professional ski expedition dashboard for St. Anton am Arlberg. Luxury experience, smart logistics. February 7-14, 2026.',
  keywords: 'St. Anton, ski expedition, Arlberg, winter sports, Austria, ski trip planning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
