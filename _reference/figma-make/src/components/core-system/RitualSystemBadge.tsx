/**
 * HØLY™ / CORE SYSTEM COMPONENTS / Ritual System Badge
 * 
 * LOCKED COMPONENT - DO NOT DETACH OR REGENERATE
 * 
 * Master ritual system badge with proper trademark symbols and colors.
 * 
 * Usage:
 * - Product Cards
 * - PDP
 * - PLP Filters
 * - System Pages
 * 
 * Variants: Aftercare™ | Renewal™ | Touch™ | Union™ | Vital™
 */

import { 
  HOLYDroplet, HOLYFlower, HOLYLeaf, HOLYWave, HOLYSparkle 
} from '../icons/HOLYIcons';

type RitualSystemType = 'aftercare' | 'renewal' | 'touch' | 'union' | 'vital';

interface RitualSystemBadgeProps {
  system: RitualSystemType | string;
  variant?: 'default' | 'large' | 'compact';
  size?: 'sm' | 'md' | 'lg'; // Alternative naming for variant
  showIcon?: boolean;
}

const RITUAL_SYSTEMS = {
  aftercare: {
    name: 'Ritual Aftercare™',
    color: '#AAB5B2',
    icon: HOLYDroplet
  },
  renewal: {
    name: 'Ritual Renewal™',
    color: '#D9C4BB',
    icon: HOLYFlower
  },
  touch: {
    name: 'Ritual Touch™',
    color: '#5E6458',
    icon: HOLYLeaf
  },
  union: {
    name: 'Ritual Union™',
    color: '#D7D0C5',
    icon: HOLYWave
  },
  vital: {
    name: 'Ritual Vital™',
    color: '#9C887A',
    icon: HOLYSparkle
  }
};

// Helper function to normalize system input
function normalizeSystemKey(system: string): RitualSystemType | null {
  // If it's already a key, return it
  if (system in RITUAL_SYSTEMS) {
    return system as RitualSystemType;
  }
  
  // Try to extract key from full name (e.g., "Ritual Renewal™" -> "renewal")
  const match = system.match(/Ritual\s+(Aftercare|Renewal|Touch|Union|Vital)/i);
  if (match) {
    return match[1].toLowerCase() as RitualSystemType;
  }
  
  return null;
}

export function RitualSystemBadge({ 
  system, 
  variant = 'default',
  size,
  showIcon = true 
}: RitualSystemBadgeProps) {
  // Normalize the system key
  const systemKey = normalizeSystemKey(system);
  
  // If we can't find a valid system, return null
  if (!systemKey || !RITUAL_SYSTEMS[systemKey]) {
    console.warn(`RitualSystemBadge: Invalid system "${system}"`);
    return null;
  }
  
  const config = RITUAL_SYSTEMS[systemKey];
  const IconComponent = config.icon;
  
  // Map size prop to variant if provided
  const actualVariant = size ? (size === 'sm' ? 'compact' : size === 'lg' ? 'large' : 'default') : variant;

  const sizes = {
    compact: { padding: '4px 8px', fontSize: '11px', iconSize: 12 },
    default: { padding: '6px 12px', fontSize: '13px', iconSize: 16 },
    large: { padding: '8px 16px', fontSize: '14px', iconSize: 20 }
  };

  const sizeConfig = sizes[actualVariant];
  
  // Use white text for darker backgrounds (Touch, Vital)
  const textColor = systemKey === 'touch' || systemKey === 'vital' ? '#F9F6F0' : '#1A1A1A';

  return (
    <div 
      className="inline-flex items-center gap-2 rounded-full"
      style={{ 
        backgroundColor: config.color,
        padding: sizeConfig.padding
      }}
    >
      {showIcon && (
        <IconComponent 
          size={sizeConfig.iconSize} 
          color={textColor} 
          opacity={1} 
          strokeWidth={1.5} 
        />
      )}
      <span style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize: sizeConfig.fontSize,
        fontWeight: '600',
        color: textColor
      }}>
        {config.name}
      </span>
    </div>
  );
}
