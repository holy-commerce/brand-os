/**
 * ========================================
 * HØLY PARENT BRAND HOMEPAGE (ETHEREAL)
 * ========================================
 * 
 * PURPOSE:
 * Minimal, ethereal one-pager for HØLY.com parent brand homepage.
 * Not explanatory. Not commercial. Not instructional.
 * A quiet declaration of existence — open-ended, grounded, and spacious.
 * 
 * INTENT:
 * Signals that HØLY exists, what it stands for, and what may emerge from it.
 * 
 * DESIGN:
 * - Single-column layout with generous vertical spacing
 * - Typography and space do the work
 * - No cards, illustrations, or photography
 * - Uses only existing HØLY design system tokens
 * 
 * MOTION LAYER:
 * - Full-page ambient motion - slow, organic, monochromatic
 * - Feels like sand shifting, ripples in stone, breath through fabric
 * - Continuous, subtle, calming - never distracts
 */

import React, { useState } from 'react';
import { TM } from '../components/core-system';

const HOLYHomePage: React.FC = () => {
  const [inquiry, setInquiry] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const handleInquiryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      setInquiry(text);
      setCharCount(text.length);
    }
  };

  const handleSubmit = () => {
    // Annotation: Submissions intended to route to prestonvandyke@gmail.com
    console.log('Inquiry submitted:', inquiry);
    // In production, this would send to prestonvandyke@gmail.com
    setInquiry('');
    setCharCount(0);
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* AMBIENT MOTION BACKGROUND LAYER */}
      {/* Three overlapping organic gradients that drift slowly */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {/* Layer 1: Primary drift - like sand shifting */}
        <div
          className="ambient-drift-1"
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-25%',
            width: '150%',
            height: '200%',
            background: 'radial-gradient(ellipse at 40% 30%, rgba(156, 136, 122, 0.12) 0%, transparent 50%)',
            animation: 'drift1 45s ease-in-out infinite',
          }}
        />
        
        {/* Layer 2: Secondary ripple - like breath through fabric */}
        <div
          className="ambient-drift-2"
          style={{
            position: 'absolute',
            top: '-30%',
            right: '-20%',
            width: '140%',
            height: '180%',
            background: 'radial-gradient(ellipse at 60% 50%, rgba(217, 196, 187, 0.10) 0%, transparent 55%)',
            animation: 'drift2 55s ease-in-out infinite',
          }}
        />
        
        {/* Layer 3: Tertiary flow - like ripples in stone */}
        <div
          className="ambient-drift-3"
          style={{
            position: 'absolute',
            bottom: '-40%',
            left: '10%',
            width: '130%',
            height: '160%',
            background: 'radial-gradient(ellipse at 50% 70%, rgba(170, 181, 178, 0.08) 0%, transparent 60%)',
            animation: 'drift3 65s ease-in-out infinite',
          }}
        />

        {/* Subtle atmospheric glow - like light passing through material */}
        <div
          className="holy-glow"
          style={{
            position: 'absolute',
            top: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle at 50% 50%, rgba(156, 136, 122, 0.06) 0%, transparent 65%)',
            animation: 'breathe 6s ease-in-out infinite',
          }}
        />
      </div>

      {/* MINIMAL TOP NAVIGATION HINT */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '32px 40px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        {/* Logo removed - minimal header */}
      </div>

      {/* CONTENT LAYER - sits above ambient motion */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '720px',
          margin: '0 auto',
          padding: '60px 24px 0',
          minHeight: 'calc(100vh - 200px)',
        }}
      >
        {/* 1. BRAND TITLE */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '48px',
            fontWeight: '400',
            color: '#D7D0C5',
            textAlign: 'center',
            letterSpacing: '0.02em',
            marginBottom: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <style>{`
            @keyframes oPulse {
              0%, 100% {
                opacity: 0.7;
                transform: scale(1);
              }
              50% {
                opacity: 1;
                transform: scale(1.05);
              }
            }
          `}</style>
          <span>H</span>
          <span style={{
            animation: 'oPulse 3000ms ease-in-out infinite',
            display: 'inline-block',
          }}>Ø</span>
          <span>LY</span>
        </div>

        {/* 2. HERO LINE */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '32px',
            fontWeight: '400',
            color: '#1A1A1A',
            textAlign: 'center',
            lineHeight: '1.4',
            marginBottom: '80px',
            letterSpacing: '-0.01em',
          }}
        >
          Your body is a temple.
          <br />
          Make it yours.
        </div>

        {/* LUXURY DIVIDER 1 */}
        <div
          style={{
            maxWidth: '120px',
            height: '1px',
            margin: '0 auto 80px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(156, 136, 122, 0.3) 50%, transparent 100%)',
          }}
        />

        {/* 3. BODY COPY */}
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            fontWeight: '400',
            color: '#1A1A1A',
            lineHeight: '1.8',
            marginBottom: '120px',
            whiteSpace: 'pre-line',
          }}
        >
          {`HØLY is a framework for building.

We work across physical products, digital commerce, and physical spaces,
starting with the body as the point of reference.

Our work includes ritual care, apparel, environments, and systems for longevity and vitality —
built to be used, adapted, and lived with over time.

HØLY provides the structure behind these efforts.

Some are live today.
Others are still taking shape.`}
        </div>

        {/* LUXURY DIVIDER 2 */}
        <div
          style={{
            maxWidth: '240px',
            height: '1px',
            margin: '0 auto 80px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(170, 181, 178, 0.25) 50%, transparent 100%)',
          }}
        />

        {/* 4. OPEN INQUIRY FORM */}
        <div
          style={{
            maxWidth: '560px',
            margin: '0 auto 120px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: '500',
              color: '#1A1A1A',
              textTransform: 'uppercase',
              letterSpacing: 'var(--letter-spacing-wide)',
              marginBottom: '24px',
              opacity: 0.7,
            }}
          >
            Open Inquiry
          </h2>

          <textarea
            value={inquiry}
            onChange={handleInquiryChange}
            placeholder="Ask a question. Share a thought. Begin something."
            className="inquiry-field"
            style={{
              width: '100%',
              minHeight: '160px',
              padding: '16px',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: '400',
              color: '#1A1A1A',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(8px)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              resize: 'vertical',
              lineHeight: '1.6',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxShadow: 'inset 0 0 0 1px rgba(26, 26, 26, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02)',
            }}
            onFocus={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
              e.target.style.boxShadow = 'inset 0 0 0 1px rgba(156, 136, 122, 0.15), 0 0 0 3px rgba(156, 136, 122, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)';
            }}
            onBlur={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
              e.target.style.boxShadow = 'inset 0 0 0 1px rgba(26, 26, 26, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02)';
            }}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '12px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: '#1A1A1A',
                opacity: 0.4,
              }}
            >
              {charCount} / {maxChars}
            </div>

            {/* GHOST BUTTON WITH GRADIENT TEXT ON HOVER */}
            <button
              onClick={handleSubmit}
              disabled={inquiry.trim().length === 0}
              className="ghost-button"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: '500',
                color: inquiry.trim().length === 0 ? 'rgba(26, 26, 26, 0.3)' : '#1A1A1A',
                backgroundColor: 'transparent',
                border: '1px solid',
                borderColor: inquiry.trim().length === 0 ? 'rgba(26, 26, 26, 0.1)' : 'rgba(26, 26, 26, 0.15)',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 24px',
                cursor: inquiry.trim().length === 0 ? 'not-allowed' : 'pointer',
                transition: 'all var(--duration-normal) var(--ease-sacred)',
                letterSpacing: '0.02em',
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER - Sacred anchoring */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '80px 40px 60px',
          borderTop: '1px solid rgba(26, 26, 26, 0.06)',
        }}
      >
        {/* Footer Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: '#1A1A1A',
              opacity: 0.4,
            }}
          >
            © 2025 HØLY. All rights reserved.
          </div>
        </div>
      </div>

      {/* CSS ANIMATIONS - Slow, organic, non-directional */}
      <style>{`
        /* Ambient drift animations - extremely slow, no obvious direction */
        @keyframes drift1 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
          }
          25% {
            transform: translate(3%, -2%) scale(1.05);
          }
          50% {
            transform: translate(-2%, 4%) scale(0.98);
          }
          75% {
            transform: translate(4%, 1%) scale(1.02);
          }
        }

        @keyframes drift2 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
          }
          30% {
            transform: translate(-3%, 3%) scale(1.03);
          }
          60% {
            transform: translate(2%, -4%) scale(0.97);
          }
          80% {
            transform: translate(-1%, 2%) scale(1.01);
          }
        }

        @keyframes drift3 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
          }
          20% {
            transform: translate(2%, 3%) scale(1.02);
          }
          55% {
            transform: translate(-4%, -2%) scale(0.99);
          }
          85% {
            transform: translate(3%, -3%) scale(1.01);
          }
        }

        /* Subtle breathing glow - like light through material */
        @keyframes breathe {
          0%, 100% {
            opacity: 0.4;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.7;
            transform: translateX(-50%) scale(1.08);
          }
        }

        /* Ghost Button - Gradient text on hover */
        .ghost-button:not(:disabled):hover {
          border-color: rgba(26, 26, 26, 0.3) !important;
          background: linear-gradient(135deg, rgba(156, 136, 122, 0.03) 0%, rgba(170, 181, 178, 0.03) 100%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent !important;
          background: var(--gradient-sacred-dusk);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ghost-button:not(:disabled):active {
          transform: translateY(1px);
          border-color: rgba(26, 26, 26, 0.25) !important;
        }

        /* Mobile optimization - reduce motion complexity */
        @media (max-width: 768px) {
          .ambient-drift-1,
          .ambient-drift-2,
          .ambient-drift-3 {
            animation-duration: 120s;
          }
        }

        /* Respect user motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .ambient-drift-1,
          .ambient-drift-2,
          .ambient-drift-3,
          .holy-glow {
            animation: none;
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default HOLYHomePage;