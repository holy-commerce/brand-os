import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { FilterDrawer, FilterSidebar, EnhancedProductCard } from './PLPComponents';
import { HOLYGrid, HOLYSparkle } from '../icons/HOLYIcons';
import { SlidersHorizontal } from 'lucide-react';
import { RitualSystemBadge } from '../core-system/RitualSystemBadge';
import { PriceDisplay } from '../core-system/PriceDisplay';
import { MetadataLabel } from '../core-system/LabelSystem';
import type { MetadataType } from '../core-system/LabelSystem';

// ========================================
// PLP CONTENT COMPONENTS
// ========================================

const mockProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1676256632648-422a85b88b4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVhdXR5JTIwcHJvZHVjdCUyMGNvbmNyZXRlfGVufDF8fHx8MTc2MzA4MTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Sacred Cleansing Balm',
    description: 'Gentle ritual cleanse',
    price: 68,
    system: 'Ritual Renewal™',
    badge: 'ritual-essential' as const
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1662845114342-256fdc45981d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29zbWV0aWMlMjBib3R0bGUlMjBjbGF5fGVufDF8fHx8MTc2MzA4MTI0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Ocean Mineral Tonic',
    description: 'Revitalizing mist',
    price: 48,
    system: 'Ritual Vital™',
    badge: 'new' as const
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1587145717184-e7ee5311253d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXV0cmFsJTIwd2VsbG5lc3MlMjBwcm9kdWN0JTIwbWFyYmxlfGVufDF8fHx8MTc2MzA4MTI0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Burnished Face Oil',
    description: 'Nourishing botanical oil',
    price: 72,
    salePrice: 50,
    system: 'Ritual Renewal™',
    badge: 'sale' as const
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1608571899793-a1c0c27a7555?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwYmVhdXR5JTIwYm90dGxlJTIwbGluZW58ZW58MXx8fHwxNzYzMDgxMjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Sacred Space Candle',
    description: 'Ritual ambiance',
    price: 42,
    system: 'Ritual Touch™'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1642333576378-ee73c518ff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwc2tpbmNhcmUlMjBzdG9uZSUyMHRleHR1cmV8ZW58MXx8fHwxNzYzMDgxMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Temple Renewal Serum',
    description: 'Daily ritual essence',
    price: 85,
    system: 'Ritual Renewal™',
    badge: 'studio-exclusive' as const
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1698664434322-94a43b98b9ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwY29zbWV0aWMlMjBib3R0bGUlMjBzaGFkb3d8ZW58MXx8fHwxNzYzMDgxMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Ritual Body Oil',
    description: 'Sacred skin nourishment',
    price: 64,
    system: 'Ritual Touch™',
    badge: 'going-fast' as const
  }
];

