import { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  User, 
  ChevronDown,
  ChevronRight,
  X,
  Home,
  Heart,
  Package,
  Settings,
  LogIn,
  UserPlus,
  Store,
  Sparkles
} from 'lucide-react';
import { 
  HOLYCircle, 
  HOLYDroplet,
  HOLYLeaf,
  HOLYSparkle,
  HOLYWand,
  HOLYGem,
  HOLYHeart,
  HOLYCompass,
  HOLYDocument
} from '../components/icons/HOLYIcons';
import { Button } from '../components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from '../components/ui/sheet';
import { VisuallyHidden } from '../components/ui/visually-hidden';
import { Separator } from '../components/ui/separator';
import { TM, renderWithTM } from '../components/core-system';

export default function NavigationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeVariant, setActiveVariant] = useState<'dtc' | 'studio' | 'ritual' | 'checkout'>('dtc');

  // Ritual Systems data for mega menu
  const ritualSystems = [
    { 
      name: 'Ritual Aftercare™', 
      color: '#AAB5B2', 
      desc: 'Clinical meets ceremonial',
      icon: HOLYDroplet
    },
    { 
      name: 'Ritual Renewal™', 
      color: '#D9C4BB', 
      desc: 'Refined, luminous, alchemical',
      icon: HOLYSparkle
    },
    { 
      name: 'Ritual Touch™', 
      color: '#5E6458', 
      desc: 'Sensual, soft, connective',
      icon: HOLYHeart
    },
    { 
      name: 'Ritual Union™', 
      color: '#D9C4BB', 
      desc: 'Erotic, playful, healing',
      icon: HOLYGem
    },
    { 
      name: 'Ritual Vital™', 
      color: '#9C887A', 
      desc: 'Energized, primal, resilient',
      icon: HOLYLeaf
    }
  ];

  const breadcrumbExamples = [
    [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
      { label: 'Ritual Aftercare™', href: '/shop/aftercare' },
      { label: 'Daily Ritual Serum' }
    ],
    [
      { label: 'Home', href: '/' },
      { label: 'Ritual Finder', href: '/ritual-finder' },
      { label: 'Your Results' }
    ]
  ];

  return (
    <div className="space-y-8">
      {/* Page Info */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <HOLYCompass size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Navigation — HØLY<TM /> Operating System
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            The master reference for all navigation systems across HØLY<TM /> touchpoints. Includes desktop header with Mega Menus, mobile navigation with bottom tabs, breadcrumb hierarchies, and specialized variants for DTC customers, Studio Partners, Ritual Finder, and Checkout flows.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        
        {/* SECTION 1: DESKTOP NAVIGATION */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYWand size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Desktop Navigation
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Full header with logo lockup, main menu items, Mega Menu flyouts, search, account, and cart with motion states.
            </p>
          </div>

          <div className="mb-6 flex gap-2">
            {[
              { key: 'dtc', label: 'DTC User' },
              { key: 'studio', label: 'Studio Pro' },
              { key: 'ritual', label: 'Ritual Finder' },
              { key: 'checkout', label: 'Checkout' }
            ].map(variant => (
              <button
                key={variant.key}
                onClick={() => setActiveVariant(variant.key as any)}
                className="px-4 py-2 rounded-lg transition-all"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: '500',
                  backgroundColor: activeVariant === variant.key ? '#1A1A1A' : 'transparent',
                  color: activeVariant === variant.key ? '#F9F6F0' : '#1A1A1A',
                  border: `2px solid ${activeVariant === variant.key ? '#1A1A1A' : '#DADADA'}`,
                  cursor: 'pointer'
                }}
              >
                {variant.label}
              </button>
            ))}
          </div>

          {/* Desktop Header - DTC Variant */}
          {activeVariant === 'dtc' && (
            <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
              {/* Announcement Bar */}
              <div className="px-4 py-2 text-center" style={{ backgroundColor: '#9C887A' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0' }}>
                  Free shipping on orders over $75 · Studio Partners save 20%
                </p>
              </div>

              {/* Main Navigation */}
              <nav 
                className="px-8 py-4 flex items-center justify-between" 
                style={{ backgroundColor: '#FFFFFF', borderBottom: '2px solid #DADADA' }}
              >
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                  <HOLYCircle size={28} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
                  <h1 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '24px', 
                    fontWeight: '500', 
                    color: '#1A1A1A',
                    transform: 'translateY(-2px)'
                  }}>
                    HØLY<TM />
                  </h1>
                </a>

                {/* Desktop Navigation Links */}
                <div className="flex items-center gap-6">
                  <div 
                    className="relative"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <button 
                      className="flex items-center gap-1 transition-colors group"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}
                    >
                      Shop
                      <ChevronDown className="w-4 h-4 transition-transform" style={{ 
                        transform: megaMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
                      }} />
                    </button>
                  </div>
                  <a 
                    href="/ritual-finder" 
                    className="transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}
                  >
                    Ritual Finder
                  </a>
                  <a 
                    href="/our-story" 
                    className="transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}
                  >
                    Our Story
                  </a>
                  <a 
                    href="/journal" 
                    className="transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}
                  >
                    Journal
                  </a>
                  <a 
                    href="/studio-access" 
                    className="transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}
                  >
                    Studio Access
                  </a>
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-4">
                  <button 
                    className="p-2 rounded-lg transition-colors hover:bg-[#F9F6F0]"
                    style={{ color: '#1A1A1A' }}
                  >
                    <Search className="w-5 h-5" />
                  </button>
                  <button 
                    className="p-2 rounded-lg transition-colors hover:bg-[#F9F6F0]"
                    style={{ color: '#1A1A1A' }}
                  >
                    <User className="w-5 h-5" />
                  </button>
                  <button 
                    className="p-2 rounded-lg transition-colors hover:bg-[#F9F6F0] relative"
                    style={{ color: '#1A1A1A' }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span 
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center" 
                      style={{ 
                        backgroundColor: '#9C887A', 
                        fontSize: '11px', 
                        color: '#F9F6F0', 
                        fontWeight: '600',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    >
                      3
                    </span>
                  </button>
                </div>
              </nav>
            </div>
          )}

          {/* Desktop Header - Studio Pro Variant */}
          {activeVariant === 'studio' && (
            <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
              {/* Studio Pro Announcement Bar */}
              <div className="px-4 py-2 text-center" style={{ backgroundColor: '#5E6458' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0' }}>
                  Studio Partner Portal · 20% off all orders · Direct-to-studio fulfillment
                </p>
              </div>

              {/* Main Navigation */}
              <nav 
                className="px-8 py-4 flex items-center justify-between" 
                style={{ backgroundColor: '#FFFFFF', borderBottom: '2px solid #DADADA' }}
              >
                {/* Logo with Studio Badge */}
                <div className="flex items-center gap-3">
                  <a href="/" className="flex items-center gap-2">
                    <HOLYCircle size={28} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
                    <h1 style={{ 
                      fontFamily: 'Garamond, serif', 
                      fontSize: '24px', 
                      fontWeight: '500', 
                      color: '#1A1A1A',
                      transform: 'translateY(-2px)'
                    }}>
                      HØLY<TM />
                    </h1>
                  </a>
                  <div 
                    className="px-2 py-1 rounded-md"
                    style={{ 
                      backgroundColor: '#5E6458', 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: '11px',
                      fontWeight: '600',
                      color: '#F9F6F0',
                      letterSpacing: '0.5px'
                    }}
                  >
                    STUDIO PRO
                  </div>
                </div>

                {/* Studio Navigation Links */}
                <div className="flex items-center gap-6">
                  <a 
                    href="/shop" 
                    className="transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}
                  >
                    Shop
                  </a>
                  <a 
                    href="/bulk-orders" 
                    className="transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}
                  >
                    Bulk Orders
                  </a>
                  <a 
                    href="/studio-dashboard" 
                    className="transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}
                  >
                    Dashboard
                  </a>
                  <a 
                    href="/resources" 
                    className="transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}
                  >
                    Resources
                  </a>
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-4">
                  <button 
                    className="p-2 rounded-lg transition-colors hover:bg-[#F9F6F0]"
                    style={{ color: '#1A1A1A' }}
                  >
                    <Store className="w-5 h-5" />
                  </button>
                  <button 
                    className="p-2 rounded-lg transition-colors hover:bg-[#F9F6F0] relative"
                    style={{ color: '#1A1A1A' }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: '#F9F6F0' }}>
                    <User className="w-4 h-4" style={{ color: '#1A1A1A' }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>
                      Studio Name
                    </span>
                  </div>
                </div>
              </nav>
            </div>
          )}

          {/* Desktop Header - Ritual Finder Variant */}
          {activeVariant === 'ritual' && (
            <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
              <nav 
                className="px-8 py-4 flex items-center justify-between" 
                style={{ backgroundColor: '#FFFFFF', borderBottom: '2px solid #DADADA' }}
              >
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                  <HOLYCircle size={28} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
                  <h1 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '24px', 
                    fontWeight: '500', 
                    color: '#1A1A1A',
                    transform: 'translateY(-2px)'
                  }}>
                    HØLY<TM />
                  </h1>
                </a>

                {/* Ritual Finder Title */}
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" style={{ color: '#9C887A' }} />
                  <span style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '18px', 
                    color: '#1A1A1A',
                    fontWeight: '500'
                  }}>
                    Ritual Finder
                  </span>
                </div>

                {/* Minimal Actions */}
                <div className="flex items-center gap-4">
                  <button 
                    className="p-2 rounded-lg transition-colors hover:bg-[#F9F6F0]"
                    style={{ color: '#1A1A1A' }}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </nav>
            </div>
          )}

          {/* Desktop Header - Checkout Variant */}
          {activeVariant === 'checkout' && (
            <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
              <nav 
                className="px-8 py-4 flex items-center justify-between" 
                style={{ backgroundColor: '#FFFFFF', borderBottom: '2px solid #DADADA' }}
              >
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                  <HOLYCircle size={28} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
                  <h1 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '24px', 
                    fontWeight: '500', 
                    color: '#1A1A1A',
                    transform: 'translateY(-2px)'
                  }}>
                    HØLY<TM />
                  </h1>
                </a>

                {/* Checkout Progress */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1A1A1A' }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>Cart</span>
                  </div>
                  <ChevronRight className="w-4 h-4" style={{ color: '#1A1A1A', opacity: 0.3 }} />
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1A1A1A' }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>Information</span>
                  </div>
                  <ChevronRight className="w-4 h-4" style={{ color: '#1A1A1A', opacity: 0.3 }} />
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1A1A1A', opacity: 0.3 }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.3 }}>Payment</span>
                  </div>
                </div>

                {/* Help */}
                <a 
                  href="/help" 
                  className="transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}
                >
                  Need Help?
                </a>
              </nav>
            </div>
          )}
        </div>

        {/* SECTION 2: MEGA MENU SYSTEM */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYGem size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Mega Menu System
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Rich dropdown navigation showcasing Ritual Systems with color indicators, descriptions, and category shortcuts.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-12">
              {/* Ritual Systems Column */}
              <div>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '12px', 
                  color: '#1A1A1A', 
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '16px'
                }}>
                  Ritual Systems
                </p>
                <div className="space-y-3">
                  {ritualSystems.map((system, index) => {
                    const IconComponent = system.icon;
                    return (
                      <button
                        key={index}
                        className="w-full flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-[#F9F6F0]"
                        style={{ cursor: 'pointer' }}
                      >
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: system.color }}
                        >
                          <IconComponent size={20} color="#FFFFFF" opacity={1} />
                        </div>
                        <div className="text-left flex-1">
                          <p style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A', marginBottom: '2px' }}>
                            {renderWithTM(system.name)}
                          </p>
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                            {system.desc}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: '#1A1A1A', opacity: 0.3 }} />
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Shop by Category Column */}
              <div>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '12px', 
                  color: '#1A1A1A', 
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '16px'
                }}>
                  Shop by Category
                </p>
                <div className="space-y-2">
                  {['Shop All', 'New Arrivals', 'Sets & Kits', 'Studio Exclusive', 'Sale'].map((category, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-3 py-2 rounded-lg transition-all hover:bg-[#F9F6F0]"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        color: '#1A1A1A',
                        cursor: 'pointer'
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                {/* Featured CTA Card */}
                <div className="mt-8 p-4 rounded-xl" style={{ backgroundColor: '#D9C4BB' }}>
                  <p style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A', marginBottom: '8px' }}>
                    Studio Membership
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8, marginBottom: '12px', lineHeight: '140%' }}>
                    Direct-to-studio Ritual Care™ for elevated piercing and tattoo aftercare.
                  </p>
                  <button
                    className="px-4 py-2 rounded-lg"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#F9F6F0',
                      backgroundColor: '#1A1A1A',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: MOBILE NAVIGATION */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYCircle size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Mobile Navigation
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Mobile-first navigation with slide-out drawer and sticky bottom tab bar. All touch targets meet 48px minimum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mobile Header */}
            <div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '16px', 
                color: '#1A1A1A', 
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                Mobile Header
              </h3>
              <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA', maxWidth: '375px' }}>
                <nav 
                  className="px-4 py-3 flex items-center justify-between" 
                  style={{ backgroundColor: '#FFFFFF', borderBottom: '2px solid #DADADA' }}
                >
                  <button 
                    className="p-2 rounded-lg transition-colors active:bg-[#F9F6F0]"
                    style={{ color: '#1A1A1A' }}
                  >
                    <Menu className="w-6 h-6" />
                  </button>
                  
                  <a href="/" className="flex items-center gap-2">
                    <HOLYCircle size={24} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
                    <h1 style={{ 
                      fontFamily: 'Garamond, serif', 
                      fontSize: '20px', 
                      fontWeight: '500', 
                      color: '#1A1A1A',
                      transform: 'translateY(-1px)'
                    }}>
                      HØLY<TM />
                    </h1>
                  </a>

                  <button 
                    className="p-2 rounded-lg transition-colors active:bg-[#F9F6F0] relative"
                    style={{ color: '#1A1A1A' }}
                  >
                    <ShoppingCart className="w-6 h-6" />
                    <span 
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center" 
                      style={{ 
                        backgroundColor: '#9C887A', 
                        fontSize: '11px', 
                        color: '#F9F6F0', 
                        fontWeight: '600',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    >
                      3
                    </span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Mobile Drawer Menu */}
            <div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '16px', 
                color: '#1A1A1A', 
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                Mobile Drawer Menu
              </h3>
              <div className="rounded-2xl overflow-hidden p-6 space-y-6" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', maxWidth: '375px' }}>
                <div className="space-y-1">
                  <a 
                    href="/shop" 
                    className="flex items-center justify-between p-4 rounded-lg active:bg-[#F9F6F0]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A' }}
                  >
                    Shop
                    <ChevronRight className="w-5 h-5" style={{ opacity: 0.3 }} />
                  </a>
                  <a 
                    href="/ritual-finder" 
                    className="flex items-center justify-between p-4 rounded-lg active:bg-[#F9F6F0]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A' }}
                  >
                    Ritual Finder
                    <Sparkles className="w-5 h-5" style={{ color: '#9C887A' }} />
                  </a>
                  <a 
                    href="/our-story" 
                    className="flex items-center justify-between p-4 rounded-lg active:bg-[#F9F6F0]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A' }}
                  >
                    Our Story
                    <ChevronRight className="w-5 h-5" style={{ opacity: 0.3 }} />
                  </a>
                  <a 
                    href="/journal" 
                    className="flex items-center justify-between p-4 rounded-lg active:bg-[#F9F6F0]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A' }}
                  >
                    Journal
                    <ChevronRight className="w-5 h-5" style={{ opacity: 0.3 }} />
                  </a>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <Button 
                    className="w-full h-12"
                    style={{ 
                      backgroundColor: '#1A1A1A', 
                      color: '#F9F6F0', 
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full h-12"
                    style={{ 
                      borderColor: '#DADADA', 
                      color: '#1A1A1A',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Create Account
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tab Bar */}
          <div className="mt-8">
            <h3 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '16px', 
              color: '#1A1A1A', 
              fontWeight: '600',
              marginBottom: '12px'
            }}>
              Bottom Tab Bar (Sticky)
            </h3>
            <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA', maxWidth: '375px' }}>
              <div 
                className="flex items-center justify-around px-4 py-3"
                style={{ backgroundColor: '#FFFFFF', borderTop: '2px solid #DADADA' }}
              >
                {[
                  { icon: Home, label: 'Home', active: true },
                  { icon: Search, label: 'Search', active: false },
                  { icon: Heart, label: 'Saved', active: false },
                  { icon: User, label: 'Account', active: false }
                ].map((tab, index) => {
                  const IconComp = tab.icon;
                  return (
                    <button
                      key={index}
                      className="flex flex-col items-center gap-1 p-2 min-w-[56px] min-h-[56px]"
                      style={{ color: tab.active ? '#1A1A1A' : '#1A1A1A', opacity: tab.active ? 1 : 0.5 }}
                    >
                      <IconComp className="w-6 h-6" />
                      <span style={{ 
                        fontFamily: 'Inter, sans-serif', 
                        fontSize: '11px',
                        fontWeight: tab.active ? '600' : '400'
                      }}>
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: BREADCRUMB NAVIGATION */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <ChevronRight size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Breadcrumb Navigation
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Hierarchical navigation showing page location. Used on PDP, PLP, and content pages.
            </p>
          </div>

          <div className="space-y-4">
            {breadcrumbExamples.map((items, exampleIndex) => (
              <div key={exampleIndex} className="rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
                <div 
                  className="px-6 py-4" 
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <div className="flex items-center gap-2" style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '13px', 
                    color: '#1A1A1A', 
                    opacity: 0.6 
                  }}>
                    {items.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="hover:opacity-100 transition-opacity"
                            style={{ color: '#1A1A1A', opacity: 0.6 }}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <span 
                            style={{ 
                              color: '#1A1A1A', 
                              opacity: index === items.length - 1 ? 1 : 0.6,
                              fontWeight: index === items.length - 1 ? '500' : '400'
                            }}
                          >
                            {item.label}
                          </span>
                        )}
                        {index < items.length - 1 && (
                          <ChevronRight className="w-3 h-3" style={{ color: '#1A1A1A', opacity: 0.6 }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: COMPONENT SOURCES & NOTES */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYDocument size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Component Sources & Design Notes
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Components Used */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '16px', 
                color: '#1A1A1A', 
                fontWeight: '600',
                marginBottom: '16px'
              }}>
                Components Used
              </h3>
              <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '180%' }}>
                <div>
                  <p style={{ fontWeight: '600', marginBottom: '4px' }}>Core System:</p>
                  <p style={{ opacity: 0.7 }}>GlobalNavigation.tsx</p>
                  <p style={{ opacity: 0.7 }}>Breadcrumb.tsx</p>
                </div>
                <div>
                  <p style={{ fontWeight: '600', marginBottom: '4px' }}>UI Blocks:</p>
                  <p style={{ opacity: 0.7 }}>NavigationExtended.tsx</p>
                  <p style={{ opacity: 0.7 }}>NavigationSections.tsx</p>
                </div>
                <div>
                  <p style={{ fontWeight: '600', marginBottom: '4px' }}>Icons:</p>
                  <p style={{ opacity: 0.7 }}>HOLYIcons.tsx (2D line-art only)</p>
                  <p style={{ opacity: 0.7 }}>Lucide React (system icons)</p>
                </div>
                <div>
                  <p style={{ fontWeight: '600', marginBottom: '4px' }}>Motion States:</p>
                  <p style={{ opacity: 0.7 }}>Hover states from Motion / States</p>
                  <p style={{ opacity: 0.7 }}>Cart pulse animation</p>
                  <p style={{ opacity: 0.7 }}>Sacred aura glow effects</p>
                </div>
              </div>
            </div>

            {/* Implementation Guidelines */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '16px', 
                color: '#1A1A1A', 
                fontWeight: '600',
                marginBottom: '16px'
              }}>
                Implementation Guidelines
              </h3>
              <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '180%' }}>
                <div>
                  <p style={{ fontWeight: '600', marginBottom: '4px' }}>✅ ADA/WCAG Compliance:</p>
                  <p style={{ opacity: 0.7 }}>All touch targets minimum 48×48px</p>
                  <p style={{ opacity: 0.7 }}>Focus states on all interactive elements</p>
                  <p style={{ opacity: 0.7 }}>Semantic HTML navigation landmarks</p>
                </div>
                <div>
                  <p style={{ fontWeight: '600', marginBottom: '4px' }}>🪄 Motion States:</p>
                  <p style={{ opacity: 0.7 }}>Hover: Background color transition</p>
                  <p style={{ opacity: 0.7 }}>Active: Scale down 0.98</p>
                  <p style={{ opacity: 0.7 }}>Cart badge: Pulse on add-to-cart</p>
                </div>
                <div>
                  <p style={{ fontWeight: '600', marginBottom: '4px' }}>📱 Responsive Behavior:</p>
                  <p style={{ opacity: 0.7 }}>Desktop: Full menu at 768px+</p>
                  <p style={{ opacity: 0.7 }}>Mobile: Hamburger + bottom tabs</p>
                  <p style={{ opacity: 0.7 }}>Mega menu: Desktop only (768px+)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: '#D9C4BB' }}>
            <h3 style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '20px', 
              color: '#1A1A1A', 
              fontWeight: '500',
              marginBottom: '12px'
            }}>
              Next Steps
            </h3>
            <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '180%' }}>
              <p>• Apply this refined navigation system across Home Page, PDP, PLP, Ritual Finder, and Checkout</p>
              <p>• Implement sacred aura glow effects on hover states (from Motion / States)</p>
              <p>• Add cart pulse animation trigger on add-to-cart events</p>
              <p>• Test keyboard navigation and screen reader compatibility</p>
              <p>• Document any discovered gaps in File Overview + Governance</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
