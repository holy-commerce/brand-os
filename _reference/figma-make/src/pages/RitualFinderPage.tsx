import { useState, useRef, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { RitualSystemBadge } from '../components/core-system';
import { 
  HOLYSparkle, 
  HOLYDroplet, 
  HOLYFlower, 
  HOLYLeaf, 
  HOLYWave,
  HOLYMessage,
  HOLYArrowRight,
  HOLYArrowLeft,
  HOLYClose,
  HOLYCheck,
  HOLYCircle,
  HOLYHeart,
  HOLYGem
} from '../components/icons/HOLYIcons';
import yoniProfileImage from 'figma:asset/0ecc9d9bbd056216b0507babf7d9364c90783a1e.png';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ChevronRight, ChevronLeft, Sparkles, Star, Heart, ShoppingBag } from 'lucide-react';
import { ProgressiveRecommendation, calculateProgressiveRecommendation } from '../components/ui-blocks/RitualFinderProgressiveRec';
import { RitualFinderOptimized } from '../components/ui-blocks/RitualFinderOptimized';

// ========================================
// RITUAL FINDER ENGINE — FULL INTERACTIVE EXPERIENCE
// ========================================
// Complete end-to-end flows across all touchpoints with branching logic

type RitualSystem = 'aftercare' | 'renewal' | 'touch' | 'union' | 'vital';
type QuizStep = 'welcome' | 'goal' | 'deepening' | 'preference' | 'result';

interface RitualSystemData {
  id: RitualSystem;
  name: string;
  tagline: string;
  description: string;
  color: string;
  textColor: string;
  icon: React.ComponentType<any>;
  emoji: string;
  products: {
    name: string;
    price: number;
    image: string;
    purpose: string;
  }[];
}

interface QuizState {
  step: QuizStep;
  selectedGoal: RitualSystem | null;
  deepeningAnswer: string | null;
  preferenceAnswer: string | null;
  recommendedSystem: RitualSystem | null;
}

// ========================================
// DATA STRUCTURES
// ========================================

const ritualSystems: Record<RitualSystem, RitualSystemData> = {
  aftercare: {
    id: 'aftercare',
    name: 'Ritual Aftercare™',
    tagline: 'Clinical meets ceremonial',
    description: 'Healing, protection, and sacred recovery for post-intimacy restoration.',
    color: '#AAB5B2',
    textColor: '#1A1A1A',
    icon: HOLYDroplet,
    emoji: '💧',
    products: [
      {
        name: 'Restorative Body Oil',
        price: 64,
        image: 'https://images.unsplash.com/photo-1722933375700-e297a7996265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib2R5JTIwb2lsJTIwYm90dGxlfGVufDF8fHx8MTc2MzA5MzE3MXww&ixlib=rb-4.1.0&q=80&w=1080',
        purpose: 'Protect'
      },
      {
        name: 'Healing Ritual Salve',
        price: 48,
        image: 'https://images.unsplash.com/photo-1650994198355-c9d7c8bc2888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwaGVhbGluZyUyMGJhbG18ZW58MXx8fHwxNzYzMDkzMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        purpose: 'Treat'
      }
    ]
  },
  renewal: {
    id: 'renewal',
    name: 'Ritual Renewal™',
    tagline: 'Radiance restored',
    description: 'Luminous transformation through sacred botanicals that reveal radiant skin.',
    color: '#D9C4BB',
    textColor: '#1A1A1A',
    icon: HOLYFlower,
    emoji: '🌸',
    products: [
      {
        name: 'Radiant Rose Serum',
        price: 72,
        image: 'https://images.unsplash.com/photo-1679394270822-fb37412bb6ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwc2tpbmNhcmUlMjBzZXJ1bXxlbnwxfHx8fDE3NjMwOTMxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        purpose: 'Treat'
      },
      {
        name: 'Glow Ritual Mist',
        price: 42,
        image: 'https://images.unsplash.com/photo-1729101807924-3446ca9aa480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWNlJTIwbWlzdCUyMGJvdHRsZXxlbnwxfHx8fDE3NjMwOTMxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        purpose: 'Hydrate'
      }
    ]
  },
  touch: {
    id: 'touch',
    name: 'Ritual Touch™',
    tagline: 'Sensory awakening',
    description: 'Intimate wellness and pleasure-centered rituals that honor desires.',
    color: '#5E6458',
    textColor: '#FFFFFF',
    icon: HOLYLeaf,
    emoji: '🍃',
    products: [
      {
        name: 'Intimate Touch Oil',
        price: 58,
        image: 'https://images.unsplash.com/photo-1690197148040-8206be5cabc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRpbWF0ZSUyMHdlbGxuZXNzJTIwb2lsfGVufDF8fHx8MTc2MzA5MzE3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        purpose: 'Treat'
      },
      {
        name: 'Sensual Ritual Balm',
        price: 52,
        image: 'https://images.unsplash.com/photo-1650994198355-c9d7c8bc2888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwaGVhbGluZyUyMGJhbG18ZW58MXx8fHwxNzYzMDkzMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        purpose: 'Hydrate'
      }
    ]
  },
  union: {
    id: 'union',
    name: 'Ritual Union™',
    tagline: 'Sacred partnership',
    description: 'Shared intimacy rituals that strengthen bonds and deepen presence.',
    color: '#D7D0C5',
    textColor: '#1A1A1A',
    icon: HOLYWave,
    emoji: '🤝',
    products: [
      {
        name: 'Union Ritual Oil',
        price: 68,
        image: 'https://images.unsplash.com/photo-1722933375700-e297a7996265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib2R5JTIwb2lsJTIwYm90dGxlfGVufDF8fHx8MTc2MzA5MzE3MXww&ixlib=rb-4.1.0&q=80&w=1080',
        purpose: 'Treat'
      },
      {
        name: 'Connection Candle',
        price: 38,
        image: 'https://images.unsplash.com/photo-1661313562934-d902cb4ad0bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYW5kbGUlMjBtaW5pbWFsfGVufDF8fHx8MTc2MzA5MzE3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        purpose: 'Prep'
      }
    ]
  },
  vital: {
    id: 'vital',
    name: 'Ritual Vital™',
    tagline: 'Energy sustained',
    description: 'Longevity and daily wellness rituals that nourish from within.',
    color: '#9C887A',
    textColor: '#FFFFFF',
    icon: HOLYSparkle,
    emoji: '✨',
    products: [
      {
        name: 'Vital Energy Tonic',
        price: 54,
        image: 'https://images.unsplash.com/photo-1623870605211-13ff5216a701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHRvbmljJTIwYm90dGxlfGVufDF8fHx8MTc2MzA5MzE3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        purpose: 'Treat'
      },
      {
        name: 'Longevity Body Oil',
        price: 62,
        image: 'https://images.unsplash.com/photo-1722933375700-e297a7996265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib2R5JTIwb2lsJTIwYm90dGxlfGVufDF8fHx8MTc2MzA5MzE3MXww&ixlib=rb-4.1.0&q=80&w=1080',
        purpose: 'Hydrate'
      }
    ]
  }
};

