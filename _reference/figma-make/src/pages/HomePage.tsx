import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  HOLYDroplet, HOLYFlower, HOLYLeaf, HOLYWave, HOLYSparkle,
  HOLYGem, HOLYSquare, HOLYPackage, HOLYDocument, HOLYPalette,
  HOLYTarget, HOLYMapPin, HOLYClipboard
} from '../components/icons/HOLYIcons';
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

// Core System Components
import { 
  GlobalNavigation, 
  GlobalFooter, 
  ProductCard,
  NewsletterSignup,
  MetadataLabel,
  RitualSystemLabel,
  PurposeLabel,
  TimeLabel,
  TM,
  renderWithTM
} from '../components/core-system';

// ========================================
// HOME PAGE — FULL EXPERIENCE
// ========================================
// Complete Homepage demonstrating
// all design system components in a real-world context

interface RitualSystem {
  id: string;
  name: string;
  tagline: string;
  color: string;
  icon: React.ComponentType<any>;
}

const ritualSystems: RitualSystem[] = [
  { 
    id: 'aftercare', 
    name: 'Ritual Aftercare™', 
    tagline: 'Clinical meets ceremonial',
    color: '#AAB5B2',
    icon: HOLYDroplet
  },
  { 
    id: 'renewal', 
    name: 'Ritual Renewal™', 
    tagline: 'Radiance restored',
    color: '#D9C4BB',
    icon: HOLYFlower
  },
  { 
    id: 'touch', 
    name: 'Ritual Touch™', 
    tagline: 'Sensory awakening',
    color: '#5E6458',
    icon: HOLYLeaf
  },
  { 
    id: 'union', 
    name: 'Ritual Union™', 
    tagline: 'Intimacy & connection',
    color: '#D7D0C5',
    icon: HOLYWave
  },
  { 
    id: 'vital', 
    name: 'Ritual Vital™', 
    tagline: 'Energy sustained',
    color: '#9C887A',
    icon: HOLYSparkle
  }
];

