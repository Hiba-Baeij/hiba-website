import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './components/layouts/Navbar'
import MouseTracker from './components/MouseTracker'

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Hiba Baeej',
  description: 'Front End Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <>
          {/* <MouseTracker /> */}
          {children}
        </>
      </body>
    </html>
  )
}
