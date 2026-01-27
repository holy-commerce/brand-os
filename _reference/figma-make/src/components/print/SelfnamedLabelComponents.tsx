/**
 * SELFNAMED LABEL COMPONENTS — HØLY™ OS
 * 
 * Reusable label components built to Selfnamed print specifications.
 * All components enforce:
 * - Minimum text size 4.5pt (4.8pt on dark backgrounds)
 * - 3mm safe zone from trim
 * - Maximum 300% ink coverage
 * - 600 ppi export readiness
 * 
 * Use these components within label templates to ensure compliance.
 */

import React from 'react';

// Label Safe Zone Guide Component
export interface LabelDimensionsProps {
  width: number; // in mm
  height: number; // in mm
  bleed?: number; // in mm, default 3mm
  safeZone?: number; // in mm, default 3mm
  shape?: 'rectangle' | 'circle' | 'oval';
}

export function LabelSafeZoneGuide({ 
  width, 
  height, 
  bleed = 3, 
  safeZone = 3,
  shape = 'rectangle'
}: LabelDimensionsProps) {
  // Convert mm to pixels at 96 DPI for screen display
  const mmToPx = (mm: number) => (mm * 96) / 25.4;
  
  const widthPx = mmToPx(width);
  const heightPx = mmToPx(height);
  const bleedPx = mmToPx(bleed);
  const safeZonePx = mmToPx(safeZone);

  return (
    <div 
      className="relative"
      style={{ 
        width: `${widthPx}px`, 
        height: `${heightPx}px`,
        margin: '0 auto'
      }}
    >
      {/* Bleed Zone (outer) */}
      <div 
        className="absolute inset-0"
        style={{ 
          border: '2px dashed #9C887A',
          borderRadius: shape === 'circle' ? '50%' : shape === 'oval' ? '50%' : '4px',
          opacity: 0.5
        }}
      />
      <div 
        className="absolute"
        style={{ 
          top: '-20px',
          left: '0',
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          color: '#9C887A',
          fontWeight: '600'
        }}
      >
        BLEED ZONE ({bleed}mm)
      </div>

      {/* Trim Line */}
      <div 
        className="absolute"
        style={{ 
          top: `${bleedPx}px`,
          left: `${bleedPx}px`,
          right: `${bleedPx}px`,
          bottom: `${bleedPx}px`,
          border: '2px solid #1A1A1A',
          borderRadius: shape === 'circle' ? '50%' : shape === 'oval' ? '50%' : '4px'
        }}
      />
      <div 
        className="absolute"
        style={{ 
          top: `${bleedPx - 20}px`,
          right: '0',
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          color: '#1A1A1A',
          fontWeight: '600'
        }}
      >
        TRIM LINE
      </div>

      {/* Safe Zone (inner) */}
      <div 
        className="absolute"
        style={{ 
          top: `${bleedPx + safeZonePx}px`,
          left: `${bleedPx + safeZonePx}px`,
          right: `${bleedPx + safeZonePx}px`,
          bottom: `${bleedPx + safeZonePx}px`,
          border: '2px dashed rgba(94, 100, 88, 0.6)',
          borderRadius: shape === 'circle' ? '50%' : shape === 'oval' ? '50%' : '4px'
        }}
      />
      <div 
        className="absolute"
        style={{ 
          bottom: `${bleedPx + safeZonePx - 20}px`,
          left: `${bleedPx + safeZonePx}px`,
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          color: '#5E6458',
          fontWeight: '600'
        }}
      >
        SAFE ZONE ({safeZone}mm)
      </div>
    </div>
  );
}

// Typography Size Validator
export interface TypographyValidatorProps {
  size: number; // in points
  onDarkBackground?: boolean;
  textContent: string;
}

export function TypographySizeValidator({ 
  size, 
  onDarkBackground = false, 
  textContent 
}: TypographyValidatorProps) {
  const minimumSize = onDarkBackground ? 4.8 : 4.5;
  const isValid = size >= minimumSize;
  const status = isValid ? 'PASS' : 'FAIL';
  const statusColor = isValid ? '#4A7C59' : '#C94A4A';

  return (
    <div 
      className="p-4 rounded-lg"
      style={{ 
        backgroundColor: isValid ? 'rgba(74, 124, 89, 0.1)' : 'rgba(201, 74, 74, 0.1)',
        border: `2px solid ${statusColor}`
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div 
            className="px-2 py-1 rounded"
            style={{ 
              backgroundColor: statusColor,
              color: '#F9F6F0',
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: '600'
            }}
          >
            {status}
          </div>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600' }}>
            Typography Size Check
          </span>
        </div>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
          {size}pt
        </span>
      </div>
      <div className="space-y-2">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.8 }}>
          <strong>Minimum required:</strong> {minimumSize}pt {onDarkBackground && '(dark background)'}
        </p>
        <div 
          className="p-3 rounded"
          style={{ 
            backgroundColor: onDarkBackground ? '#1A1A1A' : '#F9F6F0',
            fontFamily: 'Inter, sans-serif',
            fontSize: `${size}pt`,
            color: onDarkBackground ? '#F9F6F0' : '#1A1A1A'
          }}
        >
          {textContent}
        </div>
        {!isValid && (
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: statusColor, fontWeight: '500', marginTop: '8px' }}>
            ⚠️ Text will not print legibly at this size. Increase to minimum {minimumSize}pt.
          </p>
        )}
      </div>
    </div>
  );
}

