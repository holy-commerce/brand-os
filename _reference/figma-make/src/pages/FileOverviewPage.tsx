import { AlertTriangle, XCircle, ArrowRight } from 'lucide-react';
import { HOLYGem, HOLYSquare, HOLYPackage, HOLYDna, HOLYEye, HOLYWand, HOLYCard, HOLYTriangle, HOLYTag, HOLYPrinter, HOLYDocument, HOLYCheck, HOLYAlert, HOLYLink, HOLYSparkle, HOLYCircle, HOLYLock, HOLYCompass, HOLYMail } from '../components/icons/HOLYIcons';

export default function FileOverviewPage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}
              >
                <p style={{ fontFamily: 'Garamond, serif', fontSize: '40px', color: '#1A1A1A', margin: 0, lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(-3px)' }}>
                  ø
                </p>
              </div>
            </div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', lineHeight: '120%' }}>
              HØLY™ Operating System
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', opacity: 0.7, lineHeight: '170%', maxWidth: '640px', margin: '0 auto' }}>
              A comprehensive ritual-luxury operating system merging Stackzero Commerce UI structure with HØLY™'s sacred brand identity. 
              Built for wellness e-commerce, print integration, and emotionally resonant digital experiences.
            </p>
          </div>

          {/* Version & Status */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, marginBottom: '8px' }}>
                VERSION
              </p>
              <p style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A' }}>
                v2.0
              </p>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, marginBottom: '8px' }}>
                LAST UPDATED
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
                Nov 13, 2025
              </p>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#AAB5B2', border: '1px solid #AAB5B2' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', opacity: 0.8, marginBottom: '8px' }}>
                STATUS
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#F9F6F0', fontWeight: '500' }}>
                Mobile-First Complete
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* System Audit Report */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #1A1A1A' }}>
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <HOLYDocument size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', color: '#1A1A1A', lineHeight: '120%' }}>
                System Audit Report
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Strategic integration of Stackzero Commerce UI (ui.stackzero.co) with HØLY v2.0 design language. System readiness audit for Shopify Storefront, DTC web, and print production. Integration completed November 11, 2025.
            </p>
          </div>

          {/* Pages That Pass */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <HOLYCheck size={24} color="#4A7C59" strokeWidth={2} />
              <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', lineHeight: '120%' }}>
                Pages That Pass
              </h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  page: 'Tokens',
                  icon: HOLYGem,
                  status: 'COMPLETE',
                  notes: 'All brand colors updated to v2.0 palette (Fogstone Blue #AAB5B2, Veil Clay #D9C4BB, Smoky Umber #9C887A). Proper naming conventions. Includes all core tokens: colors, spacing, radius, shadows.'
                },
                {
                  page: 'Base Components',
                  icon: HOLYSquare,
                  status: 'COMPLETE',
                  notes: 'Button variants, form inputs, badges, alerts, avatars properly structured. Follows Auto Layout principles.'
                },
                {
                  page: 'UI Components',
                  icon: HOLYPackage,
                  status: 'COMPLETE',
                  notes: 'Product cards, navigation, checkout elements, cart UI, promo announcements. Shopify-ready structure.'
                },
                {
                  page: 'Ritual Systems',
                  icon: HOLYDna,
                  status: 'COMPLETE',
                  notes: 'All five ritual systems (Aftercare™, Renewal™, Touch™, Union™, Vital™) with brand-specific variants and color applications.'
                },
                {
                  page: 'Icons & Marks',
                  icon: HOLYEye,
                  status: 'COMPLETE',
                  notes: 'HØLY logo, ø icon with optical centering rule (translateY(-3px)), brand marks, decorative elements.'
                },
                {
                  page: 'Motion / States',
                  icon: HOLYWand,
                  status: 'COMPLETE',
                  notes: 'Hover states, transitions, loading animations, focus states. Sacred Aura + Ritual Pulse implemented across all primary CTAs. All ADA compliant with proper timing (200-300ms).'
                },
                {
                  page: 'Ritual Finder Engine',
                  icon: HOLYSparkle,
                  status: 'COMPLETE',
                  notes: 'Mobile-first YONI™-guided discovery flow with 5 new components. ≥48px touch targets, 3-step branching logic, sticky progress bar. Integrated Sacred Aura + Ritual Pulse on all CTAs.'
                },
                {
                  page: 'Product Details Page (PDP)',
                  icon: HOLYPackage,
                  status: 'COMPLETE',
                  notes: 'Full desktop PDP experience with image gallery, ritual system selectors, ingredient cards, reviews, and related products. Sacred motion states applied to all CTAs and product cards.'
                },
                {
                  page: 'Product Listing Page (PLP)',
                  icon: HOLYPackage,
                  status: 'COMPLETE',
                  notes: 'Motion-enhanced shopping grid with dynamic filters, responsive layouts (mobile 2-col, desktop 3-col), Quick View modal, enhanced product cards with Sacred Aura hover + Ritual Pulse click. Filter sidebar/drawer with accordion groups.'
                },
                {
                  page: 'Mobile App Components',
                  icon: HOLYCircle,
                  status: 'COMPLETE',
                  notes: 'Mobile quiz components (progress indicator, choice cards, bottom CTA bar, question header), navigation, tab bars, and touch-optimized interactions documented.'
                },
                {
                  page: 'Core System Components',
                  icon: HOLYSquare,
                  status: 'LOCKED',
                  notes: 'Master component library with 8 locked components (GlobalNavigation, GlobalFooter, ProductCard, etc.). All instances reference master files. HomePage migrated. DO NOT detach or regenerate. See /guidelines/core-system-components-lockdown.md'
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                <div 
                  key={index}
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: 'rgba(74, 124, 89, 0.08)', border: '1px solid rgba(74, 124, 89, 0.2)' }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <IconComponent size={16} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
                        {item.page}
                      </p>
                    </div>
                    <div 
                      className="px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#4A7C59', color: '#F9F6F0', fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}
                    >
                      {item.status}
                    </div>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                    {item.notes}
                  </p>
                </div>
              );
              })}
            </div>
          </div>

          {/* Items Needing Correction */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <HOLYAlert size={24} color="#9C887A" />
              <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', lineHeight: '120%' }}>
                Items Needing Correction
              </h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  item: 'Print & Packaging Tokens',
                  issue: 'MISSING PAGE',
                  description: 'Need dedicated page for print-specific color tokens (CMYK, Pantone), paper stocks, foil finishes, spot-UV specifications.',
                  priority: 'HIGH'
                },
                {
                  item: 'Label Templates',
                  issue: 'MISSING PAGE',
                  description: 'Need packaging/label layouts with dielines, bleed margins, safe zones, and SKU block templates for product packaging.',
                  priority: 'HIGH'
                },
                {
                  item: 'Print Components',
                  issue: 'MISSING PAGE',
                  description: 'Need print-specific components including emboss specifications, die-cut shapes, fold lines, and print finishing details.',
                  priority: 'MEDIUM'
                },
                {
                  item: 'Product Card - "calendula" references',
                  issue: 'CONTENT UPDATE NEEDED',
                  description: 'ProductCards.tsx contains product name "Burnished Ochre Face Oil" (previously Calendula) - verify this is intentional product naming.',
                  priority: 'LOW'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: 'rgba(201, 163, 109, 0.1)', border: '1px solid rgba(201, 163, 109, 0.3)' }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
                      {item.item}
                    </p>
                    <div 
                      className="px-3 py-1 rounded-full"
                      style={{ 
                        backgroundColor: item.priority === 'HIGH' ? '#9C887A' : item.priority === 'MEDIUM' ? '#AAB5B2' : '#DADADA', 
                        color: item.priority === 'HIGH' ? '#F9F6F0' : item.priority === 'MEDIUM' ? '#F9F6F0' : '#1A1A1A', 
                        fontSize: '11px', 
                        fontFamily: 'Inter, sans-serif', 
                        fontWeight: '500' 
                      }}
                    >
                      {item.priority}
                    </div>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#9C887A', fontWeight: '500', marginBottom: '8px' }}>
                    {item.issue}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <ArrowRight size={24} style={{ color: '#1A1A1A' }} />
              <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', lineHeight: '120%', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <HOLYCircle size={20} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
                Next Steps & Owners
              </h3>
            </div>
            <div 
              className="p-8 rounded-xl space-y-6"
              style={{ backgroundColor: '#D9C4BB', border: '1px solid #DADADA' }}
            >
              <div className="space-y-4">
                {[
                  {
                    step: 'Create Print & Packaging Tokens page',
                    owner: 'Preston, Tiana & YONI™',
                    deadline: 'Week of Nov 18, 2025',
                    details: 'Include CMYK/Pantone conversions, paper stocks (300gsm, 120gsm), foil colors (Brushed Bronze, Soft Gold), spot-UV areas'
                  },
                  {
                    step: 'Create Label Templates page',
                    owner: 'Preston, Tiana & YONI™',
                    deadline: 'Week of Nov 18, 2025',
                    details: 'Primary product label (3x4"), secondary label (2x2"), dielines with 0.125" bleed, safe zone guidelines'
                  },
                  {
                    step: 'Create Print Components page',
                    owner: 'Preston, Tiana & YONI™',
                    deadline: 'Week of Nov 25, 2025',
                    details: 'Emboss depths, die-cut specs, fold line markers, perforation guidelines, print finish variants'
                  },
                  {
                    step: 'Shopify theme mapping audit',
                    owner: 'Preston, Tiana & YONI™',
                    deadline: 'Week of Dec 2, 2025',
                    details: 'Map component names to Shopify Liquid sections, verify token variable names match Shopify CSS custom properties'
                  }
                ].map((task, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-lg"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', fontWeight: '500', lineHeight: '140%' }}>
                        {task.step}
                      </p>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.5 }}>
                        {task.deadline}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                        Owner: <span style={{ fontWeight: '500', opacity: 1 }}>{task.owner}</span>
                      </p>
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                      {task.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structure & Sidebar Organization */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #9C887A' }}>
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <HOLYSparkle size={36} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', color: '#1A1A1A', lineHeight: '120%' }}>
                Structure & Sidebar Organization
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              The HØLY™ design system is organized into a logical hierarchy that progresses from foundational tokens through 
              brand assets, component libraries, end-to-end experiences, and print/packaging specifications.
            </p>
          </div>

          {/* File Hierarchy */}
          <div className="space-y-4">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6, letterSpacing: '1px' }}>
              SIDEBAR HIERARCHY (NOV 13, 2025)
            </p>
            <div className="space-y-2">
              {[
                { section: 'Foundation', pages: ['File Overview', 'Tokens'], color: '#1A1A1A', desc: 'System governance & core design tokens' },
                { section: 'Brand', pages: ['Systems & Products', 'Visual Direction', 'Icons & Marks', 'Motion / States'], color: '#AAB5B2', desc: 'SKU hierarchy, visual guidelines, brand marks, animations' },
                { section: 'Components', pages: ['Base Components', 'UI Components', 'Ritual Systems', 'Email Components', 'Mobile Components'], color: '#D9C4BB', desc: 'Reusable UI building blocks' },
                { section: 'Experiences', pages: ['Homepage', 'Product Details Page (PDP)', 'Product Listing Page (PLP)', 'Ritual Finder Engine'], color: '#9C887A', desc: 'Complete page templates & flows' },
                { section: 'Print & Packaging', pages: ['Print Tokens', 'Label Templates', 'Product Labels', 'Print Components'], color: '#5E6458', desc: 'Print production specifications' }
              ].map((group, i) => (
                <div key={i} className="p-5 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '2px solid ' + group.color }}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                        {group.section}
                      </p>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, marginBottom: '8px' }}>
                        {group.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.pages.map((page, j) => (
                      <div 
                        key={j}
                        className="px-3 py-1 rounded-lg"
                        style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
                      >
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
                          {page}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experiences Section Introduction */}
          <div className="p-8 rounded-xl space-y-6" style={{ backgroundColor: '#FFFFFF', border: '2px solid #9C887A' }}>
            <div className="flex items-center gap-3">
              <HOLYSparkle size={24} color="#9C887A" opacity={1} strokeWidth={1.5} />
              <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', lineHeight: '120%' }}>
                Introducing: Experiences Section
              </h3>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '170%' }}>
              <strong>New in v2.0:</strong> The "Experiences" section houses complete, production-ready page templates and flows 
              built entirely from design system components. This proves the system's readiness for broader business "Operating System" 
              rollout. Each experience is a working proof-of-concept demonstrating how components combine to create real-world applications.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Experience 1: PDP (Product Detail Page)
                </p>
                <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                  <li>• Hero image gallery with zoom</li>
                  <li>• Ritual system selector</li>
                  <li>• Subscription toggle</li>
                  <li>• Add to cart with pricing</li>
                  <li>• Reviews & trust badges</li>
                  <li>• Related products</li>
                  <li>• Complete navigation & footer</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Experience 2: Ritual Finder
                </p>
                <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                  <li>• YONI™ AI guided discovery flow</li>
                  <li>• 4-step progressive disclosure</li>
                  <li>• 5 ritual system pathways</li>
                  <li>• Personalized recommendations</li>
                  <li>• Sacred, poetic voice throughout</li>
                  <li>• Product suggestions by system</li>
                  <li>• Reset/retake functionality</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                Future Experiences Roadmap
              </p>
              <div className="grid grid-cols-2 gap-x-6">
                <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                  <li>• Checkout flow (3-step)</li>
                  <li>• Account dashboard</li>
                  <li>• Cart drawer (sticky)</li>
                </ul>
                <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                  <li>• Studio Partner portal</li>
                  <li>• Mobile app home screen</li>
                  <li>• Email template flows</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(156, 136, 122, 0.1)', border: '1px solid #9C887A' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '170%' }}>
                <strong>Operating System Philosophy:</strong> Experiences are not one-off designs—they're modular assemblies 
                of the component library. Every element can be reused across checkout, account pages, mobile app, and email flows. 
                If a gap is discovered (e.g., missing subscription toggle), the new component is added to its proper home 
                (UI Components, Icons, etc.) for future reuse.
              </p>
            </div>
          </div>

          {/* Gap Discovery Process */}
          <div className="space-y-4">
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', lineHeight: '120%' }}>
              Gap Discovery & Component Additions
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              As each experience is built, missing components are identified and added to their appropriate home pages:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { home: 'UI Components', examples: 'Subscription toggle, quantity selector, breadcrumb navigation' },
                { home: 'Icons & Marks', examples: 'Cart pulse motion icon, social share icons, trust badge icons' },
                { home: 'Systems & Products', examples: 'Studio Partner badge, subscription badge variants' }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', marginBottom: '6px' }}>
                    {item.home}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, lineHeight: '160%' }}>
                    {item.examples}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* November 13, 2025 Update */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(170, 181, 178, 0.1)', border: '1px solid #AAB5B2' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, marginBottom: '8px' }}>
              UPDATE — NOVEMBER 13, 2025
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%' }}>
              <strong>Sidebar restructured:</strong> "Brand Assets" renamed to "Brand" with new Visual Direction page added. 
              New "Experiences" section added after Components, starting with PDP Experience as first proof-of-concept. 
              This establishes the foundation for a complete business Operating System built on the design system.
            </p>
          </div>
        </div>
      </div>

      {/* Stackzero Commerce UI Integration */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#F9F6F0', border: '2px solid #1A1A1A' }}>
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <HOLYLink size={36} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', color: '#1A1A1A', lineHeight: '120%' }}>
                Stackzero Commerce UI Integration
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              HØLY adopts Stackzero Labs' Commerce UI library (ui.stackzero.co, github.com/stackzero-labs/ui) as our foundational component structure. This integration bridges technical excellence with ritual-luxury brand identity.
            </p>
          </div>

          {/* Integration Pillars */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl space-y-3" style={{ backgroundColor: '#FFFFFF', border: '2px solid #AAB5B2' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, letterSpacing: '1.5px' }}>
                FROM STACKZERO
              </p>
              <p style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', lineHeight: '130%' }}>
                Component Architecture
              </p>
              <ul className="space-y-2">
                {[
                  'Product card hierarchy',
                  'Navigation patterns',
                  'Checkout flow structure',
                  'Commerce module logic',
                  'Cart & inventory UI',
                  'Filter & sort components'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full mt-2" style={{ backgroundColor: '#AAB5B2' }} />
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8 }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl space-y-3" style={{ backgroundColor: '#FFFFFF', border: '2px solid #D9C4BB' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, letterSpacing: '1.5px' }}>
                FROM HØLY
              </p>
              <p style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', lineHeight: '130%' }}>
                Sacred Brand Identity
              </p>
              <ul className="space-y-2">
                {[
                  'v2.0 color palette (Veil Clay, Fogstone Blue, etc.)',
                  'Ritual system variants',
                  'Print & packaging tokens',
                  'Sacred interaction patterns',
                  'Garamond/Inter typography',
                  'Generous spacing (breathing room)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full mt-2" style={{ backgroundColor: '#D9C4BB' }} />
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8 }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Integration Goals */}
          <div className="space-y-4">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6, letterSpacing: '1px' }}>
              INTEGRATION OBJECTIVES
            </p>
            <div className="grid gap-4">
              {[
                {
                  title: '1. Adopt Stackzero Structure',
                  desc: 'Mirror component hierarchy, naming conventions, and spacing models from Commerce UI library.'
                },
                {
                  title: '2. Apply HØLY Ritual-Luxury Skin',
                  desc: 'Re-skin all components using HØLY v2.0 tokens. Replace placeholder content with brand marks and sacred copy.'
                },
                {
                  title: '3. Create Ritual System Variants',
                  desc: 'Build color/emotion variants for Aftercare™, Renewal™, Touch™, Union™, Vital™ across product cards and modules.'
                },
                {
                  title: '4. Integrate Print Infrastructure',
                  desc: 'Add CMYK tokens, foil finishes, emboss specs, dieline templates for packaging and labels.'
                },
                {
                  title: '5. Define Sacred Interactions',
                  desc: 'Implement intentional hover states, breathe animations, and performance-mindful timing (200-300ms).'
                },
                {
                  title: '6. Enforce Brand Voice',
                  desc: 'Update all UI copy from generic commerce to HØLY tone. E.g., "Add to Cart" → "Begin Your Ritual".'
                },
                {
                  title: '7. Dev-Ready Token Mapping',
                  desc: 'Ensure CSS custom properties and Shopify theme variables align: --color-veil-clay, --spacing-lg, etc.'
                }
              ].map((goal, i) => (
                <div key={i} className="p-5 rounded-lg" style={{ backgroundColor: 'rgba(170, 181, 178, 0.1)', border: '1px solid rgba(170, 181, 178, 0.3)' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', fontWeight: '500', marginBottom: '6px' }}>
                    {goal.title}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '155%' }}>
                    {goal.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Component Mapping Reference */}
          <div className="p-8 rounded-xl space-y-6" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6, letterSpacing: '1px' }}>
              STACKZERO → HØLY COMPONENT MAPPING
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { stackzero: 'ProductCard', holy: 'Ritual Product Card (5 variants)' },
                { stackzero: 'CartDrawer', holy: 'Sacred Cart Experience' },
                { stackzero: 'ProductBadge', holy: 'Ritual Badge (Smoky Umber bg)' },
                { stackzero: 'NavigationMenu', holy: 'Extended Nav w/ Ritual Selector' },
                { stackzero: 'CheckoutForm', holy: 'Intentional Checkout Flow' },
                { stackzero: 'FilterPanel', holy: 'Ritual Filter & Sort' }
              ].map((mapping, i) => (
                <div key={i} className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.5, marginBottom: '4px' }}>
                    {mapping.stackzero}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                    {mapping.holy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* External References */}
          <div className="p-6 rounded-xl space-y-4" style={{ backgroundColor: 'rgba(156, 136, 122, 0.08)', border: '1px solid rgba(156, 136, 122, 0.2)' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6, letterSpacing: '1px' }}>
              EXTERNAL REFERENCES
            </p>
            <div className="space-y-2">
              {[
                { label: 'Stackzero Commerce UI Playground', url: 'ui.stackzero.co' },
                { label: 'GitHub Repository', url: 'github.com/stackzero-labs/ui' },
                { label: 'Stackzero Labs', url: 'stackzero.co' }
              ].map((ref, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#9C887A' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8 }}>
                    <span style={{ fontWeight: '500' }}>{ref.label}:</span> {ref.url}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Channel-Specific UI: Email & Mobile */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #5E6458' }}>
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', color: '#1A1A1A', lineHeight: '120%' }}>
                Channel-Specific UI: Email & Mobile
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              The HØLY™ design system extends beyond web/storefront to support Email (ESP templates) and Mobile App UI. 
              These channel-specific components maintain brand integrity while adhering to platform-specific constraints.
            </p>
          </div>

          {/* Channel Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Web/Storefront */}
            <div className="p-6 rounded-xl space-y-4" style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}>
              <HOLYCompass size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <div>
                <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
                  Web / Storefront
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', marginBottom: '12px' }}>
                  Shopify commerce, DTC website
                </p>
              </div>
              <div className="space-y-2">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '6px' }}>
                  Primary Components:
                </p>
                <ul className="space-y-1" style={{ fontSize: '12px', lineHeight: '160%' }}>
                  {['UI Components', 'Product Cards', 'Navigation', 'Checkout Flow', 'Cart Elements'].map((item, i) => (
                    <li key={i} style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', opacity: 0.7 }}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-3" style={{ borderTop: '1px solid #DADADA' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                  See: Base Components, UI Components, Ritual Systems
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-xl space-y-4" style={{ backgroundColor: '#F9F6F0', border: '2px solid #AAB5B2' }}>
              <HOLYMail size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <div>
                <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
                  Email (ESP)
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', marginBottom: '12px' }}>
                  Klaviyo, Mailchimp, campaigns
                </p>
              </div>
              <div className="space-y-2">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '6px' }}>
                  Email Components:
                </p>
                <ul className="space-y-1" style={{ fontSize: '12px', lineHeight: '160%' }}>
                  {['Email Header', 'Body Blocks (image+text)', 'CTA Buttons (email-safe)', 'Promo Banners', 'Social Footer'].map((item, i) => (
                    <li key={i} style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', opacity: 0.7 }}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-3" style={{ borderTop: '1px solid #DADADA' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                  See: Email Components, Tokens (Email variants)
                </p>
              </div>
            </div>

            {/* Mobile App */}
            <div className="p-6 rounded-xl space-y-4" style={{ backgroundColor: '#F9F6F0', border: '2px solid #D9C4BB' }}>
              <div>
                <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
                  Mobile App
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', marginBottom: '12px' }}>
                  iOS, Android native apps
                </p>
              </div>
              <div className="space-y-2">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '6px' }}>
                  Mobile Components:
                </p>
                <ul className="space-y-1" style={{ fontSize: '12px', lineHeight: '160%' }}>
                  {['Bottom Navigation', 'Mobile Headers', 'Product Cards (mobile)', 'Full-Screen Modals', 'FAB / Cart Button'].map((item, i) => (
                    <li key={i} style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', opacity: 0.7 }}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-3" style={{ borderTop: '1px solid #DADADA' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                  See: Mobile Components, Tokens (Mobile variants)
                </p>
              </div>
            </div>
          </div>

          {/* Channel Usage Guidelines */}
          <div className="space-y-6">
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', lineHeight: '120%' }}>
              When to Use Each Channel
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Guidelines */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #AAB5B2' }}>
                <div className="flex items-center gap-2 mb-4">
                  <div style={{ fontSize: '20px' }}>📧</div>
                  <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', margin: 0 }}>
                    Email Component Rules
                  </h4>
                </div>
                <ul className="space-y-3">
                  {[
                    { rule: 'Fonts', detail: 'Georgia (headings), Arial/Helvetica (body) — email-safe only' },
                    { rule: 'Width', detail: '600px max container with 16-20px padding' },
                    { rule: 'Buttons', detail: 'Table-based rendering, 48px min height, full inline styles' },
                    { rule: 'Images', detail: 'Hosted on CDN, alt text required, max 1MB' },
                    { rule: 'Layouts', detail: 'Single column stack, mobile-first responsive' },
                    { rule: 'Testing', detail: 'Test on Gmail, Outlook, Apple Mail, mobile clients' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-2" style={{ backgroundColor: '#AAB5B2' }} />
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
                        <strong>{item.rule}:</strong> {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Guidelines */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D9C4BB' }}>
                <div className="flex items-center gap-2 mb-4">
                  <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', margin: 0 }}>
                    Mobile Component Rules
                  </h4>
                </div>
                <ul className="space-y-3">
                  {[
                    { rule: 'Touch Targets', detail: '48px × 48px minimum, 56px for primary actions' },
                    { rule: 'Typography', detail: 'Garamond (display), Inter (UI), same web scale' },
                    { rule: 'Spacing', detail: '16px screen padding, 24px section gaps' },
                    { rule: 'Safe Areas', detail: 'iOS notch/bottom inset, 80px bottom nav reserved' },
                    { rule: 'Interactions', detail: '70% opacity on press, <200ms animations' },
                    { rule: 'Navigation', detail: 'Bottom tab bar (4-5 items), swipe-back support' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-2" style={{ backgroundColor: '#D9C4BB' }} />
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
                        <strong>{item.rule}:</strong> {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Token Overrides Notice */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(170, 181, 178, 0.1)', border: '1px solid #AAB5B2' }}>
            <div className="flex items-start gap-3">
              <HOLYGem size={20} color="#1A1A1A" />
              <div>
                <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
                  Token Philosophy Across Channels
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8, lineHeight: '170%' }}>
                  All channels share the same <strong>core tokens</strong> (colors, spacing scale, radius, effects) but may have 
                  <strong> channel-specific overrides</strong> for constraints. For example, Email uses Georgia instead of Garamond 
                  because web fonts aren't universally supported in email clients. Mobile uses the same spacing scale but adds 
                  touch-target minimums. Always reference the Tokens page for channel-specific variants.
                </p>
              </div>
            </div>
          </div>

          {/* Sacred Language Consistency */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #5E6458' }}>
            <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '12px' }}>
              Sacred Language Across All Channels
            </h4>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, lineHeight: '170%', marginBottom: '16px' }}>
              Maintain HØLY's ritual-luxury language across web, email, and mobile:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { wrong: '"Add to Cart"', right: '"Begin Your Ritual"' },
                { wrong: '"Buy Now"', right: '"Begin Your Journey"' },
                { wrong: '"Product"', right: '"Ritual"' },
                { wrong: '"Shop"', right: '"Explore Rituals"' },
                { wrong: '"Checkout"', right: '"Complete Your Ritual"' },
                { wrong: '"Subscribe"', right: '"Join the Ritual"' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: '#F9F6F0' }}>
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.5, textDecoration: 'line-through' }}>
                      {item.wrong}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600' }}>
                      {item.right}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Governance Rules */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-4">
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%' }}>
              Governance & Editing Rules
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Guidelines for maintaining system integrity across web, print, and packaging applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6, letterSpacing: '1px' }}>
                DESIGN PRINCIPLES
              </p>
              <ul className="space-y-3">
                {[
                  'Stackzero Commerce UI component structure',
                  'HØLY v2.0 color palette on all components',
                  'Ample breathing room (generous spacing values)',
                  'ADA/WCAG AAA color contrast (white on Smoky Umber)',
                  'Auto Layout for all web components',
                  'Optical centering for ø icon (translateY(-3px))',
                  'Trademark symbols: Ritual Aftercare™, etc.'
                ].map((principle, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2"
                      style={{ backgroundColor: '#1A1A1A', opacity: 0.4 }}
                    />
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
                      {principle}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '500', color: '#1A1A1A', opacity: 0.6, letterSpacing: '1px' }}>
                NAMING CONVENTIONS
              </p>
              <ul className="space-y-3">
                {[
                  'Tokens: "Color / Category / Name"',
                  'Components: "HØLY / Type / Variant / State"',
                  'Ritual Systems: "HØLY / Ritual Name / Component"',
                  'All layers must be copyable browser → Figma',
                  'Use descriptive, semantic names',
                  'Version control: v[major].[minor] format'
                ].map((convention, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2"
                      style={{ backgroundColor: '#1A1A1A', opacity: 0.4 }}
                    />
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
                      {convention}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div 
            className="p-6 rounded-xl"
            style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '170%' }}>
              <strong style={{ opacity: 1 }}>Important:</strong> Always use brand-approved tokens from the Tokens page. 
              No custom colors, effects, or spacing outside the defined system. HØLY's philosophy emphasizes spaciousness—favor 
              larger spacing values (24px, 32px, 48px) over tight layouts. For print work, always reference Print & Packaging Tokens 
              for CMYK/Pantone values.
            </p>
          </div>
        </div>
      </div>

      {/* Brand Values */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%' }}>
            HØLY Value System
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Sacred Pause',
                description: 'Room to move, think, and be. Generous spacing in all designs creates breathing room for contemplation.'
              },
              {
                title: 'Inclusive Beauty',
                description: 'Accessible, welcoming design for all bodies and identities. ADA compliance is non-negotiable.'
              },
              {
                title: 'Intentional Craft',
                description: 'Every element serves purpose. Nothing arbitrary or purely decorative. Function informs form.'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl"
                style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
              >
                <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', marginBottom: '12px' }}>
                  {value.title}
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '170%' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
