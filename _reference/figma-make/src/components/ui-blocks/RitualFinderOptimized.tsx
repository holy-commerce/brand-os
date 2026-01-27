import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, ShoppingBag, Eye, Maximize2, Minimize2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import yoniProfileImage from 'figma:asset/0ecc9d9bbd056216b0507babf7d9364c90783a1e.png';
import { 
  HOLYDroplet, 
  HOLYFlower, 
  HOLYLeaf, 
  HOLYWave,
  HOLYSparkle,
  HOLYHeart
} from '../icons/HOLYIcons';

// ========================================
// OPTIMIZED RITUAL FINDER — STACKED CONVERSATIONAL FLOW
// ========================================
// Auto-advance (≤300ms), no Next buttons, vertical stacking with history
// Inline recommendations visible alongside next question

type RitualSystem = 'aftercare' | 'renewal' | 'touch' | 'union' | 'vital';

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

interface ConversationEntry {
  id: string;
  type: 'question' | 'answer' | 'recommendation' | 'result';
  content: any;
  timestamp: number;
}

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
// HELPER COMPONENTS
// ========================================

function YONIAvatar({ size = 32 }: { size?: number }) {
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

function YONIMessage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex gap-3 items-start"
    >
      <YONIAvatar size={32} />
      <div 
        className="p-4 rounded-2xl rounded-tl-sm flex-1 max-w-md"
        style={{ backgroundColor: '#AAB5B2' }}
      >
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', lineHeight: '160%', fontWeight: '500' }}>
          {children}
        </p>
      </div>
    </motion.div>
  );
}

