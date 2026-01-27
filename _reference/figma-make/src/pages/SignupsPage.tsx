/**
 * HØLY™ / EXPERIENCES / Signups
 * 
 * Comprehensive signup component variants following HØLY™ design system.
 * Organized by use case: Modals, Embedded, Dual Channel, Mobile.
 * 
 * Note: These are static previews showing the design. In production, these would be
 * implemented as actual Dialog/Drawer components with portal rendering.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { HOLYSparkle, HOLYLeaf, HOLYDocument, HOLYGrid } from '../components/icons/HOLYIcons';
import { TM, renderWithTM } from '../components/core-system';

/**
 * 1. MODAL VARIANTS
 */

// Standard Modal Signup (640px centered) - Static Preview
function StandardModalSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div 
      className="max-w-[640px] mx-auto overflow-hidden rounded-2xl"
      style={{ 
        backgroundColor: '#FFFFFF',
        border: '2px solid #DADADA',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
      }}
    >
      <div className="p-8 md:p-12">
          {/* Sacred Icon */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ position: 'relative', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle, rgba(170, 181, 178, 0.15) 0%, transparent 70%)',
                filter: 'blur(12px)',
                animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }} />
              <HOLYSparkle size={32} color="#AAB5B2" />
            </div>
          </motion.div>

          {/* Heading */}
          <h3 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: '#1A1A1A',
            marginBottom: '16px',
            lineHeight: '115%',
            letterSpacing: '-0.02em',
            textAlign: 'center'
          }}>
            Sacred Guidance Awaits
          </h3>

          {/* Description */}
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '15px',
            color: '#1A1A1A',
            opacity: 0.75,
            marginBottom: '32px',
            lineHeight: '160%',
            textAlign: 'center'
          }}>
            {renderWithTM('Join the HØLY™ community for exclusive wellness rituals, sacred product releases, and intentional guidance delivered to your sanctuary')}
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div 
              className="flex items-center justify-center gap-3 p-5 rounded-xl"
              style={{ 
                backgroundColor: '#5E6458',
                boxShadow: '0 4px 24px rgba(94, 100, 88, 0.2)'
              }}
            >
              <Check className="w-5 h-5" style={{ color: '#F9F6F0' }} />
              <span style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '15px',
                fontWeight: '500',
                color: '#F9F6F0'
              }}>
                Welcome to the HØLY™ ritual
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                required
                style={{
                  width: '100%',
                  height: '52px',
                  padding: '0 20px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: '#1A1A1A',
                  backgroundColor: '#FFFFFF',
                  border: `2px solid ${isFocused ? '#AAB5B2' : '#D9C4BB'}`,
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                  boxShadow: isFocused 
                    ? '0 0 0 4px rgba(170, 181, 178, 0.1), 0 4px 16px rgba(0, 0, 0, 0.08)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
              />
              <Button 
                type="submit"
                style={{ 
                  width: '100%',
                  height: '52px',
                  backgroundColor: '#1A1A1A', 
                  color: '#F9F6F0',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: '500',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer'
                }}
              >
                Join the Ritual
              </Button>
            </form>
          )}

          {/* Trust indicator */}
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: '#1A1A1A',
            opacity: 0.5,
            marginTop: '16px',
            letterSpacing: '0.02em',
            textAlign: 'center'
          }}>
            Sacred privacy protected · Unsubscribe anytime
          </p>
        </div>
    </div>
  );
}

