'use client';

import { useState } from 'react';
import Image from 'next/image';

interface AdBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc?: string;
  className?: string;
}

export default function AdBanner({ 
  title, 
  description, 
  ctaText, 
  ctaLink, 
  imageSrc = "/grabtap-bg.png",
  className = ""
}: AdBannerProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-xl border border-gray-600/30 ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Ad Banner Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {description}
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm rounded-lg font-semibold text-white hover:from-blue-500/90 hover:to-purple-500/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 border border-blue-500/30 ${
                    isHovered ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {ctaText}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex justify-center md:justify-end">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
                <div className="text-6xl">🎮</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transform -skew-x-12 -translate-x-full animate-pulse"></div>
    </div>
  );
}

// Predefined banner configurations
export const BannerConfigs = {
  streaming: {
    title: "Join Mugiwara Frost Live!",
    description: "Experience epic gaming adventures, community challenges, and interactive streams. Don't miss out on the frozen fun!",
    ctaText: "Watch Live Stream",
    ctaLink: "https://www.twitch.tv/mugiwarafrost",
  },
  roblox: {
    title: "Play My Roblox Games",
    description: "Discover immersive mini-games, challenging obstacles, and epic adventures created by me. Join thousands of players!",
    ctaText: "Play Now",
    ctaLink: "https://roblox.com/users/mugiwara_frost", // Update with your real Roblox profile URL
  },
  youtube: {
    title: "Subscribe for Epic Content",
    description: "Get notified about new videos, highlights, tutorials, and behind-the-scenes content. Hit that subscribe button!",
    ctaText: "Subscribe Now",
    ctaLink: "https://www.youtube.com/@strawhatfrost",
  },
  tiktok: {
    title: "Follow for Quick Content",
    description: "Get your daily dose of gaming highlights, funny moments, and creative content in bite-sized videos.",
    ctaText: "Follow on TikTok",
    ctaLink: "https://www.tiktok.com/@ishrealmxclip",
  }
};
