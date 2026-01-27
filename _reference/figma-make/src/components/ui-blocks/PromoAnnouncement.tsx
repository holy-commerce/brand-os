import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HOLYGift } from '../icons/HOLYIcons';

export function HomeHeroSection() {
  return (
    <div 
      className="w-full rounded-3xl overflow-hidden"
      style={{ backgroundColor: '#D9C4BB' }}
    >
      <div className="grid md:grid-cols-2 gap-12 p-12 md:p-16 items-center">
        <div className="space-y-6">
          <Badge style={{ backgroundColor: '#9C887A', color: '#F9F6F0' }}>
            New Collection
          </Badge>
          <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', lineHeight: '110%' }}>
            Begin Your Sacred Morning Ritual
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', opacity: 0.8, lineHeight: '150%' }}>
            Awaken to intention with our curated collection of botanical wellness essentials
          </p>
          <div className="flex gap-4">
            <Button size="lg" style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>
              Shop Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" style={{ borderColor: '#1A1A1A', color: '#1A1A1A' }}>
              Learn More
            </Button>
          </div>
        </div>
        <div className="aspect-square rounded-2xl overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1626897885636-dd68020cc52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHByb2R1Y3QlMjBtaW5pbWFsfGVufDF8fHx8MTc2MDU1NTkyMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero Product"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export function FullWidthPromoBanner() {
  return (
    <div 
      className="w-full p-6 text-center"
      style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}
    >
      <div className="flex items-center justify-center gap-3">
        <Sparkles className="w-4 h-4" />
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
          Free shipping on orders over $100 · Carbon-neutral delivery
        </p>
        <Sparkles className="w-4 h-4" />
      </div>
    </div>
  );
}

export function RitualDropTeaserCard() {
  return (
    <div 
      className="rounded-2xl overflow-hidden max-w-lg"
      style={{ backgroundColor: '#AAB5B2' }}
    >
      <div className="aspect-video" style={{ backgroundColor: '#FFFFFF' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1665763630810-e6251bdd392d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHNlcnVtJTIwd2hpdGV8ZW58MXx8fHwxNzYwNjY0OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Ritual Drop"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8 space-y-4">
        <Badge style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>
          Coming Soon
        </Badge>
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A' }}>
          Winter Solstice Collection
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.8, lineHeight: '150%' }}>
          A limited ritual for the longest night. Join the waitlist for early access.
        </p>
        <Button style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>
          Notify Me
        </Button>
      </div>
    </div>
  );
}

export function StudioPartnerPromoSection() {
  return (
    <div 
      className="w-full rounded-3xl overflow-hidden"
      style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}
    >
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-12 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full" style={{ backgroundColor: '#D9C4BB' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
              Studio Partner
            </span>
          </div>
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', color: '#1A1A1A', lineHeight: '120%' }}>
            Exclusive with Alo Yoga
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
            Movement meets ritual. Discover our co-created collection designed for the mindful athlete.
          </p>
          <Button style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>
            Explore Partnership
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
        <div className="aspect-square" style={{ backgroundColor: '#DADADA' }}>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1592967833769-60d8693bbf91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHJpdHVhbCUyMGNhbmRsZXxlbnwxfHx8fDE3NjA2NjQ5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Studio Partner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export function AnnouncementBarDismissible() {
  return (
    <div 
      className="w-full p-4 flex items-center justify-between"
      style={{ backgroundColor: '#9C887A', color: '#F9F6F0' }}
    >
      <div className="flex-1 text-center">
        <p className="flex items-center justify-center gap-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '500' }}>
          <HOLYGift size={16} color="#1A1A1A" />
          <span>Give the gift of ritual · Holiday kits now available</span>
        </p>
      </div>
      <button 
        className="p-2 hover:opacity-70 transition-opacity"
        style={{ color: '#1A1A1A' }}
      >
        ×
      </button>
    </div>
  );
}

export function SeasonalHeroMinimal() {
  return (
    <div className="text-center max-w-4xl mx-auto space-y-8 py-16">
      <div style={{ fontSize: '48px', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(-3px)' }}>ø</div>
      <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '56px', color: '#1A1A1A', lineHeight: '110%' }}>
        Sacred Space, Sacred Self
      </h1>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', maxWidth: '600px', margin: '0 auto' }}>
        Discover wellness rituals rooted in botanical wisdom and designed for modern living
      </p>
      <div className="flex gap-4 justify-center">
        <Button size="lg" style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>
          Begin Your Journey
        </Button>
        <Button size="lg" variant="outline" style={{ borderColor: '#DADADA', color: '#1A1A1A' }}>
          Our Philosophy
        </Button>
      </div>
    </div>
  );
}
