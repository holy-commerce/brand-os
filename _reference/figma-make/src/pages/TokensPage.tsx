import { HOLYGem, HOLYWarning, HOLYTarget, HOLYPalette, HOLYDocument, HOLYGrid, HOLYSparkle, HOLYSquare } from '../components/icons/HOLYIcons';
import { PageQuickNav } from '../components/core-system/PageQuickNav';

export default function TokensPage() {
  const navItems = [
    { id: 'colors-section', label: 'Colors' },
    { id: 'typography-section', label: 'Typography' },
    { id: 'spacing-section', label: 'Spacing' },
    { id: 'effects-section', label: 'Effects' },
    { id: 'radius-section', label: 'Radius' },
  ];

  return (
    <div className="space-y-8">
      
      {/* Page Info */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <HOLYGem size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Tokens — Design System Foundation
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Foundational design tokens only — not components or layouts
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <HOLYWarning size={12} color="#1A1A1A" opacity={0.5} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, margin: 0 }}>
                THIS PAGE INCLUDES
              </p>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
              Colors, Typography, Spacing, Effects, Radius — all as Figma Styles
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <HOLYTarget size={12} color="#1A1A1A" opacity={0.5} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, margin: 0 }}>
                THIS PAGE DOES NOT INCLUDE
              </p>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
              Buttons, inputs, nav, cards, templates, or branding assets
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <PageQuickNav items={navItems} title="Jump to Section" />

      {/* Colors Frame */}
      <div id="colors-section" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
          <div className="flex items-center gap-3 mb-2">
            <HOLYPalette size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Colors — v2.0 Refined Palette
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', marginBottom: '12px' }}>
            Brand color palette integrated with Stackzero Commerce UI structure. WCAG AAA accessible.
          </p>
          <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(156, 136, 122, 0.08)', border: '1px solid rgba(156, 136, 122, 0.2)' }}>
            <div className="flex items-center gap-2 mb-1">
              <HOLYWarning size={13} color="#1A1A1A" />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500', margin: 0 }}>
                Accessibility Rule
              </p>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8, lineHeight: '155%' }}>
              Smoky Umber and Fogstone Blue backgrounds require WHITE text (#F9F6F0) for WCAG AAA compliance. Veil Clay allows black text.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ivory */}
          <div className="space-y-3">
            <div 
              className="w-full h-32 rounded-2xl"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            />
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Color / Background / Ivory
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                #F9F6F0
              </p>
            </div>
          </div>

          {/* Temple Black */}
          <div className="space-y-3">
            <div 
              className="w-full h-32 rounded-2xl"
              style={{ backgroundColor: '#1A1A1A' }}
            />
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Color / Text / Temple Black
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                #1A1A1A
              </p>
            </div>
          </div>

          {/* Veil Clay */}
          <div className="space-y-3">
            <div 
              className="w-full h-32 rounded-2xl"
              style={{ backgroundColor: '#D9C4BB', border: '1px solid #DADADA' }}
            />
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Color / Accent / Veil Clay
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                #D9C4BB
              </p>
            </div>
          </div>

          {/* Fogstone Blue */}
          <div className="space-y-3">
            <div 
              className="w-full h-32 rounded-2xl"
              style={{ backgroundColor: '#AAB5B2', border: '1px solid #DADADA' }}
            />
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Color / Accent / Fogstone Blue
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                #AAB5B2
              </p>
              <div className="mt-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(249, 246, 240, 0.5)', border: '1px solid rgba(170, 181, 178, 0.3)' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '500' }}>
                  Text: WHITE (#F9F6F0)
                </p>
              </div>
            </div>
          </div>

          {/* Smoky Umber */}
          <div className="space-y-3">
            <div 
              className="w-full h-32 rounded-2xl"
              style={{ backgroundColor: '#9C887A', border: '1px solid #DADADA' }}
            />
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Color / Accent / Smoky Umber
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                #9C887A
              </p>
              <div className="mt-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(249, 246, 240, 0.5)', border: '1px solid rgba(156, 136, 122, 0.3)' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '500' }}>
                  Text: WHITE (#F9F6F0)
                </p>
              </div>
            </div>
          </div>

          {/* Relic Green */}
          <div className="space-y-3">
            <div 
              className="w-full h-32 rounded-2xl"
              style={{ backgroundColor: '#5E6458', border: '1px solid #DADADA' }}
            />
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Color / Accent / Relic Green
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                #5E6458
              </p>
            </div>
          </div>

          {/* Limestone Oat */}
          <div className="space-y-3">
            <div 
              className="w-full h-32 rounded-2xl"
              style={{ backgroundColor: '#D7D0C5', border: '1px solid #DADADA' }}
            />
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Color / Surface / Limestone Oat
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                #D7D0C5
              </p>
            </div>
          </div>

          {/* Weathered Halo */}
          <div className="space-y-3">
            <div 
              className="w-full h-32 rounded-2xl"
              style={{ backgroundColor: '#8C8981', border: '1px solid #DADADA' }}
            />
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Color / Mid-tone / Weathered Halo
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                #8C8981
              </p>
            </div>
          </div>

          {/* Soft Grey */}
          <div className="space-y-3">
            <div 
              className="w-full h-32 rounded-2xl"
              style={{ backgroundColor: '#DADADA' }}
            />
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Color / Border / Soft Grey
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                #DADADA
              </p>
            </div>
          </div>

          {/* Ritual Shadow */}
          <div className="space-y-3">
            <div 
              className="w-full h-32 rounded-2xl relative"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.08)' }}
              />
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Color / Overlay / Ritual Shadow
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                rgba(0, 0, 0, 0.08)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Frame */}
      <div id="typography-section" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
          <h2 className="flex items-center gap-2 mb-2" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
            <HOLYDocument size={24} color="#1A1A1A" />
            Typography
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Type scale using Garamond (Display/Headings) and Inter (Body) — create as Figma Text Styles
          </p>
        </div>
        <div className="space-y-8">
          {/* Display XL */}
          <div className="space-y-3">
            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <p style={{ fontFamily: 'Garamond, serif', fontSize: '56px', color: '#1A1A1A', lineHeight: '120%' }}>
                Sacred Space
              </p>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Type / Display / XL
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Garamond · 56pt · Line Height 120%
              </p>
            </div>
          </div>

          {/* Heading L */}
          <div className="space-y-3">
            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <p style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%' }}>
                Your Daily Ritual
              </p>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Type / Heading / L
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Garamond · 32pt · Line Height 120%
              </p>
            </div>
          </div>

          {/* Heading M */}
          <div className="space-y-3">
            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <p style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', lineHeight: '120%' }}>
                Begin with Intention
              </p>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Type / Heading / M
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Garamond · 24pt · Line Height 120%
              </p>
            </div>
          </div>

          {/* Body Base */}
          <div className="space-y-3">
            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: '160%' }}>
                Thoughtfully crafted wellness essentials designed to honor the sacred pause in your daily life.
              </p>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Type / Body / Base
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Inter · 16pt · Line Height 160%
              </p>
            </div>
          </div>

          {/* Body Small */}
          <div className="space-y-3">
            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '150%' }}>
                Supporting text for captions, labels, and secondary information.
              </p>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Type / Body / Small
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Inter · 14pt · Line Height 150%
              </p>
            </div>
          </div>

          {/* Accent ø */}
          <div className="space-y-3">
            <div 
              className="p-6 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <p style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', lineHeight: 1, margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(-3px)' }}>
                ø
              </p>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Type / Accent / ø
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Garamond or Fraunces · Sacred Circle Glyph · Decorative
              </p>
            </div>
          </div>

          {/* Usage Note */}
          <div 
            className="p-6 rounded-2xl col-span-full"
            style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              <strong>Note:</strong> Display and Heading styles use Garamond with 120% line height for sacred, serif elegance. 
              Body styles use Inter with 150-160% line height for optimal readability. The ø glyph represents HØLY's sacred circle symbol.
            </p>
          </div>
        </div>
      </div>

      {/* Spacing Scale Frame */}
      <div id="spacing-section" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
          <h2 className="flex items-center gap-2 mb-2" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
            <HOLYGrid size={24} color="#1A1A1A" />
            Spacing Scale
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            5-step spacing system (4px base) for consistent rhythm and breathing room across all interfaces
          </p>
        </div>
        <div className="space-y-6">
          {/* XS - 4px */}
          <div className="flex items-center gap-6">
            <div 
              className="rounded"
              style={{ width: '4px', height: '40px', backgroundColor: '#1A1A1A' }}
            />
            <div className="flex-1 space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Spacing / XS
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                4px
              </p>
            </div>
          </div>

          {/* SM - 8px */}
          <div className="flex items-center gap-6">
            <div 
              className="rounded"
              style={{ width: '8px', height: '40px', backgroundColor: '#1A1A1A' }}
            />
            <div className="flex-1 space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Spacing / SM
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                8px
              </p>
            </div>
          </div>

          {/* MD - 16px */}
          <div className="flex items-center gap-6">
            <div 
              className="rounded"
              style={{ width: '16px', height: '40px', backgroundColor: '#1A1A1A' }}
            />
            <div className="flex-1 space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Spacing / MD
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                16px
              </p>
            </div>
          </div>

          {/* LG - 32px */}
          <div className="flex items-center gap-6">
            <div 
              className="rounded"
              style={{ width: '32px', height: '40px', backgroundColor: '#1A1A1A' }}
            />
            <div className="flex-1 space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Spacing / LG
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                32px
              </p>
            </div>
          </div>

          {/* XL - 64px */}
          <div className="flex items-center gap-6">
            <div 
              className="rounded"
              style={{ width: '64px', height: '40px', backgroundColor: '#1A1A1A' }}
            />
            <div className="flex-1 space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Spacing / XL
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                64px
              </p>
            </div>
          </div>

          {/* Usage Guide */}
          <div 
            className="p-6 rounded-2xl mt-6"
            style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              <strong>Usage:</strong> XS/SM for tight spacing (icons, inline elements) · MD for standard gaps (form fields, cards) · 
              LG/XL for section spacing and breathing room. HØLY philosophy prioritizes generous space — favor larger values.
            </p>
          </div>
        </div>
      </div>

      {/* Effects Frame */}
      <div id="effects-section" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
          <h2 className="flex items-center gap-2 mb-2" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
            <HOLYSparkle size={24} color="#1A1A1A" />
            Effects
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Shadow and glow effects — create as Figma Effect Styles for elevation and emphasis
          </p>
        </div>
        <div className="space-y-8">
          {/* Shadow Soft */}
          <div className="space-y-3">
            <div 
              className="w-full h-32 rounded-2xl"
              style={{ 
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)'
              }}
            />
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Effect / Shadow / Soft
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                0px 4px 16px rgba(0, 0, 0, 0.08)
              </p>
            </div>
          </div>

          {/* Shadow Deep */}
          <div className="space-y-3">
            <div 
              className="w-full h-32 rounded-2xl"
              style={{ 
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.12)'
              }}
            />
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Effect / Shadow / Deep
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                0px 8px 32px rgba(0, 0, 0, 0.12)
              </p>
            </div>
          </div>

          {/* Glow Sacred */}
          <div className="space-y-3">
            <div 
              className="w-full h-32 rounded-2xl flex items-center justify-center"
              style={{ 
                backgroundColor: '#1A1A1A',
                boxShadow: '0px 0px 40px rgba(224, 185, 88, 0.4)'
              }}
            >
              <p style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#F9F6F0', lineHeight: 1, margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(-3px)' }}>
                ø
              </p>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Effect / Glow / Sacred
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                0px 0px 40px rgba(224, 185, 88, 0.4)
              </p>
            </div>
          </div>

          {/* Usage Note */}
          <div 
            className="p-6 rounded-2xl"
            style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              <strong>Usage:</strong> Soft shadow for cards and elevated surfaces · Deep shadow for modals and overlays · 
              Sacred glow for accent moments, CTAs, or sacred symbol highlights.
            </p>
          </div>
        </div>
      </div>

      {/* Radius Frame */}
      <div id="radius-section" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
          <h2 className="flex items-center gap-2 mb-2" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
            <HOLYSquare size={24} color="#1A1A1A" />
            Radius
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Corner radius scale for soft, approachable interface elements
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Radius Sm */}
          <div className="space-y-3">
            <div 
              className="w-full h-32"
              style={{ 
                backgroundColor: '#D9C4BB',
                border: '1px solid #DADADA',
                borderRadius: '8px'
              }}
            />
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Radius / Sm
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                8px
              </p>
            </div>
          </div>

          {/* Radius Md */}
          <div className="space-y-3">
            <div 
              className="w-full h-32"
              style={{ 
                backgroundColor: '#AAB5B2',
                border: '1px solid #DADADA',
                borderRadius: '16px'
              }}
            />
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Radius / Md
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                16px
              </p>
            </div>
          </div>

          {/* Radius XL */}
          <div className="space-y-3">
            <div 
              className="w-full h-32"
              style={{ 
                backgroundColor: '#9C887A',
                border: '1px solid #DADADA',
                borderRadius: '24px'
              }}
            />
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Radius / XL
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                24px
              </p>
            </div>
          </div>

          {/* Radius Pill */}
          <div className="space-y-3">
            <div 
              className="w-full h-32 flex items-center justify-center"
              style={{ 
                backgroundColor: '#1A1A1A',
                borderRadius: '999px'
              }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', fontWeight: '500' }}>
                Pill Shape
              </p>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Radius / Pill
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontFamily: 'monospace' }}>
                999px
              </p>
            </div>
          </div>

          {/* Usage Note */}
          <div 
            className="p-6 rounded-2xl col-span-full"
            style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              <strong>Usage:</strong> Sm for inputs and small elements · Md for cards and containers (most common) · 
              XL for hero sections and prominent modules · Pill for badges, tags, and fully rounded elements.
            </p>
          </div>
        </div>
      </div>

      {/* CHANNEL-SPECIFIC TOKENS: EMAIL */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #5E6458' }}>
        <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
          <div className="flex items-center gap-3 mb-2">
            <div style={{ fontSize: '24px' }}>📧</div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Email Tokens
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Email-safe design tokens optimized for ESP platforms (Klaviyo, Mailchimp) with email client constraints
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Typography */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
              Email / Typography
            </h3>
            <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Heading Font</p>
                <p style={{ opacity: 0.7 }}>Georgia, serif (email-safe)</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Body Font</p>
                <p style={{ opacity: 0.7 }}>Arial, Helvetica, sans-serif</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>H1 Size</p>
                <p style={{ opacity: 0.7 }}>28px / 120%</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Body Size</p>
                <p style={{ opacity: 0.7 }}>16px / 160%</p>
              </div>
            </div>
          </div>

          {/* Email Spacing */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
              Email / Spacing
            </h3>
            <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Container Width</p>
                <p style={{ opacity: 0.7 }}>600px max</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Padding</p>
                <p style={{ opacity: 0.7 }}>20px (16px mobile)</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Section Gap</p>
                <p style={{ opacity: 0.7 }}>32px</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Element Gap</p>
                <p style={{ opacity: 0.7 }}>12px</p>
              </div>
            </div>
          </div>

          {/* Email Buttons */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
              Email / Button
            </h3>
            <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Min Height</p>
                <p style={{ opacity: 0.7 }}>48px</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Padding</p>
                <p style={{ opacity: 0.7 }}>14-16px vertical, 32-48px horizontal</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Border Radius</p>
                <p style={{ opacity: 0.7 }}>8px</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Rendering</p>
                <p style={{ opacity: 0.7 }}>Table-based for compatibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHANNEL-SPECIFIC TOKENS: MOBILE */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #5E6458' }}>
        <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
          <div className="flex items-center gap-3 mb-2">
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Mobile Tokens
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Mobile-optimized tokens for iOS and Android with touch-first design principles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mobile Typography */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
              Mobile / Typography
            </h3>
            <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Display</p>
                <p style={{ opacity: 0.7 }}>Garamond, serif</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>UI/Body</p>
                <p style={{ opacity: 0.7 }}>Inter, sans-serif</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>H1</p>
                <p style={{ opacity: 0.7 }}>28px / 120%</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Body</p>
                <p style={{ opacity: 0.7 }}>16px / 160%</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Caption</p>
                <p style={{ opacity: 0.7 }}>12px / 140%</p>
              </div>
            </div>
          </div>

          {/* Mobile Touch Targets */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
              Mobile / TouchTarget
            </h3>
            <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Minimum</p>
                <p style={{ opacity: 0.7 }}>48px × 48px</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Primary Button</p>
                <p style={{ opacity: 0.7 }}>48px height, full-width</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Tab Bar Item</p>
                <p style={{ opacity: 0.7 }}>56px height</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>FAB</p>
                <p style={{ opacity: 0.7 }}>56px × 56px</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>List Item</p>
                <p style={{ opacity: 0.7 }}>56px min height</p>
              </div>
            </div>
          </div>

          {/* Mobile Spacing */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
              Mobile / Spacing
            </h3>
            <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Screen Padding</p>
                <p style={{ opacity: 0.7 }}>16px</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Section Gap</p>
                <p style={{ opacity: 0.7 }}>24px</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Card Gap</p>
                <p style={{ opacity: 0.7 }}>12px</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Element Gap</p>
                <p style={{ opacity: 0.7 }}>8px</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Safe Area</p>
                <p style={{ opacity: 0.7 }}>iOS top/bottom insets + 80px bottom nav</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Token Application Guide */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#EBD7D1', border: '2px solid #DADADA' }}>
        <div className="space-y-6">
          <div>
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', marginBottom: '12px' }}>
              Using These Tokens
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
              These foundational tokens form the DNA of the HØLY design system. When creating components or pages, 
              always reference these exact values rather than custom styles. This ensures visual consistency, easier maintenance, 
              and alignment with the sacred design philosophy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6 }}>
                IN FIGMA
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                Create as Styles using the naming format shown. Copy entire frames to preserve Auto Layout structure.
              </p>
            </div>
            
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6 }}>
                IN CODE
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                Reference via CSS variables or design tokens. See globals.css for implementation.
              </p>
            </div>
            
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6 }}>
                ADA COMPLIANCE
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                All color pairings meet WCAG 2.1 AA standards. Body text minimum 16pt.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
