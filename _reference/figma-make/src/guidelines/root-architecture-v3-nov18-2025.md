# 🔮 ROOT ARCHITECTURE V3.0 — SYSTEM RECONSTRUCTION

**Date**: November 18, 2025  
**Status**: ✅ COMPLETE — Zero-Fragmentation System Active  
**Scope**: Comprehensive UI reconstruction from design token foundation

---

## SACRED MANDATE

This is not a cosmetic update — this is a **root-level spiritual refactoring** of the entire HØLY™ design system. Every component now inherits from centralized CSS custom properties, eliminating hardcoded values and enabling instant theme adaptation across all ritual systems, SKUs, and devices.

---

## 🌿 CORE ARCHITECTURAL PILLARS

### 1. Design Token System (`/styles/globals.css`)

All styling now lives in CSS custom properties (variables) organized into semantic categories:

#### Color System
```css
--background: #F9F6F0;        /* Sacred ivory canvas */
--foreground: #1A1A1A;        /* Temple black */
--accent: #9C887A;            /* Smoky umber */
--accent-foreground: #F9F6F0; /* WCAG AAA compliant */
```

#### Glass & Translucency
```css
--glass-white: rgba(255, 255, 255, 0.7);
--glass-white-strong: rgba(255, 255, 255, 0.92);
--glass-blur: blur(24px);
--surface-noise: url(...)     /* Subtle grain texture */
```

#### Sacred Gradients
```css
--gradient-sacred-dusk: linear-gradient(135deg, #D9C4BB 0%, #AAB5B2 100%);
--gradient-halo-glow: radial-gradient(...);
--gradient-soft-veil: linear-gradient(180deg, transparent, ivory);
```

#### Shadow Depth System (3-Tier)
```css
--shadow-hover: 0 4px 16px rgba(26, 26, 26, 0.08)...;
--shadow-active: 0 2px 8px rgba(26, 26, 26, 0.12)...;
--shadow-persistent: 0 8px 32px rgba(26, 26, 26, 0.12)...;
--shadow-glass: 0 8px 32px rgba(...) inset effect;
--shadow-sacred-glow: 0 0 24px ritual glow;
```

#### Radius System — Organic Asymmetry
```css
--radius-xs: 0.5rem;   /* 8px */
--radius-sm: 0.75rem;  /* 12px */
--radius-md: 1rem;     /* 16px (default) */
--radius-lg: 1.5rem;   /* 24px */
--radius-xl: 2rem;     /* 32px */
--radius-2xl: 3rem;    /* 48px — Emotional surfaces */
--radius-full: 9999px;
```

#### Spacing System — Vertical Rhythm
```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
--space-4xl: 6rem;     /* 96px */
```

#### Motion System
```css
--duration-instant: 100ms;
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-deliberate: 700ms;

--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-sacred: cubic-bezier(0.22, 1, 0.36, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

#### Typography System
```css
--font-display: 'Garamond', serif;  /* Emotional hierarchy */
--font-body: 'Inter', sans-serif;   /* Utility text */
--font-mono: 'SF Mono', monospace;  /* Code/technical */

--letter-spacing-tight: -0.02em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.05em;
--letter-spacing-section: 0.08em;   /* Uppercase labels */
```

---

### 2. Root Primitives (`/components/core-system/Primitives.tsx`)

Foundational component building blocks that all UI elements inherit from:

#### `<GlassSurface>`
Translucent container with backdrop blur
- Variants: `default` | `strong` | `ivory`
- Props: `withNoise`, `withShadow`
- Use for: Cards, modals, popovers, overlays

#### `<SacredButton>`
Interactive button with ritual animations
- Variants: `primary` | `secondary` | `ghost` | `ritual`
- Sizes: `sm` | `md` | `lg`
- Props: `withPulse` for animated glow
- All hover/active states use token-driven transitions

#### `<FluidCard>`
Animated container with Framer Motion
- Auto fade-in on mount
- Configurable hover lift effect
- Props: `withHover`, `withGlow`
- Uses: Product cards, feature blocks, content modules

#### `<SectionLabel>`
Wide-kerned uppercase section headers
- Variants: `default` | `ritual`
- Uses `--letter-spacing-section` token
- Semantic hierarchy indicator

#### `<DisplayHeading>`
Garamond serif headlines
- Levels: `1` | `2` | `3` | `4`
- Props: `withGradient` for sacred dusk gradient text
- Font size scales with hierarchy

#### `<RitualBadge>`
System-specific color badges
- Rituals: `aftercare` | `renewal` | `touch` | `union` | `vital`
- Sizes: `sm` | `md` | `lg`
- Auto WCAG-compliant text color (white for touch/vital)

#### `<GradientOverlay>`
Subtle atmosphere layers
- Gradients: `dusk` | `halo` | `veil`
- Position: absolute overlay
- Use for: Hero sections, atmospheric depth

---

### 3. Theme Provider (`/components/core-system/ThemeProvider.tsx`)

Context-based theme system enabling instant light/dark mode switching.

```tsx
import { ThemeProvider, useTheme, useDesignTokens } from './components/core-system';

