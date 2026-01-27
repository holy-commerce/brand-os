/**
 * HØLY™ / CORE SYSTEM COMPONENTS / Label System
 * 
 * LOCKED COMPONENT - DO NOT DETACH OR REGENERATE
 * 
 * Universal label system enforcing consistency across all product tagging,
 * iconography, and metadata blocks. Mobile-first, ADA compliant, responsive.
 * 
 * Label Categories:
 * - Purpose Categories (CLEANSE, PREP, HYDRATE, PROTECT, TREAT)
 * - Time-of-Day Categories (Morning, Evening, Ritual)
 * - Ritual System Labels (Aftercare™, Renewal™, Touch™, Union™, Vital™)
 * - Metadata Labels (New, Bestseller, Limited, Sold Out, etc.)
 * 
 * Date: November 13, 2025
 * Version: 2.0
 */

import { 
  HOLYDroplet, HOLYFlower, HOLYLeaf, HOLYWave, HOLYSparkle,
  HOLYSun, HOLYMoon, HOLYCircle
} from '../icons/HOLYIcons';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export type PurposeCategory = 'Cleanse' | 'Prep' | 'Hydrate' | 'Protect' | 'Treat';
export type TimeCategory = 'Morning' | 'Evening' | 'Ritual';
export type RitualSystem = 'aftercare' | 'renewal' | 'touch' | 'union' | 'vital';
export type MetadataType = 'New' | 'Bestseller' | 'Limited' | 'Coming Soon' | 'Sold Out' | 'Ritual Essential' | 'Low Stock' | 'Back in Stock';

interface BaseLabelProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

interface PurposeLabelProps extends BaseLabelProps {
  purpose: PurposeCategory;
}

interface TimeLabelProps extends BaseLabelProps {
  time: TimeCategory;
}

interface RitualSystemLabelProps extends BaseLabelProps {
  system: RitualSystem | string;
  showIcon?: boolean;
}

interface MetadataLabelProps extends BaseLabelProps {
  type: MetadataType;
  showIcon?: boolean;
}

// ============================================================================
// CONFIGURATION MAPS
// ============================================================================

const PURPOSE_CONFIG: Record<PurposeCategory, { color: string; description: string }> = {
  'Cleanse': {
    color: '#AAB5B2', // Fogstone Blue
    description: 'Removes impurities, resets skin or body'
  },
  'Prep': {
    color: '#D9C4BB', // Veil Clay
    description: 'Tones, balances pH, primes skin or tools'
  },
  'Hydrate': {
    color: '#5E6458', // Relic Green
    description: 'Moisturizes, supports skin barrier, softens'
  },
  'Protect': {
    color: '#D7D0C5', // Limestone Oat
    description: 'Shields from UV, friction, or pollutants'
  },
  'Treat': {
    color: '#9C887A', // Smoky Umber
    description: 'Delivers actives, heals, corrects, or regenerates'
  }
};

const TIME_CONFIG: Record<TimeCategory, { icon: any; color: string }> = {
  'Morning': {
    icon: HOLYSun,
    color: '#F9F6F0'
  },
  'Evening': {
    icon: HOLYMoon,
    color: '#F9F6F0'
  },
  'Ritual': {
    icon: HOLYCircle,
    color: '#F9F6F0'
  }
};

const RITUAL_SYSTEMS_CONFIG = {
  aftercare: {
    name: 'Ritual Aftercare™',
    color: '#AAB5B2', // Fogstone Blue
    icon: HOLYDroplet,
    textColor: '#1A1A1A'
  },
  renewal: {
    name: 'Ritual Renewal™',
    color: '#D9C4BB', // Veil Clay
    icon: HOLYFlower,
    textColor: '#1A1A1A'
  },
  touch: {
    name: 'Ritual Touch™',
    color: '#5E6458', // Relic Green
    icon: HOLYLeaf,
    textColor: '#F9F6F0' // White text for WCAG compliance
  },
  union: {
    name: 'Ritual Union™',
    color: '#D7D0C5', // Limestone Oat
    icon: HOLYWave,
    textColor: '#1A1A1A'
  },
  vital: {
    name: 'Ritual Vital™',
    color: '#9C887A', // Smoky Umber
    icon: HOLYSparkle,
    textColor: '#F9F6F0' // White text for WCAG compliance
  }
};

