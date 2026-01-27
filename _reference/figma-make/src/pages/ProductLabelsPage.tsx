import { useState, useRef } from 'react';
import { Download, Eye, EyeOff, Lock, Unlock, Package, Box, FolderOpen, ArrowRight, Layers } from 'lucide-react';
import html2canvas from 'html2canvas';
import { toast } from 'sonner@2.0.3';
import { HOLYPackage } from '../components/icons/HOLYIcons';
import { TM, SacredToggle, SacredButton } from '../components/core-system';

// Import SelfNamed verified dieline screenshots
import imgContainerLabelGuideForRetinolAlternativeMoisturizer1 from "figma:asset/2b7125203b0ef7205f739ee78757dec8ba848e5b.png";
import imgBoxLabelGuideForRetinolAlternativeMoisturizer1 from "figma:asset/0a3e3b55cb23a3ad597212c43d5c36a7bd5fe8e1.png";
import imgMicrobiomePrebioticsFaceMistSelfNamedGuideScreenshot from "figma:asset/57e082e7a7776ef4f89e64c1ea7cb4a04d46a919.png";
import imgAvoidTextInThisAreaWhite from "figma:asset/aa97c2ff02215abc3faada39639cdb5420cc34c6.png";

// Product SKU data structure
interface ProductSKU {
  id: string;
  name: string;
  volume: string;
  containerDimensions: { width: number; height: number };
  editableArea: { width: number; height: number };
  viewScale: number;
}

// Retinol Alternative Moisturiser — 50ml
const retinolMoisturiser: ProductSKU = {
  id: 'retinol-moisturiser-50ml',
  name: 'Retinol Alternative Moisturiser',
  volume: '50ml / 1.69 fl oz',
  containerDimensions: { width: 439, height: 454 },  // Display dimensions
  editableArea: { width: 232, height: 268 },
  viewScale: 1.0,
};

// Microbiome Prebiotics Face Mist (HØLY | Essentials™)
const microbiomeFaceMist: ProductSKU = {
  id: 'essentials-renew-face-mist',
  name: 'Renew — Microbiome Prebiotics Face Mist',
  volume: '100mL / 3.38 fl oz',
  containerDimensions: { width: 587, height: 573 },  // Frame dimensions to match screenshot
  editableArea: { width: 224, height: 320 },
  viewScale: 1.0,
};

// Box Label dimensions (original 1293px × 1497px from SelfNamed Figma frame, scaled to ~454px height to match container)
const boxLabelDimensions = {
  originalWidth: 1293,
  originalHeight: 1497,
  displayWidth: 392,   // Scaled proportionally to match container height while maintaining aspect ratio
  displayHeight: 454,  // Match container label height for visual consistency
  viewScale: 1.0,
};

