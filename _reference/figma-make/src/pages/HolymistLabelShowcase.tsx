/**
 * ========================================
 * HØLY™ LABEL SHOWCASE — hølymist™ v3.0
 * ========================================
 * 
 * Demonstration page for the premium hølymist™ label design.
 * Shows the label at actual size with optional design guides and material effects.
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, EyeOff, Maximize2, Grid, Sparkles } from 'lucide-react';
import { HolymistLabelV3 } from '../components/labels/HolymistLabelV3';
import { SacredButton, DisplayHeading, SectionLabel, TM } from '../components/core-system';

export default function HolymistLabelShowcase() {
  const [showGuides, setShowGuides] = useState(true);
  const [enableSpotGloss, setEnableSpotGloss] = useState(true);
  const [enableEmboss, setEnableEmboss] = useState(true);
  const [enableTexture, setEnableTexture] = useState(true);
  const [scale, setScale] = useState(1.5);

  return (
    <div style={{ 
      backgroundColor: '#FAFAF8', 
      minHeight: '100vh',
      padding: '48px 24px'
    }}>
      {/* Page Header */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto 48px',
        textAlign: 'center'
      }}>
        <SectionLabel className="justify-center flex mb-4">
          Premium Label Design
        </SectionLabel>
        
        <DisplayHeading level={1}>
          hølymist<TM /> Label System v3.0
        </DisplayHeading>
        
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          color: '#1A1A1A',
          opacity: 0.6,
          marginTop: '16px',
          maxWidth: '600px',
          margin: '16px auto 0',
          lineHeight: '1.6'
        }}>
          Front-facing container label for 100mL SelfNamed bottle. Designed for premium 
          ritual care aesthetics with matte parchment finish, spot gloss, and blind emboss effects.
        </p>
      </div>

      {/* Control Panel */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto 32px',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(26, 26, 26, 0.06)'
        }}
      >
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Toggle Controls */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '12px',
            flex: '1 1 auto'
          }}>
            <SacredButton 
              variant={showGuides ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setShowGuides(!showGuides)}
            >
              <Grid size={16} style={{ marginRight: '6px' }} />
              Design Guides
            </SacredButton>
            
            <SacredButton 
              variant={enableSpotGloss ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setEnableSpotGloss(!enableSpotGloss)}
            >
              <Sparkles size={16} style={{ marginRight: '6px' }} />
              Spot Gloss
            </SacredButton>
            
            <SacredButton 
              variant={enableEmboss ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setEnableEmboss(!enableEmboss)}
            >
              <Eye size={16} style={{ marginRight: '6px' }} />
              Blind Emboss
            </SacredButton>
            
            <SacredButton 
              variant={enableTexture ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setEnableTexture(!enableTexture)}
            >
              <Maximize2 size={16} style={{ marginRight: '6px' }} />
              Parchment Texture
            </SacredButton>
          </div>

          {/* Scale Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#F9F6F0',
            padding: '8px 16px',
            borderRadius: '12px'
          }}>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              fontWeight: '500',
              color: '#1A1A1A',
              opacity: 0.6
            }}>
              Scale:
            </span>
            <input
              type="range"
              min="0.5"
              max="2.5"
              step="0.1"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              style={{
                width: '120px',
                accentColor: '#AAB5B2'
              }}
            />
            <span style={{
              fontFamily: 'monospace',
              fontSize: '13px',
              fontWeight: '600',
              color: '#1A1A1A',
              minWidth: '40px'
            }}>
              {scale.toFixed(1)}×
            </span>
          </div>
        </div>
      </motion.div>

      {/* Label Display Area */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '500px',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        padding: '64px 32px',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
        border: '1px solid rgba(26, 26, 26, 0.04)'
      }}>
        <motion.div
          key={`${showGuides}-${enableSpotGloss}-${enableEmboss}-${enableTexture}-${scale}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            display: 'inline-block',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}
        >
          <HolymistLabelV3
            showGuides={showGuides}
            scale={scale}
            enableSpotGloss={enableSpotGloss}
            enableEmboss={enableEmboss}
            enableTexture={enableTexture}
          />
        </motion.div>
      </div>

      {/* Design Specifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        style={{
          maxWidth: '1200px',
          margin: '48px auto 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}
      >
        {/* Specifications Card 1 */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid rgba(26, 26, 26, 0.06)'
        }}>
          <h3 style={{
            fontFamily: 'Garamond, serif',
            fontSize: '18px',
            fontWeight: '500',
            color: '#1A1A1A',
            marginBottom: '16px'
          }}>
            Typography
          </h3>
          <ul style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#1A1A1A',
            opacity: 0.7,
            lineHeight: '1.8',
            margin: 0,
            paddingLeft: '20px'
          }}>
            <li>Display: Garamond (Canela/Tiempos equivalent)</li>
            <li>Body: Inter (clean, modern sans)</li>
            <li>Product name: 48px with -0.015em tracking</li>
            <li>Descriptor: 8.5px caps with 0.14em tracking</li>
            <li>Trademark: 12% size, 0.5em top-aligned</li>
          </ul>
        </div>

        {/* Specifications Card 2 */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid rgba(26, 26, 26, 0.06)'
        }}>
          <h3 style={{
            fontFamily: 'Garamond, serif',
            fontSize: '18px',
            fontWeight: '500',
            color: '#1A1A1A',
            marginBottom: '16px'
          }}>
            Materials & Finish
          </h3>
          <ul style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#1A1A1A',
            opacity: 0.7,
            lineHeight: '1.8',
            margin: 0,
            paddingLeft: '20px'
          }}>
            <li>Substrate: Matte parchment paper</li>
            <li>Color: Warm ivory (#F9F6F0)</li>
            <li>Spot gloss on product name</li>
            <li>Blind emboss on HØLY<TM /> logo</li>
            <li>System marker: Ash green 3px bar</li>
          </ul>
        </div>

        {/* Specifications Card 3 */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid rgba(26, 26, 26, 0.06)'
        }}>
          <h3 style={{
            fontFamily: 'Garamond, serif',
            fontSize: '18px',
            fontWeight: '500',
            color: '#1A1A1A',
            marginBottom: '16px'
          }}>
            Container Details
          </h3>
          <ul style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#1A1A1A',
            opacity: 0.7,
            lineHeight: '1.8',
            margin: 0,
            paddingLeft: '20px'
          }}>
            <li>Container: 100mL SelfNamed bottle</li>
            <li>Label dimensions: 232px × 268px</li>
            <li>Safe margins: 10% minimum all sides</li>
            <li>Ritual system: Ritual Aftercare<TM /></li>
            <li>Print resolution: 300 DPI</li>
          </ul>
        </div>
      </motion.div>

      {/* Design Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        style={{
          maxWidth: '800px',
          margin: '48px auto 0',
          backgroundColor: '#F9F6F0',
          borderRadius: '16px',
          padding: '32px',
          border: '1px solid rgba(26, 26, 26, 0.06)',
          textAlign: 'center'
        }}
      >
        <h3 style={{
          fontFamily: 'Garamond, serif',
          fontSize: '22px',
          fontWeight: '500',
          color: '#1A1A1A',
          marginBottom: '16px'
        }}>
          Design Philosophy
        </h3>
        <p style={{
          fontFamily: 'Garamond, serif',
          fontSize: '16px',
          fontStyle: 'italic',
          color: '#1A1A1A',
          opacity: 0.8,
          lineHeight: '1.75',
          margin: 0
        }}>
          "A label should whisper luxury, not shout it. Sacred minimalism meets 
          premium ritual care — every element serves purpose, nothing extraneous. 
          Balanced, quiet, sacred, and elegant."
        </p>
        <div style={{
          marginTop: '24px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(26, 26, 26, 0.1)'
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: '#1A1A1A',
            opacity: 0.5,
            margin: 0,
            letterSpacing: '0.05em'
          }}>
            HØLY<TM /> RITUAL CARE™ — LABEL SYSTEM V3.0
          </p>
        </div>
      </motion.div>
    </div>
  );
}