function UserAnswer({ children, emoji }: { children: React.ReactNode; emoji?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex gap-3 items-start justify-end"
    >
      <div 
        className="p-4 rounded-2xl rounded-tr-sm"
        style={{ backgroundColor: '#D9C4BB', maxWidth: '80%' }}
      >
        <div className="flex items-center gap-2">
          {emoji && <span style={{ fontSize: '18px' }}>{emoji}</span>}
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%', fontWeight: '600' }}>
            {children}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function InlineRecommendation({ 
  system, 
  confidence,
  reasoning 
}: { 
  system: RitualSystemData; 
  confidence: number;
  reasoning: string;
}) {
  const Icon = system.icon;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative my-4"
    >
      {/* Breathing Aura */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${system.color}40, transparent 70%)`,
          filter: 'blur(25px)',
          zIndex: 0
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Card */}
      <div
        className="relative rounded-2xl p-4 border-2"
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: system.color,
          zIndex: 1
        }}
      >
        <div className="flex items-start gap-3 mb-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: system.color }}
          >
            <Icon size={20} color={system.textColor} opacity={1} strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '10px', 
              color: '#1A1A1A',
              opacity: 0.6,
              fontWeight: '600',
              letterSpacing: '0.5px',
              marginBottom: '2px',
              textTransform: 'uppercase'
            }}>
              YOUR CURRENT MATCH
            </p>
            <h5 style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '16px', 
              color: '#1A1A1A',
              marginBottom: '2px'
            }}>
              {system.name}
            </h5>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '11px', 
              color: '#1A1A1A',
              opacity: 0.7,
              fontStyle: 'italic'
            }}>
              {system.tagline}
            </p>
          </div>
        </div>

        {/* Product Preview */}
        {system.products[0] && (
          <div className="mb-3 rounded-lg overflow-hidden" style={{ height: '100px' }}>
            <ImageWithFallback
              src={system.products[0].image}
              alt={system.products[0].name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Reasoning */}
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#1A1A1A',
          lineHeight: '1.5',
          marginBottom: '10px'
        }}>
          {reasoning}
        </p>

        {/* Confidence */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '10px', 
              color: '#1A1A1A',
              opacity: 0.6
            }}>
              Match Confidence
            </span>
            <span style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '10px', 
              color: '#1A1A1A',
              fontWeight: '600'
            }}>
              {confidence}%
            </span>
          </div>
          <div 
            className="w-full h-1.5 rounded-full overflow-hidden"
            style={{ backgroundColor: '#F9F6F0' }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${confidence}%` }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="h-full rounded-full"
              style={{ backgroundColor: system.color }}
            />
          </div>
        </div>

        {/* CTA: Add to Cart */}
        <div className="relative mb-3" style={{ overflow: 'visible' }}>
          {/* Sacred Breathing Aura (on hover) */}
          {isHovered && (
            <>
              <motion.div
                className="absolute rounded-lg"
                style={{
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  background: `radial-gradient(circle at 50% 50%, ${system.color}60, ${system.color}30 40%, transparent 80%)`,
                  filter: 'blur(30px)',
                  zIndex: 0,
                  pointerEvents: 'none'
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
              <motion.div
                className="absolute rounded-lg"
                style={{
                  top: '-15px',
                  left: '-15px',
                  right: '-15px',
                  bottom: '-15px',
                  background: `radial-gradient(circle at 50% 50%, ${system.color}50, ${system.color}25 50%, transparent 75%)`,
                  filter: 'blur(25px)',
                  zIndex: 0,
                  pointerEvents: 'none'
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
              <motion.div
                className="absolute rounded-lg"
                style={{
                  top: '-10px',
                  left: '-10px',
                  right: '-10px',
                  bottom: '-10px',
                  background: `radial-gradient(circle at 50% 50%, ${system.color}40, ${system.color}20 60%, transparent 70%)`,
                  filter: 'blur(20px)',
                  zIndex: 0,
                  pointerEvents: 'none'
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
          
          <motion.button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full flex items-center justify-center gap-2 rounded-lg"
            style={{
              backgroundColor: '#1A1A1A',
              color: '#F9F6F0',
              padding: '12px 24px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              zIndex: 1
            }}
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </motion.button>
        </div>

        {/* Encouragement */}
        <div 
          className="p-2 rounded-lg text-center"
          style={{ backgroundColor: '#F9F6F0' }}
        >
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '11px', 
            color: '#1A1A1A',
            opacity: 0.8
          }}>
            ✨ Keep going for your complete ritual match
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function FinalResult({ system }: { system: RitualSystemData }) {
  const Icon = system.icon;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-2xl overflow-hidden my-4"
      style={{ backgroundColor: system.color, border: `2px solid ${system.color}` }}
    >
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div 
            className="rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ 
              width: '64px', 
              height: '64px', 
              backgroundColor: system.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)'
            }}
          >
            <Icon size={32} color={system.textColor} opacity={1} strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '11px', 
              color: system.textColor,
              opacity: 0.7,
              fontWeight: '600',
              letterSpacing: '0.5px',
              marginBottom: '4px',
              textTransform: 'uppercase'
            }}>
              YOUR PERFECT RITUAL
            </p>
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: system.textColor, marginBottom: '4px' }}>
              {system.name}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: system.textColor, opacity: 0.8, fontStyle: 'italic' }}>
              {system.tagline}
            </p>
          </div>
        </div>

        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: system.textColor, lineHeight: '160%', opacity: 0.9 }}>
          {system.description}
        </p>

        {/* Products */}
        <div className="space-y-3">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: system.textColor, opacity: 0.7, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Recommended Products
          </p>
          <div className="grid gap-3">
            {system.products.map((product, idx) => (
              <div 
                key={idx}
                className="rounded-xl p-4 flex items-center gap-4"
                style={{ backgroundColor: system.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)' }}
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: system.textColor, fontWeight: '600', marginBottom: '4px' }}>
                    {product.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <span 
                      className="px-2 py-1 rounded text-xs"
                      style={{ 
                        backgroundColor: system.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
                        color: system.textColor,
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '10px',
                        fontWeight: '600'
                      }}
                    >
                      {product.purpose}
                    </span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: system.textColor, fontWeight: '600' }}>
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="relative flex gap-3 pt-2" style={{ overflow: 'visible' }}>
          {/* Sacred Breathing Aura (on hover) */}
          {isHovered && (
            <>
              <motion.div
                className="absolute rounded-lg"
                style={{
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  background: `radial-gradient(circle at 50% 50%, ${system.textColor}60, ${system.textColor}30 40%, transparent 80%)`,
                  filter: 'blur(30px)',
                  zIndex: 0,
                  pointerEvents: 'none'
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
              <motion.div
                className="absolute rounded-lg"
                style={{
                  top: '-15px',
                  left: '-15px',
                  right: '-15px',
                  bottom: '-15px',
                  background: `radial-gradient(circle at 50% 50%, ${system.textColor}50, ${system.textColor}25 50%, transparent 75%)`,
                  filter: 'blur(25px)',
                  zIndex: 0,
                  pointerEvents: 'none'
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
              <motion.div
                className="absolute rounded-lg"
                style={{
                  top: '-10px',
                  left: '-10px',
                  right: '-10px',
                  bottom: '-10px',
                  background: `radial-gradient(circle at 50% 50%, ${system.textColor}40, ${system.textColor}20 60%, transparent 70%)`,
                  filter: 'blur(20px)',
                  zIndex: 0,
                  pointerEvents: 'none'
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
          
          <motion.button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex-1 flex items-center justify-center gap-2"
            style={{
              backgroundColor: system.textColor,
              color: system.color,
              border: 'none',
              borderRadius: '8px',
              padding: '14px 24px',
              fontSize: '14px',
              fontWeight: '600',
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              minHeight: '48px',
              zIndex: 1
            }}
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// ========================================
// MAIN OPTIMIZED RITUAL FINDER COMPONENT
// ========================================

interface RitualFinderOptimizedProps {
  mode?: 'chat' | 'fullscreen' | 'embedded';
  isOpen?: boolean;
  onClose?: () => void;
  contained?: boolean; // For demo purposes - positions chat bubble within container instead of fixed viewport
}

export function RitualFinderOptimized({ 
  mode = 'chat',
  isOpen: externalIsOpen,
  onClose: externalOnClose,
  contained = false
}: RitualFinderOptimizedProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const handleClose = externalOnClose || (() => setInternalIsOpen(false));
  const handleOpen = () => setInternalIsOpen(true);

  const [conversation, setConversation] = useState<ConversationEntry[]>([
    {
      id: 'welcome-1',
      type: 'question',
      content: { text: "Hi — I'm YONI™, your sacred ritual guide. 🌙" },
      timestamp: Date.now()
    },
    {
      id: 'welcome-2',
      type: 'question',
      content: { text: "Let's discover which ritual aligns with your intention. ✨" },
      timestamp: Date.now() + 1
    }
  ]);

  const [currentQuestion, setCurrentQuestion] = useState<'goal' | 'deepening' | 'preference' | 'complete'>('goal');
  const [selectedGoal, setSelectedGoal] = useState<RitualSystem | null>(null);
  const [deepeningAnswer, setDeepeningAnswer] = useState<string | null>(null);
  const [preferenceAnswer, setPreferenceAnswer] = useState<string | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new entries
  useEffect(() => {
    if (scrollRef.current) {
      // Use requestAnimationFrame to ensure DOM has updated
      requestAnimationFrame(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      });
    }
  }, [conversation]);

  const addToConversation = (entry: ConversationEntry) => {
    setConversation(prev => [...prev, entry]);
  };

  const handleGoalSelection = (goal: RitualSystem) => {
    const goalOption = goalOptions.find(g => g.id === goal);
    if (!goalOption) return;

    setSelectedGoal(goal);

    // Add user answer
    addToConversation({
      id: `answer-goal-${Date.now()}`,
      type: 'answer',
      content: { text: goalOption.title, emoji: goalOption.emoji },
      timestamp: Date.now()
    });

    // Auto-advance: Show recommendation then next question (≤300ms)
    setTimeout(() => {
      // Add inline recommendation
      addToConversation({
        id: `rec-goal-${Date.now()}`,
        type: 'recommendation',
        content: {
          system: ritualSystems[goal],
          confidence: 40,
          reasoning: `Based on your interest in ${goalOption.title.toLowerCase()}, this ritual system aligns with your initial intention.`
        },
        timestamp: Date.now()
      });

      // Add next question
      setTimeout(() => {
        addToConversation({
          id: `q-deepening-${Date.now()}`,
          type: 'question',
          content: { 
            text: `${deepeningQuestions[goal].question} ${deepeningQuestions[goal].emoji}`,
            questionType: 'deepening',
            system: goal
          },
          timestamp: Date.now()
        });
        setCurrentQuestion('deepening');
      }, 200);
    }, 300);
  };

  const handleDeepeningSelection = (value: string) => {
    if (!selectedGoal) return;

    const option = deepeningQuestions[selectedGoal].options.find(o => o.value === value);
    if (!option) return;

    setDeepeningAnswer(value);

    // Add user answer
    addToConversation({
      id: `answer-deepening-${Date.now()}`,
      type: 'answer',
      content: { text: option.label, emoji: option.emoji },
      timestamp: Date.now()
    });

    // Auto-advance
    setTimeout(() => {
      // Add updated recommendation
      addToConversation({
        id: `rec-deepening-${Date.now()}`,
        type: 'recommendation',
        content: {
          system: ritualSystems[selectedGoal],
          confidence: 70,
          reasoning: `Your focus on ${option.label.toLowerCase()} makes ${ritualSystems[selectedGoal].name.replace('™', '')} an ideal match for your ritual journey.`
        },
        timestamp: Date.now()
      });

      // Add next question
      setTimeout(() => {
        addToConversation({
          id: `q-preference-${Date.now()}`,
          type: 'question',
          content: { 
            text: `${preferenceQuestion.question} ${preferenceQuestion.emoji}`,
            questionType: 'preference'
          },
          timestamp: Date.now()
        });
        setCurrentQuestion('preference');
      }, 200);
    }, 300);
  };

  const handlePreferenceSelection = (value: string) => {
    if (!selectedGoal) return;

    const option = preferenceQuestion.options.find(o => o.value === value);
    if (!option) return;

    setPreferenceAnswer(value);

    // Add user answer
    addToConversation({
      id: `answer-preference-${Date.now()}`,
      type: 'answer',
      content: { text: option.label, emoji: option.emoji },
      timestamp: Date.now()
    });

    // Auto-advance to final result
    setTimeout(() => {
      addToConversation({
        id: `q-result-intro-${Date.now()}`,
        type: 'question',
        content: { text: "Perfect! Here's your personalized ritual match. 💫" },
        timestamp: Date.now()
      });

      setTimeout(() => {
        addToConversation({
          id: `result-${Date.now()}`,
          type: 'result',
          content: { system: ritualSystems[selectedGoal] },
          timestamp: Date.now()
        });
        setCurrentQuestion('complete');
      }, 200);
    }, 300);
  };

  const reset = () => {
    setConversation([
      {
        id: 'welcome-1',
        type: 'question',
        content: { text: "Hi — I'm YONI™, your sacred ritual guide. 🌙" },
        timestamp: Date.now()
      },
      {
        id: 'welcome-2',
        type: 'question',
        content: { text: "Let's discover which ritual aligns with your intention. ✨" },
        timestamp: Date.now() + 1
      }
    ]);
    setCurrentQuestion('goal');
    setSelectedGoal(null);
    setDeepeningAnswer(null);
    setPreferenceAnswer(null);
  };

  // Start question
  const showGoalQuestion = conversation.length === 2;

  useEffect(() => {
    if (showGoalQuestion && currentQuestion === 'goal') {
      const timer = setTimeout(() => {
        addToConversation({
          id: 'q-goal',
          type: 'question',
          content: { 
            text: 'What intention brings you here today? 💫',
            questionType: 'goal'
          },
          timestamp: Date.now()
        });
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [showGoalQuestion]);

  // Render based on mode
  if (mode === 'embedded' || mode === 'fullscreen') {
    return (
      <div 
        className="flex flex-col"
        style={{ 
          height: mode === 'fullscreen' ? '100vh' : '600px',
          backgroundColor: '#FFFFFF'
        }}
      >
        {/* Header */}
        <div 
          className="p-4 flex items-center justify-between border-b-2"
          style={{ borderColor: '#DADADA', flexShrink: 0 }}
        >
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
            onClick={reset}
            className="px-4 py-2 rounded-lg transition-all"
            style={{
              backgroundColor: '#F9F6F0',
              border: '2px solid #DADADA',
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              fontWeight: '600',
              color: '#1A1A1A',
              cursor: 'pointer'
            }}
          >
            Restart
          </button>
        </div>

        {/* Conversation Stack */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto space-y-4"
          style={{ 
            backgroundColor: '#FFFFFF',
            padding: '24px 24px 120px 24px' // Extra bottom padding for scrollability
          }}
        >
          {conversation.map((entry) => {
            if (entry.type === 'question') {
              return <YONIMessage key={entry.id}>{entry.content.text}</YONIMessage>;
            }
            if (entry.type === 'answer') {
              return (
                <UserAnswer key={entry.id} emoji={entry.content.emoji}>
                  {entry.content.text}
                </UserAnswer>
              );
            }
            if (entry.type === 'recommendation') {
              return (
                <InlineRecommendation
                  key={entry.id}
                  system={entry.content.system}
                  confidence={entry.content.confidence}
                  reasoning={entry.content.reasoning}
                />
              );
            }
            if (entry.type === 'result') {
              return <FinalResult key={entry.id} system={entry.content.system} />;
            }
            return null;
          })}

          {/* Active Question Options */}
          {currentQuestion === 'goal' && conversation.some(e => e.content.questionType === 'goal') && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2 pl-11"
            >
              {goalOptions.map((goal) => (
                <motion.button
                  key={goal.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleGoalSelection(goal.id)}
                  className="w-full p-3 rounded-xl text-left transition-all"
                  style={{
                    backgroundColor: '#F9F6F0',
                    border: '2px solid #DADADA',
                    cursor: 'pointer'
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: '18px', flexShrink: 0 }}>{goal.emoji}</span>
                    <div className="flex-1">
                      <p style={{ 
                        fontFamily: 'Inter, sans-serif', 
                        fontSize: '13px', 
                        fontWeight: '600',
                        color: '#1A1A1A',
                        marginBottom: '2px'
                      }}>
                        {goal.title}
                      </p>
                      <p style={{ 
                        fontFamily: 'Inter, sans-serif', 
                        fontSize: '11px', 
                        opacity: 0.7,
                        color: '#1A1A1A'
                      }}>
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {currentQuestion === 'deepening' && selectedGoal && conversation.some(e => e.content.questionType === 'deepening') && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2 pl-11"
            >
              {deepeningQuestions[selectedGoal].options.map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleDeepeningSelection(option.value)}
                  className="w-full p-3 rounded-xl text-left transition-all"
                  style={{
                    backgroundColor: '#F9F6F0',
                    border: '2px solid #DADADA',
                    cursor: 'pointer'
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: '16px', flexShrink: 0 }}>{option.emoji}</span>
                    <p style={{ 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: '13px', 
                      fontWeight: '600',
                      color: '#1A1A1A'
                    }}>
                      {option.label}
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {currentQuestion === 'preference' && conversation.some(e => e.content.questionType === 'preference') && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2 pl-11"
            >
              {preferenceQuestion.options.map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePreferenceSelection(option.value)}
                  className="w-full p-3 rounded-xl text-left transition-all"
                  style={{
                    backgroundColor: '#F9F6F0',
                    border: '2px solid #DADADA',
                    cursor: 'pointer'
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: '16px', flexShrink: 0 }}>{option.emoji}</span>
                    <p style={{ 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: '13px', 
                      fontWeight: '600',
                      color: '#1A1A1A'
                    }}>
                      {option.label}
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  // Chat Modal Mode
  return (
    <>
      {/* Chat Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpen}
            className="rounded-full flex items-center justify-center shadow-lg"
            style={{
              position: contained ? 'absolute' : 'fixed',
              bottom: contained ? '20px' : '24px',
              right: contained ? '20px' : '24px',
              width: '64px',
              height: '64px',
              backgroundColor: '#1A1A1A',
              border: '2px solid #F9F6F0',
              cursor: 'pointer',
              zIndex: contained ? 10 : 1000
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
            initial={{ x: 400, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 400, opacity: 0, scale: 0.9 }}
            className="rounded-2xl shadow-2xl overflow-hidden"
            style={{
              position: contained ? 'absolute' : 'fixed',
              bottom: contained ? '20px' : '24px',
              right: contained ? '20px' : '24px',
              width: contained ? 'calc(100% - 40px)' : '420px',
              maxWidth: contained ? '380px' : '90vw',
              height: contained ? 'calc(100% - 40px)' : '680px',
              maxHeight: contained ? '440px' : '90vh',
              backgroundColor: '#FFFFFF',
              border: '2px solid #DADADA',
              zIndex: contained ? 10 : 1000,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Header */}
            <div 
              className="p-4 flex items-center justify-between"
              style={{ borderBottom: '2px solid #DADADA', flexShrink: 0 }}
            >
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
                onClick={() => { handleClose(); reset(); }} 
                style={{ cursor: 'pointer', background: 'none', border: 'none', padding: '4px' }}
              >
                <X size={20} color="#1A1A1A" />
              </button>
            </div>

            {/* Conversation Stack */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto space-y-4"
              style={{ 
                backgroundColor: '#FFFFFF',
                padding: '24px 24px 120px 24px' // Extra bottom padding for scrollability
              }}
            >
              {conversation.map((entry) => {
                if (entry.type === 'question') {
                  return <YONIMessage key={entry.id}>{entry.content.text}</YONIMessage>;
                }
                if (entry.type === 'answer') {
                  return (
                    <UserAnswer key={entry.id} emoji={entry.content.emoji}>
                      {entry.content.text}
                    </UserAnswer>
                  );
                }
                if (entry.type === 'recommendation') {
                  return (
                    <InlineRecommendation
                      key={entry.id}
                      system={entry.content.system}
                      confidence={entry.content.confidence}
                      reasoning={entry.content.reasoning}
                    />
                  );
                }
                if (entry.type === 'result') {
                  return <FinalResult key={entry.id} system={entry.content.system} />;
                }
                return null;
              })}

              {/* Active Question Options */}
              {currentQuestion === 'goal' && conversation.some(e => e.content.questionType === 'goal') && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2 pl-11"
                >
                  {goalOptions.map((goal) => (
                    <motion.button
                      key={goal.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleGoalSelection(goal.id)}
                      className="w-full p-3 rounded-xl text-left transition-all"
                      style={{
                        backgroundColor: '#F9F6F0',
                        border: '2px solid #DADADA',
                        cursor: 'pointer'
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span style={{ fontSize: '18px', flexShrink: 0 }}>{goal.emoji}</span>
                        <div className="flex-1">
                          <p style={{ 
                            fontFamily: 'Inter, sans-serif', 
                            fontSize: '13px', 
                            fontWeight: '600',
                            color: '#1A1A1A',
                            marginBottom: '2px'
                          }}>
                            {goal.title}
                          </p>
                          <p style={{ 
                            fontFamily: 'Inter, sans-serif', 
                            fontSize: '11px', 
                            opacity: 0.7,
                            color: '#1A1A1A'
                          }}>
                            {goal.description}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {currentQuestion === 'deepening' && selectedGoal && conversation.some(e => e.content.questionType === 'deepening') && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2 pl-11"
                >
                  {deepeningQuestions[selectedGoal].options.map((option) => (
                    <motion.button
                      key={option.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleDeepeningSelection(option.value)}
                      className="w-full p-3 rounded-xl text-left transition-all"
                      style={{
                        backgroundColor: '#F9F6F0',
                        border: '2px solid #DADADA',
                        cursor: 'pointer'
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span style={{ fontSize: '16px', flexShrink: 0 }}>{option.emoji}</span>
                        <p style={{ 
                          fontFamily: 'Inter, sans-serif', 
                          fontSize: '13px', 
                          fontWeight: '600',
                          color: '#1A1A1A'
                        }}>
                          {option.label}
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {currentQuestion === 'preference' && conversation.some(e => e.content.questionType === 'preference') && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2 pl-11"
                >
                  {preferenceQuestion.options.map((option) => (
                    <motion.button
                      key={option.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handlePreferenceSelection(option.value)}
                      className="w-full p-3 rounded-xl text-left transition-all"
                      style={{
                        backgroundColor: '#F9F6F0',
                        border: '2px solid #DADADA',
                        cursor: 'pointer'
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span style={{ fontSize: '16px', flexShrink: 0 }}>{option.emoji}</span>
                        <p style={{ 
                          fontFamily: 'Inter, sans-serif', 
                          fontSize: '13px', 
                          fontWeight: '600',
                          color: '#1A1A1A'
                        }}>
                          {option.label}
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
