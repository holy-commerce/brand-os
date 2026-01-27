import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { MetadataLabel } from '../core-system/LabelSystem';
import type { MetadataType } from '../core-system/LabelSystem';
import { 
  HOLYDroplet, HOLYFlower, HOLYLeaf, HOLYWave, HOLYSparkle,
  HOLYCircle, HOLYTriangle, HOLYGem
} from '../icons/HOLYIcons';
import { 
  ArrowRight, ChevronLeft, ChevronRight, Check
} from 'lucide-react';

// ========================================
// HOMEPAGE CONTENT COMPONENTS
// ========================================

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
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400'
  },
  {
    id: 2,
    name: 'Radiant Rose Serum',
    system: 'Renewal',
    price: 72,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400'
  },
  {
    id: 3,
    name: 'Intimate Touch Oil',
    system: 'Touch',
    price: 58,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1556228578-dd339a5e1b3f?w=400'
  },
  {
    id: 4,
    name: 'Vital Energy Tonic',
    system: 'Vital',
    price: 54,
    badge: 'Ritual Essential',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400'
  }
];

const testimonials = [
  {
    id: 1,
    quote: "HØLY™ transformed my entire approach to self-care. These aren't just products—they're rituals.",
    author: "Sarah M.",
    location: "Los Angeles"
  },
  {
    id: 2,
    quote: "The Ritual Aftercare™ system is essential in my studio. My clients feel held and honored.",
    author: "Jordan K.",
    location: "Brooklyn"
  },
  {
    id: 3,
    quote: "I finally found intimate wellness that actually respects my body. The Touch™ ritual is sacred.",
    author: "Alex R.",
    location: "Portland"
  }
];

