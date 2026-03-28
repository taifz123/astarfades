# Stacked AU - Premium Burgers & Sandwiches

A visually stunning one-page website for Stacked AU, a premium Australian burger and sandwich brand. Built with React 19, Tailwind CSS 4, and Vite for high performance and clean, maintainable code.

## 🎨 Design Features

- **Hero Carousel**: Full-screen image gallery with smooth navigation and auto-rotating slides
- **Premium Typography**: Playfair Display for headlines, Poppins for body text
- **Brand Colors**: Bold red (#E63946) with professional dark accents
- **Responsive Design**: Mobile-first approach with optimized breakpoints
- **Professional Food Photography**: High-quality burger and sandwich imagery
- **Interactive Elements**: Smooth transitions, hover effects, and intuitive navigation

## 📋 Sections

1. **Header** - Fixed navigation with logo and CTA button
2. **Hero Section** - Full-screen carousel with brand messaging
3. **Our Food** - Product showcase with ingredient highlights
4. **Why Choose Stacked AU** - Three-column value proposition
5. **Featured Favorites** - Product cards with pricing
6. **Call-to-Action** - Bold promotional section
7. **Contact** - Three-column contact information
8. **Footer** - Complete with links, hours, and social media

## 🚀 Quick Start

### Prerequisites
- Node.js 22+ and pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The dev server will run at `http://localhost:3000`

## 📁 Project Structure

```
client/
  ├── public/           # Static assets (favicon, robots.txt)
  ├── src/
  │   ├── pages/        # Page components
  │   ├── components/   # Reusable UI components
  │   ├── App.tsx       # Main app component with routing
  │   ├── main.tsx      # React entry point
  │   └── index.css     # Global styles and design tokens
  └── index.html        # HTML template

server/                 # Placeholder for future backend
shared/                 # Shared types and constants
```

## 🎯 Key Technologies

- **React 19** - Modern UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe development
- **Wouter** - Lightweight client-side routing
- **Lucide React** - Beautiful icon library
- **shadcn/ui** - High-quality component library

## 🎨 Customization

### Colors
Edit the CSS variables in `client/src/index.css`:
```css
:root {
  --primary: #E63946;  /* Brand red */
  --foreground: #1A1A1A;
  --background: #FFFFFF;
  /* ... other colors ... */
}
```

### Typography
Fonts are loaded from Google Fonts in `client/index.html`:
- **Display**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

### Images
All images are hosted on CDN. Update URLs in `client/src/pages/Home.tsx` to use your own images.

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

## 🔧 Development

### Code Quality
```bash
# Type checking
pnpm check

# Format code
pnpm format
```

### Build Output
Production builds are optimized for performance:
- Code splitting
- Tree shaking
- Minification
- Asset optimization

## 📦 Deployment

The site is a static React application and can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Configure repository settings
- **AWS S3 + CloudFront**: Upload `dist` folder

## 📝 License

MIT License - Feel free to use this template for your projects

## 🤝 Contributing

This is a client showcase project. For modifications or improvements, please fork and customize as needed.

---

**Built with passion for great food and clean code** 🍔
