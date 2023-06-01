import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'
import React from 'react'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'RFlyD',
  description: 'Checagem de Estoque Automatizada',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} bg-zinc-100 font-sans text-black`}>
        <main className=" min-h-screen w-full">
          <Sidebar />
          <div className=" min-h-screen w-full">{children}</div>
        </main>
      </body>
    </html>
  )
}
