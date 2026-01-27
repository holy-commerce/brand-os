import { useState, useEffect } from 'react';
import { ChevronDown, ShoppingBag, Heart, ArrowRight, X, Check, AlertCircle, Clock, Package, TrendingUp, Search } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SacredAuraHover, RitualPulseClick, CTARitualInteraction } from '../components/ui-blocks/CTAInteractions';
import { HOLYWand, HOLYTimer, HOLYCircle, HOLYPackage, HOLYSparkle, HOLYLink, HOLYCart, HOLYWave } from '../components/icons/HOLYIcons';
import { TM } from '../components/core-system';

export default function MotionStatesPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  
  // Logo Expansion cycling state
  const logoDescriptors = ['Ritual Care', 'Ritual Wear', 'Levers', 'Sanctuary', 'Studio', 'Vitality'];
  const [currentDescriptorIndex, setCurrentDescriptorIndex] = useState(0);

  // Cycle through descriptors every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescriptorIndex((prev) => (prev + 1) % logoDescriptors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToRitual = () => {
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="max-w-7xl mx-auto p-8 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYWand size={32} color="#1A1A1A" />
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
                Motion / States
              </h1>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: '140%', opacity: 0.7 }}>
              All motion behaviors, microinteractions, and state transitions. Hover, focus, pressed states, and sacred animation language.
            </p>
            <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(201, 163, 109, 0.1)', border: '1px solid #C9A36D' }}>
              <p className="flex items-start gap-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '150%' }}>
                <HOLYTimer size={16} color="#1A1A1A" className="mt-0.5 flex-shrink-0" />
                <span><strong>Technical Specs:</strong> Max duration 300ms (UI), 500ms (symbolic) · Ease In Out Soft (default) · Ease Out Fast (feedback)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Frame: Buttons (States) */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <HOLYCircle size={28} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%' }}>
                Buttons (States)
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Primary, Secondary, Ghost, and Text buttons with hover, pressed, and disabled states.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Primary Button States */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <div className="space-y-6">
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Default
                    </p>
                    <button
                      style={{
                        backgroundColor: '#1A1A1A',
                        color: '#F9F6F0',
                        padding: '16px 32px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'Inter, sans-serif',
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#2A2A2A';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.12)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#1A1A1A';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      onMouseDown={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
                      }}
                      onMouseUp={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px) scale(1)';
                      }}
                    >
                      Primary Button
                    </button>
                  </div>

                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Disabled
                    </p>
                    <button
                      disabled
                      style={{
                        backgroundColor: '#DADADA',
                        color: '#1A1A1A',
                        opacity: 0.4,
                        padding: '16px 32px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'not-allowed',
                        fontFamily: 'Inter, sans-serif',
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      Primary Button
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Button / Primary
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Hover: lift 2px + shadow · Press: scale 0.98 · Duration: 300ms
                </p>
              </div>
            </div>

            {/* Secondary Button with Icon Shift */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <div className="space-y-6">
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Default
                    </p>
                    <button
                      className="group"
                      style={{
                        backgroundColor: 'transparent',
                        color: '#1A1A1A',
                        padding: '16px 32px',
                        borderRadius: '8px',
                        border: '2px solid #1A1A1A',
                        cursor: 'pointer',
                        fontFamily: 'Inter, sans-serif',
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1A1A1A';
                        e.currentTarget.style.color = '#F9F6F0';
                        const icon = e.currentTarget.querySelector('.icon-shift');
                        if (icon) (icon as HTMLElement).style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#1A1A1A';
                        const icon = e.currentTarget.querySelector('.icon-shift');
                        if (icon) (icon as HTMLElement).style.transform = 'translateX(0)';
                      }}
                    >
                      Secondary Button
                      <ArrowRight className="icon-shift" size={18} style={{ transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)' }} />
                    </button>
                  </div>

                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Ghost Variant
                    </p>
                    <button
                      style={{
                        backgroundColor: 'transparent',
                        color: '#1A1A1A',
                        padding: '16px 32px',
                        borderRadius: '8px',
                        border: '2px solid transparent',
                        cursor: 'pointer',
                        fontFamily: 'Inter, sans-serif',
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
                        e.currentTarget.style.borderColor = '#DADADA';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.borderColor = 'transparent';
                      }}
                    >
                      Ghost Button
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Button / Secondary + Ghost
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Hover: background fill + icon shift 4px · Duration: 300ms
                </p>
              </div>
            </div>

            {/* Text Button with Underline */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <div className="space-y-6">
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Text Link
                    </p>
                    <button
                      style={{
                        backgroundColor: 'transparent',
                        color: '#1A1A1A',
                        padding: '8px 0',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'Inter, sans-serif',
                        position: 'relative',
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#C9A36D';
                        const underline = e.currentTarget.querySelector('.underline');
                        const baseUnderline = e.currentTarget.querySelector('.base-underline');
                        if (underline) {
                          (underline as HTMLElement).style.width = '100%';
                          (underline as HTMLElement).style.height = '2px';
                        }
                        if (baseUnderline) (baseUnderline as HTMLElement).style.opacity = '0';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#1A1A1A';
                        const underline = e.currentTarget.querySelector('.underline');
                        const baseUnderline = e.currentTarget.querySelector('.base-underline');
                        if (underline) {
                          (underline as HTMLElement).style.width = '0%';
                          (underline as HTMLElement).style.height = '1px';
                        }
                        if (baseUnderline) (baseUnderline as HTMLElement).style.opacity = '1';
                      }}
                    >
                      Text Button Link
                      <span
                        className="base-underline"
                        style={{
                          position: 'absolute',
                          bottom: '4px',
                          left: 0,
                          width: '100%',
                          height: '1px',
                          backgroundColor: '#1A1A1A',
                          opacity: 0.3,
                          transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                      <span
                        className="underline"
                        style={{
                          position: 'absolute',
                          bottom: '4px',
                          left: 0,
                          width: '0%',
                          height: '1px',
                          backgroundColor: '#C9A36D',
                          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Button / Text Link
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Default: subtle underline · Hover: Burnished Ochre thickens · ADA compliant
                </p>
              </div>
            </div>

            {/* Focus Ring */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <div className="space-y-6">
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.5, marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      ADA Focus State
                    </p>
                    <button
                      style={{
                        backgroundColor: '#1A1A1A',
                        color: '#F9F6F0',
                        padding: '16px 32px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'Inter, sans-serif',
                        transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                        outline: 'none',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(224, 185, 88, 0.4)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      Focus Me (Tab)
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Button / Focus Ring
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Focus: Burnished Ochre ring 4px · ADA compliant · Duration: 200ms
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Frame: 🖱️ Navigation Transitions */}
        <div className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              🖱️ Navigation Transitions
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Header behaviors, navigation reveals, and link micro-movements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Header Shrink */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <div 
                  style={{
                    backgroundColor: '#1A1A1A',
                    color: '#F9F6F0',
                    padding: navScrolled ? '16px 24px' : '24px 24px',
                    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <h3 style={{ 
                    fontFamily: 'Garamond, serif', 
                    fontSize: navScrolled ? '20px' : '28px',
                    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                    margin: 0
                  }}>
                    HØLY
                  </h3>
                  <div style={{ display: 'flex', gap: '24px' }}>
                    <a href="#" style={{ color: '#F9F6F0', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>Shop</a>
                    <a href="#" style={{ color: '#F9F6F0', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>Rituals</a>
                  </div>
                </div>
                <div className="p-8">
                  <button
                    onClick={() => setNavScrolled(!navScrolled)}
                    style={{
                      backgroundColor: '#1A1A1A',
                      color: '#F9F6F0',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                    }}
                  >
                    {navScrolled ? 'Reset Header' : 'Simulate Scroll'}
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Navigation / Header Shrink
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  On scroll: padding reduce + logo scale down · Duration: 300ms
                </p>
              </div>
            </div>

            {/* Link Hover Underline */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <nav style={{ display: 'flex', gap: '32px' }}>
                  {['Shop', 'Rituals', 'About', 'Contact'].map((link) => (
                    <a
                      key={link}
                      href="#"
                      style={{
                        color: '#1A1A1A',
                        textDecoration: 'none',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        position: 'relative',
                        transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                      onMouseEnter={(e) => {
                        const underline = e.currentTarget.querySelector('.nav-underline');
                        if (underline) {
                          (underline as HTMLElement).style.width = '100%';
                          (underline as HTMLElement).style.opacity = '1';
                        }
                      }}
                      onMouseLeave={(e) => {
                        const underline = e.currentTarget.querySelector('.nav-underline');
                        if (underline) {
                          (underline as HTMLElement).style.width = '0%';
                          (underline as HTMLElement).style.opacity = '0';
                        }
                      }}
                    >
                      {link}
                      <span
                        className="nav-underline"
                        style={{
                          position: 'absolute',
                          bottom: '-4px',
                          left: '0',
                          width: '0%',
                          height: '1px',
                          backgroundColor: '#C9A36D',
                          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                          opacity: 0,
                        }}
                      />
                    </a>
                  ))}
                </nav>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Navigation / Link Underline
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Hover: underline expand from left · Burnished Ochre · Duration: 300ms
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Frame: Product Card Hovers */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <HOLYPackage size={28} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%' }}>
                Product Card Hovers
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Image zoom, CTA reveal, badge entrance on product interactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Hover Zoom Card */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl overflow-hidden"
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '2px solid #DADADA',
                  cursor: 'pointer',
                  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)';
                  const img = e.currentTarget.querySelector('.product-image');
                  const cta = e.currentTarget.querySelector('.product-cta');
                  if (img) (img as HTMLElement).style.transform = 'scale(1.05)';
                  if (cta) {
                    (cta as HTMLElement).style.opacity = '1';
                    (cta as HTMLElement).style.transform = 'translateX(-50%) translateY(0)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  const img = e.currentTarget.querySelector('.product-image');
                  const cta = e.currentTarget.querySelector('.product-cta');
                  if (img) (img as HTMLElement).style.transform = 'scale(1)';
                  if (cta) {
                    (cta as HTMLElement).style.opacity = '0';
                    (cta as HTMLElement).style.transform = 'translateX(-50%) translateY(8px)';
                  }
                }}
              >
                <div style={{ overflow: 'hidden', position: 'relative', height: '280px', backgroundColor: '#EBD7D1' }}>
                  <div 
                    className="product-image"
                    style={{ 
                      width: '100%', 
                      height: '100%',
                      transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ 
                      fontSize: '48px', 
                      fontFamily: 'Garamond, serif', 
                      color: '#1A1A1A',
                      opacity: 0.3
                    }}>
                      ø
                    </div>
                  </div>
                  <div
                    className="product-cta"
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '50%',
                      transform: 'translateX(-50%) translateY(8px)',
                      backgroundColor: '#1A1A1A',
                      color: '#F9F6F0',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      opacity: 0,
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Quick View
                  </div>
                </div>
                <div className="p-6">
                  <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', margin: '0 0 8px 0' }}>
                    Ritual Touch Oil
                  </h4>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6, margin: 0 }}>
                    $48.00
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Product Card / Hover Zoom
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Hover: image scale 1.05 + CTA fade up · Duration: 500ms (image), 300ms (CTA)
                </p>
              </div>
            </div>

            {/* Badge Entrance */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl overflow-hidden"
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '2px solid #DADADA',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  const badge = e.currentTarget.querySelector('.product-badge');
                  if (badge) {
                    (badge as HTMLElement).style.opacity = '1';
                    (badge as HTMLElement).style.transform = 'scale(1)';
                  }
                }}
                onMouseLeave={(e) => {
                  const badge = e.currentTarget.querySelector('.product-badge');
                  if (badge) {
                    (badge as HTMLElement).style.opacity = '0';
                    (badge as HTMLElement).style.transform = 'scale(0.9)';
                  }
                }}
              >
                <div style={{ overflow: 'hidden', position: 'relative', height: '280px', backgroundColor: '#B3C4C1' }}>
                  <div 
                    className="product-badge"
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      backgroundColor: '#C9A36D',
                      color: '#1A1A1A',
                      padding: '8px 16px',
                      borderRadius: '24px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      fontWeight: '500',
                      opacity: 0,
                      transform: 'scale(0.9)',
                      transition: 'all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    New Ritual
                  </div>
                  <div style={{ 
                    width: '100%', 
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{ 
                      fontSize: '48px', 
                      fontFamily: 'Garamond, serif', 
                      color: '#1A1A1A',
                      opacity: 0.3
                    }}>
                      ø
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', margin: '0 0 8px 0' }}>
                    Ritual Renewal Serum
                  </h4>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6, margin: 0 }}>
                    $68.00
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Product Card / Badge Entrance
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Hover: badge fade + bounce scale · Ease out back · Duration: 300ms
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Frame: Cart & Checkout */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <HOLYCart size={28} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Cart & Checkout
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Slide-in cart, add to ritual confirmation, loading states.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Slide-in Cart */}
            <div className="space-y-4">
              <div 
                className="p-8 rounded-2xl relative overflow-hidden"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', minHeight: '320px' }}
              >
                <button
                  onClick={() => setCartOpen(!cartOpen)}
                  style={{
                    backgroundColor: '#1A1A1A',
                    color: '#F9F6F0',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <ShoppingBag size={16} />
                  {cartOpen ? 'Close Cart' : 'Open Cart'}
                </button>

                {/* Cart Panel */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: cartOpen ? 0 : '-100%',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#F9F6F0',
                    borderLeft: '2px solid #DADADA',
                    padding: '24px',
                    transition: 'right 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 10,
                    overflowY: 'auto',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', margin: 0 }}>
                      Your Ritual
                    </h3>
                    <button
                      onClick={() => setCartOpen(false)}
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px',
                        color: '#1A1A1A',
                      }}
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Shipping Time Urgency Banner */}
                  <div 
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: '#C9A36D',
                      border: '1px solid #B18B6B',
                      marginBottom: '20px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <Package size={16} style={{ color: '#1A1A1A' }} />
                      <p style={{ fontFamily: 'Garamond, serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', margin: 0 }}>
                        Average Ship Time: 2-3 Days
                      </p>
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.85, margin: 0, lineHeight: '150%' }}>
                      Order within the next 4 hours for same-day processing
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Cart Item with Product Image */}
                    <div 
                      style={{
                        display: 'flex',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: '12px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #DADADA'
                      }}
                    >
                      {/* Product Image */}
                      <div style={{ width: '64px', height: '64px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#F9F6F0' }}>
                        <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMG9pbCUyMGJvdHRsZXxlbnwxfHx8fDE3MzE0MDAwMDB8MA&ixlib=rb-4.1.0&q=80&w=400"
                          alt="Ritual Touch Oil"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        {/* Stock Badge */}
                        <div 
                          style={{
                            position: 'absolute',
                            bottom: '4px',
                            left: '4px',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(26,26,26,0.9)'
                          }}
                        >
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', color: '#C9A36D', fontWeight: '600', margin: 0 }}>
                            LOW
                          </p>
                        </div>
                      </div>

                      {/* Product Details */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontFamily: 'Garamond, serif', fontSize: '14px', color: '#1A1A1A', margin: '0 0 2px 0' }}>
                          Ritual Touch Oil
                        </p>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.6, margin: '0 0 8px 0' }}>
                          50ml
                        </p>

                        {/* Shipping Time */}
                        <div 
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            backgroundColor: '#F9F6F0',
                            marginBottom: '8px'
                          }}
                        >
                          <Clock size={12} style={{ color: '#1A1A1A', opacity: 0.6 }} />
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#1A1A1A', opacity: 0.7, fontWeight: '500', margin: 0 }}>
                            Ships in 2-3 days
                          </p>
                        </div>

                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '500', margin: 0 }}>
                          $48.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Cart / Slide In
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Slide from right · Ease in out · Duration: 400ms
                </p>
              </div>
            </div>

            {/* Add to Ritual Button */}
            <div className="space-y-4">
              <div 
                className="p-8 rounded-2xl"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <div className="space-y-6">
                  <button
                    onClick={handleAddToRitual}
                    disabled={buttonLoading}
                    style={{
                      backgroundColor: buttonLoading ? '#C9A36D' : '#1A1A1A',
                      color: '#F9F6F0',
                      padding: '16px 32px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: buttonLoading ? 'not-allowed' : 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      minWidth: '200px',
                    }}
                  >
                    {buttonLoading ? (
                      <>
                        <div
                          style={{
                            width: '16px',
                            height: '16px',
                            border: '2px solid #F9F6F0',
                            borderTopColor: 'transparent',
                            borderRadius: '50%',
                            animation: 'spin 600ms linear infinite',
                          }}
                        />
                        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                        Adding...
                      </>
                    ) : (
                      'Add to Ritual'
                    )}
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Cart / Loading Button
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Click: spinner + color change · Loop: 600ms · Shows toast on complete
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Frame: 📣 Feedback + Status */}
        <div className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              📣 Feedback + Status
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Toasts, modals, validation states, and banner notifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Toast Notification */}
            <div className="space-y-4">
              <div 
                className="p-8 rounded-2xl relative"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', minHeight: '200px' }}
              >
                {toastVisible && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      backgroundColor: '#1A1A1A',
                      color: '#F9F6F0',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                      animation: 'slideInRight 300ms cubic-bezier(0.4, 0, 0.2, 1), fadeOut 300ms cubic-bezier(0.4, 0, 0.2, 1) 2.7s forwards',
                    }}
                  >
                    <style>{`
                      @keyframes slideInRight {
                        from {
                          transform: translateX(100%);
                          opacity: 0;
                        }
                        to {
                          transform: translateX(0);
                          opacity: 1;
                        }
                      }
                      @keyframes fadeOut {
                        to {
                          opacity: 0;
                          transform: translateX(20px);
                        }
                      }
                    `}</style>
                    <Check size={18} style={{ color: '#C9A36D' }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px' }}>
                      Added to your ritual
                    </span>
                  </div>
                )}
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                  Toast appears after clicking "Add to Ritual" button above
                </p>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Feedback / Toast
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Slide in from right + fade out · Duration: 300ms in, 3s visible
                </p>
              </div>
            </div>

            {/* Modal Fade In */}
            <div className="space-y-4">
              <div 
                className="p-8 rounded-2xl relative overflow-hidden"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', minHeight: '200px' }}
              >
                <button
                  onClick={() => setModalOpen(!modalOpen)}
                  style={{
                    backgroundColor: '#1A1A1A',
                    color: '#F9F6F0',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                  }}
                >
                  {modalOpen ? 'Close Modal' : 'Open Modal'}
                </button>

                {modalOpen && (
                  <>
                    {/* Overlay */}
                    <div
                      onClick={() => setModalOpen(false)}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        animation: 'fadeInOverlay 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 10,
                      }}
                    />
                    <style>{`
                      @keyframes fadeInOverlay {
                        from { opacity: 0; }
                        to { opacity: 1; }
                      }
                      @keyframes scaleIn {
                        from {
                          opacity: 0;
                          transform: translate(-50%, -50%) scale(0.9);
                        }
                        to {
                          opacity: 1;
                          transform: translate(-50%, -50%) scale(1);
                        }
                      }
                    `}</style>
                    {/* Modal */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#F9F6F0',
                        padding: '32px',
                        borderRadius: '16px',
                        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                        animation: 'scaleIn 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                        zIndex: 11,
                        minWidth: '280px',
                      }}
                    >
                      <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', margin: '0 0 12px 0' }}>
                        Modal Title
                      </h4>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, margin: '0 0 20px 0' }}>
                        This modal fades in with scale animation
                      </p>
                      <button
                        onClick={() => setModalOpen(false)}
                        style={{
                          backgroundColor: '#1A1A1A',
                          color: '#F9F6F0',
                          padding: '10px 20px',
                          borderRadius: '8px',
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '13px',
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Feedback / Modal
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Overlay fade + modal scale with bounce · Duration: 300ms
                </p>
              </div>
            </div>

            {/* Inline Validation */}
            <div className="space-y-4">
              <div 
                className="p-8 rounded-2xl"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <div className="space-y-4">
                  <div>
                    <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', display: 'block', marginBottom: '8px' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '2px solid #DADADA',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                        outline: 'none',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#C9A36D';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201, 163, 109, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#DADADA';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(201, 163, 109, 0.1)',
                      border: '1px solid #C9A36D',
                      animation: 'pulseIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <style>{`
                      @keyframes pulseIn {
                        0% {
                          opacity: 0;
                          transform: scale(0.95);
                        }
                        50% {
                          transform: scale(1.02);
                        }
                        100% {
                          opacity: 1;
                          transform: scale(1);
                        }
                      }
                    `}</style>
                    <Check size={16} style={{ color: '#C9A36D' }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                      Valid email format
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Feedback / Inline Validation
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Focus: border color + shadow · Success: pulse scale · Duration: 200ms
                </p>
              </div>
            </div>

            {/* Banner Slide In */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <div
                  style={{
                    backgroundColor: '#C9A36D',
                    color: '#1A1A1A',
                    padding: '16px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    animation: 'slideInTop 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <style>{`
                    @keyframes slideInTop {
                      from {
                        transform: translateY(-100%);
                        opacity: 0;
                      }
                      to {
                        transform: translateY(0);
                        opacity: 1;
                      }
                    }
                  `}</style>
                  <AlertCircle size={18} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '500' }}>
                    Free shipping on orders over $75
                  </span>
                </div>
                <div className="p-8">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6, margin: 0 }}>
                    Banner slides in from top
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Feedback / Banner
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Slide from top · Ease in out · Duration: 400ms
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Frame: Sacred Motion Language */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <HOLYSparkle size={28} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%' }}>
                Sacred Motion Language
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Branded, symbolic animations unique to HØLY — the ø icon, glyphs, and logo transformations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* ø Icon Pulse */}
            <div className="space-y-4">
              <div 
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#1A1A1A', border: '2px solid #1A1A1A' }}
              >
                <div
                  style={{
                    fontSize: '72px',
                    fontFamily: 'Garamond, serif',
                    color: '#F9F6F0',
                    animation: 'pulse 2000ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  }}
                >
                  <style>{`
                    @keyframes pulse {
                      0%, 100% {
                        opacity: 1;
                        transform: scale(1);
                      }
                      50% {
                        opacity: 0.7;
                        transform: scale(1.05);
                      }
                    }
                  `}</style>
                  ø
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Icon / ø Pulse
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Continuous pulse + scale · Breathing effect · Duration: 2000ms loop
                </p>
              </div>
            </div>

            {/* ø Rotate */}
            <div className="space-y-4">
              <div 
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#EBD7D1', border: '2px solid #DADADA' }}
              >
                <div
                  style={{
                    fontSize: '72px',
                    fontFamily: 'Garamond, serif',
                    color: '#1A1A1A',
                    animation: 'rotate 4000ms linear infinite',
                  }}
                >
                  <style>{`
                    @keyframes rotate {
                      from {
                        transform: rotate(0deg);
                      }
                      to {
                        transform: rotate(360deg);
                      }
                    }
                  `}</style>
                  ø
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Icon / ø Rotate
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Continuous rotation · Loading state · Duration: 4000ms loop
                </p>
              </div>
            </div>

            {/* Circular Icon with Glow */}
            <div className="space-y-4">
              <div 
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <div
                  style={{
                    width: '104px',
                    height: '104px',
                    borderRadius: '50%',
                    backgroundColor: '#1A1A1A',
                    border: '3px solid #C9A36D',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'glowPulse 2000ms ease-in-out infinite',
                  }}
                >
                  <style>{`
                    @keyframes glowPulse {
                      0%, 100% {
                        box-shadow: 0 0 30px rgba(224, 185, 88, 0.5), 0 0 60px rgba(224, 185, 88, 0.3);
                      }
                      50% {
                        box-shadow: 0 0 50px rgba(224, 185, 88, 0.8), 0 0 100px rgba(224, 185, 88, 0.5);
                      }
                    }
                  `}</style>
                  <div
                    style={{
                      fontSize: '52px',
                      fontFamily: 'Garamond, serif',
                      color: '#F9F6F0',
                      lineHeight: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: 'translateY(-5px)',
                    }}
                  >
                    ø
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Icon / Circle Glow
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Pulsing glow effect · Burnished Ochre · Duration: 2000ms loop
                </p>
              </div>
            </div>

            {/* Logo Morph */}
            <div className="space-y-4">
              <div 
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Garamond, serif',
                      fontSize: '36px',
                      color: '#1A1A1A',
                      lineHeight: '100%',
                      letterSpacing: '0.01em',
                      margin: 0,
                    }}
                  >
                    <style>{`
                      @keyframes descriptorCycle {
                        0% {
                          opacity: 0;
                          transform: translateX(12px);
                        }
                        15% {
                          opacity: 0.65;
                          transform: translateX(0);
                        }
                        85% {
                          opacity: 0.65;
                          transform: translateX(0);
                        }
                        100% {
                          opacity: 0;
                          transform: translateX(-8px);
                        }
                      }
                    `}</style>
                    HØLY
                  </h3>
                  <div style={{ width: '1px', height: '38px', backgroundColor: '#DADADA' }}></div>
                  <p
                    key={currentDescriptorIndex}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      color: '#1A1A1A',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: '500',
                      margin: 0,
                      paddingTop: '2px',
                      animation: 'descriptorCycle 3000ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
                    }}
                  >
                    {logoDescriptors[currentDescriptorIndex]}<TM size={0.5} />
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Logo / Expansion
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  HØLY static · Descriptors cycle every 3s · Ritual Care™ · Ritual Wear™ · Levers™ · Sanctuary™ · Studio™ · Vitality™
                </p>
              </div>
            </div>

            {/* Heart Icon Interaction */}
            <div className="space-y-4">
              <div 
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <button
                  className="heart-button"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '12px',
                    transition: 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  onClick={(e) => {
                    e.currentTarget.style.animation = 'heartBeat 500ms cubic-bezier(0.34, 1.56, 0.64, 1)';
                    setTimeout(() => {
                      e.currentTarget.style.animation = '';
                    }, 500);
                  }}
                >
                  <style>{`
                    @keyframes heartBeat {
                      0%, 100% {
                        transform: scale(1);
                      }
                      25% {
                        transform: scale(1.3);
                      }
                      50% {
                        transform: scale(1.1);
                      }
                      75% {
                        transform: scale(1.25);
                      }
                    }
                  `}</style>
                  <Heart size={32} style={{ color: '#1A1A1A', fill: 'transparent', transition: 'fill 300ms' }} />
                </button>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Icon / Heart Interaction
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Hover: scale 1.2 · Click: heartbeat bounce · Duration: 500ms
                </p>
              </div>
            </div>

            {/* Spiral/Slit Mark */}
            <div className="space-y-4">
              <div 
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#B3C4C1', border: '2px solid #DADADA' }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '2px',
                    backgroundColor: '#1A1A1A',
                    transformOrigin: 'center',
                    animation: 'slitExpand 1500ms cubic-bezier(0.4, 0, 0.2, 1) infinite',
                  }}
                >
                  <style>{`
                    @keyframes slitExpand {
                      0%, 100% {
                        width: 40px;
                        opacity: 0.6;
                      }
                      50% {
                        width: 80px;
                        opacity: 1;
                      }
                    }
                  `}</style>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Icon / Slit Mark Expand
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Width expand + opacity pulse · Meditative rhythm · Duration: 1500ms loop
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Frame: CTA Glow - Sacred Breath */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <HOLYSparkle size={28} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%' }}>
                Sacred Breath — CTA Aura
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Warm golden glow radiates outward in concentric layers on hover. Intense blur creates luxurious sacred presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Add to Ritual Button with Aura */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', padding: '120px' }}
              >
                <style>{`
                  @keyframes sacredBreathGlow {
                    0%, 100% {
                      box-shadow: 
                        0 0 30px 8px rgba(215, 208, 197, 0.4),
                        0 0 60px 15px rgba(217, 196, 187, 0.3),
                        0 0 90px 20px rgba(156, 136, 122, 0.15);
                    }
                    50% {
                      box-shadow: 
                        0 0 40px 12px rgba(215, 208, 197, 0.8),
                        0 0 80px 20px rgba(217, 196, 187, 0.6),
                        0 0 120px 30px rgba(156, 136, 122, 0.3);
                    }
                  }
                  .ritual-button-breath:hover {
                    animation: sacredBreathGlow 2000ms ease-in-out infinite;
                  }
                `}</style>
                
                <button
                  className="ritual-button-breath"
                  style={{
                    backgroundColor: '#1A1A1A',
                    color: '#F9F6F0',
                    padding: '16px 40px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    fontWeight: '500',
                    position: 'relative',
                    transition: 'transform 200ms ease-out',
                  }}
                >
                  Add to Ritual
                </button>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Buttons / Sacred Breath CTA Aura
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Hover: 3-layer warm golden glow · box-shadow pulse · 2s breath loop
                </p>
              </div>
            </div>

            {/* Checkout Button with Aura - Enhanced */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA', padding: '120px' }}
              >
                <style>{`
                  @keyframes checkoutGlow {
                    0%, 100% {
                      box-shadow: 
                        0 0 35px 10px rgba(215, 208, 197, 0.5),
                        0 0 70px 18px rgba(217, 196, 187, 0.35),
                        0 0 105px 25px rgba(156, 136, 122, 0.2);
                    }
                    50% {
                      box-shadow: 
                        0 0 45px 15px rgba(215, 208, 197, 0.9),
                        0 0 90px 25px rgba(217, 196, 187, 0.7),
                        0 0 135px 35px rgba(156, 136, 122, 0.4);
                    }
                  }
                  .checkout-button-breath:hover,
                  .checkout-button-breath:focus {
                    animation: checkoutGlow 2000ms ease-in-out infinite;
                  }
                `}</style>
                
                <button
                  className="checkout-button-breath"
                  style={{
                    backgroundColor: '#1A1A1A',
                    color: '#F9F6F0',
                    padding: '18px 48px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: '600',
                    position: 'relative',
                    transition: 'transform 200ms ease-out',
                  }}
                >
                  Complete Your Ritual
                </button>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Buttons / Sacred Breath CTA (Checkout)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Focus + Hover: sacred aura activation · ADA accessible · Larger glow spread
                </p>
              </div>
            </div>

            {/* Ritual Refill Button */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', padding: '120px' }}
              >
                <style>{`
                  @keyframes refillGlow {
                    0%, 100% {
                      box-shadow: 
                        0 0 25px 6px rgba(215, 208, 197, 0.3),
                        0 0 50px 12px rgba(217, 196, 187, 0.2),
                        0 0 75px 18px rgba(156, 136, 122, 0.1);
                    }
                    50% {
                      box-shadow: 
                        0 0 35px 10px rgba(215, 208, 197, 0.7),
                        0 0 70px 18px rgba(217, 196, 187, 0.5),
                        0 0 105px 25px rgba(156, 136, 122, 0.25);
                    }
                  }
                  .refill-button-breath:hover {
                    animation: refillGlow 2000ms ease-in-out infinite;
                  }
                `}</style>
                
                <button
                  className="refill-button-breath"
                  style={{
                    backgroundColor: '#F9F6F0',
                    color: '#1A1A1A',
                    padding: '14px 32px',
                    borderRadius: '8px',
                    border: '2px solid #1A1A1A',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: '500',
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'transform 200ms ease-out',
                  }}
                >
                  <Package size={16} />
                  Ritual Refill
                </button>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Buttons / Sacred Breath CTA (Refill)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Secondary variant · Light background with border · Softer glow intensity
                </p>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="space-y-4">
              <div 
                className="p-8 rounded-2xl"
                style={{ backgroundColor: 'rgba(217, 196, 187, 0.12)', border: '2px solid #D9C4BB' }}
              >
                <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '12px' }}>
                  Sacred Breath Aura
                </h4>
                <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Duration</p>
                    <p style={{ opacity: 0.6 }}>2000ms loop (calm breath rhythm)</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Aura Layers</p>
                    <p style={{ opacity: 0.6 }}>Inner: Smoky Umber (#9C887A) · Middle: Veil Clay (#D9C4BB) · Outer: Relic Green (#5E6458)</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Effect Type</p>
                    <p style={{ opacity: 0.6 }}>Concentric box-shadow pulses · No stroke lines · Pure radiance</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Trigger</p>
                    <p style={{ opacity: 0.6 }}>Hover (desktop) · Focus (keyboard) · Tap (mobile)</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Opacity Range</p>
                    <p style={{ opacity: 0.6 }}>Inner: 0 → 0.8 · Middle: 0 → 0.5 · Outer: 0 → 0.25</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Scale Transform</p>
                    <p style={{ opacity: 0.6 }}>Inner: 1.08 · Middle: 1.15 · Outer: 1.25 (outward expansion)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Buttons / Specifications
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Technical implementation guide for developers
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Frame: 🌕 Sacred Aura (Hover) - Reusable Component */}
        <div className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              🌕 Sacred Aura (Hover State)
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Reusable hover interaction component. Soft radial glow with infinite pulse. Token-driven colors per variant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Void Black Variant */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', padding: '120px' }}
              >
                <SacredAuraHover variant="void-black">
                  <button
                    style={{
                      backgroundColor: '#1A1A1A',
                      color: '#F9F6F0',
                      padding: '16px 40px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                    }}
                  >
                    Add to Ritual
                  </button>
                </SacredAuraHover>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / CTA / Sacred Aura (Void Black)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  3-layer glow: Limestone Oat → Veil Clay → Smoky Umber · Blur 24-40px · 2s breath
                </p>
              </div>
            </div>

            {/* Veil Clay Variant */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA', padding: '120px' }}
              >
                <SacredAuraHover variant="veil-clay">
                  <button
                    style={{
                      backgroundColor: '#D9C4BB',
                      color: '#1A1A1A',
                      padding: '16px 40px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                    }}
                  >
                    Begin Your Ritual
                  </button>
                </SacredAuraHover>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / CTA / Sacred Aura (Veil Clay)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Warm golden radiance with Fogstone Blue outer · Staggered animation
                </p>
              </div>
            </div>

            {/* Fogstone Blue Variant */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', padding: '120px' }}
              >
                <SacredAuraHover variant="fogstone-blue">
                  <button
                    style={{
                      backgroundColor: '#AAB5B2',
                      color: '#1A1A1A',
                      padding: '16px 40px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                    }}
                  >
                    Discover More
                  </button>
                </SacredAuraHover>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / CTA / Sacred Aura (Fogstone Blue)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Cool tones with warm inner core · Fogstone Blue layered with Smoky Umber
                </p>
              </div>
            </div>

            {/* Cream Variant */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#1A1A1A', border: '2px solid #1A1A1A', padding: '120px' }}
              >
                <SacredAuraHover variant="cream">
                  <button
                    style={{
                      backgroundColor: '#F9F6F0',
                      color: '#1A1A1A',
                      padding: '16px 40px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                    }}
                  >
                    Sacred Gift
                  </button>
                </SacredAuraHover>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / CTA / Sacred Aura (Cream)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Inverted palette for light buttons on dark · Visible golden warmth
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Frame: Ritual Pulse (Click) - Reusable Component */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <HOLYSparkle size={28} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%' }}>
                Ritual Pulse (Click State)
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Sacred click interaction: inward press → pulse ring → veil overlay → return. Click to experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Standard Pulse */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', padding: '120px' }}
              >
                <RitualPulseClick variant="void-black">
                  <button
                    style={{
                      backgroundColor: '#1A1A1A',
                      color: '#F9F6F0',
                      padding: '16px 40px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                    }}
                  >
                    Add to Cart
                  </button>
                </RitualPulseClick>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / CTA / Ritual Pulse (Standard)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Click: Scale 97% (60ms) → Pulse expands 180% (300ms) → Veil flash (120ms)
                </p>
              </div>
            </div>

            {/* With Slit Mark */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA', padding: '120px' }}
              >
                <RitualPulseClick variant="void-black" showSlitMark={true}>
                  <button
                    style={{
                      backgroundColor: '#1A1A1A',
                      color: '#F9F6F0',
                      padding: '18px 48px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: '600',
                    }}
                  >
                    Complete Your Ritual
                  </button>
                </RitualPulseClick>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / CTA / Ritual Pulse (with ø Slit Mark)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Enhanced: Sacred slit mark flash (2px → 20px) · 200ms expand/fade
                </p>
              </div>
            </div>

            {/* Veil Clay Variant */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', padding: '120px' }}
              >
                <RitualPulseClick variant="veil-clay">
                  <button
                    style={{
                      backgroundColor: '#D9C4BB',
                      color: '#1A1A1A',
                      padding: '14px 32px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500',
                    }}
                  >
                    Learn More
                  </button>
                </RitualPulseClick>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / CTA / Ritual Pulse (Secondary)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Veil Clay pulse ring · 400ms complete sequence · Warm radial glow
                </p>
              </div>
            </div>

            {/* Technical Diagram */}
            <div className="space-y-4">
              <div 
                className="p-8 rounded-2xl"
                style={{ backgroundColor: 'rgba(94, 100, 88, 0.08)', border: '2px solid #5E6458' }}
              >
                <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '12px' }}>
                  Ritual Pulse Sequence
                </h4>
                <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Phase 1: Inward Press</p>
                    <p style={{ opacity: 0.6 }}>Scale 97% over 60ms · Shadow deepens</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Phase 2: Pulse Ring</p>
                    <p style={{ opacity: 0.6 }}>Expands 100% → 160% · 200ms ease-out · Fades to 0</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Phase 3: Slit Mark (optional)</p>
                    <p style={{ opacity: 0.6 }}>Width 2px → 16px · Flash 150ms</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Phase 4: Veil Overlay</p>
                    <p style={{ opacity: 0.6 }}>rgba(255,255,255,0.06) · 80ms flash</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Total Duration</p>
                    <p style={{ opacity: 0.6 }}>350ms complete sequence</p>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / CTA / Technical Specs
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Four-phase animation sequence for sacred click interaction
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Frame: CTA Ritual Interaction Set (Combined) */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <HOLYLink size={28} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%' }}>
                CTA Ritual Interaction Set
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Complete interaction system combining Sacred Aura (hover) + Ritual Pulse (click). Production-ready component.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Primary CTA */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', padding: '120px' }}
              >
                <CTARitualInteraction 
                  variant="void-black"
                  onClick={() => console.log('Added to ritual')}
                >
                  <button
                    style={{
                      backgroundColor: '#1A1A1A',
                      color: '#F9F6F0',
                      padding: '16px 40px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                    }}
                  >
                    Add to Ritual
                  </button>
                </CTARitualInteraction>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / CTA / Interaction Set (Primary)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Hover: Sacred Aura glow · Click: Ritual Pulse · Complete system
                </p>
              </div>
            </div>

            {/* Checkout CTA with Slit Mark */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA', padding: '120px' }}
              >
                <CTARitualInteraction 
                  variant="void-black"
                  showSlitMark={true}
                  onClick={() => console.log('Ritual complete')}
                >
                  <button
                    style={{
                      backgroundColor: '#1A1A1A',
                      color: '#F9F6F0',
                      padding: '18px 48px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: '600',
                    }}
                  >
                    Complete Your Ritual
                  </button>
                </CTARitualInteraction>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / CTA / Interaction Set (Checkout)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  With sacred ø slit mark · Both hover + click states · Ritual completion
                </p>
              </div>
            </div>

            {/* Veil Clay Secondary */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA', padding: '120px' }}
              >
                <CTARitualInteraction 
                  variant="veil-clay"
                  onClick={() => console.log('Secondary action')}
                >
                  <button
                    style={{
                      backgroundColor: '#D9C4BB',
                      color: '#1A1A1A',
                      padding: '14px 32px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500',
                    }}
                  >
                    Explore Ritual
                  </button>
                </CTARitualInteraction>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / CTA / Interaction Set (Secondary)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Veil Clay variant · Softer secondary actions · Warm glow maintained
                </p>
              </div>
            </div>

            {/* Disabled State */}
            <div className="space-y-4">
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA', padding: '120px' }}
              >
                <CTARitualInteraction 
                  variant="void-black"
                  disabled={true}
                >
                  <button
                    style={{
                      backgroundColor: '#1A1A1A',
                      color: '#F9F6F0',
                      padding: '16px 40px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'not-allowed',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                    }}
                  >
                    Out of Stock
                  </button>
                </CTARitualInteraction>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / CTA / Interaction Set (Disabled)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  All animations disabled · 50% opacity · Clear unavailable state
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Frame: Ritual Cart Orb */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <HOLYCart size={28} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Ritual Cart Orb
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Sacred orb animation replaces standard cart count bubble. Message: "Your ritual awaits."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Desktop Cart Orb */}
            <div className="space-y-4">
              <div 
                className="p-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#1A1A1A', border: '2px solid #1A1A1A' }}
              >
                <div className="relative">
                  <style>{`
                    @keyframes cartOrbAuraInner {
                      0%, 100% {
                        opacity: 0;
                        transform: scale(1);
                      }
                      50% {
                        opacity: 0.7;
                        transform: scale(1.15);
                      }
                    }
                    @keyframes cartOrbAuraMiddle {
                      0%, 100% {
                        opacity: 0;
                        transform: scale(1);
                      }
                      50% {
                        opacity: 0.45;
                        transform: scale(1.3);
                      }
                    }
                    @keyframes cartOrbAuraOuter {
                      0%, 100% {
                        opacity: 0;
                        transform: scale(1);
                      }
                      50% {
                        opacity: 0.25;
                        transform: scale(1.5);
                      }
                    }
                  `}</style>
                  
                  {/* Cart Icon */}
                  <ShoppingBag size={32} style={{ color: '#F9F6F0' }} />
                  
                  {/* Sacred Orb with ø mark */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #D9C4BB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Garamond, serif',
                      fontSize: '16px',
                      color: '#1A1A1A',
                      zIndex: 3,
                    }}
                  >
                    ø
                  </div>
                  
                  {/* Inner Aura - Smoky Umber */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      boxShadow: '0 0 16px rgba(156, 136, 122, 0.8), 0 0 32px rgba(156, 136, 122, 0.5)',
                      animation: 'cartOrbAuraInner 2200ms ease-in-out infinite',
                      pointerEvents: 'none',
                      zIndex: 2,
                    }}
                  />
                  
                  {/* Middle Aura - Veil Clay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      boxShadow: '0 0 28px rgba(217, 196, 187, 0.7), 0 0 56px rgba(217, 196, 187, 0.4)',
                      animation: 'cartOrbAuraMiddle 2200ms ease-in-out infinite',
                      pointerEvents: 'none',
                      zIndex: 1,
                    }}
                  />
                  
                  {/* Outer Aura - Relic Green */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      boxShadow: '0 0 40px rgba(94, 100, 88, 0.5), 0 0 80px rgba(94, 100, 88, 0.3)',
                      animation: 'cartOrbAuraOuter 2200ms ease-in-out infinite',
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Cart / Sacred Orb (Desktop)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Active state when cart count {">"} 0 · Smoky Umber base + Veil Clay halo
                </p>
              </div>
            </div>

            {/* With Message on Hover */}
            <div className="space-y-4">
              <div 
                className="p-16 rounded-2xl flex flex-col items-center justify-center gap-6"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
              >
                <div className="relative group">
                  {/* Cart Icon */}
                  <ShoppingBag size={32} style={{ color: '#1A1A1A' }} />
                  
                  {/* Sacred Orb with Count */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: '#9C887A',
                      border: '2px solid #D9C4BB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#F9F6F0',
                      zIndex: 2,
                    }}
                  >
                    3
                  </div>
                  
                  {/* Outer Halo Ring */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: '2px solid #D9C4BB',
                      opacity: 0.4,
                      animation: 'haloPulse 2800ms ease-in-out infinite',
                      pointerEvents: 'none',
                      zIndex: 1,
                    }}
                  />
                  
                  {/* Glow Effect */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      boxShadow: '0 0 16px rgba(156, 136, 122, 0.6), 0 0 32px rgba(217, 196, 187, 0.4)',
                      animation: 'orbPulse 2800ms ease-in-out infinite',
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                  />

                  {/* Hover Message */}
                  <div
                    className="opacity-0 group-hover:opacity-100"
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginTop: '16px',
                      whiteSpace: 'nowrap',
                      fontFamily: 'Garamond, serif',
                      fontSize: '14px',
                      fontStyle: 'italic',
                      color: '#1A1A1A',
                      transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    Your ritual awaits
                  </div>
                </div>
                
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.5, fontStyle: 'italic', marginTop: '48px' }}>
                  Hover to see message
                </p>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Cart / Orb + Message
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Hover/tap: "Your ritual awaits" message fades in
                </p>
              </div>
            </div>

            {/* Mobile Variant */}
            <div className="space-y-4">
              <div 
                className="p-12 rounded-2xl"
                style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}
              >
                <div className="flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', margin: 0 }}>
                    HØLY
                  </h3>
                  <div className="flex items-center gap-6">
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative' }}>
                      <ShoppingBag size={24} style={{ color: '#1A1A1A' }} />
                      
                      {/* Mobile Sacred Orb */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-6px',
                          right: '-6px',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          backgroundColor: '#9C887A',
                          border: '2px solid #D9C4BB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '10px',
                          fontWeight: '600',
                          color: '#F9F6F0',
                          zIndex: 2,
                        }}
                      >
                        1
                      </div>
                      
                      {/* Mobile Halo */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-6px',
                          right: '-6px',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          border: '1.5px solid #D9C4BB',
                          opacity: 0.4,
                          animation: 'haloPulse 2800ms ease-in-out infinite',
                          pointerEvents: 'none',
                        }}
                      />
                      
                      {/* Mobile Glow */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-6px',
                          right: '-6px',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          boxShadow: '0 0 12px rgba(156, 136, 122, 0.5), 0 0 24px rgba(217, 196, 187, 0.3)',
                          animation: 'orbPulse 2800ms ease-in-out infinite',
                          pointerEvents: 'none',
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Cart / Sacred Orb (Mobile)
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Scaled for mobile navigation · 22px diameter · Optimized performance
                </p>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="space-y-4">
              <div 
                className="p-8 rounded-2xl"
                style={{ backgroundColor: 'rgba(156, 136, 122, 0.08)', border: '2px solid #9C887A' }}
              >
                <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '12px' }}>
                  Sacred Orb Animation
                </h4>
                <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Duration</p>
                    <p style={{ opacity: 0.6 }}>2800ms loop (slow inhale/exhale feel)</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Colors</p>
                    <p style={{ opacity: 0.6 }}>Orb: #9C887A (Smoky Umber) · Halo: #D9C4BB (Veil Clay)</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Trigger</p>
                    <p style={{ opacity: 0.6 }}>Always active when cart count {">"} 0</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Message</p>
                    <p style={{ opacity: 0.6 }}>"Your ritual awaits" (hover desktop · fade in mobile)</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Performance</p>
                    <p style={{ opacity: 0.6 }}>CSS-only · Core Web Vitals aligned · GPU accelerated</p>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                  HØLY / Motion / Cart / Specifications
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Technical implementation guide for developers
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Usage Guidelines */}
        <div 
          className="p-8 rounded-2xl"
          style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
        >
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', marginBottom: '16px' }}>
            ⚙️ Implementation Guidelines
          </h3>
          <div className="space-y-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.7 }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p style={{ fontWeight: '500', opacity: 1, marginBottom: '8px' }}>Duration Standards</p>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  <li>UI Interactions: 200-300ms</li>
                  <li>Modals/Panels: 300-400ms</li>
                  <li>Sacred Symbols: 500-2000ms (loops)</li>
                  <li>Page Transitions: 400-500ms</li>
                </ul>
              </div>
              <div>
                <p style={{ fontWeight: '500', opacity: 1, marginBottom: '8px' }}>Easing Functions</p>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  <li>Default: cubic-bezier(0.4, 0, 0.2, 1)</li>
                  <li>Feedback: cubic-bezier(0.4, 0, 1, 1)</li>
                  <li>Bounce: cubic-bezier(0.34, 1.56, 0.64, 1)</li>
                  <li>Sacred: ease-in-out or linear (loops)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Frame: 🛒 PDP Microinteractions */}
      <div className="space-y-8">
        <div>
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
            🛒 PDP Microinteractions
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
            Conversion-focused animations for Product Detail Page modules and interactions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Image Zoom Indicator */}
          <div className="space-y-4">
            <div 
              className="p-16 rounded-2xl flex items-center justify-center group cursor-pointer"
              style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}
            >
              <div className="relative">
                <div 
                  className="w-48 h-48 rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: '#DADADA' }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.5 }}>
                      Product Image
                    </p>
                  </div>
                </div>
                
                {/* Zoom Indicator */}
                <div 
                  className="absolute bottom-4 right-4 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: 'rgba(26, 26, 26, 0.8)' }}
                >
                  <div style={{ color: '#F9F6F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Search size={16} color="#F9F6F0" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                HØLY / Motion / PDP / Image Zoom Indicator
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Hover: zoom icon appears + image scales 105% · Click: full zoom modal
              </p>
            </div>
          </div>

          {/* Variant Selection Pulse */}
          <div className="space-y-4">
            <div 
              className="p-16 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
            >
              <div className="flex gap-3">
                {['#D9C4BB', '#AAB5B2', '#9C887A'].map((color, idx) => (
                  <button
                    key={idx}
                    className="relative group"
                    style={{ cursor: 'pointer' }}
                  >
                    <div
                      className="w-12 h-12 rounded-full transition-all duration-200 group-hover:scale-110"
                      style={{
                        backgroundColor: color,
                        border: idx === 0 ? '3px solid #1A1A1A' : '3px solid transparent',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                      }}
                    />
                    {idx === 0 && (
                      <div
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{
                          backgroundColor: color,
                          opacity: 0.4
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                HØLY / Motion / PDP / Variant Selection Pulse
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Selected variant: ping animation + border · Hover: scale 110%
              </p>
            </div>
          </div>

          {/* Ingredient Card Reveal */}
          <div className="space-y-4">
            <div 
              className="p-12 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}
            >
              <div 
                className="p-4 rounded-xl max-w-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}
              >
                <div className="flex gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#D9C4BB' }}
                  >
                    <HOLYWave size={20} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                      Ocean Minerals
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      15% concentration
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                HØLY / Motion / PDP / Ingredient Card Reveal
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Hover: lift up 4px + shadow increase · Click: expand full details
              </p>
            </div>
          </div>

          {/* Urgency Badge Pulse */}
          <div className="space-y-4">
            <div 
              className="p-16 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
            >
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ 
                  backgroundColor: 'rgba(217, 196, 187, 0.2)',
                  border: '2px solid #D9C4BB',
                  animation: 'urgencyPulse 2000ms ease-in-out infinite'
                }}
              >
                <style>{`
                  @keyframes urgencyPulse {
                    0%, 100% {
                      opacity: 1;
                      transform: scale(1);
                    }
                    50% {
                      opacity: 0.85;
                      transform: scale(1.02);
                    }
                  }
                `}</style>
                <HOLYSparkle size={16} color="#1A1A1A" />
                <span style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '13px', 
                  color: '#1A1A1A',
                  fontWeight: '600'
                }}>
                  Only 7 left in stock
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                HØLY / Motion / PDP / Urgency Badge Pulse
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Subtle pulse + scale · Creates urgency without anxiety · 2s loop
              </p>
            </div>
          </div>

          {/* Review Star Fill Animation */}
          <div className="space-y-4">
            <div 
              className="p-16 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className="w-8 h-8 flex items-center justify-center"
                    style={{
                      animation: `starFillIn 400ms ease-out ${star * 100}ms backwards`,
                    }}
                  >
                    <style>{`
                      @keyframes starFillIn {
                        0% {
                          opacity: 0;
                          transform: scale(0.5) rotate(-45deg);
                        }
                        60% {
                          transform: scale(1.1) rotate(5deg);
                        }
                        100% {
                          opacity: 1;
                          transform: scale(1) rotate(0deg);
                        }
                      }
                    `}</style>
                    <HOLYSparkle size={20} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                HØLY / Motion / PDP / Review Star Fill
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Sequential reveal on scroll · 100ms stagger · Bounce at 60%
              </p>
            </div>
          </div>

          {/* Subscription Toggle Transition */}
          <div className="space-y-4">
            <div 
              className="p-12 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: '#F9F6F0', border: '2px solid #DADADA' }}
            >
              <div className="space-y-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <button
                    className="relative w-12 h-6 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: '#1A1A1A' }}
                  >
                    <div 
                      className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300"
                      style={{ transform: 'translateX(26px)' }}
                    />
                  </button>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                    Auto-Ritual™
                  </p>
                </div>
                <div 
                  className="p-4 rounded-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    maxHeight: '100px',
                    opacity: 1
                  }}
                >
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>
                    Save 15% • Every 30 days
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                HØLY / Motion / PDP / Auto-Ritual™ Toggle
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Smooth expand/collapse · 300ms duration · Opacity + max-height
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="md:col-span-2 space-y-4">
            <div 
              className="p-8 rounded-2xl"
              style={{ backgroundColor: 'rgba(94, 100, 88, 0.08)', border: '2px solid #5E6458' }}
            >
              <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '12px' }}>
                PDP Motion Guidelines
              </h4>
              <div className="grid md:grid-cols-2 gap-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
                <div className="space-y-3">
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Image Interactions</p>
                    <p style={{ opacity: 0.6 }}>Hover: 105% scale · Click: Zoom modal · Duration: 300ms</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Variant Selection</p>
                    <p style={{ opacity: 0.6 }}>Selected: Border + ping animation · Hover: 110% scale</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Urgency Badges</p>
                    <p style={{ opacity: 0.6 }}>Subtle pulse 2000ms · No rapid flashing · Calm urgency</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Scroll Reveals</p>
                    <p style={{ opacity: 0.6 }}>Ingredients, reviews: Fade up 20px · 100ms stagger</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Toggle Transitions</p>
                    <p style={{ opacity: 0.6 }}>Subscription: Smooth expand · max-height + opacity</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', opacity: 0.9, marginBottom: '4px' }}>Performance</p>
                    <p style={{ opacity: 0.6 }}>GPU-accelerated · Transform + opacity only · 60fps</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                HØLY / Motion / PDP / Technical Guide
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Implementation standards for conversion-focused microinteractions
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
