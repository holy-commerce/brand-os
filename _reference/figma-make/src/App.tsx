import { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from './components/ui/sidebar';
import { Separator } from './components/ui/separator';
import { TM } from './components/core-system';
import {
  HOLYGem,
  HOLYSquare,
  HOLYPackage,
  HOLYDna,
  HOLYEye,
  HOLYCamera,
  HOLYWand,
  HOLYCircle,
  HOLYSparkle,
  HOLYDocument,
  HOLYPrinter,
  HOLYCard,
  HOLYTag,
  HOLYCompass,
  HOLYMapPin,
  HOLYMessage,
} from './components/icons/HOLYIcons';

// Import all pages
import GettingStartedPage from './pages/GettingStartedPage';
import FileOverviewPage from './pages/FileOverviewPage';
import TokensPage from './pages/TokensPage';
import SystemsProductsPage from './pages/SystemsProductsPage';
import VisualDirectionPage from './pages/VisualDirectionPage';
import IconsMarksPage from './pages/IconsMarksPage';
import MotionStatesPage from './pages/MotionStatesPage';
import BaseComponentsPage from './pages/BaseComponentsPage';
import UIComponentsPage from './pages/UIComponentsPage';
import RitualSystemsPage from './pages/RitualSystemsPage';
import EmailComponentsPage from './pages/EmailComponentsPage';
import MobileComponentsPage from './pages/MobileComponentsPage';
import HomePage from './pages/HomePage';
import PDPExperiencePage from './pages/PDPExperiencePage';
import ProductListingPage from './pages/ProductListingPage';
import RitualFinderPage from './pages/RitualFinderPage';
import SearchPage from './pages/SearchPage';
import NavigationPage from './pages/NavigationPage';
import PrintPackagingTokensPage from './pages/PrintPackagingTokensPage';
import LabelSystemPage from './pages/LabelSystemPage';
import ProductLabelsPage from './pages/ProductLabelsPage';
import PrintComponentsPage from './pages/PrintComponentsPage';
import SignupsPage from './pages/SignupsPage';
import SitemapPage from './pages/SitemapPage';
import RootArchitecturePage from './pages/RootArchitecturePage';
import VoiceTonePage from './pages/VoiceTonePage';
import HolymistLabelShowcase from './pages/HolymistLabelShowcase';
import VideoAssemblyPage from './pages/VideoAssemblyPage';
import Labels2Page from './pages/Labels2Page';
import HOLYHomePage from './pages/HOLYHomePage';
import ShopifyBrandAssetsPage from './pages/ShopifyBrandAssetsPage';
import ShopifyTokensPage from './pages/shopify-system/TokensPage';
import ShopifyBaseComponentsPage from './pages/shopify-system/BaseComponentsPage';
import ShopifyIconsMarksPage from './pages/shopify-system/IconsMarksPage';
import ShopifyMotionStatesPage from './pages/shopify-system/MotionStatesPage';
import ShopifyUIComponentsPage from './pages/shopify-system/UIComponentsPage';
import ShopifyRitualSystemsPage from './pages/shopify-system/RitualSystemsPage';
import ShopifyLabelSystemPage from './pages/shopify-system/LabelSystemPage';
import ShopifyNavigationPage from './pages/shopify-system/NavigationPage';
import ShopifySignupsPage from './pages/shopify-system/SignupsPage';
import { RitualFinderCTAProvider } from './components/ui-blocks/RitualFinderGlobalCTAContext';

type PageKey =
  | 'getting-started'
  | 'file-overview'
  | 'root-architecture'
  | 'tokens'
  | 'systems-products'
  | 'visual-direction'
  | 'voice-tone'
  | 'sitemap'
  | 'icons-marks'
  | 'motion-states'
  | 'base-components'
  | 'ui-components'
  | 'ritual-systems'
  | 'label-system'
  | 'email-components'
  | 'mobile-components'
  | 'homepage'
  | 'pdp-experience'
  | 'product-listing'
  | 'ritual-finder'
  | 'search'
  | 'navigation'
  | 'signups'
  | 'print-packaging-tokens'
  | 'product-labels'
  | 'holymist-label-showcase'
  | 'print-components'
  | 'video-assembly'
  | 'labels2'
  | 'holy-homepage'
  | 'shopify-brand-assets'
  | 'shopify-tokens'
  | 'shopify-base-components'
  | 'shopify-icons-marks'
  | 'shopify-motion-states'
  | 'shopify-ui-components'
  | 'shopify-ritual-systems'
  | 'shopify-label-system'
  | 'shopify-navigation'
  | 'shopify-signups';

const navigationSections = [
  {
    title: 'Foundation',
    items: [
      { key: 'getting-started' as PageKey, label: 'Getting Started', description: 'Quick start guide & essential principles', icon: HOLYSparkle },
      { key: 'file-overview' as PageKey, label: 'File Overview', description: 'Governance, changelog & instructions', icon: HOLYDocument },
      { key: 'root-architecture' as PageKey, label: 'Root Architecture v3.0', description: '🔮 Zero-fragmentation design token system', icon: HOLYGem },
    ],
  },
  {
    title: 'Brand',
    items: [
      { key: 'systems-products' as PageKey, label: 'Systems & Products', description: 'Ritual Care™ systems, SKUs & architecture', icon: HOLYDna },
      { key: 'visual-direction' as PageKey, label: 'Visual Direction', description: 'Photography, film, and sensual styling guides', icon: HOLYCamera },
      { key: 'voice-tone' as PageKey, label: 'Voice / Tone', description: 'YONI™, HØLY™, and STUDIO voice profiles', icon: HOLYMessage },
      { key: 'sitemap' as PageKey, label: 'Sitemap', description: 'Website navigation structure & page architecture', icon: HOLYMapPin },
      { key: 'tokens' as PageKey, label: 'Tokens', description: 'Design tokens for typography, color, spacing', icon: HOLYGem },
      { key: 'icons-marks' as PageKey, label: 'Icons & Marks', description: '2D icons, symbols & brand glyphs', icon: HOLYEye },
      { key: 'motion-states' as PageKey, label: 'Motion / States', description: 'Defined animations, hovers & interactions', icon: HOLYWand },
      { key: 'shopify-brand-assets' as PageKey, label: 'Shopify Brand Assets', description: 'Export-ready logos, favicons & social images', icon: HOLYCamera },
    ],
  },
  {
    title: 'Components',
    items: [
      { key: 'base-components' as PageKey, label: 'Base Components', description: 'Primitive elements: buttons, inputs, tabs', icon: HOLYSquare },
      { key: 'ui-components' as PageKey, label: 'UI Components', description: 'Reusable layouts: cards, filters, banners, navs', icon: HOLYPackage },
      { key: 'ritual-systems' as PageKey, label: 'Ritual Systems', description: 'Color-coded variants by Ritual system', icon: HOLYDna },
      { key: 'label-system' as PageKey, label: 'Label System', description: 'Universal product tagging & metadata labels', icon: HOLYTag },
    ],
  },
  {
    title: 'Experiences',
    items: [
      { key: 'holy-homepage' as PageKey, label: 'HØLY', description: 'Ethereal parent brand homepage — minimal one-pager', icon: HOLYSparkle },
      { key: 'homepage' as PageKey, label: 'Homepage', description: 'Landing experience with sensory hierarchy', icon: HOLYSparkle },
      { key: 'pdp-experience' as PageKey, label: 'Product Details Page', description: 'PDP with rich content modules & states', icon: HOLYPackage },
      { key: 'product-listing' as PageKey, label: 'Product Listing Page', description: 'PLP with filters, sort, hover, responsive design', icon: HOLYPackage },
      { key: 'ritual-finder' as PageKey, label: 'Ritual Finder Engine', description: 'Guided quiz powered by YONI™ AI assistant', icon: HOLYSparkle },
      { key: 'search' as PageKey, label: 'Search', description: 'YONI™-powered chat search (not traditional search bar)', icon: HOLYCircle },
      { key: 'navigation' as PageKey, label: 'Navigation', description: 'Desktop & mobile nav, mega menus, breadcrumbs', icon: HOLYCompass },
      { key: 'signups' as PageKey, label: 'Signups', description: 'Modal, embedded, and mobile signup variants', icon: HOLYDocument },
      { key: 'video-assembly' as PageKey, label: 'Social → Video Assembly', description: 'Ritualized composition for TikTok, Reels & Shorts', icon: HOLYCamera },
    ],
  },
  {
    title: 'Print & Packaging',
    items: [
      { key: 'print-packaging-tokens' as PageKey, label: 'Print Tokens', description: 'Print-specific color, type, and treatment specs', icon: HOLYPrinter },
      { key: 'product-labels' as PageKey, label: 'Product Labels', description: 'Production-ready labels for all SKUs with US/EU variants', icon: HOLYCard },
      { key: 'holymist-label-showcase' as PageKey, label: 'hølymist™ Label v3.0', description: 'Premium front-facing label with spot gloss & emboss', icon: HOLYTag },
      { key: 'labels2' as PageKey, label: 'Labels 2.0', description: 'Near-production label expression system — hierarchy & material cues', icon: HOLYTag },
    ],
  },
  {
    title: 'Technical Reference',
    items: [
      { key: 'email-components' as PageKey, label: 'Email Components', description: 'Email modules for Klaviyo & Shopify', icon: HOLYCard },
      { key: 'mobile-components' as PageKey, label: 'Mobile Components', description: 'Mobile-native UI for apps & responsive web', icon: HOLYCircle },
      { key: 'print-components' as PageKey, label: 'Print Components', description: 'Selfnamed validation tools & print specs', icon: HOLYPrinter },
      { key: 'shopify-tokens' as PageKey, label: 'Shopify Tokens', description: 'Design tokens for Shopify-specific elements', icon: HOLYDna },
      { key: 'shopify-base-components' as PageKey, label: 'Shopify Base Components', description: 'Primitive elements for Shopify', icon: HOLYSquare },
      { key: 'shopify-icons-marks' as PageKey, label: 'Shopify Icons & Marks', description: '2D icons, symbols & brand glyphs', icon: HOLYEye },
      { key: 'shopify-motion-states' as PageKey, label: 'Shopify Motion / States', description: 'Defined animations, hovers & interactions', icon: HOLYWand },
      { key: 'shopify-ui-components' as PageKey, label: 'Shopify UI Components', description: 'Reusable layouts: cards, filters, banners, navs', icon: HOLYPackage },
      { key: 'shopify-ritual-systems' as PageKey, label: 'Shopify Ritual Systems', description: 'Color-coded variants by Ritual system', icon: HOLYDna },
      { key: 'shopify-label-system' as PageKey, label: 'Shopify Label System', description: 'Universal product tagging & metadata labels', icon: HOLYTag },
      { key: 'shopify-navigation' as PageKey, label: 'Shopify Navigation', description: 'Desktop & mobile nav, mega menus, breadcrumbs', icon: HOLYCompass },
      { key: 'shopify-signups' as PageKey, label: 'Shopify Signups', description: 'Modal, embedded, and mobile signup variants', icon: HOLYDocument },
    ],
  },
];

const pageComponents: Record<PageKey, React.ComponentType> = {
  'getting-started': GettingStartedPage,
  'file-overview': FileOverviewPage,
  'tokens': TokensPage,
  'systems-products': SystemsProductsPage,
  'visual-direction': VisualDirectionPage,
  'voice-tone': VoiceTonePage,
  'sitemap': SitemapPage,
  'icons-marks': IconsMarksPage,
  'motion-states': MotionStatesPage,
  'base-components': BaseComponentsPage,
  'ui-components': UIComponentsPage,
  'ritual-systems': RitualSystemsPage,
  'label-system': LabelSystemPage,
  'email-components': EmailComponentsPage,
  'mobile-components': MobileComponentsPage,
  'homepage': HomePage,
  'pdp-experience': PDPExperiencePage,
  'product-listing': ProductListingPage,
  'ritual-finder': RitualFinderPage,
  'search': SearchPage,
  'navigation': NavigationPage,
  'signups': SignupsPage,
  'print-packaging-tokens': PrintPackagingTokensPage,
  'product-labels': ProductLabelsPage,
  'holymist-label-showcase': HolymistLabelShowcase,
  'print-components': PrintComponentsPage,
  'root-architecture': RootArchitecturePage,
  'video-assembly': VideoAssemblyPage,
  'labels2': Labels2Page,
  'holy-homepage': HOLYHomePage,
  'shopify-brand-assets': ShopifyBrandAssetsPage,
  'shopify-tokens': ShopifyTokensPage,
  'shopify-base-components': ShopifyBaseComponentsPage,
  'shopify-icons-marks': ShopifyIconsMarksPage,
  'shopify-motion-states': ShopifyMotionStatesPage,
  'shopify-ui-components': ShopifyUIComponentsPage,
  'shopify-ritual-systems': ShopifyRitualSystemsPage,
  'shopify-label-system': ShopifyLabelSystemPage,
  'shopify-navigation': ShopifyNavigationPage,
  'shopify-signups': ShopifySignupsPage,
};

function AppSidebar({ currentPage, onPageChange }: { currentPage: PageKey; onPageChange: (page: PageKey) => void }) {
  return (
    <Sidebar>
      <SidebarContent style={{ backgroundColor: '#F9F6F0' }}>
        {/* Header */}
        <div className="p-6 border-b border-border">
          <h2 style={{ display: 'flex', flexDirection: 'column', gap: '2px', margin: 0 }}>
            <span style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '500' }}>
              HØLY | Ritual Care<TM variant="logo" />
            </span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.5, fontWeight: '400' }}>
              Design System v3.0 — Root Architecture
            </span>
          </h2>
        </div>

        {/* Navigation Sections */}
        {navigationSections.map((section, index) => {
          const isTechnicalReference = section.title === 'Technical Reference';
          
          return (
          <SidebarGroup key={index}>
            <SidebarGroupLabel style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '11px', 
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: '#1A1A1A',
              opacity: isTechnicalReference ? 0.3 : 0.5,
              padding: '12px 16px 8px'
            }}>
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = currentPage === item.key;
                  return (
                    <SidebarMenuItem key={item.key}>
                      <SidebarMenuButton
                        onClick={() => onPageChange(item.key)}
                        isActive={isActive}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          color: '#1A1A1A',
                          backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                          borderRadius: '8px',
                          margin: '2px 8px',
                          padding: '10px 12px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'flex-start',
                          height: 'auto',
                          minHeight: '48px',
                          opacity: isTechnicalReference && !isActive ? 0.5 : 1,
                        }}
                      >
                        <IconComponent size={16} color="#1A1A1A" opacity={isActive ? 1 : 0.6} strokeWidth={1.5} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
                          <span>{item.label}</span>
                          <span style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '11px',
                            color: '#1A1A1A',
                            opacity: 0.5,
                            fontWeight: '400',
                            fontStyle: 'italic',
                          }}>
                            {item.description}
                          </span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )})}
      </SidebarContent>
    </Sidebar>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('getting-started');
  const CurrentPageComponent = pageComponents[currentPage];
  const isRitualFinderPage = currentPage === 'ritual-finder';

  return (
    <SidebarProvider>
      <RitualFinderCTAProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar currentPage={currentPage} onPageChange={setCurrentPage} />
          <SidebarInset className="flex-1">
            {/* Header */}
            <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-6">
              <SidebarTrigger />
              <Separator orientation="vertical" className="h-6" />
              <div className="flex-1">
                <h1 style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  fontWeight: '500',
                  color: '#1A1A1A',
                  margin: 0 
                }}>
                  {navigationSections
                    .flatMap(s => s.items)
                    .find(i => i.key === currentPage)?.label || <>HØLY<TM variant="logo" /> Operating System</>}
                </h1>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-6" style={{ backgroundColor: '#F9F6F0' }}>
              <CurrentPageComponent />
            </main>
          </SidebarInset>
        </div>
      </RitualFinderCTAProvider>
    </SidebarProvider>
  );
}