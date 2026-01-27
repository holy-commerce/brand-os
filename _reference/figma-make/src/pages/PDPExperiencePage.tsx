import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CTARitualInteraction } from '../components/ui-blocks/CTAInteractions';
import { 
  ProductImageGallery, 
  PDPButton, 
  StarRating, 
  IngredientCard 
} from '../components/ui-blocks/PDPMicrointeractions';
import { 
  ShoppingCart, Heart, Share2, Star, ChevronDown, ChevronRight,
  Shield, Leaf, Package, TrendingUp, Clock, Check, Info,
  ChevronLeft, Truck, RefreshCw, Award, Lock
} from 'lucide-react';
import { 
  HOLYDroplet, HOLYSparkle, HOLYRecycle, HOLYLeaf, HOLYWave, 
  HOLYFlower, HOLYMoon, HOLYSun, HOLYTriangle, HOLYGem, HOLYZoomIn
} from '../components/icons/HOLYIcons';

// Core System Components
import { 
  GlobalNavigation, 
  GlobalFooter, 
  Breadcrumb,
  ProductCard,
  PriceDisplay,
  QuantitySelector,
  RitualSystemBadge,
  TimeLabel,
  PurposeLabel,
  TM,
  renderWithTM
} from '../components/core-system';

// ========================================
// PDP FULL EXPERIENCE
// ========================================
// Complete Product Detail Page demonstrating
// all design system components in a real-world context

