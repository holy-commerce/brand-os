import { Button } from '../ui/button';
import { Search, ShoppingCart, User, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CartOrbGlow } from './CartElements';

// Search Input with Suggestion Dropdown
export function SearchInputWithSuggestions() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  
  const suggestions = [
    'Daily Ritual Serum',
    'Ocean Mineral Tonic',
    'Ritual Aftercare™',
    'Sacred Renewal Cream'
  ];
  
  return (
    <div className="relative max-w-md">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#1A1A1A', opacity: 0.4 }} />
        <input
          type="text"
          placeholder="Search products, rituals..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="w-full pl-12 pr-4 py-3 rounded-xl"
          style={{
            border: '2px solid #DADADA',
            backgroundColor: '#F9F6F0',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#1A1A1A',
            outline: 'none'
          }}
        />
      </div>
      
      {isFocused && searchValue && (
        <div 
          className="absolute top-full left-0 right-0 mt-2 p-2 rounded-xl shadow-lg"
          style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', zIndex: 30 }}
        >
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '12px', 
            color: '#1A1A1A', 
            opacity: 0.6,
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            padding: '8px 12px'
          }}>
            Suggestions
          </p>
          {suggestions.filter(s => s.toLowerCase().includes(searchValue.toLowerCase())).map((suggestion, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-3 rounded-lg transition-all"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#1A1A1A',
                backgroundColor: 'transparent',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9F6F0'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Cart Icon with Notification Badge
// ✅ NOW USING SACRED CART ORB WITH GLOW EFFECT
export function CartIconWithBadge() {
  const itemCount = 3;
  
  return (
    <CartOrbGlow 
      count={itemCount} 
      size="desktop" 
      theme="light"
      showCount={true}
    />
  );
}

// Mini-Cart Dropdown
export function MiniCartDropdown() {
  const [isOpen, setIsOpen] = useState(true);
  
  const items = [
    { 
      name: 'Daily Ritual Serum', 
      price: 68, 
      qty: 1,
      image: 'https://images.unsplash.com/photo-1761864293806-1841acc1b14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHNlcnVtJTIwYm90dGxlfGVufDF8fHx8MTc2Mjg3NzIxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      name: 'Ocean Mineral Tonic', 
      price: 48, 
      qty: 2,
      image: 'https://images.unsplash.com/photo-1585250815365-a90a469677c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwdG9uaWMlMjBib3R0bGV8ZW58MXx8fHwxNzYyODc3MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];
  
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  return (
    <div className="w-96">
      {isOpen && (
        <div 
          className="rounded-2xl shadow-xl overflow-hidden"
          style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', zIndex: 30 }}
        >
          <div className="p-6 flex items-center justify-between" style={{ borderBottom: '2px solid #DADADA' }}>
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '500' }}>
              Your Cart ({items.length})
            </h3>
            <button onClick={() => setIsOpen(false)} style={{ cursor: 'pointer' }}>
              <X className="w-5 h-5" style={{ color: '#1A1A1A' }} />
            </button>
          </div>
          
          <div className="p-6 space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-20 h-20 rounded-lg flex-shrink-0 overflow-hidden" style={{ backgroundColor: '#F9F6F0' }}>
                  <ImageWithFallback 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A', marginBottom: '4px' }}>
                    {item.name}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>
                    Qty: {item.qty}
                  </p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
                  ${item.price * item.qty}
                </p>
              </div>
            ))}
          </div>
          
          <div className="p-6 space-y-4" style={{ borderTop: '2px solid #DADADA', backgroundColor: '#F9F6F0' }}>
            <div className="flex items-center justify-between">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
                Subtotal
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '600' }}>
                ${subtotal}
              </p>
            </div>
            <Button 
              className="w-full py-6"
              style={{ 
                backgroundColor: '#1A1A1A', 
                color: '#F9F6F0', 
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: '600'
              }}
            >
              Checkout
            </Button>
            <button
              className="w-full py-2 rounded-lg flex items-center justify-center"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#1A1A1A',
                border: '1px solid #DADADA',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              View Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Studio Login CTA Button
export function StudioLoginButton() {
  return (
    <Button
      style={{
        backgroundColor: 'transparent',
        color: '#1A1A1A',
        border: '2px solid #1A1A1A',
        fontFamily: 'Inter, sans-serif',
        fontWeight: '500'
      }}
    >
      <User className="w-4 h-4 mr-2" />
      Studio Login
    </Button>
  );
}

// Mega Menu with Ritual Systems
export function MegaMenuWithRitualSystems() {
  const [isOpen, setIsOpen] = useState(true);
  
  const ritualSystems = [
    { name: 'Ritual Aftercare™', color: '#AAB5B2', desc: 'Clinical meets ceremonial' },
    { name: 'Ritual Renewal™', color: '#D9C4BB', desc: 'Refined, luminous, alchemical' },
    { name: 'Ritual Touch™', color: '#5E6458', desc: 'Sensual, soft, connective' },
    { name: 'Ritual Union™', color: '#D9C4BB', desc: 'Erotic, playful, healing' },
    { name: 'Ritual Vital™', color: '#9C887A', desc: 'Energized, primal, resilient' }
  ];
  
  const categories = ['Shop All', 'New Arrivals', 'Sets & Kits', 'Studio Exclusive'];
  
  return (
    <div className="relative" style={{ zIndex: 30 }}>
      {isOpen && (
        <div 
          className="absolute top-full left-0 right-0 mt-4 p-8 rounded-2xl shadow-2xl"
          style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', minWidth: '800px', zIndex: 30 }}
        >
          <div className="grid grid-cols-2 gap-12">
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
                {ritualSystems.map((system, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 p-3 rounded-lg transition-all"
                    style={{
                      cursor: 'pointer',
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9F6F0'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div 
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: system.color }}
                    />
                    <div className="text-left">
                      <p style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A', marginBottom: '2px' }}>
                        {system.name}
                      </p>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                        {system.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
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
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 py-2 rounded-lg transition-all"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: '#1A1A1A',
                      backgroundColor: 'transparent',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9F6F0'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="mt-8 p-4 rounded-xl" style={{ backgroundColor: '#D9C4BB' }}>
                <p style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A', marginBottom: '8px' }}>
                  Studio Membership
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8, marginBottom: '12px', lineHeight: '140%' }}>
                  Direct-to-studio Ritual Care™ for elevated piercing and tattoo aftercare — available on demand or by subscription.
                </p>
                <button
                  className="px-4 py-2 rounded-lg"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
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
      )}
    </div>
  );
}
