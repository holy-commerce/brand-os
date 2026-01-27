import {
  RitualAftercare_HeroSection,
  RitualAftercare_ProductCard,
  RitualAftercare_ContentBlock,
  RitualAftercare_Footer
} from '../components/ritual-systems/RitualAftercareComponents';

import {
  RitualRenewal_HeroSection,
  RitualRenewal_ProductKit,
  RitualRenewal_QuoteBlock,
  RitualRenewal_ContentCTA
} from '../components/ritual-systems/RitualRenewalComponents';

import {
  RitualTouch_FullWidthBanner,
  RitualTouch_ContentStack,
  RitualTouch_ProductHighlight,
  RitualTouch_StudioPartnerSection
} from '../components/ritual-systems/RitualTouchComponents';

import {
  RitualUnion_HeroSection,
  RitualUnion_CarouselPromo,
  RitualUnion_IntimacyFeatureCard,
  RitualUnion_AffirmationBlock
} from '../components/ritual-systems/RitualUnionComponents';

import {
  RitualVital_ComparisonTable,
  RitualVital_LongevityMetricCard,
  RitualVital_ProductPillPack,
  RitualVital_BreathworkCTA
} from '../components/ritual-systems/RitualVitalComponents';

import { HOLYDna, HOLYWarning, HOLYTarget } from '../components/icons/HOLYIcons';