const goalOptions = [
  { id: 'aftercare' as RitualSystem, title: 'Healing & Recovery', description: 'Post-intimacy restoration', emoji: '💧' },
  { id: 'renewal' as RitualSystem, title: 'Glow & Revive', description: 'Radiant transformation', emoji: '🌸' },
  { id: 'touch' as RitualSystem, title: 'Touch & Sensation', description: 'Intimate wellness', emoji: '🍃' },
  { id: 'union' as RitualSystem, title: 'Intimacy & Connection', description: 'Shared partnership rituals', emoji: '🤝' },
  { id: 'vital' as RitualSystem, title: 'Longevity & Vitality', description: 'Sustained daily wellness', emoji: '✨' }
];

const deepeningQuestions: Record<RitualSystem, { question: string; emoji: string; options: { value: string; label: string; emoji: string }[] }> = {
  aftercare: {
    question: 'What type of recovery resonates?',
    emoji: '💧',
    options: [
      { value: 'fresh', label: 'Fresh piercing care', emoji: '✨' },
      { value: 'post', label: 'Post-intimacy restoration', emoji: '💫' },
      { value: 'healing', label: 'Sensitivity healing', emoji: '🌿' },
      { value: 'daily', label: 'Daily protection', emoji: '🛡️' }
    ]
  },
  renewal: {
    question: 'What transformation do you seek?',
    emoji: '🌸',
    options: [
      { value: 'dull', label: 'Brighten dullness', emoji: '✨' },
      { value: 'sensitive', label: 'Soothe sensitivity', emoji: '🌿' },
      { value: 'aging', label: 'Address aging', emoji: '⏳' },
      { value: 'overall', label: 'Overall radiance', emoji: '💫' }
    ]
  },
  touch: {
    question: 'What aspect of touch calls you?',
    emoji: '🍃',
    options: [
      { value: 'pleasure', label: 'Heightened pleasure', emoji: '✨' },
      { value: 'comfort', label: 'Intimate comfort', emoji: '🌙' },
      { value: 'awakening', label: 'Sensory awakening', emoji: '💫' },
      { value: 'wellness', label: 'Daily intimate wellness', emoji: '🌿' }
    ]
  },
  union: {
    question: 'What partnership intention?',
    emoji: '🤝',
    options: [
      { value: 'new', label: 'New relationship', emoji: '✨' },
      { value: 'deepen', label: 'Deepen existing bond', emoji: '💫' },
      { value: 'reconnect', label: 'Reconnect', emoji: '🌙' },
      { value: 'celebrate', label: 'Celebrate partnership', emoji: '🎉' }
    ]
  },
  vital: {
    question: 'What vitality goal matters most?',
    emoji: '✨',
    options: [
      { value: 'energy', label: 'Daily energy', emoji: '⚡' },
      { value: 'longevity', label: 'Longevity focus', emoji: '🌿' },
      { value: 'balance', label: 'Hormonal balance', emoji: '⚖️' },
      { value: 'overall', label: 'Overall wellness', emoji: '💫' }
    ]
  }
};

const preferenceQuestion = {
  question: 'How do you prefer to ritual?',
  emoji: '🌙',
  options: [
    { value: 'morning', label: 'Morning ritual', emoji: '☀️' },
    { value: 'evening', label: 'Evening ritual', emoji: '🌙' },
    { value: 'both', label: 'Morning & evening', emoji: '🌓' },
    { value: 'as-needed', label: 'As needed', emoji: '✨' }
  ]
};

// ========================================
// SHARED COMPONENTS
// ========================================

// Sacred Button with Glow Effect (Motion/States) — v2.0
// Implements CTA Glow "Sacred Breath" animation with proper text wrapping
function SacredButton({ 
  children, 
  onClick, 
  disabled = false, 
  variant = 'primary',
  className = '',
  ...props 
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'icon';
  className?: string;
  [key: string]: any;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const baseStyles = {
    position: 'relative' as const,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    border: 'none',
    outline: 'none',
    whiteSpace: 'normal' as const, // Enable text wrapping
    textAlign: 'center' as const,
    lineHeight: '1.4', // Comfortable line height for wrapping
  };
  
  const variantStyles = {
    primary: {
      backgroundColor: disabled ? '#DADADA' : '#1A1A1A',
      color: '#F9F6F0',
      padding: '16px 40px',
      borderRadius: '8px',
      fontSize: '15px',
      fontWeight: '600',
      fontFamily: 'Inter, sans-serif',
      minHeight: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      opacity: disabled ? 0.5 : 1,
      flexWrap: 'wrap' as const, // Allow content to wrap
    },
    secondary: {
      backgroundColor: 'transparent',
      color: '#1A1A1A',
      padding: '14px 32px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      fontFamily: 'Inter, sans-serif',
      minHeight: '48px',
      border: '2px solid #DADADA',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      flexWrap: 'wrap' as const,
    },
    icon: {
      backgroundColor: 'transparent',
      color: '#1A1A1A',
      padding: '12px',
      borderRadius: '8px',
      minHeight: '44px',
      minWidth: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  };
  
  const showGlow = (variant === 'primary' && !disabled && (isHovered || isFocused));
  
  return (
    <motion.button
      style={{ ...baseStyles, ...variantStyles[variant] }}
      className={className}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => !disabled && setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {/* Sacred Breath Glow — Triple Layer Aura (from Motion/States spec) */}
      {showGlow && (
        <>
          {/* Inner Aura — Limestone Oat #D7D0C5 */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              opacity: [0, 0.9, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            style={{
              position: 'absolute',
              inset: '-2px',
              borderRadius: '10px',
              border: '2px solid #D7D0C5',
              boxShadow: '0 0 32px rgba(215, 208, 197, 0.9), 0 0 64px rgba(215, 208, 197, 0.6)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          {/* Middle Aura — Veil Clay #D9C4BB */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: 0.2,
            }}
            style={{
              position: 'absolute',
              inset: '-6px',
              borderRadius: '14px',
              boxShadow: '0 0 48px rgba(217, 196, 187, 0.7), 0 0 96px rgba(217, 196, 187, 0.5)',
              pointerEvents: 'none',
              zIndex: -1,
            }}
          />
          {/* Outer Aura — Smoky Umber #9C887A */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: 0.4,
            }}
            style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '18px',
              boxShadow: '0 0 72px rgba(156, 136, 122, 0.5), 0 0 144px rgba(156, 136, 122, 0.3)',
              pointerEvents: 'none',
              zIndex: -2,
            }}
          />
        </>
      )}
      
      {/* Button Content — z-index ensures text stays on top */}
      <span style={{ 
        position: 'relative', 
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        flexWrap: 'wrap',
      }}>
        {children}
      </span>
    </motion.button>
  );
}

function YONIAvatar({ size = 40 }: { size?: number }) {
  return (
    <div 
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '2px solid #AAB5B2',
        flexShrink: 0
      }}
    >
      <img src={yoniProfileImage} alt="YONI™" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
}

function YONIMessage({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex gap-3 items-start"
    >
      <YONIAvatar size={32} />
      <div 
        className="p-4 rounded-2xl rounded-tl-sm flex-1"
        style={{ backgroundColor: '#AAB5B2', maxWidth: '320px' }}
      >
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
          {children}
        </p>
      </div>
    </motion.div>
  );
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  const percentage = (current / total) * 100;
  
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Step {current} of {total}
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
          {Math.round(percentage)}% Complete
        </p>
      </div>
      <div className="h-1.5 rounded-full" style={{ backgroundColor: '#DADADA' }}>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.4 }}
          className="h-full rounded-full"
          style={{ backgroundColor: '#9C887A' }}
        />
      </div>
    </div>
  );
}

