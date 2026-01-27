import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card, CardContent } from '../ui/card';
import { Hand, Heart, Waves } from 'lucide-react';

// Ritual Touch™ - Sensual, soft, connective
// Palette: Warm neutrals, Temple Black (#1A1A1A)

export function RitualTouch_FullWidthBanner() {
  return (
    <div 
      className="relative rounded-2xl overflow-hidden"
      style={{ minHeight: '480px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1400"
          alt="Touch therapy"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(26, 26, 26, 0.5)' }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-16 flex items-center min-h-[480px]">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', opacity: 0.8, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Ritual Touch™
            </p>
            <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '52px', color: '#F9F6F0', lineHeight: '115%' }}>
              The Sacred Art of Connection
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#F9F6F0', opacity: 0.9, lineHeight: '170%', maxWidth: '540px' }}>
              Professional-grade oils and balms designed for bodywork practitioners and those who honor touch as a healing modality.
            </p>
          </div>
          <Button 
            style={{ 
              backgroundColor: '#F9F6F0',
              color: '#1A1A1A',
              borderRadius: '8px',
              padding: '16px 36px',
              border: 'none'
            }}
          >
            Explore Touch Essentials
          </Button>
        </div>
      </div>
    </div>
  );
}

export function RitualTouch_ContentStack() {
  return (
    <div className="grid md:grid-cols-5 gap-8 items-center">
      {/* Image - takes 3 columns */}
      <div className="md:col-span-3 aspect-[4/3] rounded-2xl overflow-hidden">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=900"
          alt="Massage therapy"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Quote + Content - takes 2 columns */}
      <div className="md:col-span-2 space-y-8">
        <div className="space-y-4">
          <Hand size={32} style={{ color: '#1A1A1A', opacity: 0.7 }} />
          <blockquote style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '140%', fontStyle: 'italic' }}>
            "Touch is the first language we learn and the last we forget."
          </blockquote>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>
            — RITUAL TOUCH™ ETHOS
          </p>
        </div>
        
        <div 
          className="p-6 rounded-xl space-y-3"
          style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
            For Practitioners
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
            Our Touch line is formulated with long glide times, non-comedogenic bases, and subtle aromatics that won't overwhelm sensitive clients.
          </p>
          <a 
            href="#" 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              color: '#1A1A1A', 
              textDecoration: 'underline',
              display: 'inline-block',
              marginTop: '8px'
            }}
          >
            Professional Program →
          </a>
        </div>
      </div>
    </div>
  );
}

export function RitualTouch_ProductHighlight() {
  return (
    <div 
      className="p-12 rounded-2xl"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="order-2 md:order-1">
            <div 
              className="aspect-square rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#F9F6F0' }}
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600"
                alt="Professional massage oil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-4">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#F9F6F0', opacity: 0.6, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                Professional Grade
              </p>
              <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '40px', color: '#F9F6F0', lineHeight: '120%' }}>
                Sacred Body Oil
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#F9F6F0', opacity: 0.8, lineHeight: '170%' }}>
                Our signature blend for bodywork practitioners. Jojoba and fractionated coconut oil base with hints of sandalwood and cedarwood. Absorbs slowly for extended massage sessions.
              </p>
            </div>
            
            {/* Features */}
            <div className="space-y-3 pt-4">
              {[
                'Extended glide time (60+ minutes)',
                'Unscented or lightly scented options',
                'Non-staining, washes clean',
                'Available in 8oz, 16oz, and gallon'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div 
                    className="w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: '#F9F6F0', opacity: 0.6 }}
                  />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.8 }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.6 }}>
                  Starting at
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', color: '#F9F6F0', fontWeight: '500' }}>
                  $38
                </p>
              </div>
              <Button 
                style={{ 
                  backgroundColor: '#F9F6F0',
                  color: '#1A1A1A',
                  borderRadius: '8px',
                  padding: '14px 28px',
                  border: 'none'
                }}
              >
                Select Size
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RitualTouch_StudioPartnerSection() {
  return (
    <div 
      className="p-12 rounded-2xl"
      style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <Waves size={40} style={{ color: '#1A1A1A', opacity: 0.7, margin: '0 auto' }} />
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', color: '#1A1A1A', lineHeight: '120%' }}>
            Studio & Practitioner Partners
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.7, lineHeight: '170%', maxWidth: '600px', margin: '0 auto' }}>
            Join our community of bodywork professionals. Wholesale pricing, bulk ordering, and co-branded options available for studios and certified practitioners.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 py-8">
          <div className="space-y-2">
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A' }}>
              500+
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>
              Partner Studios
            </p>
          </div>
          <div className="space-y-2">
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A' }}>
              30%
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>
              Wholesale Discount
            </p>
          </div>
          <div className="space-y-2">
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A' }}>
              100%
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>
              Practitioner Approved
            </p>
          </div>
        </div>
        
        <Button 
          style={{ 
            backgroundColor: '#1A1A1A',
            color: '#F9F6F0',
            borderRadius: '8px',
            padding: '14px 32px',
            border: 'none'
          }}
        >
          Apply for Partnership
        </Button>
      </div>
    </div>
  );
}
