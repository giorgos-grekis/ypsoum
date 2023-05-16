import { ReactNode } from 'react'

import { Inter } from 'next/font/google'

import Header from '@/components/Layout/Header/Header'
import Footer from '@/components/Layout/Footer/Footer'


import './globals.scss'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="el">

        <body>
          <Header />
           {children}
          <Footer />
        </body>
      
    </html>
  )
}
