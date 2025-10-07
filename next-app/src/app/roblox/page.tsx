import Layout from '@/components/Layout';

export default function Roblox() {
  return (
    <Layout className="bg-gradient-to-br from-slate-900/30 via-orange-900/20 to-red-900/20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Refined Roblox Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-orange-900/30 to-red-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,165,0,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,69,0,0.08),transparent_60%)]"></div>
        
        {/* Subtle floating blocks */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-br from-orange-400/30 to-red-500/30 rounded-sm opacity-40 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${15 + Math.random() * 20}px`,
                height: `${15 + Math.random() * 20}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-300 via-red-300 to-orange-300 bg-clip-text text-transparent">
              Roblox Dev
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-orange-200 mb-4">
            🎮 Building Epic Mini-Games 🎮
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Welcome to my Roblox development studio! I create immersive mini-games, 
            challenging obstacles, and fun experiences for players worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm rounded-lg font-semibold text-white hover:from-orange-500/90 hover:to-red-500/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 border border-orange-500/30"
            >
              🎯 Play My Games
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm rounded-lg font-semibold text-white hover:from-blue-500/90 hover:to-purple-500/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 border border-blue-500/30"
            >
              📱 Follow on Roblox
            </a>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
            Featured Games
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Game 1 */}
            <div className="bg-gradient-to-br from-slate-800/40 to-orange-800/40 backdrop-blur-sm rounded-xl p-6 border border-orange-600/30 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-orange-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">🏃</div>
              </div>
              <h3 className="text-xl font-bold text-orange-200 mb-2">Speed Run Challenge</h3>
              <p className="text-orange-100 mb-4">Race against time through challenging obstacle courses!</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-300 text-sm">⭐ 4.8/5</span>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors group-hover:translate-x-1 transform duration-300 inline-flex items-center">
                  Play Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Game 2 */}
            <div className="bg-gradient-to-br from-slate-800/40 to-orange-800/40 backdrop-blur-sm rounded-xl p-6 border border-orange-600/30 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-orange-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">🧩</div>
              </div>
              <h3 className="text-xl font-bold text-orange-200 mb-2">Puzzle Master</h3>
              <p className="text-orange-100 mb-4">Solve mind-bending puzzles and unlock secret areas!</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-300 text-sm">⭐ 4.9/5</span>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors group-hover:translate-x-1 transform duration-300 inline-flex items-center">
                  Play Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Game 3 */}
            <div className="bg-gradient-to-br from-slate-800/40 to-orange-800/40 backdrop-blur-sm rounded-xl p-6 border border-orange-600/30 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-orange-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">⚔️</div>
              </div>
              <h3 className="text-xl font-bold text-orange-200 mb-2">Battle Arena</h3>
              <p className="text-orange-100 mb-4">Epic PvP battles with unique weapons and abilities!</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-300 text-sm">⭐ 4.7/5</span>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors group-hover:translate-x-1 transform duration-300 inline-flex items-center">
                  Play Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/20 to-orange-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
            Development Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/80 to-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-2xl border border-orange-500/30">
                1️⃣
              </div>
              <h3 className="text-xl font-bold text-orange-200 mb-2">Concept</h3>
              <p className="text-orange-100">Brainstorming unique game ideas and mechanics</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/80 to-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-2xl border border-orange-500/30">
                2️⃣
              </div>
              <h3 className="text-xl font-bold text-orange-200 mb-2">Design</h3>
              <p className="text-orange-100">Creating maps, characters, and game mechanics</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/80 to-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-2xl border border-orange-500/30">
                3️⃣
              </div>
              <h3 className="text-xl font-bold text-orange-200 mb-2">Build</h3>
              <p className="text-orange-100">Coding and scripting the game experience</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/80 to-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-2xl border border-orange-500/30">
                4️⃣
              </div>
              <h3 className="text-xl font-bold text-orange-200 mb-2">Launch</h3>
              <p className="text-orange-100">Testing, polishing, and releasing to players</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
            Development Stats
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Games Created */}
            <div className="bg-gradient-to-br from-slate-800/40 to-orange-800/40 backdrop-blur-sm rounded-xl p-8 border border-orange-600/30 text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">12+</div>
              <div className="text-orange-200 font-semibold">Games Created</div>
            </div>

            {/* Total Plays */}
            <div className="bg-gradient-to-br from-slate-800/40 to-orange-800/40 backdrop-blur-sm rounded-xl p-8 border border-orange-600/30 text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">50K+</div>
              <div className="text-orange-200 font-semibold">Total Plays</div>
            </div>

            {/* Active Players */}
            <div className="bg-gradient-to-br from-slate-800/40 to-orange-800/40 backdrop-blur-sm rounded-xl p-8 border border-orange-600/30 text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">2K+</div>
              <div className="text-orange-200 font-semibold">Active Players</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
