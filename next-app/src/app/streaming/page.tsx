import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Streaming() {
  return (
    <Layout className="bg-gradient-to-br from-slate-900/30 via-blue-900/20 to-cyan-900/20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Refined Frost Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/30 to-cyan-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08),transparent_60%)]"></div>
        
        {/* Subtle snowflakes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-300/30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
                fontSize: `${6 + Math.random() * 6}px`,
              }}
            >
              ❄️
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          {/* Platform Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="relative group">
              <Image
                src="/twitch.png"
                alt="Twitch"
                width={60}
                height={60}
                className="rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative group">
              <Image
                src="/youtube.png"
                alt="YouTube"
                width={60}
                height={60}
                className="rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative group">
              <Image
                src="/tiktok.png"
                alt="TikTok"
                width={60}
                height={60}
                className="rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Mugiwara Frost
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-blue-200 mb-4">
            ❄️ Ice-Cold Gaming Streams ❄️
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join me for epic gaming adventures, challenges, and community fun! 
            From Roblox mini-games to intense battles, every stream is a frozen adventure.
          </p>

          {/* Live Status */}
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600/80 to-red-500/80 backdrop-blur-sm rounded-full text-white font-semibold shadow-lg border border-red-500/30">
              <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
              LIVE NOW - Join the Stream!
            </div>
          </div>

          {/* Platform Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://www.twitch.tv/mugiwarafrost"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600/80 to-purple-500/80 backdrop-blur-sm rounded-lg font-semibold text-white hover:from-purple-500/90 hover:to-purple-400/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 border border-purple-500/30 flex items-center justify-center"
            >
              <Image src="/twitch.png" alt="Twitch" width={24} height={24} className="mr-2" />
              Watch on Twitch
            </a>
            <a
              href="https://www.youtube.com/@strawhatfrost"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-red-600/80 to-red-500/80 backdrop-blur-sm rounded-lg font-semibold text-white hover:from-red-500/90 hover:to-red-400/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 border border-red-500/30 flex items-center justify-center"
            >
              <Image src="/youtube.png" alt="YouTube" width={24} height={24} className="mr-2" />
              Subscribe on YouTube
            </a>
            <a
              href="https://www.tiktok.com/@ishrealmxclip"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-pink-600/80 to-pink-500/80 backdrop-blur-sm rounded-lg font-semibold text-white hover:from-pink-500/90 hover:to-pink-400/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 border border-pink-500/30 flex items-center justify-center"
            >
              <Image src="/tiktok.png" alt="TikTok" width={24} height={24} className="mr-2" />
              Follow on TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Stream Schedule Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Stream Schedule
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Monday */}
            <div className="bg-gradient-to-br from-slate-800/40 to-blue-800/40 backdrop-blur-sm rounded-xl p-6 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-200 mb-4">Monday</h3>
              <div className="space-y-3">
                <div className="flex items-center text-blue-100">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span>7:00 PM - Roblox Adventures</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span>9:00 PM - Community Games</span>
                </div>
              </div>
            </div>

            {/* Wednesday */}
            <div className="bg-gradient-to-br from-slate-800/40 to-blue-800/40 backdrop-blur-sm rounded-xl p-6 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-200 mb-4">Wednesday</h3>
              <div className="space-y-3">
                <div className="flex items-center text-blue-100">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span>6:00 PM - Game Development</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span>8:00 PM - Just Chatting</span>
                </div>
              </div>
            </div>

            {/* Friday */}
            <div className="bg-gradient-to-br from-slate-800/40 to-blue-800/40 backdrop-blur-sm rounded-xl p-6 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-200 mb-4">Friday</h3>
              <div className="space-y-3">
                <div className="flex items-center text-blue-100">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span>7:30 PM - Weekend Gaming</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span>9:30 PM - Subscriber Games</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/20 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Recent Highlights
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="bg-gradient-to-br from-slate-800/40 to-blue-800/40 backdrop-blur-sm rounded-xl p-6 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-blue-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">🎮</div>
              </div>
              <h3 className="text-xl font-bold text-blue-200 mb-2">Epic Roblox Adventure!</h3>
              <p className="text-blue-100 mb-4">Join me as we explore the latest Roblox games and discover hidden secrets!</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 transform duration-300 inline-flex items-center">
                Watch Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Video 2 */}
            <div className="bg-gradient-to-br from-slate-800/40 to-blue-800/40 backdrop-blur-sm rounded-xl p-6 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-blue-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">⚔️</div>
              </div>
              <h3 className="text-xl font-bold text-blue-200 mb-2">Community Challenge!</h3>
              <p className="text-blue-100 mb-4">The community came together for an epic gaming challenge. See who won!</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 transform duration-300 inline-flex items-center">
                Watch Now
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
