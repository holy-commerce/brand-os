# Product Tag Assignments — HØLY™ Design System

**Date:** November 13, 2025  
**Status:** ✅ ACTIVE  
**System:** Unified Classification Taxonomy

---

## Overview

This document codifies the **Purpose** and **Time-of-Day** classification tags for every product across all five Ritual Care™ systems. These tags drive product discovery, filtering, education, and UX consistency across storefront, email, mobile, and print channels.

---

## Classification System

### 🔮 Purpose Tags
- **Cleanse** → Removes impurities, resets skin or body
- **Prep** → Tones, balances pH, primes skin or tools
- **Hydrate** → Moisturizes, supports skin barrier, softens
- **Protect** → Shields from UV, friction, or pollutants
- **Treat** → Delivers actives, heals, corrects, or regenerates

### 🌙 Time-of-Day Tags
- **Morning** → For energizing or protective start to day
- **Evening** → For wind-down, healing, recovery rituals
- **Ritual** → Use anytime. Flexible, intuitive care moments

---

## Ritual Aftercare™ (Piercing Healing)

| Product | SKU | Purpose Tags | Time Tag |
|---------|-----|--------------|----------|
| **hølymist™** | HOLY-AFT-001 | Cleanse, Hydrate | Ritual |
| **hølyrest™** | HOLY-AFT-002 | Protect | Evening |
| **hølyveil™** | HOLY-AFT-003 | Protect | Evening |
| **hølyring™** | HOLY-AFT-004 | Protect | Ritual |
| **hølycup™** | HOLY-AFT-005 | Protect | Evening |
| **hølyguard™** | HOLY-AFT-006 | Protect | Ritual |
| **hølypatch™** | HOLY-AFT-007 | Treat | Evening |
| **hølywand™** | HOLY-AFT-008 | Cleanse | Ritual |
| **hølykit™** | HOLY-AFT-009 | Cleanse, Protect | Ritual |
| **hølyshroud™** | HOLY-AFT-010 | Protect | Evening |

---

## Ritual Renewal™ (Skin & Beauty)

| Product | SKU | Purpose Tags | Time Tag |
|---------|-----|--------------|----------|
| **hølyprep™** | HOLY-REN-001 | Prep, Hydrate | Ritual |
| **hølybuff™** | HOLY-REN-002 | Prep | Evening |
| **hølymask™** | HOLY-REN-003 | Treat, Hydrate | Ritual |
| **hølybarrier™** | HOLY-REN-004 | Treat, Protect | Evening |
| **hølyglow™** | HOLY-REN-005 | Hydrate | Morning |
| **hølytone™** | HOLY-REN-006 | Prep | Ritual |

---

## Ritual Touch™ (Body Tools & Embodiment)

| Product | SKU | Purpose Tags | Time Tag |
|---------|-----|--------------|----------|
| **hølyoil™** | HOLY-TCH-001 | Hydrate | Ritual |
| **hølytool™** | HOLY-TCH-002 | Treat | Ritual |
| **hølystone™** | HOLY-TCH-003 | Treat | Evening |
| **hølybrush™** | HOLY-TCH-004 | Prep | Morning |
| **hølybind™** | HOLY-TCH-005 | Protect | Ritual |

---

## Ritual Union™ (Intimacy & Sexual Wellness)

| Product | SKU | Purpose Tags | Time Tag |
|---------|-----|--------------|----------|
| **hølylube™** | HOLY-UNI-001 | Hydrate | Ritual |
| **hølytouch™** | HOLY-UNI-002 | Cleanse | Ritual |
| **hølyplay™** | HOLY-UNI-003 | Treat | Ritual |
| **hølybreathe™** | HOLY-UNI-004 | Prep | Ritual |
| **hølybalm™** | HOLY-UNI-005 | Hydrate, Protect | Evening |

---

## Ritual Vital™ (Longevity & Breathwork)

| Product | SKU | Purpose Tags | Time Tag |
|---------|-----|--------------|----------|
| **hølystim™** | HOLY-VIT-001 | Treat | Morning |
| **hølyflow™** | HOLY-VIT-002 | Prep | Morning |
| **hølycalm™** | HOLY-VIT-003 | Treat | Evening |
| **hølychill™** | HOLY-VIT-004 | Treat | Ritual |
| **hølyheat™** | HOLY-VIT-005 | Treat | Ritual |
| **hølyfuel™** | HOLY-VIT-006 | Treat | Morning |
| **hølyflask™** | HOLY-VIT-007 | Hydrate | Ritual |

---

## Application Guidelines

### Maximum Tags Per Product
- **Purpose Tags:** Max 2 per product
- **Time Tags:** Always 1 per product

### Visual Rendering
```tsx
<ProductTagGroup 
  purposes={['Cleanse', 'Hydrate']} 
  time="Ritual" 
  size="sm" 
/>
```

### Integration Touchpoints
1. **Product Cards** — Show tags on hover or static
2. **PLP Filters** — Filter by Purpose and Time
3. **PDP** — Display tags near product title
4. **Email Templates** — Use for segmentation and visual context
5. **Print Labels** — Include condensed tag indicators
6. **Ritual Finder Results** — Show recommended products with tags
7. **Mobile App** — Use for sorting and quick identification

---

## Color Token Mapping

Purpose tags inherit colors from their associated Ritual System:

- **Cleanse** → `#AAB5B2` (Fogstone Blue — Ritual Aftercare)
- **Prep** → `#D9C4BB` (Veil Clay — Ritual Renewal)
- **Hydrate** → `#5E6458` (Relic Green — Ritual Touch)
- **Protect** → `#D7D0C5` (Limestone Oat)
- **Treat** → `#9C887A` (Smoky Umber — Ritual Vital)

---

## Future-Proofing

When adding new products:
1. Assign 1-2 Purpose tags based on primary function
2. Assign 1 Time tag based on optimal usage pattern
3. Update this document immediately
4. Apply tags to SystemsProductsPage.tsx
5. Integrate into filters, cards, and email templates

---

**Note:** This taxonomy is foundational to HØLY's product architecture and must be maintained across all system updates and channel expansions.
