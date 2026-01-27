# 📚 HØLY™ DESIGN SYSTEM — COMPONENT REGISTRY

**Version:** 2.0  
**Last Updated:** November 13, 2025

This registry catalogs all components across the HØLY™ Design System, their locations, status, and usage patterns.

---

## 🔒 CORE SYSTEM COMPONENTS (LOCKED)

These components are the foundation of the system and must not be detached or regenerated.

| Component | File | Status | Used In | Variants |
|-----------|------|--------|---------|----------|
| GlobalNavigation | `/components/core-system/GlobalNavigation.tsx` | ✅ LOCKED | All pages | light, dark |
| GlobalFooter | `/components/core-system/GlobalFooter.tsx` | ✅ LOCKED | All pages | light, dark |
| Breadcrumb | `/components/core-system/Breadcrumb.tsx` | ✅ LOCKED | PDP, PLP, Content | light, dark |
| ProductCard | `/components/core-system/ProductCard.tsx` | ✅ LOCKED | Home, PDP, PLP | standard, compact, featured |
| PriceDisplay | `/components/core-system/PriceDisplay.tsx` | ✅ LOCKED | Cards, PDP, Cart | default, large, compact |
| QuantitySelector | `/components/core-system/QuantitySelector.tsx` | ✅ LOCKED | PDP, Cart | default, compact |
| RitualSystemBadge | `/components/core-system/RitualSystemBadge.tsx` | ✅ LOCKED | Cards, PDP, PLP | default, large, compact |
| NewsletterSignup | `/components/core-system/NewsletterSignup.tsx` | ✅ LOCKED | Home, Footer, Modals | inline, centered, modal |

**Total:** 8 components  
**Import:** `import { ComponentName } from '../components/core-system';`

---

## 🔲 BASE COMPONENTS (shadcn/ui)

Foundation UI primitives from shadcn/ui library.

| Component | File | Purpose | Locked |
|-----------|------|---------|---------|
| Accordion | `/components/ui/accordion.tsx` | Expandable content | ⚠️ Framework |
| Alert | `/components/ui/alert.tsx` | Notification banners | ⚠️ Framework |
| Avatar | `/components/ui/avatar.tsx` | User avatars | ⚠️ Framework |
| Badge | `/components/ui/badge.tsx` | Status badges | ⚠️ Framework |
| Breadcrumb | `/components/ui/breadcrumb.tsx` | Navigation trail | ⚠️ Framework |
| Button | `/components/ui/button.tsx` | CTA buttons | ⚠️ Framework |
| Calendar | `/components/ui/calendar.tsx` | Date picker | ⚠️ Framework |
| Card | `/components/ui/card.tsx` | Content cards | ⚠️ Framework |
| Carousel | `/components/ui/carousel.tsx` | Image carousels | ⚠️ Framework |
| Checkbox | `/components/ui/checkbox.tsx` | Form checkboxes | ⚠️ Framework |
| Dialog | `/components/ui/dialog.tsx` | Modal dialogs | ⚠️ Framework |
| Drawer | `/components/ui/drawer.tsx` | Side drawers | ⚠️ Framework |
| Input | `/components/ui/input.tsx` | Text inputs | ⚠️ Framework |
| Select | `/components/ui/select.tsx` | Dropdown selects | ⚠️ Framework |
| Separator | `/components/ui/separator.tsx` | Divider lines | ⚠️ Framework |
| Sheet | `/components/ui/sheet.tsx` | Mobile drawers | ⚠️ Framework |
| Tabs | `/components/ui/tabs.tsx` | Tab navigation | ⚠️ Framework |
| Tooltip | `/components/ui/tooltip.tsx` | Hover tooltips | ⚠️ Framework |

**Total:** 18+ base components  
**Status:** Framework-managed (modify with caution)

---

## 📦 UI COMPONENTS (Business Logic)

Custom components built on base components with HØLY™ branding.

