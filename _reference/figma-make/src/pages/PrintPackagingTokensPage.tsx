import { HOLYCard, HOLYClipboard } from '../components/icons/HOLYIcons';

export default function PrintPackagingTokensPage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <HOLYCard size={32} color="#1A1A1A" />
            <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', lineHeight: '120%' }}>
              Print & Packaging Tokens
            </h1>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', opacity: 0.7, lineHeight: '170%', maxWidth: '640px', margin: '0 auto' }}>
            Print-specific color systems, paper stocks, finishing specifications, and material tokens for studio production, packaging, and label work. Extends Stackzero Commerce UI digital tokens into physical brand applications.
          </p>
        </div>
      </div>

      {/* Print Color Conversions */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%' }}>
              Print Color Conversions
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              CMYK and Pantone equivalents for HØLY brand colors. Use for offset printing, packaging, and studio production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Ivory',
                hex: '#F9F6F0',
                cmyk: 'C:2 M:3 Y:6 K:0',
                pantone: 'Pantone 11-0607 TCX',
                notes: 'Primary background, uncoated stock'
              },
              {
                name: 'Temple Black',
                hex: '#1A1A1A',
                cmyk: 'C:0 M:0 Y:0 K:95',
                pantone: 'Pantone Black 6 C',
                notes: 'Primary text, logo marks'
              },
              {
                name: 'Veil Clay',
                hex: '#D9C4BB',
                cmyk: 'C:10 M:15 Y:18 K:3',
                pantone: 'Pantone 7527 C',
                notes: 'Secondary background, soft ritual accent'
              },
              {
                name: 'Fogstone Blue',
                hex: '#AAB5B2',
                cmyk: 'C:35 M:20 Y:25 K:5',
                pantone: 'Pantone 5507 C',
                notes: 'Ritual Aftercare™ accent, muted backgrounds'
              },
              {
                name: 'Smoky Umber',
                hex: '#9C887A',
                cmyk: 'C:40 M:45 Y:50 K:15',
                pantone: 'Pantone 7530 C',
                notes: 'Ritual Vital™ accent, warm depth'
              },
              {
                name: 'Relic Green',
                hex: '#5E6458',
                cmyk: 'C:55 M:40 Y:50 K:35',
                pantone: 'Pantone 418 C',
                notes: 'Ritual Touch™ accent, grounding element'
              },
              {
                name: 'Limestone Oat',
                hex: '#D7D0C5',
                cmyk: 'C:12 M:10 Y:15 K:2',
                pantone: 'Pantone Warm Gray 2 C',
                notes: 'Surface secondary, subtle backgrounds'
              },
              {
                name: 'Weathered Halo',
                hex: '#8C8981',
                cmyk: 'C:40 M:35 Y:38 K:25',
                pantone: 'Pantone Warm Gray 9 C',
                notes: 'Mid-tone accents, subtle borders'
              },
              {
                name: 'Soft Grey',
                hex: '#DADADA',
                cmyk: 'C:0 M:0 Y:0 K:15',
                pantone: 'Pantone Cool Gray 3 C',
                notes: 'Borders, dividers'
              }
            ].map((color, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl space-y-4"
                style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-lg"
                    style={{ backgroundColor: color.hex, border: '1px solid #DADADA' }}
                  />
                  <div className="flex-1">
                    <p style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', marginBottom: '4px' }}>
                      {color.name}
                    </p>
                    <p style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                      {color.hex}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                      CMYK
                    </span>
                    <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                      {color.cmyk}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                      Pantone
                    </span>
                    <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                      {color.pantone}
                    </span>
                  </div>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, lineHeight: '150%' }}>
                  {color.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Material & Finish Tokens (v2.0) */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #9C887A' }}>
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div 
                className="px-3 py-1 rounded-full"
                style={{ backgroundColor: '#9C887A', color: '#F9F6F0', fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}
              >
                NEW IN v2.0
              </div>
            </div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%' }}>
              Material & Finish Tokens
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Luxury finishing materials for premium packaging, labels, and print collateral.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Brushed Bronze Foil',
                code: '#B18B6B',
                cmyk: 'C:24 M:36 Y:52 K:18',
                pantone: 'Pantone 874 C (Metallic)',
                application: 'Logo marks, accent borders',
                substrate: 'Works on uncoated & coated stock',
                cost: '$$$$'
              },
              {
                name: 'Soft-Touch Matte Coating',
                code: '#0F0F0F',
                cmyk: 'Applied post-print',
                pantone: 'N/A (coating)',
                application: 'Premium box exteriors, sleeves',
                substrate: '300gsm+ coated stock only',
                cost: '$$$'
              },
              {
                name: 'Spot-UV Gloss',
                code: 'Clear coating',
                cmyk: 'Applied post-print',
                pantone: 'N/A (coating)',
                application: 'ø icon highlight, product names',
                substrate: 'Coated stock only',
                cost: '$$'
              },
              {
                name: 'Emboss / Deboss',
                code: 'Tactile finish',
                cmyk: 'N/A (physical)',
                pantone: 'Blind or foil stamped',
                application: 'Logo lockups, ritual marks',
                substrate: '200gsm+ stock, avoid thin papers',
                cost: '$$$'
              }
            ].map((finish, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl space-y-4"
                style={{ backgroundColor: '#F9F6F0', border: '1px solid #9C887A' }}
              >
                <div className="space-y-2">
                  <p style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
                    {finish.name}
                  </p>
                  {finish.code.startsWith('#') && (
                    <p style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                      {finish.code}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      CMYK/Process
                    </span>
                    <span style={{ fontFamily: 'monospace', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
                      {finish.cmyk}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      Pantone/Match
                    </span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '500' }}>
                      {finish.pantone}
                    </span>
                  </div>
                  <div className="pt-2" style={{ borderTop: '1px solid rgba(26, 26, 26, 0.1)' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                      <strong>Application:</strong> {finish.application}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                      <strong>Substrate:</strong> {finish.substrate}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                      <strong>Cost:</strong> {finish.cost}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Paper Stock Specifications */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%' }}>
              Paper Stock Specifications
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Approved paper stocks for different applications. Always specify weight, finish, and brightness.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                application: 'Primary Product Labels',
                stock: '120gsm Uncoated Label Stock',
                finish: 'Matte, Natural White',
                brightness: '92 brightness',
                notes: 'Accepts offset and digital printing. Works with Brushed Bronze foil.'
              },
              {
                application: 'Premium Box Packaging',
                stock: '300gsm Coated Board',
                finish: 'Soft-Touch Matte Coating',
                brightness: '98 brightness (coated side)',
                notes: 'Ideal for Spot-UV and emboss applications. Rigid, high-end feel.'
              },
              {
                application: 'Insert Cards / Literature',
                stock: '150gsm Uncoated Text',
                finish: 'Natural, Tactile Surface',
                brightness: '90 brightness',
                notes: 'Eco-friendly option. Pairs with Ivory color palette. No coating needed.'
              },
              {
                application: 'Outer Sleeves / Wraps',
                stock: '200gsm Coated Cover',
                finish: 'Gloss or Matte Coating',
                brightness: '96 brightness',
                notes: 'Durable for shipping. Accepts foil stamping and spot-UV.'
              }
            ].map((spec, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl"
                style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, letterSpacing: '0.5px' }}>
                      APPLICATION
                    </p>
                    <p style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A' }}>
                      {spec.application}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, marginBottom: '4px' }}>
                        Stock
                      </p>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                        {spec.stock}
                      </p>
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, marginBottom: '4px' }}>
                        Finish
                      </p>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                        {spec.finish}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, marginBottom: '4px' }}>
                      Brightness
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '8px' }}>
                      {spec.brightness}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                      {spec.notes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selfnamed Label Specifications */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#1A1A1A', border: '2px solid #9C887A' }}>
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div 
                className="px-3 py-1 rounded-full"
                style={{ backgroundColor: '#9C887A', color: '#F9F6F0', fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}
              >
                SELFNAMED INTEGRATION
              </div>
            </div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#F9F6F0', lineHeight: '120%' }}>
              Selfnamed Label Specifications
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#F9F6F0', opacity: 0.85, lineHeight: '160%', maxWidth: '800px' }}>
              Technical requirements for uploading HØLY™ label designs to Selfnamed's production platform. All specifications must be followed precisely to ensure printability and quality.
            </p>
          </div>

          {/* Critical Requirements Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: 'Minimum Text Size',
                value: '4.5pt',
                darkBg: '4.8pt',
                critical: true,
                note: 'Smaller text will not print legibly'
              },
              {
                label: 'Safe Zone',
                value: '3mm',
                darkBg: 'from trim',
                critical: true,
                note: 'Keep all critical content inside safe zone'
              },
              {
                label: 'Maximum Ink Coverage',
                value: '300%',
                darkBg: 'total CMYK',
                critical: true,
                note: 'Prevents smearing and drying issues'
              },
              {
                label: 'Resolution',
                value: '600 ppi',
                darkBg: 'PNG export',
                critical: false,
                note: 'Required for sharp print quality'
              },
              {
                label: 'Color Mode',
                value: 'CMYK',
                darkBg: 'not RGB',
                critical: true,
                note: 'RGB files will be rejected'
              },
              {
                label: 'Font Handling',
                value: 'Outlines',
                darkBg: 'required',
                critical: true,
                note: 'Convert all text to paths/outlines'
              }
            ].map((req, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl"
                style={{ 
                  backgroundColor: req.critical ? '#9C887A' : 'rgba(217, 196, 187, 0.15)',
                  border: `2px solid ${req.critical ? '#D9C4BB' : 'rgba(217, 196, 187, 0.3)'}`
                }}
              >
                {req.critical && (
                  <div 
                    className="px-2 py-0.5 rounded mb-3 inline-block"
                    style={{ 
                      backgroundColor: '#1A1A1A',
                      color: '#F9F6F0',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      fontWeight: '600',
                      letterSpacing: '0.5px'
                    }}
                  >
                    CRITICAL
                  </div>
                )}
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: req.critical ? '#F9F6F0' : '#D9C4BB', opacity: 0.8, marginBottom: '8px', letterSpacing: '0.5px' }}>
                  {req.label}
                </p>
                <p style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: req.critical ? '#F9F6F0' : '#D9C4BB', lineHeight: '120%', marginBottom: '4px' }}>
                  {req.value}
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: req.critical ? '#F9F6F0' : '#D9C4BB', opacity: 0.7, marginBottom: '12px' }}>
                  {req.darkBg}
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: req.critical ? '#F9F6F0' : '#D9C4BB', opacity: 0.6, lineHeight: '150%' }}>
                  {req.note}
                </p>
              </div>
            ))}
          </div>

          {/* Label Template Sizes */}
          <div className="space-y-6">
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#F9F6F0' }}>
              Standard Label Templates
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  name: 'Bottle Label 3×4"',
                  dimensions: '76.2 × 101.6 mm',
                  usage: 'høłymist™, høłyoil™, høłytouch™',
                  shape: 'Rectangle'
                },
                {
                  name: 'Pump Bottle 3×5"',
                  dimensions: '76.2 × 127 mm',
                  usage: 'høłycleanse™',
                  shape: 'Rectangle'
                },
                {
                  name: 'Tube Wrap 2.5×3"',
                  dimensions: '63.5 × 76.2 mm',
                  usage: 'høłyguard™ SPF',
                  shape: 'Rectangle'
                },
                {
                  name: 'Jar Label 2×2.5"',
                  dimensions: '50.8 × 63.5 mm',
                  usage: 'høłyreveal™',
                  shape: 'Rectangle'
                },
                {
                  name: 'Jar Top 3" dia',
                  dimensions: '76.2 mm ⌀',
                  usage: 'Large jar lids',
                  shape: 'Circle'
                },
                {
                  name: 'Jar Top 2.5" dia',
                  dimensions: '63.5 mm ⌀',
                  usage: 'Medium jar lids',
                  shape: 'Circle'
                }
              ].map((template, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-lg"
                  style={{ backgroundColor: 'rgba(217, 196, 187, 0.1)', border: '1px solid rgba(217, 196, 187, 0.3)' }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#F9F6F0', marginBottom: '4px' }}>
                        {template.name}
                      </p>
                      <p style={{ fontFamily: 'monospace', fontSize: '13px', color: '#D9C4BB', opacity: 0.8 }}>
                        {template.dimensions}
                      </p>
                    </div>
                    <div 
                      className="px-2 py-1 rounded"
                      style={{ 
                        backgroundColor: 'rgba(217, 196, 187, 0.2)',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '10px',
                        color: '#D9C4BB',
                        fontWeight: '500'
                      }}
                    >
                      {template.shape}
                    </div>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', opacity: 0.7 }}>
                    {template.usage}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Export Workflow */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(156, 136, 122, 0.2)', border: '2px solid #9C887A' }}>
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#F9F6F0', marginBottom: '16px' }}>
              Export & Upload Workflow
            </h3>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Design in Figma',
                  description: 'Use locked label templates with safe zone guides'
                },
                {
                  step: '2',
                  title: 'Validate Compliance',
                  description: 'Run pre-flight checklist: text size, safe zone, ink coverage'
                },
                {
                  step: '3',
                  title: 'Convert to Outlines',
                  description: 'All fonts must be converted to paths/outlines'
                },
                {
                  step: '4',
                  title: 'Export PNG',
                  description: 'CMYK color mode, 600 ppi, at final trim size + bleed (3mm)'
                },
                {
                  step: '5',
                  title: 'Upload to Selfnamed',
                  description: 'Use Selfnamed Design Studio for final file submission'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#9C887A' }}
                  >
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', fontWeight: '700' }}>
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#F9F6F0', fontWeight: '600', marginBottom: '2px' }}>
                      {item.title}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', opacity: 0.7, lineHeight: '150%' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Component Reference */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(217, 196, 187, 0.1)', border: '1px solid rgba(217, 196, 187, 0.3)' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#F9F6F0', fontWeight: '600', marginBottom: '12px' }}>
              📦 Component Library Reference
            </h4>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.8, lineHeight: '160%', marginBottom: '16px' }}>
              Use these specialized components when building labels:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { name: 'LabelSafeZoneGuide', file: '/components/print/SelfnamedLabelComponents.tsx' },
                { name: 'TypographySizeValidator', file: '/components/print/SelfnamedLabelComponents.tsx' },
                { name: 'InkCoverageCalculator', file: '/components/print/SelfnamedLabelComponents.tsx' },
                { name: 'PreFlightChecklist', file: '/components/print/SelfnamedLabelComponents.tsx' }
              ].map((component, index) => (
                <div 
                  key={index}
                  className="p-3 rounded flex items-center justify-between"
                  style={{ backgroundColor: 'rgba(26, 26, 26, 0.3)' }}
                >
                  <code style={{ fontFamily: 'monospace', fontSize: '12px', color: '#D9C4BB' }}>
                    {component.name}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Print Production Notes */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#D9C4BB', border: '2px solid #DADADA' }}>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <HOLYClipboard size={24} color="#1A1A1A" />
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Print Production Notes
            </h3>
          </div>
          <div className="space-y-4">
            {[
              'Always include 0.125" (3.175mm) bleed on all edges for die-cut or trimmed pieces',
              'Maintain 0.25" (6.35mm) safe zone from trim edge for critical text and logos',
              'Convert all RGB colors to CMYK before sending to print. Use values above for brand accuracy',
              'Pantone swatches should be specified as "Coated (C)" or "Uncoated (U)" based on stock',
              'For foil stamping, provide separate vector layer with foil areas marked',
              'Emboss depth: Standard 0.5mm for most applications, 1mm for premium packaging only',
              'Always request printed proof for color-critical projects (packaging, labels)',
              'Soft-Touch coating adds 3-5 business days to production timeline'
            ].map((note, index) => (
              <div key={index} className="flex items-start gap-3">
                <div 
                  className="w-1.5 h-1.5 rounded-full mt-2"
                  style={{ backgroundColor: '#1A1A1A', opacity: 0.4 }}
                />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, lineHeight: '170%' }}>
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
