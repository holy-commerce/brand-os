/**
 * Product Listing Page (PLP) Components
 * HØLY™ Design System
 * 
 * Motion-enhanced shopping experience with Sacred Aura hover states
 * and Ritual Pulse click feedback
 */

import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Checkbox } from '../ui/checkbox';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../ui/dialog';
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from '../ui/sheet';
import { VisuallyHidden } from '../ui/visually-hidden';
import { 
  HOLYCart, 
  HOLYHeart, 
  HOLYEye, 
  HOLYClose, 
  HOLYChevronDown,
  HOLYFilter
} from '../icons/HOLYIcons';
import { RitualSystemBadge } from '../core-system/RitualSystemBadge';
import { PriceDisplay } from '../core-system/PriceDisplay';
import { MetadataLabel } from '../core-system/LabelSystem';
import type { MetadataType } from '../core-system/LabelSystem';

// ========================================
// ENHANCED PRODUCT CARD
// ========================================

interface EnhancedProductCardProps {
  image: string;
  title: string;
  description?: string;
  price: string;
  salePrice?: string;
  badge?: 'ritual-essential' | 'studio-exclusive' | 'going-fast' | 'new' | 'sale';
  system?: string;
  onQuickView?: () => void;
  onAddToCart?: () => void;
}

export function EnhancedProductCard({
  image,
  title,
  description,
  price,
  salePrice,
  badge,
  system,
  onQuickView,
  onAddToCart
}: EnhancedProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  const renderBadge = () => {
    if (!badge) return null;
    
    // Map old badge types to new MetadataLabel types
    const badgeMap: Record<string, MetadataType> = {
      'ritual-essential': 'Ritual Essential',
      'studio-exclusive': 'Limited',
      'going-fast': 'Low Stock',
      'new': 'New',
      'sale': 'Limited'
    };
    
    const labelType = badgeMap[badge];
    if (!labelType) return null;
    
    return <MetadataLabel type={labelType} size="sm" showIcon={badge === 'new'} />;
  };

  return (
    <Card 
      className="group relative transition-all duration-300"
      style={{ 
        borderColor: '#DADADA', 
        overflow: 'hidden',
        transform: isClicked ? 'scale(0.98)' : isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 12px 32px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.04)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="aspect-square relative" style={{ backgroundColor: '#F9F6F0' }}>
        <ImageWithFallback 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        
        {/* Badge */}
        {badge && (
          <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 10 }}>
            {renderBadge()}
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            backgroundColor: isFavorited ? '#1A1A1A' : 'rgba(255,255,255,0.9)',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1)' : 'scale(0.8)'
          }}
        >
          <HOLYHeart 
            size={18} 
            color={isFavorited ? '#F9F6F0' : '#1A1A1A'} 
            strokeWidth={isFavorited ? 2 : 1.5}
          />
        </button>

        {/* Sacred Aura Hover Overlay */}
        <div 
          className="absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300"
          style={{ 
            backgroundColor: isHovered ? 'rgba(26,26,26,0.7)' : 'rgba(26,26,26,0)',
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? 'auto' : 'none'
          }}
        >
          <Button 
            size="sm" 
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
              onAddToCart?.();
            }}
            className="transition-all duration-200"
            style={{ 
              backgroundColor: '#F9F6F0', 
              color: '#1A1A1A',
              transform: isClicked ? 'scale(0.95)' : 'scale(1)',
              boxShadow: '0 0 24px rgba(249,246,240,0.4)'
            }}
          >
            <HOLYCart className="w-4 h-4 mr-2" />
            Add to Ritual
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView?.();
            }}
            className="transition-all duration-200"
            style={{ 
              borderColor: '#F9F6F0', 
              color: '#F9F6F0',
              backgroundColor: 'transparent'
            }}
          >
            <HOLYEye className="w-4 h-4 mr-2" />
            Quick View
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <CardContent className="pt-6 space-y-3">
        {system && (
          <div className="mb-2">
            <RitualSystemBadge system={system} size="sm" />
          </div>
        )}
        <h3 style={{ 
          fontFamily: 'Garamond, serif', 
          fontSize: '18px', 
          color: '#1A1A1A',
          lineHeight: '130%'
        }}>
          {title}
        </h3>
        {description && (
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '14px', 
            color: '#1A1A1A', 
            opacity: 0.7,
            lineHeight: '140%'
          }}>
            {description}
          </p>
        )}
        <PriceDisplay 
          price={price}
          salePrice={salePrice}
          size="lg"
        />
      </CardContent>
    </Card>
  );
}

// ========================================
// FILTER SECTION (DESKTOP SIDEBAR)
// ========================================

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterGroupProps {
  title: string;
  options: FilterOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  defaultOpen?: boolean;
}

