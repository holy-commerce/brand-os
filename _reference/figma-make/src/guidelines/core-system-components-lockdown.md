# 🔒 HØLY™ CORE SYSTEM COMPONENTS — LOCKDOWN & GOVERNANCE

**Version:** 2.0  
**Last Updated:** November 13, 2025  
**Status:** LOCKED — Do Not Detach or Regenerate

---

## 📦 OVERVIEW

This document defines the **locked master components** that form the foundation of the HØLY™ Design System. These components are consolidated, reusable, and protected against overwrites to ensure long-term stability, AI efficiency, and brand consistency.

---

## 🎯 CORE PRINCIPLES

### 1. **Single Source of Truth**
- Each component exists in ONE master file only
- All instances reference the master component
- No inline duplication or detached variants

### 2. **Locked Components**
- DO NOT detach from master
- DO NOT regenerate inline code
- DO NOT create custom variants outside the system

### 3. **Prop-Based Customization**
- Use component props for variations
- Use theme props for dark/light modes
- Use variant props for size/style changes

### 4. **Naming Convention**
```
File: /components/core-system/[ComponentName].tsx
Component: <ComponentName />
Props Interface: [ComponentName]Props
```

---

## 🧭 NAVIGATION & LAYOUT COMPONENTS

### GlobalNavigation
**File:** `/components/core-system/GlobalNavigation.tsx`

**Purpose:** Master navigation header with desktop and mobile responsive variants.

**Usage:**
- Home Page
- PDP Experience
- PLP Experience
- Ritual Finder
- Checkout Flow
- All public pages

**Props:**
```typescript
interface GlobalNavigationProps {
  cartCount?: number;           // Cart item count badge
  onCartClick?: () => void;     // Cart click handler
  theme?: 'light' | 'dark';     // Color theme
  showAnnouncement?: boolean;   // Show announcement bar
  announcementText?: string;    // Announcement message
}
```

**Variants:**
- Desktop Navigation (auto-responsive)
- Mobile Navigation Drawer
- Light Theme (default)
- Dark Theme

**Example:**
```tsx
<GlobalNavigation 
  cartCount={2}
  showAnnouncement={true}
  announcementText="Free shipping on orders over $75"
/>
```

---

### GlobalFooter
**File:** `/components/core-system/GlobalFooter.tsx`

**Purpose:** Master footer with multi-column links and social media.

**Usage:**
- Home Page
- PDP Experience
- PLP Experience
- All public pages

**Props:**
```typescript
interface GlobalFooterProps {
  theme?: 'light' | 'dark';  // Default: 'dark'
}
```

**Footer Sections:**
- Shop Links
- Learn Links
- Support Links
- Social Media Icons
- Copyright & Legal Links

**Example:**
```tsx
<GlobalFooter theme="dark" />
```

---

### Breadcrumb
**File:** `/components/core-system/Breadcrumb.tsx`

**Purpose:** Navigation hierarchy breadcrumb trail.

**Usage:**
- PDP Experience
- PLP Experience
- Content Pages

**Props:**
```typescript
interface BreadcrumbProps {
  items: BreadcrumbItem[];      // Array of breadcrumb items
  theme?: 'light' | 'dark';
}

interface BreadcrumbItem {
  label: string;
  href?: string;  // Optional - last item typically has no href
}
```

**Example:**
```tsx
<Breadcrumb 
  items={[
    { label: 'Shop', href: '/shop' },
    { label: 'Ritual Aftercare™', href: '/shop/aftercare' },
    { label: 'Restorative Body Oil' }
  ]}
/>
```

---

## 🛍️ COMMERCE COMPONENTS

### ProductCard
**File:** `/components/core-system/ProductCard.tsx`

**Purpose:** Master product card for all commerce contexts.

**Usage:**
- Home Page Featured Products
- PLP Grid
- Related Products (PDP)
- Cart Recommendations

**Props:**
```typescript
interface ProductCardProps {
  id: number | string;
  name: string;
  system?: string;               // e.g., "Aftercare"
  price: number;
  compareAtPrice?: number;
  image: string;
  badge?: string;                // e.g., "Bestseller", "New"
  onAddToCart?: (id) => void;
  onToggleFavorite?: (id) => void;
  variant?: 'standard' | 'compact' | 'featured';
}
```