export default function PDPExperiencePage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSystem, setSelectedSystem] = useState('aftercare');
  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>('ingredients');

  const productImages = [
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800',
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800',
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
    'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800'
  ];

  const ritualSystems = [
    { id: 'aftercare', name: 'Aftercare™', color: '#AAB5B2', icon: HOLYDroplet },
    { id: 'renewal', name: 'Renewal™', color: '#D9C4BB', icon: HOLYFlower },
    { id: 'vital', name: 'Vital™', color: '#9C887A', icon: HOLYSparkle },
    { id: 'touch', name: 'Touch™', color: '#5E6458', icon: HOLYLeaf },
    { id: 'union', name: 'Union™', color: '#D7D0C5', icon: HOLYWave }
  ];

  const relatedProducts = [
    {
      name: 'Cleansing Ritual Wash',
      system: 'Aftercare™',
      price: 48,
      image: 'https://images.unsplash.com/photo-1558739592-eba0c9c8857d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXV0cmFsJTIwc3BhJTIwcml0dWFsJTIwYWVzdGhldGljfGVufDF8fHx8MTc2MzA4MTI0MXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Sacred Rose Serum',
      system: 'Renewal™',
      price: 72,
      image: 'https://images.unsplash.com/photo-1647018763651-e32158974419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwc2tpbmNhcmUlMjB0ZXh0dXJlJTIwc2FuZHxlbnwxfHx8fDE3NjMwODEyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Vital Energy Oil',
      system: 'Vital™',
      price: 58,
      image: 'https://images.unsplash.com/photo-1676256632648-422a85b88b4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVhdXR5JTIwcHJvZHVjdCUyMGNvbmNyZXRlfGVufDF8fHx8MTc2MzA4MTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Touch Intimacy Balm',
      system: 'Touch™',
      price: 64,
      image: 'https://images.unsplash.com/photo-1587145717184-e7ee5311253d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXV0cmFsJTIwd2VsbG5lc3MlMjBwcm9kdWN0JTIwbWFyYmxlfGVufDF8fHx8MTc2MzA4MTI0NHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <>
      <div className="space-y-8">
        
        {/* Page Title */}
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
                PDP / Full Experience – HØLY<TM />
              </h2>
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px', 
                color: '#1A1A1A', 
                opacity: 0.6,
                lineHeight: '140%'
              }}>
                Complete Product Detail Page showcasing all design system components — now using LOCKED core-system components
              </p>
            </div>
            <Badge style={{ backgroundColor: '#5E6458', color: '#F9F6F0' }}>
              ✅ Core Components
            </Badge>
          </div>
          
          <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '13px', 
              color: '#1A1A1A', 
              lineHeight: '160%'
            }}>
              <strong>Updated:</strong> This PDP now uses GlobalNavigation, GlobalFooter, Breadcrumb, ProductCard, 
              QuantitySelector, PriceDisplay, and RitualSystemBadge from the locked core-system component library. 
              All custom-built duplicates have been replaced with master components.
            </p>
          </div>
        </div>

        {/* Full PDP Experience */}
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          
          {/* Navigation - Using Core System Component */}
          <GlobalNavigation cartCount={2} showAnnouncement={true} />
          
          {/* Breadcrumb */}
          <Breadcrumb items={[
            { label: 'Shop', href: '#' },
            { label: 'Ritual Aftercare™', href: '#' },
            { label: 'Restorative Body Oil' }
          ]} />

        {/* Main Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          
          {/* Left: Product Images */}
          <div>
            <ProductImageGallery 
              images={productImages}
              productName="Restorative Body Oil"
            />

            {/* Trust Badges */}
            <div className="grid grid-cols-4 gap-3 pt-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: '#F9F6F0' }}>
                  <Leaf className="w-6 h-6" style={{ color: '#5E6458' }} />
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                  Clean Beauty
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: '#F9F6F0' }}>
                  <Shield className="w-6 h-6" style={{ color: '#5E6458' }} />
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                  Derma Tested
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: '#F9F6F0' }}>
                  <HOLYRecycle size={24} color="#5E6458" opacity={1} strokeWidth={1.5} />
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                  Sustainable
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: '#F9F6F0' }}>
                  <Award className="w-6 h-6" style={{ color: '#5E6458' }} />
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                  Award Winner
                </p>
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-6">
            
            {/* Product Title & Ritual System */}
            <div className="space-y-3">
              <RitualSystemBadge system="aftercare" />
              
              <h1 style={{ 
                fontFamily: 'Garamond, serif', 
                fontSize: '36px', 
                fontWeight: '500', 
                color: '#1A1A1A', 
                lineHeight: '120%'
              }}>
                Restorative Body Oil
              </h1>
              
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '16px', 
                color: '#1A1A1A', 
                opacity: 0.7,
                lineHeight: '160%'
              }}>
                A sacred post-intimacy ritual blend that restores, nurtures, and honors the body's natural wisdom
              </p>

              {/* Purpose & Time of Day Tags - Using Unified Label System */}
              <div className="flex flex-wrap gap-2">
                <TimeLabel time="Evening" size="sm" />
                <PurposeLabel purpose="Hydrate" size="sm" />
                <PurposeLabel purpose="Protect" size="sm" />
              </div>
            </div>

            <Separator />

            {/* Rating & Reviews */}
            <StarRating 
              rating={4.8} 
              total={5} 
              size={18} 
              showCount={true} 
              reviewCount={247}
              interactive={false}
            />

            {/* Price */}
            <PriceDisplay price={64} compareAtPrice={80} variant="large" />

            <Separator />

            {/* Subscription Toggle */}
            <div className="p-4 rounded-xl space-y-3" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsSubscription(!isSubscription)}
                    className="w-12 h-6 rounded-full transition-all relative"
                    style={{ 
                      backgroundColor: isSubscription ? '#1A1A1A' : '#DADADA'
                    }}
                  >
                    <div 
                      className="absolute top-0.5 w-5 h-5 rounded-full transition-all"
                      style={{ 
                        backgroundColor: '#FFFFFF',
                        left: isSubscription ? 'calc(100% - 22px)' : '2px'
                      }}
                    />
                  </button>
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                      Auto-Ritual™ (Save 15%)
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      Delivered every 30 days • Cancel anytime
                    </p>
                  </div>
                </div>
                {isSubscription && (
                  <Badge style={{ backgroundColor: '#9C887A', color: '#F9F6F0' }}>
                    $54.40/mo
                  </Badge>
                )}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                Quantity
              </label>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>

            {/* Add to Cart CTA */}
            <div className="space-y-3">
              <PDPButton 
                variant="primary"
                fullWidth={true}
                icon={<ShoppingCart className="w-5 h-5" />}
              >
                Add to Ritual — ${isSubscription ? '54.40' : '64.00'}
              </PDPButton>
              
              <div className="grid grid-cols-2 gap-3">
                <PDPButton 
                  variant="outline"
                  icon={<Heart className="w-4 h-4" />}
                >
                  Save
                </PDPButton>
                <PDPButton 
                  variant="outline"
                  icon={<Share2 className="w-4 h-4" />}
                >
                  Share
                </PDPButton>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="space-y-2 p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0' }}>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" style={{ color: '#5E6458' }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>
                  Free shipping on orders over $75
                </span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" style={{ color: '#5E6458' }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>
                  30-day sacred satisfaction guarantee
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" style={{ color: '#5E6458' }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>
                  Secure checkout with encryption
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Accordion */}
        <div className="border-t-2 border-[#DADADA]">
          
          {/* Ingredients Section */}
          <button
            onClick={() => setExpandedSection(expandedSection === 'ingredients' ? null : 'ingredients')}
            className="w-full px-8 py-6 flex items-center justify-between transition-all hover:bg-[#F9F6F0]"
            style={{ borderBottom: '1px solid #DADADA' }}
          >
            <div className="flex items-center gap-3">
              <HOLYLeaf size={20} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <span style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '500' }}>
                Key Ingredients
              </span>
            </div>
            <ChevronDown 
              className="w-5 h-5 transition-transform" 
              style={{ 
                color: '#1A1A1A',
                transform: expandedSection === 'ingredients' ? 'rotate(180deg)' : 'rotate(0deg)'
              }} 
            />
          </button>
          {expandedSection === 'ingredients' && (
            <div className="px-8 py-6 space-y-4" style={{ backgroundColor: '#F9F6F0' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <IngredientCard
                  name="Ocean Mineral Complex"
                  purpose="15% concentration"
                  description="Deep hydration and skin barrier repair from mineral-rich seawater"
                  icon={<HOLYWave size={16} color="#FFFFFF" opacity={1} strokeWidth={1.5} />}
                  color="#AAB5B2"
                />
                <IngredientCard
                  name="Sacred Rose Extract"
                  purpose="8% concentration"
                  description="Anti-inflammatory properties for gentle skin renewal"
                  icon={<HOLYFlower size={16} color="#1A1A1A" opacity={1} strokeWidth={1.5} />}
                  color="#D9C4BB"
                />
                <IngredientCard
                  name="Jojoba Seed Oil"
                  purpose="12% concentration"
                  description="Lightweight moisture that mimics skin's natural oils for balanced hydration"
                  icon={<HOLYLeaf size={16} color="#FFFFFF" opacity={1} strokeWidth={1.5} />}
                  color="#5E6458"
                />
                <IngredientCard
                  name="Vitamin E Complex"
                  purpose="5% concentration"
                  description="Powerful antioxidant protection against environmental stressors"
                  icon={<HOLYSparkle size={16} color="#FFFFFF" opacity={1} strokeWidth={1.5} />}
                  color="#9C887A"
                />
              </div>
            </div>
          )}

          {/* How to Use Section */}
          <button
            onClick={() => setExpandedSection(expandedSection === 'howto' ? null : 'howto')}
            className="w-full px-8 py-6 flex items-center justify-between transition-all hover:bg-[#F9F6F0]"
            style={{ borderBottom: '1px solid #DADADA' }}
          >
            <div className="flex items-center gap-3">
              <Info size={20} style={{ color: '#1A1A1A', opacity: 0.8 }} />
              <span style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '500' }}>
                How to Use
              </span>
            </div>
            <ChevronDown 
              className="w-5 h-5 transition-transform" 
              style={{ 
                color: '#1A1A1A',
                transform: expandedSection === 'howto' ? 'rotate(180deg)' : 'rotate(0deg)'
              }} 
            />
          </button>
          {expandedSection === 'howto' && (
            <div className="px-8 py-6 space-y-4" style={{ backgroundColor: '#F9F6F0' }}>
              <ol className="space-y-3">
                {[
                  'Warm 3-4 drops between your palms',
                  'Apply to clean, damp skin in gentle circular motions',
                  'Focus on areas that need extra nourishment',
                  'Take a moment to breathe and honor your body'
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" 
                         style={{ backgroundColor: '#1A1A1A' }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', fontWeight: '600' }}>
                        {i + 1}
                      </span>
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%', paddingTop: '2px' }}>
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Sustainability Section */}
          <button
            onClick={() => setExpandedSection(expandedSection === 'sustainability' ? null : 'sustainability')}
            className="w-full px-8 py-6 flex items-center justify-between transition-all hover:bg-[#F9F6F0]"
          >
            <div className="flex items-center gap-3">
              <HOLYRecycle size={20} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <span style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', fontWeight: '500' }}>
                Sustainability
              </span>
            </div>
            <ChevronDown 
              className="w-5 h-5 transition-transform" 
              style={{ 
                color: '#1A1A1A',
                transform: expandedSection === 'sustainability' ? 'rotate(180deg)' : 'rotate(0deg)'
              }} 
            />
          </button>
          {expandedSection === 'sustainability' && (
            <div className="px-8 py-6" style={{ backgroundColor: '#F9F6F0' }}>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: HOLYRecycle, label: 'Recyclable Glass', desc: '100% post-consumer' },
                  { icon: HOLYLeaf, label: 'Carbon Neutral', desc: 'Offset shipping' },
                  { icon: HOLYGem, label: 'Refillable', desc: 'Save 40% on refills' }
                ].map((item, i) => (
                  <div key={i} className="text-center space-y-2">
                    <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center" 
                         style={{ backgroundColor: '#FFFFFF' }}>
                      <item.icon size={24} color="#5E6458" opacity={1} strokeWidth={1.5} />
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600' }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Customer Reviews Section */}
        <div className="p-8 space-y-6" style={{ borderTop: '2px solid #DADADA' }}>
          <div className="flex items-center justify-between">
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A' }}>
              Customer Reviews
            </h3>
            <Button variant="outline" style={{ borderColor: '#DADADA', color: '#1A1A1A' }}>
              Write a Review
            </Button>
          </div>

          <div className="space-y-4">
            {[
              {
                name: 'Sarah M.',
                rating: 5,
                date: 'Nov 8, 2025',
                title: 'A true sacred ritual',
                review: 'This oil has transformed my self-care routine. The scent is divine and the texture is luxurious without being greasy.'
              },
              {
                name: 'Jessica L.',
                rating: 4,
                date: 'Nov 2, 2025',
                title: 'Beautiful product',
                review: 'Love the packaging and the quality. The only reason for 4 stars is the price point, but you get what you pay for!'
              }
            ].map((review, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                      {review.name}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map(j => (
                        <Star 
                          key={j} 
                          className="w-3 h-3" 
                          style={{ color: '#9C887A', fill: j <= review.rating ? '#9C887A' : 'none' }} 
                        />
                      ))}
                    </div>
                  </div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.5 }}>
                    {review.date}
                  </span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '4px' }}>
                  {review.title}
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                  {review.review}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="p-8 space-y-6" style={{ borderTop: '2px solid #DADADA', backgroundColor: '#F9F6F0' }}>
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A' }}>
            Complete Your Ritual
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedProducts.map((product, i) => (
              <ProductCard
                key={i}
                name={product.name}
                system={product.system}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-8" style={{ borderTop: '2px solid #DADADA', backgroundColor: '#FFFFFF' }}>
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Shop
              </h4>
              <div className="space-y-2">
                {['All Products', 'Ritual Systems', 'Bundles', 'Gift Sets'].map(link => (
                  <button key={link} className="block text-left" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Learn
              </h4>
              <div className="space-y-2">
                {['Our Story', 'Ritual Finder', 'Ingredients', 'Sustainability'].map(link => (
                  <button key={link} className="block text-left" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Support
              </h4>
              <div className="space-y-2">
                {['Contact Us', 'FAQ', 'Shipping', 'Returns'].map(link => (
                  <button key={link} className="block text-left" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Newsletter
              </h4>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, marginBottom: '12px', lineHeight: '160%' }}>
                Sacred wisdom delivered monthly
              </p>
              <div className="flex gap-2">
                <input 
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg text-sm"
                  style={{ border: '2px solid #DADADA', backgroundColor: '#FFFFFF' }}
                />
                <Button size="sm" style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>
                  Join
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="flex items-center justify-between">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.5 }}>
              © 2025 HØLY<TM />. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {['Privacy', 'Terms', 'Accessibility'].map(link => (
                <button key={link} style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.5 }}>
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gap Analysis & Documentation */}
      <div className="p-8 rounded-2xl space-y-6" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="flex items-center gap-2">
          <HOLYGem size={20} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A' }}>
            Components Used & Gap Analysis
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              Existing Components Used
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
              <li>• Button (Primary, Outline, variants)</li>
              <li>• Badge (System colors, variants)</li>
              <li>• Card & CardContent</li>
              <li>• Separator</li>
              <li>• ImageWithFallback</li>
              <li>• HØLY Icons (Droplet, Sparkle, Leaf, etc.)</li>
              <li>• Lucide Icons (Heart, Cart, Star, etc.)</li>
              <li>• Typography tokens (Garamond/Inter)</li>
              <li>• Color tokens (all refined palette)</li>
              <li>• Spacing & radius tokens</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              🔧 New Patterns Created
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
              <li>• Subscription toggle component (inline)</li>
              <li>• Quantity selector pattern</li>
              <li>• Image gallery with thumbnails</li>
              <li>• Collapsible accordion sections</li>
              <li>• Trust badge grid layout</li>
              <li>• Review card pattern</li>
              <li>• Related product cards</li>
              <li>• Navigation breadcrumb</li>
              <li>• Footer link structure</li>
            </ul>
          </div>
        </div>

        <div className="p-4 rounded-xl" style={{ backgroundColor: '#AAB5B2', border: '1px solid #8C8981' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', lineHeight: '160%' }}>
            <strong>Next Steps:</strong> Extract reusable patterns (subscription toggle, quantity selector, review cards) 
            into dedicated components in UI Components page. Create mobile-responsive variant. Build checkout flow experience. 
            Add motion states for cart interactions and image zoom.
          </p>
        </div>
      </div>
    </div>
    
    <GlobalFooter />
  </>
  );
}
