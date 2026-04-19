# Overview

This is a professional wealth advisory platform for "Invest with Diomin" built as a full-stack web application. The platform showcases investment services, real estate portfolio, philanthropic initiatives, and provides content through insights/articles. It features a complete authentication system with email magic links and Google OAuth, protected user dashboards, AI-powered chat integration, and comprehensive admin capabilities for managing leads, newsletter subscriptions, and catalog downloads.

The application follows a modern React/TypeScript frontend with an Express.js backend, using PostgreSQL (via Neon) for data persistence and Drizzle ORM for database operations. The architecture emphasizes automation, real-time features, and third-party service integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- TailwindCSS v4 with shadcn/ui component library (New York style)
- Tanstack Query (React Query) for server state management
- React Router for client-side routing
- Framer Motion for animations (noted as removed in one version but present in another)

**Design Patterns:**
- Component-based architecture with reusable UI components
- Custom hooks for shared logic (useAuth, useProtectedRoute, useLiveMetrics)
- Context providers for global state (AuthProvider, ThemeProvider)
- Path aliases (@/, @shared/, @assets/) for clean imports

**Key Features:**
- Dark mode support with theme toggle
- Responsive design for mobile/tablet/desktop
- Protected routes requiring authentication
- Real-time data updates (30-second refresh on feeds)
- Toast notifications via Sonner
- Form validation using React Hook Form with Zod schemas

## Backend Architecture

**Technology Stack:**
- Express.js server with TypeScript
- Dual entry points for development (index-dev.ts with Vite middleware) and production (index-prod.ts serving static files)
- Drizzle ORM for database operations
- Neon serverless PostgreSQL database

**API Design:**
- RESTful API endpoints under `/api/*` namespace
- Separate route handlers in `server/routes.ts`
- Input validation using Zod schemas from shared directory
- Structured error responses with HTTP status codes

**Development vs Production:**
- Development: Vite dev server with HMR, API middleware, runtime error overlays
- Production: Bundled with esbuild, static file serving, optimized assets
- Environment-specific configuration via NODE_ENV

**Database Schema (8 core tables):**
- `users` - User accounts (currently plaintext passwords - SECURITY WARNING)
- `insights` - Blog posts/articles with categories, tags, and publishing workflow
- `media` - Social media imports (Instagram/Threads integration)
- `leads` - Contact form submissions for lead capture
- `catalog_items` - Service/product catalog (XcloudMultixPro, fund recovery, etc.)
- `newsletter_subscriptions` - Email subscriber management
- Additional tables for consultation requests, properties, etc.

**Security Considerations:**
- Passwords currently stored in plaintext (CRITICAL: requires bcrypt/argon2 before production)
- Row-level security (RLS) policies mentioned for Supabase
- Session management via Supabase Auth
- CORS and security headers configuration

## Authentication System

**Providers:**
- Email Magic Links - Passwordless authentication via OTP
- Google OAuth 2.0 - One-click social authentication
- Supabase Auth - Backend authentication service

**Session Management:**
- Automatic session persistence across page reloads
- Secure token storage in browser
- Protected route redirects for unauthenticated users
- Sign-out clears all session data

**Protected Routes:**
- `/insights` - User dashboard (requires authentication)
- Future `/dashboard/*` routes planned
- Automatic redirect to `/sign-in` for unauthorized access
- Post-authentication redirect back to original route

## External Dependencies

### Third-Party Services

**Supabase:**
- PostgreSQL database with serverless architecture
- Authentication service (magic links, OAuth)
- Row-level security for data protection
- Edge functions for serverless automation (mentioned but not fully implemented in main codebase)

**Neon Database:**
- Serverless PostgreSQL hosting
- Connection via `@neondatabase/serverless` package
- Environment variable: `DATABASE_URL`

**OpenAI Integration:**
- GPT-4 Turbo model for AI chat feature
- Financial advisor system prompt
- API endpoint: `POST /api/v1/openai/query`
- Input validation (2-2000 characters)
- Development: Vite plugin middleware
- Production: Vercel serverless function

**Mailchimp:**
- Newsletter subscription management
- Audience ID: 5bb1893f5c
- Server prefix: us5
- Dual-sync with Supabase for subscriber data
- Automation workflows for email sequences

**Analytics:**
- Google Analytics 4 (GA4) - Optional integration
- Meta Pixel - Optional conversion tracking
- Mentioned but not deeply implemented in visible code

### Infrastructure

**Deployment Platforms:**
- Vercel (primary recommendation) - Edge caching, serverless functions
- Support for traditional hosting mentioned
- Environment variables managed through platform

**Build Tools:**
- Vite 5.4+ for frontend bundling
- esbuild for server-side bundling
- TailwindCSS compiler via Vite plugin
- TypeScript strict mode enabled

### Development Tools

**Replit Plugins:**
- `@replit/vite-plugin-runtime-error-modal` - Error overlays
- `@replit/vite-plugin-cartographer` - Dev only
- `@replit/vite-plugin-dev-banner` - Dev only

**Custom Vite Plugins:**
- `metaImagesPlugin` - Updates og:image meta tags with correct domain
- `vitePluginApi` - Dev server middleware for OpenAI API route

**UI Component Library:**
- Radix UI primitives (20+ components)
- shadcn/ui wrapper components
- Lucide icons library
- class-variance-authority for component variants

### Database Operations

**Drizzle ORM:**
- PostgreSQL dialect
- Schema definitions in `shared/schema.ts`
- Migration output to `./migrations`
- Push command for schema sync: `npm run db:push`

**Seeding:**
- Sample data script: `tsx server/seed.ts`
- Idempotent seeding (skips existing slugs)
- Includes sample insights and catalog items

### Content & Media

**Social Media Imports:**
- Instagram/Threads content ingestion (mentioned in attached assets)
- Pinterest keyword import (session-based, mock implementation)
- Hourly sync edge functions referenced

**File Storage:**
- Public assets in `client/public/`
- Opengraph images (png/jpg/jpeg support)
- Logo and brand assets
- Favicon auto-generation