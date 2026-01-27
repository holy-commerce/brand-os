import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search, ShoppingCart, Menu, User, Instagram, Facebook, Twitter } from 'lucide-react';
import { HOLYSparkle, HOLYLeaf } from '../icons/HOLYIcons';

export function HeaderNavigation() {
  return (
    <header 
      className="w-full p-6 flex items-center justify-between"
      style={{ backgroundColor: '#F9F6F0', borderBottom: '1px solid #DADADA' }}
    >
      <div className="flex items-center gap-12">
        <div style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', fontWeight: '500' }}>
          HØLY
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
            Shop
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
            Rituals
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
            About
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
            Journal
          </a>
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Search className="w-5 h-5" style={{ color: '#1A1A1A' }} />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="w-5 h-5" style={{ color: '#1A1A1A' }} />
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="w-5 h-5" style={{ color: '#1A1A1A' }} />
          <div 
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0', fontSize: '10px' }}
          >
            2
          </div>
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" style={{ color: '#1A1A1A' }} />
        </Button>
      </div>
    </header>
  );
}

export function MegaMenuContainer() {
  return (
    <div 
      className="w-full p-8"
      style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA', borderRadius: '16px' }}
    >
      <div className="grid grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '12px' }}>
            By Category
          </h3>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', display: 'block', lineHeight: '200%' }}>
            Skincare
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', display: 'block', lineHeight: '200%' }}>
            Body Care
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', display: 'block', lineHeight: '200%' }}>
            Wellness Tools
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', display: 'block', lineHeight: '200%' }}>
            Gift Sets
          </a>
        </div>
        
        <div className="space-y-4">
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '12px' }}>
            By Ritual
          </h3>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', display: 'block', lineHeight: '200%' }}>
            Morning Awakening
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', display: 'block', lineHeight: '200%' }}>
            Midday Reset
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', display: 'block', lineHeight: '200%' }}>
            Evening Wind Down
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', display: 'block', lineHeight: '200%' }}>
            Sacred Sunday
          </a>
        </div>
        
        <div 
          className="p-6 rounded-xl" 
          style={{ backgroundColor: '#D9C4BB' }}
        >
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '12px' }}>
            New Collection
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, marginBottom: '16px', lineHeight: '140%' }}>
            Discover our latest ritual essentials
          </p>
          <Button size="sm" style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>
            Explore Rituals
          </Button>
        </div>
      </div>
    </div>
  );
}

export function MobileNavigationDrawer() {
  return (
    <div 
      className="w-full max-w-sm p-6 space-y-6"
      style={{ backgroundColor: '#F9F6F0' }}
    >
      <div className="space-y-1">
        <a 
          href="#" 
          className="block p-4 rounded-lg"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A' }}
        >
          Shop
        </a>
        <a 
          href="#" 
          className="block p-4 rounded-lg"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A' }}
        >
          Rituals
        </a>
        <a 
          href="#" 
          className="block p-4 rounded-lg"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A' }}
        >
          About
        </a>
        <a 
          href="#" 
          className="block p-4 rounded-lg"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A' }}
        >
          Journal
        </a>
      </div>
      
      <div className="pt-6" style={{ borderTop: '1px solid #DADADA' }}>
        <div className="space-y-3">
          <Button className="w-full" style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>
            Sign In
          </Button>
          <Button className="w-full" variant="outline" style={{ borderColor: '#DADADA', color: '#1A1A1A' }}>
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
}

export function FooterBlock() {
  return (
    <footer 
      className="w-full p-12"
      style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
        <div className="space-y-4">
          <div style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500' }}>
            HØLY
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', opacity: 0.7, lineHeight: '150%' }}>
            Sacred rituals for modern living
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '500', marginBottom: '12px' }}>
            Shop
          </h4>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', opacity: 0.7, display: 'block', lineHeight: '200%' }}>
            All Products
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', opacity: 0.7, display: 'block', lineHeight: '200%' }}>
            Ritual Kits
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', opacity: 0.7, display: 'block', lineHeight: '200%' }}>
            Gift Sets
          </a>
        </div>
        
        <div className="space-y-3">
          <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '500', marginBottom: '12px' }}>
            Learn
          </h4>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', opacity: 0.7, display: 'block', lineHeight: '200%' }}>
            Our Story
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', opacity: 0.7, display: 'block', lineHeight: '200%' }}>
            Ingredients
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', opacity: 0.7, display: 'block', lineHeight: '200%' }}>
            Journal
          </a>
        </div>
        
        <div className="space-y-3">
          <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '500', marginBottom: '12px' }}>
            Support
          </h4>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', opacity: 0.7, display: 'block', lineHeight: '200%' }}>
            FAQ
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', opacity: 0.7, display: 'block', lineHeight: '200%' }}>
            Shipping
          </a>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', opacity: 0.7, display: 'block', lineHeight: '200%' }}>
            Returns
          </a>
        </div>
      </div>
      
      <div 
        className="mt-12 pt-8 text-center"
        style={{ borderTop: '1px solid rgba(249,246,240,0.1)' }}
      >
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', opacity: 0.5 }}>
          © 2025 HØLY. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function FooterWithRitualIcons() {
  return (
    <footer 
      className="w-full p-12"
      style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex justify-center gap-12">
          <div className="text-center space-y-2">
            <div style={{ fontSize: '32px', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(-3px)' }}>ø</div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', opacity: 0.7 }}>
              Sacred Circle
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <HOLYLeaf size={32} color="#1A1A1A" opacity={0.7} />
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', opacity: 0.7 }}>
              Plant Wisdom
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <HOLYSparkle size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', opacity: 0.7 }}>
              Daily Ritual
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', marginBottom: '8px' }}>
              Join the Circle
            </h4>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', opacity: 0.7 }}>
              Receive sacred wisdom & early access
            </p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', marginBottom: '8px' }}>
              1% for the Planet
            </h4>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', opacity: 0.7 }}>
              Committed to environmental restoration
            </p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', marginBottom: '8px' }}>
              Carbon Neutral
            </h4>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', opacity: 0.7 }}>
              Every shipment, every step
            </p>
          </div>
        </div>
        
        <div 
          className="pt-8 text-center"
          style={{ borderTop: '1px solid rgba(249,246,240,0.1)' }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', opacity: 0.5 }}>
            © 2025 HØLY. Sacred rituals for modern living.
          </p>
        </div>
      </div>
    </footer>
  );
}
