# Project Spec: Next.js & Tailwind Migration

## Overview
Migrate the existing static HTML/CSS/JS website (`orphosys-education`) to a modern Next.js 14+ (App Router) and Tailwind CSS stack.

## Goals
- **Modern Stack**: Transition from static HTML to Next.js for better performance, SEO, and developer experience.
- **Tailwind Integration**: Replace CDN-based Tailwind with a properly configured local Tailwind CSS environment.
- **Componentization**: Break down the monolithic HTML pages into reusable React components (Header, Footer, Button, Section, etc.).
- **Optimized Assets**: Use `next/image` for image optimization and local asset management.
- **Responsive Design**: Ensure mobile-first responsiveness across all pages.

## Scope of Work
- **Pages (26 total)**:
  - Home (`index.html`)
  - About Us (`about_us_with_team_photos.html`)
  - Courses (Multiple pages)
  - Franchise/Affiliation (Multiple pages)
  - Student Portals/Logins (Multiple pages)
  - Galleries (Photo/Video)
  - Downloads/Sample Files
- **Shared Components**:
  - Global Navigation (with dropdowns)
  - Global Footer
  - Service Modals
  - Image Carousels (Swiper.js migration to a React-based solution)
- **Technical Requirements**:
  - Next.js App Router
  - Tailwind CSS v3+
  - TypeScript (for better type safety)
  - Lucide React or similar for icons
  - Framer Motion (optional, for animations currently in CSS)

## Out of Scope
- Backend implementation (unless simple API routes are needed for forms).
- Content changes (sticking to 1:1 migration initially).
