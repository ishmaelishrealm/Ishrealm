import Layout from '@/components/Layout';
import SocialLinks from '@/components/SocialLinks';

export default function About() {
  return (
    <Layout className="bg-gradient-to-br from-gray-900/20 via-slate-900/10 to-zinc-900/20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-slate-800/20 to-zinc-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,100,100,0.1),transparent_50%)]"></div>
        
        {/* Subtle particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-40 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Profile Picture Placeholder */}
          <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl">
            👤
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
              Ishmael
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-2xl md:text-3xl text-gray-300 mb-4">
            Creator of <span className="text-purple-300">Ishrealm</span>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Hi! I'm Ishmael, a passionate content creator and game developer. 
            I love building immersive experiences, connecting with communities, 
            and pushing the boundaries of creativity in gaming.
          </p>

          {/* Social Links */}
          <div className="flex justify-center mb-12">
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900/30 to-slate-900/30 rounded-xl p-8 border border-gray-500/30">
                <h3 className="text-2xl font-bold text-gray-200 mb-4">My Journey</h3>
                <p className="text-gray-300 leading-relaxed">
                  I started my creative journey as a passionate gamer who wanted to share 
                  experiences with others. What began as simple streaming evolved into 
                  a full-fledged content creation empire spanning multiple platforms.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/30 to-slate-900/30 rounded-xl p-8 border border-gray-500/30">
                <h3 className="text-2xl font-bold text-gray-200 mb-4">My Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  I believe in creating content that brings people together. Whether it's 
                  through epic gaming streams, innovative Roblox games, or future Fortnite 
                  creations, my goal is to build communities and unforgettable experiences.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900/30 to-slate-900/30 rounded-xl p-8 border border-gray-500/30 text-center">
                <div className="text-4xl font-bold text-gray-200 mb-2">3+</div>
                <div className="text-gray-300">Years Creating</div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/30 to-slate-900/30 rounded-xl p-8 border border-gray-500/30 text-center">
                <div className="text-4xl font-bold text-gray-200 mb-2">12+</div>
                <div className="text-gray-300">Games Developed</div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/30 to-slate-900/30 rounded-xl p-8 border border-gray-500/30 text-center">
                <div className="text-4xl font-bold text-gray-200 mb-2">50K+</div>
                <div className="text-gray-300">Total Views</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/10 to-slate-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Content Creation */}
            <div className="bg-gradient-to-br from-gray-900/30 to-slate-900/30 rounded-xl p-8 border border-gray-500/30 text-center">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold text-gray-200 mb-4">Content Creation</h3>
              <ul className="space-y-2 text-gray-300 text-left">
                <li>• Live streaming on Twitch</li>
                <li>• Video editing & production</li>
                <li>• Social media management</li>
                <li>• Community building</li>
              </ul>
            </div>

            {/* Game Development */}
            <div className="bg-gradient-to-br from-gray-900/30 to-slate-900/30 rounded-xl p-8 border border-gray-500/30 text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-gray-200 mb-4">Game Development</h3>
              <ul className="space-y-2 text-gray-300 text-left">
                <li>• Roblox Studio & Lua scripting</li>
                <li>• Game design & mechanics</li>
                <li>• 3D modeling & animation</li>
                <li>• Fortnite Creative tools</li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="bg-gradient-to-br from-gray-900/30 to-slate-900/30 rounded-xl p-8 border border-gray-500/30 text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-gray-200 mb-4">Technical Skills</h3>
              <ul className="space-y-2 text-gray-300 text-left">
                <li>• TypeScript & React</li>
                <li>• Web development</li>
                <li>• UI/UX design</li>
                <li>• Project management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="bg-gradient-to-br from-gray-900/30 to-slate-900/30 rounded-xl p-8 border border-gray-500/30">
            <p className="text-lg text-gray-300 mb-8">
              Want to collaborate, have questions, or just want to say hi? 
              I'd love to hear from you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                📧 Send Email
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                💬 Discord Server
              </a>
            </div>
            
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

