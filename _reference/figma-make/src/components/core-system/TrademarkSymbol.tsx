/**
 * ========================================
 * TS/TMark — Trademark Symbol Component
 * HØLY™ Design System v3.2 — REFINED PREMIUM POSITIONING
 * ========================================
 * 
 * Provides a globally unified, subtle, premium trademark symbol (™) 
 * that automatically scales and styles based on the root token system.
 * 
 * SPECIFICATIONS v3.2 (REFINED PREMIUM ALIGNMENT):
 * - Size: 12% of parent font size (--tm-size: 0.12) — barely perceptible premium subtlety
 * - Position: Top-aligned, optically just above cap height (--tm-shift: 0.5em)
 * - Opacity: 70% (--tm-opacity: 0.7) — ghost-light, legally present
 * - Spacing: 0.03em optical margin — tight, refined, premium
 * - Font family: Inherits from parent
 * - Font weight: Inherits from parent
 * 
 * POSITIONING PHILOSOPHY:
 * The ™ symbol is positioned to sit **optically just above the cap height** of the 
 * adjacent word's final letter. This creates a balanced, premium presentation where 
 * the mark appears "tucked" into the top-right corner without visual detachment.
 * 
 * Using translateY(-0.5em) provides precise cap-height alignment that:
 * - Avoids baseline alignment (too low)
 * - Prevents excessive floating (too high)
 * - Creates consistent optical balance across all font sizes
 * - Maintains elegance in both display and body text contexts
 * 
 * SIZING CALIBRATION:
 * 12% sizing ensures the ™ is:
 * - Visible enough for legal compliance
 * - Subtle enough to avoid typographic prominence
 * - Balanced for premium brand presentation
 * - Consistent across device scales and containers
 * 
 * SPECIAL SIZING:
 * - Logo variant: 12% for HØLY™ main brand mark (--tm-size-logo: 0.12)
 * - Use `<TM variant="logo" />` for primary logomark contexts
 * - Both variants now use identical sizing for unified system
 * 
 * USAGE:
 * ```tsx
 * import { TM, renderWithTM } from './components/core-system/TrademarkSymbol';
 * 
 * // Standard usage (12% sizing)
 * <h1>HØLY<TM /></h1>
 * <p>Ritual Aftercare<TM /></p>
 * 
 * // Logo variant (12% sizing, identical to standard)
 * <h1 className="logo">HØLY<TM variant="logo" /></h1>
 * 
 * // Automatic string parsing (RECOMMENDED)
 * <h1>{renderWithTM('HØLY™')}</h1>
 * <p>{renderWithTM('Ritual Aftercare™')}</p>
 * ```
 * 
 * DESIGN PHILOSOPHY:
 * - ™ should appear as a "refined micro-accent", not a typographic shout
 * - 12% height creates precise optical relationship with cap height
 * - Top-right corner positioning (0.5em shift) provides consistent visual anchor
 * - Subtle, nearly ghost-light, premium, and unobtrusive
 * - Consistent across all UI, labels, templates, product catalog, ritual systems
 * - ADA compliant with proper aria labels
 * 
 * LAYOUT INTEGRITY:
 * - Never forces text wrapping or layout breaks
 * - Uses inline-block with line-height: 0 to prevent vertical reflow
 * - Optical spacing (0.03em) ensures consistent margin without layout disruption
 * 
 * PRODUCTION NOTES:
 * - Uses CSS custom properties for global consistency
 * - Transform-based positioning ensures cross-browser compatibility
 * - Compatible with PNG export (html2canvas) and print production
 * - Tested for SelfNamed label export compatibility
 * - Locked via design tokens to prevent future drift
 * 
 * ROOT TOKEN: TS/TMark v3.2
 * Defined in: /styles/globals.css
 */

import React from 'react';

interface TMProps {
  /**
   * Variant selection for context-specific sizing
   * - 'standard': 12% sizing for general use (default)
   * - 'logo': 12% sizing for main HØLY™ brand mark (identical to standard)
   */
  variant?: 'standard' | 'logo';
  
