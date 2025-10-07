'use client';

import SocialLinks from '@/components/SocialLinks';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Profile Picture Placeholder */}
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-pink-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-4xl">I</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent">
                Ishmael
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Creator, Streamer, Game Developer
            </p>
            <div className="inline-block bg-gradient-to-r from-pink-500/20 to-green-500/20 backdrop-blur-sm border border-pink-400/30 rounded-lg px-6 py-3">
              <p className="text-pink-300 font-medium">
                Also known as <span className="font-bold text-white">Mugiwara Frost</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-black/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-300">
              Passionate about gaming, content creation, and building amazing experiences
            </p>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gradient-to-br from-pink-500/10 to-green-500/10 backdrop-blur-sm border border-pink-500/20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Hey there! I&apos;m Ishmael, but you might know me as <strong className="text-pink-400">Mugiwara Frost</strong> in the streaming world. 
                I&apos;m a passionate gamer, content creator, and game developer who loves bringing people together through amazing experiences.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey started with a love for gaming and has evolved into creating content, developing games, and building a community 
                of amazing people who share the same passion for interactive entertainment.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether I&apos;m streaming live gameplay, developing mini-games in Roblox, or working on Fortnite Creative maps, 
                my goal is always to create something that brings joy and excitement to others.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-pink-500/10 to-green-500/10 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">What I Do</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    Live streaming on Twitch as Mugiwara Frost
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Creating YouTube content and highlights
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    Developing mini-games in Roblox
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Building Fortnite Creative maps
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    Growing an amazing community
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-pink-500/10 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">My Goals</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Create engaging gaming content
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    Build innovative game experiences
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Foster a positive gaming community
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    Inspire other creators and developers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Keep pushing creative boundaries
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Interests */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Skills & Interests
            </h2>
            <p className="text-xl text-gray-300">
              What I&apos;m passionate about and working on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Content Creation</h3>
              <p className="text-gray-400">Streaming, video editing, social media management</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Game Development</h3>
              <p className="text-gray-400">Roblox Studio, Fortnite Creative, game design</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Building</h3>
              <p className="text-gray-400">Discord management, event planning, engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let&apos;s Connect!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Follow me across all platforms and join the community
          </p>
          
          <div className="mb-8">
            <SocialLinks variant="default" showLabels={true} />
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-green-500/10 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Get in Touch</h3>
            <p className="text-gray-300 mb-4">
              Want to collaborate, have a question, or just want to say hi? 
              The best way to reach me is through Discord or by joining my community!
            </p>
            <a
              href="https://discord.gg/GgPcPgMjTV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Join My Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
