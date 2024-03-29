import type { Metadata } from 'next'
import '@/styles/globals.css'
import NavBar from '@/components/Navbar'


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
      <body className='font-poppins overflow-x-hidden text-fontColor'>
      <NavBar/>
        {children}
        </body>
    </html>
  )
}
