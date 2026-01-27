import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card, CardContent } from '../ui/card';
import { Sparkles, Sun, Moon } from 'lucide-react';

// Ritual Renewal™ - Refined, luminous, alchemical
// Palette: Veil Clay (#D9C4BB), Ivory (#F9F6F0)

export function RitualRenewal_HeroSection() {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 rounded-2xl opacity-20"
        style={{ 
          background: 'linear-gradient(135deg, #D9C4BB 0%, #F9F6F0 100%)'
        }}
      />
      <div 
        className="relative p-20 rounded-2xl text-center"
        style={{ backgroundColor: 'rgba(217, 196, 187, 0.3)' }}
      >
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center mb-6">
            <Sparkles size={40} style={{ color: '#D9C4BB' }} />
          </div>
          <div className="space-y-6">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Ritual Renewal™
            </p>
            <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '56px', color: '#1A1A1A', lineHeight: '110%' }}>
              Luminous Skin Alchemy
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', opacity: 0.8, lineHeight: '170%', maxWidth: '560px', margin: '0 auto' }}>
              Transform your daily skincare into a moment of reverence. Refined formulations that honor the ritual of self-care through alchemical botanicals and light-catching radiance.
            </p>
          </div>
          <div className="flex gap-4 justify-center pt-4">
            <Button 
              style={{ 
                backgroundColor: '#1A1A1A',
                color: '#F9F6F0',
                borderRadius: '999px',
                padding: '16px 40px',
                border: 'none'
              }}
            >
              Discover the Collection
            </Button>
            <Button 
              style={{ 
                backgroundColor: 'transparent',
                color: '#1A1A1A',
                borderRadius: '999px',
                padding: '16px 40px',
                border: '2px solid #D9C4BB'
              }}
            >
              Take the Skin Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RitualRenewal_ProductKit() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Image */}
      <div className="aspect-square rounded-2xl overflow-hidden" style={{ backgroundColor: '#D9C4BB' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800"
          alt="Renewal Kit"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="space-y-8">
        <div className="space-y-4">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Ritual Renewal™ Kit
          </p>
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '40px', color: '#1A1A1A', lineHeight: '115%' }}>
            The Luminous Trio
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.7, lineHeight: '165%' }}>
            A complete morning and evening ritual. Cleanse with intention, treat with reverence, seal with light.
          </p>
        </div>
        
        {/* Kit Contents */}
        <div className="space-y-4">
          <div 
            className="p-6 rounded-xl"
            style={{ backgroundColor: '#F9F6F0', border: '1px solid #D9C4BB' }}
          >
            <div className="flex items-start gap-4">
              <Sun size={24} style={{ color: '#D9C4BB', marginTop: '2px' }} />
              <div className="flex-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  Morning Radiance Serum
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, marginTop: '4px' }}>
                  Vitamin C + Sacred Rose
                </p>
              </div>
            </div>
          </div>
          
          <div 
            className="p-6 rounded-xl"
            style={{ backgroundColor: '#F9F6F0', border: '1px solid #D9C4BB' }}
          >
            <div className="flex items-start gap-4">
              <Moon size={24} style={{ color: '#D9C4BB', marginTop: '2px' }} />
              <div className="flex-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  Evening Restoration Oil
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, marginTop: '4px' }}>
                  Retinol + Jasmine
                </p>
              </div>
            </div>
          </div>
          
          <div 
            className="p-6 rounded-xl"
            style={{ backgroundColor: '#F9F6F0', border: '1px solid #D9C4BB' }}
          >
            <div className="flex items-start gap-4">
              <Sparkles size={24} style={{ color: '#D9C4BB', marginTop: '2px' }} />
              <div className="flex-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  Alchemical Mist
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, marginTop: '4px' }}>
                  Rose Hydrosol + Minerals
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4">
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>
              Complete Kit
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '28px', color: '#1A1A1A', fontWeight: '500' }}>
              $198
            </p>
          </div>
          <Button 
            style={{ 
              backgroundColor: '#D9C4BB',
              color: '#1A1A1A',
              borderRadius: '999px',
              padding: '16px 32px',
              border: 'none'
            }}
          >
            Begin Your Ritual
          </Button>
        </div>
      </div>
    </div>
  );
}

export function RitualRenewal_QuoteBlock() {
  return (
    <div 
      className="p-16 rounded-2xl text-center"
      style={{ backgroundColor: '#D9C4BB' }}
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex justify-center">
          <div style={{ fontFamily: 'Garamond, serif', fontSize: '80px', color: '#1A1A1A', opacity: 0.2, lineHeight: '0.8' }}>
            "
          </div>
        </div>
        <blockquote style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '150%', fontStyle: 'italic' }}>
          Renewal is not about perfection. It's about presence—showing up for yourself with reverence, day after sacred day.
        </blockquote>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6, letterSpacing: '1px' }}>
          — HØLY PHILOSOPHY
        </p>
      </div>
    </div>
  );
}

export function RitualRenewal_ContentCTA() {
  return (
    <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden" style={{ border: '2px solid #D9C4BB' }}>
      {/* Image Side */}
      <div className="aspect-square md:aspect-auto" style={{ backgroundColor: '#F9F6F0' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=700"
          alt="Skin consultation"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Side */}
      <div 
        className="p-12 flex flex-col justify-center"
        style={{ backgroundColor: '#F9F6F0' }}
      >
        <div className="space-y-6">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Personalized Care
          </p>
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', color: '#1A1A1A', lineHeight: '120%' }}>
            Your Unique Renewal Path
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.7, lineHeight: '170%' }}>
            Every skin journey is sacred and singular. Take our guided quiz to discover which Ritual Renewal™ formulations will serve your specific needs and intentions.
          </p>
          <div className="pt-4">
            <Button 
              style={{ 
                backgroundColor: '#D9C4BB',
                color: '#1A1A1A',
                borderRadius: '8px',
                padding: '14px 28px',
                border: 'none'
              }}
            >
              Start Your Ritual Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
