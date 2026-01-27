import { TM } from '../components/core-system';
import { HOLYEye, HOLYCamera, HOLYSparkle } from '../components/icons/HOLYIcons';
import { Download, Globe, Facebook, Linkedin, Twitter } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { motion } from 'motion/react';

/**
 * ========================================
 * Shopify Online Store Brand Assets Page
 * HØLY | Ritual Care™ Design System
 * ========================================
 * 
 * All export-ready brand assets for Shopify store setup:
 * - Primary logos (horizontal & square)
 * - Favicons (32×32, 16×16)
 * - Social sharing images (1200×628)
 * - SEO preview cards
 * - Hero & banner mockups
 * 
 * All assets exportable as flattened PNG files
 * with proper naming conventions and alt text.
 */

export default function ShopifyBrandAssetsPage() {
  const [exportingId, setExportingId] = useState<string | null>(null);

  // Export handler for generating PNG files
  const handleExport = async (fileName: string, elementId: string, width: number, height: number) => {
    setExportingId(elementId);
    
    try {
      const element = document.getElementById(elementId);
      if (!element) {
        console.error('Element not found:', elementId);
        return;
      }

      // Calculate scale to get desired dimensions
      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;
      const scaleX = width / elementWidth;
      const scaleY = height / elementHeight;
      const scale = Math.max(scaleX, scaleY, 2); // Minimum 2x for quality

      const canvas = await html2canvas(element, {
        backgroundColor: fileName.includes('transparent') ? null : '#FFFFFF',
        scale: scale,
        width: elementWidth,
        height: elementHeight,
        windowWidth: elementWidth,
        windowHeight: elementHeight,
      });

      // Resize canvas to exact dimensions if needed
      const finalCanvas = document.createElement('canvas');
      finalCanvas.width = width;
      finalCanvas.height = height;
      const ctx = finalCanvas.getContext('2d');
      
      if (ctx) {
        // Fill with background if not transparent
        if (!fileName.includes('transparent')) {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, width, height);
        }
        
        // Draw the original canvas centered
        const x = (width - canvas.width) / 2;
        const y = (height - canvas.height) / 2;
        ctx.drawImage(canvas, x, y);
      }

      const link = document.createElement('a');
      link.download = fileName;
      link.href = finalCanvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setTimeout(() => setExportingId(null), 1000);
    }
  };

  // Pulsing Ø animation component
  const PulsingO = ({ size = 56, color = '#D7D0C5' }: { size?: number; color?: string }) => (
    <motion.span
      style={{
        display: 'inline-block',
        fontSize: 'inherit',
        lineHeight: 'inherit',
      }}
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [0.95, 1.03, 0.95],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      Ø
    </motion.span>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="max-w-7xl mx-auto p-8 space-y-20">
        
        {/* ========================================
          * PAGE HEADER
          * ======================================== */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-3">
              <HOLYCamera size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Shopify Brand Assets
              </h1>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.7, marginBottom: '16px' }}>
              Production-ready brand assets for Shopify Online Store setup. All logos, favicons, social images, and banners export as flattened PNG files with proper dimensions and naming conventions.
            </p>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.6, margin: 0 }}>
                <strong>Export Standards:</strong> All assets use transparent backgrounds (where appropriate), 2x resolution for retina displays, and standardized naming: holy-ritual-care_[type]_[variant].png
              </p>
            </div>
          </div>
        </div>

        {/* ========================================
          * SECTION 1: PRIMARY LOGO FILES
          * ======================================== */}
        <section className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <HOLYSparkle size={24} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Primary Logo Files
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Main brand logos for Shopify header, profile, and social contexts. Minimum 512×512 px per Shopify guidelines.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Horizontal Logo — 1200×400 */}
            <div className="space-y-4">
              <div 
                id="logo-horizontal"
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '2px solid #DADADA',
                  minHeight: '300px',
                  position: 'relative',
                }}
              >
                <h3 style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '72px', 
                  color: '#1A1A1A', 
                  lineHeight: '100%', 
                  letterSpacing: '0.01em',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}>
                  H<PulsingO />LY
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '24px',
                    fontWeight: '300',
                    color: '#1A1A1A',
                    opacity: 0.6,
                    marginLeft: '8px',
                  }}>
                    | Ritual Care<TM />
                  </span>
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                      Horizontal Logo / Expanded Lockup
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      1200×400 px • Shopify header / hero use
                    </p>
                  </div>
                  <button
                    onClick={() => handleExport('holy-ritual-care_logo_horizontal.png', 'logo-horizontal', 1200, 400)}
                    disabled={exportingId === 'logo-horizontal'}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#F9F6F0',
                      backgroundColor: '#1A1A1A',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: exportingId === 'logo-horizontal' ? 'wait' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      opacity: exportingId === 'logo-horizontal' ? 0.5 : 1,
                    }}
                  >
                    <Download size={14} />
                    {exportingId === 'logo-horizontal' ? 'Exporting...' : 'Download PNG'}
                  </button>
                </div>
              </div>
            </div>

            {/* Square Logo — 1200×1200 */}
            <div className="space-y-4">
              <div 
                id="logo-square"
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '2px solid #DADADA',
                  minHeight: '300px',
                  aspectRatio: '1/1',
                }}
              >
                <h3 style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '72px', 
                  color: '#1A1A1A', 
                  lineHeight: '100%', 
                  letterSpacing: '0.01em',
                  margin: 0,
                }}>
                  H<PulsingO />LY<TM />
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                      Square Store Logo
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      1200×1200 px • Social, profile & square contexts
                    </p>
                  </div>
                  <button
                    onClick={() => handleExport('holy-ritual-care_logo_square.png', 'logo-square', 1200, 1200)}
                    disabled={exportingId === 'logo-square'}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#F9F6F0',
                      backgroundColor: '#1A1A1A',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: exportingId === 'logo-square' ? 'wait' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      opacity: exportingId === 'logo-square' ? 0.5 : 1,
                    }}
                  >
                    <Download size={14} />
                    {exportingId === 'logo-square' ? 'Exporting...' : 'Download PNG'}
                  </button>
                </div>
              </div>
            </div>

            {/* Logo on Dark Background */}
            <div className="space-y-4">
              <div 
                id="logo-dark"
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ 
                  backgroundColor: '#1A1A1A', 
                  border: '2px solid #1A1A1A',
                  minHeight: '300px',
                }}
              >
                <h3 style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '72px', 
                  color: '#F9F6F0', 
                  lineHeight: '100%', 
                  letterSpacing: '0.01em',
                  margin: 0,
                }}>
                  H<PulsingO color="#F9F6F0" />LY<TM />
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                      Logo / Dark Variant
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      1200×400 px • For dark backgrounds
                    </p>
                  </div>
                  <button
                    onClick={() => handleExport('holy-ritual-care_logo_dark.png', 'logo-dark', 1200, 400)}
                    disabled={exportingId === 'logo-dark'}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#F9F6F0',
                      backgroundColor: '#1A1A1A',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: exportingId === 'logo-dark' ? 'wait' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      opacity: exportingId === 'logo-dark' ? 0.5 : 1,
                    }}
                  >
                    <Download size={14} />
                    {exportingId === 'logo-dark' ? 'Exporting...' : 'Download PNG'}
                  </button>
                </div>
              </div>
            </div>

            {/* Logo Transparent Background */}
            <div className="space-y-4">
              <div 
                id="logo-transparent"
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ 
                  backgroundColor: '#F9F6F0',
                  backgroundImage: 'repeating-conic-gradient(#DADADA 0% 25%, transparent 0% 50%) 50% / 20px 20px',
                  border: '2px solid #DADADA',
                  minHeight: '300px',
                }}
              >
                <h3 style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '72px', 
                  color: '#1A1A1A', 
                  lineHeight: '100%', 
                  letterSpacing: '0.01em',
                  margin: 0,
                }}>
                  H<PulsingO />LY<TM />
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                      Logo / Transparent
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      1200×400 px • Transparent background PNG
                    </p>
                  </div>
                  <button
                    onClick={() => handleExport('holy-ritual-care_logo_transparent.png', 'logo-transparent', 1200, 400)}
                    disabled={exportingId === 'logo-transparent'}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#F9F6F0',
                      backgroundColor: '#1A1A1A',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: exportingId === 'logo-transparent' ? 'wait' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      opacity: exportingId === 'logo-transparent' ? 0.5 : 1,
                    }}
                  >
                    <Download size={14} />
                    {exportingId === 'logo-transparent' ? 'Exporting...' : 'Download PNG'}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================
          * SECTION 2: FAVICON ASSETS
          * ======================================== */}
        <section className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <HOLYEye size={24} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Favicon Assets
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Browser tab icons in 32×32 px and 16×16 px formats for Shopify favicon upload.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Favicon 32×32 */}
            <div className="space-y-4">
              <div 
                id="favicon-32"
                className="p-12 rounded-2xl flex items-center justify-center"
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '2px solid #DADADA',
                  minHeight: '200px',
                }}
              >
                <div style={{
                  width: '96px',
                  height: '96px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#1A1A1A',
                  borderRadius: '8px',
                }}>
                  <span style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '48px', 
                    color: '#F9F6F0', 
                    lineHeight: '100%', 
                    letterSpacing: '-0.02em',
                  }}>
                    H
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                      Favicon 32×32
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      32×32 px • Standard browser tab icon
                    </p>
                  </div>
                  <button
                    onClick={() => handleExport('holy-ritual-care_favicon_32.png', 'favicon-32', 32, 32)}
                    disabled={exportingId === 'favicon-32'}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#F9F6F0',
                      backgroundColor: '#1A1A1A',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: exportingId === 'favicon-32' ? 'wait' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      opacity: exportingId === 'favicon-32' ? 0.5 : 1,
                    }}
                  >
                    <Download size={14} />
                    {exportingId === 'favicon-32' ? 'Exporting...' : 'Download PNG'}
                  </button>
                </div>
              </div>
            </div>

            {/* Favicon 16×16 */}
            <div className="space-y-4">
              <div 
                id="favicon-16"
                className="p-12 rounded-2xl flex items-center justify-center"
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '2px solid #DADADA',
                  minHeight: '200px',
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#1A1A1A',
                  borderRadius: '6px',
                }}>
                  <span style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '32px', 
                    color: '#F9F6F0', 
                    lineHeight: '100%', 
                    letterSpacing: '-0.02em',
                  }}>
                    H
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                      Favicon 16×16
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      16×16 px • Fallback browser tab icon
                    </p>
                  </div>
                  <button
                    onClick={() => handleExport('holy-ritual-care_favicon_16.png', 'favicon-16', 16, 16)}
                    disabled={exportingId === 'favicon-16'}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#F9F6F0',
                      backgroundColor: '#1A1A1A',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: exportingId === 'favicon-16' ? 'wait' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      opacity: exportingId === 'favicon-16' ? 0.5 : 1,
                    }}
                  >
                    <Download size={14} />
                    {exportingId === 'favicon-16' ? 'Exporting...' : 'Download PNG'}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================
          * SECTION 3: SOCIAL SHARING IMAGE (OG)
          * ======================================== */}
        <section className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Globe size={24} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Social Sharing Image (Open Graph)
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              1200×628 px (1.91:1 ratio) for social link previews on Facebook, LinkedIn, Twitter, and other platforms.
            </p>
          </div>

          <div className="space-y-4">
            <div 
              id="social-og"
              className="p-16 rounded-2xl flex flex-col items-center justify-center gap-6"
              style={{ 
                backgroundColor: '#9C887A',
                border: '2px solid #9C887A',
                minHeight: '400px',
                aspectRatio: '1.91/1',
              }}
            >
              <h3 style={{ 
                fontFamily: 'Garamond, serif', 
                fontSize: '80px', 
                color: '#F9F6F0', 
                lineHeight: '100%', 
                letterSpacing: '0.01em',
                margin: 0,
                textAlign: 'center',
              }}>
                H<PulsingO color="#F9F6F0" />LY<TM />
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: '300',
                color: '#F9F6F0',
                opacity: 0.9,
                textAlign: 'center',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                Ritual Care for Body & Self
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                    Open Graph Social Image
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                    1200×628 px • For Facebook, LinkedIn, Twitter link previews
                  </p>
                </div>
                <button
                  onClick={() => handleExport('holy-ritual-care_social_og.png', 'social-og', 1200, 628)}
                  disabled={exportingId === 'social-og'}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#F9F6F0',
                    backgroundColor: '#1A1A1A',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: exportingId === 'social-og' ? 'wait' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                    opacity: exportingId === 'social-og' ? 0.5 : 1,
                  }}
                >
                  <Download size={14} />
                  {exportingId === 'social-og' ? 'Exporting...' : 'Download PNG'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
          * SECTION 4: SEO PREVIEW CARDS
          * ======================================== */}
        <section className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Globe size={24} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                SEO Preview Mockups
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Visual previews showing how your store metadata appears on social platforms.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Facebook Preview */}
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="flex items-center gap-2 mb-4">
                <Facebook size={18} color="#1877F2" />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', margin: 0 }}>
                  Facebook Link Preview
                </p>
              </div>
              
              <div className="rounded-lg overflow-hidden" style={{ border: '1px solid #DADADA' }}>
                <div style={{ 
                  width: '100%',
                  aspectRatio: '1.91/1',
                  backgroundColor: '#9C887A',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '32px',
                }}>
                  <h4 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '48px', 
                    color: '#F9F6F0', 
                    lineHeight: '100%', 
                    margin: 0,
                  }}>
                    HØLY<TM />
                  </h4>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#F9F6F0',
                    opacity: 0.9,
                    textAlign: 'center',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}>
                    Ritual Care for Body & Self
                  </p>
                </div>
                
                <div className="p-4" style={{ backgroundColor: '#F2F3F5' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#606770', opacity: 0.7, marginBottom: '4px', textTransform: 'uppercase' }}>
                    holyritualcare.com
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1C1E21', fontWeight: '600', marginBottom: '4px' }}>
                    HØLY | Ritual Care™ — Sacred Luxury for Body & Self
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#606770', lineHeight: '140%' }}>
                    Discover transformative ritual care systems designed for intentional self-care. Premium formulations infused with sacred botanicals.
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn Preview */}
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="flex items-center gap-2 mb-4">
                <Linkedin size={18} color="#0A66C2" />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', margin: 0 }}>
                  LinkedIn Link Preview
                </p>
              </div>
              
              <div className="rounded-lg overflow-hidden" style={{ border: '1px solid #DADADA' }}>
                <div style={{ 
                  width: '100%',
                  aspectRatio: '1.91/1',
                  backgroundColor: '#9C887A',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '32px',
                }}>
                  <h4 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '48px', 
                    color: '#F9F6F0', 
                    lineHeight: '100%', 
                    margin: 0,
                  }}>
                    HØLY<TM />
                  </h4>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#F9F6F0',
                    opacity: 0.9,
                    textAlign: 'center',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}>
                    Ritual Care for Body & Self
                  </p>
                </div>
                
                <div className="p-4" style={{ backgroundColor: '#FFFFFF' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#000000', fontWeight: '600', marginBottom: '4px' }}>
                    HØLY | Ritual Care™ — Sacred Luxury for Body & Self
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(0,0,0,0.6)', marginBottom: '8px' }}>
                    holyritualcare.com
                  </p>
                </div>
              </div>
            </div>

            {/* Twitter Preview */}
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <div className="flex items-center gap-2 mb-4">
                <Twitter size={18} color="#1DA1F2" />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', margin: 0 }}>
                  Twitter Card Preview
                </p>
              </div>
              
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgb(207, 217, 222)' }}>
                <div style={{ 
                  width: '100%',
                  aspectRatio: '1.91/1',
                  backgroundColor: '#9C887A',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '32px',
                }}>
                  <h4 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '48px', 
                    color: '#F9F6F0', 
                    lineHeight: '100%', 
                    margin: 0,
                  }}>
                    HØLY<TM />
                  </h4>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#F9F6F0',
                    opacity: 0.9,
                    textAlign: 'center',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}>
                    Ritual Care for Body & Self
                  </p>
                </div>
                
                <div className="p-3" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid rgb(207, 217, 222)' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#0F1419', fontWeight: '400', marginBottom: '2px' }}>
                    HØLY | Ritual Care™ — Sacred Luxury for Body & Self
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#536471', marginBottom: '4px' }}>
                    Discover transformative ritual care systems designed for intentional self-care.
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#536471' }}>
                    🔗 holyritualcare.com
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================
          * SECTION 5: HERO & BANNER MOCKUPS
          * ======================================== */}
        <section className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <HOLYCamera size={24} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Hero & Banner Assets
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Shopify hero banners for homepage and collection pages in desktop and mobile variants.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Desktop Hero Banner — 1920×1080 */}
            <div className="space-y-4">
              <div 
                id="hero-desktop"
                className="rounded-2xl overflow-hidden"
                style={{ 
                  backgroundColor: '#D9C4BB',
                  border: '2px solid #DADADA',
                  minHeight: '400px',
                  aspectRatio: '16/9',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '24px',
                  padding: '64px',
                  position: 'relative',
                  background: 'linear-gradient(135deg, #D9C4BB 0%, #AAB5B2 100%)',
                }}
              >
                <h3 style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '96px', 
                  color: '#1A1A1A', 
                  lineHeight: '100%', 
                  letterSpacing: '0.01em',
                  margin: 0,
                  textAlign: 'center',
                }}>
                  H<PulsingO />LY<TM />
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '24px',
                  fontWeight: '300',
                  color: '#1A1A1A',
                  opacity: 0.8,
                  textAlign: 'center',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  maxWidth: '600px',
                }}>
                  Sacred Luxury for Body & Self
                </p>
                <button style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#F9F6F0',
                  backgroundColor: '#1A1A1A',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '16px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  Discover Rituals
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                      Hero Banner / Desktop
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      1920×1080 px • Desktop homepage hero
                    </p>
                  </div>
                  <button
                    onClick={() => handleExport('holy-ritual-care_hero_desktop.png', 'hero-desktop', 1920, 1080)}
                    disabled={exportingId === 'hero-desktop'}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#F9F6F0',
                      backgroundColor: '#1A1A1A',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: exportingId === 'hero-desktop' ? 'wait' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      opacity: exportingId === 'hero-desktop' ? 0.5 : 1,
                    }}
                  >
                    <Download size={14} />
                    {exportingId === 'hero-desktop' ? 'Exporting...' : 'Download PNG'}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Banner — 800×1200 */}
            <div className="space-y-4">
              <div className="max-w-md mx-auto">
                <div 
                  id="hero-mobile"
                  className="rounded-2xl overflow-hidden"
                  style={{ 
                    backgroundColor: '#D9C4BB',
                    border: '2px solid #DADADA',
                    minHeight: '600px',
                    aspectRatio: '2/3',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    padding: '48px 24px',
                    background: 'linear-gradient(135deg, #D9C4BB 0%, #AAB5B2 100%)',
                  }}
                >
                  <h3 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '64px', 
                    color: '#1A1A1A', 
                    lineHeight: '100%', 
                    letterSpacing: '0.01em',
                    margin: 0,
                    textAlign: 'center',
                  }}>
                    H<PulsingO />LY<TM />
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: '300',
                    color: '#1A1A1A',
                    opacity: 0.8,
                    textAlign: 'center',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>
                    Sacred Luxury<br />for Body & Self
                  </p>
                  <button style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#F9F6F0',
                    backgroundColor: '#1A1A1A',
                    padding: '14px 28px',
                    borderRadius: '8px',
                    border: 'none',
                    marginTop: '12px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}>
                    Discover Rituals
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                      Hero Banner / Mobile
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      800×1200 px • Mobile homepage hero
                    </p>
                  </div>
                  <button
                    onClick={() => handleExport('holy-ritual-care_hero_mobile.png', 'hero-mobile', 800, 1200)}
                    disabled={exportingId === 'hero-mobile'}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#F9F6F0',
                      backgroundColor: '#1A1A1A',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: exportingId === 'hero-mobile' ? 'wait' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      opacity: exportingId === 'hero-mobile' ? 0.5 : 1,
                    }}
                  >
                    <Download size={14} />
                    {exportingId === 'hero-mobile' ? 'Exporting...' : 'Download PNG'}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================
          * SECTION 6: FILE NAMING & ALT TEXT
          * ======================================== */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Export Standards & Guidelines
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Naming conventions, alt text requirements, and Shopify upload instructions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* File Naming */}
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '16px' }}>
                File Naming Convention
              </h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg font-mono" style={{ backgroundColor: '#F9F6F0', fontSize: '12px', color: '#1A1A1A' }}>
                  holy-ritual-care_logo_horizontal.png
                </div>
                <div className="p-3 rounded-lg font-mono" style={{ backgroundColor: '#F9F6F0', fontSize: '12px', color: '#1A1A1A' }}>
                  holy-ritual-care_logo_square.png
                </div>
                <div className="p-3 rounded-lg font-mono" style={{ backgroundColor: '#F9F6F0', fontSize: '12px', color: '#1A1A1A' }}>
                  holy-ritual-care_social_og.png
                </div>
                <div className="p-3 rounded-lg font-mono" style={{ backgroundColor: '#F9F6F0', fontSize: '12px', color: '#1A1A1A' }}>
                  holy-ritual-care_favicon_32.png
                </div>
                <div className="p-3 rounded-lg font-mono" style={{ backgroundColor: '#F9F6F0', fontSize: '12px', color: '#1A1A1A' }}>
                  holy-ritual-care_hero_desktop.png
                </div>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, marginTop: '12px', lineHeight: '160%' }}>
                Pattern: brand_[type]_[variant].png<br />
                Lowercase, hyphen-separated, descriptive
              </p>
            </div>

            {/* Alt Text */}
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '16px' }}>
                Recommended Alt Text
              </h3>
              <div className="space-y-3">
                <div className="space-y-1">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
                    Horizontal Logo:
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontStyle: 'italic' }}>
                    "HØLY | Ritual Care™ horizontal logo"
                  </p>
                </div>
                <div className="space-y-1">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
                    Square Logo:
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontStyle: 'italic' }}>
                    "HØLY Ritual Care™ square logo"
                  </p>
                </div>
                <div className="space-y-1">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
                    Social Image:
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontStyle: 'italic' }}>
                    "HØLY Ritual Care™ — Sacred luxury for body & self"
                  </p>
                </div>
                <div className="space-y-1">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
                    Hero Banner:
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, fontStyle: 'italic' }}>
                    "HØLY Ritual Care™ homepage hero banner"
                  </p>
                </div>
              </div>
            </div>

            {/* Shopify Upload Instructions */}
            <div className="md:col-span-2 p-6 rounded-2xl" style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
                Shopify Upload Instructions
              </h3>
              <div className="space-y-4">
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500', marginBottom: '6px' }}>
                    1. Store Logo (Settings → General → Logo)
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                    Upload: holy-ritual-care_logo_horizontal.png<br />
                    Recommended: 1200×400 px minimum for crisp display
                  </p>
                </div>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500', marginBottom: '6px' }}>
                    2. Favicon (Settings → General → Favicon)
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                    Upload: holy-ritual-care_favicon_32.png<br />
                    Shopify accepts 32×32 or 16×16 PNG/ICO formats
                  </p>
                </div>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500', marginBottom: '6px' }}>
                    3. Social Sharing Image (Preferences → Social sharing image)
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                    Upload: holy-ritual-care_social_og.png<br />
                    1200×628 px for optimal display across all social platforms
                  </p>
                </div>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500', marginBottom: '6px' }}>
                    4. Hero Banners (Theme Editor → Homepage)
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                    Upload: holy-ritual-care_hero_desktop.png (desktop)<br />
                    Upload: holy-ritual-care_hero_mobile.png (mobile)<br />
                    Configure in slideshow or image banner sections
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================
          * CLOSING NOTE
          * ======================================== */}
        <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', margin: 0 }}>
            All assets are production-ready and optimized for Shopify store setup.<br />
            For custom sizing or additional variants, regenerate exports using the buttons above.
          </p>
        </div>

      </div>
    </div>
  );
}