| Component | File | Purpose | Status |
|-----------|------|---------|--------|
| CTARitualInteraction | `/components/ui-blocks/CTAInteractions.tsx` | Ritual Finder CTA | 🔄 Active |
| CartElements | `/components/ui-blocks/CartElements.tsx` | Cart drawer | 🔄 Active |
| CheckoutElements | `/components/ui-blocks/CheckoutElements.tsx` | Checkout flow | 🔄 Active |
| CommerceModules | `/components/ui-blocks/CommerceModules.tsx` | Commerce patterns | 🔄 Active |
| ContentBlocks | `/components/ui-blocks/ContentBlocks.tsx` | Content sections | 🔄 Active |
| DataBlocks | `/components/ui-blocks/DataBlocks.tsx` | Data displays | 🔄 Active |
| ExperienceLayout | `/components/ui-blocks/ExperienceLayout.tsx` | Page layouts | 🔄 Active |
| HomePageContent | `/components/ui-blocks/HomePageContent.tsx` | Home modules | 🔄 Active |
| NavigationExtended | `/components/ui-blocks/NavigationExtended.tsx` | Nav extensions | 🔄 Active |
| NavigationSections | `/components/ui-blocks/NavigationSections.tsx` | Nav sections | 🔄 Active |
| PDPModules | `/components/ui-blocks/PDPModules.tsx` | PDP modules | 🔄 Active |
| PLPComponents | `/components/ui-blocks/PLPComponents.tsx` | PLP filters/grid | 🔄 Active |
| PLPContent | `/components/ui-blocks/PLPContent.tsx` | PLP content | 🔄 Active |
| ProductBadges | `/components/ui-blocks/ProductBadges.tsx` | Product badges | 🔄 Active |
| ProductCards | `/components/ui-blocks/ProductCards.tsx` | Legacy cards | ⚠️ Migrate to Core |
| ProductInteractionElements | `/components/ui-blocks/ProductInteractionElements.tsx` | Product actions | 🔄 Active |
| ProductTags | `/components/ui-blocks/ProductTags.tsx` | Product tags | 🔄 Active |
| PromoAnnouncement | `/components/ui-blocks/PromoAnnouncement.tsx` | Promo banners | 🔄 Active |
| YONIInterface | `/components/ui-blocks/YONIInterface.tsx` | YONI™ chat | 🔄 Active |

**Total:** 19 components  
**Migration Status:** ProductCards → Core ProductCard (in progress)

---

## 🧬 RITUAL SYSTEM COMPONENTS

System-specific components for the five ritual systems.

| Component | File | Purpose | Systems |
|-----------|------|---------|---------|
| RitualAftercareComponents | `/components/ritual-systems/RitualAftercareComponents.tsx` | Aftercare™ | Aftercare |
| RitualRenewalComponents | `/components/ritual-systems/RitualRenewalComponents.tsx` | Renewal™ | Renewal |
| RitualTouchComponents | `/components/ritual-systems/RitualTouchComponents.tsx` | Touch™ | Touch |
| RitualUnionComponents | `/components/ritual-systems/RitualUnionComponents.tsx` | Union™ | Union |
| RitualVitalComponents | `/components/ritual-systems/RitualVitalComponents.tsx` | Vital™ | Vital |

**Total:** 5 components (one per ritual system)

---

## 🧿 ICON COMPONENTS

Custom HØLY™ 2D line-art icon system.

**File:** `/components/icons/HOLYIcons.tsx`

**Icons Available:**
- HOLYDroplet (Aftercare™)
- HOLYFlower (Renewal™)
- HOLYLeaf (Touch™)
- HOLYWave (Union™)
- HOLYSparkle (Vital™)
- HOLYCircle
- HOLYTriangle
- HOLYSquare
- HOLYGem
- HOLYPackage
- HOLYDocument
- HOLYWand
- HOLYRecycle
- HOLYMoon
- HOLYSun
- HOLYCart
- HOLYHeart
- HOLYEye
- HOLYSearch
- HOLYUser

**Standard Props:**
```typescript
interface HOLYIconProps {
  size?: number;      // Default: 24
  color?: string;     // Default: currentColor
  opacity?: number;   // Default: 1
  strokeWidth?: number; // Default: 2
}
```

