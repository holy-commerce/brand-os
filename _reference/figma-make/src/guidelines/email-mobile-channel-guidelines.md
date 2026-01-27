# Email & Mobile Channel Guidelines — HØLY™ Design System

**Date:** November 12, 2025  
**Status:** ✅ COMPLETE  
**Component Locations:** `/pages/EmailComponentsPage.tsx`, `/pages/MobileComponentsPage.tsx`  
**Design System:** HØLY™ v2.0

---

## Overview

The HØLY™ design system extends beyond web/storefront to support **Email (ESP templates)** and **Mobile App UI**. These channel-specific components maintain brand integrity while adhering to platform-specific constraints.

---

## Email Components (ESP-Optimized)

### Platform Support
- **Primary:** Klaviyo, Mailchimp, SendGrid, Postmark
- **Testing:** Gmail, Outlook, Apple Mail, Yahoo, mobile clients

### Email Design Tokens

#### Typography
- **Heading Font:** Georgia, serif (email-safe fallback for Garamond)
- **Body Font:** Arial, Helvetica, sans-serif (email-safe fallback for Inter)
- **H1:** 28px / 120% line-height
- **H2:** 22px / 130% line-height
- **Body:** 16px / 160% line-height
- **Small:** 14px / 150% line-height

#### Spacing
- **Container Width:** 600px maximum
- **Padding:** 20px horizontal (16px on mobile)
- **Section Gap:** 32px
- **Block Gap:** 20px
- **Element Gap:** 12px

#### Buttons
- **Min Height:** 48px
- **Padding:** 14-16px vertical, 32-48px horizontal
- **Border Radius:** 8px
- **Rendering:** Table-based for maximum compatibility
- **Font:** Arial, sans-serif, 14-16px, bold

#### Colors (Email-Safe)
- **Background:** #F9F6F0
- **Container:** #FFFFFF
- **Primary Text:** #1A1A1A
- **Secondary:** #5E6458
- **Accent:** #AAB5B2
- **CTA Background:** #1A1A1A or #D9C4BB

### Email Components Included

1. **Email Header**
   - Preheader text (hidden but visible in inbox preview)
   - Logo (HØLY™ ø icon + wordmark)
   - Hero image (600x300px recommended)

2. **Body Blocks**
   - Image + Text (single column)
   - Text + Image (reversed)
   - Full-width content blocks

3. **CTA Buttons**
   - Primary (Temple Black background, white text)
   - Secondary (Veil Clay background, black text, 2px border)
   - Text Link (underlined, minimal)

4. **Promo Banners**
   - Full-width promotional announcements
   - Dark background variant (Temple Black)
   - Minimal variant (Limestone Oat with border)

5. **Social Footer**
   - Social media icon links
   - Contact information
   - Legal disclaimer/unsubscribe links
   - Brand mark

### Email-Specific Rules

#### Inline Styles Required
All CSS must be inline. No external stylesheets or `<style>` tags in `<head>` for maximum compatibility.

```html
<a href="#" style="display: inline-block; padding: 16px 48px; background-color: #1A1A1A; color: #F9F6F0; font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 8px;">
  Begin Your Ritual
</a>
```

#### Table-Based Layouts
Use table-based layouts for complex structures (especially buttons and multi-column layouts).

```html
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
  <tr>
    <td style="padding: 20px;">
      <!-- Content -->
    </td>
  </tr>
</table>
```

#### Responsive Email (Media Queries)
```css
@media only screen and (max-width: 600px) {
  .container { width: 100% !important; }
  .mobile-padding { padding: 16px !important; }
  .mobile-full-width { width: 100% !important; }
  .mobile-stack { display: block !important; }
}
```

#### Image Best Practices
- Host all images on CDN
- Include alt text for accessibility
- Max 1MB per image
- Use web-optimized formats (JPG, PNG)
- Provide fallback background colors

#### Accessibility
- WCAG AA contrast ratios minimum
- Alt text on all images
- Semantic HTML structure
- Logical reading order
- Text-based links (not image-only CTAs)

