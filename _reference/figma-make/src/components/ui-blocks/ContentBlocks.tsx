import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { HOLYLeaf, HOLYRecycle, HOLYBeaker, HOLYSparkle } from '../icons/HOLYIcons';

export function HeadlineSubheadlineCTA() {
  return (
    <div className="text-center max-w-2xl mx-auto space-y-6">
      <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '40px', color: '#1A1A1A', lineHeight: '120%' }}>
        Your Daily Ritual Begins Here
      </h2>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
        Thoughtfully crafted wellness essentials for modern living
      </p>
      <Button style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>
        Explore Collection
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
}

export function HeadlineParagraphLink() {
  return (
    <div className="max-w-2xl space-y-4">
      <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '130%' }}>
        Rooted in Ritual
      </h3>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
        Every product is designed to honor the sacred pause—a moment to slow down, breathe deep, and reconnect with yourself. Our formulations combine ancient botanical wisdom with modern science, creating rituals that nourish body and spirit.
      </p>
      <a 
        href="#" 
        style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '16px', 
          color: '#1A1A1A', 
          fontWeight: '500',
          textDecoration: 'underline',
          textUnderlineOffset: '4px'
        }}
      >
        Learn Our Story
      </a>
    </div>
  );
}

export function RitualQuoteBlock() {
  return (
    <div 
      className="p-12 rounded-2xl text-center max-w-3xl mx-auto" 
      style={{ backgroundColor: '#D9C4BB' }}
    >
      <div className="mb-6" style={{ fontSize: '32px', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(-3px)' }}>ø</div>
      <blockquote style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '140%', fontStyle: 'italic' }}>
        "In the space between breath and intention, we find our sacred self."
      </blockquote>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, marginTop: '24px' }}>
        — HØLY Philosophy
      </p>
    </div>
  );
}

export function TwoColumnInfoSection() {
  return (
    <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-4">
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A' }}>
          Conscious Formulation
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
          We believe in transparency. Every ingredient is chosen for its proven efficacy and sustainable sourcing. No fillers, no compromises—just pure, intentional care.
        </p>
      </div>
      <div className="space-y-4">
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A' }}>
          Sustainable Practice
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
          From glass packaging to carbon-neutral shipping, we honor the earth in every step. Our commitment extends beyond the bottle to the planet we all share.
        </p>
      </div>
    </div>
  );
}

export function IconLabelGrid() {
  const features = [
    { icon: <HOLYLeaf size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />, label: 'Plant-Based', description: 'Botanical actives only' },
    { icon: <HOLYRecycle size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />, label: 'Refillable', description: 'Reduce, reuse, restore' },
    { icon: <HOLYBeaker size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />, label: 'Clean Science', description: 'Clinically tested formulas' },
    { icon: <HOLYSparkle size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />, label: 'Ritual Ready', description: 'Designed for daily practice' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
      {features.map((feature, index) => (
        <div key={index} className="text-center space-y-3">
          <div className="flex justify-center">{feature.icon}</div>
          <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
            {feature.label}
          </h4>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function RitualQuoteBlockDark() {
  return (
    <div 
      className="p-12 rounded-2xl text-center max-w-3xl mx-auto" 
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="mb-6" style={{ fontSize: '32px', color: '#F9F6F0', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(-3px)' }}>ø</div>
      <blockquote style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#F9F6F0', lineHeight: '140%', fontStyle: 'italic' }}>
        "Wellness is not a destination. It is the sacred journey we walk each day."
      </blockquote>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.7, marginTop: '24px' }}>
        — HØLY Philosophy
      </p>
    </div>
  );
}
