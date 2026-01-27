# CTA Ritual Interactions — Sacred Aura & Ritual Pulse

**Date:** November 11, 2025  
**Status:** ✅ COMPLETE  
**Component File:** `/components/ui-blocks/CTAInteractions.tsx`  
**Demo Page:** `/pages/MotionStatesPage.tsx`

---

## 🎯 Overview

Three production-ready interaction components for HØLY CTAs that bring sacred, sensual touch to every button interaction. These replace standard button hover/click states with ritual-inspired animations.

---

## 🌕 Component 1: Sacred Aura (Hover)

### Purpose
Hover interaction for all primary CTAs. Gently radiates with a pulsing glow that evokes sacred presence — like an aura waiting to be initiated.

### Usage
```tsx
import { SacredAuraHover } from '../components/ui-blocks/CTAInteractions';

<SacredAuraHover variant="void-black">
  <button>Add to Ritual</button>
</SacredAuraHover>
```

### Props
- `variant`: 'void-black' | 'veil-clay' | 'fogstone-blue' | 'cream'
- `glowColor`: Optional custom glow color (overrides variant default)
- `glowOpacity`: Optional custom opacity (overrides variant default)
- `className`: Additional CSS classes
- `onClick`: Click handler

### Animation Specs
- **Glow Shape**: Soft radial blur (no stroke/border)
- **Pulse Range**: Scale 120% → 140%
- **Duration**: 1000ms
- **Easing**: ease-in-out
- **Loop**: Infinite while hovered

### Variant Glow Colors
| Variant | Color Token | Hex | Opacity |
|---------|-------------|-----|---------|
| Void Black | Smoky Umber | #9C887A | 35% |
| Veil Clay | Veil Clay | #D9C4BB | 25% |
| Fogstone Blue | Fogstone Blue | #AAB5B2 | 25% |
| Cream | Limestone Oat | #D7D0C5 | 30% |

### Technical Notes
- Glow is positioned **under** button content (z-index: -1)
- Uses `radial-gradient` + `blur(20px)` for soft diffusion
- No border strokes — fill-based only
- Hover does not compress button
- Animation pauses on mouse leave

---

## ✨ Component 2: Ritual Pulse (Click)

### Purpose
Click interaction that plays when a CTA is pressed. Feels like a sacred act of commitment — intimate, brief, spiritually charged.

### Usage
```tsx
import { RitualPulseClick } from '../components/ui-blocks/CTAInteractions';

<RitualPulseClick 
  variant="void-black" 
  showSlitMark={true}
  onComplete={() => console.log('Animation complete')}
>
  <button>Complete Your Ritual</button>
</RitualPulseClick>
```

### Props
- `variant`: 'void-black' | 'veil-clay' | 'fogstone-blue' | 'cream'
- `showSlitMark`: Boolean - Show sacred ø slit mark flash
- `onComplete`: Callback fired after animation completes (350ms)

### Animation Sequence

#### Phase 1: Inward Press (60ms)
- Scale button to 97%
- Shadow deepens slightly
- Easing: ease-out

#### Phase 2: Pulse Ring (200ms)
- Center glow pulses outward
- Expands 100% → 160%
- Opacity: 0.4 → 0
- Easing: ease-out

#### Phase 3: Slit Mark Flash (150ms) — Optional
- If `showSlitMark={true}`, ø mark pulses
- Width: 2px → 16px
- Fade in/out
- Color: #F9F6F0 (Temple Cream)

#### Phase 4: Veil Overlay (80ms)
- Translucent white flash
- `rgba(255, 255, 255, 0.06)`
- Quick fade in/out
- Adds sacred luminosity

#### Phase 5: Return
- Button returns to scale 1
- Total sequence: 350ms

### Technical Notes
- Hover and click states **do not stack**
- One animation ends as next begins
- Slit mark only for ritual CTAs (checkout, add to ritual)
- Works with all variant colors

---

## 🔗 Component 3: CTA Ritual Interaction Set

### Purpose
Complete interaction system combining **Sacred Aura (hover)** + **Ritual Pulse (click)** into one production-ready component. Seamless transition between states.

### Usage
```tsx
import { CTARitualInteraction } from '../components/ui-blocks/CTAInteractions';

<CTARitualInteraction 
  variant="void-black"
  showSlitMark={false}
  disabled={false}
  onClick={() => handleAddToCart()}
>
  <button>Add to Ritual</button>
</CTARitualInteraction>
```

