# 🗺️ HØLY™ COMPONENT HIERARCHY — VISUAL GUIDE

**Version:** 2.0  
**Last Updated:** November 13, 2025

---

## 📊 COMPONENT PYRAMID

```
┌─────────────────────────────────────────────────────────────┐
│                    EXPERIENCE PAGES                          │
│  (Full page implementations - NOT reusable)                  │
│  • HomePage • PDPExperiencePage • ProductListingPage        │
│  • RitualFinderPage • CheckoutPage                          │
└──────────────────────────────┬──────────────────────────────┘
                               │ uses ↓
┌─────────────────────────────────────────────────────────────┐
│            🔒 CORE SYSTEM COMPONENTS (LOCKED)                │
│  (Master components - DO NOT detach or regenerate)          │
│  • GlobalNavigation • GlobalFooter • Breadcrumb             │
│  • ProductCard • PriceDisplay • QuantitySelector            │
│  • RitualSystemBadge • NewsletterSignup                     │
└──────────────────────────────┬──────────────────────────────┘
                               │ uses ↓
┌─────────────────────────────────────────────────────────────┐
│              📦 UI COMPONENTS (Business Logic)               │
│  (Custom HØLY components - Can be consolidated)             │
│  • CartElements • CheckoutElements • PDPModules             │
│  • PLPComponents • ProductBadges • YONIInterface            │
└──────────────────────────────┬──────────────────────────────┘
                               │ uses ↓
┌─────────────────────────────────────────────────────────────┐
│               🔲 BASE COMPONENTS (shadcn/ui)                 │
│  (Framework primitives - Modify with caution)               │
│  • Button • Input • Dialog • Sheet • Card • Badge           │
│  • Accordion • Tabs • Checkbox • Select                     │
└──────────────────────────────┬──────────────────────────────┘
                               │ uses ↓
┌─────────────────────────────────────────────────────────────┐
│                   💠 DESIGN TOKENS                           │
│  (Foundation - Colors, spacing, typography, etc.)           │
│  • Brand Colors • Typography • Spacing • Radius             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 COMPONENT FLOW

### Example: HomePage Product Display

```
HomePage.tsx
    ↓ imports
GlobalNavigation (🔒 core-system)
    ↓ uses
Sheet (🔲 base component)
    ↓ uses
Design Tokens (💠 colors, spacing)

HomePage.tsx
    ↓ imports
ProductCard (🔒 core-system)
    ↓ uses
ImageWithFallback (utility)
Badge (🔲 base component)
    ↓ uses
Design Tokens (💠 colors, typography)

HomePage.tsx
    ↓ imports
GlobalFooter (🔒 core-system)
    ↓ uses
Separator (🔲 base component)
    ↓ uses
Design Tokens (💠 colors)
```

---

## 🎯 COMPONENT CATEGORIES

### 🔒 Core System (8 components)
**Location:** `/components/core-system/`  
**Status:** Locked - DO NOT regenerate  
**Import:** `import { ComponentName } from '../components/core-system';`

```
GlobalNavigation
GlobalFooter
Breadcrumb
ProductCard
PriceDisplay
QuantitySelector
RitualSystemBadge
NewsletterSignup
```

---

### 📦 UI Components (19 components)
**Location:** `/components/ui-blocks/`  
**Status:** Active - Can be consolidated to core  
**Import:** `import { ComponentName } from '../components/ui-blocks/[filename]';`

```
CTAInteractions
CartElements
CheckoutElements
CommerceModules
ContentBlocks
DataBlocks
ExperienceLayout
HomePageContent
MessageStatusElements
NavigationExtended
NavigationSections
PDPModules
PLPComponents
PLPContent
ProductBadges
ProductCards (⚠️ Migrate to Core)
ProductInteractionElements
ProductTags
PromoAnnouncement
YONIInterface
```

---

### 🔲 Base Components (18+ components)
**Location:** `/components/ui/`  
**Status:** Framework - Modify with caution  
**Import:** `import { ComponentName } from '../components/ui/[component]';`

```
Accordion       Dialog          Radio
Alert           Drawer          Resizable
Avatar          Dropdown        Scroll-area
Badge           Form            Select
Breadcrumb      Hover-card      Separator
Button          Input           Sheet
Calendar        Label           Sidebar
Card            Menubar         Skeleton
Carousel        Navigation      Slider
Chart           Pagination      Switch
Checkbox        Popover         Table
Collapsible     Progress        Tabs
Command         ...and more
```

---

### 🧿 Icons (20+ icons)
**Location:** `/components/icons/HOLYIcons.tsx`  
**Status:** Locked - 2D line-art only  
**Import:** `import { IconName } from '../components/icons/HOLYIcons';`

```
System Icons:
• HOLYDroplet (Aftercare™)
• HOLYFlower (Renewal™)
• HOLYLeaf (Touch™)
• HOLYWave (Union™)
• HOLYSparkle (Vital™)

