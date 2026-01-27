import { TM } from '../../components/core-system';
import { 
  HOLYEye, 
  HOLYSparkle, 
  HOLYCircle, 
  HOLYGem, 
  HOLYSquare, 
  HOLYPackage, 
  HOLYDna, 
  HOLYCamera, 
  HOLYWand, 
  HOLYDocument, 
  HOLYPrinter, 
  HOLYCard, 
  HOLYTag, 
  HOLYCompass, 
  HOLYMapPin, 
  HOLYMessage 
} from '../../components/icons/HOLYIcons';
import { motion } from 'motion/react';

/**
 * ========================================
 * ICONS & MARKS PAGE
 * HØLY | Ritual Care™ Design System
 * ========================================
 * 
 * Lightweight iconography and brand mark system for Shopify.
 * 2D line-art icons only (no 3D emojis except Ritual Finder).
 * 
 * Engineering Handoff:
 * - Export all icons as inline SVG in Liquid snippets
 * - Icons use currentColor for theme flexibility
 * - Standardized sizing: 16px, 20px, 24px, 32px
 * - Stroke width: 1.5px default
 */

export default function IconsMarksPage() {
  const iconSet = [
    { name: 'HOLYEye', component: HOLYEye, usage: 'Vision, viewing, insight' },
    { name: 'HOLYSparkle', component: HOLYSparkle, usage: 'Magic, ritual, highlight' },
    { name: 'HOLYCircle', component: HOLYCircle, usage: 'Wholeness, cycle, unity' },
    { name: 'HOLYGem', component: HOLYGem, usage: 'Value, luxury, token' },
    { name: 'HOLYSquare', component: HOLYSquare, usage: 'Foundation, structure' },
    { name: 'HOLYPackage', component: HOLYPackage, usage: 'Product, container' },
    { name: 'HOLYDna', component: HOLYDna, usage: 'System, formula, essence' },
    { name: 'HOLYCamera', component: HOLYCamera, usage: 'Visual content, media' },
    { name: 'HOLYWand', component: HOLYWand, usage: 'Motion, transformation' },
    { name: 'HOLYDocument', component: HOLYDocument, usage: 'Information, text' },
    { name: 'HOLYPrinter', component: HOLYPrinter, usage: 'Print, production' },
    { name: 'HOLYCard', component: HOLYCard, usage: 'Module, card, surface' },
    { name: 'HOLYTag', component: HOLYTag, usage: 'Label, categorization' },
    { name: 'HOLYCompass', component: HOLYCompass, usage: 'Navigation, direction' },
    { name: 'HOLYMapPin', component: HOLYMapPin, usage: 'Location, placement' },
    { name: 'HOLYMessage', component: HOLYMessage, usage: 'Communication, voice' },
  ];

  const sizes = [
    { label: 'Small', value: 16 },
    { label: 'Medium', value: 24 },
    { label: 'Large', value: 32 },
    { label: 'XLarge', value: 48 },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="max-w-7xl mx-auto p-8 space-y-20">
        
        {/* Page Header */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-3">
              <HOLYEye size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Icons & Marks
              </h1>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.7, marginBottom: '16px' }}>
              2D line-art icon system for HØLY | Ritual Care<TM />. All icons use currentColor and can be themed via CSS.
            </p>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.6, margin: 0 }}>
                <strong>Icon Standards:</strong> 2D line-art only. 3D emojis are ONLY allowed in Ritual Finder. Stroke width: 1.5px. Export as inline SVG for Shopify.
              </p>
            </div>
          </div>
        </div>

        {/* Primary Logo Marks */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Primary Logo Marks
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Core brand marks with pulsing Ø animation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Logotype */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  HØLY Logotype
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, lineHeight: '160%' }}>
                  Full wordmark with pulsing Ø animation
                </p>
              </div>

              <div className="p-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F9F6F0', minHeight: '160px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <span style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', lineHeight: '100%' }}>H</span>
                  <motion.span
                    style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', lineHeight: '100%', display: 'inline-block' }}
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.03, 0.95] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    Ø
                  </motion.span>
                  <span style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', lineHeight: '100%' }}>LY</span>
                  <span style={{ fontSize: '24px', lineHeight: '100%', opacity: 0.5, marginLeft: '4px' }}>™</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#F9F6F0', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Liquid Implementation
                </p>
                <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`{% comment %} snippets/logo-holy.liquid {% endcomment %}
<div class="holy-logo">
  <span class="logo-text">H</span>
  <span class="logo-o pulsing">Ø</span>
  <span class="logo-text">LY</span>
  <span class="logo-tm">™</span>
</div>`}
                </pre>
              </div>
            </div>

            {/* Icon Mark */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Ø Icon Mark
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, lineHeight: '160%' }}>
                  Standalone Ø for favicon, app icons, small spaces
                </p>
              </div>

              <div className="p-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F9F6F0', minHeight: '160px' }}>
                <motion.span
                  style={{ fontFamily: 'Garamond, serif', fontSize: '72px', color: '#1A1A1A', lineHeight: '100%', display: 'inline-block' }}
                  animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.03, 0.95] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Ø
                </motion.span>
              </div>

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#F9F6F0', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Usage
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0, opacity: 0.8 }}>
                  Use for: Favicon (32×32), App Icons (512×512), Social avatars, Loading states
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UI Icon Set */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              UI Icon Set
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Complete set of 2D line-art icons for navigation, actions, and states.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {iconSet.map((icon) => {
              const IconComponent = icon.component;
              return (
                <div 
                  key={icon.name}
                  className="p-6 rounded-xl" 
                  style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', textAlign: 'center' }}
                >
                  <div className="flex items-center justify-center mb-4" style={{ minHeight: '48px' }}>
                    <IconComponent size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '4px' }}>
                    {icon.name}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#1A1A1A', opacity: 0.6, lineHeight: '140%' }}>
                    {icon.usage}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Icon Sizing System */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Icon Sizing System
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Standardized icon sizes across all UI contexts.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {sizes.map((size) => (
              <div 
                key={size.value}
                className="p-6 rounded-xl" 
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <div className="mb-4">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '2px' }}>
                    {size.label}
                  </p>
                  <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#8C8981' }}>
                    {size.value}px
                  </p>
                </div>
                <div className="flex items-center justify-center p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0' }}>
                  <HOLYSparkle size={size.value} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SVG Export Code */}
        <section className="space-y-6">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              SVG Export Templates
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Shopify Liquid snippet templates for inline SVG icons.
            </p>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="space-y-6">
              {/* SVG Template */}
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#F9F6F0', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Generic Icon Snippet Template
                </p>
                <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`{% comment %} snippets/icon.liquid {% endcomment %}
{% assign size = size | default: 24 %}
{% assign color = color | default: 'currentColor' %}
{% assign stroke = stroke | default: 1.5 %}

<svg 
  width="{{ size }}" 
  height="{{ size }}" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="{{ color }}" 
  stroke-width="{{ stroke }}"
  stroke-linecap="round" 
  stroke-linejoin="round"
  class="holy-icon holy-icon-{{ icon_name }}"
>
  {% case icon_name %}
    {% when 'sparkle' %}
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"/>
    {% when 'eye' %}
      <circle cx="12" cy="12" r="3"/>
      <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"/>
    {% else %}
      <!-- Default icon -->
  {% endcase %}
</svg>`}
                </pre>
              </div>

              {/* Usage Example */}
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#5E6458' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#F9F6F0', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Usage in Liquid Templates
                </p>
                <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<!-- Default size (24px) -->
{% render 'icon', icon_name: 'sparkle' %}

<!-- Custom size and color -->
{% render 'icon', icon_name: 'eye', size: 32, color: '#1A1A1A' %}

<!-- With CSS class for dynamic theming -->
<button class="btn-ghost">
  {% render 'icon', icon_name: 'sparkle', size: 16 %}
  Discover Rituals
</button>`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Notes */}
        <section className="space-y-6">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Engineering Handoff Notes
            </h2>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#1A1A1A', border: '2px solid #1A1A1A' }}>
            <div className="space-y-4">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Icon Implementation
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  All icons must be implemented as inline SVG (not icon fonts or img tags). Use Liquid snippets for reusability. Icons inherit color via currentColor for easy theming.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Naming Conventions
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Icon snippets: icon-[name].liquid (e.g., icon-sparkle.liquid). CSS classes: .holy-icon .holy-icon-[name]. Consistent HOLY prefix prevents conflicts.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Accessibility
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Add aria-hidden="true" to decorative icons. For interactive icons, include aria-label or use with visible text labels. Ensure sufficient touch targets (min 44×44px).
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  3D Emoji Restriction
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  3D emojis are ONLY permitted in the Ritual Finder interface. All other components must use 2D line-art HOLY icons to maintain brand consistency.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