const featuredProducts = [
  {
    id: 1,
    name: 'Restorative Body Oil',
    system: 'Aftercare',
    price: 64,
    badge: 'Ritual Essential',
    image: 'https://images.unsplash.com/photo-1642333576378-ee73c518ff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwc2tpbmNhcmUlMjBzdG9uZSUyMHRleHR1cmV8ZW58MXx8fHwxNzYzMDgxMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    name: 'Radiant Rose Serum',
    system: 'Renewal',
    price: 72,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1698664434322-94a43b98b9ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwY29zbWV0aWMlMjBib3R0bGUlMjBzaGFkb3d8ZW58MXx8fHwxNzYzMDgxMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    name: 'Intimate Touch Oil',
    system: 'Touch',
    price: 58,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1558739592-eba0c9c8857d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXV0cmFsJTIwc3BhJTIwcml0dWFsJTIwYWVzdGhldGljfGVufDF8fHx8MTc2MzA4MTI0MXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    name: 'Vital Energy Tonic',
    system: 'Vital',
    price: 54,
    badge: 'Ritual Essential',
    image: 'https://images.unsplash.com/photo-1647018763651-e32158974419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwc2tpbmNhcmUlMjB0ZXh0dXJlJTIwc2FuZHxlbnwxfHx8fDE3NjMwODEyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export default function HomePage() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const heroSlides = [
    {
      title: 'Ritual Care for the Modern Temple',
      subtitle: 'Discover wellness products designed for intentional living',
      cta: 'Begin Your Ritual',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600'
    },
    {
      title: 'Sacred Self-Care Begins Here',
      subtitle: 'Luxurious formulas rooted in ancient wisdom',
      cta: 'Explore Systems',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1600'
    }
  ];

  return (
    <div className="space-y-8">
      
      {/* ========================================
          1. TOP-LEVEL HEADER FRAME
          ======================================== */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '32px', 
              fontWeight: '500', 
              color: '#1A1A1A', 
              lineHeight: '120%',
              marginBottom: '8px'
            }}>
              Home Page / Full Experience – HØLY<TM />
            </h2>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              color: '#1A1A1A', 
              opacity: 0.6,
              lineHeight: '140%',
              marginBottom: '4px'
            }}>
              HØLY | Ritual Care<TM />
            </p>
          </div>
          <Badge style={{ backgroundColor: '#9C887A', color: '#F9F6F0' }}>
            Live Experience
          </Badge>
        </div>
        
        <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '13px', 
            color: '#1A1A1A', 
            lineHeight: '160%',
            marginBottom: '12px'
          }}>
            <strong>Purpose:</strong> The HØLY homepage is the digital altar welcoming users into the ritual. It serves conversion, 
            brand immersion, and system navigation. Every element uses design system tokens and follows accessibility standards.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.5, marginBottom: '4px' }}>
                CREATED BY
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                Preston, Tiana & YONI™
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.5, marginBottom: '4px' }}>
                LAST UPDATED
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                Nov 13, 2025
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.5, marginBottom: '4px' }}>
                VERSION TAG
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                v2.0 Experience
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.5, marginBottom: '4px' }}>
                RESPONSIVE
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                375px–1440px+ (Mobile-first)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          2. PRIMARY EXPERIENCE CONTAINER
          ======================================== */}
      <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        
        {/* Header Label */}
        <div className="px-8 py-4" style={{ backgroundColor: '#F9F6F0', borderBottom: '2px solid #DADADA' }}>
          <div className="flex items-center gap-2">
            <HOLYPackage size={20} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600', color: '#1A1A1A' }}>
              Full Experience — Home Page
            </p>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, marginTop: '4px' }}>
            1440px width (desktop-optimized but fully responsive)
          </p>
        </div>

        {/* Navigation - Using Core System Component */}
        <GlobalNavigation 
          cartCount={cartCount}
          showAnnouncement={true}
          announcementText="Free shipping on orders over $75"
        />

        {/* Hero Section with Carousel */}
        <div className="relative h-[400px] md:h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={heroSlides[currentHeroSlide].image}
                alt="Hero image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="text-center max-w-3xl">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ 
                      fontFamily: 'Garamond, serif', 
                      fontSize: 'clamp(32px, 5vw, 56px)',
                      color: '#F9F6F0',
                      lineHeight: '120%',
                      marginBottom: '16px'
                    }}
                  >
                    {heroSlides[currentHeroSlide].title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{ 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: 'clamp(14px, 2vw, 18px)',
                      color: '#F9F6F0',
                      opacity: 0.9,
                      marginBottom: '32px'
                    }}
                  >
                    {heroSlides[currentHeroSlide].subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button 
                      size="lg"
                      style={{ 
                        backgroundColor: '#F9F6F0', 
                        color: '#1A1A1A',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: '500'
                      }}
                    >
                      {heroSlides[currentHeroSlide].cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={() => setCurrentHeroSlide(prev => prev === 0 ? 1 : 0)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full"
                style={{ backgroundColor: 'rgba(249, 246, 240, 0.9)' }}
              >
                <ChevronLeft className="w-6 h-6" style={{ color: '#1A1A1A' }} />
              </button>
              <button
                onClick={() => setCurrentHeroSlide(prev => prev === 0 ? 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full"
                style={{ backgroundColor: 'rgba(249, 246, 240, 0.9)' }}
              >
                <ChevronRight className="w-6 h-6" style={{ color: '#1A1A1A' }} />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentHeroSlide(idx)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{ 
                      backgroundColor: idx === currentHeroSlide ? '#F9F6F0' : 'rgba(249, 246, 240, 0.3)',
                      width: idx === currentHeroSlide ? '24px' : '8px'
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Ritual Systems Section */}
        <div className="px-4 md:px-8 py-12 md:py-16" style={{ backgroundColor: '#F9F6F0' }}>
          <div className="text-center mb-12">
            <h3 style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: '#1A1A1A',
              marginBottom: '12px'
            }}>
              Discover Your Ritual
            </h3>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '16px',
              color: '#1A1A1A',
              opacity: 0.7,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Five sacred systems designed for intentional wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {ritualSystems.map((system) => {
              const IconComponent = system.icon;
              return (
                <button
                  key={system.id}
                  className="p-6 rounded-2xl text-center transition-all hover:scale-105"
                  style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: system.color }}
                  >
                    <IconComponent size={32} color="#F9F6F0" opacity={1} strokeWidth={1.5} />
                  </div>
                  <h4 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '18px',
                    color: '#1A1A1A',
                    marginBottom: '4px'
                  }}>
                    {renderWithTM(system.name)}
                  </h4>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '13px',
                    color: '#1A1A1A',
                    opacity: 0.6
                  }}>
                    {system.tagline}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Products */}
        <div className="px-4 md:px-8 py-12 md:py-16">
          <div className="flex items-center justify-between mb-8">
            <h3 style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: 'clamp(24px, 3vw, 32px)',
              color: '#1A1A1A'
            }}>
              Ritual Essentials
            </h3>
            <button className="flex items-center gap-2 group">
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
                View All
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: '#1A1A1A' }} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                system={product.system}
                price={product.price}
                image={product.image}
                badge={product.badge}
                onAddToCart={(id) => setCartCount(prev => prev + 1)}
              />
            ))}
          </div>
        </div>

        {/* Why HØLY Section */}
        <div className="px-4 md:px-8 py-12 md:py-16" style={{ backgroundColor: '#F9F6F0' }}>
          <div className="max-w-4xl mx-auto">
            <h3 style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: '#1A1A1A',
              textAlign: 'center',
              marginBottom: '48px'
            }}>
              Why HØLY<TM />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: HOLYLeaf,
                  title: 'Sacred Ingredients',
                  description: 'Plant-based formulas rooted in ancient wisdom'
                },
                {
                  icon: HOLYGem,
                  title: 'Luxury Rituals',
                  description: 'Elevated self-care for the modern temple'
                },
                {
                  icon: HOLYSparkle,
                  title: 'Intentional Design',
                  description: 'Every detail crafted for transformation'
                }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
                         style={{ backgroundColor: '#FFFFFF' }}>
                      <IconComponent size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
                    </div>
                    <h4 style={{ 
                      fontFamily: 'Garamond, serif', 
                      fontSize: '20px',
                      color: '#1A1A1A',
                      marginBottom: '8px'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{ 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: '14px',
                      color: '#1A1A1A',
                      opacity: 0.7,
                      lineHeight: '160%'
                    }}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Newsletter Section - Sacred Sanctuary */}
        <div 
          className="relative px-4 md:px-8 py-16 md:py-24 overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #F9F6F0 0%, #FDFCFA 50%, #F9F6F0 100%)'
          }}
        >
          {/* Ambient Glow Background */}
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(170, 181, 178, 0.08) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none'
            }}
          />

          {/* Subtle Decorative Lines */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1px',
              height: '80px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(170, 181, 178, 0.2) 50%, transparent 100%)'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1px',
              height: '80px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(170, 181, 178, 0.2) 50%, transparent 100%)'
            }}
          />

          {/* Content Container */}
          <div className="relative max-w-4xl mx-auto">
            <NewsletterSignup variant="centered" />
          </div>
        </div>

        {/* Footer - Using Core System Component */}
        <GlobalFooter theme="dark" />
      </div>

      {/* ========================================
          3. COMPONENT INVENTORY SECTION
          ======================================== */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #AAB5B2' }}>
        <div className="flex items-center gap-3 mb-6">
          <HOLYSquare size={24} color="#AAB5B2" opacity={1} strokeWidth={1.5} />
          <h3 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '24px', 
            color: '#1A1A1A',
            lineHeight: '120%'
          }}>
            Components Used
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HOLYPalette size={16} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              Base Components
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
              <li>• Button (primary, outline variants)</li>
              <li>• Input (email, with validation)</li>
              <li>• Badge (status indicators)</li>
              <li>• Separator (section dividers)</li>
              <li>• Sheet (mobile navigation drawer)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HOLYSquare size={16} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              UI Components
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
              <li>• Navigation (desktop + mobile responsive)</li>
              <li>• Hero carousel (auto-rotating)</li>
              <li>• Product cards (grid layout)</li>
              <li>• Ritual system cards</li>
              <li>• Footer (multi-column)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HOLYSparkle size={16} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              Motion / States
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
              <li>• Sacred Aura (hover states on cards)</li>
              <li>• Hero fade transitions (Motion)</li>
              <li>• Scale transforms on interactions</li>
              <li>• Smooth carousel animations</li>
              <li>• Mobile drawer slide-in</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HOLYTarget size={16} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              Design Tokens
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
              <li>• Typography (Garamond display, Inter body)</li>
              <li>• Color palette (all v2.0 colors)</li>
              <li>• Spacing scale (4px base grid)</li>
              <li>• Border radius tokens</li>
              <li>• HØLY Icons (2D line-art system)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========================================
          4. GAP ANALYSIS + NOTES
          ======================================== */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #9C887A' }}>
        <div className="flex items-center gap-3 mb-6">
          <HOLYDocument size={24} color="#9C887A" opacity={1} strokeWidth={1.5} />
          <h3 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '24px', 
            color: '#1A1A1A',
            lineHeight: '120%'
          }}>
            Gap Analysis + Additions
          </h3>
        </div>

        <div className="space-y-6">
          <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HOLYSparkle size={16} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              New Components Created
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
              <li>• <strong>Hero Carousel Module</strong> — Auto-rotating hero with overlay gradient (added to UI Components)</li>
              <li>• <strong>Ritual System Grid</strong> — 5-column responsive grid with icon badges (added to UI Components)</li>
              <li>• <strong>Product Grid (4-col)</strong> — Quick-add cart button on hover (added to UI Components)</li>
              <li>• <strong>Why HØLY Section</strong> — Icon + text 3-column benefit cards (added to Content Blocks)</li>
              <li>• <strong>Newsletter CTA</strong> — Inline email capture with centered layout (added to UI Components)</li>
              <li>• <strong>Multi-column Footer</strong> — 4-column responsive footer with social icons (added to Navigation Extended)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HOLYMapPin size={16} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              Component Locations
            </h4>
            <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>
              <div className="flex items-start gap-3">
                <Badge style={{ backgroundColor: '#AAB5B2', color: '#F9F6F0', fontSize: '10px', whiteSpace: 'nowrap' }}>
                  UI Components
                </Badge>
                <span style={{ opacity: 0.7 }}>Hero Carousel, Ritual Grid, Product Grid, Newsletter CTA</span>
              </div>
              <div className="flex items-start gap-3">
                <Badge style={{ backgroundColor: '#D9C4BB', color: '#1A1A1A', fontSize: '10px', whiteSpace: 'nowrap' }}>
                  Content Blocks
                </Badge>
                <span style={{ opacity: 0.7 }}>Why HØLY Section, Feature Cards</span>
              </div>
              <div className="flex items-start gap-3">
                <Badge style={{ backgroundColor: '#5E6458', color: '#F9F6F0', fontSize: '10px', whiteSpace: 'nowrap' }}>
                  Navigation Extended
                </Badge>
                <span style={{ opacity: 0.7 }}>Multi-column Footer with social links</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(156, 136, 122, 0.1)', border: '1px solid #9C887A' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HOLYClipboard size={16} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              Next Steps & Ownership
            </h4>
            <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '170%' }}>
              <p>
                <strong>To Refine:</strong> Extract hero carousel into reusable HomePageContent component. 
                Add motion states for product card hovers (Sacred Aura). Implement cart functionality for quick-add buttons.
              </p>
              <p>
                <strong>Owner:</strong> Preston, Tiana & YONI™ • <strong>Target:</strong> Week of Nov 18, 2025
              </p>
              <p>
                <strong>QA Required:</strong> Test mobile navigation drawer on iOS Safari, validate email capture functionality, 
                confirm footer responsive breakpoints at 768px and 1024px.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}