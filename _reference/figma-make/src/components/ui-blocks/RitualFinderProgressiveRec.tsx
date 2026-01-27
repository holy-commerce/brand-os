import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Eye } from 'lucide-react';
import { useState } from 'react';
import { RitualSystemBadge } from '../core-system';
import { 
  HOLYDroplet, 
  HOLYFlower, 
  HOLYLeaf, 
  HOLYHeart, 
  HOLYGem,
  HOLYSparkle
} from '../icons/HOLYIcons';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// ========================================
// PROGRESSIVE RECOMMENDATION COMPONENT
// ========================================
// Shows evolving best-match system/product after each Ritual Finder answer
// Implements sacred breathing aura effect with auto-advance feedback

type RitualSystem = 'aftercare' | 'renewal' | 'touch' | 'union' | 'vital';

interface SystemRecommendation {
  systemId: RitualSystem;
  systemName: string;
  systemTagline: string;
  systemColor: string;
  systemTextColor: string;
  systemIcon: React.ComponentType<any>;
  confidence: number; // 0-100
  reasoning: string;
  productImage?: string;
  productName?: string;
}

interface ProgressiveRecProps {
  recommendation: SystemRecommendation;
  onDismiss?: () => void;
  layout?: 'inline' | 'sidebar' | 'above'; // inline (mobile), sidebar (desktop), above (chat modal)
  showCTA?: boolean;
}

