# Ishrealm - Next.js Portfolio Website

Welcome to Ishrealm, the digital realm of Ishmael! This is a modern, anime/gamer-inspired portfolio website built with Next.js, TypeScript, and TailwindCSS.

## 🎮 Features

- **Multi-themed Pages**: Each section has its own unique aesthetic
  - **Home**: Mystic realm vibes with purple/pink gradients
  - **Streaming**: Frost/ice theme for Mugiwara Frost brand
  - **Roblox Dev**: Playful blocky aesthetic with orange/red colors
  - **Fortnite Creative**: Futuristic glitch effects with purple/pink
  - **About**: Clean professional theme

- **Anime/Gamer Styling**: 
  - Animated particles and floating elements
  - Glowing hover effects and transitions
  - Custom scrollbar with gradient colors
  - Responsive dropdown navigation

- **Modern Tech Stack**:
  - Next.js 15 with App Router
  - TypeScript for type safety
  - TailwindCSS for styling
  - Responsive design for all devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd next-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
next-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── streaming/         # Mugiwara Frost streaming page
│   │   ├── roblox/           # Roblox development showcase
│   │   ├── fortnite/         # Fortnite Creative projects
│   │   └── about/            # About Ishmael page
│   ├── components/           # Reusable React components
│   │   ├── Layout.tsx        # Main layout wrapper
│   │   ├── Navbar.tsx        # Navigation with dropdown
│   │   ├── Footer.tsx        # Site footer
│   │   └── SocialLinks.tsx   # Social media links
│   └── themes/               # Page-specific CSS themes
├── public/                   # Static assets
│   ├── grabtap-bg.png       # Background images
│   ├── tiktok.png           # Social platform icons
│   ├── twitch.png
│   └── youtube.png
└── package.json             # Dependencies and scripts
```

## 🎨 Design Philosophy

Each page follows a unique color scheme and aesthetic:

- **Home (Ishrealm)**: Purple/pink gradients with mystical realm vibes
- **Streaming (Mugiwara Frost)**: Blue/cyan frost theme with snowflake particles
- **Roblox Dev**: Orange/red blocky aesthetic with floating cubes
- **Fortnite Creative**: Purple/pink futuristic theme with glitch effects
- **About**: Clean gray/white professional theme

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update the navigation in `src/components/Navbar.tsx`

### Modifying Themes
- Update the className in each page's Layout component
- Modify TailwindCSS classes for different color schemes
- Add custom animations in `src/app/globals.css`

### Social Links
- Update links in `src/components/SocialLinks.tsx`
- Add new platforms by extending the socialLinks array

## 🚀 Deployment

This project is configured for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set the root directory to `next-app`
4. Deploy!

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎯 Future Enhancements

- [ ] Add Twitch/YouTube live embeds
- [ ] Implement dark/light theme toggle
- [ ] Add more interactive animations
- [ ] Create a blog section
- [ ] Add contact form functionality
- [ ] Integrate with external APIs

## 📄 License

This project is created for Ishmael's personal portfolio. All rights reserved.

## 🤝 Contributing

This is a personal portfolio project. If you have suggestions or find bugs, feel free to reach out!

---

Built with ❤️ by Ishmael for the Ishrealm community!