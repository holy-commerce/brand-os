/**
 * HØLY™ / CORE SYSTEM COMPONENTS / Product Card
 * 
 * LOCKED COMPONENT - DO NOT DETACH OR REGENERATE
 * 
 * Master product card component for all commerce contexts.
 * 
 * Usage:
 * - Home Page Featured Products
 * - PLP Grid
 * - Related Products (PDP)
 * - Cart Recommendations
 * 
 * Variants: Standard | Compact | Featured
 */

import { ShoppingCart, Heart } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Badge } from '../ui/badge';
import { MetadataLabel } from './LabelSystem';
import type { MetadataType } from './LabelSystem';

interface ProductCardProps {
  id: number | string;
  name: string;
  system?: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  badge?: string;
  onAddToCart?: (id: number | string) => void;
  onToggleFavorite?: (id: number | string) => void;
  variant?: 'standard' | 'compact' | 'featured';
}

export function ProductCard({
  id,
  name,
  system,
  price,
  compareAtPrice,
  image,
  badge,
  onAddToCart,
  onToggleFavorite,
  variant = 'standard'
}: ProductCardProps) {
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';

  return (
    <div className="group cursor-pointer">
      {/* Product Image */}
      <div 
        className="relative aspect-square rounded-2xl overflow-hidden mb-4" 
        style={{ backgroundColor: '#F9F6F0' }}
      >
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badge - Using Unified Label System */}
        {badge && (
          <div className="absolute top-4 left-4">
            <MetadataLabel 
              type={badge as MetadataType} 
              size="sm" 
              showIcon={badge === 'New'} 
            />
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {onToggleFavorite && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleFavorite(id);
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(249, 246, 240, 0.95)' }}
            >
              <Heart className="w-5 h-5" style={{ color: '#1A1A1A' }} />
            </button>
          )}
        </div>

        {/* Quick Add to Cart */}
        {onAddToCart && !isCompact && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(id);
            }}
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: 'rgba(249, 246, 240, 0.95)' }}
          >
            <ShoppingCart className="w-5 h-5" style={{ color: '#1A1A1A' }} />
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className={isCompact ? 'text-left' : 'text-center'}>
        {system && (
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: isCompact ? '11px' : '12px', 
            color: '#1A1A1A', 
            opacity: 0.6, 
            marginBottom: '4px' 
          }}>
            {system}
          </p>
        )}
        <h4 style={{ 
          fontFamily: 'Garamond, serif', 
          fontSize: isCompact ? '14px' : isFeatured ? '18px' : '16px', 
          color: '#1A1A1A', 
          marginBottom: '4px',
          lineHeight: '120%'
        }}>
          {name}
        </h4>
        <div className="flex items-center gap-2" style={{ justifyContent: isCompact ? 'flex-start' : 'center' }}>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: isCompact ? '14px' : '16px', 
            color: '#1A1A1A', 
            fontWeight: '500' 
          }}>
            ${price}
          </p>
          {compareAtPrice && (
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: isCompact ? '13px' : '14px', 
              color: '#1A1A1A', 
              opacity: 0.4,
              textDecoration: 'line-through'
            }}>
              ${compareAtPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
