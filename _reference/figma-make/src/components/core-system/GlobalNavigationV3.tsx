/**
 * HØLY™ / GLOBAL NAVIGATION V3.0
 * 
 * Root-level reconstruction with fluid glass aesthetics and adaptive scroll behavior.
 * All styling uses CSS custom properties for instant theme adaptation.
 * 
 * Features:
 * - Scroll-based transparency transitions
 * - Glass morphism with backdrop blur
 * - Adaptive mobile collapse
 * - Sacred cart orb with glow
 * - Token-driven motion and spacing
 * 
 * @version 3.0
 * @sacred Zero-fragmentation architecture
 */

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, User, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from '../ui/sheet';
import { VisuallyHidden } from '../ui/visually-hidden';
import { HOLYCircle } from '../icons/HOLYIcons';
import { TM } from './TrademarkSymbol';
import { GlassSurface, SacredButton } from './Primitives';

interface GlobalNavigationV3Props {
  cartCount?: number;
  onCartClick?: () => void;
  showAnnouncement?: boolean;
  announcementText?: string;
  variant?: 'default' | 'glass' | 'solid';
}

export function GlobalNavigationV3({ 
  cartCount = 0, 
  onCartClick,
  showAnnouncement = false,
  announcementText = "Free shipping on orders over $75",
  variant = 'glass'
}: GlobalNavigationV3Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll-based transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ritual Systems', href: '/rituals' },
    { label: 'Self-Care', href: '/self-care' },
    { label: 'About', href: '/about' },
    { label: 'Studio', href: '/studio' }
  ];

  return (
    <>
      {/* Announcement Bar */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
            style={{ 
              backgroundColor: 'var(--accent)',
              borderBottom: '1px solid rgba(0,0,0,0.1)'
            }}
          >
            <div className="px-4 py-2 text-center">
              <p style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '13px', 
                color: 'var(--accent-foreground)',
                letterSpacing: '0.02em'
              }}>
                {announcementText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 transition-sacred"
        style={{
          backgroundColor: variant === 'glass' 
            ? scrolled ? 'var(--glass-white-strong)' : 'var(--glass-white)'
            : 'var(--card)',
          backdropFilter: variant === 'glass' ? 'var(--glass-blur)' : 'none',
          WebkitBackdropFilter: variant === 'glass' ? 'var(--glass-blur)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow: scrolled ? 'var(--shadow-glass)' : 'none'
        }}
      >
        <div 
          className="px-4 md:px-8 py-4 flex items-center justify-between max-w-[1400px] mx-auto"
        >
          {/* Logo */}
          <motion.a 
            href="/" 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <HOLYCircle 
              size={28} 
              color="var(--foreground)" 
              opacity={0.8} 
              strokeWidth={1.5} 
            />
            <h1 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '24px', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--foreground)',
              transform: 'translateY(-2px)',
              letterSpacing: 'var(--letter-spacing-tight)'
            }}>
              HØLY<TM variant="logo" />
            </h1>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg transition-sacred"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  backgroundColor: 'var(--background)',
                  transition: { duration: 0.2 }
                }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  textDecoration: 'none'
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'var(--background)' }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg transition-sacred hidden md:flex"
              aria-label="Search"
            >
              <Search size={20} style={{ color: 'var(--foreground)' }} />
            </motion.button>

            {/* Wishlist */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'var(--background)' }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg transition-sacred hidden md:flex"
              aria-label="Wishlist"
            >
              <Heart size={20} style={{ color: 'var(--foreground)' }} />
            </motion.button>

            {/* Account */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'var(--background)' }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg transition-sacred hidden md:flex"
              aria-label="Account"
            >
              <User size={20} style={{ color: 'var(--foreground)' }} />
            </motion.button>

            {/* Cart with Sacred Glow */}
            <motion.button
              onClick={onCartClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 rounded-lg transition-sacred"
              style={{
                backgroundColor: scrolled ? 'var(--accent)' : 'transparent',
                border: scrolled ? 'none' : '1px solid var(--border)'
              }}
              aria-label={`Cart with ${cartCount} items`}
            >
              <ShoppingCart 
                size={20} 
                style={{ 
                  color: scrolled ? 'var(--accent-foreground)' : 'var(--foreground)' 
                }} 
              />
              {cartCount > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 rounded-full animate-ritual-pulse"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--accent-foreground)',
                    fontSize: '11px',
                    fontWeight: 'var(--font-weight-medium)',
                    padding: '2px 6px',
                    minWidth: '18px',
                    textAlign: 'center'
                  }}
                >
                  {cartCount}
                </motion.div>
              )}
            </motion.button>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'var(--background)' }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg transition-sacred md:hidden"
                  aria-label="Menu"
                >
                  <Menu size={20} style={{ color: 'var(--foreground)' }} />
                </motion.button>
              </SheetTrigger>
              
              <SheetContent 
                side="right" 
                className="w-full sm:w-[400px]"
                style={{ 
                  backgroundColor: 'var(--background)',
                  borderLeft: '1px solid var(--border)'
                }}
              >
                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>Access site navigation and tools</SheetDescription>
                </VisuallyHidden>
                
                <div className="py-6 space-y-6">
                  {/* Mobile Nav Links */}
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="block px-4 py-3 rounded-lg transition-sacred"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '16px',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--foreground)',
                          textDecoration: 'none'
                        }}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile Actions */}
                  <div className="pt-4 space-y-2" style={{ borderTop: '1px solid var(--border)' }}>
                    <button
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-sacred"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '16px',
                        color: 'var(--foreground)'
                      }}
                    >
                      <Search size={20} />
                      <span>Search</span>
                    </button>
                    <button
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-sacred"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '16px',
                        color: 'var(--foreground)'
                      }}
                    >
                      <User size={20} />
                      <span>Account</span>
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default GlobalNavigationV3;