// Fullscreen Takeover Modal - Static Preview
function FullscreenModalSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ 
        minHeight: '600px',
        backgroundColor: '#FFFFFF',
        border: '2px solid #DADADA',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
      }}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center p-8"
        style={{
          minHeight: '600px',
          background: 'linear-gradient(135deg, #F9F6F0 0%, #FDFCFA 50%, #F9F6F0 100%)',
        }}
      >
          {/* Ambient Glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(170, 181, 178, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none'
          }} />

          {/* Content */}
          <div className="relative max-w-2xl w-full text-center">
            {/* Sacred Icon */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle, rgba(170, 181, 178, 0.2) 0%, transparent 70%)',
                  filter: 'blur(16px)',
                  animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }} />
                <HOLYSparkle size={48} color="#AAB5B2" />
              </div>
            </motion.div>

            <h2 style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: '#1A1A1A',
              marginBottom: '24px',
              lineHeight: '110%',
              letterSpacing: '-0.02em'
            }}>
              Sacred Guidance Awaits
            </h2>

            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '17px',
              color: '#1A1A1A',
              opacity: 0.75,
              marginBottom: '40px',
              lineHeight: '160%',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              Join the HØLY™ community for exclusive wellness rituals, sacred product releases, and intentional guidance delivered to your sanctuary
            </p>

            {isSubmitted ? (
              <div 
                className="flex items-center justify-center gap-3 p-5 rounded-xl max-w-md mx-auto"
                style={{ 
                  backgroundColor: '#5E6458',
                  boxShadow: '0 4px 24px rgba(94, 100, 88, 0.2)'
                }}
              >
                <Check className="w-5 h-5" style={{ color: '#F9F6F0' }} />
                <span style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '15px',
                  fontWeight: '500',
                  color: '#F9F6F0'
                }}>
                  Welcome to the HØLY™ ritual
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  required
                  style={{
                    width: '100%',
                    height: '56px',
                    padding: '0 24px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    color: '#1A1A1A',
                    backgroundColor: '#FFFFFF',
                    border: `2px solid ${isFocused ? '#AAB5B2' : '#D9C4BB'}`,
                    borderRadius: '14px',
                    outline: 'none',
                    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    boxShadow: isFocused 
                      ? '0 0 0 4px rgba(170, 181, 178, 0.1), 0 8px 24px rgba(0, 0, 0, 0.08)' 
                      : '0 4px 12px rgba(0, 0, 0, 0.06)'
                  }}
                />
                <Button 
                  type="submit"
                  style={{ 
                    width: '100%',
                    height: '56px',
                    backgroundColor: '#1A1A1A', 
                    color: '#F9F6F0',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: '500',
                    border: 'none',
                    borderRadius: '14px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(26, 26, 26, 0.2)'
                  }}
                >
                  Join the Ritual
                </Button>
              </form>
            )}

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: '#1A1A1A',
              opacity: 0.5,
              marginTop: '24px',
              letterSpacing: '0.02em'
            }}>
              Sacred privacy protected · Unsubscribe anytime
            </p>
          </div>
        </div>
    </div>
  );
}

/**
 * 2. EMBEDDED VARIANTS
 */

// Homepage Embedded Section
function HomepageEmbeddedSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div 
      className="relative px-4 md:px-8 py-16 md:py-24 overflow-hidden rounded-2xl"
      style={{
        background: 'linear-gradient(180deg, #F9F6F0 0%, #FDFCFA 50%, #F9F6F0 100%)',
        border: '2px solid #DADADA'
      }}
    >
      {/* Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(170, 181, 178, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      {/* Content */}
      <div className="relative max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div style={{ position: 'relative', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle, rgba(170, 181, 178, 0.15) 0%, transparent 70%)',
              filter: 'blur(12px)',
              animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }} />
            <HOLYSparkle size={32} color="#AAB5B2" />
          </div>
        </div>

        <h3 style={{ 
          fontFamily: 'Garamond, serif', 
          fontSize: 'clamp(28px, 4vw, 40px)',
          color: '#1A1A1A',
          marginBottom: '16px',
          lineHeight: '115%',
          letterSpacing: '-0.02em'
        }}>
          Sacred Guidance Awaits
        </h3>

        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '15px',
          color: '#1A1A1A',
          opacity: 0.75,
          marginBottom: '32px',
          lineHeight: '160%',
          maxWidth: '500px',
          margin: '0 auto 32px'
        }}>
          Join the HØLY™ community for exclusive wellness rituals, sacred product releases, and intentional guidance delivered to your sanctuary
        </p>

        {isSubmitted ? (
          <div 
            className="flex items-center justify-center gap-3 p-5 rounded-xl max-w-md mx-auto"
            style={{ 
              backgroundColor: '#5E6458',
              boxShadow: '0 4px 24px rgba(94, 100, 88, 0.2)'
            }}
          >
            <Check className="w-5 h-5" style={{ color: '#F9F6F0' }} />
            <span style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '15px',
              fontWeight: '500',
              color: '#F9F6F0'
            }}>
              Welcome to the HØLY™ ritual
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              required
              style={{
                width: '100%',
                height: '52px',
                padding: '0 20px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: '#1A1A1A',
                backgroundColor: '#FFFFFF',
                border: `2px solid ${isFocused ? '#AAB5B2' : '#D9C4BB'}`,
                borderRadius: '12px',
                outline: 'none',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                boxShadow: isFocused 
                  ? '0 0 0 4px rgba(170, 181, 178, 0.1), 0 4px 16px rgba(0, 0, 0, 0.08)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
            />
            <Button 
              type="submit"
              style={{ 
                width: '100%',
                height: '52px',
                backgroundColor: '#1A1A1A', 
                color: '#F9F6F0',
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: '500'
              }}
            >
              Join the Ritual
            </Button>
          </form>
        )}

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#1A1A1A',
          opacity: 0.5,
          marginTop: '16px',
          letterSpacing: '0.02em'
        }}>
          Sacred privacy protected · Unsubscribe anytime
        </p>
      </div>
    </div>
  );
}

