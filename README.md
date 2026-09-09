# Luxury Presence

A responsive luxury real-estate landing page created for the assessment exam. The site presents Marci Metzger and The Ridge Realty Group as a local Pahrump, Nevada real-estate service, with an editorial visual style, property highlights, service information, and contact details.

## Features

- Full-screen hero section with parallax motion and animated entrance content.
- Responsive sticky header with a slide-out menu drawer.
- Realtor profile and local-expertise introduction.
- Animated "Get It Sold" feature cards for sellers and buyers.
- Listing search interface with location, property type, sort, bedroom, bathroom, and price controls.
- Trusted partner and affiliation logos.
- Swipeable and arrow-controlled featured-property showcase with progress indicator.
- Services section covering residential sales, commercial and residential properties, and buyer guidance.
- Social media links, contact form, office details, working hours, and Pahrump map embed.
- Responsive layouts for mobile, tablet, and desktop breakpoints.
- Local WebP imagery and SVG assets bundled with the application.

> This is a front-end assessment implementation. The listing search currently presents UI controls without querying a listings API, and the contact form logs submitted data to the browser console instead of sending it to a backend.

## Tech Stack

- React 19 and TypeScript
- Vite
- React Router
- Tailwind CSS 4
- shadcn/ui primitives
- Framer Motion
- Lucide React and React Icons
- Geist variable font

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Development

Start the Vite development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, typically `http://localhost:5173`.

### Production build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```text
.
├── public/                  # Public favicon and icon assets
├── src/
│   ├── assets/              # Local property, profile, logo, and section images
│   ├── components/
│   │   ├── sections/        # Landing-page sections
│   │   └── ui/              # Reusable shadcn/ui components
│   ├── layouts/             # Shared page layout and chrome
│   ├── pages/               # Route-level pages
│   ├── routes/              # React Router configuration
│   ├── App.tsx              # Application root
│   ├── index.css            # Tailwind theme and global styles
│   └── main.tsx             # React entry point
├── components.json          # shadcn/ui configuration
├── index.html               # Vite HTML entry point
├── package.json             # Scripts and dependencies
└── vite.config.ts           # Vite, React, Tailwind, and alias configuration
```

## Page Flow

The root route renders the home page in this order:

1. Hero
2. About
3. Proven results / features
4. Listing search
5. Trusted affiliations
6. Featured property showcase
7. Services
8. Social links
9. Contact
10. Office location map

## Design Notes

- The visual system combines warm neutral backgrounds, charcoal sections, amber accents, serif display typography, and sans-serif supporting text.
- Framer Motion is used for scroll reveals, hero parallax, hover transitions, and the draggable property carousel.
- The `@` path alias maps to `src`, keeping imports consistent across components.
- Images are imported from `src/assets` so Vite can optimize and fingerprint them during the build.

## Assessment Notes

The implementation focuses on a polished, responsive presentation and reusable React composition. External integrations such as listing data, form delivery, production social URLs, and final office contact details should be connected before launch.
