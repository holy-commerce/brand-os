# Mobile-First Quick Reference Guide
## HØLY™ Design System

A fast-reference cheat sheet for implementing mobile-first responsive patterns.

---

## 🎯 Touch Target Standards

### Minimum Sizes (WCAG 2.1)
```tsx
// ALWAYS use these minimums
minHeight: '44px'  // Level AA (required)
minHeight: '48px'  // Level AAA (recommended for primary actions)
minWidth: '44px'   // For icon-only buttons

// Examples
<button style={{ minHeight: '44px', padding: '12px 16px' }}>
  Click Me
</button>

<button style={{ minWidth: '44px', minHeight: '44px', padding: '10px' }}>
  <Icon />
</button>
```

### Quick Fix Checklist
- [ ] All buttons: min 44px height
- [ ] All checkbox/radio labels: min 44px height
- [ ] All navigation items: min 44px height
- [ ] All filter options: min 44px height
- [ ] Icon-only buttons: min 44x44px

---

## 📱 Safe Area Support

### iOS Notch/Home Indicator
```tsx
// Bottom sheets, modals, sticky footers
<div style={{
  paddingBottom: 'env(safe-area-inset-bottom)',
  paddingTop: 'env(safe-area-inset-top)'
}}>
  Content
</div>

// Common use cases
<SheetContent style={{ 
  paddingBottom: 'env(safe-area-inset-bottom)' 
}} />

<footer style={{ 
  paddingBottom: 'calc(16px + env(safe-area-inset-bottom))' 
}} />
```

---

## 🎨 Sheet/Drawer Pattern (Mobile)

### Bottom Sheet (Mobile Filters, Settings)
```tsx
<Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger asChild>
    <Button style={{ minHeight: '44px' }}>
      Open Filters
      {count > 0 && <Badge>{count}</Badge>}
    </Button>
  </SheetTrigger>
  
  <SheetContent 
    side="bottom"
    className="flex flex-col p-0"
    style={{ 
      height: '90vh',
      paddingBottom: 'env(safe-area-inset-bottom)' 
    }}
  >
    {/* Header - Fixed */}
    <div className="flex-shrink-0 px-6 pt-6 pb-4 border-b">
      <h2>Title</h2>
    </div>

    {/* Content - Scrollable */}
    <div 
      className="flex-1 overflow-y-auto px-6 py-4"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {content}
    </div>

    {/* Footer - Sticky */}
    <div className="flex-shrink-0 p-4 border-t">
      <Button onClick={handleApply}>Apply</Button>
    </div>
  </SheetContent>
</Sheet>
```

### Side Sheet (Mobile Navigation)
```tsx
<SheetContent 
  side="left" 
  className="w-[280px]"
  style={{ backgroundColor: '#FFFFFF' }}
>
  <nav>
    <button style={{ minHeight: '44px' }}>
      Navigation Item
    </button>
  </nav>
</SheetContent>
```

---

## 🔢 Active State Badges

### Filter Button with Count
```tsx
<Button style={{ minHeight: '44px' }}>
  <Icon />
  Filters
  {activeCount > 0 && (
    <span style={{
      marginLeft: '8px',
      paddingLeft: '8px',
      paddingRight: '8px',
      paddingTop: '2px',
      paddingBottom: '2px',
      borderRadius: '12px',
      backgroundColor: '#1A1A1A',
      color: '#F9F6F0',
      fontSize: '12px',
      fontWeight: '600'
    }}>
      {activeCount}
    </span>
  )}
</Button>
```

### Filter Group Header with Count
```tsx
<button 
  style={{ minHeight: '56px' }}
  aria-label={`${title}, ${selectedCount} selected`}
>
  <span>{title}</span>
  {selectedCount > 0 && (
    <Badge>{selectedCount}</Badge>
  )}
  <ChevronIcon />
</button>
```

---

## ♿ Accessibility Essentials