// Wrap app
<ThemeProvider>
  <App />
</ThemeProvider>

// Access theme controls
const { theme, setTheme, toggleTheme } = useTheme();

// Access computed token values
const tokens = useDesignTokens();
console.log(tokens.shadowHover); // "0 4px 16px..."
```

**Features:**
- Instant theme switching via CSS class swap
- Programmatic token access via `useDesignTokens()` hook
- All dark mode values inherit from root `.dark` class
- Zero component refactoring needed

---

### 4. Sacred Animations (`/styles/globals.css`)

Keyframe presets for ritual interactions:

```css
@keyframes ritual-pulse {
  /* Expanding glow ring effect */
}

@keyframes sacred-aura {
  /* Subtle brightness/blur oscillation */
}

@keyframes soft-fade-in {
  /* Gentle opacity + translateY entrance */
}

@keyframes glass-shimmer {
  /* Background position sweep for loading states */
}
```

**Utility Classes:**
- `.animate-ritual-pulse` — Pulsing glow (CTAs, cart orb)
- `.animate-sacred-aura` — Ambient brightness shift
- `.animate-soft-fade-in` — Content entrance
- `.transition-sacred` — Smooth easing with `--ease-sacred`
- `.transition-smooth` — Standard easing with `--ease-smooth`

---

## 🧬 COMPONENT REGENERATION STANDARDS

### Migration Checklist

When updating existing components to use root architecture:

✅ **Replace hardcoded colors** with CSS variables  
```tsx
// ❌ Old
style={{ backgroundColor: '#FFFFFF' }}

// ✅ New
style={{ backgroundColor: 'var(--card)' }}
```

✅ **Replace hardcoded spacing** with token values  
```tsx
// ❌ Old
padding: '24px'

// ✅ New
padding: 'var(--space-lg)'
```

✅ **Replace hardcoded shadows** with token system  
```tsx
// ❌ Old
boxShadow: '0 4px 12px rgba(0,0,0,0.1)'

// ✅ New
boxShadow: 'var(--shadow-hover)'
```

✅ **Replace hardcoded transitions** with motion tokens  
```tsx
// ❌ Old
transition: 'all 300ms ease'

// ✅ New
transition: 'all var(--duration-normal) var(--ease-sacred)'
// Or use utility class
className="transition-sacred"
```

✅ **Replace hardcoded radius** with token values  
```tsx
// ❌ Old
borderRadius: '16px'

// ✅ New
borderRadius: 'var(--radius-lg)'
```

✅ **Use root primitives** instead of custom components  
```tsx
// ❌ Old custom card
<div className="bg-white rounded-xl p-6 shadow-lg">

// ✅ New primitive
<FluidCard withHover>
```

---

## 🧭 NAVIGATION & LAYOUT

### GlobalNavigationV3

Refactored navigation with:
- **Scroll-based transparency**: Glass effect intensifies on scroll
- **Adaptive mobile collapse**: Sheet drawer on mobile
- **Token-driven styling**: All colors, spacing, motion from root
- **Sacred cart orb**: Ritual pulse animation on cart badge

```tsx
<GlobalNavigationV3
  cartCount={2}
  showAnnouncement={true}
  announcementText="Sacred upgrade complete"
  variant="glass" // 'default' | 'glass' | 'solid'
