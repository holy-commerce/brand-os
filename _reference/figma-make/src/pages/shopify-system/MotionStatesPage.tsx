import { TM } from '../../components/core-system';
import { HOLYWand } from '../../components/icons/HOLYIcons';
import { motion } from 'motion/react';
import { useState } from 'react';

/**
 * ========================================
 * MOTION & STATES PAGE
 * HØLY | Ritual Care™ Design System
 * ========================================
 * 
 * Motion as a system, not decoration. Defines hover, active, transition,
 * and ambient animation patterns for Shopify theme.
 * 
 * Engineering Handoff:
 * - Use CSS transitions for performance
 * - Motion tokens defined in design tokens
 * - Respect prefers-reduced-motion for accessibility
 */

export default function MotionStatesPage() {
  const [buttonState, setButtonState] = useState<'default' | 'hover' | 'active'>('default');

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="max-w-7xl mx-auto p-8 space-y-20">
        
        {/* Page Header */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-3">
              <HOLYWand size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Motion & States
              </h1>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.7, marginBottom: '16px' }}>
              Motion system for HØLY | Ritual Care<TM />. Defined timing, easing, and interaction states for consistent, intentional animation.
            </p>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.6, margin: 0 }}>
                <strong>Motion Principles:</strong> Motion should feel luxurious, not rushed. Use easing curves for elegance. Respect prefers-reduced-motion.
              </p>
            </div>
          </div>
        </div>

        {/* Motion Tokens Reference */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Motion Tokens
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Duration and easing values for consistent animation timing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Duration Tokens */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
                Duration Tokens
              </h3>
              <div className="space-y-3">
                {[
                  { name: '--duration-instant', value: '100ms', usage: 'Micro-interactions, instant feedback' },
                  { name: '--duration-fast', value: '200ms', usage: 'Button hovers, toggles' },
                  { name: '--duration-base', value: '300ms', usage: 'Default transitions' },
                  { name: '--duration-slow', value: '500ms', usage: 'Page transitions, reveals' },
                  { name: '--duration-ritual', value: '3000ms', usage: 'Ambient animations (pulsing Ø)' },
                ].map((token) => (
                  <div key={token.name} className="p-3 rounded-lg" style={{ backgroundColor: '#F9F6F0' }}>
                    <div className="flex items-center justify-between mb-1">
                      <code style={{ fontFamily: 'monospace', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
                        {token.name}
                      </code>
                      <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#8C8981' }}>
                        {token.value}
                      </span>
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                      {token.usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Easing Tokens */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
                Easing Tokens
              </h3>
              <div className="space-y-3">
                {[
                  { name: '--easing-default', value: 'ease-in-out', usage: 'Standard transitions' },
                  { name: '--easing-enter', value: 'cubic-bezier(0.4, 0, 0.2, 1)', usage: 'Elements entering viewport' },
                  { name: '--easing-exit', value: 'cubic-bezier(0.4, 0, 1, 1)', usage: 'Elements leaving viewport' },
                ].map((token) => (
                  <div key={token.name} className="p-3 rounded-lg" style={{ backgroundColor: '#F9F6F0' }}>
                    <div className="flex items-center justify-between mb-1">
                      <code style={{ fontFamily: 'monospace', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
                        {token.name}
                      </code>
                    </div>
                    <p style={{ fontFamily: 'monospace', fontSize: '10px', color: '#8C8981', marginBottom: '4px' }}>
                      {token.value}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                      {token.usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Button States */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Button States
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Hover, active, focus, and disabled states for all button variants.
            </p>
          </div>

          <div className="space-y-6">
            {/* Primary Button States */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Primary Button States
                </h3>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                {/* Default */}
                <div className="space-y-3">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', textAlign: 'center' }}>
                    Default
                  </p>
                  <div className="p-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F9F6F0' }}>
                    <button
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#F9F6F0',
                        backgroundColor: '#1A1A1A',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                      }}
                    >
                      Button
                    </button>
                  </div>
                </div>

                {/* Hover */}
                <div className="space-y-3">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', textAlign: 'center' }}>
                    Hover
                  </p>
                  <div className="p-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F9F6F0' }}>
                    <button
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#F9F6F0',
                        backgroundColor: '#2A2A2A',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        transform: 'translateY(-1px)',
                      }}
                    >
                      Button
                    </button>
                  </div>
                </div>

                {/* Active */}
                <div className="space-y-3">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', textAlign: 'center' }}>
                    Active
                  </p>
                  <div className="p-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F9F6F0' }}>
                    <button
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#F9F6F0',
                        backgroundColor: '#1A1A1A',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        transform: 'translateY(0)',
                      }}
                    >
                      Button
                    </button>
                  </div>
                </div>

                {/* Disabled */}
                <div className="space-y-3">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', textAlign: 'center' }}>
                    Disabled
                  </p>
                  <div className="p-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F9F6F0' }}>
                    <button
                      disabled
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#F9F6F0',
                        backgroundColor: '#8C8981',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'not-allowed',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        opacity: 0.5,
                      }}
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0 }}>
{`.btn-primary {
  transition: all var(--duration-fast) var(--easing-default);
}

.btn-primary:hover {
  background-color: #2A2A2A;
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary:disabled {
  background-color: var(--color-weathered-halo);
  opacity: 0.5;
  cursor: not-allowed;
}`}
                </pre>
              </div>
            </div>

            {/* Ghost Button States */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Ghost Button States
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Default */}
                <div className="space-y-3">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', textAlign: 'center' }}>
                    Default
                  </p>
                  <div className="p-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F9F6F0' }}>
                    <button
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#1A1A1A',
                        backgroundColor: 'transparent',
                        padding: '8px 0',
                        border: 'none',
                        borderBottom: '1px solid transparent',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                      }}
                    >
                      Explore
                    </button>
                  </div>
                </div>

                {/* Hover */}
                <div className="space-y-3">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', textAlign: 'center' }}>
                    Hover
                  </p>
                  <div className="p-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F9F6F0' }}>
                    <button
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#1A1A1A',
                        backgroundColor: 'transparent',
                        padding: '8px 0',
                        border: 'none',
                        borderBottom: '1px solid #1A1A1A',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                      }}
                    >
                      Explore
                    </button>
                  </div>
                </div>

                {/* Disabled */}
                <div className="space-y-3">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', textAlign: 'center' }}>
                    Disabled
                  </p>
                  <div className="p-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F9F6F0' }}>
                    <button
                      disabled
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#8C8981',
                        backgroundColor: 'transparent',
                        padding: '8px 0',
                        border: 'none',
                        cursor: 'not-allowed',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        opacity: 0.4,
                      }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0 }}>
{`.btn-ghost {
  border-bottom: 1px solid transparent;
  transition: border-color var(--duration-fast) var(--easing-default);
}

.btn-ghost:hover {
  border-bottom-color: var(--color-temple-black);
}

.btn-ghost:disabled {
  color: var(--color-weathered-halo);
  opacity: 0.4;
  cursor: not-allowed;
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Ambient Animations */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Ambient Animations
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Continuous, subtle animations for brand elements.
            </p>
          </div>

          <div className="space-y-6">
            {/* Pulsing Ø */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Pulsing Ø Animation
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, lineHeight: '160%' }}>
                  Signature HØLY brand animation. 3-second loop with opacity and scale.
                </p>
              </div>

              <div className="p-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F9F6F0' }}>
                <motion.div
                  style={{ fontFamily: 'Garamond, serif', fontSize: '96px', color: '#D7D0C5', lineHeight: '100%' }}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.95, 1.03, 0.95],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  Ø
                </motion.div>
              </div>

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`@keyframes pulse-o {
  0%, 100% { opacity: 0.4; transform: scale(0.95); }
  50% { opacity: 1; transform: scale(1.03); }
}

.logo-o.pulsing {
  animation: pulse-o var(--duration-ritual) ease-in-out infinite;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .logo-o.pulsing {
    animation: none;
    opacity: 1;
    transform: scale(1);
  }
}`}
                </pre>
              </div>
            </div>

            {/* Gradient Background Flow */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="mb-6">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Gradient Background Flow
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, lineHeight: '160%' }}>
                  Slow gradient shift for hero backgrounds. 8-second loop.
                </p>
              </div>

              <div className="p-12 rounded-lg" style={{ 
                background: 'linear-gradient(135deg, #D9C4BB, #AAB5B2, #D7D0C5)',
                backgroundSize: '200% 200%',
                animation: 'gradient-flow 8s ease-in-out infinite',
              }}>
                <p style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', textAlign: 'center', margin: 0 }}>
                  Sacred Luxury for Body & Self
                </p>
              </div>

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`@keyframes gradient-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero-gradient {
  background: linear-gradient(
    135deg,
    var(--color-veil-clay),
    var(--color-fogstone-blue),
    var(--color-limestone-oat)
  );
  background-size: 200% 200%;
  animation: gradient-flow 8s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .hero-gradient {
    animation: none;
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Page Transitions */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Page Transitions
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Fade and slide transitions for page navigation.
            </p>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="space-y-6">
              <div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Fade In (Enter)
                </h3>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0 }}>
{`.page-enter {
  opacity: 0;
  transform: translateY(20px);
  transition: all var(--duration-slow) var(--easing-enter);
}

.page-enter-active {
  opacity: 1;
  transform: translateY(0);
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Fade Out (Exit)
                </h3>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0 }}>
{`.page-exit {
  opacity: 1;
  transition: all var(--duration-base) var(--easing-exit);
}

.page-exit-active {
  opacity: 0;
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Notes */}
        <section className="space-y-6">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Engineering Handoff Notes
            </h2>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#1A1A1A', border: '2px solid #1A1A1A' }}>
            <div className="space-y-4">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Performance
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Use CSS transitions for simple state changes. Reserve JavaScript/Motion for complex animations. Transform and opacity are hardware-accelerated.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Accessibility
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  ALWAYS respect prefers-reduced-motion. Disable or simplify all animations when this setting is active. Focus states must be visible (not animated away).
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Consistency
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Use motion tokens (duration and easing) consistently. Don't create one-off timing values. Motion should reinforce hierarchy, not distract.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Add CSS animation for gradient flow */}
        <style>{`
          @keyframes gradient-flow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>

      </div>
    </div>
  );
}
