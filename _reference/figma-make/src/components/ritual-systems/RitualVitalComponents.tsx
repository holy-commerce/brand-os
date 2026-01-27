import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card, CardContent } from '../ui/card';
import { Activity, Battery, Wind, Zap } from 'lucide-react';

// Ritual Vital™ - Energized, primal, resilient
// Palette: Smoky Umber (#9C887A), Deep Green

export function RitualVital_ComparisonTable() {
  return (
    <div 
      className="p-12 rounded-2xl"
      style={{ backgroundColor: '#F9F6F0', border: '2px solid #9C887A' }}
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Ritual Vital™
          </p>
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '40px', color: '#1A1A1A', lineHeight: '120%' }}>
            Choose Your Vitality Path
          </h2>
        </div>
        
        {/* Comparison Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Morning Vital */}
          <div 
            className="p-8 rounded-xl space-y-6"
            style={{ backgroundColor: '#FFFFFF', border: '2px solid #9C887A' }}
          >
            <div className="space-y-3">
              <Zap size={32} style={{ color: '#9C887A' }} />
              <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', lineHeight: '120%' }}>
                Morning Vital
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                Energy activator for sustained focus
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid #DADADA' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                  Adaptogens
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                  Ashwagandha
                </span>
              </div>
              <div className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid #DADADA' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                  Stimulants
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                  Green Tea
                </span>
              </div>
              <div className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid #DADADA' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                  B-Complex
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                  ✓
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                  Best for
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                  AM routine
                </span>
              </div>
            </div>
            
            <div className="pt-4">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '500', marginBottom: '12px' }}>
                $52
              </p>
              <Button 
                style={{ 
                  backgroundColor: '#9C887A',
                  color: '#F9F6F0',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  width: '100%',
                  border: 'none'
                }}
              >
                Select
              </Button>
            </div>
          </div>
          
          {/* Endurance Vital */}
          <div 
            className="p-8 rounded-xl space-y-6 relative"
            style={{ backgroundColor: '#9C887A', border: '2px solid #1A1A1A' }}
          >
            <div 
              className="absolute top-4 right-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: '#1A1A1A' }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#9C887A', fontWeight: '500' }}>
                POPULAR
              </p>
            </div>
            
            <div className="space-y-3">
              <Battery size={32} style={{ color: '#F9F6F0' }} />
              <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#F9F6F0', lineHeight: '120%' }}>
                Endurance Vital
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.9, lineHeight: '160%' }}>
                All-day stamina & resilience
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid rgba(26, 26, 26, 0.2)' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8 }}>
                  Adaptogens
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                  Rhodiola
                </span>
              </div>
              <div className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid rgba(26, 26, 26, 0.2)' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8 }}>
                  Stimulants
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                  Cordyceps
                </span>
              </div>
              <div className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid rgba(26, 26, 26, 0.2)' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8 }}>
                  Electrolytes
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                  ✓
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8 }}>
                  Best for
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                  Athletes
                </span>
              </div>
            </div>
            
            <div className="pt-4">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '500', marginBottom: '12px' }}>
                $68
              </p>
              <Button 
                style={{ 
                  backgroundColor: '#1A1A1A',
                  color: '#9C887A',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  width: '100%',
                  border: 'none'
                }}
              >
                Select
              </Button>
            </div>
          </div>
          
          {/* Recovery Vital */}
          <div 
            className="p-8 rounded-xl space-y-6"
            style={{ backgroundColor: '#FFFFFF', border: '2px solid #9C887A' }}
          >
            <div className="space-y-3">
              <Wind size={32} style={{ color: '#9C887A' }} />
              <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', lineHeight: '120%' }}>
                Recovery Vital
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                Restoration & muscle support
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid #DADADA' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                  Adaptogens
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                  Reishi
                </span>
              </div>
              <div className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid #DADADA' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                  Magnesium
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                  ✓
                </span>
              </div>
              <div className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid #DADADA' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                  CBD
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                  Optional
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                  Best for
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                  PM routine
                </span>
              </div>
            </div>
            
            <div className="pt-4">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '500', marginBottom: '12px' }}>
                $58
              </p>
              <Button 
                style={{ 
                  backgroundColor: '#9C887A',
                  color: '#F9F6F0',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  width: '100%',
                  border: 'none'
                }}
              >
                Select
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RitualVital_LongevityMetricCard() {
  return (
    <Card style={{ borderColor: '#9C887A', borderWidth: '2px', overflow: 'hidden' }}>
      <div 
        className="p-8"
        style={{ 
          background: 'linear-gradient(135deg, #9C887A 0%, #F9F6F0 100%)'
        }}
      >
        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.7, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                Longevity Metrics
              </p>
              <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%' }}>
                Track Your Vitality
              </h3>
            </div>
            <Activity size={32} style={{ color: '#1A1A1A', opacity: 0.6 }} />
          </div>
          
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', opacity: 0.8, lineHeight: '165%' }}>
            Monitor key biomarkers of resilience with our companion app. HRV, sleep quality, energy patterns, and more.
          </p>
          
          {/* Metric Preview */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, marginBottom: '4px' }}>
                Energy Level
              </p>
              <p style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A' }}>
                8.2/10
              </p>
            </div>
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, marginBottom: '4px' }}>
                HRV Score
              </p>
              <p style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A' }}>
                68ms
              </p>
            </div>
          </div>
          
          <Button 
            style={{ 
              backgroundColor: '#1A1A1A',
              color: '#9C887A',
              borderRadius: '8px',
              padding: '12px 24px',
              width: '100%',
              border: 'none'
            }}
          >
            Download Vital App
          </Button>
        </div>
      </div>
    </Card>
  );
}

