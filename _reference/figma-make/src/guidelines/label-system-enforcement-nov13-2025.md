# HØLY™ Label System Enforcement — November 13, 2025

## Overview

This document establishes the universal label system for HØLY™ Operating System v2.0, enforcing consistency across all product tagging, iconography, and metadata blocks. This is the single source of truth for labels across all digital and email experiences.

## Label System Components

### 1. Purpose Categories (5 Locked Variants)

Refined color-coded purpose classification badges with elegant sentence case styling:

- **Cleanse** — `#AAB5B2` (Fogstone Blue)
  - Removes impurities, resets skin or body
  
- **Prep** — `#D9C4BB` (Veil Clay)
  - Tones, balances pH, primes skin or tools
  
- **Hydrate** — `#5E6458` (Relic Green)
  - Moisturizes, supports skin barrier, softens
  - Uses white text for WCAG AAA compliance
  
- **Protect** — `#D7D0C5` (Limestone Oat)
  - Shields from UV, friction, or pollutants
  
- **Treat** — `#9C887A` (Smoky Umber)
  - Delivers actives, heals, corrects, or regenerates
  - Uses white text for WCAG AAA compliance

### 2. Time-of-Day Categories (3 Variants)

Icon + text labels for usage timing. Uses 2D line-art HOLY icons only:

- **Morning** — HOLYSun icon
  - For energizing or protective start to day
  
- **Evening** — HOLYMoon icon
  - For wind-down, healing, recovery rituals
  
- **Ritual** — HOLYCircle icon
  - Use anytime. Flexible, intuitive care moments

### 3. Ritual System Labels (5 Systems)

Color-coded system identifiers with icon and trademark symbol:

- **Ritual Aftercare™** — `#AAB5B2` (Fogstone Blue) + HOLYDroplet icon
- **Ritual Renewal™** — `#D9C4BB` (Veil Clay) + HOLYFlower icon
- **Ritual Touch™** — `#5E6458` (Relic Green) + HOLYLeaf icon + white text
- **Ritual Union™** — `#D7D0C5` (Limestone Oat) + HOLYWave icon
- **Ritual Vital™** — `#9C887A` (Smoky Umber) + HOLYSparkle icon + white text

### 4. Metadata Labels (8 Types)

Black/white inverted pill style for product status:

- **New** — `#D9C4BB` background, Temple Black text
- **Bestseller** — Temple Black background, cream text
- **Limited** — Smoky Umber background, cream text
- **Coming Soon** — Fogstone Blue background, Temple Black text
- **Sold Out** — Weathered Halo background, cream text
- **Ritual Essential** — Temple Black background, cream text
- **Low Stock** — Smoky Umber background, cream text
- **Back in Stock** — Fogstone Blue background, Temple Black text

## Component Location

All label components are located in:
```
/components/core-system/LabelSystem.tsx
```

Export from core-system index:
```
/components/core-system/index.tsx
```

## Usage

### Import Statement

```tsx
import { 
  PurposeLabel,
  TimeLabel,
  RitualSystemLabel,
  MetadataLabel,
  LabelStack
} from '../components/core-system';
```

### Basic Usage

```tsx
// Purpose Label
<PurposeLabel purpose="Cleanse" size="md" />

// Time Label
<TimeLabel time="Morning" size="md" />

// Ritual System Label
<RitualSystemLabel system="renewal" size="md" showIcon={true} />

// Metadata Label
<MetadataLabel type="New" size="md" showIcon={true} />
```

### Multiple Labels with LabelStack

```tsx
<LabelStack 
  labels={[
    { type: 'metadata', value: 'New' },
    { type: 'system', value: 'renewal' },
    { type: 'purpose', value: 'Cleanse' },
    { type: 'time', value: 'Evening' }
  ]}
  direction="horizontal"
  size="md"
/>
```

## Size Variants

All label components support three sizes:

- **sm** — Compact: 11px font, 12px icon, 4px-10px padding
- **md** — Default: 13px font, 14px icon, 6px-12px padding
- **lg** — Large: 14px font, 16px icon, 8px-16px padding

## Application Locations

Labels must be applied consistently across:

### Digital Experiences
- ✅ Product Detail Pages (PDP)
- ✅ Product Listing Pages (PLP)
- ✅ Product Cards (all contexts)
- ✅ Homepage product blocks
- ✅ Ritual Finder results
- ✅ Checkout and cart
- ✅ Mobile app and mobile web

### Email Experiences
- ✅ Product announcement emails
- ✅ Ritual education emails
- ✅ Membership offer emails
- ✅ Cart abandonment emails
- ✅ Order confirmation emails

## Accessibility Standards

### WCAG AAA Compliance

All labels automatically enforce proper contrast:

- **Dark Backgrounds** (Relic Green, Smoky Umber, Temple Black, Weathered Halo)
  - Use white text (`#F9F6F0`)
  - Minimum 7:1 contrast ratio

- **Light Backgrounds** (Fogstone Blue, Veil Clay, Limestone Oat)
  - Use Temple Black text (`#1A1A1A`)
  - Minimum 7:1 contrast ratio

### Mobile Touch Targets

When labels are interactive/tappable:
- Minimum 44px tap target height
- Proper spacing between labels (8px horizontal gap)
- Graceful wrapping on smaller screens

## Restrictions

### ✗ Prohibited Actions

