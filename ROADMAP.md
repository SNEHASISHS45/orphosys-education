# Roadmap: Dynamic Admin Panel

## Milestone 1: Infrastructure & Authentication
- [ ] Phase 1: Database Expansion
  - Update `schema.prisma` with content models.
  - Run migrations and generate client.
- [ ] Phase 2: Authentication Implementation
  - Set up NextAuth or custom Auth provider.
  - Create admin login page and middleware protection.

## Milestone 2: Core Admin Features
- [ ] Phase 3: Global Settings & Layout
  - Implement Admin sidebar and layout.
  - Create Global Settings form (Logo, Headers, Footers).
- [ ] Phase 4: Page Content Manager
  - Create editors for Hero sections and general page text.
  - Implement local asset upload system (/public/uploads).

## Milestone 3: Specialized Content Dashboards
- [ ] Phase 5: Courses Management
  - Implement CRUD for courses (title, price, details).
- [ ] Phase 6: Team & Partners
  - Implement management tools for team members and partner logos.

## Milestone 4: Frontend Integration & Polish
- [ ] Phase 7: Dynamic Data Plumbing
  - Update frontend components to fetch data from Prisma.
- [ ] Phase 8: Verification & Launch
  - Audit all pages for dynamic updates.
  - Performance and security check.