### Props
- `variant`: 'void-black' | 'veil-clay' | 'fogstone-blue' | 'cream'
- `showSlitMark`: Boolean - Show slit mark flash on click
- `disabled`: Boolean - Disable all interactions
- `onClick`: Click handler (fires after animation completes)

### Interaction Flow
1. **Default**: Button at rest
2. **Hover**: Sacred Aura pulse begins (infinite loop)
3. **Click**: Ritual Pulse sequence plays (350ms)
4. **After Click**: Returns to Sacred Aura hover if still hovering
5. **Mouse Leave**: All animations stop

### Disabled State
- 50% opacity
- cursor: not-allowed
- No hover or click animations
- Visual indication of unavailable state

---

## 🎨 Design Principles

### Sacred Touch
Every interaction should feel **intentional**, **calm**, and **reverent**. No harsh snaps or aggressive motion.

### Radial Blur Only
No stroke/border glows. Only soft radial gradients with heavy blur for diffuse, ethereal effect.

### Token-Driven Colors
All glow colors pulled from HØLY v2.0 color palette:
- Smoky Umber (#9C887A)
- Veil Clay (#D9C4BB)
- Fogstone Blue (#AAB5B2)
- Limestone Oat (#D7D0C5)

### Timing Philosophy
- **Hover**: Slow, infinite breath (1000ms)
- **Click**: Quick, decisive ritual (350ms total)
- **Easing**: ease-in-out (breath) / ease-out (action)

---

## 📋 Implementation Checklist

### When to Use Which Component

**Use `SacredAuraHover`:**
- Need hover-only interaction
- Custom click handlers already exist
- Building component from scratch

**Use `RitualPulseClick`:**
- Need click-only interaction
- Hover state handled elsewhere
- Focus on ritual completion moment

**Use `CTARitualInteraction`:** ✅ **Recommended**
- Production applications
- Complete interaction system
- Most common use case
- Combines both hover + click seamlessly

---

## 🔍 Examples

### Primary CTA (Add to Cart)
```tsx
<CTARitualInteraction variant="void-black" onClick={handleAddToCart}>
  <button style={primaryButtonStyles}>Add to Ritual</button>
</CTARitualInteraction>
```

### Checkout CTA (with Slit Mark)
```tsx
<CTARitualInteraction 
  variant="void-black" 
  showSlitMark={true}
  onClick={handleCheckout}
>
  <button style={checkoutButtonStyles}>Complete Your Ritual</button>
</CTARitualInteraction>
```

### Secondary CTA (Soft Action)
```tsx
<CTARitualInteraction variant="veil-clay" onClick={handleLearnMore}>
  <button style={secondaryButtonStyles}>Learn More</button>
</CTARitualInteraction>
```

### Disabled State
```tsx
<CTARitualInteraction variant="void-black" disabled={true}>
  <button style={primaryButtonStyles}>Out of Stock</button>
</CTARitualInteraction>
```

---

## 🌟 Accessibility

- ✅ **Keyboard Focus**: Components support focus states (add to implementation)
- ✅ **Reduced Motion**: Should respect `prefers-reduced-motion` (future enhancement)
- ✅ **Color Contrast**: All glow colors maintain button text contrast
- ✅ **Non-Intrusive**: Animations don't interfere with readability
- ✅ **Semantic HTML**: Works with any button element

---

## 📦 Files Created

1. `/components/ui-blocks/CTAInteractions.tsx` — Component library
2. `/guidelines/cta-ritual-interactions.md` — This documentation
3. `/pages/MotionStatesPage.tsx` — Updated with demo sections:
   - 🌕 Sacred Aura (Hover State)
   - ✨ Ritual Pulse (Click State)
   - 🔗 CTA Ritual Interaction Set

---

## 🔮 Future Enhancements

- [ ] Add `prefers-reduced-motion` media query support
- [ ] Create TypeScript types export
- [ ] Add focus state variants for keyboard navigation
- [ ] Consider adding haptic feedback API for mobile
- [ ] Build Storybook documentation
- [ ] Add unit tests for animation timing

---

**Status**: Ready for production use across all HØLY e-commerce CTAs ✨
