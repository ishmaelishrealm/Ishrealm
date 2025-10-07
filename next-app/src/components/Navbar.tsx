'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', description: 'Main Hub' },
    { href: '/streaming', label: 'Streaming', description: 'Mugiwara Frost' },
    { href: '/roblox', label: 'Roblox Dev', description: 'Mini Games' },
    { href: '/fortnite', label: 'Fortnite', description: 'Creative Maps' },
    { href: '/about', label: 'About', description: 'About Ishmael' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm italic" style={{fontFamily: 'cursive'}}>sonoaac</span>
            </div>
            <span className="text-white font-bold text-xl">Ishrealm</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-pink-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-green-500/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.description}
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    pathname === item.href
                      ? 'text-pink-400 bg-pink-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex flex-col">
                    <span>{item.label}</span>
                    <span className="text-xs text-gray-400">{item.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;