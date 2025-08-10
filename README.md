# 🚀 Agilitas - Modern Sports Brand Website

A stunning, interactive website built for Agilitas Sports with cutting-edge animations and responsive design.

![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15-FF0055?style=for-the-badge&logo=framer)

## ✨ Features

### 🎨 **Modern Design System**
- **Glassmorphism UI**: Blurred backgrounds and modern aesthetics
- **Custom Clip Paths**: Unique diagonal cuts and geometric shapes
- **Responsive Layout**: Perfect on all devices (mobile-first approach)
- **Dark Theme**: Professional black/dark color scheme

### 🎭 **Advanced Animations**
- **Framer Motion Integration**: Smooth, professional animations throughout
- **Scroll-triggered Animations**: Elements animate as they come into view
- **Interactive Hover Effects**: Scale and zoom animations on images
- **Staggered Animations**: Sequential element entrance effects
- **Mobile-responsive Animations**: Optimized for all screen sizes

### 📱 **Components**

#### **Responsive Navigation Bar**
- **Mobile**: Animated hamburger menu with slide-down dropdown
- **Desktop**: Centered, pill-shaped navbar with glassmorphism
- **Features**: Smooth cross transformation, backdrop blur, hover effects

#### **Hero Section**
- **Dynamic Background**: Large hero image with custom positioning
- **Animated Text**: Sliding text overlays with shadows
- **Geometric Overlays**: Custom-shaped banners with diagonal cuts

#### **Content Sections**
- **Tradition Cards**: Image cards with hover zoom effects
- **Grid Layout**: Responsive image grid with individual animations
- **Coming Soon Carousel**: Fixed-width slides with smooth animations
- **Join Movement**: Interactive call-to-action sections

#### **Modern Footer**
- **Multi-column Layout**: Logo, navigation, contact information
- **Social Media Icons**: LinkedIn, Instagram, YouTube integration
- **Contact Details**: Complete address and email information

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS 4.0 with custom utilities
- **Animations**: Framer Motion for smooth interactions
- **Fonts**: Space Grotesk via Next.js font optimization
- **UI Components**: Shadcn/ui with Embla Carousel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Abhay-Bhardwaj/agilitas.git

# Navigate to project directory
cd agilitas

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Port Conflicts
If port 3000 is occupied, the dev server will automatically use port 3001.

## 📁 Project Structure

```
src/
├── app/
│   ├── Components/
│   │   ├── NavBar.tsx          # Responsive navigation with animations
│   │   ├── MainContent.tsx     # Main page content with framer-motion
│   │   └── Footer.tsx          # Multi-section footer component
│   ├── globals.css             # Global styles and custom CSS
│   ├── layout.tsx              # Root layout with font optimization
│   └── page.tsx                # Home page composition
├── components/ui/              # Shadcn/ui components
│   └── carousel.tsx            # Embla carousel component
└── lib/
    └── utils.ts                # Utility functions
```

## 🎯 Key Animations

### **Page Load**
- Navbar slides down from top
- Hero image scales in smoothly
- Text elements fade in with stagger

### **Scroll Interactions**
- Sections animate as they enter viewport
- Images scale on hover
- Cards lift with shadow effects

### **Mobile Interactions**
- Hamburger transforms to cross
- Menu slides down with backdrop blur
- Touch-friendly hover states

## 🎨 Custom Styling

### **Clip Paths**
- `.clip-triangle`: Custom diagonal cuts
- `.clip-triangle2`: Alternative angle cuts
- `.clip-shape-triangle`: Geometric overlays

### **Glassmorphism**
- `bg-black/40 backdrop-blur-md`: Translucent backgrounds
- `border border-white/20`: Subtle borders

### **Animations**
- Scroll-triggered visibility
- Smooth hover transitions
- Mobile-optimized interactions

## 📱 Responsive Design

- **Mobile First**: Optimized for small screens
- **Tablet Support**: Medium breakpoint adaptations  
- **Desktop Enhancement**: Large screen optimizations
- **Touch Friendly**: Proper tap targets and interactions

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npx tsc --noEmit
```

## 🌟 Performance Optimizations

- **Next.js 15**: Latest performance improvements
- **Image Optimization**: Automatic WebP conversion
- **Font Optimization**: Preloaded custom fonts
- **Code Splitting**: Automatic bundle optimization
- **CSS Optimization**: Tailwind CSS purging

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of a hiring assignment for Agilitas Sports.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Shadcn/ui** for beautiful components

---

Built with ❤️ for Agilitas Sports
