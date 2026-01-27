import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { HOLYCamera, HOLYEye, HOLYSparkle, HOLYCircle } from '../components/icons/HOLYIcons';

// ========================================
// VISUAL DIRECTION PAGE
// ========================================
// Photography guidelines and visual mood references

export default function VisualDirectionPage() {
  return (
    <div className="space-y-8">
      
      {/* Page Header */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <HOLYEye size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h2 style={{ 
                fontFamily: 'Garamond, serif', 
                fontSize: '32px', 
                fontWeight: '500', 
                color: '#1A1A1A', 
                lineHeight: '120%'
              }}>
                Visual Direction
              </h2>
            </div>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              color: '#1A1A1A', 
              opacity: 0.6,
              lineHeight: '140%'
            }}>
              Photography guidelines • Mood references • Sacred aesthetic principles • Channel-specific applications
            </p>
          </div>
          <Badge style={{ backgroundColor: '#AAB5B2', color: '#F9F6F0' }}>
            Brand Guidelines
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Primary Focus
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
              Ritual objects in sacred stillness • Bodies as temples
            </p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Core Emotion
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
              Sacred, sensual, rebellious intimacy
            </p>
          </div>
        </div>
      </div>

      <Separator style={{ backgroundColor: '#DADADA' }} />

      {/* Section I: Product Photography */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #AAB5B2' }}>
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <HOLYCircle size={24} color="#AAB5B2" opacity={1} strokeWidth={1.5} />
              <h3 style={{ 
                fontFamily: 'Garamond, serif', 
                fontSize: '28px', 
                color: '#1A1A1A',
                lineHeight: '120%'
              }}>
                I. Product Photography
              </h3>
            </div>
            <p style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '18px', 
              fontStyle: 'italic',
              color: '#1A1A1A',
              opacity: 0.7,
              marginBottom: '24px'
            }}>
              Ritual Objects in Sacred Stillness
            </p>
          </div>

          {/* Mood & Aesthetic */}
          <div>
            <h4 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: '600',
              color: '#1A1A1A',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Mood & Aesthetic
            </h4>
            <ul className="space-y-2" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Rich, moody, reverent
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Show texture: moisture, mist, oils
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Backdrops: stone, silk, fogged glass
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Palette: Fogstone Blue, Veil Clay, Smoky Umber, Relic Green, Ivory Cream
              </li>
            </ul>
          </div>

          {/* Lighting */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h4 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: '600',
              color: '#1A1A1A',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Lighting
            </h4>
            <ul className="space-y-2" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Diffused, directional, candlelight inspired
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Embrace shadows, golden hour tones
              </li>
            </ul>
          </div>

          {/* Props & Touchpoints */}
          <div>
            <h4 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: '600',
              color: '#1A1A1A',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Props & Touchpoints
            </h4>
            <ul className="space-y-2" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Human touch, linens, altar references
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Partial body crops (hands, ears, collarbones)
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Frame for sculptural presence
              </li>
            </ul>
          </div>

          {/* Motion Concepts */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#AAB5B2' }}>
            <h4 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: '600',
              color: '#F9F6F0',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Motion Concepts
            </h4>
            <ul className="space-y-2" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Slow mist fall, steam swirl, subtle pan
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Embossed logo catch light
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Fingers nearing product (not always touching)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section II: Lifestyle Photography */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #D9C4BB' }}>
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <HOLYSparkle size={24} color="#D9C4BB" opacity={1} strokeWidth={1.5} />
              <h3 style={{ 
                fontFamily: 'Garamond, serif', 
                fontSize: '28px', 
                color: '#1A1A1A',
                lineHeight: '120%'
              }}>
                II. Lifestyle Photography
              </h3>
            </div>
            <p style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '18px', 
              fontStyle: 'italic',
              color: '#1A1A1A',
              opacity: 0.7,
              marginBottom: '24px'
            }}>
              Bodies as Temples
            </p>
          </div>

          {/* Mood & Aesthetic */}
          <div>
            <h4 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: '600',
              color: '#1A1A1A',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Mood & Aesthetic
            </h4>
            <ul className="space-y-2" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Sacred, sensual, quiet
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Implied intimacy: self or shared rituals
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Diverse bodies and textures
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Architectural yet soft settings
              </li>
            </ul>
          </div>

          {/* Styling */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h4 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: '600',
              color: '#1A1A1A',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Styling
            </h4>
            <ul className="space-y-2" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Nude, draped, skintight in brand palette
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Dewy skin, tousled hair, light jewelry
              </li>
            </ul>
          </div>

          {/* Environment */}
          <div>
            <h4 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: '600',
              color: '#1A1A1A',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Environment
            </h4>
            <ul className="space-y-2" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Studio, altar, bath, bed
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Candle glow, misty windows, linen drape
              </li>
            </ul>
          </div>

          {/* Motion Concepts */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#D9C4BB' }}>
            <h4 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: '600',
              color: '#F9F6F0',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Motion Concepts
            </h4>
            <ul className="space-y-2" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                A misting gesture
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Partnered application
              </li>
              <li style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', lineHeight: '170%', paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                Slow breath through nose before ritual
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Emotional Tone Guide */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#5E6458', border: '2px solid #5E6458' }}>
        <div className="mb-6">
          <h3 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '28px', 
            color: '#F9F6F0',
            lineHeight: '120%',
            marginBottom: '8px'
          }}>
            Emotional Tone Guide
          </h3>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '14px', 
            color: '#F9F6F0',
            opacity: 0.9
          }}>
            Core feelings to evoke through visual language
          </p>
        </div>

        <div className="space-y-4">
          {[
            { feeling: 'Sensual', direction: 'Skin on skin, intentional movement' },
            { feeling: 'Sacred', direction: 'Reverent pace, focused rituals' },
            { feeling: 'Rebellious', direction: 'Gender fluidity, autonomy, anti-purity' },
            { feeling: 'Intimate', direction: 'Private, unfiltered, soft moments' },
            { feeling: 'Luxurious', direction: 'Golden tones, depth of field, sculptural compositions' }
          ].map((item, index) => (
            <div 
              key={index}
              className="p-5 rounded-xl"
              style={{ backgroundColor: 'rgba(249, 246, 240, 0.1)', border: '1px solid rgba(249, 246, 240, 0.2)' }}
            >
              <div className="flex items-start gap-4">
                <div style={{ minWidth: '120px' }}>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '14px', 
                    fontWeight: '600',
                    color: '#F9F6F0'
                  }}>
                    {item.feeling}
                  </p>
                </div>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  color: '#F9F6F0',
                  opacity: 0.9,
                  lineHeight: '160%'
                }}>
                  {item.direction}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage by Channel */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #9C887A' }}>
        <div className="mb-6">
          <h3 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '28px', 
            color: '#1A1A1A',
            lineHeight: '120%',
            marginBottom: '8px'
          }}>
            Usage by Channel
          </h3>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '14px', 
            color: '#1A1A1A',
            opacity: 0.6
          }}>
            Tailored visual approach per platform
          </p>
        </div>

        <div className="space-y-4">
          {[
            { channel: 'DTC Website', focus: 'Sacred objects, architectural layout' },
            { channel: 'Amazon', focus: 'Clean clarity, clear use context' },
            { channel: 'Social (IG/TT)', focus: 'Lifestyle intimacy, short-form rituals, ASMR feel' },
            { channel: 'Studio / POP', focus: 'Product education, sensual tool focus' }
          ].map((item, index) => (
            <div 
              key={index}
              className="p-5 rounded-xl"
              style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
            >
              <div className="flex items-start gap-4">
                <div style={{ minWidth: '160px' }}>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '14px', 
                    fontWeight: '600',
                    color: '#1A1A1A'
                  }}>
                    {item.channel}
                  </p>
                </div>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  color: '#1A1A1A',
                  opacity: 0.8,
                  lineHeight: '160%'
                }}>
                  {item.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Note */}
      <div className="p-6 rounded-xl" style={{ backgroundColor: '#D7D0C5', border: '1px solid #DADADA' }}>
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#1A1A1A',
          lineHeight: '170%'
        }}>
          <strong>Implementation Note:</strong> This visual direction serves as documentation for photographers, 
          art directors, and content creators. All visual assets must align with these guidelines to maintain 
          brand consistency across touchpoints. Reference this page during creative briefs, shot lists, and 
          production reviews.
        </p>
      </div>

    </div>
  );
}
