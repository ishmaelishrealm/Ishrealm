// Platform-specific effects
document.addEventListener('DOMContentLoaded', () => {
    // Twitch chat messages disabled
    if (document.querySelector('.twitch-theme')) {
        // Keeping the theme without chat messages
    }

    // TikTok floating icons
    if (document.querySelector('.tiktok-theme')) {
        const icons = ['♪', '♫', '🎵', '🎶'];
        const createMusicIcon = () => {
            const icon = document.createElement('div');
            icon.className = 'floating-icon';
            icon.textContent = icons[Math.floor(Math.random() * icons.length)];
            icon.style.left = `${Math.random() * 100}%`;
            icon.style.animation = `float ${5 + Math.random() * 5}s linear infinite`;
            document.querySelector('.platform-container').appendChild(icon);

            // Remove the icon after animation completes
            icon.addEventListener('animationend', () => icon.remove());
        };

        // Create new icons periodically
        setInterval(createMusicIcon, 3000);
    }

    // YouTube preview thumbnails
    if (document.querySelector('.youtube-theme')) {
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.addEventListener('mouseover', () => {
                thumb.style.animation = 'thumbnailFlip 0.6s ease-out forwards';
            });
            thumb.addEventListener('mouseleave', () => {
                thumb.style.animation = 'thumbnailFlip 0.6s ease-out reverse';
            });
        });
    }
});