# HØLY™ / CORE SYSTEM COMPONENTS

**Location:** `/components/core-system/`  
**Status:** 🔒 LOCKED — Do Not Detach or Regenerate  
**Version:** 2.0  
**Created:** November 13, 2025

---

## PURPOSE

This directory contains the **master components** that form the locked foundation of the HØLY™ Design System. All instances across the codebase must reference these files — never copy or recreate inline.

---

## COMPONENTS

### Navigation & Layout
- `GlobalNavigation.tsx` — Header navigation (desktop + mobile)
- `GlobalFooter.tsx` — Footer with links and social
- `Breadcrumb.tsx` — Navigation hierarchy trail

### Commerce
- `ProductCard.tsx` — Product display card (all contexts)
- `PriceDisplay.tsx` — Price with compare-at and savings
- `QuantitySelector.tsx` — Quantity input with +/- buttons
- `RitualSystemBadge.tsx` — Ritual system badges with ™

### Conversion
- `NewsletterSignup.tsx` — Email capture with validation

### Exports
- `index.tsx` — Central export file (import from here)

---

## IMPORT PATTERN

```tsx
// ✅ CORRECT
import { 
  GlobalNavigation, 
  GlobalFooter,
  ProductCard 
} from '../components/core-system';

// ❌ WRONG - Don't import individual files
import { GlobalNavigation } from '../components/core-system/GlobalNavigation';
```

---

## USAGE RULES

### ✅ DO

1. Import components from this directory
2. Use props to customize appearance/behavior
3. Reference the locked components across all pages
4. Check documentation before creating new components
5. Update master files (with approval) for system-wide changes

### ❌ DON'T

1. Copy component code inline
2. Create detached variants
3. Regenerate navigation/footer code
4. Modify without updating documentation
5. Create duplicate components elsewhere

---

## CUSTOMIZATION

All components support customization through props:

```tsx
// Theme variants
<GlobalNavigation theme="dark" />
<GlobalFooter theme="light" />

// Size variants
<ProductCard variant="featured" />
<PriceDisplay variant="large" />

// Conditional features
<GlobalNavigation 
  showAnnouncement={true}
  announcementText="Free shipping"
/>
```

---

## DOCUMENTATION

**Full Documentation:**
- `/guidelines/core-system-components-lockdown.md` — Complete usage guide
- `/guidelines/component-registry.md` — All components catalog
- `/guidelines/CORE-SYSTEM-README.md` — Quick reference

**Usage Examples:**
- `/pages/HomePage.tsx` — See live implementation

---

## MAINTENANCE

**Change Process:**
1. Document change request
2. Get approval from Design System Lead
3. Update master component file
4. Test all instances
5. Update documentation
6. Notify team

**Review Frequency:** Monthly  
**Owner:** Preston, Tiana & YONI™  
**Contact:** See `/pages/FileOverviewPage.tsx`

---

## VERSION HISTORY

**v2.0 (Nov 13, 2025):**
- Initial creation of core system
- 8 master components established
- HomePage migrated to use core components
- Full documentation created

---

## PROTECTED FILES

These files are protected from regeneration:

- ✅ All `.tsx` files in this directory
- ✅ `index.tsx` export file
- ⚠️ Do not delete or move without system-wide update

---

## BENEFITS

1. **Consistency** — Same components everywhere
2. **Efficiency** — No duplicate code
3. **Maintainability** — Update once, affects all pages
4. **AI-Optimized** — Clear component boundaries
5. **Accessibility** — WCAG AAA built-in
6. **Brand Protection** — Trademark enforcement

---

**🔒 This is a locked component library. Respect the lockdown rules to maintain system integrity.**