---

## Mobile App Components (iOS/Android)

### Platform Support
- **iOS:** Native (Swift/SwiftUI) or React Native
- **Android:** Native (Kotlin/Jetpack Compose) or React Native

### Mobile Design Tokens

#### Typography
- **Display:** Garamond, serif
- **UI/Body:** Inter, sans-serif
- **H1:** 28px / 120%
- **H2:** 22px / 130%
- **H3:** 18px / 140%
- **Body:** 16px / 160%
- **Small:** 14px / 150%
- **Caption:** 12px / 140%

#### Touch Targets
- **Minimum:** 48px × 48px (Apple/Android HIG)
- **Primary Button:** 48px height, full-width preferred
- **Icon Button:** 48px × 48px
- **Tab Bar Item:** 56px height
- **List Item:** 56px minimum height
- **FAB (Floating Action Button):** 56px × 56px

#### Spacing
- **Screen Padding:** 16px
- **Section Gap:** 24px
- **Card Gap:** 12px
- **Element Gap:** 8px
- **Safe Area:** iOS top/bottom insets respected
- **Bottom Navigation:** 80px reserved (56px + safe area)

### Mobile Components Included

1. **Bottom Navigation**
   - 4-5 tab items
   - 56px height
   - Active/inactive states
   - Icon + label (11px caption)

2. **Mobile Headers**
   - Standard header with back button
   - Header with action button (cart, search)
   - Branded header (home screen)
   - 56px height standard

3. **Mobile Product Card**
   - Touch-optimized layout
   - 1:1 aspect ratio image
   - Quick actions (heart/favorite)
   - Full-width CTA button

4. **Full-Screen Modal**
   - Header with back/close
   - Scrollable content area
   - Footer with primary action
   - iOS/Android safe area insets

5. **Floating Action Button (FAB)**
   - 56px × 56px circular
   - Cart variant with badge count
   - Ritual variant (custom icon)
   - Shadow for elevation

6. **Touch States**
   - Default
   - Pressed (70% opacity)
   - Disabled (grayed out)
   - Card press (background shift + border)

### Mobile-Specific Rules

#### Touch Targets
All interactive elements must meet 48px × 48px minimum for accessibility. Primary actions should be 56px for comfortable thumb reach.

#### Touch Feedback
- **Buttons:** 70% opacity on press, 150ms transition
- **Cards:** Background color shift + border change
- **Icons:** Scale to 0.95 on press for tactile feedback
- **Haptics:** Use light haptic feedback for confirmations

#### Safe Areas (iOS)
```swift
// SwiftUI example
.safeAreaInset(edge: .bottom) {
  BottomTabBar()
}
```

Account for:
- **Top Inset:** 44px (notch) + status bar
- **Bottom Inset:** 34px (home indicator)
- **Side Insets:** Safe area margins
- **Dynamic Island:** Top spacing considerations

#### Safe Areas (Android)
- **Status Bar:** 24dp standard height
- **Navigation Bar:** 48dp (3-button) or 32dp (gesture)
- **Material Design:** 8dp grid system
- **Gestures:** Support swipe-back navigation

#### Performance
- Lazy load images and lists
- Keep animations under 200ms for responsive feel
- Use native components when possible
- Optimize for 60fps scrolling

#### Accessibility
- Touch target minimums enforced
- Dynamic type support
- VoiceOver/TalkBack labels
- High contrast mode support

---

## Sacred Language Across All Channels

Maintain HØLY's ritual-luxury language across web, email, and mobile:

| Generic Commerce | HØLY™ Sacred Language |
|-----------------|----------------------|
| "Add to Cart" | "Begin Your Ritual" |
| "Buy Now" | "Begin Your Journey" |
| "Product" | "Ritual" |
| "Shop" | "Explore Rituals" |
| "Checkout" | "Complete Your Ritual" |
| "Subscribe" | "Join the Ritual" |
| "My Account" | "Your Sacred Space" |
| "Order Confirmation" | "Ritual Confirmed" |

---

## Token Philosophy Across Channels

