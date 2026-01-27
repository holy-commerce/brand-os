import { TM } from '../../components/core-system';
import { HOLYTag } from '../../components/icons/HOLYIcons';

/**
 * ========================================
 * LABEL SYSTEM PAGE
 * HØLY | Ritual Care™ Design System
 * ========================================
 * 
 * Universal product tagging and metadata labels for Shopify.
 * Microcopy rules, badge styles, and text hierarchy.
 * 
 * Engineering Handoff:
 * - Labels as reusable Liquid snippets
 * - Product tags and metafields for dynamic labeling
 * - Consistent tone, length, and casing rules
 */

export default function LabelSystemPage() {
  const labelTypes = [
    {
      name: 'Ritual System Badge',
      usage: 'Product categorization by ritual type',
      examples: ['CLEANSE', 'NOURISH', 'PROTECT', 'GLOW'],
      style: { bg: '#D7D0C5', text: '#1A1A1A', size: '11px', weight: '600', transform: 'uppercase' },
    },
    {
      name: 'Product Status',
      usage: 'Inventory and availability states',
      examples: ['New Arrival', 'Low Stock', 'Sold Out', 'Coming Soon'],
      style: { bg: '#1A1A1A', text: '#F9F6F0', size: '10px', weight: '600', transform: 'uppercase' },
    },
    {
      name: 'Feature Tag',
      usage: 'Product attributes and benefits',
      examples: ['Vegan', 'Organic', 'Cruelty-Free', 'Refillable'],
      style: { bg: '#F9F6F0', text: '#1A1A1A', size: '10px', weight: '500', transform: 'uppercase', border: '1px solid #DADADA' },
    },
    {
      name: 'Price Label',
      usage: 'Special pricing and value indicators',
      examples: ['Sale', 'Limited Edition', 'Member Price', 'Bundle'],
      style: { bg: '#5E6458', text: '#F9F6F0', size: '10px', weight: '600', transform: 'uppercase' },
    },
  ];

  const microcopyRules = [
    {
      category: 'Button Labels',
      rules: [
        { label: 'Add to Cart', usage: 'Primary product CTA', alternative: 'Add to Bag' },
        { label: 'Discover Rituals', usage: 'Homepage hero CTA', alternative: 'Explore Collection' },
        { label: 'Learn More', usage: 'Secondary information CTA', alternative: 'Read More' },
        { label: 'Find Your Ritual', usage: 'Ritual Finder entry point', alternative: 'Begin Quiz' },
      ],
    },
    {
      category: 'Section Titles',
      rules: [
        { label: 'Featured Collection', usage: 'Homepage product grid', alternative: 'Ritual Essentials' },
        { label: 'The HØLY Difference', usage: 'Brand values section', alternative: 'Our Philosophy' },
        { label: 'Sacred Self-Care', usage: 'Editorial content', alternative: 'Ritual Wisdom' },
      ],
    },
    {
      category: 'Product Metadata',
      rules: [
        { label: 'Key Ingredients', usage: 'PDP ingredient list header', alternative: 'Sacred Botanicals' },
        { label: 'How to Use', usage: 'PDP usage instructions', alternative: 'Ritual Instructions' },
        { label: 'Full Ingredients', usage: 'Complete INCI list', alternative: 'Complete Formula' },
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="max-w-7xl mx-auto p-8 space-y-20">
        
        {/* Page Header */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-3">
              <HOLYTag size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Label System
              </h1>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.7, marginBottom: '16px' }}>
              Universal product tagging and metadata labels for HØLY | Ritual Care<TM />. Includes microcopy rules, badge styles, and text hierarchy.
            </p>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.6, margin: 0 }}>
                <strong>Label Principles:</strong> Clear, concise, consistent. All product/brand names require ™ symbol at 50% font size.
              </p>
            </div>
          </div>
        </div>

        {/* Label Types */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Label Types & Styles
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Four primary label categories with defined styling and usage.
            </p>
          </div>

          <div className="space-y-6">
            {labelTypes.map((labelType) => (
              <div 
                key={labelType.name}
                className="p-8 rounded-2xl" 
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                      {labelType.name}
                    </h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, marginBottom: '16px' }}>
                      {labelType.usage}
                    </p>

                    {/* Style Specs */}
                    <div className="p-4 rounded-lg space-y-2" style={{ backgroundColor: '#F9F6F0' }}>
                      <div className="flex justify-between">
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>Background</span>
                        <code style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A' }}>{labelType.style.bg}</code>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>Text Color</span>
                        <code style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A' }}>{labelType.style.text}</code>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>Font Size</span>
                        <code style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A' }}>{labelType.style.size}</code>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>Font Weight</span>
                        <code style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A' }}>{labelType.style.weight}</code>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>Transform</span>
                        <code style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A' }}>{labelType.style.transform}</code>
                      </div>
                      {labelType.style.border && (
                        <div className="flex justify-between">
                          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>Border</span>
                          <code style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A' }}>{labelType.style.border}</code>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Examples */}
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                      Examples
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {labelType.examples.map((example) => (
                        <span
                          key={example}
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: labelType.style.size,
                            fontWeight: labelType.style.weight,
                            color: labelType.style.text,
                            backgroundColor: labelType.style.bg,
                            padding: '6px 12px',
                            borderRadius: '6px',
                            textTransform: labelType.style.transform as any,
                            letterSpacing: '0.05em',
                            border: labelType.style.border,
                          }}
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Microcopy Rules */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Microcopy Rules
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Standardized text labels for consistency across all touchpoints.
            </p>
          </div>

          <div className="space-y-6">
            {microcopyRules.map((category) => (
              <div 
                key={category.category}
                className="p-8 rounded-2xl" 
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
                  {category.category}
                </h3>
                
                <div className="space-y-3">
                  {category.rules.map((rule, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: '#F9F6F0' }}
                    >
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#8C8981', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                            Primary Label
                          </p>
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                            {rule.label}
                          </p>
                        </div>
                        <div>
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#8C8981', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                            Usage
                          </p>
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                            {rule.usage}
                          </p>
                        </div>
                        <div>
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#8C8981', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                            Alternative
                          </p>
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                            {rule.alternative}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trademark Enforcement */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Trademark Symbol Enforcement
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              All brand and product names must include ™ symbol at 50% font size.
            </p>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
                    Brand Names
                  </p>
                  <div className="space-y-3">
                    {['HØLY', 'Ritual Care', 'YONI', 'STUDIO'].map((brand) => (
                      <div key={brand} className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0' }}>
                        <p style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A' }}>
                          {brand}<TM />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
                    Product Names
                  </p>
                  <div className="space-y-3">
                    {['hølymist', 'hølywater', 'sacred serum', 'ritual body butter'].map((product) => (
                      <div key={product} className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0' }}>
                        <p style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
                          {product}<TM />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#F9F6F0', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
                  CSS Implementation
                </p>
                <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0 }}>
{`.trademark-symbol {
  font-size: 50%;
  vertical-align: super;
  font-family: var(--font-body);
  font-weight: 400;
  margin-left: 2px;
}

/* Usage */
<span class="brand-name">
  HØLY<span class="trademark-symbol">™</span>
</span>`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Shopify Implementation */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Shopify Label Snippets
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Reusable Liquid snippets for product labels and badges.
            </p>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="space-y-6">
              {/* Ritual Badge Snippet */}
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Ritual System Badge
                </p>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`{% comment %} snippets/label-ritual.liquid {% endcomment %}
{% assign ritual = product.metafields.custom.ritual_system %}
{% assign ritual_color = product.metafields.custom.ritual_accent_color %}

{% if ritual != blank %}
  <span class="label-ritual" style="background-color: {{ ritual_color }};">
    {{ ritual }}
  </span>
{% endif %}`}
                  </pre>
                </div>
              </div>

              {/* Product Status Label */}
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Product Status Label
                </p>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`{% comment %} snippets/label-status.liquid {% endcomment %}
{% if product.available == false %}
  <span class="label-status sold-out">Sold Out</span>
{% elsif product.tags contains 'new' %}
  <span class="label-status new">New Arrival</span>
{% elsif product.variants.first.inventory_quantity < 10 %}
  <span class="label-status low-stock">Low Stock</span>
{% endif %}`}
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
                  Label Consistency
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Use Liquid snippets for all labels to ensure consistency. Never hardcode label styles inline—always reference CSS classes or design tokens.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Dynamic Labeling
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Labels should be driven by product tags, metafields, and inventory data. Avoid manual label assignment—use Shopify's automated tagging where possible.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Trademark Automation
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Create a Liquid snippet for trademark enforcement that automatically appends ™ to product and brand names. Use template logic to detect brand terms.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
