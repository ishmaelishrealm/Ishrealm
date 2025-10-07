import Layout from '@/components/Layout';

export default function Fortnite() {
  return (
    <Layout className="bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-blue-900/20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fortnite Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-800/20 to-blue-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.15),transparent_50%)]"></div>
        
        {/* Glitch effects */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${20 + Math.random() * 40}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Fortnite Creative
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-2xl md:text-3xl text-purple-200 mb-4">
            ⚡ Building the Future ⚡
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Welcome to my Fortnite Creative universe! I'm crafting immersive maps, 
            innovative game modes, and epic experiences that push the boundaries of creativity.
          </p>

          {/* Coming Soon Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold shadow-lg shadow-purple-500/25 border border-purple-400/30">
              <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
              🚧 COMING SOON - Development in Progress! 🚧
            </div>
          </div>

          {/* Preview Button */}
          <div className="flex justify-center mb-12">
            <a
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              🔮 Preview Concepts
            </a>
          </div>
        </div>
      </section>

      {/* Planned Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Planned Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-purple-800 to-pink-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">🏰</div>
              </div>
              <h3 className="text-xl font-bold text-purple-200 mb-2">Medieval Battle Royale</h3>
              <p className="text-purple-100 mb-4">Epic castle battles with swords, shields, and siege weapons!</p>
              <div className="flex items-center justify-between">
                <span className="text-purple-300 text-sm">🚧 In Development</span>
                <span className="text-purple-400 text-sm">Q2 2024</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-purple-800 to-pink-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
              <h3 className="text-xl font-bold text-purple-200 mb-2">Space Station Escape</h3>
              <p className="text-purple-100 mb-4">Navigate through a futuristic space station filled with puzzles!</p>
              <div className="flex items-center justify-between">
                <span className="text-purple-300 text-sm">🚧 In Development</span>
                <span className="text-purple-400 text-sm">Q3 2024</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-purple-800 to-pink-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">🎭</div>
              </div>
              <h3 className="text-xl font-bold text-purple-200 mb-2">Mystery Mansion</h3>
              <p className="text-purple-100 mb-4">Solve puzzles and uncover secrets in a haunted mansion!</p>
              <div className="flex items-center justify-between">
                <span className="text-purple-300 text-sm">🚧 In Development</span>
                <span className="text-purple-400 text-sm">Q4 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Development Timeline
          </h2>
          
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-purple-200 mb-2">Learning & Planning</h3>
                <p className="text-purple-100">Mastering Fortnite Creative tools and planning epic projects</p>
                <div className="mt-2">
                  <div className="w-full bg-purple-900/30 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  <span className="text-purple-300 text-sm">75% Complete</span>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-purple-200 mb-2">First Map Creation</h3>
                <p className="text-purple-100">Building the Medieval Battle Royale map with custom mechanics</p>
                <div className="mt-2">
                  <div className="w-full bg-purple-900/30 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-1/4"></div>
                  </div>
                  <span className="text-purple-300 text-sm">25% Complete</span>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-purple-200 mb-2">Advanced Features</h3>
                <p className="text-purple-100">Adding complex scripting, custom weapons, and unique game modes</p>
                <div className="mt-2">
                  <div className="w-full bg-purple-900/30 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-0"></div>
                  </div>
                  <span className="text-purple-300 text-sm">0% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Planned Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Custom Weapons */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-500/30">
              <div className="text-4xl mb-4">⚔️</div>
              <h3 className="text-2xl font-bold text-purple-200 mb-4">Custom Weapons</h3>
              <ul className="space-y-2 text-purple-100">
                <li>• Medieval swords with unique abilities</li>
                <li>• Magical staffs with elemental powers</li>
                <li>• Siege weapons for castle battles</li>
                <li>• Custom projectiles and effects</li>
              </ul>
            </div>

            {/* Interactive Environments */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-500/30">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-purple-200 mb-4">Interactive Environments</h3>
              <ul className="space-y-2 text-purple-100">
                <li>• Destructible castle walls</li>
                <li>• Moving platforms and traps</li>
                <li>• Dynamic weather systems</li>
                <li>• Hidden passages and secrets</li>
              </ul>
            </div>

            {/* Game Modes */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-500/30">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-purple-200 mb-4">Unique Game Modes</h3>
              <ul className="space-y-2 text-purple-100">
                <li>• Castle Siege Battle Royale</li>
                <li>• Team-based capture the flag</li>
                <li>• Survival mode with waves</li>
                <li>• Puzzle-solving adventures</li>
              </ul>
            </div>

            {/* Community Features */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-500/30">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-purple-200 mb-4">Community Features</h3>
              <ul className="space-y-2 text-purple-100">
                <li>• Leaderboards and rankings</li>
                <li>• Custom tournaments</li>
                <li>• Player feedback system</li>
                <li>• Regular updates and events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

