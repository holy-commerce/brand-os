# ™ Trademark Symbol Standards — HØLY Design System v3.2

## 📐 System Overview

This document establishes the **global trademark symbol positioning and styling standards** for the HØLY™ design system. All ™ marks across the system follow these refined specifications to ensure visual consistency, premium brand presentation, and legal compliance.

---

## 🎯 Core Specifications

### Size
- **Standard:** 12% of parent font size (`--tm-size: 0.12`)
- **Logo variant:** 12% (identical to standard for unified system)
- **Range:** 10-15% acceptable, 12% is optimal for premium subtlety

### Positioning
- **Alignment:** Top-aligned, optically just above cap height
- **Shift value:** `translateY(-0.5em)` (`--tm-shift: 0.5em`)
- **Philosophy:** Sits tucked into the top-right corner without visual detachment

### Styling
- **Opacity:** 70% (`--tm-opacity: 0.7`) — ghost-light, legally present
- **Spacing:** 0.03em left margin (`--tm-spacing: 0.03em`)
- **Font:** Inherits family and weight from parent element
- **Color:** Inherits from parent with opacity overlay

---

## 🔧 Implementation

### React Component Usage (Recommended)

```tsx
import { TM, renderWithTM } from './components/core-system';

// Method 1: Direct component usage
<h1>HØLY<TM /></h1>
<p>Ritual Aftercare<TM /></p>

// Method 2: Automatic string parsing (RECOMMENDED)
<h1>{renderWithTM('HØLY™')}</h1>
<p>{renderWithTM('Ritual Aftercare™')}</p>

// Method 3: Logo variant (identical sizing, semantic distinction)
<h1 className="brand-logo">HØLY<TM variant="logo" /></h1>
```

### CSS Token System

All TM positioning is controlled via CSS custom properties in `/styles/globals.css`:

```css
:root {
  --tm-size: 0.12;        /* 12% of parent font size */
  --tm-shift: 0.5em;      /* Cap-height alignment */
  --tm-opacity: 0.7;      /* 70% opacity */
  --tm-spacing: 0.03em;   /* Left margin */
  --tm-size-logo: 0.12;   /* Logo variant (same as standard) */
}
```

---

## 🎨 Positioning Philosophy

### Why 0.5em shift?

The `translateY(-0.5em)` value provides **optical cap-height alignment**:

- **Too low (0.2em):** Appears baseline-aligned, looks cheap
- **Optimal (0.5em):** Sits just above cap height, premium feel
- **Too high (0.8em):** Visually detached, awkward float

### Visual Balance

```
Correct:     H Ø L Y ™  ← Tucked at cap height
Incorrect:   H Ø L Y™   ← Too low (baseline aligned)
Incorrect:   H Ø L Y    ← Too high (floating)
                    ™
```

---

## 📋 Usage Audit Checklist

### ✅ Compliant Usage
- Uses `<TM />` component or `renderWithTM()` helper
- Inherits typography from parent context
- No hardcoded font sizes or colors
- Consistent across all device scales

### ❌ Non-Compliant Usage
- Raw `™` character without styling
- Hardcoded `font-size` or `position` values
- Inconsistent vertical alignment
- Custom opacity or spacing outside token system

---

## 🎯 High-Visibility Areas (Manual QA Required)

These contexts require visual refinement validation:

1. **Main Logo Lockup** — `HØLY™` in navigation header
2. **Product Names** — All product SKU labels (hølymist™, hølyrest™, etc.)
3. **Ritual System Names** — Ritual Aftercare™, Ritual Renewal™, etc.
4. **Page Titles** — H1/H2 headlines with brand references
5. **Footer Branding** — Company name and legal mentions
6. **Export Previews** — Label exports (PNG/PDF via html2canvas)

---

## 🔒 Regression Protection

### Design Token Lock
All ™ styling is centralized in `/styles/globals.css` under the **TS/TMark v3.2** token system. These tokens are:

- **Locked** — Changes require design system approval
- **Versioned** — v3.2 indicates current spec iteration
- **Global** — Applied consistently across all components

### Component Standards
The `<TM />` component at `/components/core-system/TrademarkSymbol.tsx` is the **single source of truth** for all trademark rendering.

**DO NOT:**
- Create custom trademark components
- Override token values without system-level approval
- Use inline styles for ™ positioning

---

## 📱 Responsive Behavior

The ™ symbol **automatically scales** with its parent text:

```tsx
// Desktop (24px heading)
<h1 style={{ fontSize: '24px' }}>HØLY<TM /></h1>
// ™ renders at ~2.88px (12% of 24px)

// Mobile (18px heading)
<h1 style={{ fontSize: '18px' }}>HØLY<TM /></h1>
// ™ renders at ~2.16px (12% of 18px)
```

No breakpoint-specific adjustments needed — the system is **fluid and relative**.

---

## 🧪 Testing Guidelines

### Visual QA Checklist
1. ✅ ™ sits optically just above cap height
2. ✅ Size is barely perceptible but legally visible
3. ✅ Opacity creates ghost-light effect
4. ✅ Spacing prevents text collision
5. ✅ No layout breaks or text wrapping issues

### Cross-Browser Compatibility
- ✅ Chrome/Edge (Blink engine)
- ✅ Safari (WebKit engine)
- ✅ Firefox (Gecko engine)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Android

### Export Fidelity
- ✅ PNG export (html2canvas) — inline styles ensure compatibility
- ✅ PDF rendering — transform-based positioning preserved
- ✅ Print media — maintains optical alignment

---

## 📊 Before/After Comparison

### v3.1 (Previous)
- Size: 15% of parent
- Shift: 0.7em
- Spacing: 0.05em
- Issue: Slightly too prominent, floated too high

### v3.2 (Current — Refined)
- Size: 12% of parent ✨
- Shift: 0.5em ✨
- Spacing: 0.03em ✨
- Improvement: More subtle, better cap-height alignment, tighter spacing

---

## 🎓 Design Philosophy

> **"The ™ symbol should appear as a refined micro-accent, not a typographic shout."**

### Guiding Principles
1. **Barely Perceptible** — Visible for legal compliance, invisible to brand experience
2. **Premium Positioning** — Tucked elegantly at cap height, never floating
3. **Consistent Execution** — Token-driven system prevents drift
4. **ADA Compliant** — Proper aria labels for screen readers
5. **Production-Ready** — Export-safe, cross-browser tested

---

## 📞 Support & Questions

For questions about ™ implementation or exceptions to these standards:
- Review: `/components/core-system/TrademarkSymbol.tsx`
- Tokens: `/styles/globals.css` (TS/TMark v3.2 section)
- Examples: All page components using `renderWithTM()`

**Last Updated:** Design System v3.2  
**Status:** ✅ Locked and Production-Ready
