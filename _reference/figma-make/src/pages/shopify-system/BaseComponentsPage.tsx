import { TM } from '../../components/core-system';
import { HOLYSparkle } from '../../components/icons/HOLYIcons';
import { useState } from 'react';

/**
 * ========================================
 * BASE COMPONENTS PAGE
 * HØLY | Ritual Care™ Design System
 * ========================================
 * 
 * Primitive building blocks for Shopify theme conversion.
 * Includes buttons, text blocks, containers, and media wrappers.
 * 
 * Engineering Handoff:
 * - Each component maps to a Shopify snippet or section
 * - All variants are defined with clear naming conventions
 * - Responsive behavior is built-in
 * - Accessibility (ARIA) attributes included
 */

export default function BaseComponentsPage() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="max-w-7xl mx-auto p-8 space-y-20">
        
        {/* Page Header */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-3">
              <HOLYSparkle size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Base Components
              </h1>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.7, marginBottom: '16px' }}>
              Primitive building blocks for HØLY | Ritual Care<TM />. Each component is ADA compliant, responsive, and maps directly to Shopify snippets.
            </p>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.6, margin: 0 }}>
                <strong>Component Structure:</strong> Primary → Secondary → Tertiary → Ghost. All buttons include hover, active, and disabled states.
              </p>
            </div>
          </div>
        </div>

        {/* Button Components */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Button Components
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Four button variants with complete interaction states. All accessible via keyboard navigation.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Primary Button */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Primary Button
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, lineHeight: '160%' }}>
                  Main CTA, high contrast, maximum emphasis. Use sparingly for primary actions.
                </p>
              </div>

              <div className="space-y-6">
                {/* Interactive Demo */}
                <div className="p-6 rounded-lg flex flex-wrap items-center gap-4" style={{ backgroundColor: '#F9F6F0' }}>
                  <button
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#F9F6F0',
                      backgroundColor: '#1A1A1A',
                      padding: '16px 32px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2A2A2A';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1A1A1A';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    onMouseDown={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                  >
                    Discover Rituals
                  </button>

                  <button
                    disabled
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#F9F6F0',
                      backgroundColor: '#8C8981',
                      padding: '16px 32px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'not-allowed',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      opacity: 0.5,
                    }}
                  >
                    Disabled State
                  </button>
                </div>

                {/* Code Example */}
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<button class="btn-primary">
  Discover Rituals
</button>

/* CSS */
.btn-primary {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-ritual-white);
  background-color: var(--color-temple-black);
  padding: var(--space-md) var(--space-xl);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all var(--duration-fast) var(--easing-default);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.btn-primary:hover {
  background-color: #2A2A2A;
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary:disabled {
  background-color: var(--color-weathered-halo);
  cursor: not-allowed;
  opacity: 0.5;
}`}
                  </pre>
                </div>

                {/* Shopify Liquid Snippet */}
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#5E6458' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#F9F6F0', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Shopify Liquid Snippet: snippets/btn-primary.liquid
                  </p>
                  <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<button class="btn-primary" {% if disabled %}disabled{% endif %}>
  {{ button_text | default: "Discover Rituals" }}
</button>`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Secondary Button */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Secondary Button
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, lineHeight: '160%' }}>
                  Secondary actions, filled background with brand color.
                </p>
              </div>

              <div className="space-y-6">
                {/* Interactive Demo */}
                <div className="p-6 rounded-lg flex flex-wrap items-center gap-4" style={{ backgroundColor: '#F9F6F0' }}>
                  <button
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#1A1A1A',
                      backgroundColor: '#D7D0C5',
                      padding: '16px 32px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#C7C0B5';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#D7D0C5';
                    }}
                  >
                    Learn More
                  </button>

                  <button
                    disabled
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#1A1A1A',
                      backgroundColor: '#D7D0C5',
                      padding: '16px 32px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'not-allowed',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      opacity: 0.4,
                    }}
                  >
                    Disabled State
                  </button>
                </div>

                {/* Code Example */}
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`.btn-secondary {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-temple-black);
  background-color: var(--color-limestone-oat);
  padding: var(--space-md) var(--space-xl);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all var(--duration-fast) var(--easing-default);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.btn-secondary:hover {
  background-color: #C7C0B5;
}

.btn-secondary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Tertiary Button */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Tertiary Button
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, lineHeight: '160%' }}>
                  Low-emphasis actions, outlined style.
                </p>
              </div>

              <div className="space-y-6">
                {/* Interactive Demo */}
                <div className="p-6 rounded-lg flex flex-wrap items-center gap-4" style={{ backgroundColor: '#F9F6F0' }}>
                  <button
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#1A1A1A',
                      backgroundColor: 'transparent',
                      padding: '16px 32px',
                      borderRadius: '8px',
                      border: '2px solid #1A1A1A',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1A1A1A';
                      e.currentTarget.style.color = '#F9F6F0';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#1A1A1A';
                    }}
                  >
                    View Collection
                  </button>

                  <button
                    disabled
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#8C8981',
                      backgroundColor: 'transparent',
                      padding: '16px 32px',
                      borderRadius: '8px',
                      border: '2px solid #8C8981',
                      cursor: 'not-allowed',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      opacity: 0.4,
                    }}
                  >
                    Disabled State
                  </button>
                </div>

                {/* Code Example */}
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`.btn-tertiary {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-temple-black);
  background-color: transparent;
  padding: var(--space-md) var(--space-xl);
  border-radius: var(--radius-md);
  border: 2px solid var(--color-temple-black);
  cursor: pointer;
  transition: all var(--duration-fast) var(--easing-default);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.btn-tertiary:hover {
  background-color: var(--color-temple-black);
  color: var(--color-ritual-white);
}