export function RitualVital_ProductPillPack() {
  return (
    <div 
      className="p-12 rounded-2xl"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="aspect-square rounded-2xl overflow-hidden">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700"
              alt="Supplement pills"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Zap size={36} style={{ color: '#9C887A' }} />
              <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', color: '#F9F6F0', lineHeight: '120%' }}>
                Daily Vital Pack
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#F9F6F0', opacity: 0.85, lineHeight: '170%' }}>
                30 individually wrapped daily packs. Each contains your personalized blend of adaptogens, vitamins, and functional mushrooms—no guesswork, just sustained vitality.
              </p>
            </div>
            
            {/* Features */}
            <div 
              className="p-6 rounded-xl space-y-3"
              style={{ backgroundColor: 'rgba(156, 136, 122, 0.15)', border: '1px solid rgba(156, 136, 122, 0.3)' }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#9C887A', fontWeight: '500' }}>
                WHAT'S INSIDE
              </p>
              <ul className="space-y-2">
                {[
                  '5 Adaptogenic compounds',
                  'Full B-Complex vitamins',
                  'Omega-3 DHA/EPA',
                  'Probiotic blend'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2"
                      style={{ backgroundColor: '#9C887A' }}
                    />
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.9 }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.6 }}>
                  30-Day Supply
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', color: '#F9F6F0', fontWeight: '500' }}>
                  $88
                </p>
              </div>
              <Button 
                style={{ 
                  backgroundColor: '#9C887A',
                  color: '#F9F6F0',
                  borderRadius: '8px',
                  padding: '14px 28px',
                  border: 'none'
                }}
              >
                Auto-Ritual™ — Save 15%
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RitualVital_BreathworkCTA() {
  return (
    <div 
      className="p-16 rounded-2xl relative overflow-hidden"
      style={{ backgroundColor: '#F9F6F0', border: '2px solid #9C887A' }}
    >
      {/* Decorative background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: 'radial-gradient(circle, #9C887A 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="relative max-w-3xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-4">
          <Wind size={48} style={{ color: '#9C887A' }} />
        </div>
        
        <div className="space-y-4">
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '40px', color: '#1A1A1A', lineHeight: '120%' }}>
            Breathwork for Vitality
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: '#1A1A1A', opacity: 0.8, lineHeight: '170%', maxWidth: '560px', margin: '0 auto' }}>
            Supplement smart, breathe intentionally. Access our library of energizing breathwork practices designed to amplify your Ritual Vital routine.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 py-8">
          <div className="space-y-2">
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#9C887A' }}>
              3-7 min
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Daily practice
            </p>
          </div>
          <div className="space-y-2">
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#9C887A' }}>
              20+
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              Guided sessions
            </p>
          </div>
          <div className="space-y-2">
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#9C887A' }}>
              Free
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
              With purchase
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            style={{ 
              backgroundColor: '#9C887A',
              color: '#F9F6F0',
              borderRadius: '999px',
              padding: '14px 32px',
              border: 'none'
            }}
          >
            Try a Free Session
          </Button>
          <Button 
            style={{ 
              backgroundColor: 'transparent',
              color: '#1A1A1A',
              borderRadius: '999px',
              padding: '14px 32px',
              border: '2px solid #9C887A'
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