// Sticky Footer Bar
function StickyFooterBar() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-2xl overflow-hidden"
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '24px',
            right: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
            zIndex: 50,
            backgroundColor: '#1A1A1A',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)',
            border: '2px solid #DADADA'
          }}
        >
          <div className="w-full px-6 md:px-8 py-5">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '15px',
                  fontWeight: '500',
                  color: '#F9F6F0',
                  marginBottom: '4px'
                }}>
                  Join the Sacred Ritual
                </p>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '13px',
                  color: '#F9F6F0',
                  opacity: 0.7
                }}>
                  Exclusive wellness guidance delivered to your sanctuary
                </p>
              </div>

              {/* Form */}
              {isSubmitted ? (
                <div 
                  className="flex items-center gap-2 px-5 py-3 rounded-lg"
                  style={{ backgroundColor: '#5E6458' }}
                >
                  <Check className="w-4 h-4" style={{ color: '#F9F6F0' }} />
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#F9F6F0'
                  }}>
                    Welcome to HØLY™
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 md:w-64"
                    style={{
                      height: '44px',
                      padding: '0 16px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: '#1A1A1A',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      outline: 'none'
                    }}
                  />
                  <Button 
                    type="submit"
                    style={{ 
                      height: '44px',
                      padding: '0 24px',
                      backgroundColor: '#F9F6F0', 
                      color: '#1A1A1A',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Subscribe
                  </Button>
                </form>
              )}

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                style={{
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  color: '#F9F6F0'
                }}
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * 3. DUAL CHANNEL SIGNUP (Email + SMS)
 */

