import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { HOLYCamera, HOLYSparkle, HOLYCircle, HOLYSquare } from '../components/icons/HOLYIcons';
import { TM } from '../components/core-system';

// ========================================
// VIDEO ASSEMBLY PAGE - CAPCUT ASSET PACK
// ========================================
// Export-ready branded overlays and cards for CapCut Desktop

export default function VideoAssemblyPage() {
  return (
    <div className="space-y-8">
      
      {/* Page Header */}
      <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <HOLYCamera size={28} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h2 style={{ 
                fontFamily: 'Garamond, serif', 
                fontSize: '32px', 
                fontWeight: '500', 
                color: '#1A1A1A', 
                lineHeight: '120%'
              }}>
                CapCut Asset Pack (Export Ready)
              </h2>
            </div>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '13px', 
              color: '#1A1A1A', 
              opacity: 0.5,
              lineHeight: '140%'
            }}>
              Social → Video Assembly • Export branded overlays & cards for CapCut Desktop
            </p>
          </div>
          <Badge style={{ backgroundColor: '#AAB5B2', color: '#FFFFFF' }}>
            Export Ready
          </Badge>
        </div>
      </div>

      {/* Export Instructions */}
      <div className="p-6 rounded-xl" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
        <div className="flex items-start gap-4">
          <HOLYSparkle size={24} color="#AAB5B2" opacity={1} strokeWidth={1.5} />
          <div>
            <h3 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: '600',
              color: '#FFFFFF',
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Export Instructions
            </h3>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '13px', 
              color: '#FFFFFF',
              opacity: 0.8,
              lineHeight: '160%',
              marginBottom: '12px'
            }}>
              Export overlays as PNG with transparency at exact frame size: 9:16 (1080×1920), 4:5 (1080×1350), 1:1 (1080×1080), 16:9 (1920×1080).
            </p>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '13px', 
              color: '#FFFFFF',
              opacity: 0.8,
              lineHeight: '160%'
            }}>
              Import overlays into CapCut as media layers above clips. Reuse across multiple edits.
            </p>
          </div>
        </div>
      </div>

      <Separator style={{ backgroundColor: '#DADADA' }} />

      {/* Master Artboards Grid */}
      <div className="space-y-8">
        <div>
          <h3 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '24px', 
            color: '#1A1A1A',
            marginBottom: '16px'
          }}>
            Master Artboards
          </h3>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '13px', 
            color: '#1A1A1A',
            opacity: 0.6,
            marginBottom: '24px'
          }}>
            Four aspect ratios • Five exportable layer groups each • Safe zone guides (non-exporting)
          </p>
        </div>

        {/* Grid of all 4 masters */}
        <div className="grid grid-cols-2 gap-8">
          
          {/* Master A: 9:16 (1080×1920) */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #AAB5B2' }}>
              <div className="text-center mb-6">
                <h4 style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#1A1A1A',
                  marginBottom: '4px'
                }}>
                  CapCut Master — 9:16
                </h4>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '11px', 
                  color: '#1A1A1A',
                  opacity: 0.5
                }}>
                  1080 × 1920 (TikTok, Reels, Shorts)
                </p>
              </div>

              {/* Visual representation of 9:16 frame */}
              <div style={{
                width: '180px', // scaled down for display
                height: '320px',
                margin: '0 auto',
                backgroundColor: '#F9F6F0',
                borderRadius: '8px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid #DADADA'
              }}>
                {/* Safe Zone Guides (top 10%, bottom 15%) */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '10%',
                  borderBottom: '1px dashed rgba(217, 196, 187, 0.4)',
                  pointerEvents: 'none'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '15%',
                  borderTop: '1px dashed rgba(217, 196, 187, 0.4)',
                  pointerEvents: 'none'
                }}></div>

                {/* Overlay / Film Treatment (subtle grain/vignette) */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at center, transparent 40%, rgba(26, 26, 26, 0.15) 100%)',
                  pointerEvents: 'none'
                }}></div>

                {/* Overlay / Logo Lockup (top safe zone) */}
                <div style={{
                  position: 'absolute',
                  top: '8%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '8px 16px',
                  backgroundColor: 'rgba(249, 246, 240, 0.95)',
                  borderRadius: '4px',
                  border: '1px solid rgba(26, 26, 26, 0.1)'
                }}>
                  <p style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '10px',
                    color: '#1A1A1A',
                    margin: 0
                  }}>
                    HØLY<span style={{ fontSize: '5px' }}>™</span>
                  </p>
                </div>

                {/* Lower Third / Caption Bar */}
                <div style={{
                  position: 'absolute',
                  bottom: '18%',
                  left: '8px',
                  right: '8px',
                  padding: '12px',
                  backgroundColor: 'rgba(170, 181, 178, 0.95)',
                  borderRadius: '6px',
                  border: '1px solid rgba(170, 181, 178, 1)'
                }}>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '8px',
                    color: '#FFFFFF',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    Caption text appears here
                  </p>
                </div>

                {/* Center watermark to show content area */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  opacity: 0.2
                }}>
                  <HOLYCamera size={32} color="#1A1A1A" opacity={0.3} strokeWidth={1.5} />
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '8px',
                    color: '#1A1A1A',
                    marginTop: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Video clip area
                  </p>
                </div>
              </div>
            </div>

            {/* Layer Group List */}
            <div className="space-y-2">
              <LayerGroup number="01" name="Overlay / Film Treatment" exportable={true} />
              <LayerGroup number="02" name="Overlay / Logo Lockup" exportable={true} />
              <LayerGroup number="03" name="Lower Third / Caption Bar" exportable={true} />
              <LayerGroup number="04" name="Title Card" exportable={true} />
              <LayerGroup number="05" name="End Card" exportable={true} />
              <LayerGroup number="06" name="Safe Zones (Do Not Export)" exportable={false} />
            </div>
          </div>

          {/* Master B: 4:5 (1080×1350) */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #D9C4BB' }}>
              <div className="text-center mb-6">
                <h4 style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#1A1A1A',
                  marginBottom: '4px'
                }}>
                  CapCut Master — 4:5
                </h4>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '11px', 
                  color: '#1A1A1A',
                  opacity: 0.5
                }}>
                  1080 × 1350 (Instagram Feed)
                </p>
              </div>

              {/* Visual representation of 4:5 frame */}
              <div style={{
                width: '180px',
                height: '225px', // 4:5 ratio
                margin: '0 auto',
                backgroundColor: '#F9F6F0',
                borderRadius: '8px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid #DADADA'
              }}>
                {/* Safe Zone Guides */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '10%',
                  borderBottom: '1px dashed rgba(217, 196, 187, 0.4)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '15%',
                  borderTop: '1px dashed rgba(217, 196, 187, 0.4)'
                }}></div>

                {/* Film Treatment */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at center, transparent 40%, rgba(26, 26, 26, 0.15) 100%)'
                }}></div>

                {/* Logo Lockup */}
                <div style={{
                  position: 'absolute',
                  top: '8%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '8px 16px',
                  backgroundColor: 'rgba(249, 246, 240, 0.95)',
                  borderRadius: '4px',
                  border: '1px solid rgba(26, 26, 26, 0.1)'
                }}>
                  <p style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '10px',
                    color: '#1A1A1A',
                    margin: 0
                  }}>
                    HØLY<span style={{ fontSize: '5px' }}>™</span>
                  </p>
                </div>

                {/* Lower Third */}
                <div style={{
                  position: 'absolute',
                  bottom: '18%',
                  left: '8px',
                  right: '8px',
                  padding: '12px',
                  backgroundColor: 'rgba(217, 196, 187, 0.95)',
                  borderRadius: '6px',
                  border: '1px solid rgba(217, 196, 187, 1)'
                }}>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '8px',
                    color: '#1A1A1A',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    Caption text appears here
                  </p>
                </div>

                {/* Center placeholder */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  opacity: 0.2
                }}>
                  <HOLYCamera size={32} color="#1A1A1A" opacity={0.3} strokeWidth={1.5} />
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '8px',
                    color: '#1A1A1A',
                    marginTop: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Video clip area
                  </p>
                </div>
              </div>
            </div>

            {/* Layer Group List */}
            <div className="space-y-2">
              <LayerGroup number="01" name="Overlay / Film Treatment" exportable={true} />
              <LayerGroup number="02" name="Overlay / Logo Lockup" exportable={true} />
              <LayerGroup number="03" name="Lower Third / Caption Bar" exportable={true} />
              <LayerGroup number="04" name="Title Card" exportable={true} />
              <LayerGroup number="05" name="End Card" exportable={true} />
              <LayerGroup number="06" name="Safe Zones (Do Not Export)" exportable={false} />
            </div>
          </div>

          {/* Master C: 1:1 (1080×1080) */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #5E6458' }}>
              <div className="text-center mb-6">
                <h4 style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#1A1A1A',
                  marginBottom: '4px'
                }}>
                  CapCut Master — 1:1
                </h4>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '11px', 
                  color: '#1A1A1A',
                  opacity: 0.5
                }}>
                  1080 × 1080 (Instagram Square)
                </p>
              </div>

              {/* Visual representation of 1:1 frame */}
              <div style={{
                width: '200px',
                height: '200px',
                margin: '0 auto',
                backgroundColor: '#F9F6F0',
                borderRadius: '8px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid #DADADA'
              }}>
                {/* Safe Zones */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '10%',
                  borderBottom: '1px dashed rgba(217, 196, 187, 0.4)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '15%',
                  borderTop: '1px dashed rgba(217, 196, 187, 0.4)'
                }}></div>

                {/* Film Treatment */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at center, transparent 40%, rgba(26, 26, 26, 0.15) 100%)'
                }}></div>

                {/* Logo Lockup */}
                <div style={{
                  position: 'absolute',
                  top: '8%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '8px 16px',
                  backgroundColor: 'rgba(249, 246, 240, 0.95)',
                  borderRadius: '4px',
                  border: '1px solid rgba(26, 26, 26, 0.1)'
                }}>
                  <p style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '10px',
                    color: '#1A1A1A',
                    margin: 0
                  }}>
                    HØLY<span style={{ fontSize: '5px' }}>™</span>
                  </p>
                </div>

                {/* Lower Third */}
                <div style={{
                  position: 'absolute',
                  bottom: '18%',
                  left: '8px',
                  right: '8px',
                  padding: '12px',
                  backgroundColor: 'rgba(94, 100, 88, 0.95)',
                  borderRadius: '6px',
                  border: '1px solid rgba(94, 100, 88, 1)'
                }}>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '8px',
                    color: '#FFFFFF',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    Caption text appears here
                  </p>
                </div>

                {/* Center placeholder */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  opacity: 0.2
                }}>
                  <HOLYCamera size={32} color="#1A1A1A" opacity={0.3} strokeWidth={1.5} />
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '8px',
                    color: '#1A1A1A',
                    marginTop: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Video clip area
                  </p>
                </div>
              </div>
            </div>

            {/* Layer Group List */}
            <div className="space-y-2">
              <LayerGroup number="01" name="Overlay / Film Treatment" exportable={true} />
              <LayerGroup number="02" name="Overlay / Logo Lockup" exportable={true} />
              <LayerGroup number="03" name="Lower Third / Caption Bar" exportable={true} />
              <LayerGroup number="04" name="Title Card" exportable={true} />
              <LayerGroup number="05" name="End Card" exportable={true} />
              <LayerGroup number="06" name="Safe Zones (Do Not Export)" exportable={false} />
            </div>
          </div>

          {/* Master D: 16:9 (1920×1080) */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #9C887A' }}>
              <div className="text-center mb-6">
                <h4 style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#1A1A1A',
                  marginBottom: '4px'
                }}>
                  CapCut Master — 16:9
                </h4>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '11px', 
                  color: '#1A1A1A',
                  opacity: 0.5
                }}>
                  1920 × 1080 (YouTube, Desktop)
                </p>
              </div>

              {/* Visual representation of 16:9 frame */}
              <div style={{
                width: '280px',
                height: '157px', // 16:9 ratio
                margin: '0 auto',
                backgroundColor: '#F9F6F0',
                borderRadius: '8px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid #DADADA'
              }}>
                {/* Safe Zones */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '10%',
                  borderBottom: '1px dashed rgba(217, 196, 187, 0.4)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '15%',
                  borderTop: '1px dashed rgba(217, 196, 187, 0.4)'
                }}></div>

                {/* Film Treatment */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at center, transparent 40%, rgba(26, 26, 26, 0.15) 100%)'
                }}></div>

                {/* Logo Lockup */}
                <div style={{
                  position: 'absolute',
                  top: '8%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '8px 16px',
                  backgroundColor: 'rgba(249, 246, 240, 0.95)',
                  borderRadius: '4px',
                  border: '1px solid rgba(26, 26, 26, 0.1)'
                }}>
                  <p style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: '10px',
                    color: '#1A1A1A',
                    margin: 0
                  }}>
                    HØLY<span style={{ fontSize: '5px' }}>™</span>
                  </p>
                </div>

                {/* Lower Third */}
                <div style={{
                  position: 'absolute',
                  bottom: '18%',
                  left: '16px',
                  right: '16px',
                  padding: '10px 16px',
                  backgroundColor: 'rgba(156, 136, 122, 0.95)',
                  borderRadius: '6px',
                  border: '1px solid rgba(156, 136, 122, 1)'
                }}>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '8px',
                    color: '#FFFFFF',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    Caption text appears here
                  </p>
                </div>

                {/* Center placeholder */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  opacity: 0.2
                }}>
                  <HOLYCamera size={24} color="#1A1A1A" opacity={0.3} strokeWidth={1.5} />
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '7px',
                    color: '#1A1A1A',
                    marginTop: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Video clip area
                  </p>
                </div>
              </div>
            </div>

            {/* Layer Group List */}
            <div className="space-y-2">
              <LayerGroup number="01" name="Overlay / Film Treatment" exportable={true} />
              <LayerGroup number="02" name="Overlay / Logo Lockup" exportable={true} />
              <LayerGroup number="03" name="Lower Third / Caption Bar" exportable={true} />
              <LayerGroup number="04" name="Title Card" exportable={true} />
              <LayerGroup number="05" name="End Card" exportable={true} />
              <LayerGroup number="06" name="Safe Zones (Do Not Export)" exportable={false} />
            </div>
          </div>

        </div>
      </div>

      <Separator style={{ backgroundColor: '#DADADA' }} />

      {/* Title & End Card Samples */}
      <div className="space-y-6">
        <div>
          <h3 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '24px', 
            color: '#1A1A1A',
            marginBottom: '8px'
          }}>
            Title & End Card Samples
          </h3>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '13px', 
            color: '#1A1A1A',
            opacity: 0.6,
            marginBottom: '24px'
          }}>
            Full-frame cards (not overlays) • Export at exact master dimensions
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Title Card Sample */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #AAB5B2' }}>
            <h4 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '12px', 
              fontWeight: '600',
              color: '#1A1A1A',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Group 04 — Title Card
            </h4>
            
            {/* Title Card Visual */}
            <div style={{
              padding: '48px 32px',
              backgroundColor: '#1A1A1A',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{ 
                fontFamily: 'Garamond, serif', 
                fontSize: '24px',
                fontStyle: 'italic',
                color: '#FFFFFF',
                margin: 0,
                lineHeight: '140%'
              }}>
                Your body is a temple.
              </p>
            </div>

            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '11px', 
              color: '#1A1A1A',
              opacity: 0.5,
              marginTop: '12px',
              lineHeight: '160%'
            }}>
              Export as opaque PNG at master dimensions. Use existing typography tokens only.
            </p>
          </div>

          {/* End Card Sample */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #5E6458' }}>
            <h4 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '12px', 
              fontWeight: '600',
              color: '#1A1A1A',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Group 05 — End Card
            </h4>
            
            {/* End Card Visual */}
            <div style={{
              padding: '48px 32px',
              backgroundColor: '#F9F6F0',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #DADADA'
            }}>
              <p style={{ 
                fontFamily: 'Garamond, serif', 
                fontSize: '20px',
                color: '#1A1A1A',
                margin: '0 0 8px 0'
              }}>
                HØLY<span style={{ fontSize: '10px' }}>™</span>
              </p>
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '11px',
                color: '#1A1A1A',
                opacity: 0.6,
                margin: 0
              }}>
                Ritual care for your body
              </p>
            </div>

            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '11px', 
              color: '#1A1A1A',
              opacity: 0.5,
              marginTop: '12px',
              lineHeight: '160%'
            }}>
              Export as opaque or transparent PNG. Logo lockup uses existing brand system.
            </p>
          </div>
        </div>
      </div>

      <Separator style={{ backgroundColor: '#DADADA' }} />

      {/* Usage Workflow */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #D9C4BB' }}>
        <div className="space-y-6">
          <div>
            <h3 style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '24px', 
              color: '#1A1A1A',
              marginBottom: '8px'
            }}>
              Usage Workflow
            </h3>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '13px', 
              color: '#1A1A1A',
              opacity: 0.6,
              marginBottom: '24px'
            }}>
              How to use these assets in CapCut Desktop
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #D9C4BB' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#D9C4BB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600', color: '#FFFFFF' }}>1</span>
              </div>
              <div>
                <h4 style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#1A1A1A',
                  marginBottom: '4px'
                }}>
                  Export all layers at exact dimensions
                </h4>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '13px', 
                  color: '#1A1A1A',
                  opacity: 0.8,
                  lineHeight: '160%',
                  margin: 0
                }}>
                  Export Groups 01–05 as PNG files. Match aspect ratio to your content (9:16 for TikTok, 4:5 for Instagram Feed, etc.).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #D9C4BB' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#D9C4BB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600', color: '#FFFFFF' }}>2</span>
              </div>
              <div>
                <h4 style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#1A1A1A',
                  marginBottom: '4px'
                }}>
                  Import into CapCut as media
                </h4>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '13px', 
                  color: '#1A1A1A',
                  opacity: 0.8,
                  lineHeight: '160%',
                  margin: 0
                }}>
                  Drag PNG overlays into your CapCut project. They appear as media files in your library.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #D9C4BB' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#D9C4BB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600', color: '#FFFFFF' }}>3</span>
              </div>
              <div>
                <h4 style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#1A1A1A',
                  marginBottom: '4px'
                }}>
                  Layer overlays above video clips
                </h4>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '13px', 
                  color: '#1A1A1A',
                  opacity: 0.8,
                  lineHeight: '160%',
                  margin: 0
                }}>
                  Place overlays (Groups 01–03) on tracks above your video clips. Transparent areas let video show through.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #D9C4BB' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#D9C4BB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600', color: '#FFFFFF' }}>4</span>
              </div>
              <div>
                <h4 style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#1A1A1A',
                  marginBottom: '4px'
                }}>
                  Reuse across edits
                </h4>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '13px', 
                  color: '#1A1A1A',
                  opacity: 0.8,
                  lineHeight: '160%',
                  margin: 0
                }}>
                  Save overlay PNGs in a folder. Apply same branded treatment to every video instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator style={{ backgroundColor: '#DADADA' }} />

      {/* System Constraints */}
      <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #1A1A1A', opacity: 0.7 }}>
        <h4 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          fontWeight: '600',
          color: '#1A1A1A',
          marginBottom: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          System Constraints
        </h4>
        <ul style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '13px', 
          color: '#1A1A1A',
          opacity: 0.8,
          lineHeight: '180%',
          paddingLeft: '20px',
          margin: 0
        }}>
          <li>All overlays use existing HØLY<TM variant="inline" /> design system tokens only</li>
          <li>No new typography, colors, or effects outside system</li>
          <li>Film treatment derived from existing grain/vignette if available</li>
          <li>Logo lockup follows existing brand guidelines</li>
          <li>Caption bars use system color palette and rounded corners</li>
        </ul>
      </div>

    </div>
  );
}

// Helper component for layer group listing
function LayerGroup({ number, name, exportable }: { number: string; name: string; exportable: boolean }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg" style={{ 
      backgroundColor: exportable ? 'rgba(170, 181, 178, 0.1)' : 'rgba(26, 26, 26, 0.05)',
      border: `1px solid ${exportable ? 'rgba(170, 181, 178, 0.3)' : 'rgba(26, 26, 26, 0.1)'}`
    }}>
      <div className="flex items-center gap-3">
        <span style={{ 
          fontFamily: 'monospace', 
          fontSize: '10px', 
          color: '#1A1A1A',
          opacity: 0.5,
          fontWeight: '600'
        }}>
          {number}
        </span>
        <span style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '11px', 
          color: '#1A1A1A',
          opacity: 0.8
        }}>
          {name}
        </span>
      </div>
      <Badge style={{ 
        backgroundColor: exportable ? '#5E6458' : '#8C8981',
        color: '#FFFFFF',
        fontSize: '9px',
        padding: '2px 8px'
      }}>
        {exportable ? 'Export: ON' : 'Export: OFF'}
      </Badge>
    </div>
  );
}
