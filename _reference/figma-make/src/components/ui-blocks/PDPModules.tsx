import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  ChevronLeft, ChevronRight, Play, Star, Clock, 
  Shield, Leaf, Package, TrendingUp, Info, ChevronDown,
  Lock, Eye, CheckCircle2
} from 'lucide-react';
import { HOLYDroplet, HOLYSparkle, HOLYRecycle, HOLYLeaf, HOLYWave, HOLYFlower, HOLYZoomIn } from '../icons/HOLYIcons';
import { useState } from 'react';
import { 
  ProductImageGallery, 
  PDPButton, 
  StarRating, 
  IngredientCard 
} from './PDPMicrointeractions';

// HØLY PDP Module System
// Modular components for luxury product merchandising and conversion
// Designed to integrate with existing HØLY Design System components

// ========================================
// 1. HERO SHOWCASE
// ========================================

export function HeroShowcase() {
  const images = [
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800',
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800',
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
    'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800'
  ];

  return <ProductImageGallery images={images} productName="Sacred Product" />;
}

// ========================================
// 2. VARIANT + RITUAL SYSTEM SWITCHER
// ========================================

export function VariantRitualSystemSwitcher() {
  const [selectedSystem, setSelectedSystem] = useState('aftercare');
  
  const systems = [
    { id: 'aftercare', name: 'Aftercare™', color: '#AAB5B2', description: 'Post-intimacy restoration' },
    { id: 'renewal', name: 'Renewal™', color: '#D9C4BB', description: 'Skin rebirth ritual' },
    { id: 'vital', name: 'Vital™', color: '#9C887A', description: 'Daily vitality boost' },
    { id: 'touch', name: 'Touch™', color: '#5E6458', description: 'Intimate wellness' },
    { id: 'union', name: 'Union™', color: '#D7D0C5', description: 'Couple connection' }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
          Ritual System
        </p>
        <button 
          className="flex items-center gap-1"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}
        >
          <Info className="w-4 h-4" />
          Learn More
        </button>
      </div>

      <div className="space-y-2">
        {systems.map(system => (
          <button
            key={system.id}
            onClick={() => setSelectedSystem(system.id)}
            className="w-full p-4 rounded-xl text-left transition-all flex items-center gap-4"
            style={{
              border: '2px solid',
              borderColor: selectedSystem === system.id ? system.color : '#DADADA',
              backgroundColor: selectedSystem === system.id ? `${system.color}15` : '#FFFFFF'
            }}
          >
            <div 
              className="w-4 h-4 rounded-full flex-shrink-0"
              style={{ 
                backgroundColor: system.color,
                border: selectedSystem === system.id ? '2px solid #1A1A1A' : 'none'
              }}
            />
            <div className="flex-1">
              <p style={{ 
                fontFamily: 'Garamond, serif', 
                fontSize: '16px', 
                color: '#1A1A1A',
                fontWeight: selectedSystem === system.id ? '600' : '400'
              }}>
                Ritual {system.name}
              </p>
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '13px', 
                color: '#1A1A1A',
                opacity: 0.6
              }}>
                {system.description}
              </p>
            </div>
            {selectedSystem === system.id && (
              <CheckCircle2 className="w-5 h-5" style={{ color: system.color }} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ========================================
// 3. KEY INGREDIENT PANEL
// ========================================

export function KeyIngredientPanel() {
  const ingredients = [
    {
      name: 'Ocean Mineral Complex',
      icon: HOLYWave,
      iconColor: '#AAB5B2',
      benefit: 'Deep hydration and skin barrier repair',
      concentration: '15%'
    },
    {
      name: 'Sacred Rose Extract',
      icon: HOLYFlower,
      iconColor: '#D9C4BB',
      benefit: 'Anti-inflammatory and gentle renewal',
      concentration: '8%'
    },
    {
      name: 'Ritual Hyaluronic Blend',
      icon: HOLYDroplet,
      iconColor: '#5E6458',
      benefit: 'Multi-weight moisture retention',
      concentration: '12%'
    }
  ];

  return (
    <div 
      className="p-6 rounded-2xl space-y-4"
      style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
    >
      <div className="flex items-center gap-2">
        <Leaf className="w-5 h-5" style={{ color: '#5E6458' }} />
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
          Key Ingredients
        </h3>
      </div>

      <div className="space-y-3">
        {ingredients.map((ingredient, idx) => {
          const IconComponent = ingredient.icon;
          return (
            <div 
              key={idx}
              className="flex gap-4 p-4 rounded-xl"
              style={{ backgroundColor: '#F9F6F0' }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <IconComponent size={24} color={ingredient.iconColor} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', fontWeight: '600' }}>
                    {ingredient.name}
                  </p>
                  <span 
                    className="px-2 py-0.5 rounded-full"
                    style={{ 
                      backgroundColor: '#D9C4BB', 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: '11px', 
                      color: '#1A1A1A',
                      fontWeight: '600'
                    }}
                  >
                    {ingredient.concentration}
                  </span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                  {ingredient.benefit}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ========================================
// 4. USAGE RITUAL CAROUSEL
// ========================================

export function UsageRitualCarousel() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      number: 1,
      title: 'Cleanse',
      description: 'Begin with purified skin. Gently wash and pat dry.',
      time: '30 seconds'
    },
    {
      number: 2,
      title: 'Apply',
      description: 'Warm 3-4 drops between palms. Press into skin with intention.',
      time: '1 minute'
    },
    {
      number: 3,
      title: 'Massage',
      description: 'Use upward circular motions. Follow the sacred face map.',
      time: '2 minutes'
    },
    {
      number: 4,
      title: 'Breathe',
      description: 'Take three deep breaths. Allow full absorption.',
      time: '1 minute'
    },
    {
      number: 5,
      title: 'Seal',
      description: 'Optional: Layer with moisturizer to lock in ritual.',
      time: '30 seconds'
    }
  ];

  return (
    <div 
      className="p-6 rounded-2xl"
      style={{ backgroundColor: 'rgba(217, 196, 187, 0.15)', border: '2px solid #D9C4BB' }}
    >
      <h3 className="mb-6" style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
        How to Use — Sacred Ritual
      </h3>

      {/* Step Display */}
      <div className="mb-6 p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center gap-3 mb-4">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#D9C4BB' }}
          >
            <span style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '600' }}>
              {steps[currentStep].number}
            </span>
          </div>
          <div>
            <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A' }}>
              {steps[currentStep].title}
            </h4>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
              {steps[currentStep].time}
            </p>
          </div>
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', lineHeight: '160%' }}>
          {steps[currentStep].description}
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="p-2 rounded-lg transition-opacity"
          style={{ 
            backgroundColor: currentStep === 0 ? 'transparent' : '#FFFFFF',
            opacity: currentStep === 0 ? 0.3 : 1,
            cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          <ChevronLeft className="w-5 h-5" style={{ color: '#1A1A1A' }} />
        </button>

        <div className="flex gap-2">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className="transition-all rounded-full"
              style={{
                width: currentStep === idx ? '32px' : '8px',
                height: '8px',
                backgroundColor: currentStep === idx ? '#1A1A1A' : '#DADADA'
              }}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
          disabled={currentStep === steps.length - 1}
          className="p-2 rounded-lg transition-opacity"
          style={{ 
            backgroundColor: currentStep === steps.length - 1 ? 'transparent' : '#FFFFFF',
            opacity: currentStep === steps.length - 1 ? 0.3 : 1,
            cursor: currentStep === steps.length - 1 ? 'not-allowed' : 'pointer'
          }}
        >
          <ChevronRight className="w-5 h-5" style={{ color: '#1A1A1A' }} />
        </button>
      </div>
    </div>
  );
}

// ========================================
// 5. STICKY CTA BAR (MOBILE)
// ========================================

// Note: This component displays as a static preview in the design system.
// In production, add `position: fixed; bottom: 0; left: 0; right: 0; z-index: 50;`
// to make it actually sticky to the bottom of the viewport.

export function StickyMobileCTABar() {
  return (
    <div 
      className="w-full p-4 flex items-center gap-4"
      style={{ 
        backgroundColor: '#FFFFFF',
        borderTop: '2px solid #DADADA',
        boxShadow: '0 -4px 12px rgba(0,0,0,0.08)'
      }}
    >
      <div className="flex-1">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>
          Daily Ritual Serum
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '600' }}>
          $68
        </p>
      </div>
      <Button 
        size="lg"
        className="flex-1"
        style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}
      >
        Begin Ritual
      </Button>
    </div>
  );
}

// ========================================
// 6. PRODUCT TRUST STRIP
// ========================================

export function ProductTrustStrip() {
  const badges = [
    { icon: <Shield className="w-5 h-5" />, label: 'Studio Safe' },
    { icon: <Leaf className="w-5 h-5" />, label: 'Clean Formula' },
    { icon: <HOLYSparkle size={20} strokeWidth={1.5} />, label: 'Cruelty Free' },
    { icon: <Package className="w-5 h-5" />, label: 'Recyclable' }
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge, idx) => (
        <div 
          key={idx}
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
        >
          <div style={{ color: '#5E6458' }}>
            {badge.icon}
          </div>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ========================================
// 7. PRODUCT REVIEWS MODULE
// ========================================

export function ProductReviewsModule() {
  const [expanded, setExpanded] = useState(false);

  const reviews = [
    {
      author: 'Sarah M.',
      rating: 5,
      date: 'Nov 2025',
      text: 'This serum transformed my evening ritual. The texture is luxurious and my skin has never felt so nourished.',
      verified: true
    },
    {
      author: 'Alex K.',
      rating: 5,
      date: 'Oct 2025',
      text: 'Worth every penny. I can genuinely feel the intention behind this product.',
      verified: true
    }
  ];

  return (
    <div 
      className="p-6 rounded-2xl space-y-6"
      style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
    >
      {/* Rating Summary */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map(star => (
              <Star 
                key={star}
                className="w-5 h-5"
                fill="#1A1A1A"
                style={{ color: '#1A1A1A' }}
              />
            ))}
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
            5.0
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>
            (247 reviews)
          </p>
        </div>
      </div>

      {/* Review Snippets */}
      <div className="space-y-4">
        {reviews.slice(0, expanded ? reviews.length : 1).map((review, idx) => (
          <div 
            key={idx}
            className="p-4 rounded-xl"
            style={{ backgroundColor: '#F9F6F0' }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                  {review.author}
                </p>
                {review.verified && (
                  <span 
                    className="px-2 py-0.5 rounded-full flex items-center gap-1"
                    style={{ backgroundColor: '#D9C4BB', fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A' }}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                {review.date}
              </p>
            </div>
            <div className="flex mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4" fill="#1A1A1A" style={{ color: '#1A1A1A' }} />
              ))}
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
              {review.text}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-3 rounded-lg flex items-center justify-center gap-2"
        style={{ border: '2px solid #DADADA', backgroundColor: '#FFFFFF' }}
      >
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
          {expanded ? 'Show Less' : 'Read All Reviews'}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} style={{ color: '#1A1A1A' }} />
      </button>
    </div>
  );
}

// ========================================
// 8. LIMITED RELEASE COUNTDOWN
// ========================================

export function LimitedReleaseCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 32, seconds: 18 });

  return (
    <div 
      className="p-6 rounded-2xl text-center"
      style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}
    >
      <div className="flex items-center justify-center gap-2 mb-3">
        <Clock className="w-5 h-5" style={{ color: '#D9C4BB' }} />
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Limited Release
        </p>
      </div>
      
      <h3 className="mb-4" style={{ fontFamily: 'Garamond, serif', fontSize: '20px' }}>
        Ritual ends in:
      </h3>

      <div className="flex justify-center gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div 
              className="w-16 h-16 rounded-xl flex items-center justify-center mb-2"
              style={{ backgroundColor: 'rgba(217, 196, 187, 0.15)', border: '2px solid #D9C4BB' }}
            >
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '600' }}>
                {String(value).padStart(2, '0')}
              </span>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', opacity: 0.7, textTransform: 'capitalize' }}>
              {unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========================================
// 9. ADD TO RITUAL UPSELL
// ========================================

export function AddToRitualUpsell() {
  const recommendations = [
    {
      name: 'Ocean Tonic',
      price: 48,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
      badge: 'Pairs Well'
    },
    {
      name: 'Renewal Cream',
      price: 82,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400',
      badge: 'Complete Set'
    },
    {
      name: 'Cleansing Oil',
      price: 40,
      image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400',
      badge: 'Top Seller'
    }
  ];

  return (
    <div className="space-y-4">
      <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
        Complete Your Ritual
      </h3>
      
      <div className="grid md:grid-cols-3 gap-4">
        {recommendations.map((product, idx) => (
          <div 
            key={idx}
            className="p-4 rounded-xl space-y-3"
            style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
          >
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden" style={{ backgroundColor: '#F9F6F0' }}>
                <ImageWithFallback 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="absolute top-2 right-2 px-2 py-1 rounded-full"
                style={{ backgroundColor: '#D9C4BB', fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600' }}
              >
                {product.badge}
              </div>
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                {product.name}
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
                ${product.price}
              </p>
            </div>
            <button
              className="w-full py-2 rounded-lg"
              style={{ 
                border: '2px solid #1A1A1A', 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '13px', 
                color: '#1A1A1A', 
                fontWeight: '500',
                textAlign: 'center'
              }}
            >
              + Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========================================
// 10. MATERIAL FINISH SELECTOR
// ========================================

export function MaterialFinishSelector() {
  const [selected, setSelected] = useState('matte');
  
  const finishes = [
    { 
      id: 'matte', 
      name: 'Matte Finish', 
      description: 'Smooth, velvety texture',
      icon: '○'
    },
    { 
      id: 'foil', 
      name: 'Foil Emboss', 
      description: 'Metallic sacred mark',
      icon: '◊'
    },
    { 
      id: 'uv', 
      name: 'UV Gloss', 
      description: 'Raised glossy accent',
      icon: '◉'
    }
  ];

  return (
    <div className="space-y-3">
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
        Label Finish
      </p>
      
      <div className="grid grid-cols-3 gap-3">
        {finishes.map(finish => (
          <button
            key={finish.id}
            onClick={() => setSelected(finish.id)}
            className="p-4 rounded-xl text-center transition-all group"
            style={{
              border: '2px solid',
              borderColor: selected === finish.id ? '#1A1A1A' : '#DADADA',
              backgroundColor: selected === finish.id ? '#F9F6F0' : '#FFFFFF'
            }}
          >
            <div 
              className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center"
              style={{ backgroundColor: selected === finish.id ? '#D9C4BB' : '#F9F6F0' }}
            >
              <span style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A' }}>
                {finish.icon}
              </span>
            </div>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '13px', 
              color: '#1A1A1A',
              fontWeight: selected === finish.id ? '600' : '400',
              marginBottom: '4px'
            }}>
              {finish.name}
            </p>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '11px', 
              color: '#1A1A1A',
              opacity: 0.6
            }}>
              {finish.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ========================================
// 11. PACKAGING REVEAL MODULE
// ========================================

export function PackagingRevealModule() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div 
      className="p-6 rounded-2xl relative overflow-hidden cursor-pointer group"
      style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
    >
      <div className="flex items-center gap-4 mb-4">
        <Package className="w-6 h-6" style={{ color: '#5E6458' }} />
        <div>
          <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A' }}>
            Ritual Packaging
          </h4>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
            Hover to reveal details
          </p>
        </div>
      </div>

      <div 
        className="transition-all duration-500"
        style={{
          maxHeight: revealed ? '500px' : '0',
          opacity: revealed ? 1 : 0,
          overflow: 'hidden'
        }}
      >
        <div className="space-y-3 pt-4" style={{ borderTop: '2px solid #DADADA' }}>
          <div className="flex items-start gap-3">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#D9C4BB' }}
            >
              <span style={{ fontSize: '16px' }}>♻️</span>
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                100% Recyclable Glass
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                Violet glass preserves potency and can be infinitely recycled
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#D9C4BB' }}
            >
              <HOLYLeaf size={16} color="#1A1A1A" />
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                FSC-Certified Carton
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                Sustainably sourced outer packaging with soy-based inks
              </p>
            </div>
          </div>
        </div>
      </div>

      {!revealed && (
        <div 
          className="absolute bottom-4 right-4 p-2 rounded-full"
          style={{ backgroundColor: 'rgba(26, 26, 26, 0.06)' }}
        >
          <Eye className="w-4 h-4" style={{ color: '#1A1A1A' }} />
        </div>
      )}
    </div>
  );
}

// ========================================
// 12. PRODUCT VIDEO PLAYER
// ========================================

export function ProductVideoPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div 
      className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
      style={{ backgroundColor: '#1A1A1A' }}
      onClick={() => setPlaying(!playing)}
    >
      <ImageWithFallback 
        src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200"
        alt="Product video thumbnail"
        className="w-full h-full object-cover"
      />
      
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity group-hover:bg-opacity-40">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
            style={{ backgroundColor: 'rgba(249, 246, 240, 0.95)' }}
          >
            <Play className="w-8 h-8 ml-1" style={{ color: '#1A1A1A' }} />
          </div>
        </div>
      )}

      <div 
        className="absolute bottom-4 left-4 px-3 py-2 rounded-lg"
        style={{ backgroundColor: 'rgba(26, 26, 26, 0.8)' }}
      >
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0' }}>
          The Sacred Ritual · 2:14
        </p>
      </div>
    </div>
  );
}

// ========================================
// 13. STUDIO-ONLY ACCESS MODULE
// ========================================

export function StudioOnlyAccessModule() {
  return (
    <div 
      className="p-6 rounded-2xl relative overflow-hidden"
      style={{ 
        backgroundColor: '#1A1A1A',
        backgroundImage: 'linear-gradient(135deg, rgba(217, 196, 187, 0.1) 0%, rgba(94, 100, 88, 0.1) 100%)'
      }}
    >
      <div className="flex items-start gap-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: 'rgba(217, 196, 187, 0.2)' }}
        >
          <Lock className="w-6 h-6" style={{ color: '#D9C4BB' }} />
        </div>
        
        <div className="flex-1">
          <h4 className="mb-2" style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#F9F6F0' }}>
            Studio Partner Access
          </h4>
          <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.8, lineHeight: '160%' }}>
            This ritual is exclusively available to verified studio partners and wholesale accounts.
          </p>
          
          <Button 
            variant="outline"
            style={{ 
              borderColor: '#D9C4BB', 
              color: '#F9F6F0',
              backgroundColor: 'transparent'
            }}
          >
            Request Studio Access
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// 14. RELIC BADGE (LOW STOCK / SELLING FAST)
// ========================================

export function RelicBadgeLowStock() {
  return (
    <div 
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
      style={{ 
        backgroundColor: 'rgba(156, 136, 122, 0.15)',
        border: '2px solid #9C887A'
      }}
    >
      <TrendingUp className="w-4 h-4" style={{ color: '#9C887A' }} />
      <span style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize: '13px', 
        color: '#1A1A1A',
        fontWeight: '600'
      }}>
        Only 7 left in stock
      </span>
    </div>
  );
}

export function RelicBadgeSellingFast() {
  return (
    <div 
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full animate-pulse"
      style={{ 
        backgroundColor: 'rgba(217, 196, 187, 0.2)',
        border: '2px solid #D9C4BB'
      }}
    >
      <HOLYSparkle size={16} color="#D9C4BB" strokeWidth={1.5} />
      <span style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize: '13px', 
        color: '#1A1A1A',
        fontWeight: '600'
      }}>
        Selling Fast — 32 ordered today
      </span>
    </div>
  );
}

// ========================================
// 15. SUBSCRIPTION MODULE
// ========================================

export function SubscriptionModule() {
  const [subscribed, setSubscribed] = useState(false);
  const [frequency, setFrequency] = useState('30');

  const frequencies = [
    { value: '30', label: 'Every 30 Days', discount: 15 },
    { value: '60', label: 'Every 60 Days', discount: 10 },
    { value: '90', label: 'Every 90 Days', discount: 5 }
  ];

  const regularPrice = 68;
  const discount = frequencies.find(f => f.value === frequency)?.discount || 0;
  const subscriptionPrice = regularPrice * (1 - discount / 100);

  return (
    <div 
      className="p-6 rounded-2xl space-y-4"
      style={{ 
        backgroundColor: subscribed ? 'rgba(217, 196, 187, 0.15)' : '#FFFFFF',
        border: '2px solid',
        borderColor: subscribed ? '#D9C4BB' : '#DADADA'
      }}
    >
      {/* Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSubscribed(!subscribed)}
            className="relative w-12 h-6 rounded-full transition-colors"
            style={{ backgroundColor: subscribed ? '#1A1A1A' : '#DADADA' }}
          >
            <div 
              className="absolute top-0.5 w-5 h-5 rounded-full transition-transform bg-white"
              style={{ 
                transform: subscribed ? 'translateX(26px)' : 'translateX(2px)'
              }}
            />
          </button>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
              Auto-Ritual™ (Save {discount}%)
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Delivered automatically • Cancel anytime
            </p>
          </div>
        </div>
        
        {subscribed && (
          <div 
            className="px-3 py-1.5 rounded-full"
            style={{ backgroundColor: '#9C887A' }}
          >
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', fontWeight: '600' }}>
              Save {discount}%
            </span>
          </div>
        )}
      </div>

      {/* Frequency Selector */}
      {subscribed && (
        <div className="space-y-3 pt-4" style={{ borderTop: '2px solid #DADADA' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
            Delivery Frequency
          </p>
          <div className="space-y-2">
            {frequencies.map(freq => (
              <button
                key={freq.value}
                onClick={() => setFrequency(freq.value)}
                className="w-full p-3 rounded-lg text-left transition-all flex items-center justify-between"
                style={{
                  border: '2px solid',
                  borderColor: frequency === freq.value ? '#1A1A1A' : '#DADADA',
                  backgroundColor: frequency === freq.value ? '#FFFFFF' : 'transparent'
                }}
              >
                <span style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  color: '#1A1A1A',
                  fontWeight: frequency === freq.value ? '600' : '400'
                }}>
                  {freq.label}
                </span>
                <span style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '13px', 
                  color: '#9C887A',
                  fontWeight: '600'
                }}>
                  -{freq.discount}%
                </span>
              </button>
            ))}
          </div>

          {/* Price Comparison */}
          <div 
            className="p-4 rounded-xl"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div className="flex items-center justify-between mb-2">
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>
                One-time purchase
              </span>
              <span style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px', 
                color: '#1A1A1A',
                opacity: 0.6,
                textDecoration: 'line-through'
              }}>
                ${regularPrice}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
                Auto-Ritual™ price
              </span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '600' }}>
                ${subscriptionPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
