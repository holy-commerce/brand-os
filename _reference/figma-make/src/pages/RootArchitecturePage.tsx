/**
 * HØLY™ ROOT ARCHITECTURE — V3.0 DEMONSTRATION
 * 
 * Showcases the zero-fragmentation design token system and root-level primitives.
 * All components inherit from centralized CSS custom properties.
 * 
 * @sacred Living documentation of the refined system
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layers, Palette, Zap, Moon, Sun } from 'lucide-react';
import {
  GlassSurface,
  SacredButton,
  FluidCard,
  SectionLabel,
  DisplayHeading,
  RitualBadge,
  GradientOverlay,
  TM,
  useDesignTokens
} from '../components/core-system';
import { GlobalNavigationV3 } from '../components/core-system/GlobalNavigationV3';

export default function RootArchitecturePage() {
  const [cartCount, setCartCount] = useState(2);
  const tokens = useDesignTokens();

  // Scroll to sections
  const scrollToTokens = () => {
    const tokensSection = document.getElementById('tokens-section');
    if (tokensSection) {
      tokensSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToComponents = () => {
    const componentsSection = document.getElementById('components-section');
    if (componentsSection) {
      componentsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tokenCategories = [
    {
      title: 'Glass & Translucency',
      icon: Layers,
      tokens: [
        { name: '--glass-white', value: 'rgba(255, 255, 255, 0.7)' },
        { name: '--glass-white-strong', value: 'rgba(255, 255, 255, 0.92)' },
        { name: '--glass-blur', value: 'blur(24px)' }
      ]
    },
    {
      title: 'Sacred Gradients',
      icon: Palette,
      tokens: [
        { name: '--gradient-sacred-dusk', value: 'Veil Clay → Fogstone Blue' },
        { name: '--gradient-halo-glow', value: 'Radial glow effect' },
        { name: '--gradient-soft-veil', value: 'Vertical fade' }
      ]
    },
    {
      title: 'Shadow Depth System',
      icon: Sparkles,
      tokens: [
        { name: '--shadow-hover', value: '4px / 16px blur' },
        { name: '--shadow-active', value: '2px / 8px blur' },
        { name: '--shadow-persistent', value: '8px / 32px blur' },
        { name: '--shadow-glass', value: 'Glass inset effect' }
      ]
    },
    {
      title: 'Motion Presets',
      icon: Zap,
      tokens: [
        { name: '--duration-fast', value: '200ms' },
        { name: '--duration-normal', value: '300ms' },
        { name: '--ease-sacred', value: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      ]
    }
  ];

  const ritualSystems = [
    { id: 'aftercare' as const, name: 'Aftercare', color: '#AAB5B2' },
    { id: 'renewal' as const, name: 'Renewal', color: '#D9C4BB' },
    { id: 'touch' as const, name: 'Touch', color: '#5E6458' },
    { id: 'union' as const, name: 'Union', color: '#D7D0C5' },
    { id: 'vital' as const, name: 'Vital', color: '#9C887A' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--background)', minHeight: '100vh' }}>
      {/* Navigation with Glass Effect */}
      <GlobalNavigationV3
        cartCount={cartCount}
        showAnnouncement={true}
        announcementText="✨ Sacred System Upgraded — Now with Root Architecture v3.0"
        variant="glass"
      />

      {/* Hero Section with Gradient Overlay */}
      <div className="relative overflow-hidden" style={{ padding: 'var(--space-4xl) var(--space-xl)' }}>
        <GradientOverlay gradient="halo" opacity={0.6} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-[900px] mx-auto text-center space-y-6"
        >
          <SectionLabel className="justify-center flex">
            Root Architecture v3.0
          </SectionLabel>
          
          <DisplayHeading level={1} withGradient>
            Zero-Fragmentation
            <br />
            Design System
          </DisplayHeading>
          
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            color: 'var(--foreground)',
            opacity: 0.7,
            lineHeight: '170%',
            maxWidth: '640px',
            margin: '0 auto'
          }}>
            Every component inherits from centralized CSS custom properties.
            Glass aesthetics, fluid motion, and sacred gradients built at the root level.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <SacredButton variant="primary" size="lg" onClick={scrollToTokens}>
              Explore Tokens
            </SacredButton>
            <SacredButton variant="ghost" size="lg" onClick={scrollToComponents}>
              View Components
            </SacredButton>
          </div>
        </motion.div>
      </div>

      {/* Token System Showcase */}
      <div id="tokens-section" style={{ padding: 'var(--space-3xl) var(--space-xl)', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <SectionLabel className="justify-center flex">
              Design Token Categories
            </SectionLabel>
            <DisplayHeading level={2}>
              Foundational Variables
            </DisplayHeading>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--foreground)',
              opacity: 0.6,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              All UI elements reference these root-level tokens for instant theme adaptation
            </p>
          </div>

          {/* Token Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tokenCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <FluidCard
                  key={category.title}
                  withHover
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  style={{ padding: 'var(--space-xl)' }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: 'var(--background)' }}
                    >
                      <Icon size={24} style={{ color: 'var(--accent)' }} />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '18px',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--foreground)'
                      }}>
                        {category.title}
                      </h3>
                      <div className="space-y-2">
                        {category.tokens.map(token => (
                          <div 
                            key={token.name}
                            className="flex items-center justify-between p-2 rounded"
                            style={{ backgroundColor: 'var(--background)' }}
                          >
                            <code style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '13px',
                              color: 'var(--accent)',
                              fontWeight: 'var(--font-weight-medium)'
                            }}>
                              {token.name}
                            </code>
                            <span style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '12px',
                              color: 'var(--foreground)',
                              opacity: 0.5
                            }}>
                              {token.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FluidCard>
              );
            })}
          </div>
        </div>

        {/* Primitive Components Showcase */}
        <div id="components-section" className="space-y-8 mt-16">
          <div className="text-center space-y-4">
            <SectionLabel className="justify-center flex">
              Root Primitives
            </SectionLabel>
            <DisplayHeading level={2}>
              Component Foundation
            </DisplayHeading>
          </div>

          {/* Glass Surface Examples */}
          <div className="space-y-6">
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--foreground)'
            }}>
              Glass Surfaces
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GlassSurface variant="default" withShadow="glass" style={{ padding: 'var(--space-lg)' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--foreground)' }}>
                  Default Glass<br />
                  <span style={{ opacity: 0.5, fontSize: '12px' }}>70% opacity</span>
                </p>
              </GlassSurface>

              <GlassSurface variant="strong" withShadow="glass" style={{ padding: 'var(--space-lg)' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--foreground)' }}>
                  Strong Glass<br />
                  <span style={{ opacity: 0.5, fontSize: '12px' }}>92% opacity</span>
                </p>
              </GlassSurface>

              <GlassSurface variant="ivory" withNoise withShadow="glass" style={{ padding: 'var(--space-lg)' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--foreground)' }}>
                  Ivory + Noise<br />
                  <span style={{ opacity: 0.5, fontSize: '12px' }}>With grain texture</span>
                </p>
              </GlassSurface>
            </div>
          </div>

          {/* Sacred Buttons */}
          <div className="space-y-6">
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--foreground)'
            }}>
              Sacred Buttons
            </h4>
            
            <div className="flex flex-wrap gap-4">
              <SacredButton variant="primary">Primary Action</SacredButton>
              <SacredButton variant="secondary">Secondary</SacredButton>
              <SacredButton variant="ghost">Ghost</SacredButton>
              <SacredButton variant="ritual" withPulse>Ritual with Pulse</SacredButton>
            </div>
          </div>

          {/* Ritual Badges */}
          <div className="space-y-6">
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--foreground)'
            }}>
              Ritual System Badges
            </h4>
            
            <div className="flex flex-wrap gap-3">
              {ritualSystems.map(ritual => (
                <RitualBadge key={ritual.id} ritual={ritual.id} size="md">
                  Ritual {ritual.name}<TM />
                </RitualBadge>
              ))}
            </div>
          </div>
        </div>

        {/* Implementation Benefits */}
        <FluidCard 
          withGlow
          style={{ 
            marginTop: 'var(--space-4xl)', 
            padding: 'var(--space-2xl)',
            textAlign: 'center'
          }}
        >
          <div className="space-y-6">
            <Sparkles size={48} style={{ color: 'var(--accent)', margin: '0 auto' }} />
            
            <DisplayHeading level={3}>
              Benefits of Root Architecture
            </DisplayHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                { title: 'Instant Theme Switch', desc: 'Change entire app aesthetic with a single token update' },
                { title: 'Zero Fragmentation', desc: 'Every component inherits from root — no hardcoded values' },
                { title: 'Future-Proof Scale', desc: 'Add new ritual systems or products without refactoring' }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="space-y-2"
                >
                  <h5 style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)'
                  }}>
                    {benefit.title}
                  </h5>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--foreground)',
                    opacity: 0.6,
                    lineHeight: '160%'
                  }}>
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FluidCard>
      </div>
    </div>
  );
}