### ARIA Labels
```tsx
// Icon-only buttons
<button aria-label="Open filters">
  <FilterIcon />
</button>

// State announcements
<button aria-label={`Filters, ${count} active`}>
  Filters {count > 0 && <Badge>{count}</Badge>}
</button>

// Expandable sections
<button 
  aria-expanded={isOpen}
  aria-label={`${title} filters, ${count} selected`}
>
  {title}
</button>

// Current page
<button aria-current={isActive ? 'page' : undefined}>
  Page Name
</button>
```

### VisuallyHidden Pattern
```tsx
import { VisuallyHidden } from './components/ui/visually-hidden';

<SheetContent>
  <VisuallyHidden>
    <SheetTitle>Filter Products</SheetTitle>
    <SheetDescription>Refine your search</SheetDescription>
  </VisuallyHidden>
  {/* Visible content */}
</SheetContent>
```

---

## 🎭 Responsive Layout Patterns

### Mobile Stack → Desktop Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id} />)}
</div>
```

### Mobile Drawer → Desktop Sidebar
```tsx
// Mobile
<div className="lg:hidden">
  <Sheet>
    <SheetContent side="bottom">{filters}</SheetContent>
  </Sheet>
</div>

// Desktop
<div className="hidden lg:block lg:w-64">
  {filters}
</div>
```

### Mobile Full-Screen → Desktop Modal
```tsx
<Dialog>
  <DialogContent className="w-full h-full md:w-auto md:h-auto md:max-w-2xl">
    {content}
  </DialogContent>
</Dialog>
```

---

## 📏 Spacing Standards

### Mobile Padding
```tsx
// Container padding
px-4  // 16px - standard mobile padding
px-6  // 24px - generous mobile padding

// Vertical spacing
py-4  // 16px
py-6  // 24px
gap-4 // 16px between items
```

### Desktop Padding
```tsx
// Container padding
md:px-8  // 32px
lg:px-12 // 48px

// Vertical spacing
md:py-8  // 32px
lg:py-12 // 48px
```

---

## 🏷️ Typography Scaling

### Mobile First
```tsx
// Headings
fontSize: '24px'  // Mobile H1
fontSize: '20px'  // Mobile H2
fontSize: '18px'  // Mobile H3

// Body
fontSize: '15px'  // Mobile body (prevents zoom on iOS)
fontSize: '14px'  // Mobile secondary
fontSize: '13px'  // Mobile caption
```

### Desktop Scale-Up
```tsx
// Headings
fontSize: '48px'  // Desktop H1
fontSize: '32px'  // Desktop H2
fontSize: '24px'  // Desktop H3

// Body
fontSize: '16px'  // Desktop body
fontSize: '14px'  // Desktop secondary
```

---

## 🎬 Motion Guidelines

### Touch Feedback
```tsx
import { motion } from 'motion/react';

<motion.button
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.15 }}
>
  Tap Me
</motion.button>
```

### Smooth Scrolling
```tsx
<div style={{ 
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch' // iOS momentum scrolling
}}>
  {content}
</div>
```

### Sheet Animation Timing
```tsx
// Open: slower, welcoming
duration: 500ms

// Close: faster, efficient
duration: 300ms

// Ease curve
transition: 'ease-in-out'
```

---

## 🧪 Testing Checklist

### Mobile Device Testing
```bash
# Chrome DevTools
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test viewports:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPhone 14 Pro Max (430px)
   - iPad (768px)
```

### Touch Target Verification
```css
/* Add this temporarily to verify targets */
[role="button"], button, a {
  outline: 2px solid red !important;
  min-height: 44px !important;
}
```

### Safe Area Testing
```bash
# Simulate notched device in DevTools
1. iPhone 12 Pro or newer
2. Enable "Show device frame"
3. Verify content doesn't touch notch/home indicator
```

---

## 🚫 Common Mistakes

### ❌ Don't
```tsx
// Too small
<button style={{ padding: '4px 8px' }}>Click</button>

// No touch feedback
<div onClick={handler}>Clickable</div>

