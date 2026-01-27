/**
 * 🪄 AUTO-RITUAL™ SUBSCRIPTION TOGGLE — LOCKED ROOT COMPONENT
 * 
 * CRITICAL: This is the master Auto-Ritual subscription toggle component.
 * DO NOT detach, recreate, or build custom versions. Always import this component.
 * 
 * BRANDING UPDATE (Nov 14, 2025):
 * - Old: "Subscribe & Save"
 * - New: "Auto-Ritual™ (Subscribe & Save 10%)"
 * 
 * Features:
 * - Smooth toggle animation (300ms)
 * - Auto-calculates discounted price
 * - Support text for clarity
 * - Hover states for accessibility
 * - Keyboard navigation support
 * 
 * Usage:
 * <AutoRitualToggle 
 *   basePrice={68} 
 *   discount={15}
 *   interval="30 days"
 *   onToggle={(isActive) => console.log(isActive)}
 * />
 */

import { useState } from 'react';
import { Badge } from '../ui/badge';

interface AutoRitualToggleProps {
  basePrice: number;
  discount?: number; // Percentage (e.g., 15 for 15%)
  interval?: '30 days' | '60 days' | '90 days';
  onToggle?: (isActive: boolean) => void;
  defaultActive?: boolean;
  showPrice?: boolean;
  compact?: boolean; // Smaller version for cart/checkout
}

export function AutoRitualToggle({
  basePrice,
  discount = 15,
  interval = '30 days',
  onToggle,
  defaultActive = false,
  showPrice = true,
  compact = false
}: AutoRitualToggleProps) {
  const [isActive, setIsActive] = useState(defaultActive);

  const handleToggle = () => {
    const newState = !isActive;
    setIsActive(newState);
    onToggle?.(newState);
  };

  const discountedPrice = (basePrice * (1 - discount / 100)).toFixed(2);
  const savings = (basePrice * (discount / 100)).toFixed(2);

  return (
    <div 
      className={`rounded-xl space-y-3 ${compact ? 'p-3' : 'p-4'}`}
      style={{ 
        backgroundColor: '#F9F6F0', 
        border: '1px solid #DADADA',
        transition: 'all 300ms ease-in-out'
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Toggle Switch */}
          <button
            onClick={handleToggle}
            className="w-12 h-6 rounded-full transition-all relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-#1A1A1A"
            style={{ 
              backgroundColor: isActive ? '#1A1A1A' : '#DADADA',
              cursor: 'pointer'
            }}
            aria-label={isActive ? 'Disable Auto-Ritual subscription' : 'Enable Auto-Ritual subscription'}
            aria-pressed={isActive}
          >
            <div 
              className="absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: '#FFFFFF',
                left: isActive ? 'calc(100% - 22px)' : '2px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}
            />
          </button>
          
          {/* Label */}
          <div>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: compact ? '13px' : '14px', 
              color: '#1A1A1A', 
              fontWeight: '600',
              marginBottom: '2px'
            }}>
              Auto-Ritual™ (Save {discount}%)
            </p>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: compact ? '11px' : '12px', 
              color: '#1A1A1A', 
              opacity: 0.6 
            }}>
              Delivered every {interval} • Cancel anytime
            </p>
          </div>
        </div>

        {/* Price Badge (when active) */}
        {isActive && showPrice && (
          <Badge 
            style={{ 
              backgroundColor: '#9C887A', 
              color: '#F9F6F0',
              fontFamily: 'Inter, sans-serif',
              fontSize: compact ? '12px' : '13px'
            }}
          >
            ${discountedPrice}/mo
          </Badge>
        )}
      </div>

      {/* Expanded Details (when active) */}
      {isActive && (
        <div 
          className="pt-3 space-y-2"
          style={{ 
            borderTop: '1px solid #DADADA',
            animation: 'fadeIn 300ms ease-in-out'
          }}
        >
          <div className="flex items-center justify-between">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
              One-time price
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, textDecoration: 'line-through' }}>
              ${basePrice.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
              Auto-Ritual™ price
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
              ${discountedPrice}
            </p>
          </div>
          <div 
            className="mt-2 p-2 rounded-lg"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              💎 You save ${savings} every {interval}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 200px;
          }
        }
      `}</style>
    </div>
  );
}

/**
 * 🪄 AUTO-RITUAL™ MODAL — INFORMATIONAL OVERLAY
 * 
 * Educational modal explaining Auto-Ritual benefits
 * Triggered from tooltip or info icon on toggle
 */

interface AutoRitualModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AutoRitualModal({ isOpen, onClose }: AutoRitualModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(26, 26, 26, 0.7)' }}
      onClick={onClose}
    >
      <div 
        className="max-w-md w-full p-8 rounded-2xl space-y-6"
        style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', marginBottom: '12px' }}>
            What is Auto-Ritual™?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
            Auto-Ritual™ means your ritual product arrives when you need it, automatically.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-3">
            <div style={{ flexShrink: 0, marginTop: '2px' }}>
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#9C887A' }}
              >
                <span style={{ color: '#F9F6F0', fontSize: '14px' }}>✓</span>
              </div>
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '4px' }}>
                Never run out
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                Your ritual arrives on your schedule, so you never miss a day of your sacred practice.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div style={{ flexShrink: 0, marginTop: '2px' }}>
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#9C887A' }}
              >
                <span style={{ color: '#F9F6F0', fontSize: '14px' }}>✓</span>
              </div>
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '4px' }}>
                Save 10-15%
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                Exclusive pricing for those committed to their ritual practice.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div style={{ flexShrink: 0, marginTop: '2px' }}>
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#9C887A' }}
              >
                <span style={{ color: '#F9F6F0', fontSize: '14px' }}>✓</span>
              </div>
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '4px' }}>
                Full control
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                Skip, pause, or cancel anytime. No commitments, no hassle.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-lg transition-colors"
          style={{ 
            backgroundColor: '#1A1A1A', 
            color: '#F9F6F0',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
