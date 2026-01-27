/**
 * HØLY™ / CORE SYSTEM COMPONENTS / Price Display
 * 
 * LOCKED COMPONENT - DO NOT DETACH OR REGENERATE
 * 
 * Master price display component with compare-at pricing and savings.
 * 
 * Usage:
 * - Product Cards
 * - PDP
 * - Cart
 * - Checkout
 * 
 * Variants: Default | Large | Compact
 */

interface PriceDisplayProps {
  price: number | string;
  compareAtPrice?: number | string;
  salePrice?: number | string; // Legacy prop support
  variant?: 'default' | 'large' | 'compact';
  size?: 'sm' | 'md' | 'lg'; // Legacy prop support
  showSavings?: boolean;
}

export function PriceDisplay({ 
  price, 
  compareAtPrice, 
  salePrice, // Legacy support
  variant = 'default',
  size, // Legacy support
  showSavings = true 
}: PriceDisplayProps) {
  // Convert to numbers and handle string inputs
  const priceNum = typeof price === 'string' ? parseFloat(price) : price;
  const compareAtNum = compareAtPrice 
    ? (typeof compareAtPrice === 'string' ? parseFloat(compareAtPrice) : compareAtPrice)
    : undefined;
  const saleNum = salePrice 
    ? (typeof salePrice === 'string' ? parseFloat(salePrice) : salePrice)
    : undefined;
  
  // Use salePrice as compareAtPrice if provided (legacy support)
  const finalCompareAt = compareAtNum || saleNum;
  
  // Map size to variant for legacy support
  const sizeToVariant = {
    'sm': 'compact',
    'md': 'default',
    'lg': 'large'
  };
  const finalVariant = size ? (sizeToVariant[size] as 'default' | 'large' | 'compact') : variant;
  
  const savings = finalCompareAt ? finalCompareAt - priceNum : 0;
  const savingsPercentage = finalCompareAt ? Math.round((savings / finalCompareAt) * 100) : 0;

  const fontSize = {
    default: '24px',
    large: '32px',
    compact: '16px'
  }[finalVariant];

  const compareAtSize = {
    default: '18px',
    large: '24px',
    compact: '14px'
  }[finalVariant];

  // Return null if price is invalid
  if (isNaN(priceNum)) {
    console.error('PriceDisplay: Invalid price value', price);
    return null;
  }

  return (
    <div className="flex items-baseline gap-3 flex-wrap">
      <span style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize, 
        fontWeight: '600', 
        color: '#1A1A1A' 
      }}>
        ${priceNum.toFixed(2)}
      </span>
      
      {finalCompareAt && !isNaN(finalCompareAt) && (
        <>
          <span style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: compareAtSize, 
            color: '#1A1A1A',
            opacity: 0.4,
            textDecoration: 'line-through'
          }}>
            ${finalCompareAt.toFixed(2)}
          </span>
          
          {showSavings && savings > 0 && (
            <span 
              className="px-2 py-1 rounded" 
              style={{ 
                backgroundColor: '#5E6458',
                fontFamily: 'Inter, sans-serif', 
                fontSize: finalVariant === 'large' ? '14px' : '12px',
                fontWeight: '600',
                color: '#F9F6F0'
              }}
            >
              Save {savingsPercentage}%
            </span>
          )}
        </>
      )}
    </div>
  );
}