// Hover-only interactions
<div className="hover:bg-gray-200" onClick={handler} />

// Missing safe area
<footer style={{ paddingBottom: '16px' }} />

// Desktop-first thinking
<div className="hidden md:block">Important content</div>
```

### ✅ Do
```tsx
// Proper size
<button style={{ minHeight: '44px', padding: '12px 16px' }}>
  Click
</button>

// Use button element
<button onClick={handler}>Clickable</button>

// Active state for touch
<button className="active:bg-gray-200" onClick={handler}>
  Tap me
</button>

// Include safe area
<footer style={{ 
  paddingBottom: 'calc(16px + env(safe-area-inset-bottom))' 
}} />

// Mobile-first with enhancement
<div className="block md:hidden">
  Mobile-optimized version
</div>
```

---

## 📊 Breakpoint Reference

### Tailwind Breakpoints
```tsx
// Mobile-first (default)
className="px-4"           // All sizes

// Tablet
className="md:px-8"        // ≥768px

// Desktop
className="lg:px-12"       // ≥1024px

// Large desktop
className="xl:px-16"       // ≥1280px
```

### Custom Breakpoints (if needed)
```tsx
const isMobile = window.innerWidth < 768;
const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
const isDesktop = window.innerWidth >= 1024;
```

---

## 🎨 HØLY™ Brand Specifics

### Mobile Filter Button
```tsx
<Button 
  variant="outline" 
  className="w-full relative"
  style={{ 
    borderColor: '#DADADA',
    color: '#1A1A1A',
    backgroundColor: '#FFFFFF',
    height: '44px',
    fontSize: '15px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500'
  }}
>
  <HOLYFilter className="w-5 h-5 mr-2" />
  Filters
  {count > 0 && (
    <span style={{
      marginLeft: '8px',
      paddingLeft: '8px',
      paddingRight: '8px',
      paddingTop: '2px',
      paddingBottom: '2px',
      borderRadius: '12px',
      backgroundColor: '#1A1A1A',
      color: '#F9F6F0',
      fontSize: '12px',
      fontWeight: '600'
    }}>
      {count}
    </span>
  )}
</Button>
```

### Mobile Sheet Header
```tsx
<div className="flex-shrink-0 px-6 pt-6 pb-4 border-b"
     style={{ borderColor: '#DADADA' }}>
  <div className="flex items-center justify-between mb-2">
    <div className="flex items-center gap-3">
      <HOLYFilter size={24} color="#1A1A1A" strokeWidth={1.5} />
      <h2 style={{ 
        fontFamily: 'Garamond, serif', 
        fontSize: '24px', 
        color: '#1A1A1A',
        margin: 0
      }}>
        Title
      </h2>
    </div>
  </div>
</div>
```

### Mobile Sticky Footer
```tsx
<div className="flex-shrink-0 p-4 border-t"
     style={{ 
       borderColor: '#DADADA',
       backgroundColor: '#FFFFFF',
       boxShadow: '0 -4px 16px rgba(0,0,0,0.06)'
     }}>
  <div className="flex gap-3">
    <Button 
      variant="outline"
      style={{ 
        flex: '1',
        height: '48px',
        borderColor: '#DADADA',
        color: '#1A1A1A'
      }}
    >
      Reset
    </Button>
    <Button 
      style={{ 
        flex: '2',
        height: '48px',
        backgroundColor: '#1A1A1A',
        color: '#F9F6F0'
      }}
    >
      Apply
    </Button>
  </div>
</div>
```

---

## 🔗 Related Resources

- **Full Audit**: `/guidelines/responsive-mobile-first-audit-nov13-2025.md`
- **Icon Standards**: `/guidelines/icon-emoji-standards.md`
- **Motion Patterns**: `/guidelines/sacred-microinteractions-motion.md`
- **Accessibility**: `/guidelines/smoky-umber-accessibility-audit.md`

---

**Last Updated**: November 13, 2025
**Maintained By**: HØLY™ Design System Team
