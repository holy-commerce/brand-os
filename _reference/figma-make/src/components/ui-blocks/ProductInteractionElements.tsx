import { Button } from '../ui/button';
import { Star, Minus, Plus } from 'lucide-react';
import { useState } from 'react';

// Variant Selector - Size
export function VariantSelectorSize() {
  const [selected, setSelected] = useState('50ml');
  const sizes = ['30ml', '50ml', '100ml'];
  
  return (
    <div className="space-y-3">
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
        Size
      </p>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelected(size)}
            className="px-4 py-2 rounded-lg transition-all"
            style={{
              border: '2px solid',
              borderColor: selected === size ? '#1A1A1A' : '#DADADA',
              backgroundColor: selected === size ? '#F9F6F0' : '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: '#1A1A1A',
              fontWeight: selected === size ? '600' : '400',
              cursor: 'pointer'
            }}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

// Variant Selector - Color
export function VariantSelectorColor() {
  const [selected, setSelected] = useState('clay');
  const colors = [
    { name: 'clay', hex: '#D9C4BB', label: 'Veil Clay' },
    { name: 'fogstone', hex: '#AAB5B2', label: 'Fogstone Blue' },
    { name: 'umber', hex: '#9C887A', label: 'Smoky Umber' }
  ];
  
  return (
    <div className="space-y-3">
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
        Color
      </p>
      <div className="flex items-start gap-6">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setSelected(color.name)}
            className="flex flex-col items-center gap-2"
            style={{ cursor: 'pointer', flex: '0 0 auto' }}
          >
            <div
              className="w-12 h-12 rounded-full transition-all"
              style={{
                backgroundColor: color.hex,
                border: '3px solid',
                borderColor: selected === color.name ? '#1A1A1A' : 'transparent',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
            />
            <span style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '12px', 
              color: '#1A1A1A',
              fontWeight: selected === color.name ? '600' : '400',
              textAlign: 'center'
            }}>
              {color.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Variant Selector - Ritual System
export function VariantSelectorRitualSystem() {
  const [selected, setSelected] = useState('aftercare');
  const systems = [
    { id: 'aftercare', name: 'Ritual Aftercare™', color: '#AAB5B2' },
    { id: 'renewal', name: 'Ritual Renewal™', color: '#D9C4BB' },
    { id: 'vital', name: 'Ritual Vital™', color: '#9C887A' }
  ];
  
  return (
    <div className="space-y-3">
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
        Ritual System
      </p>
      <div className="space-y-2">
        {systems.map((system) => (
          <button
            key={system.id}
            onClick={() => setSelected(system.id)}
            className="w-full flex items-center gap-3 p-3 rounded-lg transition-all"
            style={{
              border: '2px solid',
              borderColor: selected === system.id ? '#1A1A1A' : '#DADADA',
              backgroundColor: selected === system.id ? '#F9F6F0' : '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: system.color }}
            />
            <span style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              color: '#1A1A1A',
              fontWeight: selected === system.id ? '600' : '400'
            }}>
              {system.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Add to Cart Block with Quantity Selector
export function AddToCartBlock() {
  const [quantity, setQuantity] = useState(1);
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
          Quantity
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-all"
            style={{
              border: '2px solid #DADADA',
              backgroundColor: '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            <Minus className="w-4 h-4" style={{ color: '#1A1A1A' }} />
          </button>
          <span style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '16px', 
            color: '#1A1A1A',
            fontWeight: '500',
            minWidth: '32px',
            textAlign: 'center'
          }}>
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-all"
            style={{
              border: '2px solid #DADADA',
              backgroundColor: '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            <Plus className="w-4 h-4" style={{ color: '#1A1A1A' }} />
          </button>
        </div>
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
        Add to Cart — $68
      </Button>
    </div>
  );
}

// Auto-Ritual™ Subscription Toggle Block
// ✅ UPDATED NOV 14, 2025: Rebranded to Auto-Ritual™
export function SubscriptionToggleBlock() {
  const [isSubscription, setIsSubscription] = useState(false);
  
  return (
    <div className="space-y-3 p-4 rounded-xl" style={{ border: '2px solid #DADADA', backgroundColor: '#FFFFFF' }}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
              Auto-Ritual™ (Save 15%)
            </p>
            {isSubscription && (
              <div 
                className="px-2 py-0.5 rounded-full"
                style={{ backgroundColor: '#9C887A', fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#F9F6F0', fontWeight: '600' }}
              >
                ACTIVE
              </div>
            )}
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '140%' }}>
            Delivered every 30 days • Cancel anytime
          </p>
        </div>
        <button
          onClick={() => setIsSubscription(!isSubscription)}
          className="relative w-12 h-6 rounded-full transition-all duration-300"
          style={{
            backgroundColor: isSubscription ? '#1A1A1A' : '#DADADA',
            cursor: 'pointer'
          }}
        >
          <div
            className="absolute w-5 h-5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: '#FFFFFF',
              top: '2px',
              left: isSubscription ? '26px' : '2px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
          />
        </button>
      </div>
      {isSubscription && (
        <div className="pt-3" style={{ borderTop: '1px solid #DADADA' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>
            <span style={{ fontWeight: '600' }}>Auto-Ritual™ Price:</span> $57.80 <span style={{ opacity: 0.6 }}>(was $68)</span>
          </p>
        </div>
      )}
    </div>
  );
}

// Review Stars Row with CTA
export function ReviewStarsRowWithCTA() {
  return (
    <div className="flex items-center justify-between gap-4 p-4 rounded-xl" style={{ border: '2px solid #DADADA', backgroundColor: '#F9F6F0' }}>
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4" style={{ fill: '#9C887A', color: '#9C887A' }} />
          ))}
        </div>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
          4.8
        </span>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>
          (247 reviews)
        </span>
      </div>
      <button
        className="px-4 py-2 rounded-lg transition-all"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: '#1A1A1A',
          border: '1px solid #1A1A1A',
          backgroundColor: 'transparent',
          cursor: 'pointer'
        }}
      >
        Read Reviews
      </button>
    </div>
  );
}