export function FilterGroup({ title, options, selected, onChange, defaultOpen = true }: FilterGroupProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = (optionId: string) => {
    if (selected.includes(optionId)) {
      onChange(selected.filter(id => id !== optionId));
    } else {
      onChange([...selected, optionId]);
    }
  };

  const selectedCount = selected.length;

  return (
    <div className="border-b" style={{ borderColor: '#DADADA' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between transition-opacity hover:opacity-70"
        style={{ 
          padding: '16px 0',
          minHeight: '56px' // Touch-friendly header
        }}
        aria-expanded={isOpen}
        aria-label={`${title} filters, ${selectedCount} selected`}
      >
        <div className="flex items-center gap-2">
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '15px', 
            color: '#1A1A1A',
            fontWeight: '600',
            margin: 0
          }}>
            {title}
          </p>
          {selectedCount > 0 && (
            <span 
              className="px-2 py-0.5 rounded-full"
              style={{ 
                backgroundColor: '#1A1A1A',
                color: '#F9F6F0',
                fontSize: '11px',
                fontWeight: '600'
              }}
            >
              {selectedCount}
            </span>
          )}
        </div>
        <HOLYChevronDown 
          size={18} 
          color="#1A1A1A"
          strokeWidth={1.5}
          className="transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      {isOpen && (
        <div className="pb-4 space-y-1">
          {options.map(option => (
            <label 
              key={option.id}
              className="flex items-center gap-3 cursor-pointer group transition-colors hover:bg-opacity-50"
              style={{ 
                padding: '12px 0',
                minHeight: '44px', // WCAG touch target minimum
                borderRadius: '8px'
              }}
            >
              <Checkbox 
                checked={selected.includes(option.id)}
                onCheckedChange={() => handleToggle(option.id)}
                aria-label={option.label}
              />
              <span className="flex-1 flex items-center justify-between">
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '15px', 
                  color: '#1A1A1A',
                  opacity: selected.includes(option.id) ? 1 : 0.7,
                  fontWeight: selected.includes(option.id) ? '500' : '400',
                  margin: 0
                }}>
                  {option.label}
                </p>
                {option.count !== undefined && (
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '14px', 
                    color: '#1A1A1A',
                    opacity: 0.5,
                    margin: 0
                  }}>
                    {option.count}
                  </p>
                )}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export function FilterSidebar() {
  const [systemFilters, setSystemFilters] = useState<string[]>([]);
  const [purposeFilters, setPurposeFilters] = useState<string[]>([]);
  const [timeFilters, setTimeFilters] = useState<string[]>([]);
  const [formatFilters, setFormatFilters] = useState<string[]>([]);
  const [tagFilters, setTagFilters] = useState<string[]>([]);

  const hasActiveFilters = 
    systemFilters.length > 0 || 
    purposeFilters.length > 0 || 
    timeFilters.length > 0 ||
    formatFilters.length > 0 ||
    tagFilters.length > 0;

  const clearAllFilters = () => {
    setSystemFilters([]);
    setPurposeFilters([]);
    setTimeFilters([]);
    setFormatFilters([]);
    setTagFilters([]);
  };

  return (
    <div className="space-y-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <HOLYFilter size={20} color="#1A1A1A" />
          <p style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '20px', 
            color: '#1A1A1A'
          }}>
            Refine
          </p>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="transition-opacity hover:opacity-70"
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '13px', 
              color: '#1A1A1A',
              textDecoration: 'underline'
            }}
          >
            Clear all
          </button>
        )}
      </div>

      {/* Filter Groups */}
      <FilterGroup
        title="System"
        options={[
          { id: 'aftercare', label: 'Aftercare™', count: 12 },
          { id: 'renewal', label: 'Renewal™', count: 18 },
          { id: 'vital', label: 'Vital™', count: 15 },
          { id: 'touch', label: 'Touch™', count: 9 },
          { id: 'union', label: 'Union™', count: 6 },
        ]}
        selected={systemFilters}
        onChange={setSystemFilters}
      />

      <FilterGroup
        title="Purpose"
        options={[
          { id: 'cleanse', label: 'Cleanse', count: 14 },
          { id: 'treat', label: 'Treat', count: 22 },
          { id: 'protect', label: 'Protect', count: 18 },
          { id: 'restore', label: 'Restore', count: 16 },
        ]}
        selected={purposeFilters}
        onChange={setPurposeFilters}
      />

      <FilterGroup
        title="Time of Ritual"
        options={[
          { id: 'morning', label: 'Morning', count: 24 },
          { id: 'evening', label: 'Evening', count: 19 },
          { id: 'anytime', label: 'Anytime', count: 31 },
        ]}
        selected={timeFilters}
        onChange={setTimeFilters}
      />

      <FilterGroup
        title="Format"
        options={[
          { id: 'oil', label: 'Oil', count: 12 },
          { id: 'spray', label: 'Spray', count: 8 },
          { id: 'balm', label: 'Balm', count: 6 },
          { id: 'serum', label: 'Serum', count: 10 },
          { id: 'tool', label: 'Tool', count: 5 },
          { id: 'mask', label: 'Mask', count: 7 },
        ]}
        selected={formatFilters}
        onChange={setFormatFilters}
        defaultOpen={false}
      />

      <FilterGroup
        title="Tags"
        options={[
          { id: 'ritual-essential', label: 'Ritual Essential', count: 8 },
          { id: 'studio-exclusive', label: 'Studio Exclusive', count: 4 },
          { id: 'limited-release', label: 'Limited Release', count: 3 },
        ]}
        selected={tagFilters}
        onChange={setTagFilters}
        defaultOpen={false}
      />
    </div>
  );
}

