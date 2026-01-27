import React from 'react';
import { HOLYGem, HOLYDocument, HOLYDna, HOLYSquare, HOLYPackage, HOLYSparkle, HOLYPrinter } from '../components/icons/HOLYIcons';

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-4xl mx-auto px-8 py-24">
          <div className="text-center">
            <div className="inline-block mb-8">
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '2px solid #AAB5B2',
                boxShadow: '0 0 60px rgba(170, 181, 178, 0.6)',
                margin: '0 auto'
              }}></div>
            </div>
            <h1 style={{
              fontFamily: 'Garamond, serif',
              fontSize: '64px',
              color: '#FFFFFF',
              margin: '0 0 24px 0',
              letterSpacing: '0.5px'
            }}>
              HØLY | Ritual Care<span style={{ fontSize: '32px' }}>™</span>
            </h1>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '22px',
              color: '#FFFFFF',
              opacity: 0.9,
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '160%'
            }}>
              A sacred luxury wellness brand creating intentional rituals for body piercing aftercare, intimate care, and holistic self-care. Rooted in sophistication, accessibility, and reverence for the body.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 style={{
            fontFamily: 'Garamond, serif',
            fontSize: '48px',
            color: '#1A1A1A',
            margin: '0 0 16px 0'
          }}>
            About This Design System
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            color: '#1A1A1A',
            opacity: 0.7,
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: '160%'
          }}>
            System UI — HØLY<span style={{ fontSize: '9px' }}>™</span> is a comprehensive design system that defines the visual language, components, and standards for all HØLY<span style={{ fontSize: '9px' }}>™</span> brand touchpoints—digital, print, and physical.
          </p>
        </div>

        {/* Main Sections */}
        <div className="space-y-6">
          {/* Foundation */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <HOLYGem size={32} color="#AAB5B2" opacity={1} strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'Garamond, serif',
                  fontSize: '28px',
                  color: '#1A1A1A',
                  margin: '0 0 12px 0'
                }}>
                  Foundation
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: '#1A1A1A',
                  opacity: 0.7,
                  lineHeight: '160%',
                  marginBottom: '12px'
                }}>
                  Start here to understand the system's governance, changelog, and Root Architecture—our zero-fragmentation approach to design tokens.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    File Overview
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Root Architecture v3.0
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Brand */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <HOLYDna size={32} color="#D9C4BB" opacity={1} strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'Garamond, serif',
                  fontSize: '28px',
                  color: '#1A1A1A',
                  margin: '0 0 12px 0'
                }}>
                  Brand
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: '#1A1A1A',
                  opacity: 0.7,
                  lineHeight: '160%',
                  marginBottom: '12px'
                }}>
                  Explore the HØLY<span style={{ fontSize: '7.5px' }}>™</span> brand identity including product systems, visual direction, voice/tone, design tokens, icons, and motion principles.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Systems & Products
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Visual Direction
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Voice / Tone
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Tokens
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Icons & Marks
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Motion / States
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Components */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <HOLYPackage size={32} color="#5E6458" opacity={1} strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'Garamond, serif',
                  fontSize: '28px',
                  color: '#1A1A1A',
                  margin: '0 0 12px 0'
                }}>
                  Components
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: '#1A1A1A',
                  opacity: 0.7,
                  lineHeight: '160%',
                  marginBottom: '12px'
                }}>
                  Reusable UI building blocks including primitive elements, complex layouts, ritual-specific variants, and the universal label system.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Base Components
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    UI Components
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Ritual Systems
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Label System
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Experiences */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <HOLYSparkle size={32} color="#AAB5B2" opacity={1} strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'Garamond, serif',
                  fontSize: '28px',
                  color: '#1A1A1A',
                  margin: '0 0 12px 0'
                }}>
                  Experiences
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: '#1A1A1A',
                  opacity: 0.7,
                  lineHeight: '160%',
                  marginBottom: '12px'
                }}>
                  Complete page templates and user flows including homepage, product pages, Ritual Finder, search, navigation, and signup experiences.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Homepage
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Product Details
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Product Listing
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Ritual Finder
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Navigation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Print & Packaging */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <HOLYPrinter size={32} color="#9C887A" opacity={1} strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'Garamond, serif',
                  fontSize: '28px',
                  color: '#1A1A1A',
                  margin: '0 0 12px 0'
                }}>
                  Print & Packaging
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: '#1A1A1A',
                  opacity: 0.7,
                  lineHeight: '160%',
                  marginBottom: '12px'
                }}>
                  Print-specific tokens, production-ready product labels with US/EU variants, and premium packaging specifications including spot gloss and embossing.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Print Tokens
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Product Labels
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    hølymist<span style={{ fontSize: '6px' }}>™</span> Label v3.0
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Reference */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA', opacity: 0.6 }}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <HOLYDocument size={32} color="#8C8981" opacity={0.6} strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'Garamond, serif',
                  fontSize: '28px',
                  color: '#1A1A1A',
                  margin: '0 0 12px 0'
                }}>
                  Technical Reference
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: '#1A1A1A',
                  opacity: 0.7,
                  lineHeight: '160%',
                  marginBottom: '12px'
                }}>
                  Specialized components for email templates (Klaviyo/Shopify), mobile-native UI patterns, and print validation tools.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Email Components
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Mobile Components
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#5E6458',
                    backgroundColor: 'rgba(94, 100, 88, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    Print Components
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 p-12 rounded-2xl" style={{ backgroundColor: '#1A1A1A' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: '2px solid #AAB5B2',
            boxShadow: '0 0 30px rgba(170, 181, 178, 0.5)',
            margin: '0 auto 20px auto'
          }}></div>
          <h2 style={{
            fontFamily: 'Garamond, serif',
            fontSize: '32px',
            color: '#FFFFFF',
            margin: '0 0 12px 0'
          }}>
            Navigate with the Sidebar
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: '#FFFFFF',
            opacity: 0.8,
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '160%'
          }}>
            Use the left sidebar to explore any section of the design system. Start with Foundation → File Overview for governance and system instructions.
          </p>
        </div>

      </div>
    </div>
  );
}