/**
 * ========================================
 * LABELS 2.0 — Near-Production Label Expression System
 * HØLY | Ritual Care™
 * ========================================
 * 
 * PURPOSE:
 * Near-production label expression system for HØLY | Ritual Care™
 * As close to real packaging as possible WITHOUT graphics, photography, or illustrations
 * 
 * EXPLORES:
 * - Hierarchy
 * - Typography
 * - Spacing
 * - Material treatment cues
 * - System consistency
 * 
 * SYSTEM ANCHORING:
 * All typography, color, spacing, icons, and components inherit directly from
 * HØLY Design System 2.0 roots. Uses existing tokens and styles only.
 * 
 * LABEL FRAMEWORK:
 * Modular vertical label system that scales across:
 * - 30 ml serums
 * - 50 ml creams
 * - 150 ml cleansers
 * 
 * HIERARCHY (STRICT ORDER):
 * 1. BRAND MARK — HØLY logotype at top, centered, quiet authority
 * 2. PRIMARY LABEL LINE — FUNCTION · DESCRIPTOR format
 * 3. INTENSITY INDICATOR — Minimal bar system (levels 1–3)
 * 4. TIMING STATE — Sacred Glow circular anchor (fixed height for alignment)
 * 5. FORM DESCRIPTOR — Lowercase single word (cream, serum, oil, mist)
 * 6. SUPPORT COPY — Optional 2–3 short lines (descriptive, not promissory)
 * 
 * SACRED GLOW TIMING SYSTEM:
 * - Morning: Bright yellow/gold - embossed sacred light
 * - Night: Deep dark blue - sacred depth
 * - Any/All-Day: No glow - neutral silence is the signal
 * - Glow emanates from small circular anchor element
 * - Timing communicated through presence/absence of light, not symbols
 * 
 * DESIGN PRINCIPLES:
 * - Generous negative space
 * - Lower-weighted center of gravity
 * - Typography does the work — not decoration
 * - Calm vertical rhythm
 * - Dividers used sparingly
 */

import React from 'react';
import { TM } from '../components/core-system';
import { HOLYTag } from '../components/icons/HOLYIcons';

// Label system verbs (existing system functions)
type FunctionVerb = 'CLEANSE' | 'HYDRATE' | 'RENEW' | 'RECOVER' | 'SEAL' | 'PREVENT';

// Form descriptors
type FormType = 'cream' | 'serum' | 'oil' | 'mist' | 'cleanser' | 'balm';

// Timing
type Timing = 'morning' | 'night' | 'any';

// Intensity levels
type IntensityLevel = 1 | 2 | 3;

interface LabelData {
  function: FunctionVerb;
  descriptor: string;
  intensity: IntensityLevel;
  timing: Timing;
  form: FormType;
  supportCopy?: string[];
  materialNotes?: string; // Non-exporting annotation
}

// Label examples showcasing system variation
const labelExamples: LabelData[] = [
  {
    function: 'CLEANSE',
    descriptor: 'Gentle Reset',
    intensity: 1,
    timing: 'any',
    form: 'mist',
    supportCopy: [
      'Absorbs quickly',
      'Layerable texture'
    ],
    materialNotes: 'Soft-touch label stock / Debossed HØLY mark'
  },
  {
    function: 'HYDRATE',
    descriptor: 'Deep Soak',
    intensity: 3,
    timing: 'night',
    form: 'cream',
    supportCopy: [
      'Rich, enveloping feel',
      'Overnight nourishment'
    ],
    materialNotes: 'Embossed function word / Matte finish'
  },
  {
    function: 'RENEW',
    descriptor: 'Morning Lift',
    intensity: 2,
    timing: 'morning',
    form: 'serum',
    supportCopy: [
      'Silky application',
      'Awakens complexion'
    ],
    materialNotes: 'Gold foil on intensity bar / Soft-touch paper'
  },
  {
    function: 'RECOVER',
    descriptor: 'Barrier Fortify',
    intensity: 3,
    timing: 'night',
    form: 'balm',
    supportCopy: [
      'Occlusive seal',
      'Deeply restorative'
    ],
    materialNotes: 'Silver foil on brand mark / Debossed border'
  },
  {
    function: 'SEAL',
    descriptor: 'Protective Veil',
    intensity: 2,
    timing: 'morning',
    form: 'oil',
    supportCopy: [
      'Lightweight finish',
      'Locks in hydration'
    ],
    materialNotes: 'Embossed form descriptor / Cream paper stock'
  },
  {
    function: 'PREVENT',
    descriptor: 'Daily Defense',
    intensity: 1,
    timing: 'morning',
    form: 'serum',
    supportCopy: [
      'Antioxidant shield',
      'Smooths application'
    ],
    materialNotes: 'Soft-touch label / Minimal emboss'
  },
  {
    function: 'HYDRATE',
    descriptor: 'Calm Quench',
    intensity: 1,
    timing: 'any',
    form: 'mist',
    supportCopy: [
      'Cooling sensation',
      'Instantly refreshing'
    ],
    materialNotes: 'Debossed timing icon / Natural paper stock'
  },
  {
    function: 'CLEANSE',
    descriptor: 'Purifying Ritual',
    intensity: 2,
    timing: 'any',
    form: 'cleanser',
    supportCopy: [
      'Gentle foam texture',
      'Removes without stripping'
    ],
    materialNotes: 'Embossed brand mark / Matte varnish'
  },
];