export default function RitualSystemsPage() {
  return (
    <div className="space-y-8">
      
      {/* Page Info */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div style={{ marginBottom: '24px' }}>
          <div className="flex items-center gap-3 mb-3">
            <HOLYDna size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Ritual Systems — Branded Component Variants
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', marginBottom: '0' }}>
            Branded component variants for each Ritual Care™ system — using tokens, assets, and tone from each system's aesthetic identity
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8" style={{ gap: '32px' }}>
          <div style={{ marginBottom: '16px' }}>
            <div className="flex items-center gap-2 mb-3">
              <HOLYWarning size={12} color="#1A1A1A" opacity={0.5} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, margin: 0 }}>
                THIS PAGE INCLUDES
              </p>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%', marginBottom: '0' }}>
              Branded component variants for: Aftercare™, Renewal™, Touch™, Union™, Vital™
            </p>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <div className="flex items-center gap-2 mb-3">
              <HOLYTarget size={12} color="#1A1A1A" opacity={0.5} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, margin: 0 }}>
                THIS PAGE DOES NOT INCLUDE
              </p>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%', marginBottom: '0' }}>
              Base tokens, generic buttons, foundational primitives, icons, or animations
            </p>
          </div>
        </div>
      </div>

      {/* Ritual Aftercare™ */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #AAB5B2' }}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: '#AAB5B2' }}
            />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
              Ritual Aftercare™
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px' }}>
                TONE
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                Clinical meets ceremonial
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px' }}>
                PALETTE
              </p>
              <div className="flex gap-2">
                <div 
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: '#AAB5B2', border: '1px solid #DADADA' }}
                  title="Fogstone Blue"
                />
                <div 
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: '#9C887A', border: '1px solid #DADADA' }}
                  title="Smoky Umber"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Aftercare / Hero Section / Ocean Overlay
            </h3>
            <RitualAftercare_HeroSection />
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Aftercare / Product Card / Ocean Overlay
            </h3>
            <div className="max-w-xs">
              <RitualAftercare_ProductCard />
            </div>
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Aftercare / Content Block / Educational
            </h3>
            <RitualAftercare_ContentBlock />
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Aftercare / Footer Variant
            </h3>
            <RitualAftercare_Footer />
          </div>
        </div>
      </div>

      {/* Ritual Renewal™ */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #D9C4BB' }}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: '#D9C4BB' }}
            />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
              Ritual Renewal™
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px' }}>
                TONE
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                Refined, luminous, alchemical
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px' }}>
                PALETTE
              </p>
              <div className="flex gap-2">
                <div 
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: '#D9C4BB', border: '1px solid #DADADA' }}
                  title="Veil Clay"
                />
                <div 
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
                  title="Ivory"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Renewal / Hero Section
            </h3>
            <RitualRenewal_HeroSection />
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Renewal / Product Kit Layout
            </h3>
            <RitualRenewal_ProductKit />
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Renewal / Quote Block
            </h3>
            <RitualRenewal_QuoteBlock />
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Renewal / Content CTA
            </h3>
            <RitualRenewal_ContentCTA />
          </div>
        </div>
      </div>

      {/* Ritual Touch™ */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #1A1A1A' }}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: '#1A1A1A' }}
            />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
              Ritual Touch™
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px' }}>
                TONE
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                Sensual, soft, connective
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px' }}>
                PALETTE
              </p>
              <div className="flex gap-2">
                <div 
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
                  title="Warm Neutrals"
                />
                <div 
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: '#1A1A1A' }}
                  title="Temple Black"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Touch / Full-width Banner
            </h3>
            <RitualTouch_FullWidthBanner />
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Touch / Content Stack
            </h3>
            <RitualTouch_ContentStack />
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Touch / Product Highlight
            </h3>
            <RitualTouch_ProductHighlight />
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Touch / Studio Partner Section
            </h3>
            <RitualTouch_StudioPartnerSection />
          </div>
        </div>
      </div>

      {/* Ritual Union™ */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #D9C4BB' }}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: '#D9C4BB' }}
            />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
              Ritual Union™
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px' }}>
                TONE
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                Erotic, playful, healing
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px' }}>
                PALETTE
              </p>
              <div className="flex gap-2">
                <div 
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: '#D9C4BB', border: '1px solid #DADADA' }}
                  title="Veil Clay"
                />
                <div 
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: '#1A1A1A' }}
                  title="Deep Shadow"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Union / Hero Section / Carousel
            </h3>
            <RitualUnion_HeroSection />
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Union / Carousel Promo Block
            </h3>
            <RitualUnion_CarouselPromo />
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Union / Intimacy Feature Card
            </h3>
            <RitualUnion_IntimacyFeatureCard />
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Union / Affirmation Block
            </h3>
            <RitualUnion_AffirmationBlock />
          </div>
        </div>
      </div>

      {/* Ritual Vital™ */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #9C887A' }}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: '#9C887A' }}
            />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
              Ritual Vital™
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px' }}>
                TONE
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                Energized, primal, resilient
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px' }}>
                PALETTE
              </p>
              <div className="flex gap-2">
                <div 
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: '#9C887A', border: '1px solid #DADADA' }}
                  title="Smoky Umber"
                />
                <div 
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: '#4A7C59', border: '1px solid #DADADA' }}
                  title="Deep Green"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Vital / Comparison Table
            </h3>
            <RitualVital_ComparisonTable />
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Vital / Longevity Metric Card
            </h3>
            <div className="max-w-md">
              <RitualVital_LongevityMetricCard />
            </div>
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Vital / Product Pill Pack
            </h3>
            <RitualVital_ProductPillPack />
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / Ritual Vital / Breathwork CTA Module
            </h3>
            <RitualVital_BreathworkCTA />
          </div>
        </div>
      </div>

      {/* Usage Guide */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#D9C4BB', border: '2px solid #DADADA' }}>
        <div className="space-y-6">
          <div>
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', marginBottom: '12px' }}>
              Using Ritual System Components
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
              These are branded variants of components from the UI Components page. Each is customized with system-specific 
              colors, tone, and messaging while maintaining the foundational structure and Auto Layout principles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6 }}>
                IN FIGMA
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                Copy these branded components directly into system-specific pages. All styling is preserved.
              </p>
            </div>
            
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6 }}>
                BRAND CONSISTENCY
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                Each system maintains distinct personality while sharing the core HØLY design language.
              </p>
            </div>
            
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6 }}>
                CUSTOMIZATION
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                Swap imagery and copy, but always preserve system color palettes and tonal voice.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
