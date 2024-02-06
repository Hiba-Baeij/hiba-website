import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import NavbarList from './components/layouts/Navbar'
import Providers from './components/providers/Providers';

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
        <NavbarList />
        <main>
          <Providers children={children}></Providers>
        </main>
      </body>
    </html>
  )
}