const METADATA_CONFIG: Record<MetadataType, { bgColor: string; textColor: string; icon?: any }> = {
  'New': {
    bgColor: '#D9C4BB',
    textColor: '#1A1A1A',
    icon: HOLYSparkle
  },
  'Bestseller': {
    bgColor: '#1A1A1A',
    textColor: '#F9F6F0'
  },
  'Limited': {
    bgColor: '#9C887A',
    textColor: '#F9F6F0'
  },
  'Coming Soon': {
    bgColor: '#AAB5B2',
    textColor: '#1A1A1A'
  },
  'Sold Out': {
    bgColor: '#8C8981',
    textColor: '#F9F6F0'
  },
  'Ritual Essential': {
    bgColor: '#1A1A1A',
    textColor: '#F9F6F0'
  },
  'Low Stock': {
    bgColor: '#9C887A',
    textColor: '#F9F6F0'
  },
  'Back in Stock': {
    bgColor: '#AAB5B2',
    textColor: '#1A1A1A'
  }
};

// ============================================================================
// SIZE CONFIGURATIONS
// ============================================================================

const SIZE_CONFIG = {
  sm: {
    padding: '4px 10px',
    fontSize: '11px',
    iconSize: 12,
    gap: '4px'
  },
  md: {
    padding: '6px 12px',
    fontSize: '13px',
    iconSize: 14,
    gap: '6px'
  },
  lg: {
    padding: '8px 16px',
    fontSize: '14px',
    iconSize: 16,
    gap: '8px'
  }
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function normalizeSystemKey(system: string): RitualSystem | null {
  if (system in RITUAL_SYSTEMS_CONFIG) {
    return system as RitualSystem;
  }
  
  const match = system.match(/Ritual\s+(Aftercare|Renewal|Touch|Union|Vital)/i);
  if (match) {
    return match[1].toLowerCase() as RitualSystem;
  }
  
  return null;
}

function getTextColorForBackground(bgColor: string): string {
  // Dark backgrounds need white text for WCAG compliance
  const darkBackgrounds = ['#5E6458', '#9C887A', '#1A1A1A', '#8C8981'];
  return darkBackgrounds.includes(bgColor) ? '#F9F6F0' : '#1A1A1A';
}

// ============================================================================
// LABEL COMPONENTS
// ============================================================================

/**
 * PURPOSE LABEL
 * Refined pill badge for product purpose classification
 * Subtle color-coded styling with proper WCAG contrast
 */
export function PurposeLabel({ purpose, size = 'md', className = '' }: PurposeLabelProps) {
  const config = PURPOSE_CONFIG[purpose];
  const sizeConfig = SIZE_CONFIG[size];
  const textColor = getTextColorForBackground(config.color);
  
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full ${className}`}
      style={{
        backgroundColor: config.color,
        padding: sizeConfig.padding,
        fontFamily: 'Inter, sans-serif',
        fontSize: sizeConfig.fontSize,
        fontWeight: '500',
        color: textColor,
        letterSpacing: '0.3px'
      }}
      title={config.description}
    >
      {purpose}
    </div>
  );
}

/**
 * TIME LABEL
 * Icon + text label for time-of-day classification
 * Uses 2D line-art HOLY icons only
 */
export function TimeLabel({ time, size = 'md', className = '' }: TimeLabelProps) {
  const config = TIME_CONFIG[time];
  const sizeConfig = SIZE_CONFIG[size];
  const IconComponent = config.icon;
  
  return (
    <div
      className={`inline-flex items-center rounded-full ${className}`}
      style={{
        backgroundColor: config.color,
        border: '1.5px solid #DADADA',
        padding: sizeConfig.padding,
        gap: sizeConfig.gap,
        fontFamily: 'Inter, sans-serif',
        fontSize: sizeConfig.fontSize,
        fontWeight: '500',
        color: '#1A1A1A',
        letterSpacing: '0.3px'
      }}
    >
      <IconComponent size={sizeConfig.iconSize} color="#1A1A1A" strokeWidth={1.5} />
      <span>{time}</span>
    </div>
  );
}

/**
 * RITUAL SYSTEM LABEL
 * Color-coded system identifier with icon and trademark
 * Enforces proper WCAG contrast for dark system colors
 */
export function RitualSystemLabel({ 
  system, 
  size = 'md', 
  showIcon = true,
  className = '' 
}: RitualSystemLabelProps) {
  const systemKey = normalizeSystemKey(system);
  
  if (!systemKey || !RITUAL_SYSTEMS_CONFIG[systemKey]) {
    console.warn(`RitualSystemLabel: Invalid system "${system}"`);
    return null;
  }
  
  const config = RITUAL_SYSTEMS_CONFIG[systemKey];
  const sizeConfig = SIZE_CONFIG[size];
  const IconComponent = config.icon;
  
  return (
    <div
      className={`inline-flex items-center rounded-full ${className}`}
      style={{
        backgroundColor: config.color,
        padding: sizeConfig.padding,
        gap: sizeConfig.gap
      }}
    >
      {showIcon && (
        <IconComponent 
          size={sizeConfig.iconSize} 
          color={config.textColor}
          strokeWidth={1.5}
        />
      )}
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: sizeConfig.fontSize,
        fontWeight: '600',
        color: config.textColor,
        letterSpacing: '0.3px'
      }}>
        {config.name}
      </span>
    </div>
  );
}

/**
 * METADATA LABEL
 * Black/white inverted pill style for product status/metadata
 * Used for New, Bestseller, Limited, etc.
 */
export function MetadataLabel({ 
  type, 
  size = 'md', 
  showIcon = true,
  className = '' 
}: MetadataLabelProps) {
  const config = METADATA_CONFIG[type];
  const sizeConfig = SIZE_CONFIG[size];
  const IconComponent = config.icon;
  
  return (
    <div
      className={`inline-flex items-center rounded-full ${className}`}
      style={{
        backgroundColor: config.bgColor,
        padding: sizeConfig.padding,
        gap: sizeConfig.gap,
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)'
      }}
    >
      {showIcon && IconComponent && (
        <IconComponent 
          size={sizeConfig.iconSize} 
          color={config.textColor}
          strokeWidth={1.5}
        />
      )}
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: sizeConfig.fontSize,
        fontWeight: '600',
        color: config.textColor,
        letterSpacing: '0.5px'
      }}>
        {type}
      </span>
    </div>
  );
}

// ============================================================================
// COMPOUND LABEL STACK
// ============================================================================

interface LabelStackProps {
  labels: Array<{
    type: 'purpose' | 'time' | 'system' | 'metadata';
    value: any;
    showIcon?: boolean;
  }>;
  direction?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * LABEL STACK
 * Combines multiple labels with proper spacing and wrapping
 * Ensures graceful stacking on mobile breakpoints
 */
export function LabelStack({ 
  labels, 
  direction = 'horizontal', 
  size = 'md',
  className = '' 
}: LabelStackProps) {
  const gap = direction === 'horizontal' ? '8px' : '6px';
  
  return (
    <div
      className={`flex flex-wrap ${className}`}
      style={{
        gap: gap,
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        alignItems: direction === 'horizontal' ? 'center' : 'flex-start'
      }}
    >
      {labels.map((label, index) => {
        switch (label.type) {
          case 'purpose':
            return <PurposeLabel key={index} purpose={label.value} size={size} />;
          case 'time':
            return <TimeLabel key={index} time={label.value} size={size} />;
          case 'system':
            return <RitualSystemLabel key={index} system={label.value} size={size} showIcon={label.showIcon} />;
          case 'metadata':
            return <MetadataLabel key={index} type={label.value} size={size} showIcon={label.showIcon} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

// ============================================================================
// EXPORTS
// ============================================================================

export {
  PURPOSE_CONFIG,
  TIME_CONFIG,
  RITUAL_SYSTEMS_CONFIG,
  METADATA_CONFIG
};
