import { TM } from '../../components/core-system';
import { HOLYPackage, HOLYSparkle } from '../../components/icons/HOLYIcons';

/**
 * ========================================
 * UI COMPONENTS PAGE
 * HØLY | Ritual Care™ Design System
 * ========================================
 * 
 * Composable, higher-level UI components for Shopify.
 * Includes hero modules, feature grids, cards, content blocks, CTA bands.
 * 
 * Engineering Handoff:
 * - Each component maps to a Shopify section
 * - Schema.json configuration for theme customizer
 * - Responsive by default
 */

export default function UIComponentsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="max-w-7xl mx-auto p-8 space-y-20">
        
        {/* Page Header */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-3">
              <HOLYPackage size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                UI Components
              </h1>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.7, marginBottom: '16px' }}>
              Composable UI components for HØLY | Ritual Care<TM />. Each component is a Shopify section with theme editor controls.
            </p>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.6, margin: 0 }}>
                <strong>Component Structure:</strong> Hero → Feature Grid → Cards → Content Blocks → CTA Bands. All responsive.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Module */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Hero Module
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Full-width hero with gradient background, headline, subtext, and CTA.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
            <div 
              className="p-16 flex flex-col items-center justify-center gap-6"
              style={{ 
                background: 'linear-gradient(135deg, #D9C4BB 0%, #AAB5B2 100%)',
                minHeight: '500px',
              }}
            >
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '64px', color: '#1A1A1A', lineHeight: '110%', textAlign: 'center', maxWidth: '800px', margin: 0 }}>
                Sacred Luxury for Body & Self
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', opacity: 0.8, textAlign: 'center', maxWidth: '600px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Ritualized care for the modern mystic
              </p>
              <button style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '500',
                color: '#F9F6F0',
                backgroundColor: '#1A1A1A',
                padding: '16px 32px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '16px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}>
                Discover Rituals
              </button>
            </div>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
              Shopify Section: sections/hero.liquid
            </p>
            <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<div class="hero-module" style="
  background: linear-gradient(135deg, 
    {{ section.settings.color_start }}, 
    {{ section.settings.color_end }}
  );
  padding: {{ section.settings.padding_vertical }}px 
           {{ section.settings.padding_horizontal }}px;
">
  <h1 class="hero-title">{{ section.settings.heading }}</h1>
  <p class="hero-subtitle">{{ section.settings.subtext }}</p>
  {% if section.settings.button_text != blank %}
    <a href="{{ section.settings.button_link }}" class="btn-primary">
      {{ section.settings.button_text }}
    </a>
  {% endif %}
</div>

{% schema %}
{
  "name": "Hero",
  "settings": [
    { "type": "text", "id": "heading", "label": "Heading" },
    { "type": "text", "id": "subtext", "label": "Subtext" },
    { "type": "color", "id": "color_start", "label": "Gradient Start" },
    { "type": "color", "id": "color_end", "label": "Gradient End" },
    { "type": "text", "id": "button_text", "label": "Button Text" },
    { "type": "url", "id": "button_link", "label": "Button Link" }
  ]
}
{% endschema %}`}
            </pre>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Feature Grid
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              3-column feature grid with icons, titles, and descriptions.
            </p>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Botanical Purity', description: 'Ancient wisdom meets modern clean standards' },
                { title: 'Ritual Design', description: 'Every element crafted for intentional care' },
                { title: 'Sacred Self', description: 'Honor the body as a vessel of reverence' },
              ].map((feature, i) => (
                <div key={i} className="text-center space-y-4">
                  <div className="flex items-center justify-center mb-4">
                    <HOLYSparkle size={32} color="#1A1A1A" opacity={0.6} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', lineHeight: '120%' }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
              Shopify Section: sections/feature-grid.liquid
            </p>
            <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<div class="feature-grid">
  {% for block in section.blocks %}
    <div class="feature-item">
      {% render 'icon', icon_name: block.settings.icon %}
      <h3>{{ block.settings.title }}</h3>
      <p>{{ block.settings.description }}</p>
    </div>
  {% endfor %}
</div>

{% schema %}
{
  "name": "Feature Grid",
  "max_blocks": 6,
  "blocks": [
    {
      "type": "feature",
      "name": "Feature",
      "settings": [
        { "type": "select", "id": "icon", "label": "Icon" },
        { "type": "text", "id": "title", "label": "Title" },
        { "type": "textarea", "id": "description", "label": "Description" }
      ]
    }
  ]
}
{% endschema %}`}
            </pre>
          </div>
        </section>

        {/* Product Card */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Product Card
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Elevated product card with image, title, price, and quick add.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
                <div style={{ backgroundColor: '#D7D0C5', aspectRatio: '3/4' }} />
                <div className="p-6 space-y-3">
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#8C8981', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '4px' }}>
                      Ritual Collection
                    </p>
                    <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
                      hølymist<TM />
                    </h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '140%' }}>
                      Sacred body mist
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
                      $48.00
                    </p>
                    <button style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      fontWeight: '500',
                      color: '#1A1A1A',
                      backgroundColor: '#D7D0C5',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                    }}>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
              Shopify Snippet: snippets/product-card.liquid
            </p>
            <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<div class="product-card">
  <div class="product-card__image">
    {{ product.featured_image | image_url: width: 600 | image_tag }}
  </div>
  <div class="product-card__content">
    <p class="product-card__collection">{{ product.metafields.custom.collection_name }}</p>
    <h3 class="product-card__title">{{ product.title }}</h3>
    <p class="product-card__description">{{ product.metafields.custom.tagline }}</p>
    <div class="product-card__footer">
      <p class="product-card__price">{{ product.price | money }}</p>
      <button class="btn-secondary btn-sm">Add</button>
    </div>
  </div>
