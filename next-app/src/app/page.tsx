import Layout from '@/components/Layout';
import SocialLinks from '@/components/SocialLinks';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout className="bg-gradient-to-br from-slate-900/30 via-black to-gray-900/20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-black to-gray-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,100,100,0.05),transparent_70%)]"></div>
        
        {/* Subtle particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-400/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Image
                src="/Intropage.png"
                alt="Ishrealm Introduction"
                width={400}
                height={300}
                className="rounded-xl shadow-2xl border border-gray-700/50"
                priority
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent">
              Ishrealm
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-gray-300 mb-4">
            <span className="text-blue-300">Mugiwara Frost</span>
            <span className="mx-4 text-gray-500">/</span>
            <span className="text-gray-200">Content Creator</span>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Welcome to my digital realm! I create content across multiple platforms, 
            develop games on Roblox, and stream as Mugiwara Frost. Join me on this journey!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/streaming"
              className="px-8 py-4 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm rounded-lg font-semibold text-white hover:from-blue-500/90 hover:to-purple-500/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 border border-blue-500/30"
            >
              🎮 Watch My Streams
            </a>
            <a
              href="/roblox"
              className="px-8 py-4 bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm rounded-lg font-semibold text-white hover:from-orange-500/90 hover:to-red-500/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 border border-orange-500/30"
            >
              🎯 Play My Games
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
            What I Do
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Streaming Card */}
            <div className="bg-gradient-to-br from-slate-800/40 to-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Streaming</h3>
              <p className="text-gray-300 mb-6">
                Join me as Mugiwara Frost for gaming streams, challenges, and community fun!
              </p>
              <a
                href="/streaming"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 transform duration-300"
              >
                Explore Streams
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Roblox Dev Card */}
            <div className="bg-gradient-to-br from-slate-800/40 to-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-300">Roblox Development</h3>
              <p className="text-gray-300 mb-6">
                Creating immersive mini-games and experiences for the Roblox community.
              </p>
              <a
                href="/roblox"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors group-hover:translate-x-1 transform duration-300"
              >
                View Games
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Fortnite Creative Card */}
            <div className="bg-gradient-to-br from-slate-800/40 to-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Fortnite Creative</h3>
              <p className="text-gray-300 mb-6">
                Building creative maps and game modes in Fortnite's Creative mode.
              </p>
              <a
                href="/fortnite"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 transform duration-300"
              >
                Coming Soon
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}