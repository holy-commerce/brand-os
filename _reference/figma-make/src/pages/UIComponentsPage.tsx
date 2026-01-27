import { 
  ProductCardDefault, 
  ProductCardWithDescription, 
  ProductCardWithBadge, 
  ProductCardWithHover,
  ProductCardOnSale,
  ProductCardWithCTA,
  ProductCardSaleWithCTA,
  ProductKitHorizontal,
  ProductKitVertical
} from '../components/ui-blocks/ProductCards';

import { HOLYPackage, HOLYWarning, HOLYTarget, HOLYCart, HOLYTag, HOLYMessage, HOLYStore, HOLYFileStack, HOLYCompass, HOLYMegaphone, HOLYCard, HOLYChart, HOLYBrain, HOLYClipboard, HOLYCheck } from '../components/icons/HOLYIcons';

import {
  HeadlineSubheadlineCTA,
  HeadlineParagraphLink,
  RitualQuoteBlock,
  RitualQuoteBlockDark,
  TwoColumnInfoSection,
  IconLabelGrid
} from '../components/ui-blocks/ContentBlocks';

import {
  HeaderNavigation,
  FooterBlock,
  MobileNavigationDrawer
} from '../components/ui-blocks/NavigationSections';

import {
  FullWidthPromoBanner,
  AnnouncementBarDismissible,
  HomeHeroSection
} from '../components/ui-blocks/PromoAnnouncement';

import {
  CartItemRow,
  CartSummary,
  EmptyCartState,
  CartPopout
} from '../components/ui-blocks/CartElements';

import {
  CheckoutSummaryCard,
  PaymentMethodSelector,
  AddressSummaryBlock
} from '../components/ui-blocks/CheckoutElements';

import {
  NewBadge,
  BackInStockBadge,
  LowStockBadge,
  SellingFastBadge,
  LimitedReleaseBadge,
  OnlineOnlyBadge,
  RitualFavoriteBadge,
  ComingSoonBadge,
  RitualSetBadge,
  AutoRitualBadge,
  StudioOnlyBadge,
  NewBadgeCompact,
  LowStockBadgeCompact,
  SellingFastBadgeCompact
} from '../components/ui-blocks/ProductBadges';

import {
  SuccessBanner,
  ErrorBanner,
  InfoBanner,
  WarningBanner
} from '../components/ui-blocks/MessageStatusElements';

import {
  MetricCard,
  MetricCardWithIcon,
  ChartContainerPlaceholder
} from '../components/ui-blocks/DataBlocks';

import {
  VariantSelectorSize,
  VariantSelectorColor,
  VariantSelectorRitualSystem,
  AddToCartBlock,
  SubscriptionToggleBlock,
  ReviewStarsRowWithCTA
} from '../components/ui-blocks/ProductInteractionElements';

import {
  PriceDisplayRegular,
  PriceDisplaySale,
  PriceDisplayRitualSet,
  RitualSetBundleBlock,
  UpsellModule,
  CrossSellModule
} from '../components/ui-blocks/CommerceModules';

import {
  SearchInputWithSuggestions,
  CartIconWithBadge,
  MiniCartDropdown,
  StudioLoginButton,
  MegaMenuWithRitualSystems
} from '../components/ui-blocks/NavigationExtended';

import {
  YONIChatWelcome,
  YONIMessageBubbleIncoming,
  YONIMessageBubbleOutgoing,
  YONIChatInput,
  YONIRitualFinderQuestion,
  YONIRitualSystemMatch,
  YONIOrderTrackingUI,
  YONIFAQResponse,
  YONIEscalationOptions,
  YONICompleteChatInterface,
  YONIChatInterfaceDemo
} from '../components/ui-blocks/YONIInterface';

import {
  HeroShowcase,
  VariantRitualSystemSwitcher,
  KeyIngredientPanel,
  UsageRitualCarousel,
  StickyMobileCTABar,
  ProductTrustStrip,
  ProductReviewsModule,
  LimitedReleaseCountdown,
  AddToRitualUpsell,
  MaterialFinishSelector,
  PackagingRevealModule,
  ProductVideoPlayer,
  StudioOnlyAccessModule,
  RelicBadgeLowStock,
  RelicBadgeSellingFast,
  SubscriptionModule
} from '../components/ui-blocks/PDPModules';

