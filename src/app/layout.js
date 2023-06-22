'use client'

import { usePathname } from 'next/navigation'

import './globals.css'
import Nav from '@/components/nav/Nav'

export const metadata = {
  title: 'SalesCaptain | Tools To Help Local Business Win',
  icons: {
    icon: {
      url: "../../public/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "../../public/favicon.png", type: "image/png" },
  },
}



export default function Layout({ children }) {

  const name = usePathname()
  const showHeader = name  === '/login' ? false : true;

  return (
    <html lang="en">
      <body>
        { showHeader && <Nav/> }
        {children}
      </body>
    </html>
  )
}
