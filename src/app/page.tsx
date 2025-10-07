'use client';

import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-green-500/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,105,180,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Logo/Title */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-2xl italic" style={{fontFamily: 'cursive'}}>sonoaac</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent">
                Ishrealm
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Welcome to the realm of
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-white">
              Ishmael
            </p>
          </div>

          {/* Streaming Alias */}
          <div className="mb-12">
            <div className="inline-block bg-gradient-to-r from-blue-400/20 to-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-6 py-3">
              <p className="text-cyan-400 font-medium">
                Also known as <span className="font-bold text-white">Mugiwara Frost</span>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-12">
            <h2 className="text-lg text-gray-400 mb-6">Follow me across all platforms</h2>
            <SocialLinks variant="default" showLabels={true} />
          </div>

          {/* Quick Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link 
              href="/streaming" 
              className="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-purple-400 mb-3">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Streaming</h3>
              <p className="text-gray-400 text-sm">Live gaming streams & content</p>
            </Link>

            <Link 
              href="/roblox" 
              className="group bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-green-400 mb-3">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Roblox Dev</h3>
              <p className="text-gray-400 text-sm">Mini-games & experiences</p>
            </Link>

            <Link 
              href="/fortnite" 
              className="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-purple-400 mb-3">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Fortnite</h3>
              <p className="text-gray-400 text-sm">Creative maps & modes</p>
            </Link>

            <Link 
              href="/about" 
              className="group bg-gradient-to-br from-pink-500/20 to-green-500/20 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-pink-400 mb-3">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">About Me</h3>
              <p className="text-gray-400 text-sm">Learn more about Ishmael</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What I Do
            </h2>
            <p className="text-xl text-gray-400">
              Gaming, streaming, and creating amazing experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-green-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Content Creation</h3>
              <p className="text-gray-400">Creating engaging gaming content across multiple platforms</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-green-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Game Development</h3>
              <p className="text-gray-400">Building mini-games and experiences in Roblox</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-green-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Building</h3>
              <p className="text-gray-400">Growing an amazing community of gamers and creators</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}