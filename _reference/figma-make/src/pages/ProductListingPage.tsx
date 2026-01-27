import { useState } from 'react';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { MobilePreviewFrame, DesktopPreviewFrame, AnnotationBox } from '../components/ui-blocks/ExperienceLayout';
import { PLPMobileContent, PLPDesktopContent } from '../components/ui-blocks/PLPContent';
import { HOLYStore } from '../components/icons/HOLYIcons';

// Core System Components
import { 
  GlobalNavigation, 
  GlobalFooter, 
  Breadcrumb
} from '../components/core-system';

// ========================================
// PRODUCT LISTING PAGE (PLP) EXPERIENCE
// ========================================
// Motion-enhanced shopping grid with filters

export default function ProductListingPage() {
  const [viewMode, setViewMode] = useState<'demo' | 'live'>('live');
  
  if (viewMode === 'demo') {
    // Demo mode showing preview frames
    return (
      <div className="space-y-8">
        
        {/* Page Header & Annotations */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <HOLYStore size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
                <h2 style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '32px', 
                  fontWeight: '500', 
                  color: '#1A1A1A', 
                  lineHeight: '120%'
                }}>
                  Product Listing Page (PLP) — Demo Mode
                </h2>
              </div>
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px', 
                color: '#1A1A1A', 
                opacity: 0.6,
                lineHeight: '140%'
              }}>
                Motion-enhanced shopping experience • Dynamic filters • Sacred Aura hover states • Ritual Pulse clicks
              </p>
            </div>
            <button 
              onClick={() => setViewMode('live')}
              style={{ 
                backgroundColor: '#1A1A1A', 
                color: '#F9F6F0',
                padding: '8px 16px',
                borderRadius: '8px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '600'
              }}
            >
              Switch to Live Mode
            </button>
          </div>

        {/* Page Structure */}
        <AnnotationBox title="Shopping Experience Features" variant="flow">
          <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', lineHeight: '180%' }}>
            <p><strong>Filtering:</strong> System filters (5 rituals), purpose filters, price range, in-stock toggle</p>
            <p><strong>Sorting:</strong> Featured, Price (low/high), Newest, Bestsellers</p>
            <p><strong>Product Cards:</strong> Image hover zoom, badge overlays, quick add to cart, Sacred Aura glow</p>
            <p><strong>Mobile:</strong> Filter drawer, sticky sort bar, single-column grid, thumb-friendly CTAs</p>
            <p><strong>Desktop:</strong> Sidebar filters, 3-4 column grid, quick view modal, enhanced hover states</p>
          </div>
        </AnnotationBox>

        <div className="mt-4">
          <AnnotationBox title="Component Sources" variant="components">
            <div className="grid grid-cols-2 gap-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.8 }}>
              <div>
                <p><strong>EnhancedProductCard</strong> → PLP Components</p>
                <p><strong>FilterSidebar</strong> → PLP Components</p>
                <p><strong>FilterDrawer</strong> → PLP Components</p>
                <p><strong>QuickViewModal</strong> → PLP Components</p>
              </div>
              <div>
                <p><strong>ProductBadges</strong> → UI Components</p>
                <p><strong>Breadcrumb</strong> → Base Components</p>
                <p><strong>Button/Select</strong> → Base Components</p>
                <p><strong>Motion States</strong> → Sacred Aura (hover)</p>
              </div>
            </div>
          </AnnotationBox>
        </div>

        <div className="mt-4">
          <AnnotationBox title="Motion & Interactions" variant="info">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '170%' }}>
              <strong>Sacred Aura Hover:</strong> Gentle glow effect on product cards. 
              <strong> Ritual Pulse Click:</strong> Scale feedback on add-to-cart buttons. 
              <strong> Image Zoom:</strong> 1.05x scale on hover. All transitions use 0.3-0.5s ease curves for luxurious feel.
            </p>
          </AnnotationBox>
        </div>
      </div>

      <Separator style={{ backgroundColor: '#DADADA' }} />

      {/* Mobile Preview */}
      <div 
        className="p-8 rounded-2xl"
        style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
      >
        <MobilePreviewFrame 
          title="Filter drawer + single-column grid"
          showBreadcrumbs={true}
          breadcrumbItems={[
            { label: 'Home', href: '#' },
            { label: 'Shop', href: '#' },
            { label: 'All Rituals' }
          ]}
        >
          <PLPMobileContent />
        </MobilePreviewFrame>
      </div>

      {/* Desktop Preview */}
      <div 
        className="p-8 rounded-2xl"
        style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
      >
        <DesktopPreviewFrame 
          title="Sidebar filters + multi-column grid"
          showBreadcrumbs={true}
          breadcrumbItems={[
            { label: 'Home', href: '#' },
            { label: 'Shop', href: '#' },
            { label: 'All Rituals' }
          ]}
        >
          <PLPDesktopContent />
        </DesktopPreviewFrame>
      </div>

    </div>
    );
  }
  
  // Live mode - full experience
  return (
    <>
      <div className="space-y-8">
        
        {/* Page Header */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <HOLYStore size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
                <h2 style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '32px', 
                  fontWeight: '500', 
                  color: '#1A1A1A', 
                  lineHeight: '120%'
                }}>
                  Product Listing Page (PLP)
                </h2>
              </div>
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px', 
                color: '#1A1A1A', 
                opacity: 0.6,
                lineHeight: '140%'
              }}>
                Live shopping experience using core-system components
              </p>
            </div>
            <Badge style={{ backgroundColor: '#5E6458', color: '#F9F6F0' }}>
              ✅ Core Components
            </Badge>
          </div>
        </div>

        {/* Live PLP Experience */}
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          
          {/* Navigation - Using Core System Component */}
          <GlobalNavigation cartCount={0} showAnnouncement={true} />
          
          {/* Breadcrumb */}
          <Breadcrumb items={[
            { label: 'Home', href: '#' },
            { label: 'Shop', href: '#' },
            { label: 'All Rituals' }
          ]} />
          
          {/* PLP Content - Responsive */}
          <div className="block md:hidden">
            <PLPMobileContent />
          </div>
          
          <div className="hidden md:block">
            <PLPDesktopContent />
          </div>
        </div>
        
      </div>
      
      <GlobalFooter />
    </>
  );
}