interface LabelCardProps {
  data: LabelData;
  width?: number;
}

const LabelCard: React.FC<LabelCardProps> = ({ data, width = 180 }) => {
  // Sacred Glow timing system - returns glow properties or null
  const getTimingGlow = (timing: Timing): { color: string; blur: number; opacity: number; borderColor: string; innerShadow: string } | null => {
    switch (timing) {
      case 'morning':
        // Warm amber/gold - embossed sacred light
        return {
          color: 'rgba(255, 200, 80, 1)', // Brighter warm amber
          blur: 100,
          opacity: 1,
          borderColor: '#FFB432',
          innerShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.15)'
        };
      case 'night':
        // Fogstone Blue - sacred depth (matching Getting Started page)
        return {
          color: 'rgba(170, 181, 178, 1)',
          blur: 95,
          opacity: 1,
          borderColor: '#AAB5B2',
          innerShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.15)'
        };
      case 'any':
        // No glow - neutral silence
        return null;
    }
  };

  const timingGlow = getTimingGlow(data.timing);
  
  return (
    <div
      style={{
        width: `${width}px`,
        minHeight: '280px',
        backgroundColor: '#1A1A1A', // Black background (Temple Black)
        backgroundImage: `
          radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 60%),
          radial-gradient(circle at 50% 70%, rgba(0, 0, 0, 0.4) 0%, transparent 50%)
        `,
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: 'var(--radius-sm)',
        padding: '32px 20px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        position: 'relative',
        boxShadow: `
          var(--shadow-glass),
          inset 0 1px 1px rgba(255, 255, 255, 0.05),
          inset 0 -1px 2px rgba(0, 0, 0, 0.3)
        `,
      }}
    >
      {/* Subtle texture overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 'var(--radius-sm)',
          opacity: 0.15,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />

      {/* 1. BRAND MARK */}
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '14px',
          fontWeight: '500',
          color: '#FFFFFF', // White text
          textAlign: 'center',
          letterSpacing: '0.02em',
        }}
      >
        HØLY<TM variant="logo" />
      </div>

      {/* 2. PRIMARY LABEL LINE */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          textAlign: 'center',
        }}
      >
        {/* FUNCTION */}
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            fontWeight: '600',
            color: '#FFFFFF', // White text
            textTransform: 'uppercase',
            letterSpacing: 'var(--letter-spacing-wide)',
          }}
        >
          {data.function}
        </div>

        {/* DESCRIPTOR */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '18px',
            fontWeight: '400',
            color: '#FFFFFF', // White text
            letterSpacing: '-0.01em',
          }}
        >
          {data.descriptor}
        </div>
      </div>

      {/* 3. INTENSITY INDICATOR */}
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        {[1, 2, 3].map((level) => (
          <div
            key={level}
            style={{
              width: '20px',
              height: '2px',
              background: level <= data.intensity 
                ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.7) 100%)'
                : 'rgba(255, 255, 255, 0.25)',
              borderRadius: '1px',
              boxShadow: level <= data.intensity 
                ? '0 0 4px rgba(255, 255, 255, 0.3), 0 1px 0 rgba(255, 255, 255, 0.1)'
                : 'none',
            }}
          />
        ))}
      </div>

      {/* 4. TIMING STATE — Sacred Glow circular anchor (fixed height for alignment) */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '16px', // Reserve space even when no glow
        }}
      >
        {timingGlow && (() => {
          const colorLight = timingGlow.color.replace('1)', '0.3)');
          const colorMedium = timingGlow.color.replace('1)', '0.8)');
          const colorSoft = timingGlow.color.replace('1)', '0.6)');
          
          return (
            // Circle with white center and INTENSE LAYERED glow
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: `0.5px solid ${timingGlow.borderColor}`,
                boxShadow: `
                  ${timingGlow.innerShadow},
                  0 0 25px ${timingGlow.color},
                  0 0 50px ${timingGlow.color},
                  0 0 ${timingGlow.blur}px ${timingGlow.color},
                  0 0 ${timingGlow.blur + 25}px ${colorMedium},
                  0 0 ${timingGlow.blur + 50}px ${colorSoft},
                  0 0 ${timingGlow.blur + 75}px ${colorLight}
                `,
                opacity: timingGlow.opacity,
                pointerEvents: 'none',
              }}
            />
          );
        })()}
      </div>

      {/* 5. FORM DESCRIPTOR */}
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          fontWeight: '400',
          color: '#FFFFFF', // White text
          opacity: 0.6,
          fontStyle: 'italic',
        }}
      >
        {data.form}
      </div>

      {/* 6. SUPPORT COPY (OPTIONAL) */}
      {data.supportCopy && data.supportCopy.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            textAlign: 'center',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            marginTop: 'auto',
          }}
        >
          {data.supportCopy.map((line, index) => (
            <div
              key={index}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '9px',
                fontWeight: '400',
                color: '#FFFFFF', // White text
                opacity: 0.5,
                lineHeight: '1.4',
                letterSpacing: '0.01em',
              }}
            >
              {line}
            </div>
          ))}
        </div>
      )}

      {/* MATERIAL NOTES (NON-EXPORTING ANNOTATION) */}
      {data.materialNotes && (
        <div
          style={{
            position: 'absolute',
            bottom: '-32px',
            left: '0',
            right: '0',
            fontFamily: 'var(--font-body)',
            fontSize: '9px',
            fontWeight: '400',
            color: '#1A1A1A',
            opacity: 0.4,
            textAlign: 'center',
            fontStyle: 'italic',
            padding: '0 8px',
          }}
        >
          {data.materialNotes}
        </div>
      )}
    </div>
  );
};

