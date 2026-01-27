/**
 * HØLY™ Design System — Product Classification Tags
 * 
 * Unified tag system for product purpose and time-of-day classification.
 * Applied across PDP, PLP, filters, email, and education modules.
 * 
 * Date: November 13, 2025
 * Integration: System-wide product taxonomy
 */

import { HOLYSun, HOLYMoon, HOLYSparkle } from '../icons/HOLYIcons';

export interface ProductTagProps {
  label: string;
  variant?: 'purpose' | 'time';
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * PURPOSE TAG COMPONENT
 * DEPRECATED: Use PurposeLabel from core-system instead
 * Visual chip for product purpose classification
 */
export function PurposeTag({ label, size = 'md', className = '' }: ProductTagProps) {
  // Map purpose to color
  const colorMap: Record<string, string> = {
    'Cleanse': '#AAB5B2',    // Fogstone Blue (Ritual Aftercare)
    'Prep': '#D9C4BB',       // Veil Clay (Ritual Renewal)
    'Hydrate': '#5E6458',    // Relic Green (Ritual Touch)
    'Protect': '#D7D0C5',    // Limestone Oat
    'Treat': '#9C887A'       // Smoky Umber (Ritual Vital)
  };

  const color = colorMap[label] || '#1A1A1A';
  const isSmall = size === 'sm';

  return (
    <span
      className={`inline-flex items-center justify-center px-3 py-1 rounded-full ${className}`}
      style={{
        backgroundColor: `${color}15`,
        border: `1.5px solid ${color}`,
        fontFamily: 'Inter, sans-serif',
        fontSize: isSmall ? '11px' : '12px',
        fontWeight: '500',
        color: color,
        letterSpacing: '0.3px'
      }}
    >
      {label}
    </span>
  );
}

/**
 * TIME-OF-DAY TAG COMPONENT
 * Visual chip for usage timing classification
 * Uses 2D line-art HOLY icons per brand icon standards
 */
export function TimeTag({ label, size = 'md', className = '' }: ProductTagProps) {
  const isSmall = size === 'sm';
  const iconSize = isSmall ? 14 : 16;

  // Map time to HOLY icon component (2D line-art only)
  const getIcon = () => {
    switch (label) {
      case 'Morning':
        return <HOLYSun size={iconSize} color="#1A1A1A" strokeWidth={1.5} />;
      case 'Evening':
        return <HOLYMoon size={iconSize} color="#1A1A1A" strokeWidth={1.5} />;
      case 'Ritual':
        return <HOLYSparkle size={iconSize} color="#1A1A1A" strokeWidth={1.5} />;
      default:
        return null;
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${className}`}
      style={{
        backgroundColor: '#F9F6F0',
        border: '1.5px solid #DADADA',
        fontFamily: 'Inter, sans-serif',
        fontSize: isSmall ? '11px' : '12px',
        fontWeight: '500',
        color: '#1A1A1A',
        letterSpacing: '0.3px'
      }}
    >
      {getIcon()}
      {label}
    </span>
  );
}

/**
 * TAG LEGEND COMPONENT
 * Visual key explaining the classification system
 */
export function ProductTagLegend() {
  const purposes = [
    { label: 'Cleanse', desc: 'Removes impurities, resets skin or body' },
    { label: 'Prep', desc: 'Tones, balances pH, primes skin or tools' },
    { label: 'Hydrate', desc: 'Moisturizes, supports skin barrier, softens' },
    { label: 'Protect', desc: 'Shields from UV, friction, or pollutants' },
    { label: 'Treat', desc: 'Delivers actives, heals, corrects, or regenerates' }
  ];

  const times = [
    { label: 'Morning', desc: 'For energizing or protective start to day' },
    { label: 'Evening', desc: 'For wind-down, healing, recovery rituals' },
    { label: 'Ritual', desc: 'Use anytime. Flexible, intuitive care moments' }
  ];

  return (
    <div className="p-8 rounded-2xl bg-white border-2 border-[#DADADA] space-y-8">
      <div>
        <div className="mb-6">
          <h3 className="mb-2" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A' }}>
            Product Classification System
          </h3>
          <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', lineHeight: '160%' }}>
            Every HØLY™ product is classified by <strong>Purpose</strong> and <strong>Time-of-Day</strong> to guide discovery, education, and ritual practice across all touchpoints.
          </p>
        </div>

        {/* Purpose Tags */}
        <div className="mb-8">
          <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '13px', color: '#1A1A1A', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Purpose Categories
          </p>
          <div className="space-y-3">
            {purposes.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <PurposeTag label={item.label} />
                </div>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '150%' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Time Tags */}
        <div>
          <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '13px', color: '#1A1A1A', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Time-of-Day Categories
          </p>
          <div className="space-y-3">
            {times.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <TimeTag label={item.label} />
                </div>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '150%' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration Notice */}
      <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '170%' }}>
          <strong>System Integration:</strong> These tags are applied across UI Components (filters, product cards), Ritual Finder results, email segmentation (Klaviyo), print labels, and educational modules to ensure brand and UX consistency.
        </p>
      </div>
    </div>
  );
}

/**
 * PRODUCT TAG GROUP
 * Container for displaying multiple tags on a product card
 */
export function ProductTagGroup({ 
  purposes = [], 
  time,
  size = 'md' 
}: { 
  purposes: string[]; 
  time?: string;
  size?: 'sm' | 'md';
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {purposes.slice(0, 2).map((purpose) => (
        <PurposeTag key={purpose} label={purpose} size={size} />
      ))}
      {time && <TimeTag label={time} size={size} />}
    </div>
  );
}