function DualChannelSignup() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setPhone('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div 
      className="max-w-[640px] mx-auto overflow-hidden rounded-2xl"
      style={{ 
        backgroundColor: '#FFFFFF',
        border: '2px solid #DADADA',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
      }}
    >
      <div className="p-8 md:p-12">
          {/* Sacred Icon */}
          <div className="flex justify-center mb-6">
            <div style={{ position: 'relative', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle, rgba(170, 181, 178, 0.15) 0%, transparent 70%)',
                filter: 'blur(12px)',
                animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }} />
              <HOLYLeaf size={32} color="#AAB5B2" />
            </div>
          </div>

          <h3 style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: '#1A1A1A',
            marginBottom: '16px',
            lineHeight: '115%',
            letterSpacing: '-0.02em',
            textAlign: 'center'
          }}>
            Stay Connected
          </h3>

          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '15px',
            color: '#1A1A1A',
            opacity: 0.75,
            marginBottom: '32px',
            lineHeight: '160%',
            textAlign: 'center'
          }}>
            Receive sacred guidance through email and optional SMS updates
          </p>

          {isSubmitted ? (
            <div 
              className="flex items-center justify-center gap-3 p-5 rounded-xl"
              style={{ 
                backgroundColor: '#5E6458',
                boxShadow: '0 4px 24px rgba(94, 100, 88, 0.2)'
              }}
            >
              <Check className="w-5 h-5" style={{ color: '#F9F6F0' }} />
              <span style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '15px',
                fontWeight: '500',
                color: '#F9F6F0'
              }}>
                Welcome to the HØLY™ ritual
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#1A1A1A',
                  marginBottom: '8px'
                }}>
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  required
                  style={{
                    width: '100%',
                    height: '52px',
                    padding: '0 20px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    color: '#1A1A1A',
                    backgroundColor: '#FFFFFF',
                    border: `2px solid ${emailFocused ? '#AAB5B2' : '#D9C4BB'}`,
                    borderRadius: '12px',
                    outline: 'none',
                    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    boxShadow: emailFocused 
                      ? '0 0 0 4px rgba(170, 181, 178, 0.1), 0 4px 16px rgba(0, 0, 0, 0.08)' 
                      : '0 2px 8px rgba(0, 0, 0, 0.04)'
                  }}
                />
              </div>

              {/* Phone Input */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#1A1A1A',
                  marginBottom: '8px'
                }}>
                  Mobile phone <span style={{ opacity: 0.5 }}>(optional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onFocus={() => setPhoneFocused(true)}
                  onBlur={() => setPhoneFocused(false)}
                  style={{
                    width: '100%',
                    height: '52px',
                    padding: '0 20px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    color: '#1A1A1A',
                    backgroundColor: '#FFFFFF',
                    border: `2px solid ${phoneFocused ? '#AAB5B2' : '#D9C4BB'}`,
                    borderRadius: '12px',
                    outline: 'none',
                    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    boxShadow: phoneFocused 
                      ? '0 0 0 4px rgba(170, 181, 178, 0.1), 0 4px 16px rgba(0, 0, 0, 0.08)' 
                      : '0 2px 8px rgba(0, 0, 0, 0.04)'
                  }}
                />
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: '#1A1A1A',
                  opacity: 0.6,
                  marginTop: '8px',
                  lineHeight: '150%'
                }}>
                  Text updates for sacred reminders & early access
                </p>
              </div>

              <Button 
                type="submit"
                style={{ 
                  width: '100%',
                  height: '52px',
                  backgroundColor: '#1A1A1A', 
                  color: '#F9F6F0',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: '500'
                }}
              >
                Join the Ritual
              </Button>
            </form>
          )}

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: '#1A1A1A',
            opacity: 0.5,
            marginTop: '16px',
            letterSpacing: '0.02em',
            textAlign: 'center'
          }}>
            Sacred privacy protected · Unsubscribe anytime
          </p>
        </div>
    </div>
  );
}

/**
 * 4. MOBILE VARIANTS
 */

// Mobile Drawer - Static Preview
function MobileDrawerSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div 
      className="max-w-md mx-auto overflow-hidden rounded-t-2xl"
      style={{ 
        backgroundColor: '#FFFFFF',
        border: '2px solid #DADADA',
        borderBottom: 'none',
        boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.12)'
      }}
    >
      <div className="p-6 pb-8">
        {/* Drawer Handle */}
        <div className="flex justify-center mb-4">
          <div style={{
            width: '100px',
            height: '8px',
            backgroundColor: '#DADADA',
            borderRadius: '4px'
          }} />
        </div>
        
        {/* Sacred Icon */}
        <div className="flex justify-center mb-4">
          <div style={{ position: 'relative', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle, rgba(170, 181, 178, 0.15) 0%, transparent 70%)',
              filter: 'blur(10px)',
              animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }} />
            <HOLYSparkle size={28} color="#AAB5B2" />
          </div>
        </div>

        <h3 style={{ 
          fontFamily: 'Garamond, serif', 
          fontSize: '28px',
          color: '#1A1A1A',
          marginBottom: '12px',
          lineHeight: '115%',
          letterSpacing: '-0.02em',
          textAlign: 'center'
        }}>
          Sacred Guidance Awaits
        </h3>

        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '15px',
          color: '#1A1A1A',
          opacity: 0.75,
          marginBottom: '24px',
          lineHeight: '160%',
          textAlign: 'center'
        }}>
          Join the HØLY™ community for exclusive wellness rituals and intentional guidance
        </p>

        {isSubmitted ? (
          <div 
            className="flex items-center justify-center gap-3 p-4 rounded-xl"
            style={{ 
              backgroundColor: '#5E6458',
              boxShadow: '0 4px 24px rgba(94, 100, 88, 0.2)'
            }}
          >
            <Check className="w-5 h-5" style={{ color: '#F9F6F0' }} />
            <span style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '15px',
              fontWeight: '500',
              color: '#F9F6F0'
            }}>
              Welcome to the HØLY™ ritual
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              required
              style={{
                width: '100%',
                height: '52px',
                padding: '0 20px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                color: '#1A1A1A',
                backgroundColor: '#FFFFFF',
                border: `2px solid ${isFocused ? '#AAB5B2' : '#D9C4BB'}`,
                borderRadius: '12px',
                outline: 'none',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                boxShadow: isFocused 
                  ? '0 0 0 4px rgba(170, 181, 178, 0.1), 0 4px 16px rgba(0, 0, 0, 0.08)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
            />
            <Button 
              type="submit"
              style={{ 
                width: '100%',
                height: '52px',
                backgroundColor: '#1A1A1A', 
                color: '#F9F6F0',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              Join the Ritual
            </Button>
          </form>
        )}

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#1A1A1A',
          opacity: 0.5,
          marginTop: '16px',
          letterSpacing: '0.02em',
          textAlign: 'center'
        }}>
          Sacred privacy protected · Unsubscribe anytime
        </p>
      </div>
    </div>
  );
}

