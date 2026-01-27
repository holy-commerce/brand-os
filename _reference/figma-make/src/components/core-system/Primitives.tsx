/**
 * HØLY™ Root Primitives — Zero-Fragmentation Architecture
 * 
 * Foundational component primitives that all UI elements inherit from.
 * All styling uses CSS custom properties (design tokens) for instant theme adaptation.
 * 
 * @version 3.0
 * @sacred Root-level reconstruction
 */

import React, { forwardRef, HTMLAttributes, ButtonHTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

/* ========================================
 * GLASS SURFACE — Base translucent container
 * ======================================== */

interface GlassSurfaceProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'strong' | 'ivory';
  withNoise?: boolean;
  withShadow?: 'hover' | 'active' | 'persistent' | 'glass';
}

export const GlassSurface = forwardRef<HTMLDivElement, GlassSurfaceProps>(
  ({ className = '', variant = 'default', withNoise = false, withShadow, children, style, ...props }, ref) => {
    const backgrounds = {
      default: 'var(--glass-white)',
      strong: 'var(--glass-white-strong)',
      ivory: 'var(--glass-ivory)'
    };

    const shadows = {
      hover: 'var(--shadow-hover)',
      active: 'var(--shadow-active)',
      persistent: 'var(--shadow-persistent)',
      glass: 'var(--shadow-glass)'
    };

    return (
      <div
        ref={ref}
        className={`${className}`}
        style={{
          backgroundColor: backgrounds[variant],
          backdropFilter: 'var(--glass-blur)',
          WebkitBackdropFilter: 'var(--glass-blur)',
          backgroundImage: withNoise ? 'var(--surface-noise)' : undefined,
          boxShadow: withShadow ? shadows[withShadow] : undefined,
          borderRadius: 'var(--radius-lg)',
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassSurface.displayName = 'GlassSurface';

/* ========================================
 * SACRED BUTTON — Root button with ritual interactions
 * ======================================== */

interface SacredButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'ritual';
  size?: 'sm' | 'md' | 'lg';
  withPulse?: boolean;
}

export const SacredButton = forwardRef<HTMLButtonElement, SacredButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', withPulse = false, children, style, ...props }, ref) => {
    const variants = {
      primary: {
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        border: 'none'
      },
      secondary: {
        backgroundColor: 'var(--secondary)',
        color: 'var(--secondary-foreground)',
        border: 'none'
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'var(--foreground)',
        border: '1px solid var(--border)'
      },
      ritual: {
        backgroundColor: 'var(--accent)',
        color: 'var(--accent-foreground)',
        border: 'none'
      }
    };

    const sizes = {
      sm: { padding: '0.5rem 1rem', fontSize: '14px' },
      md: { padding: '0.75rem 1.5rem', fontSize: '16px' },
      lg: { padding: '1rem 2rem', fontSize: '18px' }
    };

    return (
      <button
        ref={ref}
        className={`transition-sacred ${withPulse ? 'animate-ritual-pulse' : ''} ${className}`}
        style={{
          ...variants[variant],
          ...sizes[size],
          borderRadius: 'var(--radius-md)',
          fontFamily: 'var(--font-body)',
          fontWeight: 'var(--font-weight-medium)',
          cursor: 'pointer',
          transition: 'all var(--duration-normal) var(--ease-sacred)',
          ...style
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

SacredButton.displayName = 'SacredButton';

/* ========================================
 * FLUID CARD — Animated container with glass aesthetics
 * ======================================== */

interface FluidCardProps extends HTMLMotionProps<'div'> {
  withHover?: boolean;
  withGlow?: boolean;
}

export const FluidCard = motion.create(
  forwardRef<HTMLDivElement, FluidCardProps>(
    ({ className = '', withHover = true, withGlow = false, children, style, ...props }, ref) => {
      return (
        <motion.div
          ref={ref}
          className={`${className}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={withHover ? { 
            y: -4, 
            boxShadow: 'var(--shadow-hover)',
            transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
          } : undefined}
          style={{
            backgroundColor: 'var(--card)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-lg)',
            border: '1px solid var(--border)',
            boxShadow: withGlow ? 'var(--shadow-sacred-glow)' : undefined,
            transition: 'all var(--duration-normal) var(--ease-sacred)',
            ...style
          }}
          {...props}
        >
          {children}
        </motion.div>
      );
    }
  )
);

FluidCard.displayName = 'FluidCard';

/* ========================================
 * SECTION LABEL — Wide-kerned uppercase labels
 * ======================================== */

interface SectionLabelProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'ritual';
}

export const SectionLabel = forwardRef<HTMLDivElement, SectionLabelProps>(
  ({ className = '', variant = 'default', children, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${className}`}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '11px',
          fontWeight: 'var(--font-weight-medium)',
          letterSpacing: 'var(--letter-spacing-section)',
          textTransform: 'uppercase',
          color: variant === 'ritual' ? 'var(--accent)' : 'var(--foreground)',
          opacity: 0.7,
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SectionLabel.displayName = 'SectionLabel';

/* ========================================
 * DISPLAY HEADING — Garamond serif for emotional hierarchy
 * ======================================== */

interface DisplayHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  withGradient?: boolean;
}

export const DisplayHeading = forwardRef<HTMLHeadingElement, DisplayHeadingProps>(
  ({ className = '', level = 1, withGradient = false, children, style, ...props }, ref) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    
    const sizes = {
      1: '48px',
      2: '36px',
      3: '28px',
      4: '20px'
    };

    return (
      <Tag
        ref={ref as any}
        className={`${className}`}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: sizes[level],
          fontWeight: 'var(--font-weight-medium)',
          letterSpacing: 'var(--letter-spacing-tight)',
          lineHeight: '120%',
          color: 'var(--foreground)',
          background: withGradient ? 'var(--gradient-sacred-dusk)' : undefined,
          WebkitBackgroundClip: withGradient ? 'text' : undefined,
          WebkitTextFillColor: withGradient ? 'transparent' : undefined,
          ...style
        }}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

DisplayHeading.displayName = 'DisplayHeading';

/* ========================================
 * RITUAL BADGE — System-specific indicators
 * ======================================== */

interface RitualBadgeProps extends HTMLAttributes<HTMLDivElement> {
  ritual: 'aftercare' | 'renewal' | 'touch' | 'union' | 'vital';
  size?: 'sm' | 'md' | 'lg';
}

export const RitualBadge = forwardRef<HTMLDivElement, RitualBadgeProps>(
  ({ className = '', ritual, size = 'md', children, style, ...props }, ref) => {
    const colors = {
      aftercare: 'var(--ritual-aftercare)',
      renewal: 'var(--ritual-renewal)',
      touch: 'var(--ritual-touch)',
      union: 'var(--ritual-union)',
      vital: 'var(--ritual-vital)'
    };

    const sizes = {
      sm: { padding: '0.25rem 0.5rem', fontSize: '11px' },
      md: { padding: '0.375rem 0.75rem', fontSize: '13px' },
      lg: { padding: '0.5rem 1rem', fontSize: '14px' }
    };

    const needsWhiteText = ['touch', 'vital'].includes(ritual);

    return (
      <div
        ref={ref}
        className={`${className}`}
        style={{
          backgroundColor: colors[ritual],
          color: needsWhiteText ? '#F9F6F0' : '#1A1A1A',
          borderRadius: 'var(--radius-sm)',
          fontFamily: 'var(--font-body)',
          fontWeight: 'var(--font-weight-medium)',
          letterSpacing: '0.01em',
          ...sizes[size],
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

RitualBadge.displayName = 'RitualBadge';

/* ========================================
 * GRADIENT OVERLAY — Soft veil effects
 * ======================================== */

interface GradientOverlayProps extends HTMLAttributes<HTMLDivElement> {
  gradient?: 'dusk' | 'halo' | 'veil';
  opacity?: number;
}

export const GradientOverlay = forwardRef<HTMLDivElement, GradientOverlayProps>(
  ({ className = '', gradient = 'veil', opacity = 1, style, ...props }, ref) => {
    const gradients = {
      dusk: 'var(--gradient-sacred-dusk)',
      halo: 'var(--gradient-halo-glow)',
      veil: 'var(--gradient-soft-veil)'
    };

    return (
      <div
        ref={ref}
        className={`${className}`}
        style={{
          position: 'absolute',
          inset: 0,
          background: gradients[gradient],
          opacity,
          pointerEvents: 'none',
          ...style
        }}
        {...props}
      />
    );
  }
);

GradientOverlay.displayName = 'GradientOverlay';

/* ========================================
 * SACRED TOGGLE — Animated icon-button with logic states
 * ======================================== */

interface SacredToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  activeIcon: React.ReactNode;
  inactiveIcon: React.ReactNode;
  activeLabel?: string;
  inactiveLabel?: string;
  variant?: 'default' | 'ghost';
}

export const SacredToggle = forwardRef<HTMLButtonElement, SacredToggleProps>(
  ({ 
    className = '', 
    isActive, 
    activeIcon, 
    inactiveIcon, 
    activeLabel, 
    inactiveLabel,
    variant = 'default',
    style,
    ...props 
  }, ref) => {
    const label = isActive ? activeLabel : inactiveLabel;
    
    return (
      <motion.button
        ref={ref}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-sacred ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          backgroundColor: variant === 'default' 
            ? (isActive ? 'var(--primary)' : 'var(--background)')
            : 'transparent',
          border: variant === 'ghost' ? '1px solid var(--border)' : 'none',
          cursor: 'pointer',
          ...style
        }}
        {...props}
      >
        <motion.div
          initial={false}
          animate={{ 
            rotate: isActive ? 0 : 180,
            scale: isActive ? 1 : 0.9
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {isActive ? activeIcon : inactiveIcon}
        </motion.div>
        {label && (
          <motion.span
            initial={false}
            animate={{ opacity: 1 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              color: variant === 'default' 
                ? (isActive ? 'var(--primary-foreground)' : 'var(--foreground)')
                : 'var(--foreground)',
              fontWeight: 'var(--font-weight-medium)',
            }}
          >
            {label}
          </motion.span>
        )}
      </motion.button>
    );
  }
);

SacredToggle.displayName = 'SacredToggle';

/* ========================================
 * EXPORTS
 * ======================================== */

export default {
  GlassSurface,
  SacredButton,
  FluidCard,
  SectionLabel,
  DisplayHeading,
  RitualBadge,
  GradientOverlay,
  SacredToggle
};
