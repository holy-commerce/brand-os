# 📐 HØLY™ EXPERIENCE SYSTEM AUDIT — Component Enforcement

**Date:** November 13, 2025  
**Initiative:** Experience Page Component Consolidation + Mobile Unification  
**Status:** In Progress 🔄

---

## 🎯 AUDIT OBJECTIVES

1. ✅ **Enforce locked master components** across all Experience pages
2. ✅ **Unify mobile behavior** under 768px (mobile web = mobile app components)
3. ✅ **Apply navigation updates** (already completed)
4. ✅ **Ensure full responsiveness** at all breakpoints
5. ✅ **Verify visual polish** and brand adherence

---

## 📊 EXPERIENCE PAGES INVENTORY

### Existing Pages

| Page | Status | Core Components | Mobile Components | Notes |
|------|--------|----------------|-------------------|-------|
| **HomePage.tsx** | ✅ **COMPLETE** | Uses GlobalNav, GlobalFooter, ProductCard, Newsletter | Needs mobile unification | Already migrated to core-system |
| **PDPExperiencePage.tsx** | ❌ **NEEDS WORK** | None imported | None imported | Building own nav/footer/breadcrumb |
| **ProductListingPage.tsx** | ⚠️ **PARTIAL** | None imported | Uses PLPContent wrapper | Uses ui-blocks but not core |
| **RitualFinderPage.tsx** | ⚠️ **PARTIAL** | None imported | Uses RitualFinderMobile | Mobile-first but missing core nav |

### Missing Pages

| Page | Status | Priority | Notes |
|------|--------|----------|-------|
| **CheckoutPage.tsx** | ❌ **MISSING** | HIGH | Checkout flow needed |
| **ConfirmationPage.tsx** | ❌ **MISSING** | MEDIUM | Order confirmation |
| **CartPage.tsx** | ❌ **MISSING** | HIGH | Full cart experience (currently drawer only) |

---

## 🔒 COMPONENT LIBRARY AUDIT

### ✅ Core System Components (`/components/core-system/`)

**Status:** LOCKED & DOCUMENTED

| Component | Usage | Documentation |
|-----------|-------|---------------|
| GlobalNavigation | HomePage ✅ | Desktop + mobile responsive nav |
| GlobalFooter | HomePage ✅ | Full footer with links + newsletter |
| Breadcrumb | None yet ❌ | Navigation breadcrumbs |
| ProductCard | HomePage ✅ | Sacred Aura hover + Ritual Pulse click |
| PriceDisplay | None yet ❌ | Consistent price formatting |
| QuantitySelector | None yet ❌ | Quantity +/- controls |
| RitualSystemBadge | None yet ❌ | System color badges |
| NewsletterSignup | HomePage ✅ | Email capture form |

**ISSUE:** Only HomePage is using core components. PDP, PLP, and Ritual Finder are building their own versions.

---

### 📦 UI Components (`/components/ui-blocks/`)

**Status:** MIXED USAGE — Needs standardization

| Component File | Used By | Status | Notes |
|----------------|---------|--------|-------|
| **CTAInteractions.tsx** | PDP, HomePage | ✅ Good | Sacred Aura + Ritual Pulse |
| **CartElements.tsx** | None (drawer only) | ⚠️ Partial | Needs full cart page |
| **CheckoutElements.tsx** | None | ❌ Unused | Need checkout page |
| **CommerceModules.tsx** | None | ❌ Unused | Should be used on PDP |
| **ContentBlocks.tsx** | HomePage | ✅ Good | Hero blocks |
| **NavigationExtended.tsx** | None | ❌ Unused | Why not using on PDP/PLP? |
| **PDPModules.tsx** | None | ❌ Unused | Should replace PDP custom code |
| **PLPComponents.tsx** | PLP (via PLPContent) | ✅ Good | Filter sidebar/drawer |
| **PLPContent.tsx** | PLP | ✅ Good | Layout wrapper |
| **ProductBadges.tsx** | Via ProductCard | ✅ Good | Badge system |
| **ProductCards.tsx** | None | ⚠️ Duplicate? | Overlaps with core ProductCard |
| **RitualFinderMobile.tsx** | Ritual Finder | ✅ Good | Mobile quiz UI |

**KEY ISSUES:**
1. PDPModules.tsx exists but PDP builds its own layout
2. NavigationExtended.tsx exists but pages build own nav
3. Duplicate card components (ProductCard vs ProductCards)

---

### 📱 Mobile App Components

**Status:** PARTIALLY IMPLEMENTED