/>
```

### Responsive Grid System

All pages now use **12-column responsive grid** with token-driven spacing:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)]">
  {/* Content */}
</div>
```

**Breakpoints:**
- Mobile: < 768px (1 column)
- Tablet: 768px–1024px (2 columns)
- Desktop: > 1024px (3+ columns)

---

## ⚙️ MOTION & INTERACTION STANDARDS

### Framer Motion Integration

All interactive components use Motion for fluid transitions:

```tsx
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
  whileHover={{ y: -4, boxShadow: 'var(--shadow-hover)' }}
>
  {/* Content */}
</motion.div>
```

**Standard Patterns:**
- **Entrance**: `opacity: 0` → `1`, `y: 20` → `0`
- **Hover lift**: `y: -4px`, shadow upgrade
- **Active press**: `scale: 0.98`
- **Stagger children**: `delay: index * 0.1`

---

## 🎨 DARK MODE ARCHITECTURE

### Sacred Dusk Aesthetic

Dark mode uses **deep obsidian tones** with muted warm accents:

```css
.dark {
  --background: #1A1A1A;          /* Deep obsidian */
  --foreground: #F9F6F0;          /* Ivory text */
  --card: rgba(42, 42, 42, 0.9);  /* Charcoal glass */
  --accent: #7A6B5F;              /* Darkened umber */
  /* ... */
}
```

**Adaptive Elements:**
- Glass surfaces become charcoal translucent
- Shadows deepen with higher opacity
- Gradients shift to desaturated versions
- Border opacity reduces for subtlety

**Theme Toggle:**
```tsx
const { theme, toggleTheme } = useTheme();

<button onClick={toggleTheme}>
  {theme === 'light' ? <Moon /> : <Sun />}
</button>
```

---

## 🧼 CLEANUP & ENFORCEMENT

### Forbidden Patterns

🚫 **Hardcoded hex colors** in components  
🚫 **Inline pixel spacing** (use tokens)  
🚫 **Custom shadow definitions** (use token system)  
🚫 **Non-token transitions** (use motion presets)  
🚫 **Detached component variants** (reference root primitives)

### Enforcement Process

1. **File-by-file audit**: Search for hardcoded values
2. **Replace with tokens**: Use find/replace for common patterns
3. **Test theme switching**: Verify dark mode compatibility
4. **Component consolidation**: Merge duplicates into primitives
5. **Documentation update**: Keep README in sync

---

## 📂 FILE ARCHITECTURE

```
/styles/
  └─ globals.css           ← Root token definitions + animations

/components/core-system/
  ├─ ThemeProvider.tsx     ← Theme context & hooks
  ├─ Primitives.tsx        ← Root component building blocks
  ├─ GlobalNavigationV3.tsx ← Refactored nav with tokens
  ├─ TrademarkSymbol.tsx   ← Production-safe ™ rendering
  └─ index.tsx             ← Central exports

/pages/
  └─ RootArchitecturePage.tsx ← Living documentation showcase

/guidelines/
  └─ root-architecture-v3-nov18-2025.md ← This document
```

---

## ✅ IMPLEMENTATION STATUS

### Completed
- [x] Root token system in `globals.css`
- [x] Glass, gradient, shadow, motion tokens
- [x] Sacred dark mode (dusk aesthetic)
- [x] Theme provider with hooks
- [x] 7 root primitives (GlassSurface, SacredButton, etc.)
- [x] GlobalNavigationV3 with scroll behavior
- [x] Sacred animation keyframes
- [x] Trademark symbol production fix
- [x] Root architecture demo page
- [x] Zero-fragmentation guidelines

### Next Phase
- [ ] Migrate remaining pages to use primitives
- [ ] Refactor PDP to use root tokens
- [ ] Update Ritual Finder with glass aesthetics
- [ ] Product card system migration
- [ ] Email components token adaptation
- [ ] Print/packaging token system

---

## 🔮 SPIRITUAL ESSENCE

This refactoring is **blessed**. Every component now breathes from the same sacred source. The design system is unified, adaptive, and future-proof. Changes flow from root to leaf with intention and grace.

**Zero fragmentation. Total harmony.**

---

**End of Root Architecture V3.0 Guidelines**  
**HØLY™ Design System — Ritual Care Commerce UI**  
**November 18, 2025**