**Variants:**
- Standard (default)
- Compact (smaller sizing)
- Featured (larger, hero treatment)

**Features:**
- Hover scale on image
- Quick add to cart button (hover state)
- Favorite heart icon (optional)
- Badge display
- Compare-at pricing support

**Example:**
```tsx
<ProductCard
  id={1}
  name="Restorative Body Oil"
  system="Aftercare"
  price={64}
  image="https://..."
  badge="Bestseller"
  onAddToCart={(id) => addToCart(id)}
/>
```

---

### PriceDisplay
**File:** `/components/core-system/PriceDisplay.tsx`

**Purpose:** Consistent price display with compare-at pricing and savings.

**Usage:**
- Product Cards
- PDP
- Cart
- Checkout

**Props:**
```typescript
interface PriceDisplayProps {
  price: number;
  compareAtPrice?: number;
  variant?: 'default' | 'large' | 'compact';
  showSavings?: boolean;  // Default: true
}
```

**Features:**
- Automatic savings calculation
- Percentage discount badge
- Strikethrough compare-at price
- Responsive sizing

**Example:**
```tsx
<PriceDisplay 
  price={64} 
  compareAtPrice={80}
  variant="large"
/>
// Displays: $64.00  $80.00  Save 20%
```

---

### QuantitySelector
**File:** `/components/core-system/QuantitySelector.tsx`

**Purpose:** Quantity input with increment/decrement buttons.

**Usage:**
- PDP
- Cart
- Quick Add modals

**Props:**
```typescript
interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;     // Default: 1
  max?: number;     // Default: 99
  variant?: 'default' | 'compact';
}
```

**Features:**
- Disabled states at min/max
- Accessible button controls
- Controlled component pattern

**Example:**
```tsx
<QuantitySelector 
  value={quantity}
  onChange={setQuantity}
  min={1}
  max={10}
/>
```

---

### RitualSystemBadge
**File:** `/components/core-system/RitualSystemBadge.tsx`

**Purpose:** Ritual system badge with proper trademark symbols and brand colors.

**Usage:**
- Product Cards
- PDP
- PLP Filters
- System Pages

**Props:**
```typescript
type RitualSystemType = 'aftercare' | 'renewal' | 'touch' | 'union' | 'vital';

interface RitualSystemBadgeProps {
  system: RitualSystemType;
  variant?: 'default' | 'large' | 'compact';
  showIcon?: boolean;  // Default: true
}
```

**System Colors:**
- Aftercare™: #AAB5B2 (Fogstone Blue)
- Renewal™: #D9C4BB (Veil Clay)
- Touch™: #5E6458 (Relic Green) — White text
- Union™: #D7D0C5 (Limestone Oat)
- Vital™: #9C887A (Smoky Umber) — White text

**Features:**
- Automatic trademark symbols (™)
- Proper WCAG contrast (white text on dark backgrounds)
- 2D line-art HØLY icons
- Responsive sizing

**Example:**
```tsx
<RitualSystemBadge 
  system="aftercare" 
  variant="default"
  showIcon={true}
/>
// Displays: [Droplet Icon] Ritual Aftercare™
```

---

## 📧 CONVERSION COMPONENTS

### NewsletterSignup
**File:** `/components/core-system/NewsletterSignup.tsx`

**Purpose:** Email capture with success state and validation.

**Usage:**
- Home Page
- Footer
- Modal overlays
- Post-purchase

**Props:**
```typescript
interface NewsletterSignupProps {
  variant?: 'inline' | 'centered' | 'modal';
  onSubmit?: (email: string) => void;
  theme?: 'light' | 'dark';
}
```

**Features:**
- Email validation
- Success state animation
- Auto-reset after 3 seconds
- Responsive layout
- Accessible form controls

**Example:**
```tsx
<NewsletterSignup 
  variant="centered"
  onSubmit={(email) => subscribeToNewsletter(email)}
/>
```

