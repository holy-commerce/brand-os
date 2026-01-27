import { Badge } from '../ui/badge';
import { HOLYMoon, HOLYDroplet, HOLYZap, HOLYFlame, HOLYSparkle } from '../icons/HOLYIcons';

/**
 * ⚠️ DEPRECATED COMPONENTS
 * 
 * This file contains DEPRECATED badge components.
 * 
 * Use the unified Label System instead:
 * - import { MetadataLabel } from '../core-system/LabelSystem'
 * 
 * Migration Guide:
 * - NewBadge → <MetadataLabel type="New" size="sm" showIcon={true} />
 * - RitualEssentialBadge → <MetadataLabel type="Ritual Essential" size="sm" />
 * - SaleBadge → <MetadataLabel type="Limited" size="sm" />
 * - StudioExclusiveBadge → <MetadataLabel type="Limited" size="sm" />
 * - GoingFastBadge → <MetadataLabel type="Low Stock" size="sm" />
 * - LowStockBadge → <MetadataLabel type="Low Stock" size="sm" />
 * - BackInStockBadge → <MetadataLabel type="Back in Stock" size="sm" />
 * 
 * See /guidelines/label-system-migration-nov13-2025.md for complete migration guide.
 */

// HØLY Product Indicator Badges
// ⚠️ DEPRECATED - Use MetadataLabel from core-system instead

export function NewBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: '#D9C4BB',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <HOLYMoon size={14} color="#1A1A1A" strokeWidth={1.5} />
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#1A1A1A',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          New
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          Fresh to the altar.
        </p>
      </div>
    </div>
  );
}

export function BackInStockBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: '#AAB5B2',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#F9F6F0',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Back in Stock
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          Returned to ritual.
        </p>
      </div>
    </div>
  );
}

export function LowStockBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: '#9C887A',
          color: '#F9F6F0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <HOLYZap size={14} color="#1A1A1A" />
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#F9F6F0',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Low Stock
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          The sacred is fleeting.
        </p>
      </div>
    </div>
  );
}

export function SellingFastBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}
      >
        <HOLYFlame size={14} color="#F9F6F0" />
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#F9F6F0',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Selling Fast
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          Desired. Claimed. Moving quickly.
        </p>
      </div>
    </div>
  );
}

export function LimitedReleaseBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: 'transparent',
          border: '1.5px solid #D9C4BB',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}
      >
        <HOLYMoon size={14} color="#1A1A1A" />
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#1A1A1A',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Limited Release
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          For this moon only.
        </p>
      </div>
    </div>
  );
}

export function OnlineOnlyBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: 'transparent',
          border: '1.5px solid #F9F6F0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#AAB5B2',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Online Only
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          Only through the temple.
        </p>
      </div>
    </div>
  );
}

export function RitualFavoriteBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: '#AAB5B2',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#F9F6F0',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Ritual Favorite
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          Chosen again and again.
        </p>
      </div>
    </div>
  );
}

export function ComingSoonBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: 'rgba(26,26,26,0.1)',
          border: '1px solid rgba(26,26,26,0.15)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#1A1A1A',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em',
          opacity: 0.8
        }}>
          Coming Soon
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          Preparing for devotion.
        </p>
      </div>
    </div>
  );
}

export function CompleteRitualBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: '#9C887A',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#F9F6F0',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Complete Your Ritual
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          The ritual awaits completion.
        </p>
      </div>
    </div>
  );
}

export function RitualSetBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: '#AAB5B2',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <HOLYDroplet size={14} color="#1A1A1A" strokeWidth={1.5} />
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#F9F6F0',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Ritual Set
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          Complete your care. Begin the full rite.
        </p>
      </div>
    </div>
  );
}

export function RitualEssentialBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: '#AAB5B2',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <HOLYSparkle size={14} color="#F9F6F0" strokeWidth={1.5} />
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#F9F6F0',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Ritual Essential
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          Core to the practice.
        </p>
      </div>
    </div>
  );
}

export function StudioExclusiveBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: 'transparent',
          border: '1.5px solid #1A1A1A',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}
      >
        <HOLYMoon size={14} color="#1A1A1A" strokeWidth={1.5} />
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#1A1A1A',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Studio Exclusive
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          For the hands that heal. Studio partner ritual.
        </p>
      </div>
    </div>
  );
}

export function GoingFastBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2 animate-pulse"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 0 24px rgba(26,26,26,0.15)'
        }}
      >
        <HOLYFlame size={14} color="#F9F6F0" strokeWidth={1.5} />
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#F9F6F0',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Going Fast
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          Desired. Claimed. Moving quickly.
        </p>
      </div>
    </div>
  );
}

export function SaleBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: '#9C887A',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#F9F6F0',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Sale
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          Sacred care, now within reach.
        </p>
      </div>
    </div>
  );
}

export function AutoRitualBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: '#D9C4BB',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#1A1A1A',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Auto-Ritual™
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          Repeat the sacred. Delivered regularly.
        </p>
      </div>
    </div>
  );
}

export function StudioOnlyBadge() {
  return (
    <div className="group relative inline-block">
      <div 
        className="px-3 py-1.5 rounded-full inline-flex items-center gap-2"
        style={{ 
          backgroundColor: 'transparent',
          border: '1.5px solid #1A1A1A',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#1A1A1A',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Studio Only
        </p>
      </div>
      <div 
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{ 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#F9F6F0',
          fontStyle: 'italic',
          margin: 0 
        }}>
          For the hands that heal. Studio partner ritual.
        </p>
      </div>
    </div>
  );
}

// Compact versions for tighter spaces
export function NewBadgeCompact() {
  return (
    <div 
      className="px-2 py-1 rounded inline-flex items-center gap-1.5"
      style={{ 
        backgroundColor: '#D9C4BB'
      }}
    >
      <HOLYMoon size={12} color="#1A1A1A" strokeWidth={1.5} />
      <p style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize: '11px', 
        color: '#1A1A1A',
        fontWeight: '600',
        margin: 0,
        letterSpacing: '0.02em'
      }}>
        New
      </p>
    </div>
  );
}

export function LowStockBadgeCompact() {
  return (
    <div 
      className="px-2 py-1 rounded inline-flex items-center gap-1.5"
      style={{ 
        backgroundColor: '#9C887A'
      }}
    >
      <HOLYZap size={12} color="#F9F6F0" />
      <p style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize: '11px', 
        color: '#F9F6F0',
        fontWeight: '600',
        margin: 0,
        letterSpacing: '0.02em'
      }}>
        Low Stock
      </p>
    </div>
  );
}

export function SellingFastBadgeCompact() {
  return (
    <div 
      className="px-2 py-1 rounded inline-flex items-center gap-1.5"
      style={{ 
        backgroundColor: '#1A1A1A'
      }}
    >
      <HOLYFlame size={12} color="#F9F6F0" />
      <p style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize: '11px', 
        color: '#F9F6F0',
        fontWeight: '600',
        margin: 0,
        letterSpacing: '0.02em'
      }}>
        Selling Fast
      </p>
    </div>
  );
}