// Ink Coverage Calculator Component
export interface InkCoverageProps {
  cyan: number; // 0-100
  magenta: number; // 0-100
  yellow: number; // 0-100
  black: number; // 0-100
  colorName?: string;
}

export function InkCoverageCalculator({ 
  cyan, 
  magenta, 
  yellow, 
  black,
  colorName = 'Color' 
}: InkCoverageProps) {
  const total = cyan + magenta + yellow + black;
  const maxAllowed = 300;
  const percentage = (total / maxAllowed) * 100;
  const isValid = total <= maxAllowed;
  const status = isValid ? 'SAFE' : 'EXCEEDED';
  const statusColor = isValid ? '#4A7C59' : '#C94A4A';

  return (
    <div 
      className="p-4 rounded-lg"
      style={{ 
        backgroundColor: isValid ? 'rgba(74, 124, 89, 0.1)' : 'rgba(201, 74, 74, 0.1)',
        border: `2px solid ${statusColor}`
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div 
            className="px-2 py-1 rounded"
            style={{ 
              backgroundColor: statusColor,
              color: '#F9F6F0',
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: '600'
            }}
          >
            {status}
          </div>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600' }}>
            {colorName}
          </span>
        </div>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '700' }}>
          {total}%
        </span>
      </div>

      {/* CMYK Breakdown */}
      <div className="space-y-2 mb-3">
        {[
          { label: 'Cyan', value: cyan, color: '#00B4D8' },
          { label: 'Magenta', value: magenta, color: '#D81159' },
          { label: 'Yellow', value: yellow, color: '#FFEA00' },
          { label: 'Black', value: black, color: '#1A1A1A' }
        ].map((channel) => (
          <div key={channel.label} className="flex items-center gap-3">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: channel.color, border: '1px solid rgba(0,0,0,0.2)' }}
            />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.7, width: '60px' }}>
              {channel.label}
            </span>
            <div 
              className="flex-1 h-2 rounded-full"
              style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
            >
              <div 
                className="h-full rounded-full"
                style={{ 
                  width: `${channel.value}%`,
                  backgroundColor: channel.color
                }}
              />
            </div>
            <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', width: '40px', textAlign: 'right' }}>
              {channel.value}%
            </span>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.7 }}>
            Total Coverage
          </span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.7 }}>
            {maxAllowed}% max
          </span>
        </div>
        <div 
          className="h-3 rounded-full"
          style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
        >
          <div 
            className="h-full rounded-full transition-all"
            style={{ 
              width: `${Math.min(percentage, 100)}%`,
              backgroundColor: statusColor
            }}
          />
        </div>
        {!isValid && (
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: statusColor, fontWeight: '500', marginTop: '8px' }}>
            ⚠️ Ink coverage exceeds 300%. This will cause smearing and drying issues. Reduce ink density.
          </p>
        )}
      </div>
    </div>
  );
}

// Pre-Flight Checklist Component
export interface PreFlightItem {
  label: string;
  checked: boolean;
  critical: boolean;
}

export interface PreFlightChecklistProps {
  items: PreFlightItem[];
  onToggle?: (index: number) => void;
}

