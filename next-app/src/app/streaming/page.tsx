'use client';

import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';

export default function StreamingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      {/* Frost Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      {/* Hero Section */}
      <section className="relative py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Mugiwara Frost Branding */}
          <div className="mb-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
              <span className="text-white font-bold text-2xl">MF</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-white bg-clip-text text-transparent">
                Mugiwara Frost
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 mb-2">
              Live Gaming Streams & Content
            </p>
            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-6 py-3">
              <p className="text-cyan-300 font-medium">
                Streaming as <span className="font-bold text-white">Mugiwara Frost</span>
              </p>
            </div>
          </div>

          {/* Live Status */}
          <div className="mb-12">
            <div className="inline-flex items-center bg-red-500/20 border border-red-500/30 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></div>
              <span className="text-red-300 font-medium">Currently Offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Follow My Streams
            </h2>
            <p className="text-xl text-cyan-200">
              Catch me live on these platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Twitch */}
            <div className="group bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-8 hover:border-purple-300/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Twitch</h3>
                <p className="text-purple-300 mb-4">Main Channel</p>
                <a
                  href="https://www.twitch.tv/mugiwarafrost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  @MUGIWARAFROST
                </a>
              </div>
            </div>

            {/* YouTube */}
            <div className="group bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-400/30 rounded-lg p-8 hover:border-red-300/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">YouTube</h3>
                <p className="text-red-300 mb-4">Story Content</p>
                <a
                  href="https://www.youtube.com/@Ishrealm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  @Ishrealm
                </a>
              </div>
            </div>

            {/* TikTok */}
            <div className="group bg-gradient-to-br from-cyan-500/20 to-pink-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-8 hover:border-cyan-300/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">TikTok</h3>
                <p className="text-cyan-300 mb-4">Clips & Highlights</p>
                <a
                  href="https://www.tiktok.com/@ishrealmxclip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  @ishrealmxclip
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discord Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-lg p-8 max-w-2xl mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 bg-indigo-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Join My Discord</h3>
              <p className="text-indigo-300 mb-6">
                Connect with the community, get notified about streams, and chat with fellow gamers!
              </p>
              <a
                href="https://discord.gg/GgPcPgMjTV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Join Discord Server
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}