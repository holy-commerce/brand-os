/**
 * ========================================
 * HØLY™ LABEL SYSTEM v2.0 — hølymist™
 * Front-Facing Container Label (Premium Edition)
 * ========================================
 * 
 * Premium front-facing container label for 100mL SelfNamed bottle.
 * Elevated luxury aesthetic inspired by Violet Grey, CAP Beauty, and Goop.
 * 
 * DESIGN SPECIFICATIONS:
 * - Container: 100mL SelfNamed bottle
 * - Label area: Blue boundary overlay (safe print zone)
 * - Center alignment: Green vertical guide line
 * - Typography: High-end serif (Garamond as Canela/Tiempos equivalent)
 * - Finish: Simulated matte parchment with spot gloss + blind emboss
 * - System marker: Ash green (#AAB5A2) bar at bottom
 * 
 * CONTENT HIERARCHY:
 * 1. HØLY™ logomark (embossed, white-on-white with shadow)
 * 2. hølymist™ product name (spot gloss simulation)
 * 3. MICROBIOME PREBIOTICS FACE MIST (descriptor, letterspaced caps)
 * 4. "A gentle veil of microbiome wisdom" (poetic line, italic)
 * 5. "Tend to your temple with intention" (intention statement)
 * 6. SACRED BOTANICALS section
 * 7. System marker bar (Ritual Aftercare™)
 * 
 * TRADEMARK POSITIONING:
 * - Size: 12% of product name height
 * - Position: Top-aligned, optically just above cap height
 * - Opacity: 70% for subtle premium presence
 */

import React from 'react';
import { TM } from '../core-system';

interface HolymistLabelV2Props {
  /**
   * Show design guides (blue boundary, green center line)
   */
  showGuides?: boolean;
  
  /**
   * Scale factor for preview (1.0 = actual size)
   */
  scale?: number;
  
  /**
   * Enable spot gloss effect simulation on product name
   */
  enableSpotGloss?: boolean;
  
  /**
   * Enable emboss effect simulation on logo
   */
  enableEmboss?: boolean;
}

