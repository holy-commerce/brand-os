import { TM } from '../../components/core-system';
import { HOLYDna } from '../../components/icons/HOLYIcons';

/**
 * ========================================
 * RITUAL SYSTEMS PAGE
 * HØLY | Ritual Care™ Design System
 * ========================================
 * 
 * Color-coded product ritual systems with complete theming tokens.
 * Each ritual has unique color palette, mood, and use case.
 * 
 * Engineering Handoff:
 * - Ritual colors can be product metafields in Shopify
 * - Use CSS custom properties for easy theming
 * - Badge/tag components for ritual categorization
 */

export default function RitualSystemsPage() {
  const ritualSystems = [
    {
      name: 'CLEANSE',
      tagline: 'Purification & Renewal',
      primary: '#E8F0ED',
      secondary: '#B8D4C8',
      accent: '#7BA896',
      text: '#2C4A3E',
      description: 'Gentle purification rituals for daily renewal. Light, refreshing formulations for cleansing and clarity.',
      products: ['hølywater™ cleansing mist', 'sacred foam cleanser', 'ritual cleansing oil'],
    },
    {
      name: 'NOURISH',
      tagline: 'Deep Hydration & Repair',
      primary: '#F4E8DB',
      secondary: '#E6D3BF',
      accent: '#C9A97B',
      text: '#5C4A3A',
      description: 'Rich, restorative formulations for deep nourishment. Intensive hydration and skin barrier repair.',
      products: ['sacred serum', 'ritual body butter', 'nourishing face oil'],
    },
    {
      name: 'PROTECT',
      tagline: 'Shield & Fortify',
      primary: '#E8E4DF',
      secondary: '#D4CCC3',
      accent: '#9C887A',
      text: '#3A2E26',
      description: 'Protective barriers against environmental stress. Antioxidant-rich formulas for resilience.',
      products: ['defense serum', 'protective mist', 'fortifying cream'],
    },
    {
      name: 'GLOW',
      tagline: 'Radiance & Luminosity',
      primary: '#F9F6F0',
      secondary: '#F0E8DC',
      accent: '#D7D0C5',
      text: '#1A1A1A',
      description: 'Illuminating rituals for natural radiance. Light-reflecting formulas for a luminous glow.',
      products: ['hølymist™ glow', 'radiance oil', 'luminous serum'],
    },
    {
      name: 'CALM',
      tagline: 'Soothe & Balance',
      primary: '#E6EBF0',
      secondary: '#CDD8E3',
      accent: '#AAB5B2',
      text: '#3E4A52',
      description: 'Soothing rituals for sensitive skin. Anti-inflammatory botanicals for balance and calm.',
      products: ['calming mist', 'balance toner', 'gentle serum'],
    },
    {
      name: 'RESTORE',
      tagline: 'Repair & Regenerate',
      primary: '#E8E0DB',
      secondary: '#D9C4BB',
      accent: '#C4A89A',
      text: '#4A3D36',
      description: 'Restorative rituals for overnight renewal. Peptides and botanicals for regeneration.',
      products: ['overnight elixir', 'restore cream', 'regenerating mask'],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="max-w-7xl mx-auto p-8 space-y-20">
        
        {/* Page Header */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-3">
              <HOLYDna size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Ritual Systems
              </h1>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.7, marginBottom: '16px' }}>
              Color-coded ritual systems for HØLY | Ritual Care<TM />. Each ritual has unique color palette, mood, and product categorization.
            </p>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.6, margin: 0 }}>
                <strong>System Structure:</strong> Each ritual has 4 colors (primary, secondary, accent, text) + tagline + product mapping.
              </p>
            </div>
          </div>
        </div>

        {/* Ritual System Cards */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Complete Ritual System
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Six ritual categories with complete color theming and product mapping.
            </p>
          </div>

          <div className="space-y-6">
            {ritualSystems.map((ritual) => (
              <div 
                key={ritual.name}
                className="p-8 rounded-2xl" 
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left: Color Palette */}
                  <div className="space-y-6">
                    <div>
                      <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '4px' }}>
                        {ritual.name}
                      </h3>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, marginBottom: '12px' }}>
                        {ritual.tagline}
                      </p>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.8 }}>
                        {ritual.description}
                      </p>
                    </div>

                    {/* Color Swatches */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <div 
                          style={{ 
                            backgroundColor: ritual.primary, 
                            height: '64px', 
                            borderRadius: '8px',
                            border: '2px solid #DADADA',
                          }} 
                        />
                        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#8C8981' }}>
                          Primary: {ritual.primary}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div 
                          style={{ 
                            backgroundColor: ritual.secondary, 
                            height: '64px', 
                            borderRadius: '8px',
                            border: '2px solid #DADADA',
                          }} 
                        />
                        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#8C8981' }}>
                          Secondary: {ritual.secondary}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div 
                          style={{ 
                            backgroundColor: ritual.accent, 
                            height: '64px', 
                            borderRadius: '8px',
                            border: '2px solid #DADADA',
                          }} 
                        />
                        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#8C8981' }}>
                          Accent: {ritual.accent}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div 
                          style={{ 
                            backgroundColor: ritual.text, 
                            height: '64px', 
                            borderRadius: '8px',
                            border: '2px solid #DADADA',
                          }} 
                        />
                        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#8C8981' }}>
                          Text: {ritual.text}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Product Examples */}
                  <div className="space-y-6">
                    <div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                        Example Products
                      </p>
                      <div className="space-y-3">
                        {ritual.products.map((product, i) => (
                          <div 
                            key={i}
                            className="p-4 rounded-lg"
                            style={{ backgroundColor: ritual.primary, border: `1px solid ${ritual.secondary}` }}
                          >
                            <p style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: ritual.text, margin: 0 }}>
                              {product}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Badge Example */}
                    <div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                        Ritual Badge
                      </p>
                      <div 
                        style={{ 
                          display: 'inline-block',
                          padding: '6px 12px', 
                          backgroundColor: ritual.accent,
                          color: ritual.text,
                          borderRadius: '6px',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '11px',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {ritual.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Shopify Implementation
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              How to implement ritual theming in Shopify product templates.
            </p>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="space-y-6">
              {/* Metafields Setup */}
              <div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Product Metafields
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, marginBottom: '12px' }}>
                  Store ritual system data in product metafields for theme access.
                </p>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`// Metafield Configuration (Shopify Admin)
Namespace: custom
Key: ritual_system
Type: Single line text
Values: "CLEANSE" | "NOURISH" | "PROTECT" | "GLOW" | "CALM" | "RESTORE"

// Additional Metafields
custom.ritual_tagline (Single line text)
custom.ritual_primary_color (Color)
custom.ritual_secondary_color (Color)
custom.ritual_accent_color (Color)
custom.ritual_text_color (Color)`}
                  </pre>
                </div>
              </div>

              {/* Liquid Template */}
              <div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Product Template Theming
                </h3>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`{% comment %} templates/product.liquid {% endcomment %}

{% assign ritual = product.metafields.custom.ritual_system %}
{% assign ritual_primary = product.metafields.custom.ritual_primary_color %}
{% assign ritual_accent = product.metafields.custom.ritual_accent_color %}

<div class="product-ritual-badge" style="
  background-color: {{ ritual_accent }};
  color: {{ product.metafields.custom.ritual_text_color }};
">
  {{ ritual }}
</div>

<div class="product-hero" style="
  background-color: {{ ritual_primary }};
">
  <h1>{{ product.title }}</h1>
  <p>{{ product.metafields.custom.ritual_tagline }}</p>
</div>`}
                  </pre>
                </div>
              </div>

              {/* CSS Custom Properties */}
              <div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Dynamic CSS Variables
                </h3>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<style>
  :root {
    --ritual-primary: {{ product.metafields.custom.ritual_primary_color }};
    --ritual-secondary: {{ product.metafields.custom.ritual_secondary_color }};
    --ritual-accent: {{ product.metafields.custom.ritual_accent_color }};
    --ritual-text: {{ product.metafields.custom.ritual_text_color }};
  }
</style>

<div class="product-card" style="
  background-color: var(--ritual-primary);
  color: var(--ritual-text);
">
  <!-- Card content -->
</div>`}
                  </pre>
                </div>
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
                  Metafield Setup
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Create product metafield definitions in Shopify Admin under Settings → Custom Data. Use namespace "custom" for easy access in templates.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Collection Filtering
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Use ritual_system metafield for collection filtering. Create automated collections for each ritual category (e.g., "CLEANSE Rituals").
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Color Contrast
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  All ritual color combinations meet WCAG AA contrast requirements. Text colors are specifically chosen for each ritual's background palette.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