### Core Tokens (Shared)
All channels share the same **core tokens**:
- Colors (v2.0 palette)
- Spacing scale (8px, 12px, 16px, 24px, 32px, 48px)
- Border radius (8px, 16px, 24px, 999px)
- Effects (shadows, glows)

### Channel-Specific Overrides

#### Email
- **Typography:** Georgia/Arial instead of Garamond/Inter (email-safe)
- **Rendering:** Table-based layouts, inline styles only
- **Width:** 600px max container

#### Mobile
- **Touch Targets:** 48px minimum (enforced)
- **Spacing:** Same scale but applied to mobile context
- **Safe Areas:** Platform-specific insets

---

## Component Naming Convention

### Email Components
```
HØLY / Email / [ComponentName]
```
Examples:
- `HØLY / Email / Header`
- `HØLY / Email / CTA Button / Primary`
- `HØLY / Email / Promo Banner`
- `HØLY / Email / Footer`

### Mobile Components
```
HØLY / Mobile / [ComponentName]
```
Examples:
- `HØLY / Mobile / Bottom Navigation`
- `HØLY / Mobile / Header / Standard`
- `HØLY / Mobile / Product Card`
- `HØLY / Mobile / FAB / Cart`

---

## Implementation Checklist

### Email
- [ ] All styles are inline (no external CSS)
- [ ] Table-based layout for buttons and complex structures
- [ ] 600px max-width container
- [ ] Email-safe fonts (Georgia, Arial)
- [ ] Images hosted on CDN with alt text
- [ ] Tested on Gmail, Outlook, Apple Mail, mobile clients
- [ ] Media queries for responsive mobile rendering
- [ ] Sacred language maintained

### Mobile
- [ ] All touch targets ≥ 48px × 48px
- [ ] Safe area insets respected (iOS/Android)
- [ ] Touch states implemented (press, disabled)
- [ ] Platform-specific navigation patterns
- [ ] Performance optimized (lazy loading, native components)
- [ ] Accessibility labels for screen readers
- [ ] Sacred language maintained

---

## When to Use Each Channel

### Web/Storefront
- Primary e-commerce experience
- DTC website, Shopify store
- Desktop and responsive mobile web
- Full product browsing, checkout, account management

### Email
- Marketing campaigns
- Transactional emails (order confirmation, shipping)
- Abandoned cart recovery
- Promotional announcements
- Newsletter content

### Mobile App
- Native shopping experience (iOS/Android)
- Personalized rituals and recommendations
- Push notifications for restock/sales
- In-app exclusive content
- Biometric authentication, saved payment methods

---

## File Locations

| Component Type | File Path | Purpose |
|----------------|-----------|---------|
| Email Components | `/pages/EmailComponentsPage.tsx` | All email templates and modules |
| Mobile Components | `/pages/MobileComponentsPage.tsx` | All mobile UI components |
| Email Tokens | `/pages/TokensPage.tsx` (Email section) | Email-specific design tokens |
| Mobile Tokens | `/pages/TokensPage.tsx` (Mobile section) | Mobile-specific design tokens |
| Channel Guidance | `/pages/FileOverviewPage.tsx` | When to use each channel |

---

## Completion Status

**Email Components:** ✅ **COMPLETE**
- [x] Email Header with preheader
- [x] Body Blocks (image + text variants)
- [x] CTA Button variants
- [x] Promo Banners
- [x] Social Footer with legal
- [x] Email tokens documented
- [x] Responsive guidelines
- [x] Implementation notes

**Mobile Components:** ✅ **COMPLETE**
- [x] Bottom Navigation (4-5 tabs)
- [x] Mobile Headers (standard, branded, action)
- [x] Product Card (mobile-optimized)
- [x] Full-Screen Modal
- [x] FAB variants (standard, cart, ritual)
- [x] Touch states
- [x] Mobile tokens documented
- [x] Safe area guidelines
- [x] Implementation notes

---

**Note:** This is a living document. As new email templates or mobile patterns are added, update this guide to maintain system coherence across all channels.
