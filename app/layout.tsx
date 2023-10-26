import Navbar from '@/libs/components/navbar/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Justin Cox Portfolio',
   description: 'Web development portfolio for Justin Cox',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Navbar />
            {children}
         </body>
      </html>
   )
}