UI Icons:
• HOLYCircle, HOLYTriangle, HOLYSquare
• HOLYGem, HOLYPackage, HOLYDocument
• HOLYWand, HOLYRecycle, HOLYMoon, HOLYSun
• HOLYCart, HOLYHeart, HOLYEye, HOLYSearch, HOLYUser
```

---

### 🧬 Ritual Systems (5 components)
**Location:** `/components/ritual-systems/`  
**Status:** Active  
**Import:** System-specific components

```
RitualAftercareComponents.tsx
RitualRenewalComponents.tsx
RitualTouchComponents.tsx
RitualUnionComponents.tsx
RitualVitalComponents.tsx
```

---

## 🎨 USAGE PATTERNS

### ✅ Correct Component Hierarchy

```tsx
// EXPERIENCE PAGE
function HomePage() {
  return (
    <>
      {/* Core System Component */}
      <GlobalNavigation cartCount={2} />
      
      {/* Page Content */}
      <main>
        {/* Core System Component */}
        <ProductCard 
          name="Product" 
          price={64}
          variant="featured" 
        />
      </main>
      
      {/* Core System Component */}
      <GlobalFooter theme="dark" />
    </>
  );
}
```

```tsx
// CORE SYSTEM COMPONENT
export function ProductCard({ name, price, variant }) {
  return (
    <div className="product-card">
      {/* Base Component */}
      <Badge>New</Badge>
      
      {/* UI Component */}
      <PriceDisplay price={price} variant={variant} />
      
      {/* Base Component */}
      <Button>Add to Cart</Button>
    </div>
  );
}
```

```tsx
// BASE COMPONENT
export function Button({ children }) {
  return (
    <button 
      className="px-4 py-2" 
      style={{ 
        backgroundColor: '#1A1A1A', // Design Token
        fontFamily: 'Inter, sans-serif' // Design Token
      }}
    >
      {children}
    </button>
  );
}
```

---

## 🚫 Anti-Patterns

### ❌ WRONG: Skipping Core Components

```tsx
// DON'T DO THIS - Bypassing core system
function HomePage() {
  return (
    <>
      {/* ❌ Inline navigation - should use GlobalNavigation */}
      <nav className="...">
        <div>HØLY™</div>
        ...
      </nav>
      
      {/* ❌ Custom product card - should use ProductCard */}
      <div className="custom-product">
        <img src={image} />
        <h4>{name}</h4>
        <p>${price}</p>
      </div>
    </>
  );
}
```

### ❌ WRONG: Importing Base Components Directly in Pages

```tsx
// DON'T DO THIS - Pages should use core components
import { Button } from '../components/ui/button';

function HomePage() {
  return <Button>Click</Button>; // Should be in a core component
}
```

### ✅ CORRECT: Proper Hierarchy

```tsx
// DO THIS - Use core components
import { GlobalNavigation, ProductCard } from '../components/core-system';

function HomePage() {
  return (
    <>
      <GlobalNavigation />
      <ProductCard name="Product" price={64} />
    </>
  );
}
```

---

## 📊 COMPONENT COUNT BY CATEGORY

| Category | Count | Status | Location |
|----------|-------|--------|----------|
| 🔒 Core System | 8 | Locked | `/components/core-system/` |
| 📦 UI Components | 19 | Active | `/components/ui-blocks/` |
| 🔲 Base Components | 18+ | Framework | `/components/ui/` |
| 🧿 Icons | 20+ | Locked | `/components/icons/` |
| 🧬 Ritual Systems | 5 | Active | `/components/ritual-systems/` |
| 📄 Pages | 20+ | Active | `/pages/` |

**Total Components:** 90+

---

## 🎯 CONSOLIDATION TARGETS

### High Priority (Duplicate Code)
- ✅ Navigation → GlobalNavigation (COMPLETE)
- ✅ Footer → GlobalFooter (COMPLETE)
- ✅ Product Cards → ProductCard (COMPLETE)
- ⏳ Cart Drawer → CartDrawer (TO DO)
- ⏳ Filter Panel → FilterPanel (TO DO)

### Medium Priority (Repeated Patterns)
- ⏳ Hero Carousels → HeroCarousel
- ⏳ Review Cards → ReviewCard
- ⏳ Promo Banners → PromoBanner (exists in PromoAnnouncement)

### Low Priority (Rare Use)
- Modal variants
- Custom form layouts
- Specialty animations

---

## 🔗 NAVIGATION

**Quick Links:**
- [Core System Lockdown Guide](/guidelines/core-system-components-lockdown.md)
- [Component Registry](/guidelines/component-registry.md)
- [Quick Reference](/guidelines/CORE-SYSTEM-README.md)
- [Consolidation Summary](/guidelines/nov13-2025-core-system-consolidation.md)

---

**This visual guide maps the entire HØLY™ component architecture from design tokens to experience pages.**

**Last Updated:** November 13, 2025  
**Maintained By:** Design System Lead