const Labels2Page: React.FC = () => {
  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <HOLYTag size={24} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '32px',
              fontWeight: '500',
              color: '#1A1A1A',
              margin: 0,
            }}
          >
            Labels 2.0
          </h1>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: '#1A1A1A',
            opacity: 0.6,
            margin: 0,
            maxWidth: '800px',
            lineHeight: '1.6',
          }}
        >
          Near-production label expression system for HØLY | Ritual Care<TM /> — as close to real packaging 
          as possible without graphics, photography, or illustrations. This page explores hierarchy, typography, 
          spacing, material treatment cues, and system consistency.
        </p>
      </div>

      {/* System Overview */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          border: '1px solid rgba(26, 26, 26, 0.08)',
          borderRadius: 'var(--radius-md)',
          padding: '24px',
          marginBottom: '48px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            fontWeight: '600',
            color: '#1A1A1A',
            textTransform: 'uppercase',
            letterSpacing: 'var(--letter-spacing-wide)',
            marginBottom: '16px',
          }}
        >
          System Framework
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: '#1A1A1A',
          }}
        >
          <div>
            <div style={{ fontWeight: '600', marginBottom: '6px', opacity: 0.7 }}>Label Hierarchy</div>
            <div style={{ opacity: 0.5, lineHeight: '1.5', fontSize: '12px' }}>
              1. Brand Mark<br />
              2. Function · Descriptor<br />
              3. Intensity Indicator<br />
              4. Timing State<br />
              5. Form Descriptor<br />
              6. Support Copy
            </div>
          </div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '6px', opacity: 0.7 }}>Scale Compatibility</div>
            <div style={{ opacity: 0.5, lineHeight: '1.5', fontSize: '12px' }}>
              30 ml serums<br />
              50 ml creams<br />
              150 ml cleansers<br />
              Vertical legibility prioritized
            </div>
          </div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '6px', opacity: 0.7 }}>Design Principles</div>
            <div style={{ opacity: 0.5, lineHeight: '1.5', fontSize: '12px' }}>
              Generous negative space<br />
              Lower-weighted center of gravity<br />
              Typography-focused<br />
              Calm vertical rhythm
            </div>
          </div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '6px', opacity: 0.7 }}>Material Cues</div>
            <div style={{ opacity: 0.5, lineHeight: '1.5', fontSize: '12px' }}>
              Emboss / deboss treatments<br />
              Soft-touch label stock<br />
              Foil accents (gold / silver)<br />
              Ink density restraint
            </div>
          </div>
        </div>
      </div>

      {/* Sacred Glow Timing System */}
      <div
        style={{
          backgroundColor: 'rgba(156, 136, 122, 0.08)', // Smoky Umber tint
          border: '1px solid rgba(156, 136, 122, 0.2)',
          borderRadius: 'var(--radius-md)',
          padding: '24px',
          marginBottom: '48px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            fontWeight: '600',
            color: '#1A1A1A',
            textTransform: 'uppercase',
            letterSpacing: 'var(--letter-spacing-wide)',
            marginBottom: '16px',
          }}
        >
          Sacred Glow — Timing State System
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: '#1A1A1A',
            opacity: 0.7,
            lineHeight: '1.6',
            marginBottom: '20px',
          }}
        >
          Time-of-day is communicated through the presence and absence of luminous halos — not symbols.
          A subtle circular anchor element emanates a sacred glow when timing matters, creating an atmospheric
          signal that feels discovered, not announced.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            color: '#1A1A1A',
          }}
        >
          <div>
            <div style={{ fontWeight: '600', marginBottom: '8px', opacity: 0.8 }}>Morning (AM)</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1A1A1A', padding: '12px', borderRadius: '8px' }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '0.5px solid #FFB432',
                  boxShadow: `
                    inset 0 1px 2px rgba(0, 0, 0, 0.15),
                    0 0 25px rgba(255, 200, 80, 1),
                    0 0 50px rgba(255, 200, 80, 1),
                    0 0 100px rgba(255, 200, 80, 1),
                    0 0 125px rgba(255, 200, 80, 0.8),
                    0 0 150px rgba(255, 200, 80, 0.6),
                    0 0 175px rgba(255, 200, 80, 0.3)
                  `,
                  opacity: 1,
                }} />
              </div>
              <span style={{ opacity: 0.6, fontSize: '11px' }}>Compact white orb · intense glow</span>
            </div>
            <div style={{ opacity: 0.5, lineHeight: '1.5', fontSize: '11px' }}>
              10px diameter · thin border<br />
              7-layer amber luminosity<br />
              Energizing morning signal
            </div>
          </div>

          <div>
            <div style={{ fontWeight: '600', marginBottom: '8px', opacity: 0.8 }}>Night (PM)</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1A1A1A', padding: '12px', borderRadius: '8px' }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '0.5px solid #AAB5B2',
                  boxShadow: `
                    inset 0 1px 2px rgba(0, 0, 0, 0.15),
                    0 0 25px rgba(170, 181, 178, 1),
                    0 0 50px rgba(170, 181, 178, 1),
                    0 0 95px rgba(170, 181, 178, 1),
                    0 0 120px rgba(170, 181, 178, 0.8),
                    0 0 145px rgba(170, 181, 178, 0.6),
                    0 0 170px rgba(170, 181, 178, 0.3)
                  `,
                  opacity: 1,
                }} />
              </div>
              <span style={{ opacity: 0.6, fontSize: '11px' }}>Compact white orb · intense glow</span>
            </div>
            <div style={{ opacity: 0.5, lineHeight: '1.5', fontSize: '11px' }}>
              10px diameter · thin border<br />
              7-layer Fogstone luminosity<br />
              Restorative nighttime signal
            </div>
          </div>

          <div>
            <div style={{ fontWeight: '600', marginBottom: '8px', opacity: 0.8 }}>Any / All-Day</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* No glow - empty space */}
              </div>
              <span style={{ opacity: 0.6, fontSize: '11px' }}>No glow</span>
            </div>
            <div style={{ opacity: 0.5, lineHeight: '1.5', fontSize: '11px' }}>
              Neutral silence is the signal<br />
              No indicator appears<br />
              Timing flexibility implied
            </div>
          </div>
        </div>
      </div>

      {/* Label Examples Grid */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            fontWeight: '600',
            color: '#1A1A1A',
            textTransform: 'uppercase',
            letterSpacing: 'var(--letter-spacing-wide)',
            marginBottom: '24px',
          }}
        >
          Label Expressions
        </h2>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '48px 32px',
            marginBottom: '64px',
          }}
        >
          {labelExamples.map((label, index) => (
            <LabelCard key={index} data={label} />
          ))}
        </div>
      </div>

      {/* System Notes */}
      <div
        style={{
          backgroundColor: 'rgba(217, 196, 187, 0.15)', // Veil Clay tint
          border: '1px solid rgba(217, 196, 187, 0.3)',
          borderRadius: 'var(--radius-md)',
          padding: '24px',
          marginTop: '48px',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontWeight: '600',
            color: '#1A1A1A',
            textTransform: 'uppercase',
            letterSpacing: 'var(--letter-spacing-wide)',
            marginBottom: '12px',
            opacity: 0.7,
          }}
        >
          Production Notes
        </h3>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            color: '#1A1A1A',
            opacity: 0.6,
            lineHeight: '1.6',
          }}
        >
          <p style={{ margin: '0 0 12px 0' }}>
            <strong style={{ fontWeight: '600', opacity: 0.8 }}>System Integrity:</strong> All labels use only 
            existing design system tokens (colors, typography, spacing). No new elements introduced.
          </p>
          <p style={{ margin: '0 0 12px 0' }}>
            <strong style={{ fontWeight: '600', opacity: 0.8 }}>Material Annotations:</strong> Text below each label 
            indicates intended finish treatments (emboss, deboss, foil, paper stock). These are descriptive only — 
            not visual simulations.
          </p>
          <p style={{ margin: '0 0 12px 0' }}>
            <strong style={{ fontWeight: '600', opacity: 0.8 }}>Regulatory Compliance:</strong> This page does not 
            include regulatory copy blocks, ingredient lists, or dieline specifications. Those elements are managed 
            separately in production workflows.
          </p>
          <p style={{ margin: '0' }}>
            <strong style={{ fontWeight: '600', opacity: 0.8 }}>Goal:</strong> If these were printed tomorrow, 
            they would appear intentional, premium, restrained, and unmistakably HØLY — even as production specs 
            evolve later.
          </p>
        </div>
      </div>

      {/* Typography & Token Reference */}
      <div
        style={{
          marginTop: '48px',
          padding: '24px',
          backgroundColor: 'rgba(170, 181, 178, 0.1)', // Fogstone Blue tint
          border: '1px solid rgba(170, 181, 178, 0.25)',
          borderRadius: 'var(--radius-md)',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontWeight: '600',
            color: '#1A1A1A',
            textTransform: 'uppercase',
            letterSpacing: 'var(--letter-spacing-wide)',
            marginBottom: '16px',
            opacity: 0.7,
          }}
        >
          Design System Tokens Used
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            color: '#1A1A1A',
          }}
        >
          <div>
            <div style={{ fontWeight: '600', marginBottom: '6px', opacity: 0.7 }}>Typography</div>
            <div style={{ opacity: 0.5, lineHeight: '1.5' }}>
              Display: Garamond<br />
              Body: Inter<br />
              Weights: 400, 500, 600
            </div>
          </div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '6px', opacity: 0.7 }}>Colors</div>
            <div style={{ opacity: 0.5, lineHeight: '1.5' }}>
              Temple Black: #1A1A1A<br />
              Ivory: #F9F6F0<br />
              Opacity layers: 0.5–1.0
            </div>
          </div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '6px', opacity: 0.7 }}>Spacing</div>
            <div style={{ opacity: 0.5, lineHeight: '1.5' }}>
              4px, 6px, 8px, 12px, 16px<br />
              24px, 32px (vertical rhythm)<br />
              Generous negative space
            </div>
          </div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '6px', opacity: 0.7 }}>Effects</div>
            <div style={{ opacity: 0.5, lineHeight: '1.5' }}>
              --shadow-glass<br />
              --radius-sm<br />
              Subtle borders & dividers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labels2Page;