import { TM } from '../../components/core-system';
import { HOLYEye } from '../../components/icons/HOLYIcons';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

/**
 * ========================================
 * TOKENS PAGE
 * HØLY | Ritual Care™ Design System
 * ========================================
 * 
 * Foundational design token system for Shopify theme conversion.
 * Includes color, typography, spacing, radius, elevation, and motion tokens.
 * 
 * Engineering Handoff:
 * - Export as CSS variables in theme.liquid
 * - Map to Shopify theme settings for brand customization
 * - Distinguish between brand-overridable and system-fixed tokens
 */

export default function TokensPage() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopy = (value: string, name: string) => {
    navigator.clipboard.writeText(value);
    setCopiedToken(name);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  // Color tokens
  const colorTokens = {
    semantic: [
      { name: '--color-temple-black', value: '#1A1A1A', usage: 'Primary text, headers, dark backgrounds', overridable: false },
      { name: '--color-ritual-white', value: '#F9F6F0', usage: 'Page backgrounds, light surfaces', overridable: false },
      { name: '--color-fogstone-blue', value: '#AAB5B2', usage: 'Secondary surfaces, muted accents', overridable: true },
      { name: '--color-veil-clay', value: '#D9C4BB', usage: 'Warm accents, hero backgrounds', overridable: true },
      { name: '--color-relic-green', value: '#5E6458', usage: 'Tertiary accents, subtle borders', overridable: true },
      { name: '--color-limestone-oat', value: '#D7D0C5', usage: 'Pulsing Ø animation, soft highlights', overridable: true },
      { name: '--color-smoky-umber', value: '#9C887A', usage: 'Rich backgrounds (white text required)', overridable: true },
      { name: '--color-weathered-halo', value: '#8C8981', usage: 'Muted text, disabled states', overridable: true },
    ],
    functional: [
      { name: '--color-text-primary', value: '#1A1A1A', usage: 'Body text on light backgrounds', overridable: false },
      { name: '--color-text-inverse', value: '#F9F6F0', usage: 'Text on dark backgrounds (Temple Black, Smoky Umber)', overridable: false },
      { name: '--color-text-muted', value: '#8C8981', usage: 'Secondary text, captions', overridable: false },
      { name: '--color-border-default', value: '#DADADA', usage: 'Standard borders, dividers', overridable: false },
      { name: '--color-surface-elevated', value: '#FFFFFF', usage: 'Cards, elevated containers', overridable: false },
    ],
  };

  // Typography tokens
  const typographyTokens = {
    families: [
      { name: '--font-display', value: 'Garamond, serif', usage: 'Headlines, HØLY logotype, display text' },
      { name: '--font-body', value: 'Inter, sans-serif', usage: 'Body text, UI elements, labels' },
    ],
    sizes: [
      { name: '--text-xs', value: '12px', lineHeight: '16px', usage: 'Legal text, microcopy' },
      { name: '--text-sm', value: '14px', lineHeight: '20px', usage: 'Small body text, labels' },
      { name: '--text-base', value: '16px', lineHeight: '24px', usage: 'Default body text' },
      { name: '--text-lg', value: '18px', lineHeight: '28px', usage: 'Large body text, intro paragraphs' },
      { name: '--text-xl', value: '20px', lineHeight: '28px', usage: 'Subheadings' },
      { name: '--text-2xl', value: '24px', lineHeight: '32px', usage: 'Section titles' },
      { name: '--text-3xl', value: '32px', lineHeight: '40px', usage: 'Page titles' },
      { name: '--text-4xl', value: '48px', lineHeight: '56px', usage: 'Hero headlines' },
      { name: '--text-5xl', value: '64px', lineHeight: '72px', usage: 'Display headlines' },
      { name: '--text-6xl', value: '96px', lineHeight: '104px', usage: 'Landing hero, maximum impact' },
    ],
    weights: [
      { name: '--font-light', value: '300', usage: 'Display text, elegant headlines' },
      { name: '--font-regular', value: '400', usage: 'Body text' },
      { name: '--font-medium', value: '500', usage: 'Emphasis, button labels' },
      { name: '--font-semibold', value: '600', usage: 'Strong emphasis, navigation' },
    ],
  };

  // Spacing tokens
  const spacingTokens = [
    { name: '--space-xs', value: '4px', usage: 'Tight icon gaps, trademark spacing' },
    { name: '--space-sm', value: '8px', usage: 'Small gaps, compact layouts' },
    { name: '--space-md', value: '16px', usage: 'Default component spacing' },
    { name: '--space-lg', value: '24px', usage: 'Section spacing, card padding' },
    { name: '--space-xl', value: '32px', usage: 'Large section gaps' },
    { name: '--space-2xl', value: '48px', usage: 'Major section dividers' },
    { name: '--space-3xl', value: '64px', usage: 'Page sections' },
    { name: '--space-4xl', value: '96px', usage: 'Hero padding, maximum breathing room' },
  ];

  // Radius tokens
  const radiusTokens = [
    { name: '--radius-sm', value: '4px', usage: 'Small elements, tags' },
    { name: '--radius-md', value: '8px', usage: 'Buttons, inputs, cards' },
    { name: '--radius-lg', value: '12px', usage: 'Large cards, modals' },
    { name: '--radius-xl', value: '16px', usage: 'Hero containers, feature blocks' },
    { name: '--radius-2xl', value: '24px', usage: 'Maximum luxury rounding' },
    { name: '--radius-full', value: '9999px', usage: 'Pills, circular elements' },
  ];

  // Elevation tokens
  const elevationTokens = [
    { name: '--shadow-xs', value: '0 1px 2px rgba(26, 26, 26, 0.05)', usage: 'Subtle lift, borders' },
    { name: '--shadow-sm', value: '0 1px 3px rgba(26, 26, 26, 0.08)', usage: 'Cards, dropdowns' },
    { name: '--shadow-md', value: '0 4px 8px rgba(26, 26, 26, 0.1)', usage: 'Elevated cards, navigation' },
    { name: '--shadow-lg', value: '0 8px 16px rgba(26, 26, 26, 0.12)', usage: 'Modals, popovers' },
    { name: '--shadow-xl', value: '0 12px 24px rgba(26, 26, 26, 0.15)', usage: 'Maximum elevation' },
  ];

  // Motion tokens
  const motionTokens = [
    { name: '--duration-instant', value: '100ms', usage: 'Micro-interactions, hovers' },
    { name: '--duration-fast', value: '200ms', usage: 'Button states, toggles' },
    { name: '--duration-base', value: '300ms', usage: 'Default transitions' },
    { name: '--duration-slow', value: '500ms', usage: 'Page transitions, reveals' },
    { name: '--duration-ritual', value: '3000ms', usage: 'Pulsing Ø, ambient animations' },
    { name: '--easing-default', value: 'ease-in-out', usage: 'Standard transitions' },
    { name: '--easing-enter', value: 'cubic-bezier(0.4, 0, 0.2, 1)', usage: 'Enter animations' },
    { name: '--easing-exit', value: 'cubic-bezier(0.4, 0, 1, 1)', usage: 'Exit animations' },
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
                Design Tokens
              </h1>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.7, marginBottom: '16px' }}>
              Foundational design token system for HØLY | Ritual Care<TM />. All tokens are exportable as CSS variables or Shopify theme settings.
            </p>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.6, margin: 0 }}>
                <strong>Engineering Handoff:</strong> Brand-overridable tokens can be exposed in Shopify theme settings. System-fixed tokens ensure ADA/WCAG AAA compliance and should remain locked.
              </p>
            </div>
          </div>
        </div>

        {/* Color Tokens */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Color Tokens
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Semantic and functional color system. All text on Smoky Umber and Temple Black must use white for WCAG AAA compliance.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
                Semantic Colors
              </h3>
              <div className="space-y-2">
                {colorTokens.semantic.map((token) => (
                  <div 
                    key={token.name}
                    className="p-4 rounded-lg flex items-center gap-4"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
                  >
                    <div 
                      style={{ 
                        width: '64px', 
                        height: '64px', 
                        backgroundColor: token.value,
                        borderRadius: '8px',
                        border: '1px solid #DADADA',
                        flexShrink: 0,
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <code style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                          {token.name}
                        </code>
                        {token.overridable && (
                          <span style={{ 
                            fontFamily: 'Inter, sans-serif', 
                            fontSize: '10px', 
                            color: '#5E6458', 
                            backgroundColor: '#D7D0C5',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            textTransform: 'uppercase',
                            fontWeight: '600',
                          }}>
                            Brand Override
                          </span>
                        )}
                      </div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, marginBottom: '4px' }}>
                        {token.usage}
                      </p>
                      <code style={{ fontFamily: 'monospace', fontSize: '12px', color: '#8C8981' }}>
                        {token.value}
                      </code>
                    </div>
                    <button
                      onClick={() => handleCopy(token.value, token.name)}
                      style={{
                        padding: '8px',
                        borderRadius: '6px',
                        border: '1px solid #DADADA',
                        backgroundColor: copiedToken === token.name ? '#D7D0C5' : '#F9F6F0',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {copiedToken === token.name ? <Check size={16} color="#5E6458" /> : <Copy size={16} color="#1A1A1A" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
                Functional Colors
              </h3>
              <div className="space-y-2">
                {colorTokens.functional.map((token) => (
                  <div 
                    key={token.name}
                    className="p-4 rounded-lg flex items-center gap-4"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
                  >
                    <div 
                      style={{ 
                        width: '64px', 
                        height: '64px', 
                        backgroundColor: token.value,
                        borderRadius: '8px',
                        border: '1px solid #DADADA',
                        flexShrink: 0,
                      }}
                    />
                    <div className="flex-1">
                      <code style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', fontWeight: '500', display: 'block', marginBottom: '4px' }}>
                        {token.name}
                      </code>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, marginBottom: '4px' }}>
                        {token.usage}
                      </p>
                      <code style={{ fontFamily: 'monospace', fontSize: '12px', color: '#8C8981' }}>
                        {token.value}
                      </code>
                    </div>
                    <button
                      onClick={() => handleCopy(token.value, token.name)}
                      style={{
                        padding: '8px',
                        borderRadius: '6px',
                        border: '1px solid #DADADA',
                        backgroundColor: copiedToken === token.name ? '#D7D0C5' : '#F9F6F0',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {copiedToken === token.name ? <Check size={16} color="#5E6458" /> : <Copy size={16} color="#1A1A1A" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Typography Tokens */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Typography Tokens
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Type scale, font families, and weights. Garamond for display, Inter for body and UI.
            </p>
          </div>

          <div className="space-y-6">
            {/* Font Families */}
            <div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
                Font Families
              </h3>
              <div className="space-y-2">
                {typographyTokens.families.map((token) => (
                  <div 
                    key={token.name}
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <code style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                        {token.name}
                      </code>
                      <button
                        onClick={() => handleCopy(token.value, token.name)}
                        style={{
                          padding: '6px',
                          borderRadius: '6px',
                          border: '1px solid #DADADA',
                          backgroundColor: copiedToken === token.name ? '#D7D0C5' : '#F9F6F0',
                          cursor: 'pointer',
                        }}
                      >
                        {copiedToken === token.name ? <Check size={14} color="#5E6458" /> : <Copy size={14} color="#1A1A1A" />}
                      </button>
                    </div>
                    <p style={{ fontFamily: token.value, fontSize: '24px', color: '#1A1A1A', marginBottom: '8px' }}>
                      The quick brown fox jumps over the lazy dog
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      {token.usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Type Scale */}
            <div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
                Type Scale
              </h3>
              <div className="space-y-2">
                {typographyTokens.sizes.map((token) => (
                  <div 
                    key={token.name}
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <code style={{ fontFamily: 'monospace', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
                            {token.name}
                          </code>
                          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#8C8981' }}>
                            {token.value} / {token.lineHeight}
                          </span>
                        </div>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: token.value, lineHeight: token.lineHeight, color: '#1A1A1A', marginBottom: '4px' }}>
                          Sample Text
                        </p>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                          {token.usage}
                        </p>
                      </div>
                      <button
                        onClick={() => handleCopy(`${token.value} / ${token.lineHeight}`, token.name)}
                        style={{
                          padding: '6px',
                          borderRadius: '6px',
                          border: '1px solid #DADADA',
                          backgroundColor: copiedToken === token.name ? '#D7D0C5' : '#F9F6F0',
                          cursor: 'pointer',
                        }}
                      >
                        {copiedToken === token.name ? <Check size={14} color="#5E6458" /> : <Copy size={14} color="#1A1A1A" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Font Weights */}
            <div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
                Font Weights
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {typographyTokens.weights.map((token) => (
                  <div 
                    key={token.name}
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <code style={{ fontFamily: 'monospace', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
                        {token.name}
                      </code>
                      <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#8C8981' }}>
                        {token.value}
                      </span>
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: token.value, color: '#1A1A1A', marginBottom: '4px' }}>
                      Sample Text
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                      {token.usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Spacing Tokens */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Spacing Tokens
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              8px-based spacing scale for consistent rhythm and Auto Layout principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {spacingTokens.map((token) => (
              <div 
                key={token.name}
                className="p-4 rounded-lg"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <code style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                    {token.name}
                  </code>
                  <span style={{ fontFamily: 'monospace', fontSize: '12px', color: '#8C8981' }}>
                    {token.value}
                  </span>
                </div>
                <div 
                  style={{ 
                    height: '32px',
                    backgroundColor: '#D7D0C5',
                    borderRadius: '4px',
                    marginBottom: '8px',
                    position: 'relative',
                  }}
                >
                  <div 
                    style={{ 
                      position: 'absolute',
                      left: '0',
                      top: '0',
                      bottom: '0',
                      width: token.value,
                      backgroundColor: '#5E6458',
                      borderRadius: '4px',
                    }}
                  />
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                  {token.usage}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Radius Tokens */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Radius Tokens
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Border radius scale for component rounding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {radiusTokens.map((token) => (
              <div 
                key={token.name}
                className="p-4 rounded-lg"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <code style={{ fontFamily: 'monospace', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
                    {token.name}
                  </code>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#8C8981' }}>
                    {token.value}
                  </span>
                </div>
                <div 
                  style={{ 
                    width: '100%',
                    height: '64px',
                    backgroundColor: '#D7D0C5',
                    borderRadius: token.value,
                    marginBottom: '8px',
                  }}
                />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                  {token.usage}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Elevation Tokens */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Elevation Tokens
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Shadow system for depth and hierarchy.
            </p>
          </div>

          <div className="space-y-4">
            {elevationTokens.map((token) => (
              <div 
                key={token.name}
                className="p-6 rounded-lg"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
              >
                <div className="flex items-start gap-6">
                  <div 
                    style={{ 
                      width: '120px',
                      height: '80px',
                      backgroundColor: '#F9F6F0',
                      borderRadius: '8px',
                      boxShadow: token.value,
                      flexShrink: 0,
                    }}
                  />
                  <div className="flex-1">
                    <code style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', fontWeight: '500', display: 'block', marginBottom: '4px' }}>
                      {token.name}
                    </code>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, marginBottom: '6px' }}>
                      {token.usage}
                    </p>
                    <code style={{ fontFamily: 'monospace', fontSize: '11px', color: '#8C8981' }}>
                      {token.value}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Motion Tokens */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Motion Tokens
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Timing and easing functions for animation consistency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {motionTokens.map((token) => (
              <div 
                key={token.name}
                className="p-4 rounded-lg"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <code style={{ fontFamily: 'monospace', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
                    {token.name}
                  </code>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#8C8981' }}>
                    {token.value}
                  </span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                  {token.usage}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CSS Export */}
        <section className="space-y-6">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              CSS Variable Export
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Complete token system as CSS custom properties. Add to theme.liquid or global stylesheet.
            </p>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: '#1A1A1A', border: '2px solid #1A1A1A' }}>
            <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: '#F9F6F0', lineHeight: '180%', margin: 0, overflow: 'auto' }}>
{`:root {
  /* Colors — Semantic */
  --color-temple-black: #1A1A1A;
  --color-ritual-white: #F9F6F0;
  --color-fogstone-blue: #AAB5B2;
  --color-veil-clay: #D9C4BB;
  --color-relic-green: #5E6458;
  --color-limestone-oat: #D7D0C5;
  --color-smoky-umber: #9C887A;
  --color-weathered-halo: #8C8981;
  
  /* Colors — Functional */
  --color-text-primary: #1A1A1A;
  --color-text-inverse: #F9F6F0;
  --color-text-muted: #8C8981;
  --color-border-default: #DADADA;
  --color-surface-elevated: #FFFFFF;
  
  /* Typography — Families */
  --font-display: Garamond, serif;
  --font-body: Inter, sans-serif;
  
  /* Typography — Sizes */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 32px;
  --text-4xl: 48px;
  --text-5xl: 64px;
  --text-6xl: 96px;
  
  /* Typography — Weights */
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  
  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
  
  /* Elevation */
  --shadow-xs: 0 1px 2px rgba(26, 26, 26, 0.05);
  --shadow-sm: 0 1px 3px rgba(26, 26, 26, 0.08);
  --shadow-md: 0 4px 8px rgba(26, 26, 26, 0.1);
  --shadow-lg: 0 8px 16px rgba(26, 26, 26, 0.12);
  --shadow-xl: 0 12px 24px rgba(26, 26, 26, 0.15);
  
  /* Motion */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
  --duration-ritual: 3000ms;
  --easing-default: ease-in-out;
  --easing-enter: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-exit: cubic-bezier(0.4, 0, 1, 1);
}`}
            </pre>
          </div>
        </section>

      </div>
    </div>
  );
}