// ========================================
// FILTER DRAWER (MOBILE)
// ========================================

export function FilterDrawer() {
  const [systemFilters, setSystemFilters] = useState<string[]>([]);
  const [purposeFilters, setPurposeFilters] = useState<string[]>([]);
  const [timeFilters, setTimeFilters] = useState<string[]>([]);
  const [formatFilters, setFormatFilters] = useState<string[]>([]);
  const [tagFilters, setTagFilters] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const activeFilterCount = 
    systemFilters.length + 
    purposeFilters.length + 
    timeFilters.length +
    formatFilters.length +
    tagFilters.length;

  const hasActiveFilters = activeFilterCount > 0;

  const clearAllFilters = () => {
    setSystemFilters([]);
    setPurposeFilters([]);
    setTimeFilters([]);
    setFormatFilters([]);
    setTagFilters([]);
  };

  const applyFilters = () => {
    // Apply filters and close drawer
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full relative"
          style={{ 
            borderColor: '#DADADA',
            color: '#1A1A1A',
            backgroundColor: '#FFFFFF',
            height: '44px', // Touch-friendly minimum height
            fontSize: '15px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '500'
          }}
        >
          <HOLYFilter className="w-5 h-5 mr-2" />
          Filters
          {hasActiveFilters && (
            <span 
              className="ml-2 px-2 py-0.5 rounded-full"
              style={{ 
                backgroundColor: '#1A1A1A',
                color: '#F9F6F0',
                fontSize: '12px',
                fontWeight: '600'
              }}
            >
              {activeFilterCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="bottom" 
        className="flex flex-col p-0" 
        style={{ 
          backgroundColor: '#FFFFFF',
          height: '90vh',
          maxHeight: '90vh',
          paddingBottom: 'env(safe-area-inset-bottom)' // Safe area for mobile notches
        }}
      >
        <VisuallyHidden>
          <SheetTitle>Filter Products</SheetTitle>
          <SheetDescription>Refine your product search using filters</SheetDescription>
        </VisuallyHidden>

        {/* Header - Fixed */}
        <div 
          className="flex-shrink-0 px-6 pt-6 pb-4 border-b"
          style={{ borderColor: '#DADADA' }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <HOLYFilter size={24} color="#1A1A1A" strokeWidth={1.5} />
              <h2 style={{ 
                fontFamily: 'Garamond, serif', 
                fontSize: '24px', 
                color: '#1A1A1A',
                margin: 0
              }}>
                Refine Your Ritual
              </h2>
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="transition-opacity hover:opacity-70"
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  color: '#1A1A1A',
                  textDecoration: 'underline',
                  padding: '8px',
                  minHeight: '44px'
                }}
              >
                Clear all
              </button>
            )}
          </div>
          {hasActiveFilters && (
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '13px', 
              color: '#1A1A1A',
              opacity: 0.6,
              margin: 0
            }}>
              {activeFilterCount} {activeFilterCount === 1 ? 'filter' : 'filters'} selected
            </p>
          )}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="space-y-0">
            <FilterGroup
              title="System"
              options={[
                { id: 'aftercare', label: 'Aftercare™', count: 12 },
                { id: 'renewal', label: 'Renewal™', count: 18 },
                { id: 'vital', label: 'Vital™', count: 15 },
                { id: 'touch', label: 'Touch™', count: 9 },
                { id: 'union', label: 'Union™', count: 6 },
              ]}
              selected={systemFilters}
              onChange={setSystemFilters}
            />

            <FilterGroup
              title="Purpose"
              options={[
                { id: 'cleanse', label: 'Cleanse', count: 14 },
                { id: 'treat', label: 'Treat', count: 22 },
                { id: 'protect', label: 'Protect', count: 18 },
                { id: 'restore', label: 'Restore', count: 16 },
              ]}
              selected={purposeFilters}
              onChange={setPurposeFilters}
            />

            <FilterGroup
              title="Time of Ritual"
              options={[
                { id: 'morning', label: 'Morning', count: 24 },
                { id: 'evening', label: 'Evening', count: 19 },
                { id: 'anytime', label: 'Anytime', count: 31 },
              ]}
              selected={timeFilters}
              onChange={setTimeFilters}
            />

            <FilterGroup
              title="Format"
              options={[
                { id: 'oil', label: 'Oil', count: 12 },
                { id: 'spray', label: 'Spray', count: 8 },
                { id: 'balm', label: 'Balm', count: 6 },
                { id: 'serum', label: 'Serum', count: 10 },
                { id: 'tool', label: 'Tool', count: 5 },
                { id: 'mask', label: 'Mask', count: 7 },
              ]}
              selected={formatFilters}
              onChange={setFormatFilters}
              defaultOpen={false}
            />

            <FilterGroup
              title="Tags"
              options={[
                { id: 'ritual-essential', label: 'Ritual Essential', count: 8 },
                { id: 'studio-exclusive', label: 'Studio Exclusive', count: 4 },
                { id: 'limited-release', label: 'Limited Release', count: 3 },
              ]}
              selected={tagFilters}
              onChange={setTagFilters}
              defaultOpen={false}
            />
          </div>
          
          {/* Bottom padding for better scrolling */}
          <div style={{ height: '80px' }} />
        </div>

        {/* Sticky Footer - Fixed */}
        <div 
          className="flex-shrink-0 p-4 border-t"
          style={{ 
            borderColor: '#DADADA',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 -4px 16px rgba(0,0,0,0.06)'
          }}
        >
          <div className="flex gap-3">
            <Button 
              variant="outline"
              onClick={clearAllFilters}
              disabled={!hasActiveFilters}
              style={{ 
                flex: '1',
                height: '48px',
                borderColor: '#DADADA',
                color: '#1A1A1A',
                backgroundColor: '#FFFFFF',
                fontSize: '15px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
                opacity: hasActiveFilters ? 1 : 0.5
              }}
            >
              Reset
            </Button>
            <Button 
              onClick={applyFilters}
              style={{ 
                flex: '2',
                height: '48px',
                backgroundColor: '#1A1A1A',
                color: '#F9F6F0',
                fontSize: '15px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600'
              }}
            >
              Apply Filters
              {hasActiveFilters && ` (${activeFilterCount})`}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// ========================================
