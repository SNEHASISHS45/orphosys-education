# Project Spec: Dynamic Admin Panel

## Overview
Build a comprehensive admin dashboard to manage all website content dynamically. This eliminates the need for hardcoded text and assets, allowing administrators to update the site in real-time.

## Goals
- **Full Dynamism**: Every text section, image, and video should be editable.
- **Content Management**: Add/Edit/Delete Courses, Team Members, and Partners.
- **Global Settings**: Manage logos, contact information, and social links centrally.
- **Secure Access**: Admin-only login with username and password.
- **Asset Storage**: Store all uploaded files in a dedicated local folder (`/public/uploads`).

## Technical Requirements
- **Framework**: Next.js 14+ (App Router).
- **OR/DB**: Prisma with PostgreSQL.
- **Auth**: NextAuth.js or custom Auth handler.
- **Storage**: FS-based storage in `public/uploads`.
- **UI Components**: Tailwind CSS for a sleek admin interface.

## Functional Scope
- **Authentication**: Secure login/logout.
- **Global Configuration**: Header/Footer settings, Branding.
- **Page Content Manager**: Editable sections for Home, About, Contact, etc.
- **Courses Dashboard**: Manage course titles, descriptions, and pricing.
- **Resource Management**: Manage team profiles and partner logos.
- **Media Library**: Simple folder-based upload system.

## Out of Scope
- Multi-user roles (initially single admin).
- Advanced analytics dashboard.
- Cloud storage integration (S3/Cloudinary).
