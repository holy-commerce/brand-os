import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HOLYZoomIn, HOLYStar } from '../icons/HOLYIcons';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ========================================
// PDP MICROINTERACTIONS — HØLY™ OS
// ========================================
// Sacred motion states and interactions for Product Detail Pages
// Implements: Image Zoom, Button Glow, Star Fill, Ingredient Reveal
// Design System: 🪄 Motion / States > PDP Microinteractions

// ========================================
// 1. IMAGE ZOOM ON HOVER
// ========================================

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [mainImage, setMainImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="space-y-4">
      {/* Main Image with Zoom */}
      <motion.div 
        className="relative aspect-square rounded-2xl overflow-hidden cursor-zoom-in"
        style={{ backgroundColor: '#F9F6F0' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsZoomed(!isZoomed)}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div
          animate={{ scale: isZoomed ? 1.5 : (isHovering ? 1.05 : 1) }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="w-full h-full"
        >
          <ImageWithFallback 
            src={images[mainImage]}
            alt={`${productName} - View ${mainImage + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* 2D Zoom Indicator (HØLY Icon) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-4 right-4 p-2.5 rounded-lg flex items-center justify-center"
          style={{ 
            backgroundColor: 'rgba(26, 26, 26, 0.85)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <HOLYZoomIn size={20} color="#F9F6F0" opacity={1} strokeWidth={1.5} />
        </motion.div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <AnimatePresence>
              {isHovering && (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setMainImage(prev => prev === 0 ? images.length - 1 : prev - 1);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full transition-all"
                    style={{ backgroundColor: 'rgba(249, 246, 240, 0.95)' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-5 h-5" style={{ color: '#1A1A1A' }} />
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setMainImage(prev => prev === images.length - 1 ? 0 : prev + 1);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full transition-all"
                    style={{ backgroundColor: 'rgba(249, 246, 240, 0.95)' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-5 h-5" style={{ color: '#1A1A1A' }} />
                  </motion.button>
                </>
              )}
            </AnimatePresence>
          </>
        )}
      </motion.div>

      {/* Thumbnail Strip */}
      <div className="flex gap-3">
        {images.map((img, idx) => (
          <motion.button
            key={idx}
            onClick={() => setMainImage(idx)}
            className="flex-1 aspect-square rounded-xl overflow-hidden"
            style={{
              border: '2px solid',
              borderColor: mainImage === idx ? '#1A1A1A' : '#DADADA',
              opacity: mainImage === idx ? 1 : 0.6
            }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <ImageWithFallback 
              src={img}
              alt={`${productName} - Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ========================================
// 2. CTA BUTTON WITH SACRED BREATH GLOW
// ========================================

interface PDPButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  glowColor?: string;
}

export function PDPButton({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false,
  fullWidth = false,
  icon,
  glowColor = '#1A1A1A'
}: PDPButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const variantStyles = {
    primary: {
      backgroundColor: disabled ? '#DADADA' : '#1A1A1A',
      color: '#F9F6F0',
      border: 'none'
    },
    secondary: {
      backgroundColor: disabled ? '#F9F6F0' : '#F9F6F0',
      color: '#1A1A1A',
      border: '2px solid #1A1A1A'
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#1A1A1A',
      border: '2px solid #DADADA'
    }
  };

  return (
    <div className="relative" style={{ width: fullWidth ? '100%' : 'auto', overflow: 'visible' }}>
      {/* Sacred Breathing Aura (3-layer) - ENHANCED FOR VISIBILITY */}
      {(isHovered || isFocused) && !disabled && variant !== 'outline' && (
        <>
          {/* Outer Layer - Strongest Glow */}
          <motion.div
            className="absolute rounded-lg"
            style={{
              top: '-20px',
              left: '-20px',
              right: '-20px',
              bottom: '-20px',
              background: `radial-gradient(circle at 50% 50%, ${glowColor}60, ${glowColor}30 40%, transparent 80%)`,
              filter: 'blur(30px)',
              zIndex: 0
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          {/* Middle Layer */}
          <motion.div
            className="absolute rounded-lg"
            style={{
              top: '-15px',
              left: '-15px',
              right: '-15px',
              bottom: '-15px',
              background: `radial-gradient(circle at 50% 50%, ${glowColor}50, ${glowColor}25 50%, transparent 75%)`,
              filter: 'blur(25px)',
              zIndex: 0
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0.85, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2
            }}
          />
          {/* Inner Layer - Closest to Button */}
          <motion.div
            className="absolute rounded-lg"
            style={{
              top: '-10px',
              left: '-10px',
              right: '-10px',
              bottom: '-10px',
              background: `radial-gradient(circle at 50% 50%, ${glowColor}40, ${glowColor}20 60%, transparent 70%)`,
              filter: 'blur(20px)',
              zIndex: 0
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4
            }}
          />
        </>
      )}

      {/* Button */}
      <motion.button
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="relative flex items-center justify-center gap-2 px-8 py-4 rounded-lg transition-all"
        style={{
          ...variantStyles[variant],
          cursor: disabled ? 'not-allowed' : 'pointer',
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          fontWeight: '600',
          width: fullWidth ? '100%' : 'auto',
          zIndex: 1,
          outline: isFocused ? `3px solid ${glowColor}40` : 'none',
          outlineOffset: '2px'
        }}
        whileHover={!disabled ? { scale: 1.02, y: -1 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
        transition={{ duration: 0.2 }}
      >
        {icon}
        {children}
      </motion.button>
    </div>
  );
}

// ========================================
// 3. REVIEW STAR FILL ANIMATION
// ========================================

interface StarRatingProps {
  rating: number; // 0-5
  total?: number;
  size?: number;
  showCount?: boolean;
  reviewCount?: number;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

export function StarRating({ 
  rating, 
  total = 5, 
  size = 20, 
  showCount = false,
  reviewCount = 0,
  interactive = false,
  onRatingChange
}: StarRatingProps) {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const displayRating = interactive && hoveredStar !== null ? hoveredStar : rating;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: total }).map((_, index) => {
          const starValue = index + 1;
          const fillPercentage = Math.max(0, Math.min(100, (displayRating - index) * 100));
          const isHovered = hoveredStar !== null && starValue <= hoveredStar;

          return (
            <motion.div
              key={index}
              className="relative cursor-pointer"
              style={{ width: size, height: size }}
              onMouseEnter={() => interactive && setHoveredStar(starValue)}
              onMouseLeave={() => interactive && setHoveredStar(null)}
              onClick={() => interactive && onRatingChange?.(starValue)}
              whileHover={interactive ? { scale: 1.15, y: -2 } : {}}
              whileTap={interactive ? { scale: 0.95 } : {}}
              transition={{ duration: 0.2 }}
            >
              {/* Background Star (Empty) */}
              <HOLYStar 
                size={size} 
                color="#DADADA" 
                opacity={1} 
                strokeWidth={1.5} 
                className="absolute inset-0"
              />
              
              {/* Foreground Star (Filled) with Gradient Slide */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${fillPercentage}%`,
                  transition: { 
                    duration: interactive && isHovered ? 0.15 : 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
              >
                <motion.div
                  animate={isHovered ? {
                    filter: [
                      'drop-shadow(0 0 2px #9C887A)',
                      'drop-shadow(0 0 4px #9C887A)',
                      'drop-shadow(0 0 2px #9C887A)'
                    ]
                  } : {}}
                  transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                >
                  <HOLYStar 
                    size={size} 
                    color="#9C887A" 
                    opacity={1} 
                    strokeWidth={1.5} 
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {showCount && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#1A1A1A',
            opacity: 0.7
          }}
        >
          ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
        </motion.span>
      )}
    </div>
  );
}

// ========================================
// 4. INGREDIENT CARD REVEAL
// ========================================

interface IngredientCardProps {
  name: string;
  purpose: string;
  description?: string;
  icon?: React.ReactNode;
  color?: string;
}

export function IngredientCard({ 
  name, 
  purpose, 
  description,
  icon,
  color = '#AAB5B2'
}: IngredientCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative rounded-xl p-4 cursor-pointer"
      style={{
        backgroundColor: '#F9F6F0',
        border: `2px solid ${isHovered ? color : '#DADADA'}`,
        transition: 'border-color 0.3s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }}
    >
      {/* Soft Glow on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${color}20, transparent 70%)`,
              filter: 'blur(15px)',
              zIndex: 0
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 space-y-3">
        {/* Icon & Name */}
        <div className="flex items-start gap-3">
          {icon && (
            <motion.div
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: color }}
              animate={isHovered ? { rotate: [0, 5, -5, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
          )}
          <div className="flex-1">
            <h5 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              color: '#1A1A1A',
              marginBottom: '2px'
            }}>
              {name}
            </h5>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: '#1A1A1A',
              opacity: 0.7,
              fontStyle: 'italic'
            }}>
              {purpose}
            </p>
          </div>
        </div>

        {/* Description (Fade In on Hover) */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            height: isHovered ? 'auto' : 0
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{ overflow: 'hidden' }}
        >
          {description && (
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: '#1A1A1A',
              opacity: 0.8,
              lineHeight: '1.6',
              paddingTop: '8px',
              borderTop: `1px solid ${color}40`
            }}>
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
