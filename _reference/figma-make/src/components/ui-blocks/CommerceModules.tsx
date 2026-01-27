import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Package, ArrowRight } from 'lucide-react';

// Price Display - Regular
export function PriceDisplayRegular() {
  return (
    <div className="space-y-1">
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', color: '#1A1A1A', fontWeight: '600' }}>
        $68
      </p>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
        50ml · $1.36/ml
      </p>
    </div>
  );
}

// Price Display - Sale
export function PriceDisplaySale() {
  return (
    <div className="space-y-1">
      <div className="flex items-baseline gap-3">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', color: '#1A1A1A', fontWeight: '600' }}>
          $54
        </p>
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '18px', 
          color: '#1A1A1A', 
          opacity: 0.4,
          textDecoration: 'line-through'
        }}>
          $68
        </p>
        <div 
          className="px-2 py-1 rounded-full"
          style={{ backgroundColor: '#9C887A', fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', fontWeight: '600' }}
        >
          20% OFF
        </div>
      </div>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
        50ml · $1.08/ml
      </p>
    </div>
  );
}

// Price Display - Ritual Set
export function PriceDisplayRitualSet() {
  return (
    <div className="p-4 rounded-xl space-y-2" style={{ backgroundColor: '#D9C4BB', border: '2px solid #DADADA' }}>
      <div className="flex items-center gap-2 mb-2">
        <Package className="w-4 h-4" style={{ color: '#1A1A1A' }} />
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Ritual Set Bundle
        </p>
      </div>
      <div className="flex items-baseline gap-3">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '28px', color: '#1A1A1A', fontWeight: '600' }}>
          $195
        </p>
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '20px', 
          color: '#1A1A1A', 
          opacity: 0.4,
          textDecoration: 'line-through'
        }}>
          $238
        </p>
      </div>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8 }}>
        Save $43 when purchased together
      </p>
    </div>
  );
}

// Ritual Set Bundle Display Block
export function RitualSetBundleBlock() {
  const items = [
    { name: 'Daily Ritual Serum', price: 68 },
    { name: 'Ocean Mineral Tonic', price: 48 },
    { name: 'Sacred Renewal Cream', price: 82 },
    { name: 'Cleansing Oil', price: 40 }
  ];
  
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const bundlePrice = 195;
  const savings = total - bundlePrice;
  
  return (
    <div className="p-6 rounded-2xl space-y-6" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
      <div className="flex items-center gap-3">
        <Package className="w-6 h-6" style={{ color: '#1A1A1A' }} />
        <div>
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '500' }}>
            Complete Ritual Set
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
            Everything you need for your daily practice
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2" style={{ borderBottom: index < items.length - 1 ? '1px solid #DADADA' : 'none' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
              {item.name}
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>
              ${item.price}
            </p>
          </div>
        ))}
      </div>
      
      <div className="pt-4 space-y-3" style={{ borderTop: '2px solid #DADADA' }}>
        <div className="flex items-center justify-between">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>
            Individual Price
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6, textDecoration: 'line-through' }}>
            ${total}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '600' }}>
            Bundle Price
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', color: '#1A1A1A', fontWeight: '600' }}>
            ${bundlePrice}
          </p>
        </div>
        <div 
          className="px-3 py-2 rounded-lg"
          style={{ 
            backgroundColor: 'rgba(156, 136, 122, 0.12)', 
            border: '2px dashed #9C887A',
            textAlign: 'center' 
          }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '500', opacity: 0.8 }}>
            You save ${savings} with this ritual set
          </p>
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
        Add Complete Set to Cart
      </Button>
    </div>
  );
}

// Upsell Module
export function UpsellModule() {
  return (
    <div className="p-6 rounded-2xl" style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>
        Complete Your Ritual
      </p>
      
      <div className="flex gap-4 items-center">
        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0" style={{ backgroundColor: '#FFFFFF' }}>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            alt="Upsell product"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A', marginBottom: '4px' }}>
            Ocean Mineral Tonic
          </h4>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '140%', marginBottom: '8px' }}>
            Pairs perfectly with your serum
          </p>
          <div className="flex items-center gap-3">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
              $48
            </p>
            <button
              className="px-5 py-2 rounded-lg transition-all"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#F9F6F0',
                backgroundColor: '#1A1A1A',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Cross-sell Module
export function CrossSellModule() {
  const products = [
    { name: 'Sacred Renewal Cream', price: 82 },
    { name: 'Cleansing Oil', price: 40 },
    { name: 'Daily Ritual Serum', price: 68 }
  ];
  
  return (
    <div className="p-6 rounded-2xl space-y-6" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
      <div>
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '500', marginBottom: '8px' }}>
          You May Also Like
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
          Recommended for your ritual practice
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="space-y-2">
            <div className="aspect-square rounded-xl overflow-hidden" style={{ backgroundColor: '#F9F6F0' }}>
              <ImageWithFallback 
                src={`https://images.unsplash.com/photo-1571875257727-256c39da42af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p style={{ fontFamily: 'Garamond, serif', fontSize: '14px', color: '#1A1A1A', marginBottom: '2px' }}>
                {product.name}
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
