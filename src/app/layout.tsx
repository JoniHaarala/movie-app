import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Navbar } from '@/components'
import { ThemeProvider } from '@/components/dm/darkMode'


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
      <body className={`${inter.className} flex min-h-screen bg-slate-100 dark:bg-gray-900 flex-col items-center px-5 3xl:px-0`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  )
}
