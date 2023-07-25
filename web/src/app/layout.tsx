'use client'
import classNames from 'classnames'
import './globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'
import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

// export const metadata = {
//   title: 'RFlyD',
//   description: 'Checagem de Estoque Automatizada',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setSidebarCollapsed] = useState(false)
  return (
    <html lang="en">
      <body className={`${roboto.variable} bg-zinc-100 font-sans text-black`}>
        <div
          className={classNames({
            // 👇 use grid layout
            'grid min-h-screen': true,
            // 👇 toggle the width of the sidebar depending on the state
            'grid-cols-sidebar': !collapsed,
            'grid-cols-sidebar-collapsed': collapsed,
            // 👇 transition animation classes
            'transition-[grid-template-columns] duration-300 ease-in-out': true,
          })}
        >
          {/* sidebar */}
          <Sidebar
            collapsed={collapsed}
            setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
          />
          {/* content */}
          <div className=""> {children}</div>
        </div>
      </body>
    </html>
  )
}
