import { HOLYEye, HOLYMoon, HOLYSun, HOLYCircle } from '../components/icons/HOLYIcons';
import { TM } from '../components/core-system';
import { Download } from 'lucide-react';
import { useState } from 'react';
import html2canvas from 'html2canvas';

export default function IconsMarksPage() {
  const [exportingId, setExportingId] = useState<string | null>(null);

  const handleExport = async (name: string, elementId: string) => {
    setExportingId(elementId);
    
    try {
      const element = document.getElementById(elementId);
      if (!element) {
        console.error('Element not found:', elementId);
        return;
      }

      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: 2, // Higher quality export
      });

      const link = document.createElement('a');
      link.download = `HOLY-${name.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setTimeout(() => setExportingId(null), 1000);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="max-w-7xl mx-auto p-8 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYEye size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
                Icons & Marks
              </h1>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: '140%', opacity: 0.7 }}>
              All logo lockups, system marks, icons, glyphs, and visual brand motifs for use across digital and physical media.
            </p>
          </div>
        </div>

        {/* Frame: Logo Lockups */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <HOLYMoon size={24} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%' }}>
                Logo Lockups
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Primary brand marks and wordmark variations. All logos use Garamond for the wordmark with optically-balanced kerning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Primary Logo */}
            <div className="space-y-4">
              <div 
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', minHeight: '240px' }}
              >
                <h3 style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '56px', 
                  color: '#1A1A1A', 
                  lineHeight: '100%', 
                  letterSpacing: '0.01em',
                  margin: 0
                }}>
                  HØLY<TM />
                </h3>
              </div>
              <div className="space-y-2">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="space-y-1" style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                      HØLY / Logo / Primary Wordmark
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      Garamond 48px · Temple Black · 2% Letter Spacing
                    </p>
                  </div>
                  <button
                    onClick={() => handleExport('Primary Wordmark', 'logo-primary')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 12px',
                      backgroundColor: exportingId === 'logo-primary' ? '#5E6458' : '#1A1A1A',
                      color: '#F9F6F0',
                      border: 'none',
                      borderRadius: '6px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 150ms ease',
                      flexShrink: 0
                    }}
                    onMouseEnter={(e) => {
                      if (exportingId !== 'logo-primary') {
                        e.currentTarget.style.backgroundColor = '#5E6458';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (exportingId !== 'logo-primary') {
                        e.currentTarget.style.backgroundColor = '#1A1A1A';
                      }
                    }}
                  >
                    <Download size={14} />
                    Export
                  </button>
                </div>
              </div>
            </div>

            {/* Logo with Tagline */}
            <div className="space-y-4">
              <div 
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', minHeight: '240px' }}
              >
                <div className="text-center">
                  <h3 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '56px', 
                    color: '#1A1A1A', 
                    lineHeight: '100%', 
                    letterSpacing: '0.01em',
                    margin: 0,
                    marginBottom: '16px'
                  }}>
                    HØLY<TM />
                  </h3>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '13px', 
                    color: '#1A1A1A', 
                    opacity: 0.65, 
                    letterSpacing: '0.12em', 
                    textTransform: 'uppercase',
                    fontWeight: '500',
                    margin: 0
                  }}>
                    Ritual Care
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Logo / Wordmark + Tagline
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Primary + Inter 13px Uppercase · 8% Letter Spacing
                </p>
              </div>
            </div>

            {/* Responsive Logo */}
            <div className="space-y-4">
              <div 
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', minHeight: '240px' }}
              >
                <div className="flex items-center" style={{ gap: '16px' }}>
                  <h3 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '36px', 
                    color: '#1A1A1A', 
                    lineHeight: '100%', 
                    letterSpacing: '0.01em',
                    margin: 0
                  }}>
                    HØLY
                  </h3>
                  <div style={{ width: '1px', height: '28px', backgroundColor: '#DADADA' }}></div>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '11px', 
                    color: '#1A1A1A', 
                    opacity: 0.65, 
                    letterSpacing: '0.12em', 
                    textTransform: 'uppercase',
                    fontWeight: '500',
                    margin: 0,
                    paddingTop: '2px'
                  }}>
                    Ritual Care<TM />
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Logo / Responsive Horizontal
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  For headers, navigation bars · Divider: Soft Grey
                </p>
              </div>
            </div>

            {/* Wordmark Only (Inverted) */}
            <div className="space-y-4">
              <div 
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#1A1A1A', border: '2px solid #1A1A1A', minHeight: '240px' }}
              >
                <h3 style={{ 
                  fontFamily: 'Garamond, serif', 
                  fontSize: '56px', 
                  color: '#F9F6F0', 
                  lineHeight: '100%', 
                  letterSpacing: '0.01em',
                  margin: 0
                }}>
                  HØLY
                </h3>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Logo / Wordmark Only (Inverted)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Dark backgrounds · Ivory on Temple Black
                </p>
              </div>
            </div>

            {/* Stacked Variant */}
            <div className="space-y-4">
              <div 
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', minHeight: '240px' }}
              >
                <div className="text-center">
                  <h3 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '48px', 
                    color: '#1A1A1A', 
                    lineHeight: '100%', 
                    letterSpacing: '0.01em',
                    margin: 0,
                    marginBottom: '16px'
                  }}>
                    HØLY<TM />
                  </h3>
                  <div style={{ 
                    width: '48px', 
                    height: '1px', 
                    backgroundColor: '#DADADA', 
                    margin: '0 auto 16px'
                  }}></div>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '12px', 
                    color: '#1A1A1A', 
                    opacity: 0.65, 
                    letterSpacing: '0.12em', 
                    textTransform: 'uppercase',
                    fontWeight: '500',
                    margin: 0
                  }}>
                    Ritual Care
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Logo / Stacked Variant
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Vertical lockup · For packaging, tall formats
                </p>
              </div>
            </div>

            {/* Monospaced Layout */}
            <div className="space-y-4">
              <div 
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', minHeight: '240px' }}
              >
                <div className="text-center">
                  <p style={{ 
                    fontFamily: 'monospace', 
                    fontSize: '16px', 
                    color: '#1A1A1A', 
                    opacity: 0.6, 
                    letterSpacing: '0.15em',
                    margin: 0,
                    marginBottom: '8px'
                  }}>
                    H Ø L Y
                  </p>
                  <p style={{ 
                    fontFamily: 'monospace', 
                    fontSize: '10px', 
                    color: '#1A1A1A', 
                    opacity: 0.5, 
                    letterSpacing: '0.2em',
                    margin: 0
                  }}>
                    RITUAL CARE<TM />
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Logo / Monospaced Variant
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Technical contexts · Minimalist aesthetic
                </p>
              </div>
            </div>

          </div>

          {/* Usage Note */}
          <div 
            className="p-6 rounded-2xl"
            style={{ backgroundColor: 'rgba(156, 136, 122, 0.1)', border: '1px solid #9C887A' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
              <strong>Trademark Usage:</strong> All HØLY marks use ™ (not ®). Maintain minimum clear space of 24px around all logo lockups. 
              Never stretch, skew, or recolor outside of approved brand colors. The "ø" character is integral to the brand identity and must be preserved.
            </p>
          </div>
        </div>

        {/* Frame: Icon-Only Lockups */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <HOLYSun size={24} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%' }}>
                Icon-Only Lockups
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              The sacred "ø" glyph in various contexts. Use as app icon, favicon, or decorative element.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Sacred Glyph - Standalone */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA', minHeight: '200px' }}
              >
                <div style={{ 
                  fontSize: '80px', 
                  fontFamily: 'Garamond, serif', 
                  color: '#1A1A1A',
                  lineHeight: 1, 
                  margin: 0,
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  transform: 'translateY(-3px)'
                }}>
                  ø
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Icon / Sacred Glyph
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Garamond 72px · Standalone · Ivory Background
                </p>
              </div>
            </div>

            {/* Icon in Circle Container */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', minHeight: '200px' }}>
                <div 
                  style={{ 
                    width: '104px', 
                    height: '104px', 
                    borderRadius: '50%', 
                    backgroundColor: '#1A1A1A',
                    border: '3px solid #9C887A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ 
                    fontSize: '52px', 
                    fontFamily: 'Garamond, serif', 
                    color: '#F9F6F0',
                    lineHeight: 1, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    transform: 'translateY(-5px)'
                  }}>
                    ø
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Icon / Circle Container
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  104px circle · Temple Black + Smoky Umber border
                </p>
              </div>
            </div>

            {/* Icon in Pill Container */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', minHeight: '200px' }}
              >
                <div 
                  className="flex items-center justify-center"
                  style={{ 
                    paddingLeft: '32px',
                    paddingRight: '32px',
                    paddingTop: '16px',
                    paddingBottom: '16px',
                    borderRadius: '100px', 
                    backgroundColor: '#D9C4BB',
                    border: '2px solid #DADADA'
                  }}
                >
                  <div style={{ 
                    fontSize: '36px', 
                    fontFamily: 'Garamond, serif', 
                    color: '#1A1A1A',
                    lineHeight: 1, 
                    margin: 0,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    transform: 'translateY(-3px)'
                  }}>
                    ø
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Icon / Pill Container
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Pill shape · Veil Clay background
                </p>
              </div>
            </div>

            {/* Icon on Veil Clay */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#D9C4BB', border: '2px solid #D9C4BB', minHeight: '200px' }}
              >
                <div style={{ 
                  fontSize: '72px', 
                  fontFamily: 'Garamond, serif', 
                  color: '#1A1A1A',
                  lineHeight: 1, 
                  margin: 0,
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  transform: 'translateY(-3px)'
                }}>
                  ø
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Icon / On Veil Clay
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  72px · Full bleed Veil Clay background
                </p>
              </div>
            </div>

            {/* Icon on Fogstone Blue */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#AAB5B2', border: '2px solid #AAB5B2', minHeight: '200px' }}
              >
                <div style={{ 
                  fontSize: '72px', 
                  fontFamily: 'Garamond, serif', 
                  color: '#1A1A1A',
                  lineHeight: 1, 
                  margin: 0,
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  transform: 'translateY(-3px)'
                }}>
                  ø
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Icon / On Fogstone Blue
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  72px · Full bleed Fogstone Blue background
                </p>
              </div>
            </div>

            {/* Icon with Glow Effect */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#1A1A1A', border: '2px solid #1A1A1A', minHeight: '200px' }}
              >
                <div 
                  style={{ 
                    fontSize: '72px', 
                    fontFamily: 'Garamond, serif', 
                    color: '#F9F6F0',
                    lineHeight: 1, 
                    margin: 0,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    transform: 'translateY(-3px)',
                    filter: 'drop-shadow(0px 0px 24px rgba(224, 185, 88, 0.6))'
                  }}
                >
                  ø
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Icon / Sacred Glow
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  With drop shadow effect · Smoky Umber glow
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Frame: Visual Language Elements */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <HOLYCircle size={24} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%' }}>
                Visual Language Elements
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Sacred symbols, geometric marks, and brand motifs for decorative use across touchpoints.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Slit Mark */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA', minHeight: '200px' }}
              >
                <div className="flex flex-col items-center" style={{ gap: '6px' }}>
                  <div style={{ width: '64px', height: '2px', backgroundColor: '#1A1A1A', borderRadius: '1px' }}></div>
                  <div style={{ width: '48px', height: '2px', backgroundColor: '#1A1A1A', borderRadius: '1px' }}></div>
                  <div style={{ width: '64px', height: '2px', backgroundColor: '#1A1A1A', borderRadius: '1px' }}></div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Symbol / Slit Mark
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  From hølyrest™ · 3 horizontal lines · Temple Black
                </p>
              </div>
            </div>

            {/* Spiral Symbol */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA', minHeight: '200px' }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M40 10 C52 10, 60 18, 60 30 C60 42, 52 50, 40 50 C28 50, 20 42, 20 30 C20 24, 23 18, 28 15 C33 12, 38 13, 41 17" 
                    stroke="#1A1A1A" 
                    strokeWidth="2.5" 
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Symbol / Spiral
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Sacred geometry · Growth and renewal
                </p>
              </div>
            </div>

            {/* Mini Altar Outline */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA', minHeight: '200px' }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="16" y="44" width="48" height="20" stroke="#1A1A1A" strokeWidth="2" fill="none" rx="2" />
                  <rect x="24" y="28" width="32" height="16" stroke="#1A1A1A" strokeWidth="2" fill="none" rx="2" />
                  <rect x="32" y="16" width="16" height="12" stroke="#1A1A1A" strokeWidth="2" fill="none" rx="1.5" />
                </svg>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Symbol / Mini Altar
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Stacked forms · Ritual space icon
                </p>
              </div>
            </div>

            {/* Sacred Geometry Lines */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA', minHeight: '200px' }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="30" stroke="#DADADA" strokeWidth="1" fill="none" />
                  <circle cx="40" cy="40" r="20" stroke="#DADADA" strokeWidth="1" fill="none" />
                  <circle cx="40" cy="40" r="10" stroke="#DADADA" strokeWidth="1" fill="none" />
                  <line x1="40" y1="10" x2="40" y2="70" stroke="#DADADA" strokeWidth="1" />
                  <line x1="10" y1="40" x2="70" y2="40" stroke="#DADADA" strokeWidth="1" />
                </svg>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Grid / Sacred Geometry
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Alignment reference · Soft Grey guides
                </p>
              </div>
            </div>

            {/* Corner Motif */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl flex items-center justify-center relative"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA', minHeight: '200px' }}
              >
                {/* Top left corner */}
                <div style={{ position: 'absolute', top: '32px', left: '32px' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M0 0 L32 0 M0 0 L0 32" stroke="#9C887A" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                {/* Bottom right corner */}
                <div style={{ position: 'absolute', bottom: '32px', right: '32px' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M32 32 L0 32 M32 32 L32 0" stroke="#9C887A" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motif / Corner Brackets
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Smoky Umber · Frame elements
                </p>
              </div>
            </div>

            {/* Soft Seal */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA', minHeight: '200px' }}
              >
                <div 
                  className="flex items-center justify-center"
                  style={{ 
                    width: '96px', 
                    height: '96px', 
                    borderRadius: '50%', 
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #9C887A',
                    boxShadow: '0px 2px 8px rgba(0,0,0,0.08)'
                  }}
                >
                  <div style={{ 
                    fontSize: '32px', 
                    fontFamily: 'Garamond, serif', 
                    color: '#1A1A1A',
                    lineHeight: 1, 
                    margin: 0,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    transform: 'translateY(-3px)'
                  }}>
                    ø
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Seal / Soft Circle
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  For packaging, certificates · Smoky Umber border
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Frame: 📍 Social + Favicon Variants */}
        <div className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              📍 Social + Favicon Variants
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Optimized lockups for digital platforms, favicons, and physical badge applications.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Square Social Icon */}
            <div className="space-y-4">
              <div 
                className="p-10 rounded-2xl flex items-center justify-center aspect-square"
                style={{ backgroundColor: '#1A1A1A', border: '2px solid #1A1A1A' }}
              >
                <div className="text-center" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ 
                    fontSize: '40px', 
                    fontFamily: 'Garamond, serif', 
                    color: '#F9F6F0',
                    lineHeight: 1, 
                    margin: 0,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    transform: 'translateY(-3px)'
                  }}>
                    ø
                  </div>
                  <p style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '14px', 
                    color: '#F9F6F0', 
                    letterSpacing: '0.03em',
                    margin: 0
                  }}>
                    HØLY
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Social / Square 1:1
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  512×512px · Instagram, Facebook
                </p>
              </div>
            </div>

            {/* Favicon - ø Only */}
            <div className="space-y-4">
              <div 
                id="favicon-o-only"
                className="p-10 rounded-2xl flex items-center justify-center aspect-square"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}
              >
                <div 
                  className="flex items-center justify-center"
                  style={{ 
                    width: '72px', 
                    height: '72px',
                    backgroundColor: '#1A1A1A',
                    borderRadius: '12px'
                  }}
                >
                  <div style={{ 
                    fontSize: '36px', 
                    fontFamily: 'Garamond, serif', 
                    color: '#F9F6F0',
                    lineHeight: 1, 
                    margin: 0,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    transform: 'translateY(-3px)'
                  }}>
                    ø
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="space-y-1" style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                      HØLY / Favicon / ø Only
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      32×32px · Browser tab icon
                    </p>
                  </div>
                  <button
                    onClick={() => handleExport('Favicon-O-Only', 'favicon-o-only')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 12px',
                      backgroundColor: exportingId === 'favicon-o-only' ? '#5E6458' : '#1A1A1A',
                      color: '#F9F6F0',
                      border: 'none',
                      borderRadius: '6px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 150ms ease',
                      flexShrink: 0
                    }}
                    onMouseEnter={(e) => {
                      if (exportingId !== 'favicon-o-only') {
                        e.currentTarget.style.backgroundColor = '#5E6458';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (exportingId !== 'favicon-o-only') {
                        e.currentTarget.style.backgroundColor = '#1A1A1A';
                      }
                    }}
                  >
                    <Download size={14} />
                    Export
                  </button>
                </div>
              </div>
            </div>

            {/* Monoline Circle Badge */}
            <div className="space-y-4">
              <div 
                className="p-10 rounded-2xl flex items-center justify-center aspect-square"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}
              >
                <div 
                  className="flex items-center justify-center"
                  style={{ 
                    width: '88px', 
                    height: '88px',
                    border: '2px solid #1A1A1A',
                    borderRadius: '50%'
                  }}
                >
                  <div style={{ 
                    fontSize: '36px', 
                    fontFamily: 'Garamond, serif', 
                    color: '#1A1A1A',
                    lineHeight: 1, 
                    margin: 0,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    transform: 'translateY(-3px)'
                  }}>
                    ø
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Badge / Monoline Circle
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Simple stroke · Physical applications
                </p>
              </div>
            </div>

            {/* Physical Seal Badge */}
            <div className="space-y-4">
              <div 
                className="p-10 rounded-2xl flex items-center justify-center aspect-square"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}
              >
                <div 
                  style={{ 
                    width: '88px', 
                    height: '88px',
                    backgroundColor: '#9C887A',
                    borderRadius: '50%',
                    border: '3px solid #1A1A1A',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <div style={{ 
                    fontSize: '28px', 
                    fontFamily: 'Garamond, serif', 
                    color: '#F9F6F0',
                    lineHeight: 1, 
                    margin: 0,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    transform: 'translateY(-2px)'
                  }}>
                    ø
                  </div>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '8px', 
                    color: '#F9F6F0', 
                    letterSpacing: '0.12em', 
                    textTransform: 'uppercase', 
                    fontWeight: '600',
                    margin: 0
                  }}>
                    HØLY
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Seal / Product Badge
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Smoky Umber · Packaging, boxes, sleeves
                </p>
              </div>
            </div>

          </div>

          {/* Social OG Image - Full Width */}
          <div className="space-y-4">
            <div 
              className="overflow-hidden"
              style={{ 
                border: '2px solid #9C887A',
                borderRadius: 0
              }}
            >
              <div
                id="social-og-image"
                className="flex items-center justify-center"
                style={{ 
                  backgroundColor: '#9C887A',
                  aspectRatio: '1200 / 630',
                  position: 'relative',
                  paddingBottom: '60px'
                }}
              >
                <style>{`
                  @keyframes oPulse {
                    0%, 100% {
                      opacity: 0.85;
                      transform: scale(1);
                    }
                    50% {
                      opacity: 1;
                      transform: scale(1.05);
                    }
                  }
                `}</style>
                <div style={{
                  fontFamily: 'Garamond, serif',
                  fontSize: '120px',
                  color: '#F9F6F0',
                  lineHeight: 1,
                  letterSpacing: '0.01em',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span>H</span>
                  <span style={{
                    animation: 'oPulse 3000ms ease-in-out infinite',
                    display: 'inline-block'
                  }}>Ø</span>
                  <span>LY</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="space-y-1" style={{ flex: 1 }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                    HØLY / Social / Open Graph Image
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                    1200×630px · Smoky Umber · Twitter, LinkedIn, Facebook share preview
                  </p>
                </div>
                <button
                  onClick={() => handleExport('Social-OG-1200x630', 'social-og-image')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 12px',
                    backgroundColor: exportingId === 'social-og-image' ? '#5E6458' : '#1A1A1A',
                    color: '#F9F6F0',
                    border: 'none',
                    borderRadius: '6px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    if (exportingId !== 'social-og-image') {
                      e.currentTarget.style.backgroundColor = '#5E6458';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (exportingId !== 'social-og-image') {
                      e.currentTarget.style.backgroundColor = '#1A1A1A';
                    }
                  }}
                >
                  <Download size={14} />
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Export Specs */}
          <div 
            className="p-6 rounded-2xl space-y-3"
            style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
          >
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
              Export Specifications
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                  Social Media
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6, lineHeight: '150%' }}>
                  Instagram: 1080×1080px PNG<br />
                  Facebook: 512×512px PNG<br />
                  Twitter: 400×400px PNG
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                  Web Favicons
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6, lineHeight: '150%' }}>
                  favicon.ico: 32×32px ICO<br />
                  apple-touch-icon: 180×180px PNG<br />
                  android-chrome: 192×192px PNG
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                  Print Assets
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6, lineHeight: '150%' }}>
                  Minimum: 1 inch diameter<br />
                  Format: SVG or 300dpi PDF<br />
                  Color: CMYK conversion required
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div 
          className="p-8 rounded-2xl text-center space-y-4"
          style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
        >
          <div style={{ 
            fontSize: '40px', 
            fontFamily: 'Garamond, serif', 
            color: '#1A1A1A',
            lineHeight: 1, 
            margin: 0,
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            transform: 'translateY(-3px)'
          }}>
            ø
          </div>
          <div className="max-w-2xl mx-auto">
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', lineHeight: '130%', marginBottom: '8px' }}>
              Protecting the Sacred Circle
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              All HØLY™ marks, logos, and visual elements are protected. Use only approved assets from this design system. 
              Never modify proportions, colors, or spacing. When in doubt, consult the brand guidelines or reach out to the design team.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}