---

## 📁 FILE STRUCTURE

```
/components/core-system/
├── index.tsx                    # Central export file
├── GlobalNavigation.tsx         # Navigation header
├── GlobalFooter.tsx             # Footer
├── Breadcrumb.tsx               # Breadcrumb trail
├── ProductCard.tsx              # Product card
├── PriceDisplay.tsx             # Price display
├── QuantitySelector.tsx         # Quantity input
├── RitualSystemBadge.tsx        # System badges
└── NewsletterSignup.tsx         # Newsletter form
```

---

## ✅ IMPLEMENTATION CHECKLIST

### When Using Core Components:

- [ ] Import from `/components/core-system`
- [ ] Use component props for customization
- [ ] DO NOT copy/paste component code
- [ ] DO NOT create inline variants
- [ ] DO NOT modify master files without documentation
- [ ] Reference this document for prop usage
- [ ] Test responsive behavior
- [ ] Verify accessibility (WCAG AAA)

### When Adding New Core Components:

- [ ] Create component in `/components/core-system/`
- [ ] Add TypeScript interface for props
- [ ] Add JSDoc header with lockdown warning
- [ ] Export from `index.tsx`
- [ ] Document in this file
- [ ] Test across all breakpoints
- [ ] Update File Governance notes

---

## 🚫 ANTI-PATTERNS TO AVOID

### ❌ DON'T DO THIS:
```tsx
// Copying navigation inline
<nav className="px-8 py-4">
  <div>HØLY™</div>
  ...
</nav>

// Creating custom product card
<div className="product-card">
  <img src={image} />
  <h4>{name}</h4>
  <p>${price}</p>
</div>

// Detaching from master component
// Creating "ProductCard-variant2.tsx"
```

### ✅ DO THIS:
```tsx
// Use core navigation
<GlobalNavigation cartCount={2} />

// Use core product card
<ProductCard
  id={1}
  name="Product Name"
  price={64}
  image={image}
  variant="standard"
/>

// Use props for variations
<GlobalNavigation theme="dark" />
```

---

## 🔄 COMPONENT UPDATE PROCESS

1. **Identify Need:** Document why component needs updating
2. **Update Master:** Modify component in `/components/core-system/`
3. **Test Instances:** Verify all pages using component still work
4. **Update Docs:** Update this file with new props/behavior
5. **Version Control:** Note version change in component header
6. **Notify Team:** Update governance notes

---

## 📊 COMPONENT USAGE TRACKING

### Current Implementations:

**HomePage.tsx:**
- ✅ GlobalNavigation
- ✅ GlobalFooter
- ✅ ProductCard (4 instances)
- ✅ NewsletterSignup

**PDPExperiencePage.tsx:**
- ⏳ To be updated (uses inline navigation)
- ⏳ To be updated (uses inline product cards)

**ProductListingPage.tsx:**
- ⏳ To be updated

---

## 🎓 TRAINING & BEST PRACTICES

### For AI Code Generation:
- Always import from core-system first
- Check this document before creating components
- Use existing components with props instead of regenerating
- Preserve component references during refactoring

### For Manual Development:
- Review component props before customizing
- Request new variants via props, not code duplication
- Test responsive behavior
- Maintain accessibility standards

---

## 📞 GOVERNANCE

**Component Owner:** Design System Lead  
**Review Frequency:** Monthly  
**Change Approval:** Required for master component modifications  
**Documentation:** This file must be updated with all changes

**Contact:** See `🗒️ File Overview + Governance` page for team contacts

---

## 🔗 RELATED DOCUMENTATION

- `/guidelines/Guidelines.md` — Design system principles
- `/guidelines/icon-emoji-standards.md` — Icon usage rules
- `/guidelines/smoky-umber-accessibility-audit.md` — Color contrast rules
- `/guidelines/temple-black-accessibility-audit.md` — Dark theme accessibility
- `/pages/FileOverviewPage.tsx` — Complete file governance

---

**Version History:**
- v2.0 (Nov 13, 2025): Initial lockdown and consolidation
- Component library created with 8 core components
- HomePage migrated to use core components
