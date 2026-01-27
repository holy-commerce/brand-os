/**
 * HØLY™ / CORE SYSTEM COMPONENTS / Quantity Selector
 * 
 * LOCKED COMPONENT - DO NOT DETACH OR REGENERATE
 * 
 * Master quantity selector component for commerce.
 * 
 * Usage:
 * - PDP
 * - Cart
 * - Quick Add modals
 * 
 * Variants: Default | Compact
 */

import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  variant?: 'default' | 'compact';
}

export function QuantitySelector({ 
  value, 
  onChange, 
  min = 1, 
  max = 99,
  variant = 'default' 
}: QuantitySelectorProps) {
  const isCompact = variant === 'compact';
  const buttonSize = isCompact ? 'w-8 h-8' : 'w-10 h-10';
  const fontSize = isCompact ? '14px' : '16px';

  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleDecrement}
        disabled={value <= min}
        className={`${buttonSize} rounded-lg flex items-center justify-center transition-all`}
        style={{ 
          border: '1px solid #DADADA',
          backgroundColor: value <= min ? '#F9F6F0' : '#FFFFFF',
          opacity: value <= min ? 0.5 : 1,
          cursor: value <= min ? 'not-allowed' : 'pointer'
        }}
      >
        <Minus className="w-4 h-4" style={{ color: '#1A1A1A' }} />
      </button>

      <span style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize, 
        fontWeight: '600', 
        color: '#1A1A1A',
        minWidth: isCompact ? '24px' : '32px',
        textAlign: 'center'
      }}>
        {value}
      </span>

      <button
        onClick={handleIncrement}
        disabled={value >= max}
        className={`${buttonSize} rounded-lg flex items-center justify-center transition-all`}
        style={{ 
          border: '1px solid #DADADA',
          backgroundColor: value >= max ? '#F9F6F0' : '#FFFFFF',
          opacity: value >= max ? 0.5 : 1,
          cursor: value >= max ? 'not-allowed' : 'pointer'
        }}
      >
        <Plus className="w-4 h-4" style={{ color: '#1A1A1A' }} />
      </button>
    </div>
  );
}