// MOBILE CONTENT
export function PLPMobileContent() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: '#F9F6F0', padding: '16px' }}>
      
      {/* Page Header */}
      <div className="mb-6">
        <h1 style={{ 
          fontFamily: 'Garamond, serif', 
          fontSize: '28px',
          color: '#1A1A1A',
          marginBottom: '8px'
        }}>
          Shop Rituals
        </h1>
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '14px',
          color: '#1A1A1A',
          opacity: 0.6
        }}>
          Discover sacred self-care essentials
        </p>
      </div>

      {/* Filter + Sort Bar */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1">
          <FilterDrawer />
        </div>
        <Button
          variant="outline"
          style={{ 
            borderColor: '#DADADA',
            color: '#1A1A1A',
            backgroundColor: '#FFFFFF',
            padding: '10px'
          }}
        >
          <SlidersHorizontal className="w-5 h-5" />
        </Button>
      </div>

      {/* Results Count */}
      <p style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize: '14px',
        color: '#1A1A1A',
        opacity: 0.6,
        marginBottom: '16px'
      }}>
        {mockProducts.length} rituals
      </p>

      {/* Product Grid - Single Column */}
      <div className="space-y-4">
        {mockProducts.map((product) => (
          <motion.div
            key={product.id}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl overflow-hidden"
            style={{ 
              backgroundColor: '#FFFFFF',
              border: '2px solid #DADADA'
            }}
          >
            <div className="relative" style={{ aspectRatio: '1/1' }}>
              <ImageWithFallback
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-3 right-3">
                  <MetadataLabel 
                    type={
                      product.badge === 'ritual-essential' ? 'Ritual Essential' :
                      product.badge === 'new' ? 'New' :
                      product.badge === 'sale' ? 'Limited' :
                      product.badge === 'studio-exclusive' ? 'Limited' :
                      'Low Stock'
                    } 
                    size="sm" 
                    showIcon={product.badge === 'new'} 
                  />
                </div>
              )}
            </div>

            <div className="p-4">
              {product.system && (
                <div className="mb-2">
                  <RitualSystemBadge system={product.system} size="sm" />
                </div>
              )}
              <h3 style={{ 
                fontFamily: 'Garamond, serif', 
                fontSize: '18px',
                color: '#1A1A1A',
                marginBottom: '4px'
              }}>
                {product.title}
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '13px',
                color: '#1A1A1A',
                opacity: 0.7,
                marginBottom: '8px'
              }}>
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <PriceDisplay 
                  price={product.price}
                  salePrice={product.salePrice}
                  size="md"
                />
                <Button
                  size="sm"
                  style={{
                    backgroundColor: '#1A1A1A',
                    color: '#F9F6F0',
                    fontSize: '13px',
                    padding: '8px 16px'
                  }}
                >
                  Add to Ritual
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// DESKTOP CONTENT
export function PLPDesktopContent() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: '#F9F6F0', minHeight: '800px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '32px' }}>
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '48px',
            color: '#1A1A1A',
            marginBottom: '12px'
          }}>
            Shop All Rituals
          </h1>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '16px',
            color: '#1A1A1A',
            opacity: 0.7
          }}>
            Discover sacred self-care essentials for every ritual
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div style={{ width: '280px', flexShrink: 0 }}>
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort + Results Bar */}
            <div className="flex items-center justify-between mb-6">
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#1A1A1A',
                opacity: 0.6
              }}>
                {mockProducts.length} rituals
              </p>
              
              <div className="flex items-center gap-3">
                <span style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px',
                  color: '#1A1A1A',
                  opacity: 0.7
                }}>
                  Sort by:
                </span>
                <select
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#1A1A1A',
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #DADADA',
                    borderRadius: '8px',
                    padding: '8px 32px 8px 12px',
                    cursor: 'pointer'
                  }}
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Bestsellers</option>
                </select>
              </div>
            </div>

            {/* Product Grid - 3 Columns */}
            <div className="grid grid-cols-3 gap-6">
              {mockProducts.map((product) => (
                <motion.div
                  key={product.id}
                  onHoverStart={() => setHoveredProduct(product.id)}
                  onHoverEnd={() => setHoveredProduct(null)}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl overflow-hidden cursor-pointer"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #DADADA',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredProduct === product.id ? '0 8px 24px rgba(0, 0, 0, 0.1)' : 'none'
                  }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                    <ImageWithFallback
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{ 
                        transform: hoveredProduct === product.id ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                    {product.badge && (
                      <div className="absolute top-3 right-3">
                        <MetadataLabel 
                          type={
                            product.badge === 'ritual-essential' ? 'Ritual Essential' :
                            product.badge === 'new' ? 'New' :
                            product.badge === 'sale' ? 'Limited' :
                            product.badge === 'studio-exclusive' ? 'Limited' :
                            'Low Stock'
                          } 
                          size="sm" 
                          showIcon={product.badge === 'new'} 
                        />
                      </div>
                    )}

                    {/* Quick View Overlay */}
                    {hoveredProduct === product.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ 
                          backgroundColor: 'rgba(26, 26, 26, 0.8)'
                        }}
                      >
                        <Button
                          style={{
                            backgroundColor: '#F9F6F0',
                            color: '#1A1A1A',
                            padding: '12px 20px',
                            fontSize: '14px',
                            fontWeight: '600'
                          }}
                        >
                          Quick View
                        </Button>
                      </motion.div>
                    )}
                  </div>

                  <div className="p-5">
                    {product.system && (
                      <div className="mb-3">
                        <RitualSystemBadge system={product.system} size="sm" />
                      </div>
                    )}
                    <h3 style={{ 
                      fontFamily: 'Garamond, serif', 
                      fontSize: '20px',
                      color: '#1A1A1A',
                      marginBottom: '4px'
                    }}>
                      {product.title}
                    </h3>
                    <p style={{ 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: '14px',
                      color: '#1A1A1A',
                      opacity: 0.7,
                      marginBottom: '12px'
                    }}>
                      {product.description}
                    </p>
                    
                    <div className="mb-4">
                      <PriceDisplay 
                        price={product.price}
                        salePrice={product.salePrice}
                        size="lg"
                      />
                    </div>

                    <Button
                      className="w-full mt-4"
                      variant="outline"
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
        </div>
      </div>
    </div>
  );
}
