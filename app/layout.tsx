import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "David's Blog",
  description: 'Phasmo-Blog by David Gonzalez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:gb-slate-800">
        <Navbar/>
        <Profile/>
        {children}
        </body>
    </html>
  )
}
