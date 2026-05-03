# Project Structure Documentation

## Overview

Your portfolio project has been refactored into a clean, modular component-based architecture following React best practices. This makes the codebase more maintainable, testable, and scalable.

## Directory Structure

```
src/
├── components/
│   ├── index.ts                      # Barrel export for easy imports
│   ├── Section.tsx                   # Reusable section wrapper
│   ├── TimelineItem.tsx              # Reusable timeline entry component
│   ├── PublicationCard.tsx           # Reusable publication card component
│   ├── Navigation.tsx                # Navigation bar
│   ├── Hero.tsx                      # Hero/intro section
│   ├── ContactStrip.tsx              # Contact information strip
│   ├── About.tsx                     # About/overview section
│   ├── Experience.tsx                # Experience/career section
│   ├── Research.tsx                  # Publications/research section
│   ├── Education.tsx                 # Education section
│   ├── EngagementSection.tsx         # Engagement/collaboration CTA
│   └── Footer.tsx                    # Footer
├── constants/
│   ├── animations.ts                 # Reusable animation definitions
│   └── data.ts                       # All data for sections (experience, education, publications, etc.)
├── App.tsx                           # Main component (now clean and readable)
├── main.tsx
└── index.css
```

## Component Architecture

### Core Components

- **Navigation**: Renders the top navigation bar with links to all sections
- **Hero**: Large header section with name and tagline
- **ContactStrip**: Contact information and social links
- **About**: Overview section with profile image and bio
- **Experience**: Career timeline using TimelineItem components
- **Research**: Publications grid using PublicationCard components
- **Education**: Education timeline using TimelineItem components
- **EngagementSection**: Call-to-action for collaboration
- **Footer**: Footer with social links

### Reusable Components

- **Section**: Wrapper component for consistent section styling
- **TimelineItem**: Individual timeline entry (used for experience and education)
- **PublicationCard**: Individual publication/research entry

### Constants

- **animations.ts**: Export reusable animation configurations (`fadeIn`)
- **data.ts**: Centralized data for all sections, including:
  - `NAVIGATION_ITEMS`: Navigation menu items
  - `SOCIAL_LINKS`: Social media links
  - `EXPERIENCE_DATA`: Career history
  - `EDUCATION_DATA`: Education history
  - `PUBLICATIONS_DATA`: Research publications
  - `FOOTER_LINKS`: Footer links

## Benefits of This Structure

1. **Maintainability**: Each component has a single responsibility
2. **Reusability**: Common patterns (Section, TimelineItem, PublicationCard) are abstracted
3. **Scalability**: Easy to add new sections or modify existing ones
4. **Testability**: Components can be tested independently
5. **Data-Driven**: All content in `constants/data.ts` makes updates easier
6. **Clean App.tsx**: Main component is now just an orchestration of smaller components

## Making Updates

### Adding a new experience entry:
Edit `src/constants/data.ts` → `EXPERIENCE_DATA` array

### Adding a new publication:
Edit `src/constants/data.ts` → `PUBLICATIONS_DATA` array

### Styling a component:
Edit the component file (e.g., `src/components/Hero.tsx`)

### Creating a new section:
1. Create a new component file in `src/components/`
2. Create the component following existing patterns
3. Add it to `src/components/index.ts`
4. Import it in `src/App.tsx`
5. Add it to the JSX in App.tsx

## Import Examples

```typescript
// Before (was harder to navigate)
import { ...huge list of items... } from "./App";

// After (cleaner with barrel exports)
import { Navigation, Hero, About } from "./components";
import { EXPERIENCE_DATA, PUBLICATIONS_DATA } from "./constants/data";
```

## Next Steps for Further Improvement

1. **Extract Styles**: Move hardcoded Tailwind classes to shared style constants
2. **Add Types**: Create a `types/` directory for TypeScript interfaces
3. **Add Hooks**: Create custom hooks for common patterns (e.g., `useScrollToSection`)
4. **Add Animations**: Create more reusable animation variants in `constants/animations.ts`
5. **Add Tests**: Create `.test.tsx` files for each component
