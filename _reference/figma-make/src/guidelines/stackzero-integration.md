# Stackzero Commerce UI × HØLY Integration Guide

**Version:** 2.0  
**Last Updated:** November 11, 2025  
**Status:** Production Ready

---

## Overview

HØLY™ Design System adopts **Stackzero Commerce UI** (ui.stackzero.co, github.com/stackzero-labs/ui) as the foundational component architecture for e-commerce experiences. This integration merges technical excellence with ritual-luxury brand identity.

### External References

- **Component Playground:** https://ui.stackzero.co/  
- **GitHub Repository:** https://github.com/stackzero-labs/ui  
- **Creator Site:** https://stackzero.co/

---

## Integration Philosophy

### From Stackzero: Technical Structure
- Component hierarchy (ProductCard, CartDrawer, NavigationMenu, etc.)
- Naming conventions and file organization
- Commerce logic patterns (cart, checkout, filters)
- Layout grid systems and responsive behaviors
- Form validation and interaction patterns

### From HØLY: Sacred Brand Identity
- v2.0 Color Palette (Veil Clay, Fogstone Blue, Smoky Umber, etc.)
- Ritual System variants (Aftercare™, Renewal™, Touch™, Union™, Vital™)
- Garamond (display) / Inter (body) typography
- Generous spacing ("breathing room" principle)
- Print & packaging integration (CMYK, foil, emboss)
- Sacred interaction patterns (intentional timing, soft reveals)

---

## Component Mapping

### Stackzero → HØLY Translations

| Stackzero Component | HØLY Component | Notes |
|---------------------|----------------|-------|
| `ProductCard` | `RitualProductCard` | 5 ritual variants with unique color accents |
| `CartDrawer` | `SacredCartExperience` | "Begin Your Ritual" CTA, ritual badges |
| `ProductBadge` | `RitualBadge` | Smoky Umber background with white text |
| `NavigationMenu` | `ExtendedNavWithRitualSelector` | Ritual system filter integration |
| `CheckoutForm` | `IntentionalCheckoutFlow` | Slowed interactions, sacred copy |
| `FilterPanel` | `RitualFilterSort` | Color/ritual-based filtering |
| `ProductGallery` | `RitualImageGallery` | Print-ready image specs |

---

## Color Accessibility Rules

### WCAG AAA Compliance

**Critical:** All text on Smoky Umber and Fogstone Blue backgrounds must use white text for proper contrast.

```css
/* Correct Implementation */
.smoky-umber-bg {
  background-color: #9C887A; /* Smoky Umber */
  color: #F9F6F0; /* Ivory - WHITE TEXT REQUIRED */
}

.fogstone-blue-bg {
  background-color: #AAB5B2; /* Fogstone Blue */
  color: #F9F6F0; /* Ivory - WHITE TEXT REQUIRED */
}

/* Veil Clay - Black text acceptable */
.veil-clay-bg {
  background-color: #D9C4BB; /* Veil Clay */
  color: #1A1A1A; /* Temple Black - acceptable contrast */
}
```

### Token Mapping

```css
:root {
  --accent: #9C887A; /* Smoky Umber */
  --accent-foreground: #F9F6F0; /* White text on Smoky Umber */
  --muted: #AAB5B2; /* Fogstone Blue */
  --muted-foreground: #F9F6F0; /* White text on Fogstone Blue */
  --secondary: #D9C4BB; /* Veil Clay */
  --secondary-foreground: #1A1A1A; /* Black text on Veil Clay */
}
```

---

## Ritual System Variants

### Color Application by Ritual

Each ritual system has a primary accent color applied to:
- Product card borders
- CTA button backgrounds
- Badge backgrounds
- Icon accents
- Hover states

| Ritual System | Primary Color | Text Color on Primary |
|---------------|---------------|-----------------------|
| **Aftercare™** | Fogstone Blue `#AAB5B2` | White `#F9F6F0` |
| **Renewal™** | Veil Clay `#D9C4BB` | Black `#1A1A1A` |
| **Touch™** | Relic Green `#5E6458` | White `#F9F6F0` |
| **Union™** | Veil Clay `#D9C4BB` | Black `#1A1A1A` |
| **Vital™** | Smoky Umber `#9C887A` | White `#F9F6F0` |

---

## Sacred Interaction Patterns

