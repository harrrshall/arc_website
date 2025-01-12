'use client'

import { useState } from 'react'
import { Menu, Cpu, Brain } from 'lucide-react'
import Link from 'next/link'

export default function GalacticPage() {
  const [currentPage] = useState(1)
  const totalPages = 4

  return (
    <div className="min-h-screen bg-sky-100 text-sky-900 overflow-hidden relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{ backgroundSize: '200% 200%' }}
      />
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center p-8">
          <Link href="/" className="text-2xl font-bold tracking-wider text-sky-600">
            NEXUS
          </Link>
          <button className="p-2 text-sky-600 hover:text-sky-700 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* Main content */}
        <main className="container mx-auto px-8 pt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700">
                NEXUS
              </span>
              <span className="block text-2xl md:text-3xl mt-2 tracking-wide text-sky-600">
                PERSONAL COMPUTING
              </span>
            </h1>
            <p className="text-sky-700 text-lg mb-4">
              Making your personal computer more personal. Your computer will never forget anything about you.
            </p>
            <p className="text-sky-600 mb-8">
              We are reimagining human-computer interaction—soon your computer will operate better than you
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-sky-500 hover:bg-sky-600 transition-colors text-white rounded-md flex items-center space-x-2">
                <Cpu className="w-5 h-5" />
                <span>GET STARTED</span>
              </button>
              <button className="px-6 py-3 bg-transparent hover:bg-sky-200 transition-colors text-sky-700 border border-sky-500 rounded-md flex items-center space-x-2">
                <Brain className="w-5 h-5" />
                <span>LEARN MORE</span>
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="fixed bottom-8 left-8 right-8 flex justify-between items-center text-sm text-sky-600">
          <div className="space-x-4">
            <Link href="#" className="hover:text-sky-700 transition-colors">ABOUT</Link>
            <Link href="#" className="hover:text-sky-700 transition-colors">CONTACT</Link>
            <Link href="#" className="hover:text-sky-700 transition-colors">PRIVACY</Link>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
            <span>SYSTEM ONLINE</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

