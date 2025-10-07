import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-md border-t border-purple-500/30 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ishrealm
            </div>
            <div className="text-sm text-gray-400 mt-1">
              Content Creator & Game Developer
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-4 md:mb-0">
            <SocialLinks />
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 text-center md:text-right">
            © 2024 Ishrealm. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

