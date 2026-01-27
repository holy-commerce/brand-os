import { ReactNode, useState } from 'react';

// ========================================
// SACRED AURA (HOVER STATE)
// ========================================

interface SacredAuraProps {
  children: ReactNode;
  variant?: 'void-black' | 'veil-clay' | 'fogstone-blue' | 'cream';
  className?: string;
  onClick?: () => void;
}

export function SacredAuraHover({ 
  children, 
  variant = 'void-black',
  className = '',
  onClick
}: SacredAuraProps) {
  return (
    <>
      <style>{`
        .sacred-aura-wrapper {
          position: relative;
          display: inline-block;
        }
        
        .sacred-aura-wrapper:hover > *:first-child {
          animation: sacredAuraGlow 2000ms ease-in-out infinite !important;
        }
        
        @keyframes sacredAuraGlow {
          0%, 100% {
            box-shadow: 
              0 0 30px 8px rgba(215, 208, 197, 0.4),
              0 0 60px 15px rgba(217, 196, 187, 0.3),
              0 0 90px 20px rgba(156, 136, 122, 0.15);
          }
          50% {
            box-shadow: 
              0 0 40px 12px rgba(215, 208, 197, 0.8),
              0 0 80px 20px rgba(217, 196, 187, 0.6),
              0 0 120px 30px rgba(156, 136, 122, 0.3);
          }
        }
      `}</style>
      
      <div className={`sacred-aura-wrapper ${className}`} onClick={onClick}>
        {children}
      </div>
    </>
  );
}

// ========================================
// RITUAL PULSE (CLICK STATE)
// ========================================

interface RitualPulseProps {
  children: ReactNode;
  variant?: 'void-black' | 'veil-clay' | 'fogstone-blue' | 'cream';
  showSlitMark?: boolean;
  onComplete?: () => void;
}

export function RitualPulseClick({ 
  children, 
  variant = 'void-black',
  showSlitMark = false,
  onComplete
}: RitualPulseProps) {
  const [isClicking, setIsClicking] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  
  const handleClick = () => {
    setIsClicking(true);
    setShowPulse(true);
    
    setTimeout(() => {
      setIsClicking(false);
    }, 60);
    
    setTimeout(() => {
      setShowPulse(false);
      if (onComplete) onComplete();
    }, 400);
  };
  
  return (
    <div 
      className="relative inline-block cursor-pointer"
      onClick={handleClick}
    >
      <style>{`
        @keyframes pulseExpand {
          0% {
            opacity: 0.8;
            box-shadow: 0 0 30px 10px rgba(215, 208, 197, 0.8);
          }
          100% {
            opacity: 0;
            box-shadow: 0 0 80px 40px rgba(215, 208, 197, 0);
          }
        }
        
        @keyframes veilFlash {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.2;
          }
        }
        
        @keyframes slitFlash {
          0% {
            width: 2px;
            opacity: 0.4;
          }
          50% {
            width: 24px;
            opacity: 1;
          }
          100% {
            width: 2px;
            opacity: 0;
          }
        }
      `}</style>
      
      {/* Pulse Effect */}
      {showPulse && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            borderRadius: '8px',
            animation: 'pulseExpand 300ms ease-out forwards',
            pointerEvents: 'none',
            zIndex: 5,
          }}
        />
      )}
      
      {/* Veil Flash */}
      {showPulse && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '8px',
            backgroundColor: '#FFFFFF',
            animation: 'veilFlash 120ms ease-in-out',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
      )}
      
      {/* Slit Mark */}
      {showSlitMark && showPulse && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '2px',
            backgroundColor: '#F9F6F0',
            animation: 'slitFlash 200ms ease-in-out',
            pointerEvents: 'none',
            zIndex: 8,
            boxShadow: '0 0 8px rgba(249, 246, 240, 0.8)',
          }}
        />
      )}
      
      {/* Button */}
      <div
        style={{
          transform: isClicking ? 'scale(0.97)' : 'scale(1)',
          transition: 'transform 60ms ease-out',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ========================================
// CTA RITUAL INTERACTION SET (COMBINED)
// ========================================

interface CTARitualInteractionProps {
  children: ReactNode;
  variant?: 'void-black' | 'veil-clay' | 'fogstone-blue' | 'cream';
  showSlitMark?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function CTARitualInteraction({
  children,
  variant = 'void-black',
  showSlitMark = false,
  disabled = false,
  onClick
}: CTARitualInteractionProps) {
  const [isClicking, setIsClicking] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  
  const handleClick = () => {
    if (disabled) return;
    
    setIsClicking(true);
    setShowPulse(true);
    
    setTimeout(() => {
      setIsClicking(false);
    }, 60);
    
    setTimeout(() => {
      setShowPulse(false);
      if (onClick) onClick();
    }, 400);
  };
  
  return (
    <>
      <style>{`
        .cta-ritual-container {
          display: inline-block;
        }
        
        .cta-ritual-wrapper {
          position: relative;
          display: inline-block;
        }
        
        .cta-ritual-wrapper:not(.disabled):hover .cta-ritual-target {
          animation: ctaRitualGlow 2000ms ease-in-out infinite !important;
        }
        
        @keyframes ctaRitualGlow {
          0%, 100% {
            box-shadow: 
              0 0 30px 8px rgba(215, 208, 197, 0.4),
              0 0 60px 15px rgba(217, 196, 187, 0.3),
              0 0 90px 20px rgba(156, 136, 122, 0.15);
          }
          50% {
            box-shadow: 
              0 0 40px 12px rgba(215, 208, 197, 0.8),
              0 0 80px 20px rgba(217, 196, 187, 0.6),
              0 0 120px 30px rgba(156, 136, 122, 0.3);
          }
        }
        
        @keyframes ctaPulseExpand {
          0% {
            opacity: 0.8;
            box-shadow: 0 0 30px 10px rgba(215, 208, 197, 0.8);
          }
          100% {
            opacity: 0;
            box-shadow: 0 0 80px 40px rgba(215, 208, 197, 0);
          }
        }
        
        @keyframes ctaVeilFlash {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.2;
          }
        }
        
        @keyframes ctaSlitFlash {
          0% {
            width: 2px;
            opacity: 0.4;
          }
          50% {
            width: 24px;
            opacity: 1;
          }
          100% {
            width: 2px;
            opacity: 0;
          }
        }
      `}</style>
      
      <div 
        className={`cta-ritual-container ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
        onClick={handleClick}
      >
        <div className={`cta-ritual-wrapper ${disabled ? 'disabled' : ''}`}>
          {/* CLICK: Pulse Effect */}
          {showPulse && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                animation: 'ctaPulseExpand 300ms ease-out forwards',
                pointerEvents: 'none',
                zIndex: 5,
              }}
            />
          )}
          
          {/* CLICK: Veil Flash */}
          {showPulse && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                animation: 'ctaVeilFlash 120ms ease-in-out',
                pointerEvents: 'none',
                zIndex: 3,
              }}
            />
          )}
          
          {/* CLICK: Slit Mark */}
          {showSlitMark && showPulse && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                height: '2px',
                backgroundColor: '#F9F6F0',
                animation: 'ctaSlitFlash 200ms ease-in-out',
                pointerEvents: 'none',
                zIndex: 8,
                boxShadow: '0 0 8px rgba(249, 246, 240, 0.8)',
              }}
            />
          )}
          
          {/* Button with hover + click */}
          <div
            className="cta-ritual-target"
            style={{
              transform: isClicking ? 'scale(0.97)' : 'scale(1)',
              transition: 'transform 60ms ease-out',
              position: 'relative',
              zIndex: 10,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
