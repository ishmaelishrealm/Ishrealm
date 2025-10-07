'use client';

export default function FortnitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
      {/* Fortnite-style Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(168,85,247,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(236,72,153,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]"></div>
      
      {/* Hero Section */}
      <section className="relative py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Fortnite Creative Branding */}
          <div className="mb-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-2xl border-4 border-white/20 transform -rotate-12">
              <span className="text-white font-bold text-2xl">F</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Fortnite Creative
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-2">
              Creative Maps & Game Modes
            </p>
            <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg px-6 py-3">
              <p className="text-purple-300 font-medium">
                Building the future of <span className="font-bold text-white">Fortnite Creative</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Creative Projects
            </h2>
            <p className="text-xl text-purple-200">
              Amazing Fortnite Creative experiences coming soon!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map Card 1 */}
            <div className="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-8 hover:border-purple-300/50 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 mx-auto mb-3 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">Battle Royale Map</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Epic Battle Arena</h3>
              <p className="text-purple-300 mb-4">
                A massive battle royale map with unique locations, hidden secrets, and intense combat zones. Features custom weapons and vehicles!
              </p>
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-medium">Coming Soon</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>

            {/* Map Card 2 */}
            <div className="group bg-gradient-to-br from-pink-500/20 to-indigo-500/20 backdrop-blur-sm border border-pink-400/30 rounded-lg p-8 hover:border-pink-300/50 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-pink-600 to-indigo-600 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 animate-pulse"></div>
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 mx-auto mb-3 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">Creative Hub</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Adventure Park</h3>
              <p className="text-pink-300 mb-4">
                An immersive adventure park with mini-games, obstacle courses, and interactive experiences. Perfect for casual fun with friends!
              </p>
              <div className="flex items-center justify-between">
                <span className="text-pink-400 font-medium">In Development</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Makes My Maps Special
            </h2>
            <p className="text-xl text-purple-200">
              Unique features and innovative gameplay mechanics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovative Design</h3>
              <p className="text-purple-300">Unique layouts and creative use of Fortnite Creative tools</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Balanced Gameplay</h3>
              <p className="text-purple-300">Carefully crafted mechanics for fair and fun gameplay</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Focus</h3>
              <p className="text-purple-300">Maps designed with the community in mind for maximum enjoyment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Play My Maps?
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Follow me on Epic Games to get notified when my Creative maps are published!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.epicgames.com/fortnite/creative"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Fortnite Creative
            </a>
            <a
              href="https://discord.gg/GgPcPgMjTV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Join Discord for Updates
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
