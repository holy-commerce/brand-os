/**
 * HØLY™ / CORE SYSTEM COMPONENTS
 * 
 * Central export file for all locked master components.
 * 
 * ⚠️ IMPORTANT - COMPONENT USAGE RULES:
 * 
 * 1. DO NOT detach or regenerate these components
 * 2. DO NOT create inline variants - use the exported components
 * 3. DO NOT override without updating this master file
 * 4. All instances must reference these master components
 * 5. Use component props for customization, not code duplication
 * 
 * COMPONENT CATEGORIES:
 * 
 * 🧭 Navigation & Layout
 * - GlobalNavigation: Header with desktop/mobile variants
 * - GlobalFooter: Footer with social links and legal
 * - Breadcrumb: Navigation hierarchy
 * 
 * 🛍️ Commerce Components
 * - ProductCard: Product display with variants
 * - PriceDisplay: Price with compare-at and savings
 * - QuantitySelector: Quantity input with +/- buttons
 * - RitualSystemBadge: System badges with proper trademark
 * 
 * 📧 Conversion Components
 * - NewsletterSignup: Email capture with variants
 * 
 * NAMING CONVENTION:
 * Component files: PascalCase (e.g., GlobalNavigation.tsx)
 * Component names: PascalCase (e.g., <GlobalNavigation />)
 * Props interfaces: PascalCase + Props suffix (e.g., GlobalNavigationProps)
 * 
 * VERSION: 2.0
 * LAST UPDATED: Nov 13, 2025
 */

// Navigation & Layout
export { GlobalNavigation } from './GlobalNavigation';
export { GlobalFooter } from './GlobalFooter';
export { Breadcrumb } from './Breadcrumb';

// Commerce Components
export { ProductCard } from './ProductCard';
export { PriceDisplay } from './PriceDisplay';
export { QuantitySelector } from './QuantitySelector';
export { RitualSystemBadge } from './RitualSystemBadge';

// Label System Components
export { 
  PurposeLabel,
  TimeLabel, 
  RitualSystemLabel,
  MetadataLabel,
  LabelStack,
  PURPOSE_CONFIG,
  TIME_CONFIG,
  RITUAL_SYSTEMS_CONFIG,
  METADATA_CONFIG
} from './LabelSystem';

// Conversion Components
export { NewsletterSignup } from './NewsletterSignup';

// Typography Utilities
export { TM, renderWithTM } from './TrademarkSymbol';

// Page Utilities
export { PageQuickNav } from './PageQuickNav';

// Theme System (v3.0)
export { ThemeProvider, useTheme, useDesignTokens } from './ThemeProvider';

// Root Primitives (v3.0) — Zero-Fragmentation Architecture
export {
  GlassSurface,
  SacredButton,
  FluidCard,
  SectionLabel,
  DisplayHeading,
  RitualBadge,
  GradientOverlay,
  SacredToggle
} from './Primitives';
