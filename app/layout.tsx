import type { Metadata } from 'next'
import NavBar from '@/components/Navbar'
import './globals.css'


export const metadata: Metadata = {
  title: 'Healthy 24',
  description: 'Eurl Itexc Agency Junior Test Solution By Moaz Tobok',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-poppins overflow-x-hidden'>
        <NavBar/>
        {children}
        </body>
    </html>
  )
}