// MOBILE CONTENT
export function HomePageMobileContent() {
  const [currentSystemIndex, setCurrentSystemIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const nextSystem = () => {
    setCurrentSystemIndex((prev) => (prev + 1) % ritualSystems.length);
  };

  const prevSystem = () => {
    setCurrentSystemIndex((prev) => (prev - 1 + ritualSystems.length) % ritualSystems.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div style={{ backgroundColor: '#F9F6F0' }}>
      
      {/* Hero */}
      <section className="relative" style={{ minHeight: '500px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1723655369156-11e700eeb01f?w=800"
            alt="HØLY™ Ritual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ 
            background: 'linear-gradient(to bottom, rgba(26, 26, 26, 0.3), rgba(26, 26, 26, 0.6))'
          }} />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4" 
          style={{ minHeight: '500px' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '36px',
              color: '#F9F6F0',
              lineHeight: '110%',
              marginBottom: '12px',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.3)'
            }}>
              Your body is a temple.<br />Make it yours.
            </h1>
            
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px',
              color: '#F9F6F0',
              lineHeight: '160%',
              marginBottom: '24px',
              opacity: 0.95
            }}>
              Sacred intimate wellness rituals crafted for your body's wisdom.
            </p>

            <Button
              size="default"
              style={{
                backgroundColor: '#F9F6F0',
                color: '#1A1A1A',
                padding: '14px 28px',
                fontSize: '14px',
                fontWeight: '600'
              }}
            >
              Find Your Ritual <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Ritual Systems - Carousel */}
      <section style={{ padding: '40px 16px', backgroundColor: '#FFFFFF' }}>
        <div className="text-center mb-8">
          <h2 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '28px',
            color: '#1A1A1A',
            marginBottom: '8px'
          }}>
            Five Sacred Systems™
          </h2>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '13px',
            color: '#1A1A1A',
            opacity: 0.7
          }}>
            Each ritual designed for your body's unique needs
          </p>
        </div>

        <div className="relative">
          <motion.div
            key={currentSystemIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl text-center"
            style={{ 
              backgroundColor: ritualSystems[currentSystemIndex].color,
              minHeight: '240px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {(() => {
              const IconComponent = ritualSystems[currentSystemIndex].icon;
              return (
                <IconComponent 
                  size={40} 
                  color="#F9F6F0" 
                  opacity={1} 
                  strokeWidth={1.5}
                  style={{ marginBottom: '16px' }}
                />
              );
            })()}
            <h3 style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '24px',
              color: '#F9F6F0',
              marginBottom: '6px'
            }}>
              {ritualSystems[currentSystemIndex].name}
            </h3>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '13px',
              color: '#F9F6F0',
              opacity: 0.9
            }}>
              {ritualSystems[currentSystemIndex].tagline}
            </p>
          </motion.div>

          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={prevSystem}
              className="p-2 rounded-full"
              style={{ 
                backgroundColor: '#FFFFFF',
                border: '2px solid #DADADA'
              }}
            >
              <ChevronLeft className="w-5 h-5" style={{ color: '#1A1A1A' }} />
            </button>
            <button
              onClick={nextSystem}
              className="p-2 rounded-full"
              style={{ 
                backgroundColor: '#FFFFFF',
                border: '2px solid #DADADA'
              }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: '#1A1A1A' }} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '40px 16px', backgroundColor: '#F9F6F0' }}>
        <div className="text-center mb-8">
          <h2 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '28px',
            color: '#1A1A1A',
            marginBottom: '8px'
          }}>
            Ritual Essentials
          </h2>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '13px',
            color: '#1A1A1A',
            opacity: 0.7
          }}>
            Sacred formulations crafted for transformation
          </p>
        </div>

        <div className="space-y-4">
          {featuredProducts.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="rounded-2xl overflow-hidden"
              style={{ 
                backgroundColor: '#FFFFFF',
                border: '2px solid #DADADA'
              }}
            >
              <div className="relative" style={{ aspectRatio: '1/1' }}>
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <MetadataLabel 
                    type={product.badge as MetadataType} 
                    size="sm" 
                    showIcon={product.badge === 'New'} 
                  />
                </div>
              </div>

              <div className="p-4">
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '11px',
                  color: '#1A1A1A',
                  opacity: 0.6,
                  textTransform: 'uppercase',
                  marginBottom: '4px'
                }}>
                  {product.system}
                </p>
                <h3 style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '18px',
                  color: '#1A1A1A',
                  marginBottom: '6px'
                }}>
                  {product.name}
                </h3>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '16px',
                  color: '#1A1A1A',
                  marginBottom: '12px'
                }}>
                  ${product.price}
                </p>
                
                <Button
                  variant="outline"
                  className="w-full"
                  style={{
                    borderColor: '#1A1A1A',
                    color: '#1A1A1A'
                  }}
                >
                  Add to Ritual
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials */}
      <section style={{ padding: '40px 16px', backgroundColor: '#FFFFFF' }}>
        <div className="text-center mb-8">
          <h2 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '28px',
            color: '#1A1A1A'
          }}>
            What the initiated are saying
          </h2>
        </div>

        <div className="relative">
          <motion.div
            key={currentTestimonialIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <HOLYCircle 
              size={24} 
              color="#1A1A1A" 
              opacity={0.2} 
              strokeWidth={1.5}
              style={{ margin: '0 auto 16px' }}
            />
            
            <p style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '18px',
              color: '#1A1A1A',
              lineHeight: '150%',
              marginBottom: '16px',
              fontStyle: 'italic'
            }}>
              "{testimonials[currentTestimonialIndex].quote}"
            </p>
            
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '12px',
              color: '#1A1A1A',
              opacity: 0.7
            }}>
              {testimonials[currentTestimonialIndex].author} — {testimonials[currentTestimonialIndex].location}
            </p>
          </motion.div>

          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full"
              style={{ 
                backgroundColor: '#F9F6F0',
                border: '2px solid #DADADA'
              }}
            >
              <ChevronLeft className="w-4 h-4" style={{ color: '#1A1A1A' }} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full"
              style={{ 
                backgroundColor: '#F9F6F0',
                border: '2px solid #DADADA'
              }}
            >
              <ChevronRight className="w-4 h-4" style={{ color: '#1A1A1A' }} />
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section 
        style={{ 
          padding: '48px 16px',
          backgroundColor: '#5E6458',
          textAlign: 'center'
        }}
      >
        <HOLYTriangle 
          size={40} 
          color="#F9F6F0" 
          opacity={0.9} 
          strokeWidth={1.5}
          style={{ margin: '0 auto 16px' }}
        />
        
        <h2 style={{ 
          fontFamily: 'Garamond, serif', 
          fontSize: '32px',
          color: '#F9F6F0',
          marginBottom: '16px'
        }}>
          Your body holds sacred wisdom
        </h2>
        
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '14px',
          color: '#F9F6F0',
          lineHeight: '170%',
          opacity: 0.95
        }}>
          At HØLY™, we believe intimate wellness is a ritual—not a transaction.
        </p>
      </section>

      {/* Email Capture */}
      <section style={{ padding: '40px 16px', backgroundColor: '#F9F6F0', textAlign: 'center' }}>
        <HOLYGem 
          size={32} 
          color="#1A1A1A" 
          opacity={0.8} 
          strokeWidth={1.5}
          style={{ margin: '0 auto 12px' }}
        />
        
        <h2 style={{ 
          fontFamily: 'Garamond, serif', 
          fontSize: '28px',
          color: '#1A1A1A',
          marginBottom: '8px'
        }}>
          Join the Circle
        </h2>
        
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px',
          color: '#1A1A1A',
          opacity: 0.7,
          marginBottom: '20px'
        }}>
          Receive ritual guidance and sacred offerings.
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                fontSize: '14px',
                padding: '12px',
                border: '2px solid #DADADA',
                borderRadius: '8px'
              }}
            />
            <Button
              type="submit"
              style={{
                backgroundColor: '#1A1A1A',
                color: '#F9F6F0',
                padding: '12px'
              }}
            >
              Join the Circle
            </Button>
          </form>
        ) : (
          <div
            className="flex items-center justify-center gap-2 p-3 rounded-lg"
            style={{ 
              backgroundColor: '#5E6458',
              color: '#F9F6F0'
            }}
          >
            <Check className="w-4 h-4" />
            <span style={{ fontSize: '13px', fontWeight: '600' }}>
              Welcome to the Circle
            </span>
          </div>
        )}
      </section>

      {/* Pro Access */}
      <section style={{ padding: '40px 16px', backgroundColor: '#1A1A1A', textAlign: 'center' }}>
        <h2 style={{ 
          fontFamily: 'Garamond, serif', 
          fontSize: '28px',
          color: '#F9F6F0',
          marginBottom: '12px'
        }}>
          Professional Access
        </h2>
        
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '14px',
          color: '#F9F6F0',
          opacity: 0.85,
          marginBottom: '20px'
        }}>
          Studio-ready Ritual Care™ for professionals.
        </p>

        <Button
          size="default"
          style={{
            backgroundColor: '#F9F6F0',
            color: '#1A1A1A',
            padding: '12px 24px'
          }}
        >
          Apply for Pro Access <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </section>
    </div>
  );
}

