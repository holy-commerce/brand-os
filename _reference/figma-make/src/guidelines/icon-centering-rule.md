# Icon Centering Rule — HØLY Design System

## Rule: Visual Centering for Single-Character Icons

When displaying the "ø" character (or any single-character brand icon) in a centered container, apply optical centering adjustments to compensate for typeface rendering characteristics.

### The Issue
Due to how Garamond and other serif typefaces render letterforms, single characters often appear visually off-center even when technically centered. The character sits on a baseline with descenders, creating extra visual space below.

### The Solution
Always apply these inline styles to any `<div>` or `<p>` element containing a standalone "ø" icon:

```tsx
style={{
  lineHeight: 1,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translateY(-3px)'
}}
```

### Why Each Property Matters
- **`lineHeight: 1`** — Removes extra vertical spacing around the character
- **`margin: 0`** — Eliminates default browser margins
- **`display: 'flex'` + `alignItems/justifyContent: 'center'`** — Provides precise centering control
- **`transform: 'translateY(-3px)'`** — Optically shifts the character upward to achieve visual balance

### Examples

#### ✅ Correct Implementation
```tsx
<div className="w-20 h-20 rounded-full flex items-center justify-center">
  <p style={{
    fontFamily: 'Garamond, serif',
    fontSize: '40px',
    color: '#1A1A1A',
    margin: 0,
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translateY(-3px)'
  }}>
    ø
  </p>
</div>
```

#### ❌ Incorrect Implementation
```tsx
<div className="w-20 h-20 rounded-full flex items-center justify-center">
  <p style={{ fontFamily: 'Garamond, serif', fontSize: '40px', color: '#1A1A1A' }}>
    ø
  </p>
</div>
```

### When to Apply This Rule
Apply this rule to ANY occurrence of:
- The "ø" sacred circle symbol used as a standalone icon
- Single decorative characters in centered containers
- Brand glyphs displayed in hero sections, footers, or decorative blocks
- Typography specimens showing the "ø" character

### Files Updated
The following files have been audited and updated to follow this rule:
- `/App.tsx` (line 70) — Brand icon in overview page header
- `/components/ui-blocks/ContentBlocks.tsx` (lines 53, 118) — Quote block icons
- `/components/ui-blocks/NavigationSections.tsx` (line 262) — Footer sacred circle icon
- `/components/ui-blocks/PromoAnnouncement.tsx` (line 153) — Hero section icon
- `/pages/TokensPage.tsx` (lines 282, 471) — Typography and effects specimens

---

**Note:** This is a visual design principle, not a technical requirement. Always prioritize optical balance over mathematical centering when working with typography.
