# 🔒 HØLY™ CORE SYSTEM COMPONENTS

**Quick Reference Guide**

---

## 📦 WHAT IS THIS?

The Core System Components library contains **locked, reusable master components** that form the foundation of the HØLY™ Design System. These components ensure consistency, prevent code duplication, and enable AI-efficient code generation.

---

## ⚡ QUICK START

### Import Core Components

```tsx
import { 
  GlobalNavigation,
  GlobalFooter,
  ProductCard,
  NewsletterSignup
} from '../components/core-system';
```

### Use Components (Not Inline Code)

✅ **DO THIS:**
```tsx
<GlobalNavigation cartCount={2} />
<ProductCard 
  id={1}
  name="Restorative Body Oil"
  price={64}
  image={imageUrl}
/>
<GlobalFooter theme="dark" />
```

❌ **DON'T DO THIS:**
```tsx
// Don't copy inline navigation
<nav className="...">
  <div>HØLY™</div>
  ...
</nav>

// Don't create custom product card
<div className="product-card">...</div>
```

---

## 🔑 CORE COMPONENTS (8 Total)

### 🧭 Navigation & Layout

| Component | Purpose | Props |
|-----------|---------|-------|
| **GlobalNavigation** | Header nav (desktop + mobile) | `cartCount`, `theme`, `showAnnouncement` |
| **GlobalFooter** | Footer with links | `theme` |
| **Breadcrumb** | Navigation trail | `items[]`, `theme` |

### 🛍️ Commerce

| Component | Purpose | Props |
|-----------|---------|-------|
| **ProductCard** | Product display | `id`, `name`, `price`, `image`, `variant` |
| **PriceDisplay** | Price with savings | `price`, `compareAtPrice`, `variant` |
| **QuantitySelector** | +/- quantity input | `value`, `onChange`, `min`, `max` |
| **RitualSystemBadge** | System badge with ™ | `system`, `variant`, `showIcon` |

### 📧 Conversion

| Component | Purpose | Props |
|-----------|---------|-------|
| **NewsletterSignup** | Email capture | `variant`, `onSubmit`, `theme` |

---

## 🚨 CRITICAL RULES

### 1. **DO NOT Detach or Regenerate**
These components are locked. Reference them, don't copy them.

### 2. **Use Props for Customization**
Need a variant? Use the `variant` prop. Need dark mode? Use `theme="dark"`.

### 3. **Import from core-system**
Always import from `/components/core-system/`, never copy code.

### 4. **Check Documentation First**
Before creating a new component, check if a core component exists.

---

## 📚 DOCUMENTATION

- **Full Guide:** `/guidelines/core-system-components-lockdown.md`
- **Component Registry:** `/guidelines/component-registry.md`
- **Usage Examples:** See `/pages/HomePage.tsx`

---

## 🔄 MIGRATION STATUS

✅ **Completed:**
- Core system created (8 components)
- HomePage migrated
- Documentation complete

⏳ **In Progress:**
- PDPExperiencePage migration
- ProductListingPage migration
- RitualFinderPage migration

---

## 🎯 BENEFITS

1. **Consistency** — Same nav/footer everywhere
2. **Efficiency** — No code duplication
3. **Maintainability** — Update once, applies everywhere
4. **AI-Friendly** — Clear component boundaries
5. **Accessibility** — WCAG AAA compliance built-in
6. **Brand Protection** — Trademark symbols enforced

---

## 📞 QUESTIONS?

See the full documentation in:
- `/guidelines/core-system-components-lockdown.md`

**Component Owner:** Design System Lead  
**Last Updated:** November 13, 2025  
**Version:** 2.0