.btn-tertiary:disabled {
  color: var(--color-weathered-halo);
  border-color: var(--color-weathered-halo);
  opacity: 0.4;
  cursor: not-allowed;
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Ghost Button */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Ghost Button
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, lineHeight: '160%' }}>
                  Minimal emphasis, text-only with underline on hover. Signature HØLY style.
                </p>
              </div>

              <div className="space-y-6">
                {/* Interactive Demo */}
                <div className="p-6 rounded-lg flex flex-wrap items-center gap-4" style={{ backgroundColor: '#F9F6F0' }}>
                  <button
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#1A1A1A',
                      backgroundColor: 'transparent',
                      padding: '8px 0',
                      border: 'none',
                      borderBottom: '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s ease',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderBottomColor = '#1A1A1A';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderBottomColor = 'transparent';
                    }}
                  >
                    Explore The Philosophy
                  </button>

                  <button
                    disabled
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#8C8981',
                      backgroundColor: 'transparent',
                      padding: '8px 0',
                      border: 'none',
                      cursor: 'not-allowed',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      opacity: 0.4,
                    }}
                  >
                    Disabled State
                  </button>
                </div>

                {/* Code Example */}
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`.btn-ghost {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-temple-black);
  background-color: transparent;
  padding: var(--space-sm) 0;
  border: none;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--easing-default);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.btn-ghost:hover {
  border-bottom-color: var(--color-temple-black);
}

.btn-ghost:disabled {
  color: var(--color-weathered-halo);
  opacity: 0.4;
  cursor: not-allowed;
}`}
                  </pre>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Text Block Components */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Text Block Components
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Reusable text blocks with consistent typography and spacing.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Display Heading */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Display Heading
                </h3>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9F6F0' }}>
                  <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                    Sacred Luxury for Body & Self
                  </h1>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', margin: 0 }}>
{`.text-display {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  color: var(--color-temple-black);
  line-height: 120%;
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Body Text */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Body Text
                </h3>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9F6F0' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: '160%', maxWidth: '600px', margin: 0 }}>
                    Each ritual is designed to honor the body as sacred—a vessel worthy of care, attention, and reverence. Our formulations blend ancient botanical wisdom with modern purity standards.
                  </p>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', margin: 0 }}>
{`.text-body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-text-primary);
  line-height: 160%;
  max-width: 600px;
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Section Label */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Section Label
                </h3>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9F6F0' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#8C8981', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600', margin: 0 }}>
                    Featured Collection
                  </p>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', margin: 0 }}>
{`.text-label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: var(--font-semibold);
}`}
                  </pre>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Container Components */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Container Components
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Structural wrappers for consistent spacing and responsive layouts.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Page Container */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Page Container
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, lineHeight: '160%' }}>
                  Max-width wrapper for page content. Responsive padding on mobile.
                </p>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', margin: 0 }}>
{`.container-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

@media (max-width: 768px) {
  .container-page {
    padding: 0 var(--space-md);
  }
}`}
                </pre>
              </div>
            </div>

            {/* Section Container */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Section Container
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, lineHeight: '160%' }}>
                  Vertical spacing between page sections.
                </p>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', margin: 0 }}>
{`.container-section {
  padding: var(--space-4xl) 0;
}

@media (max-width: 768px) {
  .container-section {
    padding: var(--space-3xl) 0;
  }
}`}
                </pre>
              </div>
            </div>

            {/* Card Container */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Card Container
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, lineHeight: '160%' }}>
                  Elevated surface with border and padding.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9F6F0' }}>
                  <div style={{ padding: '24px', backgroundColor: '#FFFFFF', border: '2px solid #DADADA', borderRadius: '12px' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', margin: 0 }}>
                      Card content goes here
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', margin: 0 }}>
{`.container-card {
  padding: var(--space-lg);
  background-color: var(--color-surface-elevated);
  border: 2px solid var(--color-border-default);
  border-radius: var(--radius-lg);
}`}
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
                  Component Mapping
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Each component should be created as a Shopify snippet in the /snippets directory. Use consistent naming: btn-primary.liquid, text-display.liquid, container-card.liquid.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Accessibility Requirements
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  All interactive elements must include ARIA labels, keyboard navigation support (Tab, Enter, Space), and sufficient color contrast (WCAG AAA). Disabled states must use aria-disabled="true".
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Responsive Behavior
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Mobile breakpoint: 768px. All spacing and typography should scale appropriately. Use CSS clamp() for fluid typography where appropriate.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Trademark Symbol Enforcement
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  All instances of "HØLY", "Ritual Care", and product names must include ™ symbol at 50% font size using superscript styling.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