**Current Mobile Components:**
- `MobileProgressIndicator` → Used in Ritual Finder ✅
- `MobileChoiceCard` → Used in Ritual Finder ✅
- `MobileQuizContainer` → Used in Ritual Finder ✅
- `MobileBottomCTABar` → Used in Ritual Finder ✅
- `MobileQuestionHeader` → Used in Ritual Finder ✅

**Missing Mobile Components:**
- ❌ Mobile Navigation (sticky header)
- ❌ Mobile Tab Bar (bottom navigation)
- ❌ Mobile Filter Drawer (exists in PLPComponents)
- ❌ Mobile Product Card (different from desktop)
- ❌ Mobile Cart Drawer (exists in CartElements)
- ❌ Mobile Search Overlay
- ❌ Mobile Modal patterns

**CRITICAL ISSUE:** Mobile components only exist for Ritual Finder. Other pages don't have mobile-specific layouts under 768px.

---

## 🔍 PAGE-BY-PAGE ANALYSIS

### 1. HomePage.tsx ✅

**Status:** MIGRATED TO CORE COMPONENTS

**What's Working:**
- ✅ Uses GlobalNavigation
- ✅ Uses GlobalFooter
- ✅ Uses ProductCard
- ✅ Uses NewsletterSignup
- ✅ Responsive design
- ✅ Sacred Aura + Ritual Pulse interactions

**What Needs Work:**
- ⚠️ Mobile experience could use dedicated mobile components below 768px
- ⚠️ Could benefit from using Breadcrumb component
- ⚠️ Hero section could use ContentBlocks patterns

**Recommendation:** Enhance mobile layout with mobile-specific components.

---

### 2. PDPExperiencePage.tsx ❌

**Status:** NOT USING CORE COMPONENTS

**Current Issues:**
- ❌ No GlobalNavigation import
- ❌ No GlobalFooter import
- ❌ No Breadcrumb component
- ❌ Building own product gallery
- ❌ Building own accordion sections
- ❌ Building own "related products" grid
- ❌ No mobile-specific layout
- ❌ Not using PDPModules.tsx
- ❌ Not using PriceDisplay component
- ❌ Not using QuantitySelector component
- ❌ Not using RitualSystemBadge component

**What It's Doing Right:**
- ✅ Uses CTARitualInteraction
- ✅ Has proper accordion with ChevronDown icons
- ✅ Good desktop layout structure

**Required Changes:**
1. Import and use GlobalNavigation
2. Import and use GlobalFooter
3. Import and use Breadcrumb
4. Replace custom price display with PriceDisplay component
5. Replace custom quantity selector with QuantitySelector component
6. Replace custom product cards with ProductCard component
7. Replace custom badges with RitualSystemBadge component
8. Add mobile-responsive layout (single column, sticky CTA)
9. Consider using PDPModules.tsx for layout structure

---

### 3. ProductListingPage.tsx ⚠️

**Status:** PARTIAL — Uses PLPContent but not core components

**Current Issues:**
- ❌ No GlobalNavigation import
- ❌ No GlobalFooter import
- ❌ No Breadcrumb import
- ⚠️ Uses PLPContent which wraps PLPComponents (good)
- ⚠️ Has mobile/desktop preview frames (demo only)
- ❌ Not a real full-page experience

**Current Structure:**
```tsx
import { PLPMobileContent, PLPDesktopContent } from '../components/ui-blocks/PLPContent';
```

This page is currently a **demo/documentation page** showing mobile and desktop previews in frames. It's not a real shopping experience.

**Required Changes:**
1. Convert from demo page to real experience page
2. Import and use GlobalNavigation
3. Import and use GlobalFooter
4. Import and use Breadcrumb
5. Use PLPDesktopContent as the main experience (not in a preview frame)
6. Ensure mobile layout uses mobile-specific components

---

### 4. RitualFinderPage.tsx ⚠️

**Status:** MOBILE-FIRST BUT MISSING CORE NAV/FOOTER

**What's Working:**
- ✅ Uses mobile components (MobileProgressIndicator, etc.)
- ✅ Mobile-first design philosophy
- ✅ 3D emoji allowed (per standards)
- ✅ YONI interface
- ✅ Uses CTARitualInteraction
- ✅ Proper system-based results

**Current Issues:**
- ❌ No GlobalNavigation import
- ❌ No GlobalFooter import
- ⚠️ Could benefit from Breadcrumb
- ⚠️ Result page products should use ProductCard component

