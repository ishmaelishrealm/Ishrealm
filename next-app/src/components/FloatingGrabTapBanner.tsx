'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function FloatingGrabTapBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Show banner after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ${
      isMinimized ? 'transform translate-y-0' : 'transform translate-y-0'
    }`}>
      {/* Minimized State */}
      {isMinimized ? (
        <div 
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-4 shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300 border border-green-500/30"
          onClick={handleMinimize}
        >
          <div className="text-white text-2xl">💰</div>
        </div>
      ) : (
        /* Expanded State */
        <div className="bg-gradient-to-br from-green-900/95 to-emerald-900/95 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-green-500/30 max-w-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">💰</div>
              <h3 className="text-white font-bold text-lg">GrabTap</h3>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleMinimize}
                className="text-green-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <button
                onClick={handleClose}
                className="text-green-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm">
              Turn Gaming Hours Into Real Money
            </h4>
            <p className="text-green-100 text-xs leading-relaxed">
              Play games through GrabTap, complete achievements, and earn real money rewards. 
              Some players are earning <strong className="text-green-200">$1000+</strong> in rewards!
            </p>
            
            {/* CTA Button */}
            <a
              href="https://grabtap.com/c/ishrealm?utm_source=app_share&utm_medium=share&utm_campaign=community_page&utm_content=ishrealm"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Start Playing & Earning
            </a>
          </div>

          {/* Floating Animation */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
        </div>
      )}

      {/* Pulse Effect */}
      <div className="absolute inset-0 bg-green-500/20 rounded-xl animate-pulse -z-10"></div>
    </div>
  );
}


