/**
 * ========================================
 * HØLY™ LABEL SYSTEM v3.0 — hølymist™
 * Premium Front-Facing Container Label
 * ========================================
 * 
 * Elevated luxury label for 100mL SelfNamed bottle.
 * Inspired by Violet Grey, CAP Beauty, and Goop aesthetics.
 * 
 * DESIGN SPECIFICATIONS:
 * - Container: 100mL SelfNamed bottle (front-facing)
 * - Label area: Blue boundary overlay (safe print zone)
 * - Center alignment: Green vertical guide line
 * - Typography: Garamond (Canela/Tiempos equivalent) + Inter
 * - Finish: Matte parchment with simulated spot gloss + blind emboss
 * - System marker: Ash green (#AAB5A2) thin bar at bottom edge
 * 
 * CONTENT HIERARCHY (Top → Bottom):
 * 1. HØLY™ logomark — Embossed white-on-white with soft shadow
 * 2. hølymist™ — Large serif, simulated spot gloss
 * 3. MICROBIOME PREBIOTICS FACE MIST — Letterspaced caps descriptor
 * 4. "A gentle veil of microbiome wisdom" — Poetic line, italic
 * 5. "Tend to your temple with intention" — Intention statement
 * 6. SACRED BOTANICALS: Aloe · Rose Water · Green Tea · Prebiotics
 * 7. System marker bar (Ritual Aftercare™ — ash green)
 * 
 * TRADEMARK POSITIONING:
 * - Size: 12% of parent font size (barely perceptible)
 * - Position: translateY(-0.5em) — top-aligned, just above cap height
 * - Opacity: 70% for subtle premium presence
 * - Spacing: 0.03em left margin
 * 
 * MATERIALS (SIMULATED):
 * - Matte parchment paper stock (#F9F6F0 warm ivory)
 * - Spot gloss on product name (filter effects)
 * - Blind emboss on HØLY logo (white-on-white with shadow)
 * - Subtle noise texture overlay (3% opacity)
 */

import React from 'react';
import { TM } from '../core-system';

interface HolymistLabelV3Props {
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
   * Enable blind emboss effect simulation on HØLY logo
   */
  enableEmboss?: boolean;
  
  /**
   * Enable subtle parchment texture noise
   */
  enableTexture?: boolean;
}

