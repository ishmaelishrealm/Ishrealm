'use client';

export default function RobloxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      {/* Roblox-style Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.2),transparent_50%)]"></div>
      
      {/* Hero Section */}
      <section className="relative py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Roblox Dev Branding */}
          <div className="mb-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-2xl border-4 border-white/20 transform rotate-12">
              <span className="text-white font-bold text-2xl">R</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Roblox Dev
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-green-200 mb-2">
              Mini-Games & Experiences
            </p>
            <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg px-6 py-3">
              <p className="text-green-300 font-medium">
                Creating amazing <span className="font-bold text-white">Roblox experiences</span>
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
              My Roblox Games
            </h2>
            <p className="text-xl text-green-200">
              Exciting mini-games and experiences coming soon!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Game Card 1 */}
            <div className="group bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-300/50 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold">Game 1</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Adventure Quest</h3>
              <p className="text-green-300 text-sm mb-4">
                An epic adventure game with quests, battles, and exploration!
              </p>
              <div className="flex items-center justify-between">
                <span className="text-green-400 text-sm font-medium">Coming Soon</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>

            {/* Game Card 2 */}
            <div className="group bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-lg p-6 hover:border-emerald-300/50 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold">Game 2</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Puzzle Master</h3>
              <p className="text-emerald-300 text-sm mb-4">
                Challenge your mind with brain-teasing puzzles and riddles!
              </p>
              <div className="flex items-center justify-between">
                <span className="text-emerald-400 text-sm font-medium">In Development</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>

            {/* Game Card 3 */}
            <div className="group bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm border border-teal-400/30 rounded-lg p-6 hover:border-teal-300/50 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold">Game 3</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Racing Arena</h3>
              <p className="text-teal-300 text-sm mb-4">
                High-speed racing action with customizable vehicles!
              </p>
              <div className="flex items-center justify-between">
                <span className="text-teal-400 text-sm font-medium">Planning Phase</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Development Process
            </h2>
            <p className="text-xl text-green-200">
              How I create amazing Roblox experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Concept</h3>
              <p className="text-green-300 text-sm">Brainstorming and planning the game mechanics</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
              <p className="text-green-300 text-sm">Creating the visual style and user interface</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Build</h3>
              <p className="text-green-300 text-sm">Programming and constructing the game world</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Launch</h3>
              <p className="text-green-300 text-sm">Testing, polishing, and releasing to players</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Play My Games?
          </h2>
          <p className="text-xl text-green-200 mb-8">
            Follow me on Roblox to get notified when my games are released!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.roblox.com/users/profile?username=Ishrealm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Follow on Roblox
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