export function PreFlightChecklist({ items, onToggle }: PreFlightChecklistProps) {
  const criticalCount = items.filter(item => item.critical).length;
  const criticalPassed = items.filter(item => item.critical && item.checked).length;
  const allCriticalPassed = criticalCount === criticalPassed;
  const totalPassed = items.filter(item => item.checked).length;
  const allPassed = items.length === totalPassed;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: allPassed ? '#4A7C59' : '#9C887A' }}>
        <div>
          <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#F9F6F0', marginBottom: '4px' }}>
            Selfnamed Pre-Flight Checklist
          </h4>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', opacity: 0.9 }}>
            {totalPassed} of {items.length} checks passed · {criticalPassed}/{criticalCount} critical
          </p>
        </div>
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
        >
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', color: '#F9F6F0', fontWeight: '700' }}>
            {Math.round((totalPassed / items.length) * 100)}%
          </span>
        </div>
      </div>

      {/* Checklist Items */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-4 rounded-lg cursor-pointer hover:bg-opacity-80 transition-colors"
            style={{ 
              backgroundColor: item.checked ? 'rgba(74, 124, 89, 0.1)' : '#F9F6F0',
              border: `2px solid ${item.critical ? '#9C887A' : '#DADADA'}`
            }}
            onClick={() => onToggle?.(index)}
          >
            <div 
              className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
              style={{ 
                backgroundColor: item.checked ? '#4A7C59' : '#FFFFFF',
                border: `2px solid ${item.checked ? '#4A7C59' : '#DADADA'}`
              }}
            >
              {item.checked && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="#F9F6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  {item.label}
                </p>
                {item.critical && (
                  <div 
                    className="px-2 py-0.5 rounded text-xs"
                    style={{ 
                      backgroundColor: '#9C887A',
                      color: '#F9F6F0',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      fontWeight: '600'
                    }}
                  >
                    CRITICAL
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Status Message */}
      {!allCriticalPassed && (
        <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(201, 74, 74, 0.1)', border: '2px solid #C94A4A' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#C94A4A', fontWeight: '600' }}>
            ⚠️ All critical checks must pass before uploading to Selfnamed.
          </p>
        </div>
      )}
      
      {allCriticalPassed && !allPassed && (
        <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(170, 181, 178, 0.1)', border: '2px solid #AAB5B2' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#5E6458', fontWeight: '600' }}>
            ✅ Critical checks passed. Complete recommended checks for best results.
          </p>
        </div>
      )}

      {allPassed && (
        <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', border: '2px solid #4A7C59' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#4A7C59', fontWeight: '600' }}>
            ✅ All checks passed! Ready to export and upload to Selfnamed.
          </p>
        </div>
      )}
    </div>
  );
}

// Label Template Size Reference
export const LABEL_TEMPLATES = {
  bottle_3x4: {
    name: 'Bottle Label 3×4"',
    width: 76.2, // mm
    height: 101.6, // mm
    bleed: 3,
    safeZone: 3,
    usage: 'Standard glass bottles (hølymist™, hølyoil™, hølytouch™)'
  },
  pump_3x5: {
    name: 'Pump Bottle 3×5"',
    width: 76.2, // mm
    height: 127, // mm
    bleed: 3,
    safeZone: 3,
    usage: 'Pump dispensers (hølycleanse™)'
  },
  tube_wrap_25x3: {
    name: 'Tube Wrap 2.5×3"',
    width: 63.5, // mm
    height: 76.2, // mm
    bleed: 3,
    safeZone: 3,
    usage: 'Squeeze tubes (hølyguard™ SPF)'
  },
  jar_2x25: {
    name: 'Jar Label 2×2.5"',
    width: 50.8, // mm
    height: 63.5, // mm
    bleed: 3,
    safeZone: 3,
    usage: 'Small jars (hølyreveal™)'
  },
  jar_top_3: {
    name: 'Pillow Jar Top 3" dia',
    width: 76.2, // mm (diameter)
    height: 76.2, // mm (diameter)
    bleed: 3,
    safeZone: 3,
    usage: 'Large jar tops',
    shape: 'circle' as const
  },
  jar_top_25: {
    name: 'Pillow Jar Top 2.5" dia',
    width: 63.5, // mm (diameter)
    height: 63.5, // mm (diameter)
    bleed: 3,
    safeZone: 3,
    usage: 'Medium jar tops',
    shape: 'circle' as const
  }
} as const;

// Export format validator
export function ExportFormatGuide() {
  return (
    <div className="p-6 rounded-xl" style={{ backgroundColor: '#1A1A1A', border: '2px solid #9C887A' }}>
      <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#F9F6F0', marginBottom: '16px' }}>
        Export Format Requirements
      </h4>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9C887A', fontWeight: '600', marginBottom: '8px' }}>
            ✅ REQUIRED
          </p>
          <ul className="space-y-2">
            {[
              'PNG format',
              'CMYK color mode',
              '600 ppi resolution',
              'Fonts converted to outlines',
              'At final trim size + bleed'
            ].map((req, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#9C887A', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', opacity: 0.9 }}>
                  {req}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#D9C4BB', fontWeight: '600', marginBottom: '8px' }}>
            ⚠️ COMMON MISTAKES
          </p>
          <ul className="space-y-2">
            {[
              'Using RGB instead of CMYK',
              'Resolution below 600 ppi',
              'Not converting fonts to outlines',
              'Missing bleed zone',
              'Content in unsafe zone'
            ].map((mistake, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#D9C4BB', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', opacity: 0.7 }}>
                  {mistake}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
