import { HOLYPrinter, HOLYClipboard } from '../components/icons/HOLYIcons';
import { 
  LabelSafeZoneGuide, 
  TypographySizeValidator, 
  InkCoverageCalculator, 
  PreFlightChecklist,
  ExportFormatGuide,
  LABEL_TEMPLATES 
} from '../components/print/SelfnamedLabelComponents';

export default function PrintComponentsPage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <HOLYPrinter size={32} color="#1A1A1A" />
            <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', lineHeight: '120%' }}>
              Print Components
            </h1>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', opacity: 0.7, lineHeight: '170%', maxWidth: '640px', margin: '0 auto' }}>
            Print-specific components including emboss specifications, die-cut shapes, fold lines, perforation guidelines, and finishing details for production files. Includes Selfnamed label validation tools.
          </p>
        </div>
      </div>

      {/* Selfnamed Label Components */}
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
              Selfnamed Label Components
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#F9F6F0', opacity: 0.85, lineHeight: '160%', maxWidth: '800px' }}>
              Reusable validation and compliance components for Selfnamed label production. Import from <code style={{ fontFamily: 'monospace', fontSize: '13px', color: '#D9C4BB' }}>/components/print/SelfnamedLabelComponents.tsx</code>
            </p>
          </div>

          {/* Component Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Safe Zone Guide */}
            <div className="space-y-4">
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(217, 196, 187, 0.1)', border: '1px solid rgba(217, 196, 187, 0.3)' }}>
                <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '22px', color: '#F9F6F0', marginBottom: '8px' }}>
                  LabelSafeZoneGuide
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', opacity: 0.8, lineHeight: '160%', marginBottom: '16px' }}>
                  Visual overlay showing bleed zone (3mm), trim line, and safe zone (3mm) for any label dimensions.
                </p>
                <code 
                  className="block p-3 rounded mb-4"
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    fontFamily: 'monospace', 
                    fontSize: '11px', 
                    color: '#AAB5B2',
                    lineHeight: '160%',
                    overflowX: 'auto'
                  }}
                >
                  &lt;LabelSafeZoneGuide<br/>
                  &nbsp;&nbsp;width=&#123;76.2&#125;<br/>
                  &nbsp;&nbsp;height=&#123;101.6&#125;<br/>
                  &nbsp;&nbsp;shape="rectangle"<br/>
                  /&gt;
                </code>
                <div className="bg-opacity-20 rounded">
                  <LabelSafeZoneGuide width={76.2} height={101.6} shape="rectangle" />
                </div>
              </div>
            </div>

            {/* Typography Validator */}
            <div className="space-y-4">
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(217, 196, 187, 0.1)', border: '1px solid rgba(217, 196, 187, 0.3)' }}>
                <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '22px', color: '#F9F6F0', marginBottom: '8px' }}>
                  TypographySizeValidator
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', opacity: 0.8, lineHeight: '160%', marginBottom: '16px' }}>
                  Validates text meets Selfnamed's minimum size requirements (4.5pt standard, 4.8pt on dark backgrounds).
                </p>
                <code 
                  className="block p-3 rounded mb-4"
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    fontFamily: 'monospace', 
                    fontSize: '11px', 
                    color: '#AAB5B2',
                    lineHeight: '160%',
                    overflowX: 'auto'
                  }}
                >
                  &lt;TypographySizeValidator<br/>
                  &nbsp;&nbsp;size=&#123;5&#125;<br/>
                  &nbsp;&nbsp;onDarkBackground=&#123;false&#125;<br/>
                  &nbsp;&nbsp;textContent="Ingredients: ..."<br/>
                  /&gt;
                </code>
                <TypographySizeValidator 
                  size={5} 
                  onDarkBackground={false}
                  textContent="Sample ingredient text for label validation"
                />
              </div>
            </div>

            {/* Ink Coverage Calculator */}
            <div className="space-y-4">
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(217, 196, 187, 0.1)', border: '1px solid rgba(217, 196, 187, 0.3)' }}>
                <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '22px', color: '#F9F6F0', marginBottom: '8px' }}>
                  InkCoverageCalculator
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', opacity: 0.8, lineHeight: '160%', marginBottom: '16px' }}>
                  Ensures total CMYK ink coverage doesn't exceed 300% to prevent smearing and drying issues.
                </p>
                <code 
                  className="block p-3 rounded mb-4"
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    fontFamily: 'monospace', 
                    fontSize: '11px', 
                    color: '#AAB5B2',
                    lineHeight: '160%',
                    overflowX: 'auto'
                  }}
                >
                  &lt;InkCoverageCalculator<br/>
                  &nbsp;&nbsp;cyan=&#123;40&#125;<br/>
                  &nbsp;&nbsp;magenta=&#123;45&#125;<br/>
                  &nbsp;&nbsp;yellow=&#123;50&#125;<br/>
                  &nbsp;&nbsp;black=&#123;15&#125;<br/>
                  &nbsp;&nbsp;colorName="Smoky Umber"<br/>
                  /&gt;
                </code>
                <InkCoverageCalculator 
                  cyan={40}
                  magenta={45}
                  yellow={50}
                  black={15}
                  colorName="Smoky Umber"
                />
              </div>
            </div>

            {/* Export Format Guide */}
            <div className="space-y-4">
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(217, 196, 187, 0.1)', border: '1px solid rgba(217, 196, 187, 0.3)' }}>
                <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '22px', color: '#F9F6F0', marginBottom: '8px' }}>
                  ExportFormatGuide
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', opacity: 0.8, lineHeight: '160%', marginBottom: '16px' }}>
                  Quick reference for required export formats and common mistakes to avoid.
                </p>
                <code 
                  className="block p-3 rounded mb-4"
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    fontFamily: 'monospace', 
                    fontSize: '11px', 
                    color: '#AAB5B2',
                    lineHeight: '160%',
                    overflowX: 'auto'
                  }}
                >
                  &lt;ExportFormatGuide /&gt;
                </code>
                <ExportFormatGuide />
              </div>
            </div>
          </div>

          {/* Pre-Flight Checklist Demo */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(156, 136, 122, 0.15)', border: '2px solid #9C887A' }}>
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#F9F6F0', marginBottom: '16px' }}>
              PreFlightChecklist
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.85, lineHeight: '160%', marginBottom: '20px' }}>
              Interactive checklist component that validates all Selfnamed requirements before export. Critical checks must pass before upload.
            </p>
            <code 
              className="block p-3 rounded mb-6"
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                fontFamily: 'monospace', 
                fontSize: '11px', 
                color: '#AAB5B2',
                lineHeight: '160%',
                overflowX: 'auto'
              }}
            >
              &lt;PreFlightChecklist items=&#123;checklistItems&#125; /&gt;
            </code>
            <PreFlightChecklist 
              items={[
                { label: 'Safe zone respected (3mm from trim)', checked: true, critical: true },
                { label: 'All text ≥ 4.5pt (4.8pt on dark)', checked: true, critical: true },
                { label: 'Ink coverage ≤ 300% total CMYK', checked: true, critical: true },
                { label: 'Fonts converted to outlines', checked: true, critical: true },
                { label: 'CMYK color mode (not RGB)', checked: true, critical: true },
                { label: '600 ppi resolution', checked: true, critical: true },
                { label: 'ø icon optically centered', checked: false, critical: false },
                { label: 'Ritual System color compliance', checked: true, critical: false }
              ]}
            />
          </div>

          {/* Reference Table */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(217, 196, 187, 0.1)', border: '1px solid rgba(217, 196, 187, 0.3)' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#F9F6F0', fontWeight: '600', marginBottom: '16px' }}>
              📦 Label Template Constants
            </h4>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', opacity: 0.8, lineHeight: '160%', marginBottom: '16px' }}>
              Pre-defined template dimensions accessible via <code style={{ fontFamily: 'monospace', fontSize: '12px', color: '#D9C4BB' }}>LABEL_TEMPLATES</code> constant:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {Object.entries(LABEL_TEMPLATES).map(([key, template]) => (
                <div 
                  key={key}
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: 'rgba(26, 26, 26, 0.3)', border: '1px solid rgba(217, 196, 187, 0.2)' }}
                >
                  <code style={{ fontFamily: 'monospace', fontSize: '12px', color: '#D9C4BB', display: 'block', marginBottom: '6px' }}>
                    LABEL_TEMPLATES.{key}
                  </code>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', opacity: 0.7 }}>
                    {template.name} · {template.width} × {template.height} mm
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emboss / Deboss Specifications */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%' }}>
              Emboss / Deboss Specifications
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Tactile finishing for premium packaging. Adds depth and luxury to brand marks and ritual names.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Blind Emboss */}
            <div 
              className="p-8 rounded-xl"
              style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A' }}>
                    Blind Emboss
                  </h3>
                  <div 
                    className="px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0', fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}
                  >
                    STANDARD
                  </div>
                </div>

                {/* Visual representation */}
                <div 
                  className="relative h-48 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
                >
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: '#F9F6F0',
                      boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1), inset -2px -2px 4px rgba(255,255,255,0.8)'
                    }}
                  >
                    <p style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', opacity: 0.3, transform: 'translateY(-3px)' }}>
                      ø
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                      Depth
                    </span>
                    <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                      0.5mm standard
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                      Application
                    </span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                      Logo marks, ø icons
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                      Min Stock
                    </span>
                    <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                      200gsm+
                    </span>
                  </div>
                </div>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                  Unprinted emboss creates subtle, sophisticated detail. Best for monochromatic designs on premium stock.
                </p>
              </div>
            </div>

            {/* Foil Emboss */}
            <div 
              className="p-8 rounded-xl"
              style={{ backgroundColor: '#F9F6F0', border: '2px solid #C9A36D' }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A' }}>
                    Foil Emboss
                  </h3>
                  <div 
                    className="px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#C9A36D', color: '#1A1A1A', fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}
                  >
                    PREMIUM
                  </div>
                </div>

                {/* Visual representation */}
                <div 
                  className="relative h-48 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
                >
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: '#C9A36D',
                      boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.2), inset -2px -2px 6px rgba(255,255,255,0.3), 0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <p style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', transform: 'translateY(-3px)' }}>
                      ø
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                      Depth
                    </span>
                    <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                      1.0mm deep
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                      Foil Color
                    </span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                      Brushed Bronze
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                      Min Stock
                    </span>
                    <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', fontWeight: '500' }}>
                      250gsm+
                    </span>
                  </div>
                </div>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                  Combines metallic foil with deep emboss for maximum impact. Reserve for gift boxes and special edition packaging.
                </p>
              </div>
            </div>
          </div>

          {/* Production Notes */}
          <div 
            className="p-6 rounded-xl"
            style={{ backgroundColor: '#EBD7D1', border: '1px solid #DADADA' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8, lineHeight: '170%' }}>
              <strong>Production Note:</strong> Emboss/deboss requires metal dies (one-time tooling cost). Maintain minimum 1mm clearance between embossed elements. Fine details below 0.5mm may not register cleanly. Always request strike-off proof for approval before full production run.
            </p>
          </div>
        </div>
      </div>

      {/* Die-Cut Shapes */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%' }}>
              Die-Cut Shapes
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Custom die-cut templates for hang tags, stickers, and specialty packaging.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Circular Tag */}
            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <div className="flex justify-center mb-6">
                <div 
                  className="w-32 h-32 rounded-full flex items-center justify-center relative"
                  style={{ backgroundColor: '#FFFFFF', border: '2px solid #1A1A1A' }}
                >
                  <p style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', transform: 'translateY(-2px)' }}>
                    ø
                  </p>
                  <div 
                    className="absolute w-2 h-2 rounded-full"
                    style={{ top: '8px', backgroundColor: '#1A1A1A' }}
                  />
                </div>
              </div>
              <div className="text-center space-y-2">
                <p style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A' }}>
                  Circular Hang Tag
                </p>
                <p style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                  3" diameter
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                  With 0.25" hole punch at top
                </p>
              </div>
            </div>

            {/* Rounded Rectangle */}
            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <div className="flex justify-center mb-6">
                <div 
                  className="w-32 h-40 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#FFFFFF', border: '2px solid #1A1A1A' }}
                >
                  <div className="text-center">
                    <p style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A', marginBottom: '4px' }}>
                      HØLY
                    </p>
                    <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center" style={{ border: '1px solid #1A1A1A' }}>
                      <p style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', transform: 'translateY(-1px)' }}>ø</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <p style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A' }}>
                  Product Tag
                </p>
                <p style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                  2.5" × 3.5"
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                  16px corner radius
                </p>
              </div>
            </div>

            {/* Sticker Sheet */}
            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <div className="flex justify-center mb-6">
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#FFFFFF', border: '1px solid #1A1A1A' }}
                    >
                      <p style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#1A1A1A', transform: 'translateY(-1px)' }}>
                        ø
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center space-y-2">
                <p style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A' }}>
                  Sticker Sheet
                </p>
                <p style={{ fontFamily: 'monospace', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                  4" × 6" sheet
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                  Kiss-cut, 1.5" circles
                </p>
              </div>
            </div>
          </div>

          <div 
            className="p-6 rounded-xl"
            style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '170%' }}>
              <strong>Die-Cut Guidelines:</strong> All die-cut shapes require 0.125" bleed. Maintain 0.25" safe zone from cut edge. Minimum radius for sharp corners: 2mm (0.08"). Always provide cut lines as vector paths on separate layer labeled "DIE-CUT". Complex shapes may require custom die tooling (additional cost).
            </p>
          </div>
        </div>
      </div>

      {/* Fold & Perforation Markers */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%' }}>
              Fold & Perforation Markers
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Standardized line styles for production files. Use in dieline layers for clear printer communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fold Lines */}
            <div 
              className="p-8 rounded-xl"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <div className="space-y-6">
                <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
                  Fold Lines
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="mb-3" style={{ height: '2px', borderTop: '2px dashed #C9A36D' }}></div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#C9A36D', fontWeight: '500', marginBottom: '4px' }}>
                      MOUNTAIN FOLD
                    </p>
                    <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                      2pt dashed - Burnished Ochre (#C9A36D)
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, marginTop: '8px' }}>
                      Fold toward you (peaks up)
                    </p>
                  </div>

                  <div>
                    <div className="mb-3" style={{ height: '2px', borderTop: '2px dashed #4A7C59' }}></div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#4A7C59', fontWeight: '500', marginBottom: '4px' }}>
                      VALLEY FOLD
                    </p>
                    <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                      2pt dashed - Deep Green (#4A7C59)
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, marginTop: '8px' }}>
                      Fold away from you (valley down)
                    </p>
                  </div>

                  <div>
                    <div className="mb-3" style={{ height: '2px', borderTop: '2px dotted #B3C4C1' }}></div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#B3C4C1', fontWeight: '500', marginBottom: '4px' }}>
                      SCORE LINE
                    </p>
                    <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                      2pt dotted - Ocean Mineral (#B3C4C1)
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, marginTop: '8px' }}>
                      Machine scoring for clean folds
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Perforation Lines */}
            <div 
              className="p-8 rounded-xl"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <div className="space-y-6">
                <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
                  Perforation Lines
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="mb-3 flex items-center gap-1">
                      {[...Array(20)].map((_, i) => (
                        <div key={i} style={{ width: '4px', height: '2px', backgroundColor: '#EBD7D1' }}></div>
                      ))}
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#EBD7D1', fontWeight: '500', marginBottom: '4px' }}>
                      LIGHT PERFORATION
                    </p>
                    <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                      1pt segments - Sacred Blush (#EBD7D1)
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, marginTop: '8px' }}>
                      Easy tear (coupons, tear-away strips)
                    </p>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} style={{ width: '6px', height: '3px', backgroundColor: '#1A1A1A' }}></div>
                      ))}
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                      MICRO-PERFORATION
                    </p>
                    <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                      2pt segments - Temple Black (#1A1A1A)
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, marginTop: '8px' }}>
                      Clean separation with resistance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spot-UV & Coating Masks */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%' }}>
              Spot-UV & Coating Masks
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Layer specifications for selective coating applications. Creates high-low contrast and tactile interest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="p-8 rounded-xl"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', marginBottom: '24px' }}>
                Spot-UV Gloss
              </h3>
              <div className="relative h-64 rounded-lg overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
                {/* Matte background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', opacity: 0.3 }}>
                    Matte Background
                  </p>
                </div>
                {/* UV highlight area */}
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: '#1A1A1A',
                    boxShadow: '0 0 20px rgba(255,255,255,0.3), inset 0 0 20px rgba(255,255,255,0.1)'
                  }}
                >
                  <p style={{ fontFamily: 'Garamond, serif', fontSize: '56px', color: '#F9F6F0', transform: 'translateY(-3px)' }}>
                    ø
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                  <strong>Layer Setup:</strong> Create separate &quot;SPOT-UV&quot; layer with vector shapes defining gloss areas. No color needed - just outlines.
                </p>
                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', opacity: 0.5 }}>
                  Best on: Matte-coated stock, dark backgrounds
                </p>
              </div>
            </div>

            <div 
              className="p-8 rounded-xl"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', marginBottom: '24px' }}>
                Soft-Touch Mask
              </h3>
              <div className="relative h-64 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
                {/* Sections */}
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="flex items-center justify-center" style={{ backgroundColor: '#F9F6F0' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6 }}>
                      Uncoated
                    </p>
                  </div>
                  <div className="flex items-center justify-center" style={{ backgroundColor: '#DADADA' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.8, fontWeight: '500' }}>
                      Soft-Touch
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                  <strong>Layer Setup:</strong> Full coverage by default. Provide &quot;NO-COATING&quot; mask if selective application needed.
                </p>
                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', opacity: 0.5 }}>
                  Best on: 300gsm+ coated board, box exteriors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* File Preparation Checklist */}
      <div className="p-12 rounded-2xl" style={{ backgroundColor: '#EBD7D1', border: '2px solid #DADADA' }}>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <HOLYClipboard size={24} color="#1A1A1A" />
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Print File Preparation Checklist
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              'All colors converted to CMYK or Pantone',
              'Fonts outlined or embedded',
              '0.125" bleed on all edges',
              'Safe zone 0.25" from trim',
              'Trim marks and registration provided',
              'Die-cut paths on separate layer',
              'Fold lines marked with correct colors',
              'Spot-UV/coating masks on separate layers',
              'Resolution 300dpi minimum for raster images',
              'Black text set to K:100 (not rich black)',
              'File format: PDF/X-1a or native + PDF proof',
              'Layers labeled clearly in English'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div 
                  className="w-5 h-5 rounded flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #1A1A1A' }}
                >
                  <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#4A7C59' }}></div>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6" style={{ borderTop: '1px solid rgba(26, 26, 26, 0.1)' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '170%' }}>
              <strong>Pre-Flight:</strong> Always run preflight check in Adobe Acrobat or native app before sending to printer. Request printed proof for color-critical work. Allow 7-10 business days for first production run with new dies or tooling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