// Container Label Component — Migrated to Root Primitives v3.0
function ContainerLabelTemplate() {
  const [showGuides, setShowGuides] = useState(true);
  const [isLocked, setIsLocked] = useState(true);
  const templateRef = useRef<HTMLDivElement>(null);

  const WIDTH = retinolMoisturiser.containerDimensions.width;
  const HEIGHT = retinolMoisturiser.containerDimensions.height;
  const VIEW_SCALE = retinolMoisturiser.viewScale;

  const handleExport = async () => {
    if (!templateRef.current) return;
    
    try {
      const canvas = await html2canvas(templateRef.current, {
        scale: 2,
        backgroundColor: '#FFFFFF',
        logging: false,
      });

      const link = document.createElement('a');
      link.download = `HOLY-${retinolMoisturiser.id}-container-label.png`;
      link.href = canvas.toDataURL();
      link.click();
      
      toast.success('Container label exported');
    } catch (error) {
      toast.error('Export failed');
    }
  };

  return (
    <div className="space-y-3">
      {/* Control Bar — Root Primitives v3.0 */}
      <div className="flex items-center justify-between px-3 py-2 rounded-lg" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
        <div className="flex items-center gap-2">
          <SacredToggle
            isActive={showGuides}
            onClick={() => setShowGuides(!showGuides)}
            activeIcon={<Eye size={14} style={{ color: 'var(--primary-foreground)' }} />}
            inactiveIcon={<EyeOff size={14} style={{ color: 'var(--foreground)' }} />}
            activeLabel="Label Area"
            inactiveLabel="Label Area"
          />

          <SacredToggle
            isActive={isLocked}
            onClick={() => setIsLocked(!isLocked)}
            activeIcon={<Lock size={14} style={{ color: 'var(--accent-foreground)' }} />}
            inactiveIcon={<Unlock size={14} style={{ color: 'var(--foreground)' }} />}
            activeLabel="Locked"
            inactiveLabel="Unlocked"
            style={{ backgroundColor: isLocked ? 'var(--accent-green)' : undefined }}
          />
        </div>

        <SacredButton 
          onClick={handleExport}
          variant="primary"
          size="sm"
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Download size={14} />
          <span>Export</span>
        </SacredButton>
      </div>

      {/* Template Container */}
      <div 
        className="rounded-lg flex items-center justify-center"
        style={{ 
          backgroundColor: '#E8E8E8', 
          border: '1px solid #DADADA',
          padding: '40px',
        }}
      >
        <div className="shadow-lg">
          <div
            style={{
              transform: `scale(${VIEW_SCALE})`,
              transformOrigin: 'center center',
              width: `${WIDTH}px`,
              height: `${HEIGHT}px`,
            }}
          >
            <div
              ref={templateRef}
              className="relative"
              style={{
                width: `${WIDTH}px`,
                height: `${HEIGHT}px`,
                backgroundColor: '#FFFFFF',
                pointerEvents: isLocked ? 'none' : 'auto',
              }}
            >
              {/* SelfNamed Screenshot (always visible) */}
              <div className="absolute h-[454px] left-0 top-0 w-[439px] pointer-events-none select-none">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img 
                    alt="SelfNamed Container Label Template" 
                    className="absolute h-full left-[-0.01%] max-w-none top-0 w-[130.08%]" 
                    src={imgContainerLabelGuideForRetinolAlternativeMoisturizer1} 
                  />
                </div>
              </div>

              {/* White "Avoid Text" Overlay (always visible) */}
              <div className="absolute contents left-[290.6px] top-[97px] pointer-events-none select-none">
                <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[290.6px] top-[97px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "286.765625", "--transform-inner-height": "60.015625" } as React.CSSProperties}>
                  <div className="flex-none rotate-[270deg]">
                    <div className="bg-[rgba(255,255,255,0.5)] h-[60.031px] relative w-[286.78px]">
                      <div aria-hidden="true" className="absolute border border-dashed border-white inset-0 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Label Area Toggle Group - Blue overlay + Green centerline */}
              {showGuides && (
                <>
                  {/* Blue "Allow Text" Overlay */}
                  <div className="absolute contents left-[59px] top-[106px] pointer-events-none select-none" data-name="Allow text in this area (blue)">
                    <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[59px] top-[106px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "268", "--transform-inner-height": "232" } as React.CSSProperties}>
                      <div className="flex-none rotate-[270deg]">
                        <div className="bg-[rgba(91,175,226,0.2)] h-[232px] relative w-[268px]">
                          <div aria-hidden="true" className="absolute border border-[#5BAFE2] border-dashed inset-0 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Green "Center text on this line" Guide - FRONT Panel Center */}
                  <div 
                    className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[126px] top-[106px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))] pointer-events-none select-none" 
                    style={{ "--transform-inner-width": "268", "--transform-inner-height": "0" } as React.CSSProperties}
                    data-name="Center text on this line (green)"
                  >
                    <div className="flex-none rotate-[90deg]">
                      <div className="h-0 relative w-[268px]">
                        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268 4">
                            <line stroke="#34C759" strokeWidth="4" x2="268" y1="2" y2="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Box Label Template