### Motion Timing
- **Hover transitions:** 200-300ms (intentional, not instant)
- **Modal reveals:** 300-400ms with soft easing
- **Loading states:** Minimum 800ms display (no flash)
- **Focus states:** Immediate (0ms) for accessibility

### Microinteractions
```css
.sacred-button {
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.sacred-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

### "Breathe" States
- Pulsing indicators: 2-3 second cycles
- Soft opacity shifts (0.7 → 1.0)
- No harsh blinks or strobes (WCAG compliance)

---

## Brand Voice: UI Copy

### Stackzero → HØLY Translations

| Generic Commerce | HØLY Sacred Commerce |
|------------------|----------------------|
| Add to Cart | Begin Your Ritual |
| Checkout | Complete Your Ritual |
| View Product | Explore Ritual |
| Customer Reviews | Sacred Testimonials |
| Free Shipping | Sacred Delivery |
| Best Seller | Most Cherished |
| New Arrival | Newly Ritual |
| Limited Edition | Sacred Limited Release |
| Subscribe & Save | Ritual Subscription |

---

## Print Integration

### CMYK Token Mapping
All screen colors have CMYK equivalents for packaging:

```
Screen: Smoky Umber #9C887A
Print: CMYK(40, 45, 50, 15) or Pantone 7530 C

Screen: Fogstone Blue #AAB5B2  
Print: CMYK(35, 20, 25, 5) or Pantone 5507 C

Screen: Veil Clay #D9C4BB
Print: CMYK(15, 20, 20, 5) or Pantone 7527 C
```

### Print Finishes
- **Foil:** Brushed Bronze, Soft Gold
- **Stock:** 300gsm uncoated, 120gsm labels
- **Spot-UV:** Logo mark and product names
- **Emboss:** 0.5mm depth on ø symbols

---

## Dev-Ready Token Naming

### CSS Custom Properties

```css
/* Color Tokens */
--color-veil-clay: #D9C4BB;
--color-fogstone-blue: #AAB5B2;
--color-smoky-umber: #9C887A;
--color-relic-green: #5E6458;
--color-limestone-oat: #D7D0C5;
--color-weathered-halo: #8C8981;
--color-temple-black: #1A1A1A;
--color-ivory: #F9F6F0;

/* Spacing Tokens */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
--spacing-3xl: 64px;

/* Radius Tokens */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-full: 9999px;

/* Typography Tokens */
--font-display: 'Garamond', serif;
--font-body: 'Inter', sans-serif;
```

### Shopify Theme Variable Mapping

```liquid
{{ settings.color_veil_clay }}
{{ settings.color_fogstone_blue }}
{{ settings.spacing_md }}
{{ settings.font_display }}
```

---

## File Structure

```
components/
├── ui/                      # Shadcn/Radix base components (Stackzero aligned)
├── ui-blocks/              # Commerce modules (Cart, Checkout, Product Cards)
└── ritual-systems/         # HØLY ritual-specific variants

pages/
├── TokensPage.tsx          # Color, spacing, radius tokens
├── BaseComponentsPage.tsx  # Buttons, inputs, badges (Stackzero structure)
├── UIComponentsPage.tsx    # Commerce components (Stackzero + HØLY skin)
└── RitualSystemsPage.tsx   # 5 ritual system showcases

guidelines/
├── stackzero-integration.md  # This file
└── icon-centering-rule.md    # ø optical centering (translateY(-3px))
```

---

## Quality Checklist

Before shipping components, verify:

- [ ] Follows Stackzero component hierarchy
- [ ] Uses HØLY v2.0 color palette exclusively
- [ ] White text on Smoky Umber & Fogstone Blue backgrounds
- [ ] Generous spacing (no cramped layouts)
- [ ] Sacred copy (not generic commerce language)
- [ ] Ritual system variant support (where applicable)
- [ ] Print token documentation (if visual brand element)
- [ ] Motion timing: 200-300ms for hovers
- [ ] Dev-ready CSS custom property naming
- [ ] ADA/WCAG AAA contrast compliance

---

## Maintenance

### Version Control
- Design system lives in Figma + codebase
- All changes require version bump (v2.0 → v2.1)
- Document breaking changes in CHANGELOG

### Sync Points
1. **Weekly:** Component audit against Stackzero updates
2. **Monthly:** Print token review for production readiness
3. **Quarterly:** Full accessibility audit (WCAG compliance)

---

**Questions?** Contact Design System Lead or reference Stackzero documentation at ui.stackzero.co.
