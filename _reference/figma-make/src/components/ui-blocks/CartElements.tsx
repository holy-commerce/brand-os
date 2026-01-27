import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Minus, Plus, X, Gift, ArrowRight, Package, Clock, TrendingUp, ShoppingCart } from 'lucide-react';
import { CompleteRitualBadge } from './ProductBadges';

/**
 * 🪄 SACRED CART ORB WITH GLOW EFFECT
 * 
 * CRITICAL: This is the master cart orb component with the required glow animation.
 * DO NOT detach or recreate manually. All cart implementations must use this component.
 * 
 * Features:
 * - Sacred breathing aura (3-layer glow)
 * - Animates when cart count > 0
 * - Color-coded glows: Smoky Umber → Veil Clay → Relic Green
 * - 2200ms animation cycle for meditative feel
 * 
 * Usage:
 * <CartOrbGlow count={3} size="desktop" theme="dark" />
 */

interface CartOrbGlowProps {
  count: number;
  size?: 'desktop' | 'mobile';
  theme?: 'dark' | 'light';
  showCount?: boolean;
  onClick?: () => void;
}

export function CartOrbGlow({ 
  count, 
  size = 'desktop', 
  theme = 'light',
  showCount = true,
  onClick 
}: CartOrbGlowProps) {
  const iconSize = size === 'desktop' ? 32 : 24;
  const orbSize = size === 'desktop' ? 32 : 24;
  const iconColor = theme === 'dark' ? '#F9F6F0' : '#1A1A1A';
  
  // Only show glow when cart has items
  const hasItems = count > 0;
  
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        padding: size === 'desktop' ? '8px' : '6px',
      }}
      aria-label={`Shopping cart with ${count} items`}
    >
      <style>{`
        @keyframes cartOrbAuraInner {
          0%, 100% {
            opacity: 0;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.15);
          }
        }
        @keyframes cartOrbAuraMiddle {
          0%, 100% {
            opacity: 0;
            transform: scale(1);
          }
          50% {
            opacity: 0.45;
            transform: scale(1.3);
          }
        }
        @keyframes cartOrbAuraOuter {
          0%, 100% {
            opacity: 0;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.5);
          }
        }
      `}</style>
      
      {/* Cart Icon */}
      <ShoppingCart size={iconSize} style={{ color: iconColor }} />
      
      {/* Sacred Orb - Only visible when cart has items */}
      {hasItems && (
        <>
          {/* Orb Badge */}
          <div
            style={{
              position: 'absolute',
              top: '0px',
              right: '0px',
              width: `${orbSize}px`,
              height: `${orbSize}px`,
              borderRadius: '50%',
              backgroundColor: '#9C887A',
              border: '2px solid #D9C4BB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: showCount ? 'Inter, sans-serif' : 'Garamond, serif',
              fontSize: showCount ? (size === 'desktop' ? '12px' : '11px') : (size === 'desktop' ? '16px' : '14px'),
              fontWeight: showCount ? '600' : '400',
              color: '#F9F6F0',
              zIndex: 3,
            }}
          >
            {showCount ? count : 'ø'}
          </div>
          
          {/* Inner Aura - Smoky Umber */}
          <div
            style={{
              position: 'absolute',
              top: '0px',
              right: '0px',
              width: `${orbSize}px`,
              height: `${orbSize}px`,
              borderRadius: '50%',
              boxShadow: '0 0 16px rgba(156, 136, 122, 0.8), 0 0 32px rgba(156, 136, 122, 0.5)',
              animation: 'cartOrbAuraInner 2200ms ease-in-out infinite',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          />
          
          {/* Middle Aura - Veil Clay */}
          <div
            style={{
              position: 'absolute',
              top: '0px',
              right: '0px',
              width: `${orbSize}px`,
              height: `${orbSize}px`,
              borderRadius: '50%',
              boxShadow: '0 0 28px rgba(217, 196, 187, 0.7), 0 0 56px rgba(217, 196, 187, 0.4)',
              animation: 'cartOrbAuraMiddle 2200ms ease-in-out infinite',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
          
          {/* Outer Aura - Relic Green */}
          <div
            style={{
              position: 'absolute',
              top: '0px',
              right: '0px',
              width: `${orbSize}px`,
              height: `${orbSize}px`,
              borderRadius: '50%',
              boxShadow: '0 0 40px rgba(94, 100, 88, 0.5), 0 0 80px rgba(94, 100, 88, 0.3)',
              animation: 'cartOrbAuraOuter 2200ms ease-in-out infinite',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
        </>
      )}
    </button>
  );
}

export function CartItemRow() {
  return (
    <div 
      className="flex gap-6 p-6 rounded-xl"
      style={{ border: '1px solid #DADADA' }}
    >
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden relative" style={{ backgroundColor: '#F9F6F0' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1626897885636-dd68020cc52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHByb2R1Y3QlMjBtaW5pbWFsfGVufDF8fHx8MTc2MDU1NTkyMHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Product"
          className="w-full h-full object-cover"
        />
        {/* Stock Indicator Badge */}
        <div 
          className="absolute bottom-2 left-2 px-2 py-1 rounded-md flex items-center gap-1"
          style={{ backgroundColor: 'rgba(26,26,26,0.85)', backdropFilter: 'blur(8px)' }}
        >
          <TrendingUp className="w-3 h-3" style={{ color: '#9C887A' }} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', color: '#F9F6F0', fontWeight: '500' }}>
            LOW STOCK
          </p>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A', marginBottom: '4px' }}>
              Daily Ritual Serum
            </h4>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
              30ml
            </p>
          </div>
          <Button variant="ghost" size="icon">
            <X className="w-4 h-4" style={{ color: '#1A1A1A' }} />
          </Button>
        </div>

        {/* Shipping Time Urgency */}
        <div 
          className="flex items-center gap-2 mb-3 px-3 py-2 rounded-lg"
          style={{ backgroundColor: '#D9C4BB' }}
        >
          <Clock className="w-3 h-3" style={{ color: '#1A1A1A' }} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
            Ships in 2-3 business days
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              className="w-8 h-8"
              style={{ borderColor: '#DADADA' }}
            >
              <Minus className="w-3 h-3" style={{ color: '#1A1A1A' }} />
            </Button>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', minWidth: '20px', textAlign: 'center' }}>
              1
            </span>
            <Button 
              variant="outline" 
              size="icon" 
              className="w-8 h-8"
              style={{ borderColor: '#DADADA' }}
            >
              <Plus className="w-3 h-3" style={{ color: '#1A1A1A' }} />
            </Button>
          </div>
          
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
            $68
          </p>
        </div>
      </div>
    </div>
  );
}

export function CartSummary() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <CardHeader>
        <CardTitle style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
          Cart Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Shipping Urgency Banner */}
        <div 
          className="p-3 rounded-xl space-y-2"
          style={{ backgroundColor: '#D9C4BB', border: '1px solid #DADADA' }}
        >
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4" style={{ color: '#1A1A1A' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600' }}>
              Est. delivery: 2-3 business days
            </p>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Order within 4 hours for same-day processing
          </p>
        </div>

        <div className="flex justify-between">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
            Subtotal (3 items)
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
            $188
          </p>
        </div>
        
        <div 
          className="p-4 rounded-xl space-y-3"
          style={{ backgroundColor: '#F9F6F0' }}
        >
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4" style={{ color: '#1A1A1A' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
              You're $12 away from free shipping
            </p>
          </div>
          <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#DADADA' }}>
            <div 
              className="h-full"
              style={{ backgroundColor: '#9C887A', width: '94%' }}
            />
          </div>
        </div>
        
        <div className="flex justify-between">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
            Shipping
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
            Calculated at checkout
          </p>
        </div>
        
        <div 
          className="pt-4 mt-4 flex justify-between"
          style={{ borderTop: '1px solid #DADADA' }}
        >
          <p style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A' }}>
            Estimated Total
          </p>
          <p style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '500' }}>
            $188
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
          Proceed to Checkout
        </Button>
        
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, textAlign: 'center' }}>
          Carbon-neutral shipping on all orders
        </p>
      </CardContent>
    </Card>
  );
}

