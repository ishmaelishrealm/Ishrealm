'use client';

import { useState, useEffect } from 'react';

const FloatingSponsorshipButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show button immediately
    setShowButton(true);
  }, []);

  if (!showButton) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Content */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 w-80 bg-black/95 backdrop-blur-md border border-pink-500/30 rounded-lg p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold text-lg">GrabTap Partnership</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              Turn your gaming hours into real money! I&apos;ve been using GrabTap as a side hustle, and it&apos;s amazing how much you can earn just by playing games you already enjoy.
            </p>
            
            <div className="bg-gradient-to-r from-pink-500/20 to-green-500/20 p-3 rounded-lg">
              <p className="text-white text-sm font-medium">
                Some dedicated players are crossing <span className="text-green-400 font-bold">$1000+</span> in rewards!
              </p>
            </div>

            <a
              href="https://grabtap.com/c/ishrealm?utm_source=app_share&utm_medium=share&utm_campaign=community_page&utm_content=ishrealm"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-pink-500 to-green-500 text-white font-bold py-3 px-4 rounded-lg text-center hover:from-pink-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Playing & Earn Money
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 bg-gradient-to-r from-pink-500 to-green-500 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group animate-bounce"
      >
        <div className="relative">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-green-500 animate-ping opacity-20"></div>
        </div>
      </button>

      {/* Tooltip */}
      {!isExpanded && (
        <div className="absolute bottom-16 right-0 bg-black text-white text-sm px-3 py-2 rounded-lg border border-pink-500/30 shadow-lg whitespace-nowrap">
          💰 Earn money gaming!
        </div>
      )}
    </div>
  );
};

export default FloatingSponsorshipButton;