export default function UIComponentsPage() {
  return (
    <div className="space-y-8">
      
      {/* Page Info */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <HOLYPackage size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              UI Components — Composed Interface Blocks
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Pre-built, modular UI blocks composed from base components — ready to use in page layouts
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <HOLYWarning size={12} color="#1A1A1A" opacity={0.5} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, margin: 0 }}>
                THIS PAGE INCLUDES
              </p>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
              Product Cards, Content Blocks, Navigation, Promo, Cart, Checkout, Messages, Data Display
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <HOLYTarget size={12} color="#1A1A1A" opacity={0.5} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.5, margin: 0 }}>
                THIS PAGE DOES NOT INCLUDE
              </p>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
              Full page templates, design tokens, or primitive base components
            </p>
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="flex items-center gap-3 mb-8">
          <HOLYCart size={24} color="#1A1A1A" />
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
            Product Cards
          </h2>
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Product Card / Default
            </h3>
            <div className="max-w-xs">
              <ProductCardDefault />
            </div>
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Product Card / With Description
            </h3>
            <div className="max-w-xs">
              <ProductCardWithDescription />
            </div>
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Product Card / With Badge
            </h3>
            <div className="max-w-xs">
              <ProductCardWithBadge />
            </div>
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Product Card / With Hover Overlay
            </h3>
            <div className="max-w-xs">
              <ProductCardWithHover />
            </div>
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Product Card / On Sale (MSRP Strikethrough)
            </h3>
            <div className="max-w-xs">
              <ProductCardOnSale />
            </div>
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Product Card / With CTA Button
            </h3>
            <div className="max-w-xs">
              <ProductCardWithCTA />
            </div>
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Product Card / Sale Pricing + CTA
            </h3>
            <div className="max-w-xs">
              <ProductCardSaleWithCTA />
            </div>
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Product Kit / Horizontal Layout
            </h3>
            <ProductKitHorizontal />
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Product Kit / Vertical Layout
            </h3>
            <ProductKitVertical />
          </div>
        </div>
      </div>

      {/* Product Interaction Elements */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="flex items-center gap-3 mb-8">
          <HOLYTarget size={24} color="#1A1A1A" />
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
            Product Interaction Elements
          </h2>
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Variant Selector / Size
            </h3>
            <div className="max-w-md">
              <VariantSelectorSize />
            </div>
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Variant Selector / Color
            </h3>
            <div className="max-w-md">
              <VariantSelectorColor />
            </div>
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Variant Selector / Ritual System
            </h3>
            <div className="max-w-md">
              <VariantSelectorRitualSystem />
            </div>
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Add to Cart Block (with Quantity Selector)
            </h3>
            <div className="max-w-md">
              <AddToCartBlock />
            </div>
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Auto-Ritual™ Toggle Block
            </h3>
            <div className="max-w-md">
              <SubscriptionToggleBlock />
            </div>
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Review Stars Row with CTA
            </h3>
            <ReviewStarsRowWithCTA />
          </div>
        </div>
      </div>

      {/* Commerce Modules */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="flex items-center gap-3 mb-8">
          <HOLYStore size={24} color="#1A1A1A" />
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
            Commerce Modules
          </h2>
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Price Display / Regular
            </h3>
            <PriceDisplayRegular />
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Price Display / Sale
            </h3>
            <PriceDisplaySale />
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Price Display / Ritual Set Bundle
            </h3>
            <PriceDisplayRitualSet />
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Ritual Set Bundle Display Block
            </h3>
            <div className="max-w-lg">
              <RitualSetBundleBlock />
            </div>
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Upsell Module
            </h3>
            <div className="max-w-lg">
              <UpsellModule />
            </div>
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Cross-Sell Module
            </h3>
            <CrossSellModule />
          </div>
        </div>
      </div>

      {/* Product Indicator Badges */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <HOLYTag size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Product Indicator Badges
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
            E-commerce signaling with ritual brand voice. Hover for sacred messaging.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Primary Status Badges */}
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Status & Availability
            </h3>
            <div className="flex flex-wrap gap-4">
              <NewBadge />
              <BackInStockBadge />
              <LowStockBadge />
              <SellingFastBadge />
              <ComingSoonBadge />
            </div>
          </div>

          {/* Release & Distribution Badges */}
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Release & Distribution
            </h3>
            <div className="flex flex-wrap gap-4">
              <LimitedReleaseBadge />
              <OnlineOnlyBadge />
              <StudioOnlyBadge />
            </div>
          </div>

          {/* Product Type Badges */}
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Product Types & Collections
            </h3>
            <div className="flex flex-wrap gap-4">
              <RitualFavoriteBadge />
              <RitualSetBadge />
              <AutoRitualBadge />
            </div>
          </div>

          {/* Compact Variants */}
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Compact Variants
            </h3>
            <div className="flex flex-wrap gap-3">
              <NewBadgeCompact />
              <LowStockBadgeCompact />
              <SellingFastBadgeCompact />
            </div>
          </div>

          {/* Usage Examples on Dark Background */}
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              On Product Cards (Example)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
              {/* Card 1 */}
              <div 
                className="rounded-xl relative"
                style={{ border: '1px solid #DADADA', backgroundColor: '#FFFFFF' }}
              >
                <div className="absolute top-3 left-3" style={{ zIndex: 1001 }}>
                  <NewBadge />
                </div>
                <div 
                  className="h-48 rounded-t-xl overflow-hidden"
                  style={{ backgroundColor: '#F9F6F0' }}
                >
                </div>
                <div className="p-4">
                  <p style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A' }}>
                    hølymist™
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', marginTop: '4px' }}>
                    $68
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                className="rounded-xl relative"
                style={{ border: '1px solid #DADADA', backgroundColor: '#FFFFFF' }}
              >
                <div className="absolute top-3 left-3" style={{ zIndex: 1001 }}>
                  <LowStockBadge />
                </div>
                <div 
                  className="h-48 rounded-t-xl overflow-hidden"
                  style={{ backgroundColor: '#F9F6F0' }}
                >
                </div>
                <div className="p-4">
                  <p style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A' }}>
                    Ritual Touch Oil
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', marginTop: '4px' }}>
                    $48
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div 
                className="rounded-xl relative"
                style={{ border: '1px solid #DADADA', backgroundColor: '#FFFFFF' }}
              >
                <div className="absolute top-3 left-3" style={{ zIndex: 1001 }}>
                  <SellingFastBadge />
                </div>
                <div 
                  className="h-48 rounded-t-xl overflow-hidden"
                  style={{ backgroundColor: '#F9F6F0' }}
                >
                </div>
                <div className="p-4">
                  <p style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A' }}>
                    Daily Ritual Serum
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', marginTop: '4px' }}>
                    $52
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div 
            className="p-6 rounded-xl space-y-3"
            style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
          >
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
              Design System Specifications
            </h3>
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Font:</strong> Inter, 13px, Semi-bold (600)
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Padding:</strong> 12px horizontal, 6px vertical (standard) · 8px/4px (compact)
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Border Radius:</strong> 9999px (full pill shape)
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Shadow:</strong> 0 2px 8px rgba(0,0,0,0.06)
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Tooltip:</strong> Appears on hover with ritual messaging · Temple Black bg · Ivory text
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Blocks Section */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="flex items-center gap-3 mb-8">
          <HOLYFileStack size={24} color="#1A1A1A" />
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
            Content Blocks
          </h2>
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Headline + Subheadline + CTA
            </h3>
            <HeadlineSubheadlineCTA />
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Headline + Paragraph + Link
            </h3>
            <HeadlineParagraphLink />
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Ritual Quote Block (Light)
            </h3>
            <RitualQuoteBlock />
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Ritual Quote Block (Dark)
            </h3>
            <RitualQuoteBlockDark />
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              2-Column Info Section
            </h3>
            <TwoColumnInfoSection />
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Icon + Label Grid
            </h3>
            <IconLabelGrid />
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="flex items-center gap-3 mb-8">
          <HOLYCompass size={24} color="#1A1A1A" />
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
            Navigation Sections
          </h2>
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Header Navigation
            </h3>
            <HeaderNavigation />
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Footer Block
            </h3>
            <FooterBlock />
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Mobile Navigation Drawer
            </h3>
            <div className="max-w-xs">
              <MobileNavigationDrawer />
            </div>
          </div>
        </div>
      </div>

      {/* Extended Navigation Components */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="flex items-center gap-3 mb-8">
          <HOLYCompass size={24} color="#1A1A1A" />
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
            Extended Navigation Components
          </h2>
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Search Input with Suggestion Dropdown
            </h3>
            <SearchInputWithSuggestions />
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Cart Icon with Notification Badge
            </h3>
            <CartIconWithBadge />
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Mini-Cart Dropdown
            </h3>
            <MiniCartDropdown />
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Studio Login CTA Button
            </h3>
            <StudioLoginButton />
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Mega Menu with Ritual Systems
            </h3>
            <div className="relative" style={{ minHeight: '500px', paddingBottom: '96px' }}>
              <MegaMenuWithRitualSystems />
            </div>
          </div>
        </div>
      </div>

      {/* Promo & Announcement */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="flex items-center gap-3 mb-8">
          <HOLYMegaphone size={24} color="#1A1A1A" />
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
            Promo & Announcement
          </h2>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Full Width Promo Banner
            </h3>
            <FullWidthPromoBanner />
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Announcement Bar (Dismissible)
            </h3>
            <AnnouncementBarDismissible />
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Home Hero Section
            </h3>
            <HomeHeroSection />
          </div>
        </div>
      </div>

      {/* Cart Elements */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="flex items-center gap-3 mb-8">
          <HOLYCart size={24} color="#1A1A1A" />
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
            Cart Elements
          </h2>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Cart Item Row
            </h3>
            <CartItemRow />
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Cart Popout (with Urgency Features)
            </h3>
            <div className="max-w-md">
              <CartPopout />
            </div>
          </div>

          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Cart Summary
            </h3>
            <div className="max-w-md">
              <CartSummary />
            </div>
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Empty Cart State
            </h3>
            <EmptyCartState />
          </div>
        </div>
      </div>

      {/* Checkout Elements */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="flex items-center gap-3 mb-8">
          <HOLYCard size={24} color="#1A1A1A" />
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
            Checkout Elements
          </h2>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Address Summary Block
            </h3>
            <div className="max-w-lg">
              <AddressSummaryBlock />
            </div>
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Checkout Summary Card
            </h3>
            <div className="max-w-md">
              <CheckoutSummaryCard />
            </div>
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Payment Method Selector
            </h3>
            <div className="max-w-lg">
              <PaymentMethodSelector />
            </div>
          </div>
        </div>
      </div>

      {/* Message & Status Elements */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="flex items-center gap-3 mb-8">
          <HOLYMessage size={24} color="#1A1A1A" />
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
            Message & Status
          </h2>
        </div>
        <div className="space-y-6 max-w-2xl">
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Success Banner
            </h3>
            <SuccessBanner />
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Error Banner
            </h3>
            <ErrorBanner />
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Info Banner
            </h3>
            <InfoBanner />
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Warning Banner
            </h3>
            <WarningBanner />
          </div>
        </div>
      </div>

      {/* Data Display Blocks */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="flex items-center gap-3 mb-8">
          <HOLYChart size={24} color="#1A1A1A" />
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
            Data Display
          </h2>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Metric Card
            </h3>
            <div className="max-w-xs">
              <MetricCard />
            </div>
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Metric Card with Icon
            </h3>
            <div className="max-w-xs">
              <MetricCardWithIcon />
            </div>
          </div>
          
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Chart Container
            </h3>
            <ChartContainerPlaceholder />
          </div>
        </div>
      </div>

      {/* YONI™ AI Assistant Interface */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #B3C4C1' }}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <HOLYBrain size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              YONI™ AI Assistant Interface
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
            Sacred AI-powered chat and ritual guidance module for customer support, product discovery, and care assistance
          </p>
        </div>

        <div className="space-y-12">
          {/* Live Chat Components */}
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Chat Welcome Screen
            </h3>
            <div className="max-w-lg p-6 rounded-2xl" style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}>
              <YONIChatWelcome />
            </div>
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Message Bubbles
            </h3>
            <div className="max-w-lg space-y-4 p-6 rounded-2xl" style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}>
              <YONIMessageBubbleIncoming 
                message="That's a beautiful choice. Let me help you find the perfect ritual for your healing journey."
                timestamp="2:34 PM"
              />
              <YONIMessageBubbleOutgoing 
                message="I have a fresh septum piercing. What do you recommend?"
                timestamp="2:33 PM"
              />
              <YONIMessageBubbleIncoming 
                message="For a fresh septum, I recommend Ritual Aftercare™ — clinical meets ceremonial."
              />
            </div>
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Chat Input Field
            </h3>
            <div className="max-w-lg rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
              <YONIChatInput />
            </div>
          </div>

          {/* Guided Ritual Finder */}
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Ritual Finder — Question Flow
            </h3>
            <div className="max-w-lg p-6 rounded-2xl" style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}>
              <YONIRitualFinderQuestion />
            </div>
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Ritual System Match — Product Recommendations
            </h3>
            <div className="max-w-2xl p-6 rounded-2xl" style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}>
              <YONIRitualSystemMatch />
            </div>
          </div>

          {/* Dynamic Use Cases */}
          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Order Tracking Interface
            </h3>
            <div className="max-w-lg p-6 rounded-2xl" style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}>
              <YONIOrderTrackingUI />
            </div>
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              FAQ Quick Response
            </h3>
            <div className="max-w-lg p-6 rounded-2xl" style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}>
              <YONIFAQResponse />
            </div>
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Escalation Options
            </h3>
            <div className="max-w-lg p-6 rounded-2xl" style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}>
              <YONIEscalationOptions />
            </div>
          </div>

          <div>
            <h3 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              Complete Chat Interface (Interactive)
            </h3>
            <div 
              className="p-12 rounded-2xl"
              style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA', minHeight: '500px', position: 'relative' }}
            >
              <div className="text-center mb-8">
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '13px', 
                  color: '#1A1A1A',
                  opacity: 0.6,
                  fontStyle: 'italic',
                  marginBottom: '4px'
                }}>
                  Click the chat button in the bottom-right corner →
                </p>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '11px', 
                  color: '#1A1A1A',
                  opacity: 0.5
                }}>
                  (Demo version - production uses fixed positioning)
                </p>
              </div>
              <YONIChatInterfaceDemo />
            </div>
          </div>

          {/* Technical Specifications */}
          <div 
            className="p-6 rounded-xl space-y-3"
            style={{ backgroundColor: '#EBD7D1', border: '1px solid #DADADA' }}
          >
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
              Design System Specifications
            </h3>
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>AI Messages:</strong> Inter Semi-bold, Ocean Mineral (#B3C4C1) background, Ivory text
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>User Messages:</strong> Garamond Italic, Sacred Blush (#EBD7D1) background, Temple Black text
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Border Radius:</strong> 16px (bubbles) · 12px (inputs) · Full circle (avatar)
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Voice & Tone:</strong> Sensual, sacred, intelligent — grounded and clear with subtle affirmations
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Optical Centering:</strong> ø icon uses transform: translateY(-3px) per brand rule
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Use Cases:</strong> Product pages, contact flows, post-purchase care, Studio B2B routing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PDP Module System */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #5E6458' }}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <HOLYCart size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              PDP Module System
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
            Complete modular system for luxury product detail pages — high-converting, sacred-aligned merchandising components
          </p>
        </div>

        <div className="space-y-12">
          {/* Hero Showcase */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Hero Showcase
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Large product image with zoom interaction + thumbnail navigation strip
            </p>
            <div className="max-w-2xl">
              <HeroShowcase />
            </div>
          </div>

          {/* Variant + Ritual System Switcher */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Variant + Ritual System Switcher
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Radio-style selector for Ritual Systems (Aftercare™, Renewal™, Vital™, Touch™, Union™)
            </p>
            <div className="max-w-md">
              <VariantRitualSystemSwitcher />
            </div>
          </div>

          {/* Key Ingredient Panel */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Key Ingredient Panel
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Ingredient cards with icon, concentration badge, and benefit description
            </p>
            <div className="max-w-2xl">
              <KeyIngredientPanel />
            </div>
          </div>

          {/* Usage Ritual Carousel */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Usage Ritual Carousel
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Step-by-step ritual guidance with navigation dots and timing
            </p>
            <div className="max-w-2xl">
              <UsageRitualCarousel />
            </div>
          </div>

          {/* Product Trust Strip */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Product Trust Strip
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Reusable row of trust badges (Studio Safe, Clean Formula, Cruelty Free, Recyclable)
            </p>
            <ProductTrustStrip />
          </div>

          {/* Reviews Module */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Product Reviews
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              5-star rating summary + verified review snippets with expand CTA
            </p>
            <div className="max-w-2xl">
              <ProductReviewsModule />
            </div>
          </div>

          {/* Limited Release Countdown */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Limited Release Countdown
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Timer display for limited editions and drops — creates urgency
            </p>
            <div className="max-w-md">
              <LimitedReleaseCountdown />
            </div>
          </div>

          {/* Add to Ritual Upsell */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Add to Ritual Upsell
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Personalized recommendations grid — "Complete Your Ritual" cross-sell
            </p>
            <AddToRitualUpsell />
          </div>

          {/* Material Finish Selector */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Material Finish Selector
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Label finish options: Matte, Foil Emboss, UV Gloss — with hover states
            </p>
            <div className="max-w-lg">
              <MaterialFinishSelector />
            </div>
          </div>

          {/* Packaging Reveal */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Packaging Reveal
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Hover-to-expand packaging and sustainability details
            </p>
            <div className="max-w-xl">
              <PackagingRevealModule />
            </div>
          </div>

          {/* Product Video Player */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Product Video Player
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              16:9 minimal video player with play overlay and duration label
            </p>
            <div className="max-w-2xl">
              <ProductVideoPlayer />
            </div>
          </div>

          {/* Studio-Only Access */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Studio-Only Access
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Gated CTA for B2B partners and verified studios
            </p>
            <div className="max-w-xl">
              <StudioOnlyAccessModule />
            </div>
          </div>

          {/* Relic Badges */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Relic Badges (Low Stock / Selling Fast)
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Urgency indicators with sacred language and pulsing animation
            </p>
            <div className="flex flex-wrap gap-4">
              <RelicBadgeLowStock />
              <RelicBadgeSellingFast />
            </div>
          </div>

          {/* Subscription Module */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Auto-Ritual™ Module
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Auto-Ritual™ toggle with frequency selector and price comparison
            </p>
            <div className="max-w-xl">
              <SubscriptionModule />
            </div>
          </div>

          {/* Sticky Mobile CTA (Demo Note) */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY / PDP Module / Sticky Mobile CTA Bar
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Fixed bottom bar for mobile checkout — minimal design with price + CTA
            </p>
            <div 
              className="max-w-sm mx-auto p-6 rounded-2xl relative"
              style={{ backgroundColor: '#F9F6F0', border: '2px dashed #DADADA', minHeight: '200px' }}
            >
              <p 
                className="text-center mb-4"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.5, fontStyle: 'italic' }}
              >
                Preview (would be position: fixed in production)
              </p>
              <div className="relative">
                <StickyMobileCTABar />
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div 
            className="p-6 rounded-xl space-y-3"
            style={{ backgroundColor: 'rgba(94, 100, 88, 0.08)', border: '2px solid #5E6458' }}
          >
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
              PDP Module System Specifications
            </h3>
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Framework:</strong> Modular, composable blocks for flexible PDP layouts
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Responsive:</strong> All modules adapt mobile → tablet → desktop (Shopify breakpoints)
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Tokens:</strong> Uses HØLY color, typography, spacing tokens throughout
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Accessibility:</strong> WCAG AAA compliant contrast, keyboard navigation, screen reader support
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Sacred Language:</strong> "Add to Ritual" (not "Add to Cart"), "Auto-Ritual" (not "Subscribe")
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <strong>Integration:</strong> References existing badges, CTA glows, and trust indicators
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guide */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#EBD7D1', border: '2px solid #DADADA' }}>
        <div className="space-y-6">
          <div>
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', marginBottom: '12px' }}>
              Using UI Components
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
              These composed UI blocks are ready-to-use sections built from base components and HØLY tokens. 
              Each component is designed to be modular and customizable while maintaining visual consistency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6 }}>
                IN FIGMA
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                Copy entire component frames directly into your designs. All Auto Layout is preserved.
              </p>
            </div>
            
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6 }}>
                COMPOSITION
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                Mix and match components to build complete page layouts and user flows.
              </p>
            </div>
            
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6 }}>
                CUSTOMIZATION
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                Swap content and colors freely. Always use HØLY tokens for consistency.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