export function ProgressiveRecommendation({ 
  recommendation, 
  onDismiss,
  layout = 'inline',
  showCTA = true
}: ProgressiveRecProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleDismiss = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  if (isDismissed) return null;

  const IconComponent = recommendation.systemIcon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1]
          }
        }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={`relative ${layout === 'sidebar' ? 'w-full' : ''}`}
      >
        {/* Breathing Aura Effect (3-layer) */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${recommendation.systemColor}40, transparent 70%)`,
            filter: 'blur(20px)',
            zIndex: 0
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${recommendation.systemColor}30, transparent 60%)`,
            filter: 'blur(15px)',
            zIndex: 0
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.2
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${recommendation.systemColor}20, transparent 50%)`,
            filter: 'blur(10px)',
            zIndex: 0
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.4
          }}
        />

        {/* Main Card */}
        <div
          className="relative rounded-2xl p-5 border-2"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: recommendation.systemColor,
            zIndex: 1
          }}
        >
          {/* Dismiss Button */}
          {onDismiss && (
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-all"
              style={{
                backgroundColor: 'rgba(26, 26, 26, 0.05)',
                color: '#1A1A1A'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(26, 26, 26, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(26, 26, 26, 0.05)';
              }}
            >
              <X className="w-3 h-3" />
            </button>
          )}

          {/* Collapse/Expand Toggle (for sidebar layout) */}
          {layout === 'sidebar' && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute top-3 right-10 text-xs"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#1A1A1A',
                opacity: 0.6
              }}
            >
              {isCollapsed ? 'Expand' : 'Collapse'}
            </button>
          )}

          {!isCollapsed && (
            <>
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: recommendation.systemColor }}
                >
                  <IconComponent 
                    size={20} 
                    color={recommendation.systemTextColor} 
                    opacity={1} 
                    strokeWidth={1.5} 
                  />
                </div>
                <div className="flex-1">
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '11px', 
                    color: '#1A1A1A',
                    opacity: 0.6,
                    fontWeight: '600',
                    letterSpacing: '0.5px',
                    marginBottom: '4px'
                  }}>
                    YOUR CURRENT MATCH
                  </p>
                  <h5 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '18px', 
                    color: '#1A1A1A',
                    marginBottom: '2px'
                  }}>
                    {recommendation.systemName}
                  </h5>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '12px', 
                    color: '#1A1A1A',
                    opacity: 0.7,
                    fontStyle: 'italic'
                  }}>
                    {recommendation.systemTagline}
                  </p>
                </div>
              </div>

              {/* Product Image (if available) */}
              {recommendation.productImage && (
                <div className="mb-4 rounded-lg overflow-hidden" style={{ height: '140px' }}>
                  <ImageWithFallback
                    src={recommendation.productImage}
                    alt={recommendation.productName || recommendation.systemName}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Reasoning */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '13px', 
                color: '#1A1A1A',
                lineHeight: '1.6',
                marginBottom: '12px'
              }}>
                {recommendation.reasoning}
              </p>

              {/* Confidence Indicator */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '11px', 
                    color: '#1A1A1A',
                    opacity: 0.6
                  }}>
                    Match Confidence
                  </span>
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '11px', 
                    color: '#1A1A1A',
                    fontWeight: '600'
                  }}>
                    {recommendation.confidence}%
                  </span>
                </div>
                <div 
                  className="w-full h-1.5 rounded-full overflow-hidden"
                  style={{ backgroundColor: '#F9F6F0' }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${recommendation.confidence}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: recommendation.systemColor }}
                  />
                </div>
              </div>

              {/* Encouragement Text */}
              <div 
                className="p-3 rounded-lg mb-4"
                style={{ backgroundColor: '#F9F6F0' }}
              >
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '12px', 
                  color: '#1A1A1A',
                  opacity: 0.8,
                  textAlign: 'center',
                  lineHeight: '1.5'
                }}>
                  ✨ Keep going for your full Ritual match
                </p>
              </div>

              {/* CTAs (optional) */}
              {showCTA && (
                <div className="flex gap-2">
                  <button
                    className="flex-1 py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                    style={{
                      backgroundColor: recommendation.systemColor,
                      color: recommendation.systemTextColor,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = `0 4px 12px ${recommendation.systemColor}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <button
                    className="flex-1 py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                    style={{
                      backgroundColor: '#1A1A1A',
                      color: '#F9F6F0',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(26, 26, 26, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add
                  </button>
                </div>
              )}
            </>
          )}

          {/* Collapsed State */}
          {isCollapsed && (
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: recommendation.systemColor }}
              >
                <IconComponent 
                  size={16} 
                  color={recommendation.systemTextColor} 
                  opacity={1} 
                  strokeWidth={1.5} 
                />
              </div>
              <div className="flex-1">
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '13px', 
                  color: '#1A1A1A',
                  fontWeight: '600'
                }}>
                  {recommendation.systemName}
                </p>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '11px', 
                  color: '#1A1A1A',
                  opacity: 0.6
                }}>
                  {recommendation.confidence}% match
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Helper function to calculate recommendation based on answers
export function calculateProgressiveRecommendation(
  selectedGoal: string | null,
  deepeningAnswer: string | null,
  preferenceAnswer: string | null
): SystemRecommendation | null {
  if (!selectedGoal) return null;

  const systemData: Record<string, Omit<SystemRecommendation, 'confidence' | 'reasoning'>> = {
    aftercare: {
      systemId: 'aftercare',
      systemName: 'Ritual Aftercare™',
      systemTagline: 'Clinical meets ceremonial',
      systemColor: '#AAB5B2',
      systemTextColor: '#1A1A1A',
      systemIcon: HOLYDroplet,
      productImage: 'https://images.unsplash.com/photo-1722933375700-e297a7996265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib2R5JTIwb2lsJTIwYm90dGxlfGVufDF8fHx8MTc2MzA5MzE3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      productName: 'Restorative Body Oil'
    },
    renewal: {
      systemId: 'renewal',
      systemName: 'Ritual Renewal™',
      systemTagline: 'Radiance restored',
      systemColor: '#D9C4BB',
      systemTextColor: '#1A1A1A',
      systemIcon: HOLYFlower,
      productImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWNlJTIwc2VydW18ZW58MXx8fHwxNzYzMDkzMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      productName: 'Radiant Rose Serum'
    },
    touch: {
      systemId: 'touch',
      systemName: 'Ritual Touch™',
      systemTagline: 'Sacred sensuality',
      systemColor: '#5E6458',
      systemTextColor: '#F9F6F0',
      systemIcon: HOLYLeaf,
      productImage: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRpbWF0ZSUyMG9pbCUyMGJvdHRsZXxlbnwxfHx8fDE3NjMwOTMxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      productName: 'Intimate Massage Oil'
    },
    union: {
      systemId: 'union',
      systemName: 'Ritual Union™',
      systemTagline: 'Connected intimacy',
      systemColor: '#D7D0C5',
      systemTextColor: '#1A1A1A',
      systemIcon: HOLYHeart,
      productImage: 'https://images.unsplash.com/photo-1610629610586-2f5870c3ed20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGVzJTIwbWFzc2FnZSUyMG9pbHxlbnwxfHx8fDE3NjMwOTMxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      productName: 'Couples Ritual Kit'
    },
    vital: {
      systemId: 'vital',
      systemName: 'Ritual Vital™',
      systemTagline: 'Vitality elevated',
      systemColor: '#9C887A',
      systemTextColor: '#F9F6F0',
      systemIcon: HOLYGem,
      productImage: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHN1cHBsZW1lbnR8ZW58MXx8fHwxNzYzMDkzMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      productName: 'Vitality Tincture'
    }
  };

  const baseSystem = systemData[selectedGoal];
  if (!baseSystem) return null;

  // Calculate confidence based on how many questions answered
  let confidence = 40; // Base confidence from goal selection
  if (deepeningAnswer) confidence += 30;
  if (preferenceAnswer) confidence += 30;

  // Generate reasoning based on answers
  let reasoning = '';
  if (!deepeningAnswer && !preferenceAnswer) {
    reasoning = `Based on your interest in ${baseSystem.systemName.replace('™', '')}, this ritual system aligns with your initial intention.`;
  } else if (deepeningAnswer && !preferenceAnswer) {
    reasoning = `Your focus on ${deepeningAnswer} makes ${baseSystem.systemName.replace('™', '')} an ideal match for your ritual journey.`;
  } else {
    reasoning = `Perfect alignment: ${baseSystem.systemName.replace('™', '')} supports your ${deepeningAnswer || 'goals'} with a ${preferenceAnswer} ritual practice.`;
  }

  return {
    ...baseSystem,
    confidence,
    reasoning
  };
}
