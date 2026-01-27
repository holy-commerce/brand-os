import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card, CardContent } from '../ui/card';
import { Heart, Droplet, Sparkles } from 'lucide-react';

// Ritual Aftercare™ - Clinical meets ceremonial
// Palette: Fogstone Blue (#AAB5B2), Smoky Umber (#9C887A)

export function RitualAftercare_HeroSection() {
  return (
    <div 
      className="relative overflow-hidden rounded-2xl"
      style={{ backgroundColor: '#AAB5B2' }}
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Content */}
        <div className="p-16 flex flex-col justify-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, letterSpacing: '2px', textTransform: 'uppercase' }}>
                Ritual Aftercare™
              </p>
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', lineHeight: '120%' }}>
                Sacred Healing & Post-Ritual Care
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%', maxWidth: '480px' }}>
                Clinical-grade formulations meet ceremonial intention. Designed for the sacred pause after tattooing, piercing, and transformative body rituals.
              </p>
            </div>
            <Button 
              style={{ 
                backgroundColor: '#9C887A',
                color: '#F9F6F0',
                borderRadius: '8px',
                padding: '16px 32px',
                border: 'none'
              }}
            >
              Shop Aftercare
            </Button>
          </div>
        </div>
        {/* Image */}
        <div className="aspect-square md:aspect-auto">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800"
            alt="Aftercare products"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export function RitualAftercare_ProductCard() {
  return (
    <Card style={{ borderColor: '#AAB5B2', borderWidth: '2px', overflow: 'hidden' }}>
      <div className="aspect-square" style={{ backgroundColor: '#AAB5B2' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600"
          alt="Healing Salve"
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-2 flex-1">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Ritual Aftercare™
            </p>
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', lineHeight: '120%' }}>
              Healing Salve
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Ocean minerals & botanical extracts for gentle, sacred healing
            </p>
          </div>
          <Droplet size={20} style={{ color: '#AAB5B2' }} />
        </div>
        <div className="flex items-center justify-between pt-2">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '500' }}>
            $42
          </p>
          <Button 
            style={{ 
              backgroundColor: '#9C887A',
              color: '#F9F6F0',
              borderRadius: '8px',
              padding: '10px 20px',
              border: 'none'
            }}
          >
            Begin Your Ritual
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function RitualAftercare_ContentBlock() {
  return (
    <div 
      className="p-12 rounded-2xl"
      style={{ backgroundColor: '#F9F6F0', border: '2px solid #AAB5B2' }}
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-center justify-center mb-6">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#AAB5B2' }}
          >
            <Heart size={28} style={{ color: '#1A1A1A' }} />
          </div>
        </div>
        <div className="text-center space-y-4">
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%' }}>
            The Healing Process
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.8, lineHeight: '170%' }}>
            Your body holds wisdom. Trust the process of integration. Our aftercare ritual supports the sacred transformation 
            you've chosen, honoring both the clinical needs of healing tissue and the ceremonial nature of body modification.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 pt-6">
          <div className="text-center space-y-2">
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#9C887A' }}>
              2-3x
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
              Daily application
            </p>
          </div>
          <div className="text-center space-y-2">
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#9C887A' }}>
              2-4 weeks
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
              Typical healing time
            </p>
          </div>
          <div className="text-center space-y-2">
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#9C887A' }}>
              100%
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
              Plant-based formula
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RitualAftercare_Footer() {
  return (
    <footer 
      className="p-12 rounded-2xl"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#F9F6F0', lineHeight: '120%' }}>
              Ritual Aftercare™
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#AAB5B2', lineHeight: '160%' }}>
              Clinical healing meets sacred intention
            </p>
          </div>
          
          {/* Links */}
          <div className="space-y-3">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9C887A', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Shop
            </p>
            <ul className="space-y-2">
              {['Healing Salves', 'Cleansing Mist', 'Recovery Kits', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.8 }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-3">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9C887A', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Learn
            </p>
            <ul className="space-y-2">
              {['Healing Guide', 'FAQs', 'Ingredient Library', 'Studio Partners'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.8 }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-3">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9C887A', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Connect
            </p>
            <ul className="space-y-2">
              {['Studio Locator', 'Contact', 'Wholesale', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.8 }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div 
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(170, 181, 178, 0.3)' }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#AAB5B2' }}>
            © 2025 HØLY · Ritual Aftercare™
          </p>
          <div className="flex gap-6">
            {['Terms', 'Privacy', 'Accessibility'].map((item) => (
              <a key={item} href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#AAB5B2' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