// Collapsible Banner
function CollapsibleBanner() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
        setIsExpanded(false);
      }, 2000);
    }
  };

  return (
    <div 
      className="rounded-lg overflow-hidden"
      style={{
        backgroundColor: 'var(--foreground)', // Temple Black #1A1A1A
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Collapsed State */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between transition-smooth group"
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--primary-foreground)' // Ivory #F9F6F0
        }}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Collapse newsletter signup" : "Expand newsletter signup"}
      >
        <div className="flex items-center gap-3">
          <HOLYSparkle size={20} color="var(--muted)" />
          <span style={{ 
            fontFamily: 'var(--font-display)', // EB Garamond
            fontSize: '16px',
            fontWeight: '500',
            color: 'var(--primary-foreground)',
            letterSpacing: '0.01em'
          }}>
            Join the Sacred Ritual
          </span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChevronDown size={20} color="var(--primary-foreground)" />
        </motion.div>
      </button>

      {/* Expanded Form */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 16px 16px 16px' }}>
              <p style={{ 
                fontFamily: 'var(--font-body)', // Inter
                fontSize: '14px',
                color: 'var(--primary-foreground)',
                opacity: 0.85,
                marginBottom: '16px',
                lineHeight: '160%',
                letterSpacing: '0.01em'
              }}>
                Exclusive wellness rituals and sacred product releases
              </p>

              {isSubmitted ? (
                <div 
                  className="flex items-center gap-2 p-3 rounded-md transition-smooth"
                  style={{ backgroundColor: 'var(--accent-green)' }}
                >
                  <Check className="w-4 h-4" style={{ color: 'var(--primary-foreground)' }} />
                  <span style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'var(--primary-foreground)'
                  }}>
                    Welcome to HØLY<TM />
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required
                    autoComplete="email"
                    className="flex-1 transition-smooth"
                    style={{
                      height: '44px',
                      padding: '0 16px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--foreground)',
                      backgroundColor: 'var(--primary-foreground)', // Ivory white
                      border: isFocused ? '2px solid var(--accent)' : '2px solid transparent',
                      borderRadius: 'var(--radius-xs)', // 8px
                      outline: 'none',
                      boxShadow: isFocused ? 'var(--shadow-hover)' : 'none'
                    }}
                    aria-label="Email address"
                  />
                  <Button 
                    type="submit"
                    className="transition-smooth hover:scale-[1.02] active:scale-[0.98]"
                    style={{ 
                      height: '44px',
                      padding: '0 20px',
                      backgroundColor: 'var(--surface-secondary)', // Limestone Oat #D7D0C5
                      color: 'var(--foreground)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      fontWeight: '500',
                      whiteSpace: 'nowrap',
                      borderRadius: 'var(--radius-xs)', // 8px
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * MAIN PAGE EXPORT
 */

export default function SignupsPage() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showStandardModal, setShowStandardModal] = useState(false);
  const [showFullscreenTakeover, setShowFullscreenTakeover] = useState(false);

  return (
    <div className="space-y-8 pb-24">
      {/* Page Header */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <HOLYDocument size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Signups — Comprehensive Component Library
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            All signup variants following HØLY™ design system principles
          </p>
        </div>
      </div>

      {/* Section 1: Modal Variants */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
          <div className="flex items-center gap-3 mb-2">
            <HOLYGrid size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Section 1: Modal Variants
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Centered modals and fullscreen takeovers for focused signup experiences
          </p>
        </div>

        <div className="space-y-8">
          {/* Standard Modal */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: '500', color: '#1A1A1A', marginBottom: '8px' }}>
              Standard Modal (640px)
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', marginBottom: '16px' }}>
              Centered modal with sacred glow, perfect for homepage popups and post-purchase engagement
            </p>
            <Button 
              onClick={() => setShowStandardModal(!showStandardModal)}
              style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0', marginBottom: showStandardModal ? '16px' : '0' }}
            >
              {showStandardModal ? 'Hide' : 'Show'} Standard Modal
            </Button>
            {showStandardModal && <StandardModalSignup />}
          </div>

          {/* Fullscreen Takeover */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: '500', color: '#1A1A1A', marginBottom: '8px' }}>
              Fullscreen Takeover
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', marginBottom: '16px' }}>
              Immersive fullscreen experience with ambient glow and larger typography
            </p>
            <Button 
              onClick={() => setShowFullscreenTakeover(!showFullscreenTakeover)}
              style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0', marginBottom: showFullscreenTakeover ? '16px' : '0' }}
            >
              {showFullscreenTakeover ? 'Hide' : 'Show'} Fullscreen Takeover
            </Button>
            {showFullscreenTakeover && <FullscreenModalSignup />}
          </div>
        </div>
      </div>

      {/* Section 2: Embedded Variants */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
          <div className="flex items-center gap-3 mb-2">
            <HOLYGrid size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Section 2: Embedded Variants
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Inline sections for homepage and persistent footer bars
          </p>
        </div>

        <div className="space-y-6">
          {/* Homepage Embedded */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: '500', color: '#1A1A1A', marginBottom: '12px' }}>
              Homepage Embedded Section
            </h3>
            <HomepageEmbeddedSignup />
          </div>

          {/* Sticky Footer Bar */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: '500', color: '#1A1A1A', marginBottom: '8px' }}>
              Sticky Footer Bar
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', marginBottom: '16px' }}>
              Persistent bottom bar with horizontal layout, collapsible on mobile
            </p>
            <Button 
              onClick={() => setShowStickyBar(!showStickyBar)}
              style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}
            >
              {showStickyBar ? 'Hide' : 'Show'} Sticky Footer Bar
            </Button>
          </div>
        </div>
      </div>

      {/* Section 3: Dual Channel Signup */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
          <div className="flex items-center gap-3 mb-2">
            <HOLYGrid size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Section 3: Dual Channel Signup (Email + SMS)
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Multi-channel signup with email and optional SMS for maximum engagement
          </p>
        </div>

        <div>
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: '500', color: '#1A1A1A', marginBottom: '8px' }}>
            Email + SMS Modal
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', marginBottom: '16px' }}>
            Stacked input fields with email required and phone optional
          </p>
          <DualChannelSignup />
        </div>
      </div>

      {/* Section 4: Mobile Variants */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
          <div className="flex items-center gap-3 mb-2">
            <HOLYGrid size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Section 4: Mobile Variants
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Mobile-optimized drawers and collapsible banners
          </p>
        </div>

        <div className="space-y-8">
          {/* Mobile Drawer */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: '500', color: '#1A1A1A', marginBottom: '8px' }}>
              Mobile Drawer
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%', marginBottom: '16px' }}>
              Slide-up drawer optimized for mobile touch interactions
            </p>
            <MobileDrawerSignup />
          </div>

          {/* Collapsible Banner */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: '500', color: '#1A1A1A', marginBottom: '12px' }}>
              Collapsible Banner
            </h3>
            <CollapsibleBanner />
          </div>
        </div>
      </div>

      {/* Sticky Footer Bar Instance */}
      {showStickyBar && <StickyFooterBar />}
    </div>
  );
}