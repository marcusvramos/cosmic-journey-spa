# 🚀 Cosmic Journey SPA

A modern, responsive Single Page Application built with React and SASS, featuring a space-themed design with smooth animations and interactive elements.

## 🛠️ Tech Stack

- **React** 19.1.0
- **SASS** 1.89.2
- **Create React App** 5.0.1
- **CSS Grid & Flexbox** for layouts
- **Pure CSS animations** (no external libraries)

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marcusvramos/cosmic-journey-spa.git
cd cosmic-journey-spa
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages

## 🎨 Project Structure

```
src/
├── components/
|   |── button/          # Reusable button components
│   ├── header/          # Navigation header with mobile menu
│   ├── hero/            # Landing section with CTA
│   ├── card/            # Reusable card components
│   ├── offers/          # Products/services section
│   ├── text-section/    # Content section with read more
│   └── footer/          # Footer component
├── styles/
│   ├── _variables.scss  # SASS variables (colors, spacing, etc.)
│   ├── _mixins.scss     # Responsive mixins
│   └── _reset.scss      # CSS reset and base styles
├── App.js              # Main application component
└── App.scss            # Global styles and layout
```

## 🚀 Deployment

This project is configured for easy deployment to GitHub Pages:

```bash
npm run deploy
```

The site will be available at: `https://marcusvramos.github.io/cosmic-journey-spa`

---

Built with ❤️ using React and SASS
