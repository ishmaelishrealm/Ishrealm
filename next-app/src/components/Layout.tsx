'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
import FloatingSponsorshipButton from './FloatingSponsorshipButton';

interface LayoutProps {
  children: ReactNode;
  showSocialLinks?: boolean;
  showSponsorship?: boolean;
}

const Layout = ({ 
  children, 
  showSocialLinks = true, 
  showSponsorship = true 
}: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-16">
        {children}
      </main>

      {/* Footer with Social Links */}
      {showSocialLinks && (
        <footer className="bg-black/50 backdrop-blur-sm border-t border-pink-500/20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs italic" style={{fontFamily: 'cursive'}}>sonoaac</span>
                </div>
                <span className="text-white font-bold">Ishrealm</span>
              </div>
              
              <SocialLinks variant="compact" showLabels={false} />
              
              <p className="text-gray-400 text-sm text-center">
                © 2025 Ishmael (Ishrealm). All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )}

      {/* Floating Sponsorship Button */}
      {showSponsorship && <FloatingSponsorshipButton />}
    </div>
  );
};

export default Layout;