// QUICK VIEW MODAL
// ========================================

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    image: string;
    title: string;
    description: string;
    price: string;
    system: string;
  };
}

export function QuickViewModal({ isOpen, onClose, product }: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-4xl p-0 overflow-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <VisuallyHidden>
          <DialogTitle>{product.title}</DialogTitle>
          <DialogDescription>Quick view of {product.title}</DialogDescription>
        </VisuallyHidden>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-square" style={{ backgroundColor: '#F9F6F0' }}>
            <ImageWithFallback 
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{
                backgroundColor: 'rgba(26,26,26,0.1)',
                hover: { backgroundColor: 'rgba(26,26,26,0.2)' }
              }}
            >
              <HOLYClose size={18} color="#1A1A1A" />
            </button>

            <div className="space-y-3">
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '12px', 
                color: '#1A1A1A',
                opacity: 0.6,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: '600'
              }}>
                {product.system}
              </p>
              <h2 style={{ 
                fontFamily: 'Garamond, serif', 
                fontSize: '32px', 
                color: '#1A1A1A',
                lineHeight: '120%'
              }}>
                {product.title}
              </h2>
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '16px', 
                color: '#1A1A1A', 
                opacity: 0.7,
                lineHeight: '160%'
              }}>
                {product.description}
              </p>
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '24px', 
                color: '#1A1A1A', 
                fontWeight: '600'
              }}>
                {product.price}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px', 
                color: '#1A1A1A',
                fontWeight: '500'
              }}>
                Quantity:
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded flex items-center justify-center transition-colors"
                  style={{ 
                    backgroundColor: '#F9F6F0',
                    border: '1px solid #DADADA'
                  }}
                >
                  −
                </button>
                <span style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '16px', 
                  color: '#1A1A1A',
                  minWidth: '32px',
                  textAlign: 'center'
                }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded flex items-center justify-center transition-colors"
                  style={{ 
                    backgroundColor: '#F9F6F0',
                    border: '1px solid #DADADA'
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button 
                className="w-full group"
                style={{ 
                  backgroundColor: '#1A1A1A', 
                  color: '#F9F6F0',
                  paddingTop: '16px',
                  paddingBottom: '16px'
                }}
              >
                <HOLYCart className="w-5 h-5 mr-2" />
                Add to Ritual
              </Button>
              <Button 
                variant="outline"
                className="w-full"
                style={{ 
                  borderColor: '#DADADA',
                  color: '#1A1A1A',
                  paddingTop: '16px',
                  paddingBottom: '16px'
                }}
              >
                View Full Details
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
