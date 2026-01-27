import { TM } from '../../components/core-system';
import { HOLYCompass, HOLYSparkle } from '../../components/icons/HOLYIcons';
import { useState } from 'react';

/**
 * ========================================
 * NAVIGATION PAGE  
 * HØLY | Ritual Care™ Design System
 * ========================================
 * 
 * Complete navigation system for Shopify theme.
 * Desktop/mobile navigation, mega menus, breadcrumbs, footer.
 * 
 * Engineering Handoff:
 * - Header as sections/header.liquid
 * - Mobile menu as separate snippet
 * - Mega menu data from link lists
 */

export default function NavigationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = {
    primary: [
      { label: 'Rituals', hasSubmenu: true },
      { label: 'Collections', hasSubmenu: true },
      { label: 'Philosophy', hasSubmenu: false },
      { label: 'Ritual Finder', hasSubmenu: false },
    ],
    rituals: [
      { label: 'CLEANSE', description: 'Purification & Renewal' },
      { label: 'NOURISH', description: 'Deep Hydration & Repair' },
      { label: 'PROTECT', description: 'Shield & Fortify' },
      { label: 'GLOW', description: 'Radiance & Luminosity' },
      { label: 'CALM', description: 'Soothe & Balance' },
      { label: 'RESTORE', description: 'Repair & Regenerate' },
    ],
    footer: [
      {
        title: 'Shop',
        links: ['All Rituals', 'New Arrivals', 'Best Sellers', 'Gift Sets'],
      },
      {
        title: 'Philosophy',
        links: ['Our Story', 'Sacred Self-Care', 'Botanical Purity', 'Sustainability'],
      },
      {
        title: 'Support',
        links: ['Contact', 'FAQ', 'Shipping', 'Returns'],
      },
      {
        title: 'Connect',
        links: ['Instagram', 'TikTok', 'Newsletter', 'Ritual Finder'],
      },
    ],
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="max-w-7xl mx-auto p-8 space-y-20">
        
        {/* Page Header */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-3">
              <HOLYCompass size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Navigation System
              </h1>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.7, marginBottom: '16px' }}>
              Complete navigation architecture for HØLY | Ritual Care<TM />. Desktop/mobile header, mega menus, footer, and breadcrumbs.
            </p>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.6, margin: 0 }}>
                <strong>Navigation Structure:</strong> Minimal header with mega menu support. Mobile: full-screen drawer. Footer: 4-column layout.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Desktop Header
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Minimal header with centered logo, primary navigation, and utility icons.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
            <div className="p-6" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #DADADA' }}>
              <div className="flex items-center justify-between">
                {/* Left: Navigation */}
                <nav className="flex items-center gap-8">
                  {navigation.primary.slice(0, 2).map((item) => (
                    <button
                      key={item.label}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#1A1A1A',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Center: Logo */}
                <div style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A' }}>
                  HØLY<TM variant="logo" />
                </div>

                {/* Right: Navigation + Icons */}
                <div className="flex items-center gap-8">
                  {navigation.primary.slice(2).map((item) => (
                    <button
                      key={item.label}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#1A1A1A',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="flex items-center gap-4">
                    <HOLYSparkle size={20} color="#1A1A1A" opacity={0.6} strokeWidth={1.5} />
                    <HOLYSparkle size={20} color="#1A1A1A" opacity={0.6} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
              Shopify Section: sections/header.liquid
            </p>
            <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<header class="site-header">
  <div class="header-container">
    <!-- Left Nav -->
    <nav class="header-nav header-nav-left">
      {% for link in linklists.main-menu.links limit: 2 %}
        <a href="{{ link.url }}" class="nav-link">{{ link.title }}</a>
      {% endfor %}
    </nav>

    <!-- Logo -->
    <div class="header-logo">
      <a href="/">
        HØLY<span class="trademark">™</span>
      </a>
    </div>

    <!-- Right Nav + Icons -->
    <div class="header-nav header-nav-right">
      {% for link in linklists.main-menu.links offset: 2 %}
        <a href="{{ link.url }}" class="nav-link">{{ link.title }}</a>
      {% endfor %}
      <div class="header-icons">
        {% render 'icon', icon_name: 'search' %}
        <a href="/cart">{% render 'icon', icon_name: 'cart' %}</a>
      </div>
    </div>
  </div>
</header>`}
            </pre>
          </div>
        </section>

        {/* Mega Menu */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Mega Menu (Rituals)
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Full-width dropdown showcasing all ritual categories.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
            <div className="p-12" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="grid grid-cols-3 gap-8">
                {navigation.rituals.map((ritual) => (
                  <div key={ritual.label} className="space-y-2">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {ritual.label}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      {ritual.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8" style={{ borderTop: '1px solid #DADADA' }}>
                <button style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#1A1A1A',
                  backgroundColor: '#D7D0C5',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}>
                  Find Your Ritual
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
              Shopify Snippet: snippets/mega-menu-rituals.liquid
            </p>
            <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<div class="mega-menu">
  <div class="mega-menu-grid">
    {% for link in linklists.rituals.links %}
      <div class="mega-menu-item">
        <a href="{{ link.url }}" class="mega-menu-link">
          <h3>{{ link.title }}</h3>
          <p>{{ link.object.metafields.custom.tagline }}</p>
        </a>
      </div>
    {% endfor %}
  </div>
  <div class="mega-menu-cta">
    <a href="/pages/ritual-finder" class="btn-secondary">
      Find Your Ritual
    </a>
  </div>
</div>`}
            </pre>
          </div>
        </section>

        {/* Mobile Navigation */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Mobile Navigation
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Full-screen drawer menu for mobile devices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mobile Header */}
            <div className="rounded-xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
              <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #DADADA' }}>
                <div className="flex items-center justify-between">
                  <button style={{ fontSize: '20px', border: 'none', background: 'none', cursor: 'pointer' }}>☰</button>
                  <div style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
                    HØLY<TM variant="logo" />
                  </div>
                  <button style={{ fontSize: '20px', border: 'none', background: 'none', cursor: 'pointer' }}>🛒</button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div className="rounded-xl overflow-hidden" style={{ border: '2px solid #DADADA', backgroundColor: '#FFFFFF' }}>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between pb-4" style={{ borderBottom: '1px solid #DADADA' }}>
                  <div style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
                    HØLY<TM variant="logo" />
                  </div>
                  <button style={{ fontSize: '20px', border: 'none', background: 'none', cursor: 'pointer' }}>×</button>
                </div>

                <nav className="space-y-4">
                  {navigation.primary.map((item) => (
                    <div key={item.label}>
                      <button
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '16px',
                          fontWeight: '500',
                          color: '#1A1A1A',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          textTransform: 'uppercase',
                          letterSpacing: '0.02em',
                          width: '100%',
                          textAlign: 'left',
                          padding: '12px 0',
                        }}
                      >
                        {item.label} {item.hasSubmenu && '→'}
                      </button>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
              Shopify Snippet: snippets/mobile-menu.liquid
            </p>
            <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<div class="mobile-menu" id="mobileMenu">
  <div class="mobile-menu-header">
    <div class="mobile-menu-logo">HØLY<span class="trademark">™</span></div>
    <button class="mobile-menu-close" onclick="closeMobileMenu()">×</button>
  </div>

  <nav class="mobile-menu-nav">
    {% for link in linklists.main-menu.links %}
      <a href="{{ link.url }}" class="mobile-menu-link">
        {{ link.title }}
        {% if link.links.size > 0 %}→{% endif %}
      </a>
    {% endfor %}
  </nav>
</div>

<script>
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('active');
}
</script>`}
            </pre>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Breadcrumbs
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Hierarchical navigation for product and collection pages.
            </p>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="flex items-center gap-2 mb-6">
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#8C8981' }}>Home</span>
              <span style={{ color: '#8C8981' }}>/</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#8C8981' }}>Rituals</span>
              <span style={{ color: '#8C8981' }}>/</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>CLEANSE</span>
            </div>

            <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
              <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0 }}>
{`{% comment %} snippets/breadcrumbs.liquid {% endcomment %}
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <a href="/">Home</a>
  {% if collection %}
    <span>/</span>
    <a href="{{ collection.url }}">{{ collection.title }}</a>
  {% endif %}
  {% if product %}
    <span>/</span>
    <span>{{ product.title }}</span>
  {% endif %}
</nav>`}
              </pre>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Footer
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              4-column footer with links, newsletter signup, and legal information.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
            <div className="p-12" style={{ backgroundColor: '#1A1A1A' }}>
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                {navigation.footer.map((column) => (
                  <div key={column.title}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#D7D0C5', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                      {column.title}
                    </p>
                    <div className="space-y-2">
                      {column.links.map((link) => (
                        <a 
                          key={link}
                          href="#"
                          style={{ 
                            display: 'block',
                            fontFamily: 'Inter, sans-serif', 
                            fontSize: '13px', 
                            color: '#F9F6F0', 
                            opacity: 0.7,
                            textDecoration: 'none',
                          }}
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#F9F6F0', opacity: 0.5, textAlign: 'center' }}>
                  © 2026 HØLY | Ritual Care<TM />. All rights reserved.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
              Shopify Section: sections/footer.liquid
            </p>
            <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<footer class="site-footer">
  <div class="footer-columns">
    {% for block in section.blocks %}
      <div class="footer-column">
        <h4>{{ block.settings.title }}</h4>
        {% assign linklist = linklists[block.settings.menu] %}
        <ul>
          {% for link in linklist.links %}
            <li><a href="{{ link.url }}">{{ link.title }}</a></li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>
  <div class="footer-legal">
    <p>© {{ 'now' | date: '%Y' }} HØLY | Ritual Care™</p>
  </div>
</footer>`}
            </pre>
          </div>
        </section>

        {/* Engineering Notes */}
        <section className="space-y-6">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Engineering Handoff Notes
            </h2>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#1A1A1A', border: '2px solid #1A1A1A' }}>
            <div className="space-y-4">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Sticky Header
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Header should be sticky on scroll with smooth transition. Add .header-sticky class when scrolled {'>'} 100px. Use CSS position: sticky for performance.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Mobile Breakpoint
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Switch to mobile navigation at 768px. Hide desktop nav, show hamburger menu. Mobile drawer should slide in from left with backdrop overlay.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Link Lists
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Navigation is driven by Shopify link lists (linklists). Create main-menu, rituals, footer-1, footer-2, etc. in Shopify Admin → Navigation.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Accessibility
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Use semantic HTML ({'<nav>, <ul>, <li>'}). Add aria-labels to navigation regions. Ensure keyboard navigation works (Tab, Enter). Mobile menu should trap focus.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}