/**
 * ========================================
 * HØLY™ LABEL SYSTEM v1.0 — hølymist™
 * ========================================
 * 
 * Definitive label design for Ritual Aftercare™ flagship product.
 * This design establishes the visual language for all HØLY physical product labels.
 * 
 * DESIGN PHILOSOPHY:
 * - Sacred minimalism: Every element serves purpose, nothing extraneous
 * - Typographic hierarchy: Garamond for soul, Inter for clarity
 * - Ritual system color coding: Fogstone Blue for Aftercare
 * - Editorial white space: Breathe, don't crowd
 * - Premium materiality: Suggest luxury through restraint
 * 
 * LABEL STRUCTURE:
 * - Primary lockup: HØLY™ + hølymist™ + Ritual Aftercare™
 * - Functional clarity: Purpose badges + core ingredient
 * - Usage ritual: Clear, poetic instructions
 * - Regulatory foundation: Volume, SKU, compliance
 * 
 * EXPORT SPECIFICATIONS:
 * - Dimensions: 232px × 268px (editable area)
 * - Output: 300 DPI for print production
 * - Color: CMYK converted from brand palette
 * - Typography: Garamond, Inter (embed fonts)
 */

import React from 'react';
import { TM } from '../core-system';

interface HolymistLabelProps {
  /**
   * Show design guides and safe areas
   */
  showGuides?: boolean;
  
  /**
   * Scale factor for preview (1.0 = actual size)
   */
  scale?: number;
  
  /**
   * Background color (default: Ivory)
   */
  backgroundColor?: string;
}

export const HolymistLabel: React.FC<HolymistLabelProps> = ({
  showGuides = false,
  scale = 1.0,
  backgroundColor = '#F9F6F0'
}) => {
  // Label dimensions (SelfNamed container editable area)
  const LABEL_WIDTH = 232;
  const LABEL_HEIGHT = 268;
  
  // Ritual system color (Ritual Aftercare™)
  const RITUAL_COLOR = '#AAB5B2'; // Fogstone Blue
  
  return (
    <div
      style={{
        width: `${LABEL_WIDTH}px`,
        height: `${LABEL_HEIGHT}px`,
        backgroundColor,
        position: 'relative',
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        overflow: 'hidden'
      }}
    >
      {/* Design Guides (optional) */}
      {showGuides && (
        <>
          {/* Safe margin guides - 12px inset */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              right: '12px',
              bottom: '12px',
              border: '1px dashed rgba(26, 26, 26, 0.2)',
              pointerEvents: 'none'
            }}
          />
          {/* Center guides */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              width: '1px',
              height: '100%',
              backgroundColor: 'rgba(26, 26, 26, 0.1)',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              width: '100%',
              height: '1px',
              backgroundColor: 'rgba(26, 26, 26, 0.1)',
              pointerEvents: 'none'
            }}
          />
        </>
      )}

      {/* Label Content */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: '20px 16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {/* TOP SECTION: Brand Identity */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          {/* HØLY™ Brand Mark */}
          <div
            style={{
              fontFamily: 'Garamond, serif',
              fontSize: '22px',
              color: '#1A1A1A',
              fontWeight: '500',
              letterSpacing: '0.02em',
              textAlign: 'center'
            }}
          >
            HØLY<TM variant="logo" />
          </div>

          {/* Ritual System Color Accent Line */}
          <div
            style={{
              width: '32px',
              height: '2px',
              backgroundColor: RITUAL_COLOR,
              borderRadius: '1px'
            }}
          />

          {/* Product Name — hølymist™ */}
          <div
            style={{
              fontFamily: 'Garamond, serif',
              fontSize: '32px',
              color: '#1A1A1A',
              fontWeight: '500',
              letterSpacing: '-0.01em',
              textAlign: 'center',
              lineHeight: '1.1'
            }}
          >
            hølymist<TM />
          </div>

          {/* Ritual System Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 12px',
              backgroundColor: RITUAL_COLOR,
              borderRadius: '12px'
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                color: '#FFFFFF',
                fontWeight: '500',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              Ritual Aftercare<TM />
            </span>
          </div>
        </div>

        {/* MIDDLE SECTION: Function & Purpose */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            margin: '8px 0'
          }}
        >
          {/* Purpose Badges */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center'
            }}
          >
            {['Cleanse', 'Hydrate'].map((purpose) => (
              <div
                key={purpose}
                style={{
                  padding: '3px 10px',
                  border: `1px solid ${RITUAL_COLOR}`,
                  borderRadius: '8px',
                  backgroundColor: 'rgba(170, 181, 178, 0.08)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9px',
                    color: '#1A1A1A',
                    fontWeight: '500',
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase'
                  }}
                >
                  {purpose}
                </span>
              </div>
            ))}
          </div>

          {/* Core Material */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              color: '#1A1A1A',
              opacity: 0.7,
              textAlign: 'center',
              lineHeight: '1.4',
              margin: 0,
              maxWidth: '180px'
            }}
          >
            0.9% sterile saline solution
          </p>

          {/* Functional Description */}
          <p
            style={{
              fontFamily: 'Garamond, serif',
              fontSize: '13px',
              color: '#1A1A1A',
              opacity: 0.8,
              textAlign: 'center',
              lineHeight: '1.5',
              margin: 0,
              maxWidth: '190px',
              fontStyle: 'italic'
            }}
          >
            Gently cleanses and hydrates fresh piercings with ultra-fine mist
          </p>
        </div>

        {/* BOTTOM SECTION: Usage Ritual + Regulatory */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          {/* Usage Ritual */}
          <div
            style={{
              textAlign: 'center'
            }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '9px',
                color: '#1A1A1A',
                opacity: 0.5,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                margin: '0 0 4px 0'
              }}
            >
              Daily Ritual
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: '#1A1A1A',
                opacity: 0.75,
                lineHeight: '1.4',
                margin: 0
              }}
            >
              Spray 2–3 times daily onto piercing
            </p>
          </div>

          {/* Regulatory Foundation */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              paddingTop: '8px',
              borderTop: `1px solid rgba(26, 26, 26, 0.1)`
            }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                color: '#1A1A1A',
                opacity: 0.6,
                margin: 0
              }}
            >
              100mL / 3.38 fl oz
            </p>
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: '8px',
                color: '#1A1A1A',
                opacity: 0.4,
                letterSpacing: '0.02em',
                margin: 0
              }}
            >
              HOLY-AFT-001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolymistLabel;