  /**
   * Optional size override (default: uses --tm-size token = 12% of parent)
   * Only override if specific context requires adjustment
   * Value should be between 0.10 (10%) and 0.15 (15%) for optimal presentation
   */
  size?: number | string;
  
  /**
   * Optional opacity override (default: uses --tm-opacity token = 0.7)
   * Range: 0.5-0.8 recommended for maintaining premium subtlety
   */
  opacity?: number;
  
  /**
   * Optional baseline shift override (default: uses --tm-shift token = 0.5em)
   * 0.5em = cap-height alignment (recommended)
   * Adjust only for extreme edge cases or custom typography
   */
  shift?: string;
}

/**
 * TM Component - Styled trademark symbol using root tokens v3.2
 * 
 * Automatically inherits:
 * - Font family from parent
 * - Font weight from parent
 * - Color from parent (with opacity adjustment)
 * 
 * Applies root tokens:
 * - --tm-size (12% of parent, standard & logo)
 * - --tm-shift (0.5em cap-height alignment)
 * - --tm-opacity (70% opacity)
 * - --tm-spacing (0.03em optical margin)
 */
export const TM: React.FC<TMProps> = ({ 
  variant = 'standard',
  size, 
  opacity, 
  shift 
}) => {
  // Calculate font size based on variant or override
  // Both standard and logo now use 12% for unified system
  const fontSize = size 
    ? (typeof size === 'number' ? `${size * 100}%` : size)
    : 'calc(1em * var(--tm-size, 0.12))';
  
  const finalOpacity = opacity ?? 'var(--tm-opacity, 0.7)';
  const finalShift = shift ?? 'var(--tm-shift, 0.5em)';
  
  return (
    <span 
      className="tm-symbol"
      style={{ 
        fontSize,
        opacity: finalOpacity,
        display: 'inline-block',
        transform: `translateY(-${finalShift})`,
        lineHeight: '0',
        verticalAlign: 'baseline',
        marginLeft: 'var(--tm-spacing, 0.03em)',
        fontFamily: 'inherit',
        fontWeight: 'inherit'
      }}
      aria-label="Trademark"
    >
      ™
    </span>
  );
};

/**
 * Helper function to automatically render text with styled trademark symbol
 * 
 * Automatically detects ™ in strings and replaces with styled TM component
 * Supports multiple ™ symbols in a single string
 * 
 * @param text - Text string containing ™ symbol(s)
 * @returns JSX element with styled trademark(s)
 * 
 * @example
 * renderWithTM('HØLY™') // Returns: HØLY<TM />
 * renderWithTM('Ritual Aftercare™ by HØLY™') // Returns: Ritual Aftercare<TM /> by HØLY<TM />
 */
export const renderWithTM = (text: string): React.ReactNode => {
  if (!text.includes('™')) return text;
  
  const parts = text.split('™');
  
  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && <TM />}
        </React.Fragment>
      ))}
    </>
  );
};

/**
 * Batch helper for arrays of text strings
 * 
 * @param texts - Array of strings that may contain ™
 * @returns Array of JSX elements with styled trademarks
 * 
 * @example
 * const products = ['HØLY™', 'Ritual Aftercare™', 'Ritual Renewal™'];
 * products.map(name => renderWithTM(name));
 */
export const renderMultipleWithTM = (texts: string[]): React.ReactNode[] => {
  return texts.map((text, index) => (
    <React.Fragment key={index}>
      {renderWithTM(text)}
    </React.Fragment>
  ));
};

/**
 * CSS class for global ™ styling (optional alternative to component)
 * 
 * Apply this class to any element containing ™ for automatic styling
 * Best for static content where React components aren't ideal
 * 
 * Usage in CSS:
 * .tm-auto { ... applies TS/TMark token ... }
 */
export const tmClassName = 'tm-symbol';

export default TM;