import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card, CardContent } from '../ui/card';
import { Heart, Flame, Feather } from 'lucide-react';

// Ritual Union™ - Erotic, playful, healing
// Palette: Veil Clay (#D9C4BB), Deep Shadow

export function RitualUnion_HeroSection() {
  return (
    <div 
      className="rounded-2xl overflow-hidden"
      style={{ backgroundColor: '#D9C4BB' }}
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image Carousel Preview */}
        <div className="aspect-square md:aspect-auto relative">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1519735777090-ec0ef4ec1e90?w=800"
            alt="Intimacy products"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(217, 196, 187, 0.3) 100%)' }}
          />
        </div>
        
        {/* Content */}
        <div className="p-16 flex flex-col justify-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, letterSpacing: '2px', textTransform: 'uppercase' }}>
                Ritual Union™
              </p>
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', lineHeight: '115%' }}>
                Pleasure as Sacred Practice
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: '#1A1A1A', opacity: 0.8, lineHeight: '170%' }}>
                Intimacy essentials that honor pleasure, connection, and the playful exploration of self and other. Created with reverence for all bodies and all expressions of love.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                style={{ 
                  backgroundColor: '#1A1A1A',
                  color: '#F9F6F0',
                  borderRadius: '999px',
                  padding: '16px 32px',
                  border: 'none'
                }}
              >
                Shop Union
              </Button>
              <Button 
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#1A1A1A',
                  borderRadius: '999px',
                  padding: '16px 32px',
                  border: '2px solid #1A1A1A'
                }}
              >
                Read Our Philosophy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RitualUnion_CarouselPromo() {
  const products = [
    {
      name: 'Sacred Lubricant',
      description: 'pH-balanced, body-safe intimacy oil',
      price: '$32',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400'
    },
    {
      name: 'Touch Awakening Balm',
      description: 'Warming sensation for exploration',
      price: '$28',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400'
    },
    {
      name: 'Union Ritual Kit',
      description: 'Complete intimacy essentials set',
      price: '$78',
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '40px', color: '#1A1A1A', lineHeight: '120%' }}>
          Essentials for Connection
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.7, lineHeight: '165%' }}>
          Body-safe, pleasure-forward formulations made with organic ingredients and intentional design
        </p>
      </div>
      
      {/* Product Carousel */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card 
            key={index}
            style={{ borderColor: '#D9C4BB', borderWidth: '2px', overflow: 'hidden' }}
          >
            <div className="aspect-square" style={{ backgroundColor: '#F9F6F0' }}>
              <ImageWithFallback 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 space-y-3">
              <div className="space-y-2">
                <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', lineHeight: '120%' }}>
                  {product.name}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                  {product.description}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '500' }}>
                  {product.price}
                </p>
                <Button 
                  style={{ 
                    backgroundColor: '#D9C4BB',
                    color: '#1A1A1A',
                    borderRadius: '999px',
                    padding: '10px 20px',
                    border: 'none'
                  }}
                >
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function RitualUnion_IntimacyFeatureCard() {
  return (
    <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden" style={{ border: '2px solid #D9C4BB' }}>
      {/* Content Side */}
      <div 
        className="p-12 flex flex-col justify-center order-2 md:order-1"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <div className="space-y-6">
          <Flame size={36} style={{ color: '#D9C4BB' }} />
          <div className="space-y-4">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#D9C4BB', opacity: 0.8, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Education + Empowerment
            </p>
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', color: '#F9F6F0', lineHeight: '120%' }}>
              Pleasure is Your Birthright
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#F9F6F0', opacity: 0.85, lineHeight: '170%' }}>
              We believe pleasure literacy is part of holistic wellness. Explore our educational resources on consent, communication, and cultivating intimacy that honors all parties.
            </p>
          </div>
          
          <div className="space-y-3 pt-4">
            {[
              'Body-safe ingredients only',
              'Inclusive design for all bodies',
              'Sustainably sourced materials',
              'Discreet, beautiful packaging'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Heart size={16} style={{ color: '#D9C4BB' }} />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.9 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
          
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
              Explore Resources
            </Button>
          </div>
        </div>
      </div>
      
      {/* Image Side */}
      <div className="aspect-square md:aspect-auto order-1 md:order-2" style={{ backgroundColor: '#D9C4BB' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=700"
          alt="Intimate moment"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export function RitualUnion_AffirmationBlock() {
  const affirmations = [
    {
      icon: <Heart size={24} />,
      text: 'My pleasure matters',
      color: '#D9C4BB'
    },
    {
      icon: <Feather size={24} />,
      text: 'I honor my boundaries',
      color: '#D9C4BB'
    },
    {
      icon: <Flame size={24} />,
      text: 'I explore with curiosity',
      color: '#D9C4BB'
    }
  ];

  return (
    <div 
      className="p-16 rounded-2xl"
      style={{ backgroundColor: '#F9F6F0', border: '2px solid #D9C4BB' }}
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', color: '#1A1A1A', lineHeight: '120%' }}>
            Affirmations for Intimacy
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.7, lineHeight: '165%' }}>
            Speak these intentions into your intimate practice
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {affirmations.map((affirmation, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl text-center space-y-4"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #D9C4BB' }}
            >
              <div className="flex justify-center" style={{ color: affirmation.color }}>
                {affirmation.icon}
              </div>
              <p style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', lineHeight: '140%', fontStyle: 'italic' }}>
                "{affirmation.text}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-6">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6, lineHeight: '160%' }}>
            Download our complete Intimacy Affirmations Guide
          </p>
          <a 
            href="#" 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              color: '#1A1A1A', 
              textDecoration: 'underline',
              marginTop: '8px',
              display: 'inline-block'
            }}
          >
            Get the PDF (Free) →
          </a>
        </div>
      </div>
    </div>
  );
}
