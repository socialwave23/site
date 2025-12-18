# SocialWave Agency Website

## Overview

SocialWave is a modern Italian social media marketing agency website built as a full-stack application. The platform showcases the agency's services, portfolio, and provides a contact form for potential clients. The application features a contemporary design with Italian creative flair, inspired by modern agency websites like Airbnb and Linear.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React 19 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (alternative to React Router)
- TanStack Query (React Query) for server state management and API data fetching

**UI Component System**
- Shadcn/ui component library with Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theming system with CSS variables for colors, spacing, and elevation
- Form handling with React Hook Form and Zod validation

**Design System**
- Typography: Inter font family from Google Fonts, with bold italic headings
- Color palette: Blue (#233DFF) primary, light blue (#CAE8FF) accent, inspired by makeitweb.it
- Icons: Apple emojis used throughout instead of icon libraries (📱 Social Media, 🎬 Foto e Video, ✏️ Grafica)
- Visual elements: Phone mockups as primary display for portfolio content
- Spacing system: Tailwind's standardized spacing scale
- Component patterns: Cards, buttons, forms following modern web design principles
- Design guidelines documented in `design_guidelines.md` for consistency

**Page Structure**
- Home: Blue hero section, client logos ticker, "Cosa facciamo" services section with emoji buttons, stats with emoji icons, features section, and CTA
- Portfolio: Tabbed interface for 3 service categories (Social Media, Foto e Video, Grafica e Stampa) with phone mockups
- Works: Portfolio showcase with fan-arranged phone mockups and category filters
- Clients: Client showcase page
- Contact: Form with validation for client inquiries
- 404: Custom not-found page

**Navigation**
- Dropdown menus: "Lavori" shows collections and project preview cards, "Risorse" shows resource cards (Chi siamo, Perché noi, I nostri clienti)
- Smooth hover interactions with preview cards in dropdowns

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- TypeScript for type safety across the full stack
- HTTP server created with Node's built-in `http` module for WebSocket compatibility

**API Design**
- RESTful API endpoints under `/api` prefix
- POST `/api/contact` - Accepts and stores contact form submissions
- GET `/api/contact` - Retrieves contact messages (admin functionality)
- Request/response validation using Zod schemas
- JSON-based communication with proper error handling

**Development vs Production**
- Development: Vite dev server integrated as Express middleware with HMR support
- Production: Static file serving from compiled `dist/public` directory
- Build process uses esbuild for server bundling and Vite for client bundling
- Server dependencies bundled to reduce filesystem syscalls and improve cold starts

**Shared Code**
- `shared/schema.ts` contains Drizzle ORM schemas and Zod validation schemas
- Type definitions shared between client and server for type safety
- Consistent data models across the full stack

### Data Storage

**Database**
- PostgreSQL as the primary database (configured via `DATABASE_URL` environment variable)
- Drizzle ORM for type-safe database queries and schema management
- Drizzle Kit for schema migrations and database pushes

**Schema Design**
- `users` table: Basic user authentication structure (id, username, password)
- `contact_messages` table: Stores client inquiries (id, name, email, company, message, createdAt)
- UUID primary keys using PostgreSQL's `gen_random_uuid()`
- Timestamps for audit trails

**Data Access Layer**
- Storage abstraction in `server/storage.ts` provides interface for data operations
- In-memory fallback with hardcoded portfolio data for demo purposes
- Separation of concerns between business logic and data access

### Authentication & Authorization

**Current Implementation**
- Basic user schema exists in database
- No active authentication middleware implemented
- Contact form is publicly accessible (no auth required)
- Prepared for future session-based authentication with connect-pg-simple

**Dependencies Available**
- express-session for session management
- connect-pg-simple for PostgreSQL session store
- passport and passport-local for authentication strategies (installed but not configured)

### External Dependencies

**Third-Party UI Libraries**
- Radix UI: Comprehensive set of unstyled, accessible component primitives (@radix-ui/react-*)
- Lucide React: Icon library for consistent iconography
- Embla Carousel: Touch-friendly carousel component
- CMDK: Command palette component
- Class Variance Authority: Utility for managing component variants

**Utility Libraries**
- clsx & tailwind-merge: CSS class name management
- date-fns: Date manipulation and formatting
- react-hook-form: Form state management
- @hookform/resolvers: Integration between React Hook Form and Zod

**Development Tools**
- tsx: TypeScript execution for development
- Replit-specific plugins for development banner and error overlays
- PostCSS with Autoprefixer for CSS processing

**Build & Deployment**
- esbuild: Fast JavaScript/TypeScript bundler for server code
- Vite: Modern frontend build tool with HMR
- Custom build script in `script/build.ts` orchestrates client and server builds

**API Integrations**
- None currently active
- Placeholder for Google Generative AI (Gemini API) found in attached assets
- Structure supports future integrations (Stripe, nodemailer, OpenAI dependencies installed)