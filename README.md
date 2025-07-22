# Personal Website

A minimalist, retro-inspired personal website built with Next.js and styled with Gruvbox dark theme. Features a terminal aesthetic that showcases my work as a software engineer specializing in data infrastructure and AI applications.

## ✨ Features

- **Retro Terminal Design**: Gruvbox dark color scheme with terminal-inspired UI
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Blinking cursor effects and smooth hover transitions
- **Modern Tech Stack**: Built with Next.js 15, React 19, and Tailwind CSS
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages
- **SEO Optimized**: Proper metadata and semantic HTML structure

## 🎨 Design Philosophy

The website embraces a **minimalist, retro computing aesthetic** with:
- Warm Gruvbox color palette for comfortable viewing
- Monospace typography for that authentic terminal feel
- Clean sections: work experience, tech stack, projects, and contact
- Color-coded elements for visual hierarchy
- Subtle glow effects and animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono
- **Language**: TypeScript
- **Deployment**: GitHub Pages
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vennahlot/vennahlot.github.io.git
   cd vennahlot.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Gruvbox theme & animations
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main homepage component
├── public/                  # Static assets
├── package.json            # Dependencies & scripts
└── README.md              # This file
```

## 🎯 Customization

### Personal Information

Update the following in `src/app/page.tsx`:

1. **Contact Information** (lines ~160-170):
   ```tsx
   <div>github: <a href="https://github.com/YOUR_USERNAME">@YOUR_USERNAME</a></div>
   <div>linkedin: <a href="https://linkedin.com/in/YOUR_PROFILE">/in/YOUR_PROFILE</a></div>
   <div>itch.io: <a href="https://YOUR_USERNAME.itch.io/">@YOUR_USERNAME</a></div>
   ```

2. **Skills & Technologies** (lines ~50-70):
   - Update the skills arrays for each category
   - Modify categories to match your expertise

3. **Projects** (lines ~90-120):
   - Replace with your actual projects
   - Update titles, descriptions, tech stacks, and status

4. **Work Experience** (lines ~30-50):
   - Customize the work descriptions to match your background

### Metadata

Update site metadata in `src/app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Your Name - Personal Website",
  description: "Your personal description here",
};
```

### Color Scheme

The Gruvbox colors are defined in `src/app/globals.css`. You can customize:
- Background colors
- Text colors  
- Accent colors
- Hover states

## 🚀 Deployment

### GitHub Pages (Recommended)

This site is configured for GitHub Pages deployment:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update personal website"
   git push origin main
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Enable GitHub Pages from the `main` branch
   - Your site will be available at `https://yourusername.github.io`

### Alternative Deployments

- **Vercel**: Connect your GitHub repo at [vercel.com](https://vercel.com)
- **Netlify**: Deploy from GitHub at [netlify.com](https://netlify.com)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Color Reference

### Gruvbox Dark Palette
```css
--gruvbox-bg0: #282828    /* Main background */
--gruvbox-bg1: #3c3836    /* Secondary background */
--gruvbox-fg1: #ebdbb2    /* Primary text */
--gruvbox-orange: #fe8019 /* Primary accent */
--gruvbox-yellow: #fabd2f /* Secondary accent */
--gruvbox-blue: #83a598   /* Links */
--gruvbox-green: #b8bb26  /* Success states */
--gruvbox-gray: #928374   /* Muted text */
```

## 🤝 Contributing

This is a personal website template, but feel free to:
- Fork for your own use
- Submit issues for bugs
- Suggest improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

- **GitHub**: [@vennahlot](https://github.com/vennahlot)
- **LinkedIn**: [/in/yichen-wang-863148106](https://www.linkedin.com/in/yichen-wang-863148106)
- **Itch.io**: [@vennahlot](https://vennahlot.itch.io/)

---

Built with ❤️ using Next.js and the Gruvbox color scheme
