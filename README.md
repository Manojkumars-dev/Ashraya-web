# Ashraya Constructions & Interiors

> **"Dreams on Beams."**  
> _Architecture · Civil Engineering · Bespoke Luxury Interiors_  
> _Hyderabad · Bengaluru · Chennai_

An architectural, civil contracting, and bespoke interior design atelier website featuring an interactive 3D anatomy room, curated investment packages, live square-footage cost estimators, and showcase monographs.

---

## 🏛️ Project Overview

**Ashraya Constructions & Interiors** unites structural civil engineering with tailored interior architecture under one single command. This repository contains the complete web experience with:

- **Interactive 3D Interior Anatomy**: A real-time 3D room visualizer built with Three.js / React Three Fiber showcasing 5 build stages from bare shell to evening glow with clickable detail hotspots.
- **Curated Investment Tiers**: Complete breakdown of Basic (₹1,999), Classic (₹2,399), Premium (₹2,699), and Royal (₹2,999) packages with full 12-area specifications.
- **Interactive Cost Estimator**: Live slider-based built-up area cost calculator with instant estimates.
- **Signature Monograph Portfolio**: High-resolution case studies of delivered luxury villas and penthouses (_The Alabaster Villa_, _Verdant Horizon Penthouse_, _Elysian Estate_).
- **8-Stage Execution Blueprint**: Disciplined stage-gate methodology from initial spatial brief to ceremonial key handover.
- **Tactile Material Atelier**: Quarry provenance and material specifications (Italian Statuario, Burma Teak, Calacatta Gold, Fenix NTM).

---

## 🛠️ Technology Stack

| Layer                   | Technologies                                                                                                                                                                                                                       |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework & Runtime** | [React](https://react.dev/) (v18/v19) + [Vite](https://vitejs.dev/)                                                                                                                                                                |
| **3D Rendering**        | [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei), [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) |
| **Animations & Motion** | [Framer Motion](https://www.framer.com/motion/)                                                                                                                                                                                    |
| **Icons**               | [Lucide React](https://lucide.dev/)                                                                                                                                                                                                |
| **Typography**          | Playfair Display, Cormorant Garamond, Manrope, Inter                                                                                                                                                                               |
| **Styling**             | Custom Dark Luxury CSS Design System                                                                                                                                                                                               |

---

## 📂 Project Structure

```text
ashraya-website-main/
├── index.html                  # HTML entry point with luxury Google Fonts
├── package.json                # Dependencies and build scripts
├── vite.config.js              # Vite bundler configuration
├── src/
│   ├── main.jsx                # Application root mounting Framer Motion config
│   ├── App.jsx                 # Master layout combining Navbar, Hero, 3D Scene, and Sections
│   ├── data.js                 # Centralized data store (Brand assets, Services, Packages, Projects)
│   ├── motion.jsx              # Motion animation curves and easing helpers
│   ├── styles.css              # Custom luxury design system & responsive layout styles
│   └── components/
│       ├── AshrayaLogo.jsx     # Bespoke vector architectural A-beam logo monogram
│       ├── Logo.jsx            # Logo wrapper component supporting header/footer variants
│       ├── Navbar.jsx          # Responsive floating navigation with mobile drawer
│       ├── Hero.jsx            # Hero section with photography, stats & typography
│       ├── Scene.jsx           # 3D Interactive Three.js room with stage controls & hotspots
│       ├── Packages.jsx        # 4 Investment tiers with specification matrix & live calculator
│       └── Sections.jsx        # About, Services, Projects, Compare, Why, Process, Materials,
│                               # Testimonials, Trust, CTA, Contact, and Footer
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (or yarn / pnpm)

### Installation

1. Clone or open the repository:

   ```bash
   cd "ashraya-website-main"
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local development server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

---

## 📦 Production Build

To generate the optimized production build:

```bash
npm run build
```

The output will be placed in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 🎨 Key Features & Modules

### 1. 3D Architectural Anatomy (`Scene.jsx`)

- **Stage Navigation**: Step through 5 distinct build phases (`Bare shell` → `Flooring & walls` → `Ceiling & lighting` → `Furniture & joinery` → `Evening glow`).
- **Interactive Hotspots**: Click gold annotations to view detailed specifications for Kitchen, Living Room, Bedroom, Bathroom, Wardrobe, Lighting, and Flooring.
- **Finish Switcher**: Toggle material finishes dynamically between Basic, Classic, Premium, and Royal tiers.
- **Lighting & Post-Processing**: Bloom filters, vignettes, directional shadows, and warm ambient luminescence.

### 2. Investment Packages & Cost Estimator (`Packages.jsx`)

- Interactive slider from **1,500 to 15,000 SQ.FT** calculating approximate project investment in real-time.
- Expandable specification drawer showcasing materials and brands per room (e.g. _Blum Servo-Drive_, _Dekton_, _Gessi_, _Schüco_, _Lutron_).

### 3. Comprehensive Discipline Monograph (`Sections.jsx`)

- **8 Services**: Full deliverables for Civil Construction, Interior Architecture, Modular Kitchens, Monumental Living Spaces, Master Suites, Spa Bathrooms, False Ceilings, and Custom Millwork.
- **Comparison Matrix**: Detailed tabular breakdown across 9 construction and interior dimensions.
- **Private Atelier Booking**: Complete consultation inquiry form with service selectors and package interest.

---

## 📄 License & Copyright

© 2026 **Ashraya Constructions & Interiors**. All Rights Reserved.  
_DREAMS ON BEAMS · HYDERABAD · BENGALURU · CHENNAI_