export const HolymistLabelV2: React.FC<HolymistLabelV2Props> = ({
  showGuides = false,
  scale = 1.0,
  enableSpotGloss = true,
  enableEmboss = true
}) => {
  // Label dimensions (SelfNamed container editable area)
  const LABEL_WIDTH = 232;
  const LABEL_HEIGHT = 268;
  
  // Safe margins (10% minimum on all sides)
  const SAFE_MARGIN_TOP = 28;
  const SAFE_MARGIN_BOTTOM = 20;
  const SAFE_MARGIN_HORIZONTAL = 20;
  
  // Ritual system color (Ritual Aftercare™ — Ash Green)
  const SYSTEM_COLOR = '#AAB5A2';
  
  // Background (warm ivory parchment)
  const BACKGROUND = '#F9F6F0';
  
  return (
    <div
      style={{
        width: `${LABEL_WIDTH}px`,
        height: `${LABEL_HEIGHT}px`,
        backgroundColor: BACKGROUND,
        position: 'relative',
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        overflow: 'hidden',
        // Simulate matte parchment texture
        backgroundImage: enableEmboss 
          ? 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")'
          : 'none'
      }}
    >
      {/* Design Guides (Blue boundary + Green center line) */}
      {showGuides && (
        <>
          {/* Blue Label Area Boundary */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              right: '16px',
              bottom: '16px',
              border: '2px solid #4A90E2',
              pointerEvents: 'none',
              zIndex: 1000
            }}
          />
          
          {/* Green Vertical Center Line */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              width: '2px',
              height: '100%',
              backgroundColor: '#4CAF50',
              pointerEvents: 'none',
              zIndex: 1000
            }}
          />
          
          {/* Label annotation */}
          <div
            style={{
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '8px',
              color: '#4CAF50',
              fontFamily: 'monospace',
              pointerEvents: 'none',
              zIndex: 1000
            }}
          >
            Center text on this line (green)
          </div>
        </>
      )}

      {/* System Marker Bar (Bottom) */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '4px',
          backgroundColor: SYSTEM_COLOR
        }}
      />

      {/* Main Label Content Stack */}
      <div
        style={{
          position: 'absolute',
          top: SAFE_MARGIN_TOP,
          left: SAFE_MARGIN_HORIZONTAL,
          right: SAFE_MARGIN_HORIZONTAL,
          bottom: SAFE_MARGIN_BOTTOM,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        {/* 1. HØLY™ LOGOMARK (Embossed) */}
        <div
          style={{
            fontFamily: 'Garamond, "EB Garamond", "Libre Baskerville", serif',
            fontSize: '18px',
            fontWeight: '500',
            letterSpacing: '0.08em',
            textAlign: 'center',
            color: enableEmboss ? 'rgba(249, 246, 240, 0.95)' : '#1A1A1A',
            textShadow: enableEmboss 
              ? '1px 1px 0px rgba(0, 0, 0, 0.08), -1px -1px 0px rgba(255, 255, 255, 0.5)'
              : 'none',
            opacity: enableEmboss ? 0.9 : 1,
            paddingBottom: '12px'
          }}
        >
          HØLY<TM variant="logo" />
        </div>

        {/* 2. PRODUCT NAME — hølymist™ (Spot Gloss) */}
        <div
          style={{
            fontFamily: 'Garamond, "EB Garamond", "Libre Baskerville", serif',
            fontSize: '42px',
            fontWeight: '500',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            lineHeight: '1.0',
            color: '#1A1A1A',
            // Spot gloss simulation
            ...(enableSpotGloss && {
              textShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
              filter: 'brightness(1.05) contrast(1.1)'
            })
          }}
        >
          hølymist<TM />
        </div>

        {/* 3. DESCRIPTOR (All Caps, Letterspaced) */}
        <div
          style={{
            fontFamily: 'Inter, "Helvetica Neue", sans-serif',
            fontSize: '9px',
            fontWeight: '500',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textAlign: 'center',
            color: '#1A1A1A',
            opacity: 0.65,
            lineHeight: '1.3',
            paddingTop: '4px'
          }}
        >
          MICROBIOME PREBIOTICS FACE MIST
        </div>

        {/* Spacer */}
        <div style={{ height: '8px' }} />

        {/* 4. POETIC LINE (Italic, Centered) */}
        <p
          style={{
            fontFamily: 'Garamond, "EB Garamond", "Libre Baskerville", serif',
            fontSize: '13px',
            fontWeight: '400',
            fontStyle: 'italic',
            textAlign: 'center',
            lineHeight: '1.6',
            color: '#1A1A1A',
            opacity: 0.75,
            margin: 0,
            maxWidth: '170px'
          }}
        >
          A gentle veil of microbiome wisdom
        </p>

        {/* 5. INTENTION LINE (Clean Sans) */}
        <p
          style={{
            fontFamily: 'Inter, "Helvetica Neue", sans-serif',
            fontSize: '11px',
            fontWeight: '400',
            textAlign: 'center',
            lineHeight: '1.5',
            color: '#1A1A1A',
            opacity: 0.65,
            margin: 0,
            paddingTop: '4px'
          }}
        >
          Tend to your temple with intention
        </p>

        {/* Spacer */}
        <div style={{ flex: 1, minHeight: '12px' }} />

        {/* 6. SACRED BOTANICALS */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            paddingTop: '12px',
            borderTop: '1px solid rgba(26, 26, 26, 0.08)',
            width: '100%'
          }}
        >
          <span
            style={{
              fontFamily: 'Inter, "Helvetica Neue", sans-serif',
              fontSize: '7px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#1A1A1A',
              opacity: 0.5
            }}
          >
            SACRED BOTANICALS
          </span>
          <p
            style={{
              fontFamily: 'Inter, "Helvetica Neue", sans-serif',
              fontSize: '9px',
              fontWeight: '300',
              textAlign: 'center',
              lineHeight: '1.5',
              color: '#4D4D4D',
              margin: 0,
              letterSpacing: '0.01em'
            }}
          >
            Aloe · Rose Water · Green Tea · Prebiotics
          </p>
        </div>

        {/* Volume (Small, Bottom) */}
        <div
          style={{
            fontFamily: 'Inter, "Helvetica Neue", sans-serif',
            fontSize: '8px',
            fontWeight: '400',
            color: '#1A1A1A',
            opacity: 0.4,
            letterSpacing: '0.02em',
            paddingTop: '8px'
          }}
        >
          100mL / 3.38 fl oz
        </div>
      </div>
    </div>
  );
};

export default HolymistLabelV2;
