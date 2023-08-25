import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Navbar } from '@/components'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salta Movies',
  description: 'El mejor lugar para ver peliculas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen bg-slate-600 flex-col items-center`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
