/**
 * HØLY™ / CORE SYSTEM COMPONENTS / Global Navigation
 * 
 * LOCKED COMPONENT - DO NOT DETACH OR REGENERATE
 * 
 * Master navigation component used across all experiences.
 * Includes desktop and mobile responsive variants.
 * 
 * ✅ NOW INCLUDES: Sacred Cart Orb with Glow Effect
 * 
 * Usage:
 * - Home Page
 * - PDP Experience
 * - PLP Experience
 * - Ritual Finder
 * - Checkout Flow
 * 
 * Variants: Desktop | Mobile | Mobile Drawer
 */

import { useState } from 'react';
import { Search, ShoppingCart, Menu, User, Heart } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from '../ui/sheet';
import { VisuallyHidden } from '../ui/visually-hidden';
import { Separator } from '../ui/separator';
import { HOLYCircle } from '../icons/HOLYIcons';
import { CartOrbGlow } from '../ui-blocks/CartElements';
import { TM } from './TrademarkSymbol';

interface GlobalNavigationProps {
  cartCount?: number;
  onCartClick?: () => void;
  theme?: 'light' | 'dark';
  showAnnouncement?: boolean;
  announcementText?: string;
}

export function GlobalNavigation({ 
  cartCount = 0, 
  onCartClick,
  theme = 'light',
  showAnnouncement = false,
  announcementText = "Free shipping on orders over $75"
}: GlobalNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const textColor = theme === 'dark' ? '#F9F6F0' : '#1A1A1A';
  const bgColor = theme === 'dark' ? '#1A1A1A' : '#FFFFFF';
  const hoverBg = theme === 'dark' ? 'rgba(249, 246, 240, 0.1)' : '#F9F6F0';

  return (
    <>
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="px-4 py-2 text-center" style={{ backgroundColor: '#9C887A' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0' }}>
            {announcementText}
          </p>
        </div>
      )}

      {/* Main Navigation */}
      <nav 
        className="px-4 md:px-8 py-4 flex items-center justify-between" 
        style={{ backgroundColor: bgColor, borderBottom: `1px solid ${theme === 'dark' ? '#8C8981' : '#DADADA'}` }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <HOLYCircle size={28} color={textColor} opacity={0.8} strokeWidth={1.5} />
          <h1 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '24px', 
            fontWeight: '500', 
            color: textColor,
            transform: 'translateY(-2px)'
          }}>
            HØLY<TM variant="logo" />
          </h1>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <a 
            href="/shop" 
            className="transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: textColor }}
          >
            Shop
          </a>
          <a 
            href="/ritual-finder" 
            className="transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: textColor }}
          >
            Ritual Finder
          </a>
          <a 
            href="/about" 
            className="transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: textColor }}
          >
            About
          </a>
          <a 
            href="/studio-partners" 
            className="transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: textColor }}
          >
            Studio Partners
          </a>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4">
          <button 
            className="hidden md:block p-2 rounded-lg transition-colors"
            style={{ color: textColor }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverBg}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="hidden md:block p-2 rounded-lg transition-colors"
            style={{ color: textColor }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverBg}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <User className="w-5 h-5" />
          </button>
          
          {/* Cart Orb with Sacred Glow */}
          <CartOrbGlow 
            count={cartCount} 
            size="desktop" 
            theme={theme}
            showCount={true}
            onClick={onCartClick}
          />
          
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button 
                className="md:hidden p-2 rounded-lg transition-colors"
                style={{ color: textColor }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverBg}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>Main navigation links for HØLY website</SheetDescription>
              </VisuallyHidden>
              <nav className="flex flex-col gap-6 mt-8">
                <a href="/shop" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A' }}>
                  Shop
                </a>
                <a href="/ritual-finder" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A' }}>
                  Ritual Finder
                </a>
                <a href="/about" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A' }}>
                  About
                </a>
                <a href="/studio-partners" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A' }}>
                  Studio Partners
                </a>
                <Separator />
                <a href="/account" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A' }}>
                  Account
                </a>
                <a href="/search" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A' }}>
                  Search
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}