// DESKTOP CONTENT
export function HomePageDesktopContent() {
  const [hoveredSystem, setHoveredSystem] = useState<string | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div style={{ backgroundColor: '#F9F6F0' }}>
      
      {/* Hero */}
      <section className="relative" style={{ minHeight: '700px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1723655369156-11e700eeb01f?w=1400"
            alt="HØLY™ Ritual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ 
            background: 'linear-gradient(to bottom, rgba(26, 26, 26, 0.3), rgba(26, 26, 26, 0.6))'
          }} />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-8" 
          style={{ minHeight: '700px' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '72px',
              color: '#F9F6F0',
              lineHeight: '110%',
              marginBottom: '16px',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.3)'
            }}>
              Your body is a temple.<br />Make it yours.
            </h1>
            
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '18px',
              color: '#F9F6F0',
              lineHeight: '160%',
              marginBottom: '32px',
              maxWidth: '600px',
              opacity: 0.95
            }}>
              Sacred intimate wellness rituals crafted for your body's wisdom.
              Clinical-grade botanicals meet ceremonial self-care.
            </p>

            <Button
              size="lg"
              style={{
                backgroundColor: '#F9F6F0',
                color: '#1A1A1A',
                padding: '18px 36px',
                fontSize: '16px',
                fontWeight: '600'
              }}
            >
              Find Your Ritual <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Ritual Systems - Grid */}
      <section style={{ padding: '80px 32px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="text-center mb-12">
            <h2 style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '48px',
              color: '#1A1A1A',
              marginBottom: '12px'
            }}>
              Five Sacred Systems™
            </h2>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '16px',
              color: '#1A1A1A',
              opacity: 0.7
            }}>
              Each ritual designed for your body's unique needs
            </p>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {ritualSystems.map((system) => {
              const IconComponent = system.icon;
              return (
                <motion.div
                  key={system.id}
                  onHoverStart={() => setHoveredSystem(system.id)}
                  onHoverEnd={() => setHoveredSystem(null)}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-6 rounded-2xl text-center cursor-pointer"
                  style={{ 
                    backgroundColor: system.color,
                    minHeight: '240px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <IconComponent 
                    size={40} 
                    color="#F9F6F0" 
                    opacity={1} 
                    strokeWidth={1.5}
                    style={{ marginBottom: '12px' }}
                  />
                  <h3 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '20px',
                    color: '#F9F6F0',
                    marginBottom: '6px'
                  }}>
                    {system.name}
                  </h3>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '13px',
                    color: '#F9F6F0',
                    opacity: 0.9
                  }}>
                    {system.tagline}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '80px 32px', backgroundColor: '#F9F6F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="text-center mb-12">
            <h2 style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '48px',
              color: '#1A1A1A',
              marginBottom: '12px'
            }}>
              Ritual Essentials
            </h2>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '16px',
              color: '#1A1A1A',
              opacity: 0.7
            }}>
              Sacred formulations crafted for transformation
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                whileHover={{ y: -6 }}
                className="rounded-2xl overflow-hidden"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #DADADA',
                  cursor: 'pointer'
                }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{ 
                      transform: hoveredProduct === product.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute top-3 right-3">
                    <MetadataLabel 
                      type={product.badge as MetadataType} 
                      size="sm" 
                      showIcon={product.badge === 'New'} 
                    />
                  </div>
                </div>

                <div className="p-4">
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '11px',
                    color: '#1A1A1A',
                    opacity: 0.6,
                    textTransform: 'uppercase',
                    marginBottom: '6px'
                  }}>
                    {product.system}
                  </p>
                  <h3 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '20px',
                    color: '#1A1A1A',
                    marginBottom: '8px'
                  }}>
                    {product.name}
                  </h3>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '16px',
                    color: '#1A1A1A',
                    marginBottom: '12px'
                  }}>
                    ${product.price}
                  </p>
                  
                  <Button
                    variant="outline"
                    className="w-full"
                    style={{
                      borderColor: '#1A1A1A',
                      color: hoveredProduct === product.id ? '#F9F6F0' : '#1A1A1A',
                      backgroundColor: hoveredProduct === product.id ? '#1A1A1A' : 'transparent',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Add to Ritual
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 32px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '48px',
            color: '#1A1A1A',
            marginBottom: '48px'
          }}>
            What the initiated are saying
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center">
                <p style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '16px',
                  color: '#1A1A1A',
                  lineHeight: '150%',
                  marginBottom: '16px',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.quote}"
                </p>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '13px',
                  color: '#1A1A1A',
                  opacity: 0.7
                }}>
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section 
        style={{ 
          padding: '120px 32px',
          backgroundColor: '#5E6458',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <HOLYTriangle 
            size={48} 
            color="#F9F6F0" 
            opacity={0.9} 
            strokeWidth={1.5}
            style={{ margin: '0 auto 24px' }}
          />
          
          <h2 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '56px',
            color: '#F9F6F0',
            marginBottom: '24px'
          }}>
            Your body holds sacred wisdom
          </h2>
          
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '18px',
            color: '#F9F6F0',
            lineHeight: '170%',
            opacity: 0.95,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            At HØLY™, we believe intimate wellness is a ritual—not a transaction. 
            Each formula honors your body's natural intelligence while delivering 
            clinical-grade results. Sacred meets scientific. Intentional meets effective.
          </p>
        </div>
      </section>

      {/* Email Capture */}
      <section style={{ padding: '80px 32px', backgroundColor: '#F9F6F0' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <HOLYGem 
            size={40} 
            color="#1A1A1A" 
            opacity={0.8} 
            strokeWidth={1.5}
            style={{ margin: '0 auto 16px' }}
          />
          
          <h2 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '40px',
            color: '#1A1A1A',
            marginBottom: '12px'
          }}>
            Join the Circle
          </h2>
          
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '16px',
            color: '#1A1A1A',
            opacity: 0.7,
            marginBottom: '32px'
          }}>
            Receive ritual guidance, early access, and sacred offerings.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  fontSize: '14px',
                  padding: '14px 16px',
                  border: '2px solid #DADADA',
                  borderRadius: '8px'
                }}
              />
              <Button
                type="submit"
                style={{
                  backgroundColor: '#1A1A1A',
                  color: '#F9F6F0',
                  padding: '14px 24px'
                }}
              >
                Join the Circle
              </Button>
            </form>
          ) : (
            <div
              className="flex items-center justify-center gap-2 p-4 rounded-lg"
              style={{ 
                backgroundColor: '#5E6458',
                color: '#F9F6F0'
              }}
            >
              <Check className="w-5 h-5" />
              <span style={{ fontSize: '14px', fontWeight: '600' }}>
                Welcome to the Circle
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Pro Access */}
      <section style={{ padding: '80px 32px', backgroundColor: '#1A1A1A' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '48px',
            color: '#F9F6F0',
            marginBottom: '16px'
          }}>
            Professional Access
          </h2>
          
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '18px',
            color: '#F9F6F0',
            opacity: 0.85,
            marginBottom: '32px'
          }}>
            Studio-ready Ritual Care™ for piercers, tattoo artists, and wellness professionals.
            Bulk ordering, practitioner resources, and sacred aftercare protocols.
          </p>

          <Button
            size="lg"
            style={{
              backgroundColor: '#F9F6F0',
              color: '#1A1A1A',
              padding: '18px 36px',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            Apply for Pro Access <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
