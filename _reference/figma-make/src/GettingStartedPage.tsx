import React from 'react';
import { ArrowRight, Package, Palette, Type, Zap, Shield, Sparkles, Mail, CheckCircle2, Info } from 'lucide-react';

export default function GettingStartedPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      {/* Info Banner */}
      <div className="sticky top-0 z-50 px-8 py-3" style={{ backgroundColor: '#AAB5B2' }}>
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <Info size={18} color="#FFFFFF" />
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#FFFFFF',
            margin: 0
          }}>
            This is a design system reference. Links are for documentation purposes — use the sidebar navigation to explore pages.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-6xl mx-auto px-8 py-20">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#AAB5B2',
                boxShadow: '0 0 40px rgba(170, 181, 178, 0.6)',
                margin: '0 auto'
              }}></div>
            </div>
            <h1 style={{
              fontFamily: 'Garamond, serif',
              fontSize: '56px',
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              letterSpacing: '0.5px'
            }}>
              System UI — HØLY<span style={{ fontSize: '28px' }}>™</span>
            </h1>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px',
              color: '#FFFFFF',
              opacity: 0.8,
              maxWidth: '600px',
              margin: '0 auto 32px auto',
              lineHeight: '150%'
            }}>
              A comprehensive design system for creating sacred, luxury digital experiences with ADA compliance and Auto Layout principles.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection('quick-start')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all cursor-pointer"
                style={{
                  backgroundColor: '#AAB5B2',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: 'none',
                  boxShadow: '0 0 20px rgba(170, 181, 178, 0.4)'
                }}
              >
                Get Started
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection('core-principles')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all cursor-pointer"
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                Learn Principles
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        
        {/* Quick Start Section */}
        <div id="quick-start" className="mb-20">
          <div className="text-center mb-12">
            <h2 style={{
              fontFamily: 'Garamond, serif',
              fontSize: '40px',
              color: '#1A1A1A',
              margin: '0 0 12px 0'
            }}>
              Quick Start Guide
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#1A1A1A',
              opacity: 0.7,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Follow these steps to begin implementing the HØLY<span style={{ fontSize: '8px' }}>™</span> design system in your projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Step 1 */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: '#AAB5B2' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: '700', color: '#FFFFFF' }}>1</span>
              </div>
              <h3 style={{
                fontFamily: 'Garamond, serif',
                fontSize: '24px',
                color: '#1A1A1A',
                margin: '0 0 8px 0'
              }}>
                Review Tokens
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#1A1A1A',
                opacity: 0.7,
                lineHeight: '150%',
                marginBottom: '16px'
              }}>
                Start with the color palette, typography system, and spacing scale defined in the Tokens page.
              </p>
              <div
                className="inline-flex items-center gap-2"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#5E6458',
                  opacity: 0.5
                }}
              >
                Use sidebar: Tokens
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: '#5E6458' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: '700', color: '#FFFFFF' }}>2</span>
              </div>
              <h3 style={{
                fontFamily: 'Garamond, serif',
                fontSize: '24px',
                color: '#1A1A1A',
                margin: '0 0 8px 0'
              }}>
                Explore Components
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#1A1A1A',
                opacity: 0.7,
                lineHeight: '150%',
                marginBottom: '16px'
              }}>
                Browse pre-built buttons, cards, navigation elements, and email components ready for implementation.
              </p>
              <div
                className="inline-flex items-center gap-2"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#5E6458',
                  opacity: 0.5
                }}
              >
                Use sidebar: Base/UI Components
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: '#9C887A' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: '700', color: '#FFFFFF' }}>3</span>
              </div>
              <h3 style={{
                fontFamily: 'Garamond, serif',
                fontSize: '24px',
                color: '#1A1A1A',
                margin: '0 0 8px 0'
              }}>
                Follow Standards
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#1A1A1A',
                opacity: 0.7,
                lineHeight: '150%',
                marginBottom: '16px'
              }}>
                Adhere to trademark usage, icon guidelines, and accessibility requirements throughout your work.
              </p>
              <button
                onClick={() => scrollToSection('core-principles')}
                className="inline-flex items-center gap-2 cursor-pointer"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#5E6458',
                  background: 'none',
                  border: 'none',
                  padding: 0
                }}
              >
                View Standards
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div id="core-principles" className="mb-20">
          <div className="text-center mb-12">
            <h2 style={{
              fontFamily: 'Garamond, serif',
              fontSize: '40px',
              color: '#1A1A1A',
              margin: '0 0 12px 0'
            }}>
              Core Principles
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#1A1A1A',
              opacity: 0.7,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              These foundational principles guide every design decision in the HØLY<span style={{ fontSize: '8px' }}>™</span> system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sacred Luxury */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
              <Sparkles size={32} color="#AAB5B2" className="mb-4" />
              <h3 style={{
                fontFamily: 'Garamond, serif',
                fontSize: '24px',
                color: '#1A1A1A',
                margin: '0 0 12px 0'
              }}>
                Sacred Luxury Design
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#1A1A1A',
                opacity: 0.7,
                lineHeight: '150%'
              }}>
                Every element conveys sophistication and intentionality. Use refined color palettes (Fogstone Blue, Veil Clay, Relic Green), generous spacing, and subtle glow effects to create elevated experiences.
              </p>
            </div>

            {/* ADA Compliance */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
              <Shield size={32} color="#5E6458" className="mb-4" />
              <h3 style={{
                fontFamily: 'Garamond, serif',
                fontSize: '24px',
                color: '#1A1A1A',
                margin: '0 0 12px 0'
              }}>
                ADA/WCAG AAA Compliance
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#1A1A1A',
                opacity: 0.7,
                lineHeight: '150%'
              }}>
                All color combinations meet WCAG AAA standards. White text must be used on Smoky Umber (#9C887A) and Temple Black (#1A1A1A) backgrounds for proper contrast.
              </p>
            </div>

            {/* Auto Layout */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
              <Zap size={32} color="#9C887A" className="mb-4" />
              <h3 style={{
                fontFamily: 'Garamond, serif',
                fontSize: '24px',
                color: '#1A1A1A',
                margin: '0 0 12px 0'
              }}>
                Auto Layout Principles
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#1A1A1A',
                opacity: 0.7,
                lineHeight: '150%'
              }}>
                Following Shopify Polaris best practices, all components use consistent spacing scales, responsive behavior, and flexible layouts that adapt to content.
              </p>
            </div>

            {/* Typography System */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
              <Type size={32} color="#D9C4BB" className="mb-4" />
              <h3 style={{
                fontFamily: 'Garamond, serif',
                fontSize: '24px',
                color: '#1A1A1A',
                margin: '0 0 12px 0'
              }}>
                Typography Hierarchy
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#1A1A1A',
                opacity: 0.7,
                lineHeight: '150%'
              }}>
                Garamond for display and headings creates elegant, serif presence. Inter for body text ensures readability. Never override default typography tokens unless explicitly requested.
              </p>
            </div>
          </div>
        </div>

        {/* Essential Guidelines */}
        <div id="essential-guidelines" className="mb-20">
          <div className="text-center mb-12">
            <h2 style={{
              fontFamily: 'Garamond, serif',
              fontSize: '40px',
              color: '#1A1A1A',
              margin: '0 0 12px 0'
            }}>
              Essential Guidelines
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#1A1A1A',
              opacity: 0.7,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Critical standards that must be followed throughout the design system.
            </p>
          </div>

          <div className="p-8 rounded-2xl mb-6" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <div className="flex items-start gap-4">
              <CheckCircle2 size={24} color="#5E6458" className="flex-shrink-0 mt-1" />
              <div>
                <h3 style={{
                  fontFamily: 'Garamond, serif',
                  fontSize: '20px',
                  color: '#1A1A1A',
                  margin: '0 0 8px 0'
                }}>
                  Trademark Standards
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#1A1A1A',
                  opacity: 0.7,
                  lineHeight: '150%'
                }}>
                  All brand and product names require proper trademark symbols (™) at 50% of the base font size. Examples: HØLY<span style={{ fontSize: '7px' }}>™</span>, YONI<span style={{ fontSize: '7px' }}>™</span>, Ritual Renewal<span style={{ fontSize: '7px' }}>™</span>. This applies across all touchpoints.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl mb-6" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <div className="flex items-start gap-4">
              <CheckCircle2 size={24} color="#5E6458" className="flex-shrink-0 mt-1" />
              <div>
                <h3 style={{
                  fontFamily: 'Garamond, serif',
                  fontSize: '20px',
                  color: '#1A1A1A',
                  margin: '0 0 8px 0'
                }}>
                  Icon Standards
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#1A1A1A',
                  opacity: 0.7,
                  lineHeight: '150%'
                }}>
                  <strong>3D emojis are ONLY allowed in the Ritual Finder interface.</strong> All other components must use 2D line-art HØLY icons. This maintains visual consistency and professional aesthetics across the system.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl mb-6" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <div className="flex items-start gap-4">
              <CheckCircle2 size={24} color="#5E6458" className="flex-shrink-0 mt-1" />
              <div>
                <h3 style={{
                  fontFamily: 'Garamond, serif',
                  fontSize: '20px',
                  color: '#1A1A1A',
                  margin: '0 0 8px 0'
                }}>
                  Color Compliance
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#1A1A1A',
                  opacity: 0.7,
                  lineHeight: '150%'
                }}>
                  The v2.0 palette (Fogstone Blue #AAB5B2, Veil Clay #D9C4BB, Relic Green #5E6458, Limestone Oat #D7D0C5, Smoky Umber #9C887A, Weathered Halo #8C8981) must maintain WCAG AAA contrast ratios. White text is mandatory on dark backgrounds.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <div className="flex items-start gap-4">
              <CheckCircle2 size={24} color="#5E6458" className="flex-shrink-0 mt-1" />
              <div>
                <h3 style={{
                  fontFamily: 'Garamond, serif',
                  fontSize: '20px',
                  color: '#1A1A1A',
                  margin: '0 0 8px 0'
                }}>
                  Sacred Design Cues
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#1A1A1A',
                  opacity: 0.7,
                  lineHeight: '150%'
                }}>
                  Integrate luxury through subtle glow effects, generous whitespace, refined radius values (typically 12px-20px), and intentional shadow usage. Every element should feel considered and elevated.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* System Navigation */}
        <div id="system-navigation" className="mb-20">
          <div className="text-center mb-12">
            <h2 style={{
              fontFamily: 'Garamond, serif',
              fontSize: '40px',
              color: '#1A1A1A',
              margin: '0 0 12px 0'
            }}>
              Explore the System
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#1A1A1A',
              opacity: 0.7,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Navigate to key sections to begin implementing the HØLY<span style={{ fontSize: '8px' }}>™</span> design system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tokens */}
            <div
              className="p-6 rounded-2xl transition-all"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DADADA'
              }}
            >
              <Palette size={28} color="#AAB5B2" className="mb-3" />
              <h3 style={{
                fontFamily: 'Garamond, serif',
                fontSize: '20px',
                color: '#1A1A1A',
                margin: '0 0 6px 0'
              }}>
                Design Tokens
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#1A1A1A',
                opacity: 0.6,
                lineHeight: '150%',
                marginBottom: '12px'
              }}>
                Colors, typography, spacing, radius, and effects
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: '#5E6458',
                opacity: 0.5,
                fontStyle: 'italic'
              }}>
                Navigate via sidebar → Brand → Tokens
              </p>
            </div>

            {/* Components */}
            <div
              className="p-6 rounded-2xl transition-all"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DADADA'
              }}
            >
              <Package size={28} color="#5E6458" className="mb-3" />
              <h3 style={{
                fontFamily: 'Garamond, serif',
                fontSize: '20px',
                color: '#1A1A1A',
                margin: '0 0 6px 0'
              }}>
                Components
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#1A1A1A',
                opacity: 0.6,
                lineHeight: '150%',
                marginBottom: '12px'
              }}>
                Buttons, cards, navigation, and UI elements
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: '#5E6458',
                opacity: 0.5,
                fontStyle: 'italic'
              }}>
                Navigate via sidebar → Components → Base/UI Components
              </p>
            </div>

            {/* Email Components */}
            <div
              className="p-6 rounded-2xl transition-all"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DADADA'
              }}
            >
              <Mail size={28} color="#9C887A" className="mb-3" />
              <h3 style={{
                fontFamily: 'Garamond, serif',
                fontSize: '20px',
                color: '#1A1A1A',
                margin: '0 0 6px 0'
              }}>
                Email Components
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#1A1A1A',
                opacity: 0.6,
                lineHeight: '150%',
                marginBottom: '12px'
              }}>
                Email-safe templates and building blocks
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: '#5E6458',
                opacity: 0.5,
                fontStyle: 'italic'
              }}>
                Navigate via sidebar → Technical Reference → Email Components
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps CTA */}
        <div className="text-center p-12 rounded-2xl" style={{ backgroundColor: '#1A1A1A' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#AAB5B2',
            boxShadow: '0 0 30px rgba(170, 181, 178, 0.5)',
            margin: '0 auto 20px auto'
          }}></div>
          <h2 style={{
            fontFamily: 'Garamond, serif',
            fontSize: '32px',
            color: '#FFFFFF',
            margin: '0 0 12px 0'
          }}>
            Ready to Begin?
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: '#FFFFFF',
            opacity: 0.8,
            maxWidth: '500px',
            margin: '0 auto 24px auto',
            lineHeight: '150%'
          }}>
            Start exploring the design tokens and components to create elevated, accessible experiences.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#FFFFFF',
            opacity: 0.5,
            fontStyle: 'italic'
          }}>
            Use the sidebar to navigate to: Brand → Tokens
          </p>
        </div>

      </div>
    </div>
  );
}