export const HolymistLabelV3: React.FC<HolymistLabelV3Props> = ({
  showGuides = false,
  scale = 1.0,
  enableSpotGloss = true,
  enableEmboss = true,
  enableTexture = true
}) => {
  // Label dimensions (SelfNamed 100mL bottle editable area)
  const LABEL_WIDTH = 232;
  const LABEL_HEIGHT = 268;
  
  // Safe margins (minimum 10% on all sides for breathing room)
  const SAFE_MARGIN_TOP = 32;
  const SAFE_MARGIN_BOTTOM = 24;
  const SAFE_MARGIN_HORIZONTAL = 22;
  
  // Ritual Aftercare™ system color (Ash Green / Fogstone Blue)
  const SYSTEM_COLOR = '#AAB5A2';
  
  // Background (warm ivory parchment)
  const BACKGROUND = '#F9F6F0';
  
  // Rich black for premium typography
  const TEXT_PRIMARY = '#1A1A1A';
  const TEXT_SECONDARY = '#4D4D4D';
  
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
        // Simulate matte parchment texture with subtle noise
        ...(enableTexture && {
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")'
        })
      }}
    >
      {/* ========================================
          DESIGN GUIDES (Blue Boundary + Green Center Line)
          ======================================== */}
      {showGuides && (
        <>
          {/* Blue Label Area Boundary */}
          <div
            style={{
              position: 'absolute',
              top: '18px',
              left: '18px',
              right: '18px',
              bottom: '18px',
              border: '2px solid #4A90E2',
              pointerEvents: 'none',
              zIndex: 1000,
              opacity: 0.5
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
              zIndex: 1000,
              opacity: 0.6
            }}
          />
          
          {/* Center Line Annotation */}
          <div
            style={{
              position: 'absolute',
              top: '6px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '7px',
              color: '#4CAF50',
              fontFamily: 'monospace',
              fontWeight: '600',
              pointerEvents: 'none',
              zIndex: 1000,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '2px 4px',
              borderRadius: '2px'
            }}
          >
            Center text on this line (green)
          </div>
        </>
      )}

      {/* ========================================
          SYSTEM MARKER BAR (Bottom Edge)
          ======================================== */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '3px',
          backgroundColor: SYSTEM_COLOR,
          opacity: 0.8
        }}
      />

      {/* ========================================
          MAIN LABEL CONTENT STACK
          ======================================== */}
      <div
        style={{
          position: 'absolute',
          top: SAFE_MARGIN_TOP,
          left: SAFE_MARGIN_HORIZONTAL,
          right: SAFE_MARGIN_HORIZONTAL,
          bottom: SAFE_MARGIN_BOTTOM,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* ========================================
            1. HØLY™ LOGOMARK (Blind Emboss Effect)
            ======================================== */}
        <div
          style={{
            fontFamily: 'Garamond, "EB Garamond", "Libre Baskerville", "Cormorant Garamond", serif',
            fontSize: '16px',
            fontWeight: '500',
            letterSpacing: '0.1em',
            textAlign: 'center',
            color: enableEmboss ? 'rgba(249, 246, 240, 0.98)' : TEXT_PRIMARY,
            // Blind emboss: white-on-white with subtle shadow for depth
            textShadow: enableEmboss 
              ? '1px 1px 0px rgba(0, 0, 0, 0.06), -0.5px -0.5px 0px rgba(255, 255, 255, 0.8)'
              : 'none',
            opacity: enableEmboss ? 0.85 : 1,
            marginBottom: '24px'
          }}
        >
          HØLY<TM variant="logo" />
        </div>

        {/* ========================================
            2. PRODUCT NAME — hølymist™ (Spot Gloss)
            ======================================== */}
        <div
          style={{
            fontFamily: 'Garamond, "EB Garamond", "Libre Baskerville", "Cormorant Garamond", serif',
            fontSize: '48px',
            fontWeight: '500',
            letterSpacing: '-0.015em',
            textAlign: 'center',
            lineHeight: '1.0',
            color: TEXT_PRIMARY,
            marginBottom: '8px',
            // Spot gloss simulation: subtle sheen with enhanced contrast
            ...(enableSpotGloss && {
              textShadow: '0px 1px 3px rgba(0, 0, 0, 0.12)',
              filter: 'brightness(1.03) contrast(1.08)'
            })
          }}
        >
          hølymist<TM />
        </div>

        {/* ========================================
            3. DESCRIPTOR (All Caps, Letterspaced)
            ======================================== */}
        <div
          style={{
            fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
            fontSize: '8.5px',
            fontWeight: '600',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            textAlign: 'center',
            color: TEXT_PRIMARY,
            opacity: 0.6,
            lineHeight: '1.3',
            marginBottom: '22px'
          }}
        >
          MICROBIOME PREBIOTICS FACE MIST
        </div>

        {/* ========================================
            4. POETIC LINE (Italic, Centered)
            ======================================== */}
        <p
          style={{
            fontFamily: 'Garamond, "EB Garamond", "Libre Baskerville", "Cormorant Garamond", serif',
            fontSize: '14px',
            fontWeight: '400',
            fontStyle: 'italic',
            textAlign: 'center',
            lineHeight: '1.65',
            color: TEXT_PRIMARY,
            opacity: 0.72,
            margin: '0 0 14px 0',
            maxWidth: '165px'
          }}
        >
          A gentle veil of microbiome wisdom
        </p>

        {/* ========================================
            5. INTENTION LINE (Clean Sans)
            ======================================== */}
        <p
          style={{
            fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
            fontSize: '11px',
            fontWeight: '400',
            textAlign: 'center',
            lineHeight: '1.5',
            color: TEXT_PRIMARY,
            opacity: 0.62,
            margin: '0 0 20px 0',
            maxWidth: '170px'
          }}
        >
          Tend to your temple with intention
        </p>

        {/* Flexible spacer to push botanicals to bottom */}
        <div style={{ flex: 1, minHeight: '16px' }} />

        {/* ========================================
            6. SACRED BOTANICALS (Bottom Section)
            ======================================== */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '7px',
            paddingTop: '14px',
            borderTop: '1px solid rgba(26, 26, 26, 0.08)',
            width: '100%',
            marginBottom: '10px'
          }}
        >
          <span
            style={{
              fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
              fontSize: '7px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: TEXT_PRIMARY,
              opacity: 0.48
            }}
          >
            SACRED BOTANICALS
          </span>
          <p
            style={{
              fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
              fontSize: '9.5px',
              fontWeight: '300',
              textAlign: 'center',
              lineHeight: '1.55',
              color: TEXT_SECONDARY,
              margin: 0,
              letterSpacing: '0.005em',
              opacity: 0.9
            }}
          >
            Aloe · Rose Water · Green Tea · Prebiotics
          </p>
        </div>

        {/* ========================================
            VOLUME (Small, Bottom Corner)
            ======================================== */}
        <div
          style={{
            fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
            fontSize: '8px',
            fontWeight: '400',
            color: TEXT_PRIMARY,
            opacity: 0.38,
            letterSpacing: '0.02em',
            marginTop: '6px'
          }}
        >
          100mL / 3.38 fl oz
        </div>
      </div>
    </div>
  );
};

export default HolymistLabelV3;