function BoxLabelTemplate() {
  const [showGuides, setShowGuides] = useState(true);
  const [isLocked, setIsLocked] = useState(true);
  const templateRef = useRef<HTMLDivElement>(null);

  const WIDTH = boxLabelDimensions.displayWidth;
  const HEIGHT = boxLabelDimensions.displayHeight;
  const VIEW_SCALE = boxLabelDimensions.viewScale;

  const handleExport = async () => {
    if (!templateRef.current) return;
    
    try {
      const canvas = await html2canvas(templateRef.current, {
        scale: 2,
        backgroundColor: '#FFFFFF',
        logging: false,
      });

      const link = document.createElement('a');
      link.download = `HOLY-${retinolMoisturiser.id}-box-label.png`;
      link.href = canvas.toDataURL();
      link.click();
      
      toast.success('Box label exported');
    } catch (error) {
      toast.error('Export failed');
    }
  };

  return (
    <div className="space-y-3">
      {/* Control Bar */}
      <div className="flex items-center justify-between px-3 py-2 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
        <div className="flex items-center gap-2">
          <SacredToggle
            isActive={showGuides}
            onClick={() => setShowGuides(!showGuides)}
            activeIcon={<Eye size={14} style={{ color: 'var(--primary-foreground)' }} />}
            inactiveIcon={<EyeOff size={14} style={{ color: 'var(--foreground)' }} />}
            activeLabel="Label Area"
            inactiveLabel="Label Area"
          />

          <SacredToggle
            isActive={isLocked}
            onClick={() => setIsLocked(!isLocked)}
            activeIcon={<Lock size={14} style={{ color: 'var(--accent-foreground)' }} />}
            inactiveIcon={<Unlock size={14} style={{ color: 'var(--foreground)' }} />}
            activeLabel="Locked"
            inactiveLabel="Unlocked"
            style={{ backgroundColor: isLocked ? 'var(--accent-green)' : undefined }}
          />
        </div>

        <SacredButton 
          onClick={handleExport}
          variant="primary"
          size="sm"
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Download size={14} />
          <span>Export</span>
        </SacredButton>
      </div>

      {/* Template Container */}
      <div 
        className="rounded-lg flex items-center justify-center"
        style={{ 
          backgroundColor: '#E8E8E8', 
          border: '1px solid #DADADA',
          padding: '40px',
        }}
      >
        <div className="shadow-lg">
          <div
            style={{
              transform: `scale(${VIEW_SCALE})`,
              transformOrigin: 'center center',
              width: `${WIDTH}px`,
              height: `${HEIGHT}px`,
            }}
          >
            <div
              ref={templateRef}
              className="relative"
              style={{
                width: `${WIDTH}px`,
                height: `${HEIGHT}px`,
                backgroundColor: '#FFFFFF',
                pointerEvents: isLocked ? 'none' : 'auto',
              }}
            >
              {/* SelfNamed Screenshot (always visible) - Scaled from 1293x1497 to 392x454 maintaining aspect ratio */}
              <div className="absolute h-[454px] left-0 top-0 w-[392px] pointer-events-none select-none">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img 
                    alt="SelfNamed Box Label Template" 
                    className="absolute h-[100.01%] left-0 max-w-none top-[-0.01%] w-[144.08%]" 
                    src={imgBoxLabelGuideForRetinolAlternativeMoisturizer1} 
                  />
                </div>
              </div>

              {/* Blue "Allow Text in this area" Overlay (toggleable with Guides) - Scaled proportionally from 1293x1497 */}
              {showGuides && (
                <div 
                  className="absolute bg-[rgba(91,175,226,0.2)] pointer-events-none select-none"
                  style={{
                    height: `${703 * (HEIGHT / 1497)}px`,
                    left: `${466 * (WIDTH / 1293)}px`,
                    top: `${354 * (HEIGHT / 1497)}px`,
                    width: `${510 * (WIDTH / 1293)}px`,
                  }}
                >
                  <div aria-hidden="true" className="absolute border border-[#5BAFE2] border-dashed inset-0 pointer-events-none" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Face Mist Container Label Template
function FaceMistContainerLabelTemplate() {
  const [showGuides, setShowGuides] = useState(true);
  const [isLocked, setIsLocked] = useState(true);
  const templateRef = useRef<HTMLDivElement>(null);
  const labelContentRef = useRef<HTMLDivElement>(null); // NEW: Ref to the visible label content

  const WIDTH = microbiomeFaceMist.containerDimensions.width;
  const HEIGHT = microbiomeFaceMist.containerDimensions.height;
  const VIEW_SCALE = microbiomeFaceMist.viewScale;
  const LABEL_WIDTH = microbiomeFaceMist.editableArea.width;
  const LABEL_HEIGHT = microbiomeFaceMist.editableArea.height;

  const handleExport = async () => {
    if (!labelContentRef.current) return; // Export the VISIBLE label content
    
    try {
      const canvas = await html2canvas(labelContentRef.current, {
        scale: 2, // High-fidelity 2x scaling for sharp export
        backgroundColor: null, // Transparent background
        logging: false,
        width: LABEL_WIDTH, // Explicit width constraint to prevent stretching
        height: LABEL_HEIGHT, // Explicit height constraint to maintain aspect ratio
        windowWidth: LABEL_WIDTH, // Preserve canvas viewport dimensions
        windowHeight: LABEL_HEIGHT, // Preserve canvas viewport dimensions
      });

      const link = document.createElement('a');
      link.download = `HOLY-${microbiomeFaceMist.id}-container-label.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
      toast.success('Container label exported with transparent background');
    } catch (error) {
      toast.error('Export failed');
    }
  };

  // Label content - HØLY brand expression only (SelfNamed handles regulatory)
  // Scaled and centered on FRONT panel (green centerline at x=68px relative to blue area)
  const LabelContent = ({ showBackground = false }: { showBackground?: boolean }) => (
    <div style={{ width: `${LABEL_WIDTH}px`, height: `${LABEL_HEIGHT}px`, backgroundColor: showBackground ? 'rgba(245, 244, 241, 0.5)' : 'transparent', position: 'relative' }}>
      {/* Content container - centered on green line (FRONT panel center) with scaled content */}
      <div 
        style={{
          position: 'absolute',
          left: '68px', // Align to green centerline (204px absolute - 136px blue area left = 68px)
          top: '50%',
          transform: 'translate(-50%, -50%)', // Center the content block on the green line
          width: '120px', // Scaled width to fit comfortably within FRONT panel
          maxHeight: '290px', // Breathing room from top/bottom (320px - 30px margins)
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Sacred Symbol */}
        <div style={{ marginBottom: '8px' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="8.5" stroke="#9C887A" strokeWidth="0.5" fill="none"/>
            <line x1="10" y1="1.5" x2="10" y2="18.5" stroke="#9C887A" strokeWidth="0.5"/>
            <line x1="1.5" y1="10" x2="18.5" y2="10" stroke="#9C887A" strokeWidth="0.5"/>
            <circle cx="10" cy="10" r="1.5" fill="#9C887A"/>
          </svg>
        </div>

        {/* Brand Mark */}
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <div style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '7px', 
            color: '#9C887A',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '2px'
          }}>
            HØLY
          </div>
          <div style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '5px', 
            color: '#5E6458',
            letterSpacing: '0.08em'
          }}>
            Essentials<TM />
          </div>
        </div>

        {/* Product Name */}
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <h2 style={{ 
            fontFamily: 'EB Garamond, serif', 
            fontSize: '24px', 
            color: '#1A1A1A', 
            lineHeight: '1.1',
            letterSpacing: '0.01em',
            marginBottom: '8px',
            margin: '0 0 8px 0'
          }}>
            hølymist<TM />
          </h2>
          <div style={{ 
            width: '28px', 
            height: '0.5px', 
            backgroundColor: '#9C887A', 
            margin: '0 auto 5px', 
            opacity: 0.5 
          }} />
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '5.5px', 
            color: '#5E6458', 
            letterSpacing: '0.1em',
            lineHeight: '1.3',
            textAlign: 'center',
            textTransform: 'uppercase',
            margin: 0
          }}>
            Microbiome<br/>Prebiotics<br/>Face Mist
          </p>
        </div>

        {/* Ritual Message */}
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <p style={{ 
            fontFamily: 'EB Garamond, serif', 
            fontSize: '6.5px', 
            color: '#5E6458',
            lineHeight: '1.3',
            fontStyle: 'italic',
            letterSpacing: '0.02em',
            margin: 0
          }}>
            A gentle veil of<br/>microbiome wisdom
          </p>
        </div>

        {/* Divider Ornament */}
        <div style={{ marginBottom: '12px' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="6.5" stroke="#D7D0C5" strokeWidth="0.5" fill="none"/>
            <circle cx="8" cy="8" r="1" fill="#9C887A"/>
          </svg>
        </div>

        {/* Ritual Philosophy */}
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <p style={{ 
            fontFamily: 'EB Garamond, serif', 
            fontSize: '6px', 
            color: '#5E6458',
            lineHeight: '1.3',
            fontStyle: 'italic',
            letterSpacing: '0.01em',
            textAlign: 'center',
            margin: 0
          }}>
            Tend to your temple<br/>
            with intention
          </p>
        </div>

        {/* Sacred Botanicals */}
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '4.5px', 
            color: '#8C8981',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '2px',
            fontWeight: '600',
            margin: '0 0 2px 0'
          }}>
            Sacred Botanicals
          </p>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '5px', 
            color: '#5E6458', 
            lineHeight: '1.3',
            textAlign: 'center',
            margin: 0
          }}>
            Aloe · Rose Water<br/>
            Green Tea · Prebiotics
          </p>
        </div>

        {/* Volume */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '5px', 
            color: '#8C8981',
            letterSpacing: '0.04em',
            margin: 0
          }}>
            100 mL / 3.38 fl oz
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-3" style={{ width: '650px' }}>
      {/* Control Bar — Root Primitives v3.0 */}
      <div className="flex items-center justify-between px-3 py-2 rounded-lg" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
        <div className="flex items-center gap-2">
          <SacredToggle
            isActive={showGuides}
            onClick={() => setShowGuides(!showGuides)}
            activeIcon={<Eye size={14} style={{ color: 'var(--primary-foreground)' }} />}
            inactiveIcon={<EyeOff size={14} style={{ color: 'var(--foreground)' }} />}
            activeLabel="Label Area"
            inactiveLabel="Label Area"
          />

          <SacredToggle
            isActive={isLocked}
            onClick={() => setIsLocked(!isLocked)}
            activeIcon={<Lock size={14} style={{ color: 'var(--accent-foreground)' }} />}
            inactiveIcon={<Unlock size={14} style={{ color: 'var(--foreground)' }} />}
            activeLabel="Locked"
            inactiveLabel="Unlocked"
            style={{ backgroundColor: isLocked ? 'var(--accent-green)' : undefined }}
          />
        </div>

        <SacredButton 
          onClick={handleExport}
          variant="primary"
          size="sm"
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Download size={14} />
          <span>Export PNG</span>
        </SacredButton>
      </div>

      {/* Template View */}
      <div
        className="rounded-lg flex items-center justify-center"
        style={{ 
          backgroundColor: '#E8E8E8', 
          border: '1px solid #DADADA',
          padding: '40px',
        }}
      >
        <div className="shadow-lg">
          <div
            style={{
              transform: `scale(${VIEW_SCALE})`,
              transformOrigin: 'center center',
              width: `${WIDTH}px`,
              height: `${HEIGHT}px`,
            }}
          >
            <div
              ref={templateRef}
              className="relative overflow-hidden"
              style={{
                width: `${WIDTH}px`,
                height: `${HEIGHT}px`,
                backgroundColor: '#FFFFFF',
                pointerEvents: isLocked ? 'none' : 'auto',
              }}
            >
              {/* SelfNamed Screenshot (always visible) */}
              <div className="absolute h-[573px] left-0 top-0 w-[587px] pointer-events-none select-none">
                <img 
                  alt="SelfNamed Container Label Template" 
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                  src={imgMicrobiomePrebioticsFaceMistSelfNamedGuideScreenshot} 
                />
              </div>

              {/* White "Avoid Text" Overlay (always visible) - Rotated 270deg */}
              <div className="absolute flex inset-[21.29%_30.49%_22.86%_61.33%] items-center justify-center pointer-events-none select-none">
                <div className="flex-none h-[48px] rotate-[270deg] w-[320px]">
                  <div className="relative size-full">
                    <img 
                      alt="" 
                      className="block max-w-none size-full" 
                      height="48" 
                      src={imgAvoidTextInThisAreaWhite} 
                      width="320" 
                    />
                  </div>
                </div>
              </div>

              {/* Essentials Renew Product Label Content */}
              <div 
                ref={labelContentRef} // Attach ref to the VISIBLE label content
                className="absolute h-[320px] left-[136px] top-[122px] w-[224px]" 
                style={{ zIndex: 1 }}
              >
                <LabelContent showBackground={true} />
              </div>

              {/* Label Area Toggle Group - Blue overlay + Green centerline */}
              {showGuides && (
                <>
                  {/* Blue "Allow Text in this area" Overlay */}
                  <div 
                    className="absolute h-[320px] left-[136px] top-[122px] w-[224px] pointer-events-none select-none" 
                    style={{ zIndex: 10 }}
                    data-name="Allow text in this area (blue)"
                  >
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224 320">
                      <rect fill="#5BAFE2" fillOpacity="0.2" height="320" width="224" />
                    </svg>
                    <div aria-hidden="true" className="absolute border border-[#5BAFE2] border-dashed inset-0 pointer-events-none" />
                  </div>

                  {/* Green "Center text on this line" Guide - FRONT Panel Center */}
                  <div 
                    className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[204px] top-[122px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))] pointer-events-none select-none" 
                    style={{ "--transform-inner-width": "320", "--transform-inner-height": "0", zIndex: 10 } as React.CSSProperties}
                    data-name="Center text on this line (green)"
                  >
                    <div className="flex-none rotate-[90deg]">
                      <div className="h-0 relative w-[320px]">
                        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 4">
                            <line stroke="var(--stroke-0, #34C759)" strokeWidth="4" x2="320" y1="2" y2="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductLabelsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="max-w-[1800px] mx-auto px-8 py-12">
        {/* Page Header */}
        <div className="mb-12 space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
              <HOLYPackage size={24} color="#F9F6F0" />
            </div>
            <div>
              <h1 style={{ fontFamily: 'EB Garamond, serif', fontSize: '42px', color: '#1A1A1A', fontWeight: '500' }}>
                Product Labels
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6, marginTop: '4px' }}>
                SelfNamed-verified dieline templates for HØLY™ packaging
              </p>
            </div>
          </div>
        </div>

        {/* Product Folder */}
        <div className="space-y-6">
          {/* Folder Header */}
          <div className="flex items-center gap-2 px-4 py-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <FolderOpen size={18} color="#5E6458" />
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
              {retinolMoisturiser.name}
            </h2>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.5 }}>
              ({retinolMoisturiser.volume})
            </span>
          </div>

          {/* Dual Template Layout — Container + Box */}
          <div className="flex items-start gap-20">
            {/* Container Label */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-2">
                <Package size={16} color="#1A1A1A" opacity={0.7} />
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                  Container Label (editable)
                </h3>
              </div>
              <ContainerLabelTemplate />
            </div>

            {/* Box Label */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-2">
                <Box size={16} color="#1A1A1A" opacity={0.7} />
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                  Box Label (editable)
                </h3>
              </div>
              <BoxLabelTemplate />
            </div>
          </div>

          {/* Product #2: HØLY | Essentials™ — Renew Face Mist */}
          <div className="space-y-6 mt-12">
            {/* Folder Header */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
              <FolderOpen size={18} color="#9C887A" />
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
                {microbiomeFaceMist.name}
              </h2>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.5 }}>
                ({microbiomeFaceMist.volume})
              </span>
            </div>

            {/* Container Label Only - Left-aligned, same width as Retinol container */}
            <div className="flex items-start">
              <div className="flex-1 space-y-3" style={{ maxWidth: '550px' }}>
                <div className="flex items-center gap-2">
                  <Package size={16} color="#1A1A1A" opacity={0.7} />
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                    Container Label (editable)
                  </h3>
                </div>
                <FaceMistContainerLabelTemplate />
              </div>
            </div>
          </div>

          {/* System Rules */}
          <div className="p-5 rounded-lg space-y-4" style={{ backgroundColor: '#F9F6F0', border: '1px solid #D7D0C5' }}>
            <div className="flex items-center gap-2">
              <Layers size={16} color="#5E6458" />
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600' }}>
                System Rules for Future Products
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { 
                  title: 'Dual Template Structure',
                  desc: 'Each product = Container Label + Box Label in horizontal layout'
                },
                { 
                  title: 'Editable Areas',
                  desc: 'Blue overlay defines safe print zones for label content'
                },
                { 
                  title: 'Screenshot Reference',
                  desc: 'Screenshot defines dimensions and panel layout — do not duplicate'
                },
                { 
                  title: 'Guide Layers',
                  desc: 'Blue layers locked — toggle visibility with "Label Area" button'
                },
                { 
                  title: 'Export-Ready Scaling',
                  desc: 'Templates scaled for optimal side-by-side viewing'
                },
                { 
                  title: 'Container-Only Products',
                  desc: 'Some SKUs only need container labels - left-aligned, same width'
                },
              ].map((rule, i) => (
                <div key={i} className="flex gap-2 p-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D7D0C5' }}>
                  <ArrowRight size={14} color="#5E6458" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600' }}>
                      {rule.title}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#1A1A1A', opacity: 0.6, marginTop: '2px', lineHeight: '1.4' }}>
                      {rule.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}