# SocialWave Agency - Design Guidelines

## Design Approach
**Reference-Based Design**: Drawing inspiration from modern agency websites with Italian creative flair, combining Airbnb's polished card aesthetics, Linear's bold typography, and contemporary social media platform design patterns.

## Typography System
**Font Family**: Inter (Google Fonts)
- Headlines (Hero): 900 weight, 5xl-7xl sizes (text-5xl md:text-7xl)
- Section Titles: 800-900 weight, 4xl-5xl sizes
- Subheadings: 700 weight, xl-2xl sizes
- Body Text: 400 weight, base-xl sizes
- Small Text/Labels: 600-700 weight, sm-xs sizes, uppercase with wide tracking

## Layout System
**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Container: max-w-7xl with px-4 sm:px-6 lg:px-8
- Section Padding: py-20 to py-24 for desktop, py-12 for mobile
- Component Gaps: gap-4, gap-6, gap-8, gap-12, gap-16
- Card Padding: p-6, p-8, p-10

## Navigation
**Fixed Navbar**:
- Transparent initially, becomes white/90 with backdrop-blur on scroll
- Logo left, navigation center-right, CTA button right
- Mobile: Hamburger menu with slide-down overlay
- Height: py-4 (scrolled) to py-6 (top)

## Homepage Structure

### Hero Section
**Layout**: Two-column grid (md:grid-cols-2), min-h-screen, centered
**Left Column**:
- Small badge/pill with brand tagline
- Large headline with gradient accent on key phrase
- Descriptive paragraph (text-xl, max-w-lg)
- Two CTAs: Primary (filled) + Secondary (outlined)

**Right Column - Visual Display**:
- Large mockup device (phone/screen representation) with 3rem rounded corners
- Aspect-square container with rotation effect (rotate-3, hover:rotate-0)
- Interior: Social platform cards in 2-column grid
- Floating animation (animate-float: 6s ease-in-out)
- Background gradient blobs with blur effects

### Client Ticker Section
- Full-width horizontal scroll
- Infinite animation (40s linear)
- Logo containers: grayscale with hover color reveal
- Height: py-12

### Services Grid
**Layout**: 4-column grid on desktop (lg:grid-cols-4), 2 on tablet, 1 on mobile
**Cards**:
- Rounded-3xl containers
- Icon in rounded square (14×14 units) at top
- Title + description stacked below
- Hover state: background shifts, icon inverts

### CTA Section
**Full-width**: Gradient background with overlay blobs
- Centered content, max-w-2xl
- Large headline (text-4xl md:text-5xl)
- Single prominent CTA button

## Portfolio Page

### Layout
- Center-aligned header with title + description
- Filter pills: Horizontal flex-wrap, rounded-full buttons
- Grid: 3 columns desktop (lg:grid-cols-3), 2 tablet, 1 mobile

### Portfolio Cards
- Aspect-[4/3] image containers
- Rounded-3xl with shadow
- Overlay gradient on hover (from-dark/90 to transparent)
- Content slides up on hover with stagger delays
- Arrow icon in circle bottom-right

## Contact Page

### Two-Column Layout (lg:grid-cols-2)
**Left Column - Information**:
- Large headline (text-5xl)
- Three info blocks with icon circles (bg-blue-50, rounded-2xl)
- Icons: Mail, Phone, MapPin

**Right Column - Form**:
- Background card (bg-gray-50, rounded-3xl, shadow-lg)
- Fields: Name, Company (grid cols-2), Email, Message (textarea rows-4)
- Inputs: rounded-xl, focus ring effects
- Submit button: full-width, rounded-xl with icon

## Component Library

### Buttons
**Primary**: Rounded-full, bold font, shadow effects, gap-2 for icon
**Secondary**: Outlined with border-2, rounded-full
**Hover**: Slight lift (-translate-y-1) with increased shadow

### Cards
**Standard**: Rounded-3xl, shadow-lg, p-8
**Interactive**: Hover scale or background shift
**Portfolio**: Rounded-3xl with image overflow and gradient overlay

### Icons
**Library**: Lucide React (Menu, X, ArrowRight, Send, social icons, service icons)
**Sizing**: 20-28px for standard, larger for hero elements
**Containers**: Rounded squares/circles with background treatment

### Forms
- Rounded-xl inputs with border states
- Focus: border-social-blue with ring-2
- Labels: Bold, small, text-gray-700
- Spacing: space-y-2 for field groups, space-y-6 for form

## Footer
**Multi-column grid** (md:grid-cols-4):
- Column 1: Logo + tagline
- Columns 2-3: Navigation links
- Column 4: Social icons + contact email
- Bottom bar: Copyright + policy links

## Images

### Hero Section
**Mockup Device Image**: Large phone/screen visualization showing social media platforms (Instagram, TikTok cards with metrics)
- Position: Right column of hero grid
- Treatment: 3D perspective with rotation effect
- Interior: Gradient background with platform cards in grid

### Portfolio Items
**6 Portfolio Images** (via Unsplash):
1. Food photography - restaurant/cooking scene
2. Fashion product - clothing/accessories
3. Tech workspace - computers/office
4. Beauty products - cosmetics still life
5. Fitness/sport - athletic imagery
6. Interior design - modern space

All images: Aspect-[4/3], object-cover, scale on hover

### Client Logos
**Infinite ticker**: Text-based logo placeholders in white/10 containers
- Treatment: Grayscale, opacity-50, hover reveals full color

## Animations
**Minimal, Purposeful**:
- Float animation on hero mockup (6s ease-in-out infinite)
- Infinite scroll for client ticker (40s linear)
- Hover transforms on cards (scale-110 on images, translate-y on overlays)
- Navbar backdrop blur on scroll
- NO excessive animations - focus on smooth transitions

## Accessibility
- Semantic HTML structure
- Focus states on all interactive elements
- Alt text for images
- Proper heading hierarchy
- Consistent form labeling