</div>`}
            </pre>
          </div>
        </section>

        {/* Content Block */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Content Block
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Two-column image + text content block with responsive stacking.
            </p>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div style={{ backgroundColor: '#D7D0C5', aspectRatio: '4/3', borderRadius: '12px' }} />
              <div className="space-y-6">
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#8C8981', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '8px' }}>
                    Our Philosophy
                  </p>
                  <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '16px' }}>
                    The Body as Sacred
                  </h2>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%', marginBottom: '16px' }}>
                    Each ritual is designed to honor the body as sacred—a vessel worthy of care, attention, and reverence. Our formulations blend ancient botanical wisdom with modern purity standards.
                  </p>
                </div>
                <button style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#1A1A1A',
                  backgroundColor: 'transparent',
                  padding: '8px 0',
                  border: 'none',
                  borderBottom: '1px solid transparent',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}>
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
              Shopify Section: sections/content-block.liquid
            </p>
            <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<div class="content-block {% if section.settings.image_position == 'right' %}reverse{% endif %}">
  <div class="content-block__image">
    {{ section.settings.image | image_url: width: 800 | image_tag }}
  </div>
  <div class="content-block__content">
    <p class="text-label">{{ section.settings.eyebrow }}</p>
    <h2 class="text-display">{{ section.settings.heading }}</h2>
    <p class="text-body">{{ section.settings.body_text }}</p>
    {% if section.settings.button_text != blank %}
      <a href="{{ section.settings.button_link }}" class="btn-ghost">
        {{ section.settings.button_text }}
      </a>
    {% endif %}
  </div>
</div>`}
            </pre>
          </div>
        </section>

        {/* CTA Band */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              CTA Band
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Full-width call-to-action band with centered text and button.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
            <div 
              className="p-12 flex flex-col items-center justify-center gap-6"
              style={{ backgroundColor: '#1A1A1A' }}
            >
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '40px', color: '#F9F6F0', lineHeight: '120%', textAlign: 'center', maxWidth: '600px', margin: 0 }}>
                Begin Your Ritual
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#F9F6F0', opacity: 0.8, textAlign: 'center', maxWidth: '500px' }}>
                Discover which ritual system aligns with your needs
              </p>
              <button style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '500',
                color: '#1A1A1A',
                backgroundColor: '#D7D0C5',
                padding: '16px 32px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '8px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}>
                Find Your Ritual
              </button>
            </div>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
              Shopify Section: sections/cta-band.liquid
            </p>
            <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<div class="cta-band" style="background-color: {{ section.settings.bg_color }};">
  <h2 class="cta-band__heading">{{ section.settings.heading }}</h2>
  <p class="cta-band__text">{{ section.settings.subtext }}</p>
  {% if section.settings.button_text != blank %}
    <a href="{{ section.settings.button_link }}" class="btn-secondary">
      {{ section.settings.button_text }}
    </a>
  {% endif %}
</div>`}
            </pre>
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
                  Section Configuration
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Each UI component should be a Shopify section with {'{% schema %}'} for theme customizer. Include settings for text, colors, images, and layout options.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Responsive Design
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Mobile breakpoint: 768px. All grids should stack vertically on mobile. Hero text should scale down. Use Tailwind responsive classes or CSS media queries.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Component Reusability
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Shared patterns (product cards, CTA buttons) should be Liquid snippets. Use {'{% render %}'} to include them. Keep sections focused on layout, snippets on reusable UI.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}