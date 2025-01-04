'use client'

import { useState } from 'react'
import { Menu, X, Pizza } from 'lucide-react'
import Link from 'next/link'

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Pizza className="w-6 h-6 text-red-600" />
            <span className="font-bold text-xl">Lugano</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/menu" className="text-gray-600 hover:text-gray-900">Menu</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/history" className="text-gray-600 hover:text-gray-900">History</Link>
          </div>
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 block md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 w-screen h-screen">
          <div className="fixed inset-0 bg-white/90 px-4 z-50 w-screen h-screen">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2 ">
                <Pizza className="w-6 h-6 text-red-600" />
                <span className="font-bold text-xl">Lugano</span>
              </Link>
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="h-full flex items-center justify-center">
              <nav className="flex flex-col gap-8 h-2/3 my-auto mx-2">
                <Link href="/" className="text-gray-600 hover:text-gray-900 text-4xl text-center" onClick={toggleMenu}>Home</Link>
                <Link href="/menu" className="text-gray-600 hover:text-gray-900 text-4xl text-center" onClick={toggleMenu}>Menu</Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-4xl text-center" onClick={toggleMenu}>About</Link>
                <Link href="/history" className="text-gray-600 hover:text-gray-900 text-4xl text-center"  onClick={toggleMenu}>History</Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