**Required Changes:**
1. Add GlobalNavigation (with back button)
2. Add GlobalFooter
3. Replace product cards in results with ProductCard component
4. Ensure consistent spacing and layout

---

## 🔧 COMPONENT GAPS & DUPLICATES

### Duplicates to Consolidate

1. **Product Cards**
   - `/components/core-system/ProductCard.tsx` ✅ KEEP
   - `/components/ui-blocks/ProductCards.tsx` ❌ AUDIT/MERGE
   - Custom cards in PDP/PLP ❌ REPLACE

2. **Navigation**
   - `/components/core-system/GlobalNavigation.tsx` ✅ KEEP
   - `/components/ui-blocks/NavigationExtended.tsx` ⚠️ AUDIT PURPOSE
   - `/components/ui-blocks/NavigationSections.tsx` ⚠️ AUDIT PURPOSE

3. **Cart Elements**
   - `/components/ui-blocks/CartElements.tsx` (drawer)
   - Missing: Full cart page experience

### Missing Components

**High Priority:**
1. ❌ Mobile Navigation Bar (sticky top)
2. ❌ Mobile Tab Bar (sticky bottom)
3. ❌ Mobile Product Card variant
4. ❌ Checkout Page components
5. ❌ Full Cart Page layout

**Medium Priority:**
6. ❌ Mobile Search Overlay
7. ❌ Mobile Filter Sheet (exists in PLPComponents but needs review)
8. ❌ Product Quick View Modal
9. ❌ Wishlist/Favorites components

---

## 📱 MOBILE UNIFICATION STRATEGY

### Current State

**Below 768px:**
- ❌ HomePage: Uses desktop layout shrunk down
- ❌ PDP: Uses desktop layout shrunk down
- ⚠️ PLP: Has mobile-specific content via PLPMobileContent
- ✅ Ritual Finder: True mobile-first experience

### Target State

**Below 768px — ALL PAGES should:**
1. ✅ Use mobile navigation bar (sticky top, 56px height)
2. ✅ Single-column layouts
3. ✅ Full-width CTAs (min 48px height)
4. ✅ Bottom sticky CTA bars where needed
5. ✅ Drawer/sheet modals instead of dropdowns
6. ✅ Touch-optimized spacing (16px padding)
7. ✅ Larger touch targets (48px minimum)
8. ✅ Mobile tab bar for navigation (if needed)

### Implementation Plan

**Phase 1: Create Missing Mobile Components**
1. Create `MobileNavigationBar.tsx`
2. Create `MobileTabBar.tsx`
3. Create `MobileProductCard.tsx`
4. Audit and enhance existing mobile components

**Phase 2: Update Experience Pages**
1. Add mobile breakpoint logic to HomePage
2. Add mobile breakpoint logic to PDP
3. Verify PLP mobile experience
4. Verify Ritual Finder mobile experience

**Phase 3: Create Missing Pages**
1. Create CheckoutPage.tsx
2. Create CartPage.tsx
3. Create ConfirmationPage.tsx

---

## 🎨 RESPONSIVE BREAKPOINTS

### Required Testing Points

| Breakpoint | Width | Target Device | Status |
|------------|-------|---------------|--------|
| **Mobile S** | 375px | iPhone SE | ⚠️ Needs testing |
| **Mobile M** | 390px | iPhone 14 | ⚠️ Needs testing |
| **Mobile L** | 428px | iPhone Pro Max | ⚠️ Needs testing |
| **Tablet** | 768px | iPad | ⚠️ Transition point |
| **Laptop** | 1024px | MacBook Air | ⚠️ Needs testing |
| **Desktop** | 1440px | Standard display | ✅ Main target |
| **Wide** | 1920px+ | Large display | ⚠️ Needs max-width |

### Current Implementation

