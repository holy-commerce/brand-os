import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ShoppingCart, Heart } from 'lucide-react';
import { MetadataLabel } from '../core-system/LabelSystem';
import { RitualSetBadge } from './ProductBadges';

export function ProductCardDefault() {
  return (
    <Card style={{ borderColor: '#DADADA', overflow: 'hidden' }}>
      <div className="aspect-square" style={{ backgroundColor: '#F9F6F0' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1626897885636-dd68020cc52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHByb2R1Y3QlMjBtaW5pbWFsfGVufDF8fHx8MTc2MDU1NTkyMHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="pt-6">
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '8px' }}>
          Daily Ritual Serum
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
          $68
        </p>
      </CardContent>
    </Card>
  );
}

export function ProductCardWithDescription() {
  return (
    <Card style={{ borderColor: '#DADADA', overflow: 'hidden' }}>
      <div className="aspect-square" style={{ backgroundColor: '#F9F6F0' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1743309026555-97f545a08490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBuYXR1cmFsJTIwYm90dGxlfGVufDF8fHx8MTc2MDY2NDk2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="pt-6 space-y-3">
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A' }}>
          Ocean Mineral Tonic
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '140%' }}>
          Revitalizing mist with sea minerals and sacred botanicals
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
          $48
        </p>
      </CardContent>
    </Card>
  );
}

export function ProductCardWithBadge() {
  return (
    <Card style={{ borderColor: '#DADADA', overflow: 'hidden', position: 'relative' }}>
      <div className="aspect-square" style={{ backgroundColor: '#F9F6F0', position: 'relative' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1665763630810-e6251bdd392d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHNlcnVtJTIwd2hpdGV8ZW58MXx8fHwxNzYwNjY0OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Product"
          className="w-full h-full object-cover"
        />
        <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
          <MetadataLabel type="New" size="sm" showIcon={true} />
        </div>
      </div>
      <CardContent className="pt-6">
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '8px' }}>
          Burnished Ochre Face Oil
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
          $72
        </p>
      </CardContent>
    </Card>
  );
}

export function ProductCardWithHover() {
  return (
    <Card style={{ borderColor: '#DADADA', overflow: 'hidden', position: 'relative' }} className="group">
      <div className="aspect-square" style={{ backgroundColor: '#F9F6F0', position: 'relative' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1592967833769-60d8693bbf91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHJpdHVhbCUyMGNhbmRsZXxlbnwxfHx8fDE3NjA2NjQ5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Product"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: 'rgba(26,26,26,0.6)' }}
        >
          <Button size="sm" style={{ backgroundColor: '#F9F6F0', color: '#1A1A1A' }}>
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add
          </Button>
          <Button size="sm" variant="outline" style={{ borderColor: '#F9F6F0', color: '#F9F6F0' }}>
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <CardContent className="pt-6">
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '8px' }}>
          Sacred Space Candle
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
          $42
        </p>
      </CardContent>
    </Card>
  );
}

export function ProductCardOnSale() {
  return (
    <Card style={{ borderColor: '#DADADA', overflow: 'hidden' }}>
      <div className="aspect-square" style={{ backgroundColor: '#F9F6F0', position: 'relative' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1626897885636-dd68020cc52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHByb2R1Y3QlMjBtaW5pbWFsfGVufDF8fHx8MTc2MDU1NTkyMHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Product"
          className="w-full h-full object-cover"
        />
        <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
          <MetadataLabel type="Limited" size="sm" showIcon={false} />
        </div>
      </div>
      <CardContent className="pt-6">
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '8px' }}>
          Daily Ritual Serum
        </h3>
        <div className="flex items-center gap-2">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
            $48
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.5, textDecoration: 'line-through' }}>
            $68
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProductCardWithCTA() {
  return (
    <Card style={{ borderColor: '#DADADA', overflow: 'hidden' }}>
      <div className="aspect-square" style={{ backgroundColor: '#F9F6F0' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1743309026555-97f545a08490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBuYXR1cmFsJTIwYm90dGxlfGVufDF8fHx8MTc2MDY2NDk2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="pt-6 space-y-4">
        <div>
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '4px' }}>
            Ocean Mineral Tonic
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '140%' }}>
            Revitalizing mist with sea minerals
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '500' }}>
            $48
          </p>
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
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProductCardSaleWithCTA() {
  return (
    <Card style={{ borderColor: '#DADADA', overflow: 'hidden' }}>
      <div className="aspect-square" style={{ backgroundColor: '#F9F6F0', position: 'relative' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1665763630810-e6251bdd392d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHNlcnVtJTIwd2hpdGV8ZW58MXx8fHwxNzYwNjY0OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Product"
          className="w-full h-full object-cover"
        />
        <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
          <MetadataLabel type="Limited" size="sm" showIcon={false} />
        </div>
      </div>
      <CardContent className="pt-6 space-y-4">
        <div>
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '4px' }}>
            Burnished Ochre Face Oil
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '140%' }}>
            Nourishing botanical oil
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '500' }}>
              $50
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.5, textDecoration: 'line-through' }}>
              $72
            </p>
          </div>
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
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProductKitHorizontal() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <div className="flex gap-6 p-6">
        <div className="w-48 h-48 flex-shrink-0" style={{ backgroundColor: '#F9F6F0', borderRadius: '12px' }}>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1626897885636-dd68020cc52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHByb2R1Y3QlMjBtaW5pbWFsfGVufDF8fHx8MTc2MDU1NTkyMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Product Kit"
            className="w-full h-full object-cover"
            style={{ borderRadius: '12px' }}
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            <RitualSetBadge />
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
              Morning Ritual Collection
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '140%' }}>
              Everything you need to begin each day with intention. Includes cleanser, serum, and tonic.
            </p>
            <ul className="space-y-2">
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>• Daily Ritual Serum (30ml)</li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>• Ocean Mineral Tonic (100ml)</li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>• Sacred Cleansing Balm (50ml)</li>
            </ul>
          </div>
          <div className="flex items-center justify-between mt-6">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '500' }}>
              $156
            </p>
            <Button 
              style={{ 
                backgroundColor: '#1A1A1A', 
                color: '#F9F6F0',
                fontFamily: 'Inter, sans-serif',
                paddingTop: '12px',
                paddingBottom: '12px',
                paddingLeft: '24px',
                paddingRight: '24px',
                fontWeight: '600',
                fontSize: '15px'
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function ProductKitVertical() {
  return (
    <Card style={{ borderColor: '#DADADA', maxWidth: '400px' }}>
      <div className="aspect-[4/3]" style={{ backgroundColor: '#F9F6F0' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1592967833769-60d8693bbf91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHJpdHVhbCUyMGNhbmRsZXxlbnwxfHx8fDE3NjA2NjQ5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Product Kit"
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="space-y-4 pt-6">
        <RitualSetBadge />
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
          Evening Wind Down Kit
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '140%' }}>
          Sacred ritual for peaceful endings
        </p>
        <ul className="space-y-2">
          <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>• Sacred Space Candle</li>
          <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>• Ritual Body Oil</li>
          <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>• Sleep Tonic Mist</li>
        </ul>
        <div className="flex items-center justify-between pt-4">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '500' }}>
            $128
          </p>
          <Button style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
