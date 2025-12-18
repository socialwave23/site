# SocialWave Agency - Design Guidelines

## Design Approach
**Modern Italian Agency Style**: Inspired by makeitweb.it with bold blue hero sections, strong typography, phone mockups showcasing work, and clean white sections. Focus on social media marketing services (TikTok/Instagram) without website development.

## Brand Colors
**Primary Blue**: #233DFF (bright blue) - Hero backgrounds, CTAs, primary buttons
**Light Blue**: #CAE8FF (sky blue) - Accents, highlights, icon backgrounds, secondary elements
**Dark Navy**: #050A30 (very dark navy) - Logo text, footer, dark sections

**Neutrals**:
- Dark navy #050A30 for dark sections and footer
- White (#ffffff) for main backgrounds
- Light gray (#f8fafc / gray-50) for subtle section backgrounds
- Gray-600 for body text, Gray-400 for secondary text

## Typography System
**Font Family**: Inter (Google Fonts)
- Hero Headlines: 900 weight, very large (text-5xl to text-7xl), italic style
- Section Titles: 800-900 weight, text-4xl to text-5xl
- Subheadings: 700 weight, text-xl to text-2xl
- Body Text: 400 weight, text-base to text-lg
- Labels/Buttons: 600-700 weight, text-sm, uppercase tracking

**Special Text Treatments**:
- Key words in light blue (#CAE8FF) on dark/blue backgrounds
- Bold italic for strong statements

## Layout System
**Spacing**: Generous whitespace throughout
- Container: max-w-7xl with px-4 sm:px-6 lg:px-8
- Section Padding: py-16 to py-20 for desktop
- Component Gaps: gap-6, gap-8, gap-12, gap-16

## Navigation
**Fixed Navbar with Dropdown Menus**:
- White background when scrolled, transparent on hero
- Logo left, navigation center, phone CTA right
- Dropdown menus for "Lavori" and "Risorse" sections:
  - **Lavori**: Categories on left, project preview cards on right
  - **Risorse**: Cards with icon, title, description, and link
- Mobile: Hamburger menu with simplified navigation

**Navigation Items**:
- Home
- Servizi
- Lavori (dropdown)
- Risorse (dropdown)
- Contatti
- NO "Recensioni" section

## Color Usage Rules

### Primary Blue (#233DFF)
- Hero section backgrounds
- Primary CTA buttons
- Active navigation states
- Icon accents

### Light Blue (#CAE8FF)
- Accent text on blue/dark backgrounds
- Icon container backgrounds
- Hover states for light elements
- Category badges
- Input focus rings

### Neutrals
- White: Content backgrounds, cards
- Gray-50: Subtle section backgrounds
- Slate-900: Dark sections, footer
- Gray-600: Body text
- Gray-400: Secondary text

## Component Styles

### Buttons
**Primary CTA**: 
- bg-[#233DFF] text-white rounded-full
- Hover: bg-[#1a2fc7]

**Secondary/Outline**:
- bg-white/10 border-white/30 text-white rounded-full
- On light: bg-white border-gray-200 text-gray-700

### Cards
- White background, rounded-3xl, shadow-lg
- Padding: p-6 to p-8

### Badges/Tags
- bg-[#CAE8FF] text-[#233DFF]
- Rounded-full, text-xs to text-sm, font-semibold

### Form Inputs
- Border: border-gray-300
- Focus: border-[#233DFF] ring-[#CAE8FF]
- Rounded-xl

## Section Structure

### Hero Section
- Full-width blue (#233DFF) background
- Large bold headline with light blue accent words
- Phone mockups on right side
- Gradient overlays for depth

### Service/Feature Sections
- Alternating white and blue backgrounds
- Icon + title + description pattern
- Grid layouts (2-4 columns)

### Stats Section
- White background
- Large numbers with icons
- 4-column grid on desktop

### CTA Sections
- Dark (slate-900) background
- Light blue accent text
- Centered layout

### Footer
- Slate-900 background
- Light blue (#CAE8FF) for headings
- 4-column grid layout

## Animations
- Scroll animation for logo ticker
- Hover transitions on cards and buttons
- Subtle transform effects
- NO excessive animations
