# Icon & Emoji Standards — HØLY™ Design System

**Date:** November 12, 2025  
**Last Updated:** November 13, 2025 (Key Ingredients fix)  
**Status:** ✅ ACTIVE  
**Design System:** HØLY™ v2.0

---

## Overview

HØLY™ uses two distinct visual language systems for iconography: **2D line-art icons** for brand consistency across the design system, and **traditional 3D emojis** exclusively for the Ritual Finder interface to enhance user experience and clarity.

### Recent Updates (November 13, 2025)
1. **Key Ingredients Panel Fix** — Fixed `/components/ui-blocks/PDPModules.tsx` to use proper 2D line-art icons (HOLYWave, HOLYFlower, HOLYDroplet) instead of 3D emojis (🌊, 🌹)
2. **Product Tags Fix** — Fixed `/components/ui-blocks/ProductTags.tsx` TimeTag component to use 2D HOLY icons (HOLYSun, HOLYMoon, HOLYSparkle) instead of emoji unicode characters (☀️, 🌙, ✨)

---

## Rule 1: Brand Icons — 2D Line Art Style

### When to Use
Use 2D line-art icons for **ALL** brand touchpoints, UI components, and design system elements.

### Icon Library
All HØLY™ custom icons are located in `/components/icons/HOLYIcons.tsx`

### Current Icon Set
- **HOLYCircle** — Sacred circle symbol
- **HOLYSparkle** — Ritual/luxury accent
- **HOLYDroplet** — Aftercare/hydration
- **HOLYWave** — Ocean minerals/hydration
- **HOLYLeaf** — Natural/organic
- **HOLYFlower** — Intimate/delicate ingredients
- **HOLYRecycle** — Renewal/sustainability
- **HOLYCart** — Commerce/shopping
- **HOLYCompass** — Navigation/guidance
- **HOLYFire** — Energy/intensity (Ritual Vital)
- **HOLYWater** — Cleansing/healing (Ritual Aftercare)
- **HOLYHeart** — Connection/love (Ritual Union)
- **HOLYHand** — Touch/intimacy (Ritual Touch)
- **HOLYMoon** — Cycles/renewal (Ritual Renewal)

### Implementation
```tsx
import { HOLYSparkle, HOLYCircle } from '../components/icons/HOLYIcons';

<HOLYSparkle size={24} color="#1A1A1A" />
```

### Design Characteristics
- **Style:** 2D line-art, minimal, elegant
- **Stroke:** Consistent 2px weight
- **Size:** Typically 18-24px (adjustable via props)
- **Color:** Dynamic via props, typically Temple Black (#1A1A1A) or contextual brand colors

### Use Cases
- Section headings throughout the design system
- Product badges and labels
- Navigation elements
- CTA buttons and interactions
- Product cards
- System components
- **Key Ingredients panels** (use HOLYWave, HOLYFlower, HOLYDroplet)
- All UI touchpoints except Ritual Finder

---

## Rule 2: Ritual Finder — Traditional 3D Emojis

### When to Use
Use traditional 3D Unicode emojis **ONLY** within the Ritual Finder interface (`/components/ui-blocks/YONIInterface.tsx`).

### Why This Exception Exists
The Ritual Finder is a conversational, intimate tool that helps users identify their piercing location and care needs. Traditional emojis provide:
- **Immediate visual recognition** — Body parts are instantly identifiable
- **Conversational warmth** — Creates a friendly, approachable tone
- **Universal understanding** — Cross-cultural clarity
- **Reduced cognitive load** — No need to interpret abstract icons

### Current Emoji Set (Ritual Finder)
```tsx
const answers = [
  { id: 'ear', label: 'Ear', emoji: '👂' },
  { id: 'nose', label: 'Nose', emoji: '👃' },
  { id: 'lip', label: 'Lip', emoji: '👄' },
  { id: 'navel', label: 'Navel', emoji: '⭕' },
  { id: 'intimate', label: 'Intimate', emoji: '🌸' },
  { id: 'other', label: 'Other', emoji: '✨' }
];
```

### Implementation
```tsx
<span style={{ fontSize: '18px' }}>{answer.emoji}</span>
```

### Future Ritual Finder Options
As new piercing location options are added to the Ritual Finder, **continue using traditional 3D emojis** for consistency:
- Choose emojis that are clear, appropriate, and relevant
- Maintain 18px font size
- Prioritize body-part emojis when available
- Use symbolic/abstract emojis for non-specific options

---

## Summary

| Context | Icon Style | Location | Example |
|---------|-----------|----------|---------|
| **Brand/UI** | 2D Line Art | `/components/icons/HOLYIcons.tsx` | `<HOLYSparkle size={24} />` |
| **Ritual Finder** | 3D Traditional Emojis | `/components/ui-blocks/YONIInterface.tsx` | `emoji: '👂'` |

---

## Why This Distinction Matters

1. **Brand Consistency** — 2D line icons maintain HØLY's luxury, minimal aesthetic across all brand touchpoints
2. **User Clarity** — Emojis in Ritual Finder provide instant recognition in a high-stakes, personal context
3. **Contextual Flexibility** — Each approach serves its specific purpose without compromising the other

---

**Note:** This is a permanent design system standard. Do not use emojis outside of Ritual Finder, and do not use 2D line icons inside Ritual Finder.
