import { HOLYSparkle, HOLYCircle, HOLYCart, HOLYHeart, HOLYWand, HOLYLeaf, HOLYDroplet, HOLYCompass } from '../components/icons/HOLYIcons';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Mail, Shield, Truck, CreditCard, MessageCircle, Star } from 'lucide-react';
import { RitualSystemBadge } from '../components/core-system/RitualSystemBadge';
import { EmailTable } from '../components/email/EmailTable';
import { PageQuickNav } from '../components/core-system/PageQuickNav';

export default function EmailComponentsPage() {
  const navItems = [
    { id: 'email-tokens', label: 'Design Tokens' },
    { id: 'email-header', label: 'Header' },
    { id: 'email-hero', label: 'Hero' },
    { id: 'product-block', label: 'Product Block' },
    { id: 'sticky-cta', label: 'Sticky CTA' },
    { id: 'lifestyle-block', label: 'Lifestyle Block' },
    { id: 'glow-divider', label: 'Glow Divider' },
    { id: 'ritual-system', label: 'Ritual System' },
    { id: 'trust-icons', label: 'Trust Icons' },
    { id: 'email-footer', label: 'Footer' },
  ];

  return (
    <div className="space-y-8">
      {/* Page Info */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <Mail size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Email Components — HØLY™
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Sacred email experiences designed for ESP platforms. Mobile-first, motion-inspired, and sensually minimal. Built with email client constraints: 600px width, safe fonts, inline styles, and touch-optimized interactions.
          </p>
        </div>
      </div>

      {/* Quick Navigation */}
      <PageQuickNav items={navItems} title="Jump to Component" />

      <div className="space-y-8">
        {/* EMAIL DESIGN TOKENS */}
        <div id="email-tokens" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYSparkle size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Email Design Tokens
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Email-safe design tokens aligned with HØLY™ brand system. These ensure consistent rendering across all email clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Typography */}
            <div>
              <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                Typography
              </h3>
              <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '180%' }}>
                <p><strong>Display:</strong> Georgia, serif</p>
                <p><strong>Body:</strong> Arial, Helvetica, sans-serif</p>
                <p><strong>H1:</strong> 32px / 120%</p>
                <p><strong>H2:</strong> 24px / 130%</p>
                <p><strong>Body:</strong> 16px / 160%</p>
                <p><strong>Small:</strong> 14px / 150%</p>
              </div>
            </div>

            {/* Spacing */}
            <div>
              <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                Mobile-First Spacing
              </h3>
              <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '180%' }}>
                <p><strong>Container:</strong> 600px max</p>
                <p><strong>Padding:</strong> 24px (mobile: 16px)</p>
                <p><strong>Section Gap:</strong> 40px</p>
                <p><strong>Block Gap:</strong> 24px</p>
                <p><strong>CTA Height:</strong> Min 44px</p>
              </div>
            </div>

            {/* Motion Effects */}
            <div>
              <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                Motion as Static Effect
              </h3>
              <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '180%' }}>
                <p><strong>Sacred Glow:</strong> 0 0 20px rgba(170,181,178,0.4)</p>
                <p><strong>Soft Shadow:</strong> 0 2px 8px rgba(0,0,0,0.08)</p>
                <p><strong>Aura Outline:</strong> 1px #AAB5B2 glow</p>
                <p><strong>Pulse Circle:</strong> Subtle border animate</p>
              </div>
            </div>
          </div>
        </div>

        {/* EMAIL HEADER - MOBILE NAV */}
        <div id="email-header" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYCircle size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Email Header — Mobile Navigation
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Minimal mobile-first header with logo and preheader text for inbox preview optimization.
            </p>
          </div>

          {/* Email Preview */}
          <div className="mx-auto" style={{ maxWidth: '600px', backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            {/* Preheader (hidden visually, shows in preview) */}
            <div style={{ 
              fontSize: '1px', 
              lineHeight: '1px', 
              maxHeight: '0px', 
              overflow: 'hidden',
              fontFamily: 'Arial, Helvetica, sans-serif'
            }}>
              Your sacred ritual awaits — New Ritual Renewal™ essentials inside
            </div>
            
            {/* Header Bar */}
            <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#FFFFFF' }}>
              <tr>
                <td style={{ padding: '20px 24px' }}>
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0">
                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <p style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '24px',
                          color: '#1A1A1A',
                          margin: 0,
                          letterSpacing: '0.5px'
                        }}>
                          HØLY™
                        </p>
                      </td>
                    </tr>
                  </EmailTable>
                </td>
              </tr>
            </EmailTable>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>Usage:</strong> Preheader text is hidden but appears in inbox preview. Keep under 100 characters. Header uses table-based layout for email client compatibility.
            </p>
          </div>
        </div>

        {/* EMAIL HERO - SINGLE IMAGE WITH HEADLINE */}
        <div id="email-hero" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYSparkle size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Email Hero — Sacred Announcement
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Full-width hero image with optional text overlay. Optimized for mobile with single-column layout.
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#FFFFFF' }}>
              <tr>
                <td style={{ position: 'relative' }}>
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1642333576378-ee73c518ff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwc2tpbmNhcmUlMjBzdG9uZSUyMHRleHR1cmV8ZW58MXx8fHwxNzYzMDgxMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Sacred ritual product"
                    style={{ width: '100%', display: 'block', height: 'auto' }}
                  />
                  {/* Text Overlay */}
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: 'rgba(249, 246, 240, 0.95)' }}>
                    <tr>
                      <td style={{ padding: '32px 24px', textAlign: 'center' }}>
                        <h1 style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '32px',
                          lineHeight: '120%',
                          color: '#1A1A1A',
                          margin: '0 0 12px 0'
                        }}>
                          New Ritual Renewal™
                        </h1>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '16px',
                          lineHeight: '160%',
                          color: '#1A1A1A',
                          margin: 0,
                          opacity: 0.8
                        }}>
                          Sacred essentials for your daily practice
                        </p>
                      </td>
                    </tr>
                  </EmailTable>
                </td>
              </tr>
            </EmailTable>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>Usage:</strong> Hero image should be 1200x800px minimum. Text overlay uses semi-transparent background for readability. Mobile-responsive with single column layout.
            </p>
          </div>
        </div>

        {/* PRODUCT BLOCK WITH SYSTEM LABELS */}
        <div id="product-block" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYLeaf size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Product Block — Ritual System Integration
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Product showcase with Ritual System badges, sacred glow effect, and mobile-optimized CTA.
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#F9F6F0' }}>
              <tr>
                <td style={{ padding: '24px' }}>
                  {/* Product Card with Glow */}
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ 
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 0 20px rgba(170, 181, 178, 0.3)',
                    borderRadius: '12px'
                  }}>
                    <tr>
                      <td style={{ padding: '0' }}>
                        <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1698664434322-94a43b98b9ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwY29zbWV0aWMlMjBib3R0bGUlMjBzaGFkb3d8ZW58MXx8fHwxNzYzMDgxMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Sacred Cleansing Balm"
                          style={{ width: '100%', display: 'block', height: 'auto', borderRadius: '12px 12px 0 0' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '24px' }}>
                        {/* System Badge */}
                        <div style={{ marginBottom: '12px' }}>
                          <EmailTable cellPadding="0" cellSpacing="0">
                            <tr>
                              <td style={{
                                backgroundColor: '#5E6458',
                                padding: '6px 12px',
                                borderRadius: '20px'
                              }}>
                                <p style={{
                                  fontFamily: 'Arial, Helvetica, sans-serif',
                                  fontSize: '12px',
                                  color: '#FFFFFF',
                                  margin: 0,
                                  letterSpacing: '0.5px'
                                }}>
                                  Ritual Renewal™
                                </p>
                              </td>
                            </tr>
                          </EmailTable>
                        </div>

                        {/* Product Title */}
                        <h3 style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '24px',
                          lineHeight: '130%',
                          color: '#1A1A1A',
                          margin: '0 0 8px 0'
                        }}>
                          Sacred Cleansing Balm
                        </h3>

                        {/* Description */}
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '16px',
                          lineHeight: '160%',
                          color: '#1A1A1A',
                          opacity: 0.8,
                          margin: '0 0 20px 0'
                        }}>
                          Gentle daily ritual cleanse with botanical oils and sacred minerals
                        </p>

                        {/* Price */}
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#1A1A1A',
                          margin: '0 0 20px 0'
                        }}>
                          $68
                        </p>

                        {/* CTA Button with Sacred Glow */}
                        <EmailTable width="100%" cellPadding="0" cellSpacing="0">
                          <tr>
                            <td style={{ textAlign: 'center' }}>
                              <a href="#" style={{
                                display: 'inline-block',
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#1A1A1A',
                                backgroundColor: '#D9C4BB',
                                padding: '14px 32px',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08), 0 0 16px rgba(217, 196, 187, 0.4)',
                                minHeight: '44px',
                                lineHeight: '160%'
                              }}>
                                Add to Ritual
                              </a>
                            </td>
                          </tr>
                        </EmailTable>
                      </td>
                    </tr>
                  </EmailTable>
                </td>
              </tr>
            </EmailTable>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>Usage:</strong> Product block includes sacred glow shadow effect. CTA button meets 44px minimum height for mobile tap targets. Ritual System badge uses inline table for cross-client compatibility.
            </p>
          </div>
        </div>

        {/* STICKY CTA BAR */}
        <div id="sticky-cta" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYCart size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Sticky CTA Bar — Motion-Inspired
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Persistent call-to-action with pulse aura effect. Mobile-optimized with full-width tap target.
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#F9F6F0' }}>
              <tr>
                <td style={{ padding: '0' }}>
                  {/* Sticky Bar */}
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{
                    backgroundColor: '#1A1A1A',
                    boxShadow: '0 -2px 12px rgba(0, 0, 0, 0.15), 0 0 24px rgba(170, 181, 178, 0.3)',
                    border: '1px solid rgba(170, 181, 178, 0.5)'
                  }}>
                    <tr>
                      <td style={{ padding: '16px 24px' }}>
                        <EmailTable width="100%" cellPadding="0" cellSpacing="0">
                          <tr>
                            <td style={{ textAlign: 'center' }}>
                              <a href="#" style={{
                                display: 'inline-block',
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#1A1A1A',
                                backgroundColor: '#D9C4BB',
                                padding: '16px 48px',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                width: '100%',
                                maxWidth: '400px',
                                boxShadow: '0 0 20px rgba(217, 196, 187, 0.5)',
                                minHeight: '44px'
                              }}>
                                Complete Your Ritual — $68
                              </a>
                            </td>
                          </tr>
                        </EmailTable>
                      </td>
                    </tr>
                  </EmailTable>
                </td>
              </tr>
            </EmailTable>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>Usage:</strong> Sticky CTA uses pulse aura effect with subtle glow. Temple Black background with white text meets WCAG AAA compliance. Full-width button optimized for mobile tapping.
            </p>
          </div>
        </div>

        {/* LIFESTYLE BLOCK - IMAGE + TESTIMONIAL */}
        <div id="lifestyle-block" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYHeart size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Lifestyle Block — Testimonial + Image
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Sacred storytelling module with image and testimonial. Soft glow treatment for elevated brand presence.
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#F9F6F0' }}>
              <tr>
                <td style={{ padding: '32px 24px' }}>
                  {/* Image */}
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: '24px' }}>
                    <tr>
                      <td>
                        <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1676256632648-422a85b88b4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVhdXR5JTIwcHJvZHVjdCUyMGNvbmNyZXRlfGVufDF8fHx8MTc2MzA4MTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Sacred ritual moment"
                          style={{ 
                            width: '100%', 
                            display: 'block', 
                            height: 'auto', 
                            borderRadius: '8px',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                          }}
                        />
                      </td>
                    </tr>
                  </EmailTable>

                  {/* Quote Block with Soft Glow */}
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    boxShadow: '0 0 16px rgba(170, 181, 178, 0.25)'
                  }}>
                    <tr>
                      <td style={{ padding: '24px' }}>
                        <p style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '18px',
                          fontStyle: 'italic',
                          lineHeight: '160%',
                          color: '#1A1A1A',
                          margin: '0 0 16px 0'
                        }}>
                          "This ritual has transformed my morning practice. The scent, the texture—it feels truly sacred."
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#AAB5B2',
                            display: 'inline-block'
                          }}></div>
                          <div style={{ display: 'inline-block' }}>
                            <p style={{
                              fontFamily: 'Arial, Helvetica, sans-serif',
                              fontSize: '14px',
                              fontWeight: '600',
                              color: '#1A1A1A',
                              margin: '0 0 2px 0'
                            }}>
                              Sarah M.
                            </p>
                            <p style={{
                              fontFamily: 'Arial, Helvetica, sans-serif',
                              fontSize: '13px',
                              color: '#1A1A1A',
                              opacity: 0.6,
                              margin: 0
                            }}>
                              Ritual Member
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </EmailTable>
                </td>
              </tr>
            </EmailTable>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>Usage:</strong> Lifestyle block uses soft glow on quote container. Image-first layout optimized for mobile. Avatar placeholder uses brand color Fogstone Blue.
            </p>
          </div>
        </div>

        {/* GLOW DIVIDER */}
        <div id="glow-divider" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYWand size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Sacred Glow Divider
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Ethereal section divider with aura glow effect. Creates breathing space between email sections.
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#F9F6F0' }}>
              <tr>
                <td style={{ padding: '40px 24px' }}>
                  {/* Glow Divider */}
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0">
                    <tr>
                      <td style={{ textAlign: 'center', padding: '0 48px' }}>
                        <div style={{
                          height: '1px',
                          backgroundColor: '#AAB5B2',
                          boxShadow: '0 0 12px rgba(170, 181, 178, 0.6)',
                          margin: '0 auto'
                        }}></div>
                      </td>
                    </tr>
                  </EmailTable>

                  {/* Alternative: Centered Glow Circle */}
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ marginTop: '40px' }}>
                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#AAB5B2',
                          boxShadow: '0 0 16px rgba(170, 181, 178, 0.8)',
                          margin: '0 auto'
                        }}></div>
                      </td>
                    </tr>
                  </EmailTable>
                </td>
              </tr>
            </EmailTable>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>Usage:</strong> Two divider variants: horizontal glow line and centered glow circle. Use between major email sections to create sacred breathing space.
            </p>
          </div>
        </div>

        {/* RITUAL SYSTEM HIGHLIGHT */}
        <div id="ritual-system" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYCompass size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Ritual System Highlight
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Feature a complete Ritual System with color, icon, and description. Educates subscribers on product families.
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#F9F6F0' }}>
              <tr>
                <td style={{ padding: '32px 24px' }}>
                  {/* System Card */}
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                    border: '2px solid #5E6458'
                  }}>
                    <tr>
                      <td style={{ padding: '32px 24px' }}>
                        {/* Icon Circle */}
                        <EmailTable cellPadding="0" cellSpacing="0" style={{ marginBottom: '20px' }}>
                          <tr>
                            <td>
                              <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '50%',
                                backgroundColor: '#5E6458',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 20px rgba(94, 100, 88, 0.4)'
                              }}>
                                <span style={{
                                  fontFamily: 'Georgia, serif',
                                  fontSize: '24px',
                                  color: '#F9F6F0'
                                }}>
                                  ∞
                                </span>
                              </div>
                            </td>
                          </tr>
                        </EmailTable>

                        {/* System Name */}
                        <h3 style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '28px',
                          lineHeight: '120%',
                          color: '#1A1A1A',
                          margin: '0 0 12px 0'
                        }}>
                          Ritual Renewal™
                        </h3>

                        {/* Description */}
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '16px',
                          lineHeight: '160%',
                          color: '#1A1A1A',
                          opacity: 0.8,
                          margin: '0 0 24px 0'
                        }}>
                          Daily essentials for skin renewal and sacred self-care. Botanical-powered formulas designed for gentle transformation.
                        </p>

                        {/* CTA */}
                        <EmailTable width="100%" cellPadding="0" cellSpacing="0">
                          <tr>
                            <td>
                              <a href="#" style={{
                                display: 'inline-block',
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#FFFFFF',
                                backgroundColor: '#5E6458',
                                padding: '14px 32px',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                minHeight: '44px'
                              }}>
                                Explore Ritual Renewal™
                              </a>
                            </td>
                          </tr>
                        </EmailTable>
                      </td>
                    </tr>
                  </EmailTable>
                </td>
              </tr>
            </EmailTable>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>Usage:</strong> Ritual System highlight uses system color (Relic Green) for border and icon background. Icon has sacred glow effect. Educates subscribers about product families and brand philosophy.
            </p>
          </div>
        </div>

        {/* TRUST ICONS BLOCK */}
        <div id="trust-icons" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <Shield size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Trust Icons — Assurance Block
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Build confidence with payment, shipping, and support assurance icons. Uses 2D line iconography only.
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#F9F6F0' }}>
              <tr>
                <td style={{ padding: '32px 24px' }}>
                  {/* Trust Icons Grid */}
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0">
                    <tr>
                      {/* Free Shipping */}
                      <td width="33%" style={{ textAlign: 'center', padding: '0 12px' }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          backgroundColor: '#FFFFFF',
                          margin: '0 auto 12px auto',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                        }}>
                          {/* Truck icon placeholder */}
                          <div style={{ width: '24px', height: '24px', color: '#1A1A1A' }}>📦</div>
                        </div>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#1A1A1A',
                          margin: '0 0 4px 0'
                        }}>
                          Free Shipping
                        </p>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '12px',
                          color: '#1A1A1A',
                          opacity: 0.6,
                          margin: 0
                        }}>
                          On orders $50+
                        </p>
                      </td>

                      {/* Secure Payment */}
                      <td width="33%" style={{ textAlign: 'center', padding: '0 12px' }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          backgroundColor: '#FFFFFF',
                          margin: '0 auto 12px auto',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                        }}>
                          <div style={{ width: '24px', height: '24px', color: '#1A1A1A' }}>🔒</div>
                        </div>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#1A1A1A',
                          margin: '0 0 4px 0'
                        }}>
                          Secure Payment
                        </p>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '12px',
                          color: '#1A1A1A',
                          opacity: 0.6,
                          margin: 0
                        }}>
                          256-bit SSL
                        </p>
                      </td>

                      {/* AI Support */}
                      <td width="33%" style={{ textAlign: 'center', padding: '0 12px' }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          backgroundColor: '#FFFFFF',
                          margin: '0 auto 12px auto',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                        }}>
                          <div style={{ width: '24px', height: '24px', color: '#1A1A1A' }}>💬</div>
                        </div>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#1A1A1A',
                          margin: '0 0 4px 0'
                        }}>
                          YONI™ Support
                        </p>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '12px',
                          color: '#1A1A1A',
                          opacity: 0.6,
                          margin: 0
                        }}>
                          24/7 AI guidance
                        </p>
                      </td>
                    </tr>
                  </EmailTable>
                </td>
              </tr>
            </EmailTable>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>Usage:</strong> Trust icons use simple emoji placeholders for email safety. Replace with SVG icons exported as inline code for production. Three-column grid collapses to single column on mobile.
            </p>
          </div>
        </div>

        {/* EMAIL FOOTER */}
        <div id="email-footer" className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYCircle size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Email Footer — Legal & Support
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Complete footer with YONI™ support callout, social links, legal text, and unsubscribe.
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#F9F6F0' }}>
              <tr>
                <td style={{ padding: '32px 24px' }}>
                  {/* YONI Support Callout */}
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '32px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                  }}>
                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <p style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '18px',
                          color: '#1A1A1A',
                          margin: '0 0 8px 0'
                        }}>
                          Need guidance? Ask YONI™
                        </p>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '14px',
                          color: '#1A1A1A',
                          opacity: 0.7,
                          margin: '0 0 16px 0'
                        }}>
                          Your AI ritual assistant is here to help
                        </p>
                        <a href="#" style={{
                          display: 'inline-block',
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#1A1A1A',
                          textDecoration: 'underline'
                        }}>
                          Start Conversation →
                        </a>
                      </td>
                    </tr>
                  </EmailTable>

                  {/* Social Links */}
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: '24px' }}>
                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <a href="#" style={{ 
                          display: 'inline-block', 
                          margin: '0 12px',
                          color: '#1A1A1A',
                          textDecoration: 'none'
                        }}>Instagram</a>
                        <a href="#" style={{ 
                          display: 'inline-block', 
                          margin: '0 12px',
                          color: '#1A1A1A',
                          textDecoration: 'none'
                        }}>Twitter</a>
                        <a href="#" style={{ 
                          display: 'inline-block', 
                          margin: '0 12px',
                          color: '#1A1A1A',
                          textDecoration: 'none'
                        }}>Pinterest</a>
                      </td>
                    </tr>
                  </EmailTable>

                  {/* Brand */}
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: '16px' }}>
                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <p style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '20px',
                          color: '#1A1A1A',
                          margin: 0,
                          letterSpacing: '0.5px'
                        }}>
                          HØLY™
                        </p>
                      </td>
                    </tr>
                  </EmailTable>

                  {/* Legal Text */}
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: '20px' }}>
                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '12px',
                          lineHeight: '160%',
                          color: '#1A1A1A',
                          opacity: 0.6,
                          margin: 0
                        }}>
                          HØLY™ Brand Inc.<br />
                          123 Sacred Street, New York, NY 10001<br />
                          © 2025 All Rights Reserved
                        </p>
                      </td>
                    </tr>
                  </EmailTable>

                  {/* Unsubscribe */}
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0">
                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <a href="#" style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '12px',
                          color: '#1A1A1A',
                          textDecoration: 'underline',
                          opacity: 0.6
                        }}>
                          Unsubscribe
                        </a>
                        <span style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '12px',
                          color: '#1A1A1A',
                          opacity: 0.6,
                          margin: '0 8px'
                        }}>|</span>
                        <a href="#" style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '12px',
                          color: '#1A1A1A',
                          textDecoration: 'underline',
                          opacity: 0.6
                        }}>
                          Privacy Policy
                        </a>
                      </td>
                    </tr>
                  </EmailTable>
                </td>
              </tr>
            </EmailTable>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>Usage:</strong> Footer includes YONI™ AI support callout to drive engagement. Legal requirements met with unsubscribe link. Social links use text for maximum email client compatibility.
            </p>
          </div>
        </div>

        {/* FULL EMAIL EXAMPLE: PRODUCT DROP */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <Star size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Full Email Example — Product Drop
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Complete email assembly showcasing new product launch with hero, product block, trust icons, and sticky CTA.
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: '600px', border: '1px solid #DADADA' }}>
            {/* Assembled Email */}
            <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#F9F6F0' }}>
              {/* Header */}
              <tr>
                <td>
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#FFFFFF' }}>
                    <tr>
                      <td style={{ padding: '20px 24px', textAlign: 'center' }}>
                        <p style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '24px',
                          color: '#1A1A1A',
                          margin: 0,
                          letterSpacing: '0.5px'
                        }}>
                          HØLY™
                        </p>
                      </td>
                    </tr>
                  </EmailTable>
                </td>
              </tr>

              {/* Hero */}
              <tr>
                <td>
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1608571899793-a1c0c27a7555?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwYmVhdXR5JTIwYm90dGxlJTIwbGluZW58ZW58MXx8fHwxNzYzMDgxMjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="New ritual product"
                    style={{ width: '100%', display: 'block', height: 'auto' }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: 'rgba(249, 246, 240, 0.95)' }}>
                    <tr>
                      <td style={{ padding: '32px 24px', textAlign: 'center' }}>
                        <h1 style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '32px',
                          lineHeight: '120%',
                          color: '#1A1A1A',
                          margin: '0 0 12px 0'
                        }}>
                          New Sacred Serum
                        </h1>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '16px',
                          lineHeight: '160%',
                          color: '#1A1A1A',
                          margin: 0,
                          opacity: 0.8
                        }}>
                          Ritual Renewal™ essentials are here
                        </p>
                      </td>
                    </tr>
                  </EmailTable>
                </td>
              </tr>

              {/* Glow Divider */}
              <tr>
                <td style={{ padding: '40px 24px' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#AAB5B2',
                    boxShadow: '0 0 16px rgba(170, 181, 178, 0.8)',
                    margin: '0 auto'
                  }}></div>
                </td>
              </tr>

              {/* Product Block */}
              <tr>
                <td style={{ padding: '0 24px 32px 24px' }}>
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0" style={{ 
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 0 20px rgba(170, 181, 178, 0.3)',
                    borderRadius: '12px'
                  }}>
                    <tr>
                      <td style={{ padding: '24px' }}>
                        <div style={{ marginBottom: '12px' }}>
                          <EmailTable cellPadding="0" cellSpacing="0">
                            <tr>
                              <td style={{
                                backgroundColor: '#5E6458',
                                padding: '6px 12px',
                                borderRadius: '20px'
                              }}>
                                <p style={{
                                  fontFamily: 'Arial, Helvetica, sans-serif',
                                  fontSize: '12px',
                                  color: '#FFFFFF',
                                  margin: 0,
                                  letterSpacing: '0.5px'
                                }}>
                                  Ritual Renewal™
                                </p>
                              </td>
                            </tr>
                          </EmailTable>
                        </div>
                        <h3 style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '24px',
                          color: '#1A1A1A',
                          margin: '0 0 8px 0'
                        }}>
                          Temple Renewal Serum
                        </h3>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '16px',
                          lineHeight: '160%',
                          color: '#1A1A1A',
                          opacity: 0.8,
                          margin: '0 0 16px 0'
                        }}>
                          Daily ritual essence with botanical oils
                        </p>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#1A1A1A',
                          margin: '0 0 20px 0'
                        }}>
                          $85
                        </p>
                        <EmailTable width="100%" cellPadding="0" cellSpacing="0">
                          <tr>
                            <td style={{ textAlign: 'center' }}>
                              <a href="#" style={{
                                display: 'inline-block',
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#1A1A1A',
                                backgroundColor: '#D9C4BB',
                                padding: '14px 32px',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08), 0 0 16px rgba(217, 196, 187, 0.4)',
                                minHeight: '44px'
                              }}>
                                Add to Ritual
                              </a>
                            </td>
                          </tr>
                        </EmailTable>
                      </td>
                    </tr>
                  </EmailTable>
                </td>
              </tr>

              {/* Trust Icons */}
              <tr>
                <td style={{ padding: '0 24px 32px 24px' }}>
                  <EmailTable width="100%" cellPadding="0" cellSpacing="0">
                    <tr>
                      <td width="33%" style={{ textAlign: 'center', padding: '0 8px' }}>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#1A1A1A',
                          margin: '0 0 4px 0'
                        }}>
                          Free Shipping
                        </p>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '11px',
                          color: '#1A1A1A',
                          opacity: 0.6,
                          margin: 0
                        }}>
                          Orders $50+
                        </p>
                      </td>
                      <td width="33%" style={{ textAlign: 'center', padding: '0 8px' }}>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#1A1A1A',
                          margin: '0 0 4px 0'
                        }}>
                          Secure
                        </p>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '11px',
                          color: '#1A1A1A',
                          opacity: 0.6,
                          margin: 0
                        }}>
                          256-bit SSL
                        </p>
                      </td>
                      <td width="33%" style={{ textAlign: 'center', padding: '0 8px' }}>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#1A1A1A',
                          margin: '0 0 4px 0'
                        }}>
                          AI Support
                        </p>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '11px',
                          color: '#1A1A1A',
                          opacity: 0.6,
                          margin: 0
                        }}>
                          24/7 YONI™
                        </p>
                      </td>
                    </tr>
                  </EmailTable>
                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td style={{ padding: '32px 24px', textAlign: 'center', borderTop: '1px solid #DADADA' }}>
                  <p style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '20px',
                    color: '#1A1A1A',
                    margin: '0 0 16px 0'
                  }}>
                    HØLY™
                  </p>
                  <p style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '12px',
                    color: '#1A1A1A',
                    opacity: 0.6,
                    margin: '0 0 12px 0'
                  }}>
                    © 2025 HØLY™ Brand Inc.
                  </p>
                  <a href="#" style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '12px',
                    color: '#1A1A1A',
                    textDecoration: 'underline',
                    opacity: 0.6
                  }}>
                    Unsubscribe
                  </a>
                </td>
              </tr>
            </EmailTable>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>Example Use Case:</strong> Product drop email showcases new launch with sacred visual hierarchy. Hero → Divider → Product → Trust → Footer. Mobile-first with all components optimized for touch. Sacred glow effects on product card create luxury presence in inbox.
            </p>
          </div>
        </div>

        {/* FULL EMAIL EXAMPLE: RITUAL EDUCATION */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYWand size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Full Email Example — Ritual Education
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Educational content email featuring Ritual System highlight, lifestyle imagery, and testimonial.
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: '600px', border: '1px solid #DADADA' }}>
            <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#F9F6F0' }}>
              {/* Header */}
              <tr>
                <td>
                  <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#FFFFFF' }}>
                    <tr>
                      <td style={{ padding: '20px 24px', textAlign: 'center' }}>
                        <p style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '24px',
                          color: '#1A1A1A',
                          margin: 0
                        }}>
                          HØLY™
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Text Header */}
              <tr>
                <td style={{ padding: '40px 24px 24px 24px', textAlign: 'center' }}>
                  <h1 style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '32px',
                    lineHeight: '120%',
                    color: '#1A1A1A',
                    margin: '0 0 12px 0'
                  }}>
                    The Art of Sacred Renewal
                  </h1>
                  <p style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '16px',
                    lineHeight: '160%',
                    color: '#1A1A1A',
                    opacity: 0.8,
                    margin: 0
                  }}>
                    Discover the ritual system designed for transformation
                  </p>
                </td>
              </tr>

              {/* Ritual System Highlight */}
              <tr>
                <td style={{ padding: '0 24px 32px 24px' }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '2px solid #5E6458'
                  }}>
                    <tr>
                      <td style={{ padding: '32px 24px', textAlign: 'center' }}>
                        <div style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '50%',
                          backgroundColor: '#5E6458',
                          margin: '0 auto 20px auto',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <span style={{
                            fontFamily: 'Georgia, serif',
                            fontSize: '24px',
                            color: '#F9F6F0'
                          }}>∞</span>
                        </div>
                        <h3 style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '24px',
                          color: '#1A1A1A',
                          margin: '0 0 12px 0'
                        }}>
                          Ritual Renewal™
                        </h3>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '16px',
                          lineHeight: '160%',
                          color: '#1A1A1A',
                          opacity: 0.8,
                          margin: 0
                        }}>
                          Daily essentials for skin renewal and sacred self-care
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Lifestyle Image */}
              <tr>
                <td style={{ padding: '0 24px 24px 24px' }}>
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1587145717184-e7ee5311253d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXV0cmFsJTIwd2VsbG5lc3MlMjBwcm9kdWN0JTIwbWFyYmxlfGVufDF8fHx8MTc2MzA4MTI0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Sacred ritual moment"
                    style={{ 
                      width: '100%', 
                      display: 'block',
                      borderRadius: '8px'
                    }}
                  />
                </td>
              </tr>

              {/* Testimonial */}
              <tr>
                <td style={{ padding: '0 24px 32px 24px' }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    boxShadow: '0 0 16px rgba(170, 181, 178, 0.25)'
                  }}>
                    <tr>
                      <td style={{ padding: '24px' }}>
                        <p style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '16px',
                          fontStyle: 'italic',
                          lineHeight: '160%',
                          color: '#1A1A1A',
                          margin: '0 0 12px 0'
                        }}>
                          "This ritual transformed my morning. Truly sacred."
                        </p>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#1A1A1A',
                          margin: 0
                        }}>
                          — Sarah M., Ritual Member
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td style={{ padding: '32px 24px', textAlign: 'center', borderTop: '1px solid #DADADA' }}>
                  <p style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '20px',
                    color: '#1A1A1A',
                    margin: '0 0 16px 0'
                  }}>
                    HØLY™
                  </p>
                  <a href="#" style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '12px',
                    color: '#1A1A1A',
                    textDecoration: 'underline',
                    opacity: 0.6
                  }}>
                    Unsubscribe
                  </a>
                </td>
              </tr>
            </table>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>Example Use Case:</strong> Ritual education email focuses on brand storytelling and system philosophy. Uses Ritual System highlight to educate, lifestyle imagery for aspiration, and testimonial for social proof. No hard sell—builds relationship and brand affinity.
            </p>
          </div>
        </div>

        {/* FULL EMAIL EXAMPLE: MEMBERSHIP OFFER */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYHeart size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Full Email Example — Membership Offer
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Exclusive membership invitation with benefits, sticky CTA, and urgency messaging.
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: '600px', border: '1px solid #DADADA' }}>
            <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#F9F6F0' }}>
              {/* Header */}
              <tr>
                <td>
                  <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#FFFFFF' }}>
                    <tr>
                      <td style={{ padding: '20px 24px', textAlign: 'center' }}>
                        <p style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '24px',
                          color: '#1A1A1A',
                          margin: 0
                        }}>
                          HØLY™
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Hero with Pulse Aura */}
              <tr>
                <td style={{ padding: '40px 24px' }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" style={{
                    backgroundColor: '#1A1A1A',
                    borderRadius: '12px',
                    boxShadow: '0 0 24px rgba(170, 181, 178, 0.5)',
                    border: '2px solid #AAB5B2'
                  }}>
                    <tr>
                      <td style={{ padding: '40px 24px', textAlign: 'center' }}>
                        <h1 style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '32px',
                          lineHeight: '120%',
                          color: '#FFFFFF',
                          margin: '0 0 12px 0'
                        }}>
                          Join the Sacred Circle
                        </h1>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '16px',
                          lineHeight: '160%',
                          color: '#FFFFFF',
                          opacity: 0.9,
                          margin: 0
                        }}>
                          Exclusive membership benefits await
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Benefits List */}
              <tr>
                <td style={{ padding: '0 24px 32px 24px' }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '24px'
                  }}>
                    <tr>
                      <td>
                        <h3 style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '20px',
                          color: '#1A1A1A',
                          margin: '0 0 16px 0'
                        }}>
                          Member Benefits
                        </h3>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '15px',
                          lineHeight: '180%',
                          color: '#1A1A1A',
                          margin: '0 0 8px 0'
                        }}>
                          ✓ 15% off all Ritual Systems™
                        </p>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '15px',
                          lineHeight: '180%',
                          color: '#1A1A1A',
                          margin: '0 0 8px 0'
                        }}>
                          ✓ Early access to new releases
                        </p>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '15px',
                          lineHeight: '180%',
                          color: '#1A1A1A',
                          margin: '0 0 8px 0'
                        }}>
                          ✓ Priority YONI™ AI support
                        </p>
                        <p style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '15px',
                          lineHeight: '180%',
                          color: '#1A1A1A',
                          margin: 0
                        }}>
                          ✓ Exclusive ritual workshops
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* CTA */}
              <tr>
                <td style={{ padding: '0 24px 32px 24px' }}>
                  <table width="100%" cellPadding="0" cellSpacing="0">
                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <a href="#" style={{
                          display: 'inline-block',
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#1A1A1A',
                          backgroundColor: '#D9C4BB',
                          padding: '16px 48px',
                          textDecoration: 'none',
                          borderRadius: '8px',
                          boxShadow: '0 0 20px rgba(217, 196, 187, 0.5)',
                          minHeight: '44px'
                        }}>
                          Become a Member
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Urgency Note */}
              <tr>
                <td style={{ padding: '0 24px 32px 24px', textAlign: 'center' }}>
                  <p style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '13px',
                    color: '#1A1A1A',
                    opacity: 0.7,
                    margin: 0
                  }}>
                    Limited spots available — Join before midnight
                  </p>
                </td>
              </tr>

              {/* Sticky CTA Bar */}
              <tr>
                <td>
                  <table width="100%" cellPadding="0" cellSpacing="0" style={{
                    backgroundColor: '#1A1A1A',
                    boxShadow: '0 -2px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                    <tr>
                      <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                        <a href="#" style={{
                          display: 'inline-block',
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#1A1A1A',
                          backgroundColor: '#D9C4BB',
                          padding: '14px 32px',
                          textDecoration: 'none',
                          borderRadius: '8px',
                          minHeight: '44px'
                        }}>
                          Join Now
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td style={{ padding: '32px 24px', textAlign: 'center', backgroundColor: '#F9F6F0' }}>
                  <p style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '20px',
                    color: '#1A1A1A',
                    margin: '0 0 16px 0'
                  }}>
                    HØLY™
                  </p>
                  <a href="#" style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '12px',
                    color: '#1A1A1A',
                    textDecoration: 'underline',
                    opacity: 0.6
                  }}>
                    Unsubscribe
                  </a>
                </td>
              </tr>
            </table>
          </div>

          {/* Usage Note */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%', margin: 0 }}>
              <strong>Example Use Case:</strong> Membership offer uses pulse aura effect on hero to create urgency. Benefits list with checkmarks, primary CTA, urgency note, and sticky bottom CTA for maximum conversion. Temple Black hero with white text meets WCAG AAA accessibility.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