function ResultCard({ system, onExplore, onAddToCart }: { system: RitualSystem; onExplore?: () => void; onAddToCart?: () => void }) {
  const data = ritualSystems[system];
  const Icon = data.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-2xl overflow-hidden"
      style={{ backgroundColor: data.color, border: `2px solid ${data.color}` }}
    >
      <div className="p-6 space-y-4">
        {/* System Header */}
        <div className="flex items-start gap-4">
          <div 
            className="rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ 
              width: '64px', 
              height: '64px', 
              backgroundColor: data.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)'
            }}
          >
            <Icon size={32} color={data.textColor} opacity={1} strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: data.textColor, marginBottom: '4px' }}>
              {data.name}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: data.textColor, opacity: 0.8, fontStyle: 'italic' }}>
              {data.tagline}
            </p>
          </div>
        </div>

        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: data.textColor, lineHeight: '160%', opacity: 0.9 }}>
          {data.description}
        </p>

        {/* Products */}
        <div className="space-y-3">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: data.textColor, opacity: 0.7, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Recommended Products
          </p>
          <div className="grid gap-3">
            {data.products.map((product, idx) => (
              <div 
                key={idx}
                className="rounded-xl p-4 flex items-center gap-4"
                style={{ backgroundColor: data.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)' }}
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: data.textColor, fontWeight: '600', marginBottom: '2px' }}>
                    {product.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge 
                      style={{ 
                        backgroundColor: data.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
                        color: data.textColor,
                        fontSize: '10px',
                        padding: '2px 8px'
                      }}
                    >
                      {product.purpose}
                    </Badge>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: data.textColor, fontWeight: '600' }}>
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          {onExplore && (
            <motion.button
              onClick={onExplore}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
              style={{
                backgroundColor: 'transparent',
                borderColor: data.textColor,
                color: data.textColor,
                border: `2px solid ${data.textColor}`,
                borderRadius: '8px',
                padding: '14px 24px',
                fontSize: '14px',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minHeight: '48px',
                whiteSpace: 'normal',
                lineHeight: '1.4',
                textAlign: 'center'
              }}
            >
              Explore Ritual
            </motion.button>
          )}
          {onAddToCart && (
            <motion.button
              onClick={onAddToCart}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
              style={{
                backgroundColor: data.textColor,
                color: data.color,
                border: 'none',
                borderRadius: '8px',
                padding: '14px 24px',
                fontSize: '14px',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minHeight: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                whiteSpace: 'normal',
                lineHeight: '1.4',
                flexWrap: 'wrap'
              }}
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ========================================
// 1. CHAT MODAL (DESKTOP WEB)
// ========================================

function ChatModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<QuizState>({
    step: 'welcome',
    selectedGoal: null,
    deepeningAnswer: null,
    preferenceAnswer: null,
    recommendedSystem: null
  });
  const [showProgressiveRec, setShowProgressiveRec] = useState(false);

  const reset = () => {
    setState({
      step: 'welcome',
      selectedGoal: null,
      deepeningAnswer: null,
      preferenceAnswer: null,
      recommendedSystem: null
    });
    setShowProgressiveRec(false);
  };

  const handleStart = () => {
    setState(prev => ({ ...prev, step: 'goal' }));
  };

  // Auto-advance on goal selection
  const handleGoalSelect = (goal: RitualSystem) => {
    setState(prev => ({ ...prev, selectedGoal: goal }));
    setShowProgressiveRec(true);
    setTimeout(() => {
      setState(prev => ({ ...prev, step: 'deepening' }));
      setShowProgressiveRec(false);
    }, 2000);
  };

  const handleGoalContinue = () => {
    if (state.selectedGoal) {
      setState(prev => ({ ...prev, step: 'deepening' }));
    }
  };

  // Auto-advance on deepening selection
  const handleDeepeningSelect = (value: string) => {
    setState(prev => ({ ...prev, deepeningAnswer: value }));
    setShowProgressiveRec(true);
    setTimeout(() => {
      setState(prev => ({ ...prev, step: 'preference' }));
      setShowProgressiveRec(false);
    }, 2000);
  };

  const handleDeepeningContinue = () => {
    if (state.deepeningAnswer) {
      setState(prev => ({ ...prev, step: 'preference' }));
    }
  };

  // Auto-advance on preference selection
  const handlePreferenceSelect = (value: string) => {
    setState(prev => ({ ...prev, preferenceAnswer: value }));
    setShowProgressiveRec(true);
    setTimeout(() => {
      setState(prev => ({ ...prev, step: 'result', recommendedSystem: state.selectedGoal }));
      setShowProgressiveRec(false);
    }, 2000);
  };

  const handlePreferenceContinue = () => {
    if (state.preferenceAnswer && state.selectedGoal) {
      setState(prev => ({ ...prev, step: 'result', recommendedSystem: state.selectedGoal }));
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden" style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA', minHeight: '700px' }}>
      {/* Simulated Website Content */}
      <div className="p-8 space-y-6">
        <div className="space-y-2">
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A' }}>
            Discover Your Ritual
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
            Sacred wellness rituals for every intention. Let YONI™ guide you to your perfect match.
          </p>
        </div>

        {/* Product Grid Placeholder */}
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square rounded-xl" style={{ backgroundColor: '#DADADA' }} />
          ))}
        </div>
      </div>

      {/* Chat Bubble Trigger */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="absolute bottom-6 right-6 rounded-full flex items-center justify-center shadow-lg"
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: '#1A1A1A',
              border: '2px solid #F9F6F0',
              cursor: 'pointer',
              zIndex: 50
            }}
          >
            <MessageCircle size={28} color="#F9F6F0" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            className="absolute bottom-6 right-6 rounded-2xl shadow-2xl overflow-hidden"
            style={{
              width: '400px',
              height: '600px',
              backgroundColor: '#FFFFFF',
              border: '2px solid #DADADA',
              zIndex: 50,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between" style={{ borderBottom: '1px solid #DADADA', flexShrink: 0 }}>
              <div className="flex items-center gap-3">
                <YONIAvatar size={32} />
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600', color: '#1A1A1A' }}>
                    YONI™ Ritual Finder
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                    AI-powered ritual guide
                  </p>
                </div>
              </div>
              <button 
                onClick={() => { setIsOpen(false); reset(); }} 
                style={{ cursor: 'pointer', background: 'none', border: 'none' }}
              >
                <X size={20} color="#1A1A1A" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <AnimatePresence mode="wait">
                {/* Welcome */}
                {state.step === 'welcome' && (
                  <motion.div
                    key="welcome"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <YONIMessage>
                      Hi — I'm <strong>YONI™</strong>, your sacred ritual guide. 🌙
                    </YONIMessage>
                    <YONIMessage delay={0.3}>
                      Let's discover which ritual aligns with your intention. This takes less than 2 minutes. ✨
                    </YONIMessage>
                  </motion.div>
                )}

                {/* Goal Selection */}
                {state.step === 'goal' && (
                  <motion.div
                    key="goal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <YONIMessage>
                      What intention brings you here today? 💫
                    </YONIMessage>
                    
                    <div className="space-y-2 pl-11">
                      {goalOptions.map((goal) => (
                        <motion.button
                          key={goal.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleGoalSelect(goal.id)}
                          className="w-full p-3 rounded-xl text-left"
                          style={{
                            backgroundColor: state.selectedGoal === goal.id ? '#1A1A1A' : '#F9F6F0',
                            color: state.selectedGoal === goal.id ? '#F9F6F0' : '#1A1A1A',
                            border: state.selectedGoal === goal.id ? 'none' : '1px solid #DADADA',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            whiteSpace: 'normal',
                            lineHeight: '1.4'
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span style={{ fontSize: '18px', flexShrink: 0 }}>{goal.emoji}</span>
                            <div className="flex-1">
                              <p style={{ 
                                fontFamily: 'Inter, sans-serif', 
                                fontSize: '13px', 
                                fontWeight: '600',
                                whiteSpace: 'normal',
                                lineHeight: '1.4'
                              }}>
                                {goal.title}
                              </p>
                              <p style={{ 
                                fontFamily: 'Inter, sans-serif', 
                                fontSize: '11px', 
                                opacity: 0.7, 
                                marginTop: '2px',
                                whiteSpace: 'normal',
                                lineHeight: '1.4'
                              }}>
                                {goal.description}
                              </p>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    {/* Progressive Recommendation - Goal */}
                    {showProgressiveRec && state.selectedGoal && (
                      <div className="pl-11">
                        <ProgressiveRecommendation
                          recommendation={calculateProgressiveRecommendation(state.selectedGoal, null, null)!}
                          layout="above"
                          showCTA={false}
                        />
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Deepening Question */}
                {state.step === 'deepening' && state.selectedGoal && (
                  <motion.div
                    key="deepening"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <YONIMessage>
                      {deepeningQuestions[state.selectedGoal].question} {deepeningQuestions[state.selectedGoal].emoji}
                    </YONIMessage>
                    
                    <div className="space-y-2 pl-11">
                      {deepeningQuestions[state.selectedGoal].options.map((option) => (
                        <motion.button
                          key={option.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleDeepeningSelect(option.value)}
                          className="w-full p-3 rounded-xl text-left"
                          style={{
                            backgroundColor: state.deepeningAnswer === option.value ? '#1A1A1A' : '#F9F6F0',
                            color: state.deepeningAnswer === option.value ? '#F9F6F0' : '#1A1A1A',
                            border: state.deepeningAnswer === option.value ? 'none' : '1px solid #DADADA',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            whiteSpace: 'normal',
                            lineHeight: '1.4'
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span style={{ fontSize: '16px', flexShrink: 0 }}>{option.emoji}</span>
                            <p style={{ 
                              fontFamily: 'Inter, sans-serif', 
                              fontSize: '13px', 
                              fontWeight: '600',
                              whiteSpace: 'normal',
                              lineHeight: '1.4'
                            }}>
                              {option.label}
                            </p>
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    {/* Progressive Recommendation - Deepening */}
                    {showProgressiveRec && state.selectedGoal && state.deepeningAnswer && (
                      <div className="pl-11">
                        <ProgressiveRecommendation
                          recommendation={calculateProgressiveRecommendation(state.selectedGoal, state.deepeningAnswer, null)!}
                          layout="above"
                          showCTA={false}
                        />
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Preference Question */}
                {state.step === 'preference' && (
                  <motion.div
                    key="preference"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <YONIMessage>
                      {preferenceQuestion.question} {preferenceQuestion.emoji}
                    </YONIMessage>
                    
                    <div className="space-y-2 pl-11">
                      {preferenceQuestion.options.map((option) => (
                        <motion.button
                          key={option.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handlePreferenceSelect(option.value)}
                          className="w-full p-3 rounded-xl text-left"
                          style={{
                            backgroundColor: state.preferenceAnswer === option.value ? '#1A1A1A' : '#F9F6F0',
                            color: state.preferenceAnswer === option.value ? '#F9F6F0' : '#1A1A1A',
                            border: state.preferenceAnswer === option.value ? 'none' : '1px solid #DADADA',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            whiteSpace: 'normal',
                            lineHeight: '1.4'
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span style={{ fontSize: '16px', flexShrink: 0 }}>{option.emoji}</span>
                            <p style={{ 
                              fontFamily: 'Inter, sans-serif', 
                              fontSize: '13px', 
                              fontWeight: '600',
                              whiteSpace: 'normal',
                              lineHeight: '1.4'
                            }}>
                              {option.label}
                            </p>
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    {/* Progressive Recommendation - Preference */}
                    {showProgressiveRec && state.selectedGoal && state.deepeningAnswer && state.preferenceAnswer && (
                      <div className="pl-11">
                        <ProgressiveRecommendation
                          recommendation={calculateProgressiveRecommendation(state.selectedGoal, state.deepeningAnswer, state.preferenceAnswer)!}
                          layout="above"
                          showCTA={false}
                        />
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Result */}
                {state.step === 'result' && state.recommendedSystem && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <YONIMessage>
                      Perfect! Based on your intention, I recommend <strong>{ritualSystems[state.recommendedSystem].name}</strong>. ✨
                    </YONIMessage>
                    
                    <div className="pl-11">
                      <ResultCard 
                        system={state.recommendedSystem}
                        onAddToCart={() => console.log('Add to cart')}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="p-4" style={{ borderTop: '1px solid #DADADA', flexShrink: 0 }}>
              {state.step === 'welcome' && (
                <SacredButton
                  onClick={handleStart}
                  className="w-full"
                  variant="primary"
                >
                  <Sparkles className="w-4 h-4" />
                  Begin Ritual Finder
                </SacredButton>
              )}
              
              {state.step === 'goal' && (
                <SacredButton
                  onClick={handleGoalContinue}
                  disabled={!state.selectedGoal}
                  className="w-full"
                  variant="primary"
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </SacredButton>
              )}
              
              {state.step === 'deepening' && (
                <div className="flex gap-2">
                  <SacredButton
                    onClick={() => setState(prev => ({ ...prev, step: 'goal' }))}
                    variant="icon"
                    style={{ flex: '0 0 60px' }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </SacredButton>
                  <SacredButton
                    onClick={handleDeepeningContinue}
                    disabled={!state.deepeningAnswer}
                    className="flex-1"
                    variant="primary"
                  >
                    Continue
                    <ChevronRight className="w-4 h-4" />
                  </SacredButton>
                </div>
              )}
              
              {state.step === 'preference' && (
                <div className="flex gap-2">
                  <SacredButton
                    onClick={() => setState(prev => ({ ...prev, step: 'deepening' }))}
                    variant="icon"
                    style={{ flex: '0 0 60px' }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </SacredButton>
                  <SacredButton
                    onClick={handlePreferenceContinue}
                    disabled={!state.preferenceAnswer}
                    className="flex-1"
                    variant="primary"
                  >
                    <Sparkles className="w-4 h-4" />
                    Discover My Ritual
                  </SacredButton>
                </div>
              )}
              
              {state.step === 'result' && (
                <SacredButton
                  onClick={reset}
                  variant="secondary"
                  className="w-full"
                >
                  Start Over
                </SacredButton>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ========================================
// 2. EMBEDDED MODULE (PDP/PLP BLOCK)
// ========================================

function EmbeddedModuleExample() {
  const [state, setState] = useState<QuizState>({
    step: 'welcome',
    selectedGoal: null,
    deepeningAnswer: null,
    preferenceAnswer: null,
    recommendedSystem: null
  });
  const [showProgressiveRec, setShowProgressiveRec] = useState(false);

  const reset = () => {
    setState({
      step: 'welcome',
      selectedGoal: null,
      deepeningAnswer: null,
      preferenceAnswer: null,
      recommendedSystem: null
    });
    setShowProgressiveRec(false);
  };

  const getStepNumber = () => {
    switch (state.step) {
      case 'welcome': return 0;
      case 'goal': return 1;
      case 'deepening': return 2;
      case 'preference': return 3;
      case 'result': return 4;
      default: return 0;
    }
  };

  // Auto-advance: when goal is selected, show rec and auto-progress to deepening
  useEffect(() => {
    if (state.selectedGoal && state.step === 'goal') {
      setShowProgressiveRec(true);
      const timer = setTimeout(() => {
        setState(prev => ({ ...prev, step: 'deepening' }));
        setShowProgressiveRec(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.selectedGoal, state.step]);

  // Auto-advance: when deepening answer is selected, show rec and auto-progress to preference
  useEffect(() => {
    if (state.deepeningAnswer && state.step === 'deepening') {
      setShowProgressiveRec(true);
      const timer = setTimeout(() => {
        setState(prev => ({ ...prev, step: 'preference' }));
        setShowProgressiveRec(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.deepeningAnswer, state.step]);

  // Auto-advance: when preference answer is selected, show rec and auto-progress to result
  useEffect(() => {
    if (state.preferenceAnswer && state.step === 'preference') {
      setShowProgressiveRec(true);
      const timer = setTimeout(() => {
        setState(prev => ({ ...prev, step: 'result', recommendedSystem: state.selectedGoal }));
        setShowProgressiveRec(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.preferenceAnswer, state.step, state.selectedGoal]);

  return (
    <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
      {/* Module Header */}
      <div className="p-6" style={{ backgroundColor: '#F9F6F0', borderBottom: '2px solid #DADADA' }}>
        <div className="flex items-start gap-4">
          <YONIAvatar size={48} />
          <div className="flex-1">
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', marginBottom: '4px' }}>
              Not sure which ritual is right for you?
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Let YONI™ guide you to your perfect match in 2 minutes.
            </p>
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {/* Progress Bar (except welcome and result) */}
          {state.step !== 'welcome' && state.step !== 'result' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6"
            >
              <ProgressBar current={getStepNumber()} total={4} />
            </motion.div>
          )}

          {/* Welcome */}
          {state.step === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-8 space-y-6"
            >
              <div className="space-y-4">
                <div className="flex justify-center gap-4">
                  <Star className="w-6 h-6" style={{ color: '#9C887A' }} />
                  <Heart className="w-6 h-6" style={{ color: '#D9C4BB' }} />
                  <HOLYSparkle size={24} color="#AAB5B2" opacity={1} strokeWidth={1.5} />
                </div>
                <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A' }}>
                  Discover Your Sacred Ritual
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', maxWidth: '500px', margin: '0 auto' }}>
                  Answer a few questions and let YONI™ match you with the ritual system that aligns with your intention.
                </p>
              </div>
              <div className="flex justify-center">
                <SacredButton
                  onClick={() => setState(prev => ({ ...prev, step: 'goal' }))}
                  className="px-12"
                  variant="primary"
                >
                  <Sparkles className="w-5 h-5" />
                  Begin Ritual Finder
                </SacredButton>
              </div>
            </motion.div>
          )}

          {/* Goal Selection */}
          {state.step === 'goal' && (
            <motion.div
              key="goal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div>
                <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', marginBottom: '8px' }}>
                  What intention brings you here today? 🌙
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                  Choose the ritual goal that resonates most with you.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {goalOptions.map((goal) => {
                  const system = ritualSystems[goal.id];
                  return (
                    <motion.button
                      key={goal.id}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setState(prev => ({ ...prev, selectedGoal: goal.id }))}
                      className="p-4 rounded-xl text-left"
                      style={{
                        backgroundColor: state.selectedGoal === goal.id ? system.color : '#F9F6F0',
                        color: state.selectedGoal === goal.id ? system.textColor : '#1A1A1A',
                        border: state.selectedGoal === goal.id ? `2px solid ${system.color}` : '2px solid #DADADA',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        whiteSpace: 'normal',
                        lineHeight: '1.4'
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span style={{ fontSize: '28px', lineHeight: '1', flexShrink: 0 }}>{goal.emoji}</span>
                        <div className="flex-1">
                          <p style={{ 
                            fontFamily: 'Inter, sans-serif', 
                            fontSize: '14px', 
                            fontWeight: '600', 
                            marginBottom: '4px',
                            whiteSpace: 'normal',
                            lineHeight: '1.4'
                          }}>
                            {goal.title}
                          </p>
                          <p style={{ 
                            fontFamily: 'Inter, sans-serif', 
                            fontSize: '12px', 
                            opacity: 0.8,
                            whiteSpace: 'normal',
                            lineHeight: '1.4'
                          }}>
                            {goal.description}
                          </p>
                        </div>
                        {state.selectedGoal === goal.id && (
                          <HOLYCheck size={20} color={system.textColor} opacity={1} strokeWidth={2} />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Progressive Recommendation */}
              {showProgressiveRec && state.selectedGoal && (
                <div className="mt-6">
                  <ProgressiveRecommendation
                    recommendation={calculateProgressiveRecommendation(state.selectedGoal, null, null)!}
                    layout="inline"
                    showCTA={false}
                  />
                </div>
              )}

              <div className="flex gap-3">
                <SacredButton
                  onClick={() => setState(prev => ({ ...prev, step: 'welcome', selectedGoal: null }))
                  }
                  variant="secondary"
                  className="flex-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </SacredButton>
              </div>
            </motion.div>
          )}

          {/* Deepening Question */}
          {state.step === 'deepening' && state.selectedGoal && (
            <motion.div
              key="deepening"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div>
                <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', marginBottom: '8px' }}>
                  {deepeningQuestions[state.selectedGoal].question} {deepeningQuestions[state.selectedGoal].emoji}
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                  This helps us tailor your ritual recommendation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {deepeningQuestions[state.selectedGoal].options.map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setState(prev => ({ ...prev, deepeningAnswer: option.value }))}
                    className="p-4 rounded-xl text-left"
                    style={{
                      backgroundColor: state.deepeningAnswer === option.value ? '#1A1A1A' : '#F9F6F0',
                      color: state.deepeningAnswer === option.value ? '#F9F6F0' : '#1A1A1A',
                      border: state.deepeningAnswer === option.value ? '2px solid #1A1A1A' : '2px solid #DADADA',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'normal',
                      lineHeight: '1.4'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span style={{ fontSize: '24px', flexShrink: 0 }}>{option.emoji}</span>
                      <p style={{ 
                        fontFamily: 'Inter, sans-serif', 
                        fontSize: '14px', 
                        fontWeight: '600',
                        whiteSpace: 'normal',
                        lineHeight: '1.4'
                      }}>
                        {option.label}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Progressive Recommendation */}
              {showProgressiveRec && state.selectedGoal && state.deepeningAnswer && (
                <div className="mt-6">
                  <ProgressiveRecommendation
                    recommendation={calculateProgressiveRecommendation(state.selectedGoal, state.deepeningAnswer, null)!}
                    layout="inline"
                    showCTA={false}
                  />
                </div>
              )}

              <div className="flex gap-3">
                <SacredButton
                  onClick={() => setState(prev => ({ ...prev, step: 'goal', deepeningAnswer: null }))}
                  variant="secondary"
                  className="flex-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </SacredButton>
              </div>
            </motion.div>
          )}

          {/* Preference Question */}
          {state.step === 'preference' && (
            <motion.div
              key="preference"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div>
                <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', marginBottom: '8px' }}>
                  {preferenceQuestion.question} {preferenceQuestion.emoji}
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                  Let us know when you prefer to practice your rituals.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {preferenceQuestion.options.map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setState(prev => ({ ...prev, preferenceAnswer: option.value }))}
                    className="p-4 rounded-xl text-left"
                    style={{
                      backgroundColor: state.preferenceAnswer === option.value ? '#1A1A1A' : '#F9F6F0',
                      color: state.preferenceAnswer === option.value ? '#F9F6F0' : '#1A1A1A',
                      border: state.preferenceAnswer === option.value ? '2px solid #1A1A1A' : '2px solid #DADADA',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'normal',
                      lineHeight: '1.4'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span style={{ fontSize: '24px', flexShrink: 0 }}>{option.emoji}</span>
                      <p style={{ 
                        fontFamily: 'Inter, sans-serif', 
                        fontSize: '14px', 
                        fontWeight: '600',
                        whiteSpace: 'normal',
                        lineHeight: '1.4'
                      }}>
                        {option.label}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Progressive Recommendation */}
              {showProgressiveRec && state.selectedGoal && state.deepeningAnswer && state.preferenceAnswer && (
                <div className="mt-6">
                  <ProgressiveRecommendation
                    recommendation={calculateProgressiveRecommendation(state.selectedGoal, state.deepeningAnswer, state.preferenceAnswer)!}
                    layout="inline"
                    showCTA={false}
                  />
                </div>
              )}

              <div className="flex gap-3">
                <SacredButton
                  onClick={() => setState(prev => ({ ...prev, step: 'deepening', preferenceAnswer: null }))}
                  variant="secondary"
                  className="flex-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </SacredButton>
              </div>
            </motion.div>
          )}

          {/* Result */}
          {state.step === 'result' && state.recommendedSystem && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A' }}>
                  Your Perfect Match ✨
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                  Based on your intentions, we recommend:
                </p>
              </div>

              <ResultCard 
                system={state.recommendedSystem}
                onExplore={() => console.log('Explore')}
                onAddToCart={() => console.log('Add to cart')}
              />

              <div className="text-center">
                <SacredButton
                  onClick={reset}
                  variant="secondary"
                >
                  Start Over
                </SacredButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ========================================
// 3. FULL-SCREEN MOBILE EXPERIENCE
// ========================================

function MobileFullScreenExample() {
  const [state, setState] = useState<QuizState>({
    step: 'welcome',
    selectedGoal: null,
    deepeningAnswer: null,
    preferenceAnswer: null,
    recommendedSystem: null
  });

  const reset = () => {
    setState({
      step: 'welcome',
      selectedGoal: null,
      deepeningAnswer: null,
      preferenceAnswer: null,
      recommendedSystem: null
    });
  };

  const getStepNumber = () => {
    switch (state.step) {
      case 'welcome': return 0;
      case 'goal': return 1;
      case 'deepening': return 2;
      case 'preference': return 3;
      case 'result': return 4;
      default: return 0;
    }
  };

  return (
    <div className="relative h-[700px] rounded-2xl overflow-hidden" style={{ maxWidth: '375px', margin: '0 auto', border: '2px solid #DADADA' }}>
      <div className="h-full flex flex-col" style={{ backgroundColor: '#F9F6F0' }}>
        {/* Mobile Header */}
        {state.step !== 'welcome' && (
          <div className="p-4 flex items-center justify-between" style={{ borderBottom: '1px solid #DADADA', backgroundColor: '#FFFFFF' }}>
            <button 
              onClick={() => {
                if (state.step === 'goal') setState(prev => ({ ...prev, step: 'welcome' }));
                else if (state.step === 'deepening') setState(prev => ({ ...prev, step: 'goal' }));
                else if (state.step === 'preference') setState(prev => ({ ...prev, step: 'deepening' }));
                else if (state.step === 'result') reset();
              }}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <HOLYArrowLeft size={24} color="#1A1A1A" opacity={1} strokeWidth={1.5} />
            </button>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600', color: '#1A1A1A' }}>
              Ritual Finder
            </p>
            <button 
              onClick={reset}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <HOLYClose size={24} color="#1A1A1A" opacity={1} strokeWidth={1.5} />
            </button>
          </div>
        )}

        {/* Progress Bar */}
        {state.step !== 'welcome' && state.step !== 'result' && (
          <div className="p-4 pt-2" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #DADADA' }}>
            <div className="h-1 rounded-full" style={{ backgroundColor: '#DADADA' }}>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(getStepNumber() / 4) * 100}%` }}
                transition={{ duration: 0.4 }}
                className="h-full rounded-full"
                style={{ backgroundColor: '#9C887A' }}
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <AnimatePresence mode="wait">
            {/* Welcome */}
            {state.step === 'welcome' && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col justify-center space-y-6"
              >
                <div className="space-y-4 text-center">
                  <div className="flex justify-center">
                    <YONIAvatar size={64} />
                  </div>
                  <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%' }}>
                    Discover Your Sacred Ritual
                  </h2>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                    Let YONI™ guide you to the ritual that aligns with your intention. Takes less than 2 minutes.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center space-y-2">
                    <div 
                      className="w-12 h-12 mx-auto rounded-full flex items-center justify-center" 
                      style={{ backgroundColor: '#FFFFFF' }}
                    >
                      <Star className="w-5 h-5" style={{ color: '#9C887A' }} />
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.7 }}>
                      Personalized
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <div 
                      className="w-12 h-12 mx-auto rounded-full flex items-center justify-center" 
                      style={{ backgroundColor: '#FFFFFF' }}
                    >
                      <Heart className="w-5 h-5" style={{ color: '#D9C4BB' }} />
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.7 }}>
                      Sacred
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <div 
                      className="w-12 h-12 mx-auto rounded-full flex items-center justify-center" 
                      style={{ backgroundColor: '#FFFFFF' }}
                    >
                      <HOLYSparkle size={20} color="#AAB5B2" opacity={1} strokeWidth={1.5} />
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.7 }}>
                      2 min quiz
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800"
                    alt="Sacred ritual space"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </motion.div>
            )}

            {/* Goal Selection */}
            {state.step === 'goal' && (
              <motion.div
                key="goal"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex gap-3">
                  <YONIAvatar />
                  <div className="p-4 rounded-2xl rounded-tl-sm flex-1" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                      What intention brings you here today? 🌙
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {goalOptions.map((goal) => {
                    const system = ritualSystems[goal.id];
                    return (
                      <motion.button
                        key={goal.id}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setState(prev => ({ ...prev, selectedGoal: goal.id }))}
                        className="w-full p-4 rounded-xl text-left"
                        style={{
                          backgroundColor: state.selectedGoal === goal.id ? system.color : '#FFFFFF',
                          color: state.selectedGoal === goal.id ? system.textColor : '#1A1A1A',
                          border: state.selectedGoal === goal.id ? `2px solid ${system.color}` : '2px solid #DADADA',
                          cursor: 'pointer',
                          minHeight: '80px',
                          transition: 'all 0.3s ease',
                          whiteSpace: 'normal',
                          lineHeight: '1.4'
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span style={{ fontSize: '32px', lineHeight: '1', flexShrink: 0 }}>{goal.emoji}</span>
                          <div className="flex-1">
                            <p style={{ 
                              fontFamily: 'Inter, sans-serif', 
                              fontSize: '15px', 
                              fontWeight: '600', 
                              marginBottom: '4px',
                              whiteSpace: 'normal',
                              lineHeight: '1.4'
                            }}>
                              {goal.title}
                            </p>
                            <p style={{ 
                              fontFamily: 'Inter, sans-serif', 
                              fontSize: '13px', 
                              opacity: 0.8,
                              whiteSpace: 'normal',
                              lineHeight: '1.4'
                            }}>
                              {goal.description}
                            </p>
                          </div>
                          {state.selectedGoal === goal.id && (
                            <HOLYCheck size={24} color={system.textColor} opacity={1} strokeWidth={2} />
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Deepening Question */}
            {state.step === 'deepening' && state.selectedGoal && (
              <motion.div
                key="deepening"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex gap-3">
                  <YONIAvatar />
                  <div className="p-4 rounded-2xl rounded-tl-sm flex-1" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                      {deepeningQuestions[state.selectedGoal].question} {deepeningQuestions[state.selectedGoal].emoji}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {deepeningQuestions[state.selectedGoal].options.map((option) => (
                    <motion.button
                      key={option.value}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setState(prev => ({ ...prev, deepeningAnswer: option.value }))}
                      className="w-full p-4 rounded-xl text-left"
                      style={{
                        backgroundColor: state.deepeningAnswer === option.value ? '#1A1A1A' : '#FFFFFF',
                        color: state.deepeningAnswer === option.value ? '#F9F6F0' : '#1A1A1A',
                        border: state.deepeningAnswer === option.value ? '2px solid #1A1A1A' : '2px solid #DADADA',
                        cursor: 'pointer',
                        minHeight: '72px',
                        transition: 'all 0.3s ease',
                        whiteSpace: 'normal',
                        lineHeight: '1.4'
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span style={{ fontSize: '28px', flexShrink: 0 }}>{option.emoji}</span>
                        <p style={{ 
                          fontFamily: 'Inter, sans-serif', 
                          fontSize: '15px', 
                          fontWeight: '600',
                          whiteSpace: 'normal',
                          lineHeight: '1.4',
                          flex: 1
                        }}>
                          {option.label}
                        </p>
                        {state.deepeningAnswer === option.value && (
                          <HOLYCheck size={20} color="#F9F6F0" opacity={1} strokeWidth={2} />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Preference Question */}
            {state.step === 'preference' && (
              <motion.div
                key="preference"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex gap-3">
                  <YONIAvatar />
                  <div className="p-4 rounded-2xl rounded-tl-sm flex-1" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                      {preferenceQuestion.question} {preferenceQuestion.emoji}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {preferenceQuestion.options.map((option) => (
                    <motion.button
                      key={option.value}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setState(prev => ({ ...prev, preferenceAnswer: option.value }))}
                      className="w-full p-4 rounded-xl text-left"
                      style={{
                        backgroundColor: state.preferenceAnswer === option.value ? '#1A1A1A' : '#FFFFFF',
                        color: state.preferenceAnswer === option.value ? '#F9F6F0' : '#1A1A1A',
                        border: state.preferenceAnswer === option.value ? '2px solid #1A1A1A' : '2px solid #DADADA',
                        cursor: 'pointer',
                        minHeight: '72px',
                        transition: 'all 0.3s ease',
                        whiteSpace: 'normal',
                        lineHeight: '1.4'
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span style={{ fontSize: '28px', flexShrink: 0 }}>{option.emoji}</span>
                        <p style={{ 
                          fontFamily: 'Inter, sans-serif', 
                          fontSize: '15px', 
                          fontWeight: '600',
                          whiteSpace: 'normal',
                          lineHeight: '1.4',
                          flex: 1
                        }}>
                          {option.label}
                        </p>
                        {state.preferenceAnswer === option.value && (
                          <HOLYCheck size={20} color="#F9F6F0" opacity={1} strokeWidth={2} />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Result */}
            {state.step === 'result' && state.recommendedSystem && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="flex gap-3">
                  <YONIAvatar />
                  <div className="p-4 rounded-2xl rounded-tl-sm flex-1" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                      Perfect! Based on your intention, I recommend <strong>{ritualSystems[state.recommendedSystem].name}</strong>. ✨
                    </p>
                  </div>
                </div>

                <ResultCard 
                  system={state.recommendedSystem}
                  onAddToCart={() => console.log('Add to cart')}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Bar */}
        {state.step !== 'result' && (
          <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #DADADA' }}>
            {state.step === 'welcome' && (
              <SacredButton
                onClick={() => setState(prev => ({ ...prev, step: 'goal' }))}
                className="w-full"
                variant="primary"
                style={{ borderRadius: '12px' }}
              >
                <Sparkles className="w-5 h-5" />
                Begin Ritual Finder
              </SacredButton>
            )}

            {state.step === 'goal' && (
              <SacredButton
                onClick={() => setState(prev => ({ ...prev, step: 'deepening' }))}
                disabled={!state.selectedGoal}
                className="w-full"
                variant="primary"
                style={{ borderRadius: '12px' }}
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </SacredButton>
            )}

            {state.step === 'deepening' && (
              <SacredButton
                onClick={() => setState(prev => ({ ...prev, step: 'preference' }))}
                disabled={!state.deepeningAnswer}
                className="w-full"
                variant="primary"
                style={{ borderRadius: '12px' }}
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </SacredButton>
            )}

            {state.step === 'preference' && (
              <SacredButton
                onClick={() => setState(prev => ({ ...prev, step: 'result', recommendedSystem: state.selectedGoal }))}
                disabled={!state.preferenceAnswer}
                className="w-full"
                variant="primary"
                style={{ borderRadius: '12px' }}
              >
                <Sparkles className="w-5 h-5" />
                Discover My Ritual
              </SacredButton>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ========================================
// 4. STANDALONE EXPERIENCE PAGE
// ========================================

function StandalonePageExample() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="space-y-8">
      {!isStarted ? (
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#1A1A1A', border: '2px solid #1A1A1A' }}>
          <div className="p-12 text-center space-y-6">
            <div className="flex justify-center mb-4">
              <YONIAvatar size={80} />
            </div>
            <div className="space-y-3">
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#F9F6F0', lineHeight: '120%' }}>
                Discover Your Sacred Ritual
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#F9F6F0', opacity: 0.8, lineHeight: '160%', maxWidth: '600px', margin: '0 auto' }}>
                Let YONI™ guide you to the ritual that aligns with your intention. Personalized wellness in 2 minutes.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(170, 181, 178, 0.2)' }}>
                <div className="mb-3 flex justify-center">
                  <HOLYSparkle size={32} color="#AAB5B2" opacity={1} strokeWidth={1.5} />
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', fontWeight: '600', marginBottom: '4px' }}>
                  AI-Powered
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', opacity: 0.7 }}>
                  Intelligent ritual matching
                </p>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(217, 196, 187, 0.2)' }}>
                <div className="mb-3 flex justify-center">
                  <HOLYDroplet size={32} color="#D9C4BB" opacity={1} strokeWidth={1.5} />
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', fontWeight: '600', marginBottom: '4px' }}>
                  Sacred Guidance
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', opacity: 0.7 }}>
                  Intentional wellness journey
                </p>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(156, 136, 122, 0.2)' }}>
                <div className="mb-3 flex justify-center">
                  <HOLYFlower size={32} color="#9C887A" opacity={1} strokeWidth={1.5} />
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', fontWeight: '600', marginBottom: '4px' }}>
                  2 Minutes
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', opacity: 0.7 }}>
                  Quick & meaningful
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <motion.button
                onClick={() => setIsStarted(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12"
                style={{
                  backgroundColor: '#F9F6F0',
                  color: '#1A1A1A',
                  border: 'none',
                  minHeight: '56px',
                  fontSize: '16px',
                  fontWeight: '600',
                  borderRadius: '12px',
                  fontFamily: 'Inter, sans-serif',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Sparkles className="w-5 h-5" />
                Begin Ritual Finder
              </motion.button>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <EmbeddedModuleExample />
        </motion.div>
      )}
    </div>
  );
}

// ========================================
// MAIN PAGE COMPONENT
// ========================================

export default function RitualFinderPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <HOLYSparkle size={40} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
          <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', lineHeight: '120%' }}>
            Ritual Finder Engine
          </h1>
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', maxWidth: '800px' }}>
          Conversational product recommendation powered by YONI™. Full interactive end-to-end flows across all touchpoints with branching logic and personalized recommendations.
        </p>
      </div>

      {/* 🌟 NEW: OPTIMIZED FLOW */}
      <div className="rounded-2xl p-6" style={{ backgroundColor: '#F9F6F0', border: '3px solid #5E6458' }}>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <span style={{ fontSize: '32px' }}>⚡</span>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A' }}>
              OPTIMIZED FLOW — v2.0
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
            <strong>🎯 No "Next" buttons</strong> • <strong>⏩ Auto-advance (≤300ms)</strong> • <strong>📜 Stacked conversational format</strong> • <strong>🌟 Inline recommendations</strong> • <strong>🤖 3D emojis</strong> • <strong>🧠 Scroll to review</strong>
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chat Bubble Version */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <HOLYMessage size={20} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
                A. Chat Bubble (Click to Open)
              </h3>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', marginBottom: '16px' }}>
              Click the bottom-right chat bubble to launch the optimized Ritual Finder. Questions and answers stack vertically with inline recommendations + Add to Cart CTAs.
            </p>
            <div className="relative rounded-xl overflow-visible" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', height: '500px' }}>
              {/* Simulated page background */}
              <div className="p-6 space-y-4 pointer-events-none">
                <div className="h-8 w-48 rounded" style={{ backgroundColor: '#DADADA' }} />
                <div className="h-4 w-full rounded" style={{ backgroundColor: '#F9F6F0' }} />
                <div className="h-4 w-3/4 rounded" style={{ backgroundColor: '#F9F6F0' }} />
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="aspect-square rounded-lg" style={{ backgroundColor: '#DADADA' }} />
                  <div className="aspect-square rounded-lg" style={{ backgroundColor: '#DADADA' }} />
                  <div className="aspect-square rounded-lg" style={{ backgroundColor: '#DADADA' }} />
                </div>
              </div>
              {/* Chat bubble appears here - CONTAINED within this div */}
              <RitualFinderOptimized mode="chat" contained={true} />
            </div>
          </div>

          {/* Embedded Version */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <HOLYDroplet size={20} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
                B. Embedded (Auto-Start)
              </h3>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', marginBottom: '16px' }}>
              Embedded version that starts immediately when loaded. Perfect for dedicated Ritual Finder pages or PDP modules.
            </p>
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', height: '500px' }}>
              <RitualFinderOptimized mode="embedded" />
            </div>
          </div>
        </div>
      </div>

      {/* Experience Contexts */}
      <div className="space-y-10">
        {/* 1. Chat Modal */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <HOLYMessage size={24} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A' }}>
              1. Chat Modal (Website Desktop)
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', marginBottom: '16px' }}>
            Fixed bottom-right chat bubble that expands into an overlay panel. Click the bubble to start, then go through the complete question flow to see your ritual recommendation.
          </p>
          <ChatModalExample />
        </section>

        {/* 2. Embedded Module */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <HOLYDroplet size={24} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A' }}>
              2. Embedded Module (PDP/PLP Block)
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', marginBottom: '16px' }}>
            Inline responsive module that renders within product pages. Progress bar shows advancement through the 4-step journey.
          </p>
          <EmbeddedModuleExample />
        </section>

        {/* 3. Mobile Full-Screen */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <HOLYLeaf size={24} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A' }}>
              3. Full-Screen Takeover (Mobile Web & App)
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', marginBottom: '16px' }}>
            Immersive full-screen mobile experience with branded headers, progress bar, and touch-optimized interactions (375px viewport).
          </p>
          <MobileFullScreenExample />
        </section>

        {/* 4. Standalone Page */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <HOLYWave size={24} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A' }}>
              4. Standalone Experience Page
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', marginBottom: '16px' }}>
            Dedicated landing page with hero section and benefits. Click "Begin Ritual Finder" to launch the embedded experience.
          </p>
          <StandalonePageExample />
        </section>
      </div>

      {/* Components Reference */}
      <div className="rounded-2xl p-8" style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}>
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', marginBottom: '16px' }}>
          Components Used
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
              UI Components
            </p>
            <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '200%' }}>
              <li>• Button, Badge (Base Components)</li>
              <li>• Card (Layout Components)</li>
              <li>• Motion React (Sacred Microinteractions)</li>
              <li>• Progress Bar (Custom Component)</li>
            </ul>
          </div>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
              Custom Blocks
            </p>
            <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '200%' }}>
              <li>• YONIAvatar (AI Guide Avatar)</li>
              <li>• ResultCard (System Recommendation)</li>
              <li>• RitualSystemBadge (System Labels)</li>
              <li>• HOLYIcons (2D Line Art Icons)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Design Standards */}
      <div className="rounded-2xl p-8" style={{ backgroundColor: '#1A1A1A', border: '2px solid #1A1A1A' }}>
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#F9F6F0', marginBottom: '12px' }}>
          Design Standards & Interaction Flow
        </h3>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', lineHeight: '200%' }}>
          <li>• <strong>Complete Flow</strong>: Welcome → Goal Selection → Deepening Question → Preference → Result</li>
          <li>• <strong>Branching Logic</strong>: Deepening questions adapt based on selected goal/ritual system</li>
          <li>• <strong>3D Emojis</strong>: Only used within Ritual Finder questions and responses (🌙 💧 🌸 🍃 🤝 ✨)</li>
          <li>• <strong>2D HOLY Icons</strong>: Used in headers, navigation, system badges, and all other contexts</li>
          <li>• <strong>State Management</strong>: Each format maintains independent quiz state with full back navigation</li>
          <li>• <strong>Motion States</strong>: Selection glow, scale animations, slide transitions, progress animations</li>
          <li>• <strong>Responsive Breakpoints</strong>: 375px (mobile), 768px (tablet), 1024px (desktop)</li>
          <li>• <strong>ADA Compliance</strong>: 44x44px minimum touch targets on mobile, AAA contrast ratios, disabled states</li>
          <li>• <strong>Result Display</strong>: System card with icon, description, product recommendations, purpose badges, CTAs</li>
        </ul>
      </div>
    </div>
  );
}