**Tailwind Breakpoints:**
```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets / Mobile transition */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

**Custom Mobile Hook:**
```tsx
// /components/ui/use-mobile.ts
export function useIsMobile() {
  return window.innerWidth < 768;
}
```

---

## ✅ ACTION ITEMS — PRIORITY ORDER

### 🔥 Critical (Week 1)

1. **[ ] Update PDPExperiencePage.tsx**
   - Add GlobalNavigation, GlobalFooter, Breadcrumb
   - Replace custom components with core-system components
   - Add mobile-responsive layout

2. **[ ] Update ProductListingPage.tsx**
   - Convert from demo to real experience
   - Add GlobalNavigation, GlobalFooter, Breadcrumb
   - Ensure mobile experience works

3. **[ ] Update RitualFinderPage.tsx**
   - Add GlobalNavigation, GlobalFooter
   - Use ProductCard for results
   - Verify mobile experience

4. **[ ] Create Missing Mobile Components**
   - MobileNavigationBar
   - MobileTabBar (if needed)
   - Mobile variants documented

### 🎯 High Priority (Week 2)

5. **[ ] Create CheckoutPage.tsx**
   - Use CheckoutElements from ui-blocks
   - Add GlobalNavigation, GlobalFooter
   - Mobile-first checkout flow

6. **[ ] Create CartPage.tsx**
   - Full cart page (not just drawer)
   - Use CartElements from ui-blocks
   - Mobile-first design

7. **[ ] Enhance HomePage Mobile Experience**
   - Add mobile-specific layouts below 768px
   - Use mobile components where appropriate

### 📊 Medium Priority (Week 3)

8. **[ ] Audit Component Duplicates**
   - Consolidate ProductCards vs ProductCard
   - Review Navigation components
   - Document what to keep vs deprecate

9. **[ ] Create ConfirmationPage.tsx**
   - Order confirmation experience
   - Email receipt preview

10. **[ ] Responsive Testing Audit**
    - Test all breakpoints
    - Fix layout issues
    - Document responsive behaviors

---

## 📏 IMPLEMENTATION RULES

### Core Component Usage

✅ **ALWAYS USE:**
- GlobalNavigation (every page)
- GlobalFooter (every page)
- Breadcrumb (where applicable)
- ProductCard (for all product displays)
- PriceDisplay (for all prices)
- QuantitySelector (for quantity controls)
- RitualSystemBadge (for system indicators)
- NewsletterSignup (in footer or standalone)

❌ **NEVER DO:**
- Build custom navigation
- Build custom footer
- Build custom breadcrumbs
- Build custom product cards
- Build custom price displays
- Build custom quantity selectors

### Mobile-First Rules

✅ **Below 768px:**
- Use mobile-specific components
- Single-column layouts
- Full-width CTAs
- 48px minimum touch targets
- 16px screen padding
- Bottom sticky bars for key actions

❌ **Avoid:**
- Desktop hover states on mobile
- Small touch targets (<44px)
- Multi-column grids on small screens
- Dropdown menus (use drawers/sheets)

---

## 📝 SUCCESS CRITERIA

### Page-Level

- [ ] All Experience pages use GlobalNavigation
- [ ] All Experience pages use GlobalFooter
- [ ] All Experience pages use Breadcrumb (where applicable)
- [ ] All product displays use ProductCard
- [ ] All prices use PriceDisplay
- [ ] All quantity controls use QuantitySelector
- [ ] All system badges use RitualSystemBadge

### Mobile-Level

- [ ] All pages have mobile-specific layouts below 768px
- [ ] All CTAs meet 48px minimum height
- [ ] All touch targets meet 44px minimum
- [ ] All pages use single-column layouts on mobile
- [ ] Navigation is mobile-optimized

### Consistency

- [ ] No duplicate components
- [ ] No custom-built versions of core components
- [ ] Consistent spacing system
- [ ] Consistent color usage
- [ ] Consistent typography
- [ ] Consistent motion/interaction patterns

---

## 🗂️ FILES TO UPDATE

### Experience Pages
- `/pages/PDPExperiencePage.tsx` ⚠️
- `/pages/ProductListingPage.tsx` ⚠️
- `/pages/RitualFinderPage.tsx` ⚠️
- `/pages/HomePage.tsx` ✅ (enhance mobile)

### New Pages to Create
- `/pages/CheckoutPage.tsx` ❌
- `/pages/CartPage.tsx` ❌
- `/pages/ConfirmationPage.tsx` ❌

### Components to Create/Update
- `/components/mobile/MobileNavigationBar.tsx` (new)
- `/components/mobile/MobileTabBar.tsx` (new)
- `/components/ui-blocks/ProductCards.tsx` (audit/merge)

### Documentation
- This file (audit log)
- Core system README updates
- Mobile component documentation

---

## 📞 NEXT STEPS

1. **Review this audit** with design system lead
2. **Prioritize updates** based on business impact
3. **Start with PDP** (highest traffic page)
4. **Create mobile components** in parallel
5. **Update remaining pages** systematically
6. **Test at all breakpoints**
7. **Document patterns** for future pages

---

**Status:** Audit Complete — Ready for Implementation  
**Owner:** Design System Team  
**Review Date:** November 13, 2025
