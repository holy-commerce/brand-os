import { useState } from 'react';
import { Badge } from '../components/ui/badge';
import { RitualSystemBadge } from '../components/core-system';
import { 
  HOLYSparkle, 
  HOLYDroplet, 
  HOLYFlower, 
  HOLYLeaf, 
  HOLYWave,
  HOLYGem,
  HOLYHeart,
  HOLYMessage
} from '../components/icons/HOLYIcons';
import { 
  Home, 
  ShoppingBag, 
  Sparkles, 
  BookOpen, 
  Info, 
  User, 
  CreditCard,
  Mail,
  FileText,
  ChevronDown,
  ChevronRight,
  Filter,
  Tag,
  Search,
  Smartphone,
  Monitor
} from 'lucide-react';

// Page node component
function PageNode({ 
  title, 
  subtitle, 
  color = '#1A1A1A', 
  textColor = '#F9F6F0',
  icon: Icon,
  ritualIcon: RitualIcon,
  badges = [],
  deviceType,
  isExpanded = true,
  onToggle
}: { 
  title: string; 
  subtitle?: string; 
  color?: string;
  textColor?: string;
  icon?: any;
  ritualIcon?: any;
  badges?: string[];
  deviceType?: 'desktop' | 'mobile' | 'both';
  isExpanded?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div 
      className="relative"
      style={{
        backgroundColor: color,
        color: textColor,
        borderRadius: '12px',
        padding: '16px 20px',
        minWidth: '240px',
        border: `2px solid ${color === '#FFFFFF' ? '#DADADA' : color}`,
        cursor: onToggle ? 'pointer' : 'default'
      }}
      onClick={onToggle}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1">
          {Icon && <Icon className="w-5 h-5 mt-0.5" style={{ flexShrink: 0 }} />}
          {RitualIcon && <RitualIcon size={20} color={textColor} opacity={1} strokeWidth={1.5} />}
          <div className="flex-1">
            <div style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: '600',
              marginBottom: subtitle ? '4px' : '0'
            }}>
              {title}
            </div>
            {subtitle && (
              <div style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '11px', 
                opacity: 0.7,
                lineHeight: '1.4'
              }}>
                {subtitle}
              </div>
            )}
          </div>
        </div>
        {onToggle && (
          <div style={{ flexShrink: 0 }}>
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </div>
        )}
      </div>
      
      {badges.length > 0 && (
        <div className="flex gap-2 mt-3 flex-wrap">
          {badges.map((badge, idx) => (
            <Badge 
              key={idx}
              style={{
                backgroundColor: textColor === '#F9F6F0' ? 'rgba(249, 246, 240, 0.2)' : 'rgba(26, 26, 26, 0.1)',
                color: textColor,
                fontSize: '9px',
                padding: '2px 6px',
                fontWeight: '600'
              }}
            >
              {badge}
            </Badge>
          ))}
        </div>
      )}

      {deviceType && (
        <div className="absolute -top-2 -right-2 flex gap-1">
          {(deviceType === 'desktop' || deviceType === 'both') && (
            <div 
              className="rounded-full flex items-center justify-center"
              style={{
                backgroundColor: '#5E6458',
                width: '20px',
                height: '20px'
              }}
            >
              <Monitor className="w-3 h-3" color="#F9F6F0" />
            </div>
          )}
          {(deviceType === 'mobile' || deviceType === 'both') && (
            <div 
              className="rounded-full flex items-center justify-center"
              style={{
                backgroundColor: '#9C887A',
                width: '20px',
                height: '20px'
              }}
            >
              <Smartphone className="w-3 h-3" color="#F9F6F0" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Connector line component
function Connector({ type = 'vertical', length = 40 }: { type?: 'vertical' | 'horizontal' | 'branch'; length?: number }) {
  if (type === 'vertical') {
    return <div style={{ width: '2px', height: `${length}px`, backgroundColor: '#DADADA', margin: '0 auto' }} />;
  }
  if (type === 'horizontal') {
    return <div style={{ height: '2px', width: `${length}px`, backgroundColor: '#DADADA' }} />;
  }
  return null;
}

// Section header
function SectionHeader({ title, subtitle, icon: Icon }: { title: string; subtitle?: string; icon?: any }) {
  return (
    <div className="text-center space-y-2 mb-8">
      {Icon && (
        <div className="flex justify-center mb-3">
          <div 
            className="rounded-full flex items-center justify-center"
            style={{
              backgroundColor: '#1A1A1A',
              width: '48px',
              height: '48px'
            }}
          >
            <Icon className="w-6 h-6" color="#F9F6F0" />
          </div>
        </div>
      )}
      <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A' }}>
        {title}
      </h3>
      {subtitle && (
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function SitemapPage() {
  const [expandedSections, setExpandedSections] = useState({
    shop: true,
    ritualSystems: true,
    ritualFinder: true,
    archive: true,
    account: true,
    checkout: true,
    legal: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      {/* Hero */}
      <div className="text-center py-16 px-6" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '48px', 
            color: '#F9F6F0',
            marginBottom: '16px'
          }}>
            Website Sitemap
          </h1>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '15px', 
            color: '#F9F6F0',
            opacity: 0.8,
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Complete navigation architecture for the HØLY™ consumer website. This represents all core pages, flows, components, and personalization pathways across desktop and mobile experiences.
          </p>

          {/* Legend */}
          <div className="flex justify-center gap-6 pt-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5E6458' }}>
                <Monitor className="w-3 h-3" color="#F9F6F0" />
              </div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', opacity: 0.7 }}>
                Desktop
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#9C887A' }}>
                <Smartphone className="w-3 h-3" color="#F9F6F0" />
              </div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', opacity: 0.7 }}>
                Mobile
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sitemap */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        
        {/* Root - Home */}
        <div className="flex flex-col items-center mb-12">
          <PageNode 
            title="Home" 
            subtitle="Primary landing page with Ritual Welcome, Featured Systems, Ritual Finder CTA"
            icon={Home}
            color="#1A1A1A"
            textColor="#F9F6F0"
            badges={['Hero', 'Featured Systems', 'Signup Modal']}
            deviceType="both"
          />
          <Connector type="vertical" length={60} />
        </div>

        {/* Top-Level Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* 1. Shop */}
          <div className="space-y-4">
            <PageNode 
              title="Shop" 
              subtitle="All Products (PLP)"
              icon={ShoppingBag}
              color="#FFFFFF"
              textColor="#1A1A1A"
              deviceType="both"
              isExpanded={expandedSections.shop}
              onToggle={() => toggleSection('shop')}
            />
            
            {expandedSections.shop && (
              <>
                <Connector type="vertical" length={20} />
                
                <div className="ml-8 space-y-4">
                  {/* Filters & Tags */}
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <Filter className="w-4 h-4" color="#1A1A1A" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '600', color: '#1A1A1A' }}>
                        Filters
                      </span>
                    </div>
                    <div className="space-y-2">
                      <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px' }}>
                        Ritual System
                      </Badge>
                      <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px' }}>
                        Purpose (Cleanse, Hydrate, Protect, Treat)
                      </Badge>
                      <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px' }}>
                        Time of Day
                      </Badge>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4" color="#1A1A1A" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '600', color: '#1A1A1A' }}>
                        Tags
                      </span>
                    </div>
                    <div className="space-y-2">
                      <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px' }}>
                        Best Seller
                      </Badge>
                      <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px' }}>
                        New
                      </Badge>
                      <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px' }}>
                        Essentials
                      </Badge>
                    </div>
                  </div>

                  {/* PDP */}
                  <Connector type="vertical" length={20} />
                  <PageNode 
                    title="Product Detail Page (PDP)" 
                    subtitle="Full product info, ingredients, ritual guidance, reviews"
                    icon={Search}
                    color="#FFFFFF"
                    textColor="#1A1A1A"
                    badges={['Add to Cart', 'Ritual Guidance', 'Reviews']}
                    deviceType="both"
                  />
                </div>
              </>
            )}
          </div>

          {/* 2. Ritual Systems */}
          <div className="space-y-4">
            <PageNode 
              title="Ritual Systems" 
              subtitle="Overview + 5 System Pages"
              icon={Sparkles}
              color="#FFFFFF"
              textColor="#1A1A1A"
              deviceType="both"
              isExpanded={expandedSections.ritualSystems}
              onToggle={() => toggleSection('ritualSystems')}
            />
            
            {expandedSections.ritualSystems && (
              <>
                <Connector type="vertical" length={20} />
                
                <div className="ml-8 space-y-3">
                  <PageNode 
                    title="Ritual Aftercare™" 
                    subtitle="Clinical meets ceremonial"
                    ritualIcon={HOLYDroplet}
                    color="#AAB5B2"
                    textColor="#1A1A1A"
                    badges={['System Page', 'Products', 'Philosophy']}
                    deviceType="both"
                  />
                  <PageNode 
                    title="Ritual Renewal™" 
                    subtitle="Radiance restored"
                    ritualIcon={HOLYFlower}
                    color="#D9C4BB"
                    textColor="#1A1A1A"
                    badges={['System Page', 'Products', 'Philosophy']}
                    deviceType="both"
                  />
                  <PageNode 
                    title="Ritual Touch™" 
                    subtitle="Sacred sensuality"
                    ritualIcon={HOLYLeaf}
                    color="#5E6458"
                    textColor="#F9F6F0"
                    badges={['System Page', 'Products', 'Philosophy']}
                    deviceType="both"
                  />
                  <PageNode 
                    title="Ritual Union™" 
                    subtitle="Connected intimacy"
                    ritualIcon={HOLYHeart}
                    color="#D7D0C5"
                    textColor="#1A1A1A"
                    badges={['System Page', 'Products', 'Philosophy']}
                    deviceType="both"
                  />
                  <PageNode 
                    title="Ritual Vital™" 
                    subtitle="Vitality elevated"
                    ritualIcon={HOLYGem}
                    color="#9C887A"
                    textColor="#F9F6F0"
                    badges={['System Page', 'Products', 'Philosophy']}
                    deviceType="both"
                  />
                </div>
              </>
            )}
          </div>

          {/* 3. Ritual Finder */}
          <div className="space-y-4">
            <PageNode 
              title="Ritual Finder" 
              subtitle="YONI™-powered personalization"
              icon={HOLYMessage}
              color="#1A1A1A"
              textColor="#F9F6F0"
              deviceType="both"
              isExpanded={expandedSections.ritualFinder}
              onToggle={() => toggleSection('ritualFinder')}
            />
            
            {expandedSections.ritualFinder && (
              <>
                <Connector type="vertical" length={20} />
                
                <div className="ml-8 space-y-3">
                  <PageNode 
                    title="Chat Modal (Desktop)" 
                    subtitle="Bottom-right chat bubble interface"
                    color="#FFFFFF"
                    textColor="#1A1A1A"
                    badges={['Modal', 'YONI™ Interface']}
                    deviceType="desktop"
                  />
                  <PageNode 
                    title="Embedded Module" 
                    subtitle="In-page quiz (PDP, Homepage)"
                    color="#FFFFFF"
                    textColor="#1A1A1A"
                    badges={['Embedded', 'Quiz Flow']}
                    deviceType="both"
                  />
                  <PageNode 
                    title="Fullscreen Experience" 
                    subtitle="Dedicated Ritual Finder page"
                    color="#FFFFFF"
                    textColor="#1A1A1A"
                    badges={['Fullscreen', 'Mobile-optimized']}
                    deviceType="mobile"
                  />
                  <Connector type="vertical" length={20} />
                  <PageNode 
                    title="Personalized Recommendation" 
                    subtitle="Direct to PDP with ritual context"
                    color="#D9C4BB"
                    textColor="#1A1A1A"
                    badges={['Recommendation', 'Add to Cart CTA']}
                    deviceType="both"
                  />
                </div>
              </>
            )}
          </div>

          {/* 4. The Archive */}
          <div className="space-y-4">
            <PageNode 
              title="The Archive" 
              subtitle="Ritual Content Library"
              icon={BookOpen}
              color="#FFFFFF"
              textColor="#1A1A1A"
              deviceType="both"
              isExpanded={expandedSections.archive}
              onToggle={() => toggleSection('archive')}
            />
            
            {expandedSections.archive && (
              <>
                <Connector type="vertical" length={20} />
                
                <div className="ml-8 space-y-3">
                  <PageNode 
                    title="Journal Entries" 
                    subtitle="Ritual philosophy, guides, wellness content"
                    color="#FFFFFF"
                    textColor="#1A1A1A"
                    badges={['Content', 'Editorial']}
                    deviceType="both"
                  />
                  <PageNode 
                    title="Ritual Guides" 
                    subtitle="Step-by-step routines"
                    color="#FFFFFF"
                    textColor="#1A1A1A"
                    badges={['How-to', 'Educational']}
                    deviceType="both"
                  />
                </div>
              </>
            )}
          </div>

          {/* 5. About */}
          <div className="space-y-4">
            <PageNode 
              title="About" 
              subtitle="Brand story & philosophy"
              icon={Info}
              color="#FFFFFF"
              textColor="#1A1A1A"
              deviceType="both"
              isExpanded={expandedSections.account}
              onToggle={() => toggleSection('account')}
            />
            
            {expandedSections.account && (
              <>
                <Connector type="vertical" length={20} />
                
                <div className="ml-8 space-y-3">
                  <PageNode 
                    title="Brand Story" 
                    subtitle="HØLY™ origins and philosophy"
                    color="#FFFFFF"
                    textColor="#1A1A1A"
                    badges={['Brand', 'Philosophy']}
                    deviceType="both"
                  />
                  <PageNode 
                    title="YONI™ Origins" 
                    subtitle="AI ritual guide backstory"
                    color="#FFFFFF"
                    textColor="#1A1A1A"
                    badges={['Technology', 'Personalization']}
                    deviceType="both"
                  />
                </div>
              </>
            )}
          </div>

          {/* 6. Account */}
          <div className="space-y-4">
            <PageNode 
              title="Account" 
              subtitle="Login, Profile, Studio Portal"
              icon={User}
              color="#FFFFFF"
              textColor="#1A1A1A"
              deviceType="both"
              isExpanded={expandedSections.checkout}
              onToggle={() => toggleSection('checkout')}
            />
            
            {expandedSections.checkout && (
              <>
                <Connector type="vertical" length={20} />
                
                <div className="ml-8 space-y-3">
                  <PageNode 
                    title="Login / Create Account" 
                    subtitle="Email + password authentication"
                    color="#FFFFFF"
                    textColor="#1A1A1A"
                    badges={['Auth', 'Shopify']}
                    deviceType="both"
                  />
                  <PageNode 
                    title="Ritual Member Benefits" 
                    subtitle="Order history, saved rituals, personalization"
                    color="#FFFFFF"
                    textColor="#1A1A1A"
                    badges={['Member Portal', 'Personalization']}
                    deviceType="both"
                  />
                  <PageNode 
                    title="Studio Portal" 
                    subtitle="Professional access (B2B)"
                    color="#5E6458"
                    textColor="#F9F6F0"
                    badges={['B2B', 'Professional']}
                    deviceType="both"
                  />
                </div>
              </>
            )}
          </div>

        </div>

        {/* Horizontal Section: Cart + Checkout */}
        <div className="my-16">
          <SectionHeader 
            title="Commerce Flow" 
            subtitle="Cart, checkout, and confirmation pathway"
            icon={CreditCard}
          />
          
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <PageNode 
              title="Cart Drawer" 
              subtitle="Slide-out cart with ritual context"
              icon={ShoppingBag}
              color="#FFFFFF"
              textColor="#1A1A1A"
              badges={['Drawer', 'Sacred Orb Count']}
              deviceType="both"
            />
            <div className="hidden md:block">
              <Connector type="horizontal" length={60} />
            </div>
            <PageNode 
              title="Shopify Checkout" 
              subtitle="Payment, shipping, fulfillment"
              icon={CreditCard}
              color="#1A1A1A"
              textColor="#F9F6F0"
              badges={['Shopify', 'Payment']}
              deviceType="both"
            />
            <div className="hidden md:block">
              <Connector type="horizontal" length={60} />
            </div>
            <PageNode 
              title="Confirmation Page" 
              subtitle="Order confirmed, ritual begins"
              color="#5E6458"
              textColor="#F9F6F0"
              badges={['Thank You', 'Ritual Prep']}
              deviceType="both"
            />
          </div>
        </div>

        {/* Signup Modal Section */}
        <div className="my-16">
          <SectionHeader 
            title="Signup & Personalization" 
            subtitle="Email/SMS capture and preference collection"
            icon={Mail}
          />
          
          <div className="max-w-md mx-auto space-y-4">
            <PageNode 
              title="Signup Modal" 
              subtitle="Exit intent, Ritual Finder CTA trigger"
              icon={Mail}
              color="#9C887A"
              textColor="#F9F6F0"
              badges={['Modal', 'Email', 'SMS']}
              deviceType="both"
            />
            <Connector type="vertical" length={20} />
            <div className="ml-8 space-y-3">
              <PageNode 
                title="Email Capture" 
                subtitle="Step 1: Email input"
                color="#FFFFFF"
                textColor="#1A1A1A"
                badges={['Form', 'Validation']}
                deviceType="both"
              />
              <PageNode 
                title="SMS Opt-in" 
                subtitle="Step 2: Phone number for ritual reminders"
                color="#FFFFFF"
                textColor="#1A1A1A"
                badges={['Form', 'SMS Marketing']}
                deviceType="both"
              />
            </div>
          </div>
        </div>

        {/* Legal & Utility */}
        <div className="my-16">
          <SectionHeader 
            title="Legal & Utility" 
            subtitle="Footer links, policies, and support"
            icon={FileText}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <PageNode 
              title="Terms of Service" 
              color="#FFFFFF"
              textColor="#1A1A1A"
              deviceType="both"
            />
            <PageNode 
              title="Privacy Policy" 
              color="#FFFFFF"
              textColor="#1A1A1A"
              deviceType="both"
            />
            <PageNode 
              title="FAQ" 
              color="#FFFFFF"
              textColor="#1A1A1A"
              deviceType="both"
            />
            <PageNode 
              title="Contact Us" 
              color="#FFFFFF"
              textColor="#1A1A1A"
              deviceType="both"
            />
            <PageNode 
              title="Returns" 
              color="#FFFFFF"
              textColor="#1A1A1A"
              deviceType="both"
            />
          </div>
        </div>

        {/* Component Architecture Reference */}
        <div className="my-16 p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <h4 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '24px', 
            color: '#1A1A1A',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            Component Architecture Reference
          </h4>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '13px', 
            color: '#1A1A1A',
            opacity: 0.7,
            textAlign: 'center',
            marginBottom: '24px'
          }}>
            Pages leverage components from the HØLY™ Design System
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '12px', 
                fontWeight: '600',
                color: '#1A1A1A',
                marginBottom: '8px'
              }}>
                🧱 Base Components
              </div>
              <div className="space-y-2">
                <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px', display: 'block' }}>
                  Global Navigation
                </Badge>
                <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px', display: 'block' }}>
                  Global Footer
                </Badge>
                <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px', display: 'block' }}>
                  Breadcrumb
                </Badge>
                <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px', display: 'block' }}>
                  Product Card
                </Badge>
              </div>
            </div>

            <div className="space-y-3">
              <div style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '12px', 
                fontWeight: '600',
                color: '#1A1A1A',
                marginBottom: '8px'
              }}>
                📦 UI Components
              </div>
              <div className="space-y-2">
                <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px', display: 'block' }}>
                  PLP Components
                </Badge>
                <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px', display: 'block' }}>
                  PDP Modules
                </Badge>
                <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px', display: 'block' }}>
                  Cart Elements
                </Badge>
                <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px', display: 'block' }}>
                  Checkout Elements
                </Badge>
              </div>
            </div>

            <div className="space-y-3">
              <div style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '12px', 
                fontWeight: '600',
                color: '#1A1A1A',
                marginBottom: '8px'
              }}>
                🪄 Motion / States
              </div>
              <div className="space-y-2">
                <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px', display: 'block' }}>
                  CTA Glow (Sacred Breath)
                </Badge>
                <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px', display: 'block' }}>
                  Cart Orb (Sacred Pulse)
                </Badge>
                <Badge style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A', fontSize: '10px', display: 'block' }}>
                  Hover States
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Summary */}
        <div className="my-16 text-center">
          <div className="inline-block p-8 rounded-2xl" style={{ backgroundColor: '#1A1A1A' }}>
            <h4 style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '20px', 
              color: '#F9F6F0',
              marginBottom: '12px'
            }}>
              Navigation Summary
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              <div>
                <div style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '32px', 
                  color: '#D7D0C5',
                  marginBottom: '4px'
                }}>
                  7
                </div>
                <div style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '11px', 
                  color: '#F9F6F0',
                  opacity: 0.7
                }}>
                  Top-Level Pages
                </div>
              </div>
              <div>
                <div style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '32px', 
                  color: '#AAB5B2',
                  marginBottom: '4px'
                }}>
                  5
                </div>
                <div style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '11px', 
                  color: '#F9F6F0',
                  opacity: 0.7
                }}>
                  Ritual Systems
                </div>
              </div>
              <div>
                <div style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '32px', 
                  color: '#D9C4BB',
                  marginBottom: '4px'
                }}>
                  4
                </div>
                <div style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '11px', 
                  color: '#F9F6F0',
                  opacity: 0.7
                }}>
                  Finder Formats
                </div>
              </div>
              <div>
                <div style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '32px', 
                  color: '#9C887A',
                  marginBottom: '4px'
                }}>
                  3
                </div>
                <div style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '11px', 
                  color: '#F9F6F0',
                  opacity: 0.7
                }}>
                  Commerce Steps
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