export function RitualKitUpsellSection() {
  return (
    <div 
      className="p-6 rounded-2xl"
      style={{ backgroundColor: '#D9C4BB', border: '1px solid #D9C4BB' }}
    >
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1665763630810-e6251bdd392d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHNlcnVtJTIwd2hpdGV8ZW58MXx8fHwxNzYwNjY0OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Ritual Kit"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div style={{ marginBottom: '8px' }}>
                <CompleteRitualBadge />
              </div>
              <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A', marginBottom: '4px' }}>
                Add Morning Ritual Kit
              </h4>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8 }}>
                Save 15% when you bundle
              </p>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              $132
            </p>
          </div>
          
          <Button 
            style={{ 
              backgroundColor: '#1A1A1A', 
              color: '#F9F6F0',
              fontFamily: 'Inter, sans-serif',
              paddingTop: '10px',
              paddingBottom: '10px',
              fontWeight: '600'
            }}
          >
            Begin Your Ritual
            <Plus className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function GiftWithRitualSelector() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#9C887A' }}
          >
            <Gift className="w-5 h-5" style={{ color: '#F9F6F0' }} />
          </div>
          
          <div className="flex-1 space-y-3">
            <div>
              <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A', marginBottom: '4px' }}>
                Sacred Gift Included
              </h4>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8 }}>
                Choose your complimentary sample
              </p>
            </div>
            
            <div className="space-y-2">
              <div 
                className="flex items-center justify-between p-3 rounded-lg cursor-pointer"
                style={{ border: '2px solid #1A1A1A', backgroundColor: '#F9F6F0' }}
              >
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
                  Ritual Cleansing Balm (5ml)
                </p>
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: '#1A1A1A' }}
                />
              </div>
              
              <div 
                className="flex items-center justify-between p-3 rounded-lg cursor-pointer"
                style={{ border: '1px solid #DADADA', backgroundColor: '#FFFFFF' }}
              >
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
                  Ocean Mineral Mist (10ml)
                </p>
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ border: '2px solid #DADADA' }}
                />
              </div>
              
              <div 
                className="flex items-center justify-between p-3 rounded-lg cursor-pointer"
                style={{ border: '1px solid #DADADA', backgroundColor: '#FFFFFF' }}
              >
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
                  Body Oil Sample (5ml)
                </p>
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ border: '2px solid #DADADA' }}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function EmptyCartState() {
  return (
    <div className="text-center max-w-md mx-auto py-16 space-y-6">
      <div 
        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
        style={{ backgroundColor: '#F9F6F0' }}
      >
        <Gift className="w-10 h-10" style={{ color: '#1A1A1A', opacity: 0.4 }} />
      </div>
      
      <div className="space-y-3">
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A' }}>
          Your Cart is Empty
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
          Begin your ritual journey with our curated wellness essentials
        </p>
      </div>
      
      <Button style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>
        Explore Collection
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
}

export function SavedForLaterSection() {
  return (
    <div className="space-y-4">
      <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
        Saved for Later
      </h3>
      
      <div 
        className="flex gap-6 p-6 rounded-xl"
        style={{ border: '1px solid #DADADA' }}
      >
        <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden" style={{ backgroundColor: '#F9F6F0' }}>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1592967833769-60d8693bbf91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHJpdHVhbCUyMGNhbmRsZXxlbnwxfHx8fDE3NjA2NjQ5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Product"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A', marginBottom: '4px' }}>
                Sacred Space Candle
              </h4>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
                8 oz
              </p>
            </div>
            <Button variant="ghost" size="icon">
              <X className="w-4 h-4" style={{ color: '#1A1A1A' }} />
            </Button>
          </div>

          {/* Shipping Time */}
          <div 
            className="flex items-center gap-2 mb-3 px-3 py-2 rounded-lg"
            style={{ backgroundColor: '#F9F6F0' }}
          >
            <Clock className="w-3 h-3" style={{ color: '#1A1A1A' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
              Ships in 3-4 business days
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <Button 
              style={{ 
                backgroundColor: '#1A1A1A', 
                color: '#F9F6F0',
                fontFamily: 'Inter, sans-serif',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '20px',
                paddingRight: '20px',
                fontWeight: '600'
              }}
            >
              Move to Cart
            </Button>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
              $42
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CartPopout() {
  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Header with Urgency Banner */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A' }}>
            Your Cart
          </h2>
          <Button variant="ghost" size="icon">
            <X className="w-5 h-5" style={{ color: '#1A1A1A' }} />
          </Button>
        </div>

        {/* Shipping Time Urgency Banner */}
        <div 
          className="p-4 rounded-xl"
          style={{ backgroundColor: '#9C887A', border: '1px solid #9C887A' }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Package className="w-5 h-5" style={{ color: '#F9F6F0' }} />
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#F9F6F0', fontWeight: '500' }}>
              Average Ship Time: 2-3 Days
            </p>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', opacity: 0.85, lineHeight: '150%' }}>
            Order within the next 4 hours for same-day processing
          </p>
        </div>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {/* Item 1 - With product image and shipping time */}
        <div 
          className="flex gap-4 p-4 rounded-xl"
          style={{ border: '1px solid #DADADA', backgroundColor: '#FFFFFF' }}
        >
          <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden relative" style={{ backgroundColor: '#F9F6F0' }}>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1626897885636-dd68020cc52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHByb2R1Y3QlMjBtaW5pbWFsfGVufDF8fHx8MTc2MDU1NTkyMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="hølymist™"
              className="w-full h-full object-cover"
            />
            {/* Stock Badge */}
            <div 
              className="absolute bottom-1 left-1 px-2 py-0.5 rounded"
              style={{ backgroundColor: 'rgba(26,26,26,0.9)' }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', color: '#9C887A', fontWeight: '600' }}>
                LOW
              </p>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-1">
              <div className="flex-1 min-w-0 pr-2">
                <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '15px', color: '#1A1A1A', marginBottom: '2px' }}>
                  hølymist™
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7 }}>
                  100ml / 3.38 fl oz
                </p>
              </div>
              <Button variant="ghost" size="icon" className="w-8 h-8 flex-shrink-0">
                <X className="w-3 h-3" style={{ color: '#1A1A1A' }} />
              </Button>
            </div>

            {/* Shipping Time */}
            <div 
              className="flex items-center gap-1 mb-2 px-2 py-1 rounded inline-flex"
              style={{ backgroundColor: '#F9F6F0' }}
            >
              <Clock className="w-3 h-3" style={{ color: '#1A1A1A', opacity: 0.6 }} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.7, fontWeight: '500' }}>
                Ships in 2-3 days
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="w-7 h-7"
                  style={{ borderColor: '#DADADA' }}
                >
                  <Minus className="w-3 h-3" style={{ color: '#1A1A1A' }} />
                </Button>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500', minWidth: '16px', textAlign: 'center' }}>
                  1
                </span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="w-7 h-7"
                  style={{ borderColor: '#DADADA' }}
                >
                  <Plus className="w-3 h-3" style={{ color: '#1A1A1A' }} />
                </Button>
              </div>
              
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', fontWeight: '500' }}>
                $68
              </p>
            </div>
          </div>
        </div>

        {/* Item 2 - With product image and shipping time */}
        <div 
          className="flex gap-4 p-4 rounded-xl"
          style={{ border: '1px solid #DADADA', backgroundColor: '#FFFFFF' }}
        >
          <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden" style={{ backgroundColor: '#F9F6F0' }}>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1665763630810-e6251bdd392d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHNlcnVtJTIwd2hpdGV8ZW58MXx8fHwxNzYwNjY0OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Daily Ritual Serum"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-1">
              <div className="flex-1 min-w-0 pr-2">
                <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '15px', color: '#1A1A1A', marginBottom: '2px' }}>
                  Daily Ritual Serum
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7 }}>
                  30ml
                </p>
              </div>
              <Button variant="ghost" size="icon" className="w-8 h-8 flex-shrink-0">
                <X className="w-3 h-3" style={{ color: '#1A1A1A' }} />
              </Button>
            </div>

            {/* Shipping Time */}
            <div 
              className="flex items-center gap-1 mb-2 px-2 py-1 rounded inline-flex"
              style={{ backgroundColor: '#F9F6F0' }}
            >
              <Clock className="w-3 h-3" style={{ color: '#1A1A1A', opacity: 0.6 }} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.7, fontWeight: '500' }}>
                Ships in 1-2 days
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="w-7 h-7"
                  style={{ borderColor: '#DADADA' }}
                >
                  <Minus className="w-3 h-3" style={{ color: '#1A1A1A' }} />
                </Button>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500', minWidth: '16px', textAlign: 'center' }}>
                  2
                </span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="w-7 h-7"
                  style={{ borderColor: '#DADADA' }}
                >
                  <Plus className="w-3 h-3" style={{ color: '#1A1A1A' }} />
                </Button>
              </div>
              
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', fontWeight: '500' }}>
                $120
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Free Shipping Progress */}
      <div 
        className="p-4 rounded-xl space-y-3"
        style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
      >
        <div className="flex items-center gap-2">
          <Gift className="w-4 h-4" style={{ color: '#1A1A1A' }} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
            You're $12 away from free shipping
          </p>
        </div>
        <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#DADADA' }}>
          <div 
            className="h-full transition-all"
            style={{ backgroundColor: '#9C887A', width: '94%' }}
          />
        </div>
      </div>

      {/* Summary */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
            Subtotal
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
            $188
          </p>
        </div>
        
        <div className="flex justify-between items-center pb-3" style={{ borderBottom: '1px solid #DADADA' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
            Shipping
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
            Calculated at checkout
          </p>
        </div>

        <div className="flex justify-between items-center pt-2">
          <p style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
            Total
          </p>
          <p style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '500' }}>
            $188
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3">
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
          Proceed to Checkout
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, textAlign: 'center', lineHeight: '150%' }}>
          Carbon-neutral shipping · Secure checkout
        </p>
      </div>
    </div>
  );
}
