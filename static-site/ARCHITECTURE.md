# Architecture: Next.js & Tailwind Migration

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Media**: Swiper React (for carousels)

## Directory Structure
```text
/
├── app/                # Route handlers and pages
│   ├── (auth)/         # Login/Portal routes
│   ├── about/          # About Us
│   ├── courses/        # Course listings
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
│   ├── common/         # Header, Footer, Layout
│   ├── ui/             # Atomic buttons, modals, cards
│   └── home/           # Home-page specific components
├── public/             # Static assets (images, favicons)
├── lib/               # Utility functions and constants
└── styles/            # Global CSS and Tailwind directives
```

## Key Modules
- **Layout System**: Uses Next.js nested layouts for shared headers/footers.
- **Image Optimization**: Extensive use of `next/image` for responsive, lazy-loaded images.
- **Dynamic Interaction**: Swiper.js transitioned from vanilla script to React component for carousels.
- **Styling Strategy**: Tailwind configuration to match previous `index.html` inline config.