**Usage Rules:**
- ✅ Use 2D line-art HØLY icons for all UI
- ❌ NO 3D emojis (except Ritual Finder chat)
- ✅ Use lucide-react for supplementary icons
- ✅ Maintain 1.5-2px stroke width for consistency

---

## 🪄 MOTION / STATE COMPONENTS

Animation and interaction state components.

**File:** `/components/ui-blocks/` (various)

**Motion Patterns:**
- Sacred Aura (hover glow)
- Sacred Pulse (attention animation)
- Sacred Ascend (entrance animation)
- Sacred Fade (exit animation)
- Cart Icon Animation
- Button State Transitions

**Library:** Motion (formerly Framer Motion)

**Import:**
```tsx
import { motion } from 'motion/react';
```

---

## 📄 PAGE COMPONENTS

Experience page components (not reusable across contexts).

| Page | File | Status | Uses Core Components |
|------|------|--------|---------------------|
| Home Page | `/pages/HomePage.tsx` | ✅ Updated | Yes (Nav, Footer, ProductCard, Newsletter) |
| PDP Experience | `/pages/PDPExperiencePage.tsx` | ⏳ To Update | Partial |
| PLP Experience | `/pages/ProductListingPage.tsx` | ⏳ To Update | No |
| Ritual Finder | `/pages/RitualFinderPage.tsx` | ⏳ To Update | No |
| Base Components | `/pages/BaseComponentsPage.tsx` | 🔄 Documentation | N/A |
| UI Components | `/pages/UIComponentsPage.tsx` | 🔄 Documentation | N/A |
| Tokens | `/pages/TokensPage.tsx` | 🔄 Documentation | N/A |

**Migration Priority:**
1. ✅ HomePage (completed)
2. ⏳ PDPExperiencePage
3. ⏳ ProductListingPage
4. ⏳ RitualFinderPage

---

## 🎨 UTILITY COMPONENTS

Helper components and utilities.

| Component | File | Purpose |
|-----------|------|---------|
| ImageWithFallback | `/components/figma/ImageWithFallback.tsx` | 🔒 PROTECTED - Image handling |
| VisuallyHidden | `/components/ui/visually-hidden.tsx` | Screen reader only content |
| use-mobile | `/components/ui/use-mobile.ts` | Mobile detection hook |

---

## 📊 COMPONENT STATUS LEGEND

| Symbol | Meaning |
|--------|---------|
| ✅ | Complete and locked |
| 🔒 | Locked - do not modify |
| ⚠️ | Framework-managed |
| 🔄 | Active, may need migration |
| ⏳ | Pending update |
| 📋 | Documentation only |

---

## 🔄 MIGRATION PLAN

### Phase 1: Core Component Lockdown (COMPLETE)
- ✅ Create `/components/core-system/`
- ✅ Build 8 core components
- ✅ Document in lockdown guide
- ✅ Update HomePage

### Phase 2: Experience Page Migration (IN PROGRESS)
- ⏳ Update PDPExperiencePage
- ⏳ Update ProductListingPage
- ⏳ Update RitualFinderPage
- ⏳ Update all other experience pages

### Phase 3: Deprecate Legacy Components
- ⏳ Mark old ProductCards as deprecated
- ⏳ Remove inline navigation code
- ⏳ Consolidate footer variants
- ⏳ Archive unused components

### Phase 4: Advanced Components
- ⏳ Create CartDrawer core component
- ⏳ Create FilterPanel core component
- ⏳ Create HeroCarousel core component
- ⏳ Create ReviewCard core component

---

## 📞 COMPONENT REQUESTS

To request a new core component or modification:

1. Check this registry first
2. Review `/guidelines/core-system-components-lockdown.md`
3. Document use case and frequency
4. Submit to Design System Lead
5. Wait for approval before implementing

---

## 🔗 RELATED DOCUMENTATION

- `/guidelines/core-system-components-lockdown.md` — Core component usage
- `/guidelines/Guidelines.md` — Design system principles
- `/guidelines/icon-emoji-standards.md` — Icon standards
- `/pages/FileOverviewPage.tsx` — File governance

---

**Maintained by:** Design System Lead  
**Review Frequency:** Weekly during migration, monthly after stabilization  
**Last Audit:** November 13, 2025
