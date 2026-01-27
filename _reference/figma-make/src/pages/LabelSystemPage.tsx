import { 
  PurposeLabel, 
  TimeLabel, 
  RitualSystemLabel, 
  MetadataLabel,
  LabelStack,
  PURPOSE_CONFIG,
  TIME_CONFIG,
  RITUAL_SYSTEMS_CONFIG,
  METADATA_CONFIG,
  TM,
  renderWithTM
} from '../components/core-system';
import { Tag, Clock, Sparkles, ShoppingBag } from 'lucide-react';

export default function LabelSystemPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <Tag size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Label System — HØLY<TM />
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Universal label system enforcing consistency across all product tagging, iconography, and metadata. Mobile-first, ADA compliant, and responsive. This is the single source of truth for all labels across PDP, PLP, email, mobile, and checkout experiences.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* PURPOSE CATEGORIES */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <Sparkles size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Purpose Categories
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Color-coded purpose classification badges. Locked system with 5 variants only. Refined sentence case styling with subtle system color backgrounds.
            </p>
          </div>

          {/* All Purpose Labels */}
          <div className="space-y-6">
            {/* Cleanse */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 4px 0' }}>
                    Cleanse
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', margin: '0 0 12px 0' }}>
                    Removes impurities, resets skin or body
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <PurposeLabel purpose="Cleanse" size="sm" />
                    <PurposeLabel purpose="Cleanse" size="md" />
                    <PurposeLabel purpose="Cleanse" size="lg" />
                  </div>
                </div>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: PURPOSE_CONFIG.Cleanse.color,
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>

            {/* Prep */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 4px 0' }}>
                    Prep
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', margin: '0 0 12px 0' }}>
                    Tones, balances pH, primes skin or tools
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <PurposeLabel purpose="Prep" size="sm" />
                    <PurposeLabel purpose="Prep" size="md" />
                    <PurposeLabel purpose="Prep" size="lg" />
                  </div>
                </div>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: PURPOSE_CONFIG.Prep.color,
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>

            {/* Hydrate */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 4px 0' }}>
                    Hydrate
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', margin: '0 0 12px 0' }}>
                    Moisturizes, supports skin barrier, softens
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <PurposeLabel purpose="Hydrate" size="sm" />
                    <PurposeLabel purpose="Hydrate" size="md" />
                    <PurposeLabel purpose="Hydrate" size="lg" />
                  </div>
                </div>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: PURPOSE_CONFIG.Hydrate.color,
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>

            {/* Protect */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 4px 0' }}>
                    Protect
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', margin: '0 0 12px 0' }}>
                    Shields from UV, friction, or pollutants
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <PurposeLabel purpose="Protect" size="sm" />
                    <PurposeLabel purpose="Protect" size="md" />
                    <PurposeLabel purpose="Protect" size="lg" />
                  </div>
                </div>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: PURPOSE_CONFIG.Protect.color,
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>

            {/* Treat */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 4px 0' }}>
                    Treat
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', margin: '0 0 12px 0' }}>
                    Delivers actives, heals, corrects, or regenerates
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <PurposeLabel purpose="Treat" size="sm" />
                    <PurposeLabel purpose="Treat" size="md" />
                    <PurposeLabel purpose="Treat" size="lg" />
                  </div>
                </div>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: PURPOSE_CONFIG.Treat.color,
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>WCAG Compliance:</strong> All purpose labels automatically adjust text color based on background for AAA contrast compliance. Relic Green (Hydrate) and Smoky Umber (Treat) use white text for optimal readability.
            </p>
          </div>
        </div>

        {/* TIME-OF-DAY CATEGORIES */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <Clock size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Time-of-Day Categories
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Icon + text labels for usage timing. Uses 2D line-art HOLY icons only. Light neutral background with border.
            </p>
          </div>

          <div className="space-y-6">
            {/* Morning */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 4px 0' }}>
                Morning
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', margin: '0 0 12px 0' }}>
                For energizing or protective start to day
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <TimeLabel time="Morning" size="sm" />
                <TimeLabel time="Morning" size="md" />
                <TimeLabel time="Morning" size="lg" />
              </div>
            </div>

            {/* Evening */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 4px 0' }}>
                Evening
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', margin: '0 0 12px 0' }}>
                For wind-down, healing, recovery rituals
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <TimeLabel time="Evening" size="sm" />
                <TimeLabel time="Evening" size="md" />
                <TimeLabel time="Evening" size="lg" />
              </div>
            </div>

            {/* Ritual */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 4px 0' }}>
                Ritual
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', margin: '0 0 12px 0' }}>
                Use anytime. Flexible, intuitive care moments
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <TimeLabel time="Ritual" size="sm" />
                <TimeLabel time="Ritual" size="md" />
                <TimeLabel time="Ritual" size="lg" />
              </div>
            </div>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>Icon Standard:</strong> Time labels use 2D line-art HOLY icons exclusively. No 3D emojis permitted (except in Ritual Finder chat interface).
            </p>
          </div>
        </div>

        {/* RITUAL SYSTEM LABELS */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <Sparkles size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Ritual System Labels
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Color-coded system identifiers with icon and trademark symbol. Enforces proper WCAG contrast for dark system colors.
            </p>
          </div>

          <div className="space-y-6">
            {/* Ritual Aftercare */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 12px 0' }}>
                    Ritual Aftercare<TM />
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap mb-3">
                    <RitualSystemLabel system="aftercare" size="sm" />
                    <RitualSystemLabel system="aftercare" size="md" />
                    <RitualSystemLabel system="aftercare" size="lg" />
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <RitualSystemLabel system="aftercare" size="md" showIcon={false} />
                  </div>
                </div>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: RITUAL_SYSTEMS_CONFIG.aftercare.color,
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>

            {/* Ritual Renewal */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 12px 0' }}>
                    Ritual Renewal™
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap mb-3">
                    <RitualSystemLabel system="renewal" size="sm" />
                    <RitualSystemLabel system="renewal" size="md" />
                    <RitualSystemLabel system="renewal" size="lg" />
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <RitualSystemLabel system="renewal" size="md" showIcon={false} />
                  </div>
                </div>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: RITUAL_SYSTEMS_CONFIG.renewal.color,
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>

            {/* Ritual Touch */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 12px 0' }}>
                    Ritual Touch™
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap mb-3">
                    <RitualSystemLabel system="touch" size="sm" />
                    <RitualSystemLabel system="touch" size="md" />
                    <RitualSystemLabel system="touch" size="lg" />
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <RitualSystemLabel system="touch" size="md" showIcon={false} />
                  </div>
                </div>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: RITUAL_SYSTEMS_CONFIG.touch.color,
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>

            {/* Ritual Union */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 12px 0' }}>
                    Ritual Union™
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap mb-3">
                    <RitualSystemLabel system="union" size="sm" />
                    <RitualSystemLabel system="union" size="md" />
                    <RitualSystemLabel system="union" size="lg" />
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <RitualSystemLabel system="union" size="md" showIcon={false} />
                  </div>
                </div>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: RITUAL_SYSTEMS_CONFIG.union.color,
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>

            {/* Ritual Vital */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 12px 0' }}>
                    Ritual Vital™
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap mb-3">
                    <RitualSystemLabel system="vital" size="sm" />
                    <RitualSystemLabel system="vital" size="md" />
                    <RitualSystemLabel system="vital" size="lg" />
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <RitualSystemLabel system="vital" size="md" showIcon={false} />
                  </div>
                </div>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: RITUAL_SYSTEMS_CONFIG.vital.color,
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>WCAG Compliance:</strong> Ritual Touch™ and Ritual Vital™ use white text on dark backgrounds for WCAG AAA compliance. All trademark symbols (™) are enforced.
            </p>
          </div>
        </div>

        {/* METADATA LABELS */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <ShoppingBag size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Metadata Labels
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Black/white inverted pill style for product status and metadata. Used for New, Bestseller, Limited, etc. Responsive sizing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* New */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 12px 0' }}>
                New
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <MetadataLabel type="New" size="sm" />
                <MetadataLabel type="New" size="md" />
                <MetadataLabel type="New" size="lg" />
              </div>
            </div>

            {/* Bestseller */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 12px 0' }}>
                Bestseller
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <MetadataLabel type="Bestseller" size="sm" showIcon={false} />
                <MetadataLabel type="Bestseller" size="md" showIcon={false} />
                <MetadataLabel type="Bestseller" size="lg" showIcon={false} />
              </div>
            </div>

            {/* Limited */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 12px 0' }}>
                Limited
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <MetadataLabel type="Limited" size="sm" showIcon={false} />
                <MetadataLabel type="Limited" size="md" showIcon={false} />
                <MetadataLabel type="Limited" size="lg" showIcon={false} />
              </div>
            </div>

            {/* Coming Soon */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 12px 0' }}>
                Coming Soon
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <MetadataLabel type="Coming Soon" size="sm" showIcon={false} />
                <MetadataLabel type="Coming Soon" size="md" showIcon={false} />
                <MetadataLabel type="Coming Soon" size="lg" showIcon={false} />
              </div>
            </div>

            {/* Sold Out */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 12px 0' }}>
                Sold Out
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <MetadataLabel type="Sold Out" size="sm" showIcon={false} />
                <MetadataLabel type="Sold Out" size="md" showIcon={false} />
                <MetadataLabel type="Sold Out" size="lg" showIcon={false} />
              </div>
            </div>

            {/* Ritual Essential */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 12px 0' }}>
                Ritual Essential
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <MetadataLabel type="Ritual Essential" size="sm" showIcon={false} />
                <MetadataLabel type="Ritual Essential" size="md" showIcon={false} />
                <MetadataLabel type="Ritual Essential" size="lg" showIcon={false} />
              </div>
            </div>

            {/* Low Stock */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 12px 0' }}>
                Low Stock
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <MetadataLabel type="Low Stock" size="sm" showIcon={false} />
                <MetadataLabel type="Low Stock" size="md" showIcon={false} />
                <MetadataLabel type="Low Stock" size="lg" showIcon={false} />
              </div>
            </div>

            {/* Back in Stock */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 12px 0' }}>
                Back in Stock
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <MetadataLabel type="Back in Stock" size="sm" showIcon={false} />
                <MetadataLabel type="Back in Stock" size="md" showIcon={false} />
                <MetadataLabel type="Back in Stock" size="lg" showIcon={false} />
              </div>
            </div>
          </div>
        </div>

        {/* LABEL STACKING EXAMPLES */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <Tag size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Label Stacking Examples
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Multiple labels can be combined with proper spacing and wrapping. LabelStack component ensures graceful mobile behavior.
            </p>
          </div>

          <div className="space-y-8">
            {/* Product Example 1 */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 4px 0' }}>
                Product Example: Sacred Cleansing Balm
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', margin: '0 0 16px 0' }}>
                New product from Ritual Renewal™, used for cleansing in evening routine
              </p>
              <LabelStack 
                labels={[
                  { type: 'metadata', value: 'New' as MetadataType },
                  { type: 'system', value: 'renewal' },
                  { type: 'purpose', value: 'Cleanse' as PurposeCategory },
                  { type: 'time', value: 'Evening' as TimeCategory }
                ]}
                direction="horizontal"
                size="md"
              />
            </div>

            {/* Product Example 2 */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 4px 0' }}>
                Product Example: Ritual Essential Serum
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', margin: '0 0 16px 0' }}>
                Bestselling treatment from Ritual Vital™, can be used anytime
              </p>
              <LabelStack 
                labels={[
                  { type: 'metadata', value: 'Ritual Essential' as MetadataType },
                  { type: 'metadata', value: 'Bestseller' as MetadataType, showIcon: false },
                  { type: 'system', value: 'vital' },
                  { type: 'purpose', value: 'Treat' as PurposeCategory },
                  { type: 'time', value: 'Ritual' as TimeCategory }
                ]}
                direction="horizontal"
                size="md"
              />
            </div>

            {/* Product Example 3 */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 4px 0' }}>
                Product Example: Moisturizing Mist
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', margin: '0 0 16px 0' }}>
                Limited edition from Ritual Touch™, hydrates and used in morning routine
              </p>
              <LabelStack 
                labels={[
                  { type: 'metadata', value: 'Limited' as MetadataType, showIcon: false },
                  { type: 'system', value: 'touch' },
                  { type: 'purpose', value: 'Hydrate' as PurposeCategory },
                  { type: 'time', value: 'Morning' as TimeCategory }
                ]}
                direction="horizontal"
                size="md"
              />
            </div>

            {/* Vertical Stack Example */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 4px 0' }}>
                Vertical Stack (Mobile Optimized)
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', margin: '0 0 16px 0' }}>
                Labels can stack vertically for compact mobile layouts
              </p>
              <LabelStack 
                labels={[
                  { type: 'metadata', value: 'New' as MetadataType },
                  { type: 'system', value: 'aftercare' },
                  { type: 'purpose', value: 'Prep' as PurposeCategory },
                  { type: 'time', value: 'Morning' as TimeCategory }
                ]}
                direction="vertical"
                size="sm"
              />
            </div>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>Implementation:</strong> Use LabelStack component for multiple labels. It handles proper spacing, wrapping, and responsive behavior automatically. Labels maintain touch targets on mobile (min 44px height when tappable).
            </p>
          </div>
        </div>

        {/* USAGE GUIDELINES */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Usage Guidelines & Restrictions
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 8px 0' }}>
                ✓ Required Standards
              </h3>
              <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '180%', paddingLeft: '20px', margin: 0 }}>
                <li>Always import from <code>/components/core-system/LabelSystem</code></li>
                <li>Use locked label variants only — no custom label creation</li>
                <li>Maintain WCAG AAA contrast compliance (automatic in components)</li>
                <li>Use 2D line-art HOLY icons only (no 3D emojis except Ritual Finder chat)</li>
                <li>Ensure min 44px tap targets on mobile for interactive labels</li>
                <li>Apply proper trademark symbols (™) on all Ritual System labels</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 8px 0' }}>
                ✗ Prohibited Actions
              </h3>
              <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '180%', paddingLeft: '20px', margin: 0 }}>
                <li>Creating custom label components or inline label styles</li>
                <li>Using 3D emojis in labels (except Ritual Finder interface)</li>
                <li>Hard-coding label text without using components</li>
                <li>Modifying label colors or typography outside system</li>
                <li>Creating new purpose categories beyond the 5 locked variants</li>
                <li>Omitting trademark symbols (™) from Ritual System labels</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', margin: '0 0 8px 0' }}>
                📍 Where to Apply
              </h3>
              <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '180%', paddingLeft: '20px', margin: 0 }}>
                <li>Product Detail Pages (PDP)</li>
                <li>Product Listing Pages (PLP)</li>
                <li>Product Cards (all contexts)</li>
                <li>Ritual Finder results</li>
                <li>Checkout and cart</li>
                <li>Email templates</li>
                <li>Mobile app and mobile web</li>
                <li>Homepage product blocks</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
