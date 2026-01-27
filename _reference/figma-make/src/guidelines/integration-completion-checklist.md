# HØLY × Stackzero Integration - Completion Checklist

**Status:** In Progress (Phase 2)  
**Last Updated:** November 11, 2025

---

## ✅ Phase 1: Completed

### Infrastructure
- [x] File Overview page updated with Stackzero integration section
- [x] Stackzero integration guidelines documentation created
- [x] Color accessibility audit completed (white text on Smoky Umber & Fogstone Blue)
- [x] globals.css updated with WCAG AAA accessibility rules
- [x] Tokens page updated with accessibility warnings
- [x] Print & Packaging Tokens page updated to v2.0 palette

### Accessibility Fixes
- [x] All buttons with Smoky Umber background → white text (#F9F6F0)
- [x] All badges with Smoky Umber background → white text
- [x] All buttons with Fogstone Blue background → white text  
- [x] All badges with Fogstone Blue background → white text
- [x] CSS custom properties updated (--accent-foreground, --muted-foreground)

---

## 🚧 Phase 2: In Progress

### Sacred Language Implementation

**Status:** Partially Complete

#### Completed
- [x] RitualAftercareComponents: "Begin Your Ritual"
- [x] RitualRenewalComponents: "Begin Your Ritual"
- [x] RitualVitalComponents: "Ritual Subscription — Save 15%"
- [x] CartElements: "Begin Your Ritual", "Sacred Gift Included"
- [x] NavigationSections: "Explore Rituals"

#### Remaining Updates Needed

**ProductCards.tsx** (4 instances)
```tsx
// Line ~178, ~229, ~281, ~318
"Add to Cart" → "Begin Your Ritual"
```

**ProductInteractionElements.tsx** (2 instances)
```tsx
// Line ~188
"Add to Cart — $68" → "Begin Your Ritual — $68"

// Line ~204
"Subscribe & Save 15%" → "Ritual Subscription — Save 15%"
```

**CommerceModules.tsx** (2 instances)
```tsx
// Line ~75
"Save $43 when purchased together" → "Sacred Bundle — Save $43"

// Line ~208
"Add to Cart" → "Begin Your Ritual"
```

**RitualVitalComponents.tsx** (1 instance)
```tsx
// Line ~455
"With purchase" → "With ritual"
```

**CheckoutElements.tsx**
- "Checkout" → "Complete Your Ritual"
- "Place Order" → "Begin Sacred Journey"
- "Payment Method" → "Sacred Offering Method"

**UIComponentsPage.tsx** (1 instance)
```tsx
// Line ~271
"Add to Cart Block (with Quantity Selector)" → "Begin Your Ritual Block (with Quantity Selector)"
```

---

## 📋 Phase 3: Structural Alignment (Not Started)

### Component Architecture Review

Review each component against Stackzero Commerce UI structure:

#### Product Cards
- [ ] Verify hierarchy matches Stackzero ProductCard component
- [ ] Ensure spacing tokens align with Stackzero conventions
- [ ] Add ritual variant prop system (aftercare, renewal, touch, union, vital)
- [ ] Document component API in Storybook format

#### Navigation
- [ ] Map HØLY NavigationExtended to Stackzero NavigationMenu
- [ ] Verify mega-menu structure alignment
- [ ] Add ritual selector integration
- [ ] Mobile responsive behavior check

#### Cart & Checkout
- [ ] Align CartElements with Stackzero CartDrawer
- [ ] Verify checkout flow matches Stackzero CheckoutForm
- [ ] Add sacred interaction timing (200-300ms transitions)
- [ ] Test with Shopify cart API integration points

#### Filters & Sort
- [ ] Create RitualFilterPanel component (based on Stackzero FilterPanel)
- [ ] Add ritual-specific filter options
- [ ] Color-based filtering UI
- [ ] Intent/emotion filtering logic

---

## 🎨 Phase 4: Ritual System Variants (Not Started)

### Create Component Variants

For EACH ritual system, create:

#### Ritual Aftercare™ (Fogstone Blue #AAB5B2)
- [ ] ProductCard variant with Fogstone Blue accent
- [ ] CTA buttons with white text on Fogstone Blue
- [ ] Badge variants
- [ ] Icon color theming
- [ ] Hover state definition

#### Ritual Renewal™ (Veil Clay #D9C4BB)
- [ ] ProductCard variant with Veil Clay accent
- [ ] CTA buttons with black text on Veil Clay
- [ ] Badge variants
- [ ] Icon color theming
- [ ] Hover state definition

#### Ritual Touch™ (Relic Green #5E6458)
- [ ] ProductCard variant with Relic Green accent
- [ ] CTA buttons with white text on Relic Green
- [ ] Badge variants
- [ ] Icon color theming
- [ ] Hover state definition

#### Ritual Union™ (Veil Clay #D9C4BB)
- [ ] ProductCard variant with Veil Clay accent
- [ ] CTA buttons with black text on Veil Clay
- [ ] Badge variants
- [ ] Icon color theming
- [ ] Hover state definition

#### Ritual Vital™ (Smoky Umber #9C887A)
- [ ] ProductCard variant with Smoky Umber accent
- [ ] CTA buttons with white text on Smoky Umber
- [ ] Badge variants
- [ ] Icon color theming
- [ ] Hover state definition

---

## 🪄 Phase 5: Sacred Interaction Patterns (Not Started)

### Motion & States Documentation

#### Hover States
- [ ] Define 250ms cubic-bezier(0.4, 0, 0.2, 1) transition
- [ ] translateY(-2px) lift on buttons
- [ ] Soft shadow reveal (0 4px 12px rgba(0, 0, 0, 0.08))
- [ ] No instant snaps (minimum 200ms)

#### Loading States
- [ ] Minimum 800ms display (no flash)
- [ ] Breathe animation (2-3 second pulse)
- [ ] Opacity shifts (0.7 → 1.0)
- [ ] No harsh strobes (WCAG compliance)

#### Focus States
- [ ] Immediate (0ms) for accessibility
- [ ] 2px solid ring with --ring color
- [ ] Sufficient contrast for keyboard navigation
- [ ] Skip-to-content link styling

#### Micro-interactions
- [ ] Add to cart success animation
- [ ] Quantity selector haptic feedback concept
- [ ] Cart drawer slide-in timing (300ms)
- [ ] Modal overlay fade (400ms with easing)

---

## 📇 Phase 6: Print Infrastructure Completion (Partially Complete)

### Print & Packaging Tokens
- [x] CMYK color conversions documented
- [x] Pantone equivalents specified
- [x] Paper stock specifications defined
- [x] Foil/emboss/spot-UV tokens documented
- [ ] Add die-cut shapes library
- [ ] Add fold line specifications
- [ ] Create bleed/safe zone visual guides

### Label Templates (Needs Content)
- [ ] Primary product label dieline (120gsm uncoated)
- [ ] Premium box dieline (300gsm coated board)
- [ ] Insert card template (150gsm uncoated)
- [ ] Outer sleeve template (200gsm coated)
- [ ] SKU block positioning rules
- [ ] Legal text placement standards
- [ ] Barcode safe zone specifications

### Print Components (Needs Content)
- [ ] Label component with bleed guides
- [ ] Box packaging flat layout
- [ ] Emboss depth specifications (0.5mm standard, 1mm premium)
- [ ] Foil stamping layer separation
- [ ] Die-cut shape library
- [ ] Fold line notation system

---

## 🔍 Phase 7: Quality Audit (Not Started)

### Pre-Launch Checklist

- [ ] All "Add to Cart" → "Begin Your Ritual"
- [ ] All "Subscribe" → "Ritual Subscription"
- [ ] All "Checkout" → "Complete Your Ritual"
- [ ] All "Shop Now" → "Explore Rituals"
- [ ] All "View Product" → "Explore Ritual"
- [ ] All "Customer Reviews" → "Sacred Testimonials"
- [ ] All "Best Seller" → "Most Cherished"
- [ ] All "New Arrival" → "Newly Ritual"
- [ ] All "Limited Edition" → "Sacred Limited Release"

### Accessibility Audit
- [ ] WCAG AAA contrast verification (automated tool)
- [ ] Keyboard navigation test (all interactive elements)
- [ ] Screen reader test (VoiceOver/NVDA)
- [ ] Focus indicator visibility check
- [ ] Color-blind simulation test (Coblis)
- [ ] Motion reduction preference respect

### Stackzero Alignment Audit
- [ ] Component naming conventions match
- [ ] File structure mirrors Stackzero organization
- [ ] Props API consistency
- [ ] Spacing scale alignment (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- [ ] Radius scale alignment (8px, 16px, 24px, 9999px)

### Brand Voice Audit
- [ ] No generic commerce language remains
- [ ] All copy reflects sacred/sensual/strategic tone
- [ ] Trademark symbols present (Aftercare™, etc.)
- [ ] ø icon optical centering (translateY(-3px)) consistent

---

## 📊 Progress Tracking

### Overall Completion: ~40%

| Phase | Status | Completion % |
|-------|--------|-------------|
| Phase 1: Infrastructure | ✅ Complete | 100% |
| Phase 2: Sacred Language | 🚧 In Progress | 60% |
| Phase 3: Structural Alignment | ❌ Not Started | 0% |
| Phase 4: Ritual Variants | ❌ Not Started | 0% |
| Phase 5: Sacred Interactions | ❌ Not Started | 0% |
| Phase 6: Print Infrastructure | ⚠️ Partial | 50% |
| Phase 7: Quality Audit | ❌ Not Started | 0% |

---

## 🎯 Next Immediate Actions

### Priority 1: Complete Sacred Language (Next Session)
1. Update remaining ProductCards.tsx instances
2. Update ProductInteractionElements.tsx
3. Update CommerceModules.tsx
4. Update CheckoutElements.tsx
5. Update UIComponentsPage.tsx

### Priority 2: Create Missing Print Pages (Next Session)
1. Label Templates page with dielines
2. Print Components page with emboss/foil specs
3. Visual bleed/safe zone guides

### Priority 3: Ritual Variant System (Future Session)
1. Create RitualProductCard component with variant prop
2. Add color theming system by ritual
3. Document variant API
4. Create showcase on RitualSystemsPage

### Priority 4: Stackzero Structural Audit (Future Session)
1. Compare each HØLY component to Stackzero equivalent
2. Adjust props, naming, structure to match
3. Document deviations with rationale
4. Create migration guide for existing implementations

---

## 📝 Notes

- **Accessibility is non-negotiable:** All changes must maintain WCAG AAA compliance
- **Stackzero as foundation, not replacement:** We adopt structure but overlay HØLY soul
- **Print matters:** Physical brand expression is equal priority to digital
- **Sacred language must feel natural:** Avoid forced or cringeworthy spiritual-washing
- **Dev-ready naming:** All tokens must work as CSS custom properties and Shopify variables

---

**Maintainer:** Design System Lead  
**Review Cadence:** Weekly sprint check-ins  
**Version Control:** All changes tracked in this checklist + git commits