1. **No custom label creation** — Use only the locked component variants
2. **No 3D emojis** — Except in Ritual Finder chat interface
3. **No hard-coded label text** — Always use label components
4. **No color modifications** — System colors are locked
5. **No typography overrides** — Font family, weight, sizing are locked
6. **No omitting trademarks** — Ritual System labels must include ™
7. **No new purpose categories** — Only 5 locked variants allowed

### ✓ Required Standards

1. ✅ Always import from `/components/core-system/LabelSystem`
2. ✅ Use 2D line-art HOLY icons only (no 3D emojis)
3. ✅ Maintain WCAG AAA contrast (automatic in components)
4. ✅ Apply proper trademark symbols (™) on Ritual System labels
5. ✅ Ensure min 44px tap targets on mobile
6. ✅ Use LabelStack for multiple labels with proper spacing
7. ✅ Respect responsive breakpoints and wrapping behavior

## Implementation Checklist

### For Product Cards
- [ ] Replace any hard-coded badges with system labels
- [ ] Add Purpose Label for product classification
- [ ] Add Time Label if product has time-of-day recommendation
- [ ] Add Ritual System Label for system association
- [ ] Add Metadata Label for status (New, Bestseller, etc.)
- [ ] Use LabelStack for proper spacing and alignment

### For PDP
- [ ] Display Ritual System Label prominently
- [ ] Show Purpose Label near product description
- [ ] Show Time Label in usage instructions
- [ ] Display Metadata Labels for product status
- [ ] Ensure labels are visible in mobile viewport

### For PLP
- [ ] Filter options use system labels
- [ ] Product cards show appropriate labels
- [ ] Hover states maintain label visibility
- [ ] Mobile cards gracefully stack labels

### For Email
- [ ] Replace emoji icons with inline SVGs or text
- [ ] Use table-based layout for email client compatibility
- [ ] Maintain 600px max width for containers
- [ ] Test labels in dark mode email clients

## Testing Requirements

### Visual Regression Tests
- [ ] Labels render correctly in light mode
- [ ] Labels render correctly in dark mode (email)
- [ ] Labels maintain proper spacing when stacked
- [ ] Labels wrap gracefully on mobile breakpoints
- [ ] Icons are centered and properly sized

### Accessibility Tests
- [ ] Contrast ratios meet WCAG AAA (7:1 minimum)
- [ ] Labels are keyboard accessible (if interactive)
- [ ] Screen readers announce label content properly
- [ ] Touch targets meet 44px minimum on mobile

### Cross-Browser Tests
- [ ] Chrome/Edge (Blink engine)
- [ ] Firefox (Gecko engine)
- [ ] Safari (WebKit engine)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Email Client Tests
- [ ] Gmail (web, iOS, Android)
- [ ] Apple Mail (macOS, iOS)
- [ ] Outlook (desktop, web)
- [ ] Yahoo Mail
- [ ] Dark mode rendering

## Governance

### Version History
- **v2.0.1** (November 13, 2025) — Refined typography approach
  - Updated purpose labels to elegant sentence case (Cleanse, Prep, Hydrate, Protect, Treat)
  - Reduced font weight from 600 to 500 for subtler appearance
  - Reduced letter spacing from 0.5px to 0.3px for refinement
  - Removed uppercase text transform for sophisticated aesthetic
  
- **v2.0** (November 13, 2025) — Initial label system enforcement
  - Created centralized LabelSystem component
  - Established 5 purpose categories
  - Defined 3 time-of-day categories
  - Locked 5 ritual system labels
  - Standardized 8 metadata label types
  - Enforced WCAG AAA compliance
  - Added LabelStack for multi-label scenarios

### Change Management
All label system changes require:
1. Update to `/components/core-system/LabelSystem.tsx`
2. Update to this governance document
3. Visual regression testing across all application points
4. Accessibility audit (WCAG AAA)
5. Email client testing (if applicable)
6. Mobile responsiveness verification

### Exception Handling
If a use case requires a label not in the locked system:
1. Document the exception in `/pages/FileOverviewPage.tsx` — Notes section
2. Create a GitHub issue/ticket for label system expansion review
3. Use temporary solution with clear TODO comment
4. Do not create permanent custom labels without governance approval

## Related Documentation

- `/pages/LabelSystemPage.tsx` — Visual documentation and examples
- `/components/core-system/LabelSystem.tsx` — Component implementation
- `/guidelines/icon-emoji-standards.md` — Icon usage standards
- `/guidelines/smoky-umber-accessibility-audit.md` — Contrast compliance for dark labels
- `/guidelines/temple-black-accessibility-audit.md` — Contrast compliance for Temple Black

## Compliance Verification

### Self-Audit Questions

Before deploying label changes, verify:

1. ✅ Are all labels imported from the core system?
2. ✅ Are only locked label variants used (no custom labels)?
3. ✅ Do all labels use 2D line-art icons (no 3D emojis)?
4. ✅ Do Ritual System labels include trademark symbols (™)?
5. ✅ Do labels meet WCAG AAA contrast requirements?
6. ✅ Do mobile labels meet 44px tap target minimum?
7. ✅ Do stacked labels use LabelStack component?
8. ✅ Do labels wrap gracefully on small screens?

If any answer is "No", do not deploy. Fix issues and re-audit.

---

**Document Owner:** Design System Team  
**Last Updated:** November 13, 2025  
**Next Review:** December 13, 2025
