/**
 * HØLY™ / CORE SYSTEM COMPONENTS / Newsletter Signup
 * 
 * LOCKED COMPONENT - DO NOT DETACH OR REGENERATE
 * 
 * Master newsletter signup component with email capture.
 * 
 * Usage:
 * - Home Page
 * - Footer
 * - Modal overlays
 * - Post-purchase
 * 
 * Variants: Inline | Centered | Modal
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';
import { HOLYSparkle } from '../icons/HOLYIcons';

interface NewsletterSignupProps {
  variant?: 'inline' | 'centered' | 'modal';
  onSubmit?: (email: string) => void;
  theme?: 'light' | 'dark';
}

export function NewsletterSignup({ 
  variant = 'centered',
  onSubmit,
  theme = 'light'
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const textColor = theme === 'dark' ? '#F9F6F0' : '#1A1A1A';
  const borderColor = theme === 'dark' ? '#D9C4BB' : '#D9C4BB';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      if (onSubmit) {
        onSubmit(email);
      }
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const textAlign = variant === 'centered' ? 'center' : 'left';

  return (
    <div 
      className="max-w-2xl mx-auto"
      style={{ textAlign }}
    >
      {/* Sacred Icon */}
      <motion.div 
        className="flex justify-center mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div 
          className="relative"
          style={{
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Glow effect */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle, rgba(170, 181, 178, 0.15) 0%, transparent 70%)',
              filter: 'blur(12px)',
              animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />
          <HOLYSparkle size={32} color="#AAB5B2" />
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ 
          fontFamily: 'Garamond, serif', 
          fontSize: variant === 'modal' ? '32px' : 'clamp(28px, 4vw, 40px)',
          color: textColor,
          marginBottom: '16px',
          lineHeight: '115%',
          letterSpacing: '-0.02em'
        }}
      >
        Sacred Guidance Awaits
      </motion.h3>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '15px',
          color: textColor,
          opacity: 0.75,
          marginBottom: '32px',
          lineHeight: '160%',
          maxWidth: '500px',
          margin: '0 auto 32px'
        }}
      >
        Join the HØLY™ community for exclusive wellness rituals, sacred product releases, and intentional guidance delivered to your sanctuary
      </motion.p>

      {/* Form */}
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
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
        </motion.div>
      ) : (
        <motion.form 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className={`flex gap-3 ${variant === 'centered' ? 'max-w-lg mx-auto' : ''} ${variant === 'inline' ? 'flex-row' : 'flex-col sm:flex-row'}`}
        >
          {/* Custom styled input */}
          <div className="flex-1 relative">
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
                color: textColor,
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                border: `2px solid ${isFocused ? '#AAB5B2' : borderColor}`,
                borderRadius: '12px',
                outline: 'none',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                boxShadow: isFocused 
                  ? '0 0 0 4px rgba(170, 181, 178, 0.1), 0 4px 16px rgba(0, 0, 0, 0.08)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
            />
          </div>

          {/* Submit Button with Glow */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              type="submit"
              style={{ 
                height: '52px',
                padding: '0 32px',
                backgroundColor: theme === 'dark' ? '#F9F6F0' : '#1A1A1A', 
                color: theme === 'dark' ? '#1A1A1A' : '#F9F6F0',
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                boxShadow: '0 4px 16px rgba(26, 26, 26, 0.15), 0 0 0 0 rgba(26, 26, 26, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="hover:shadow-xl"
            >
              Join the Ritual
            </Button>
          </motion.div>
        </motion.form>
      )}

      {/* Trust indicator */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: textColor,
          opacity: 0.5,
          marginTop: '16px',
          letterSpacing: '0.02em'
        }}
      >
        Sacred privacy protected · Unsubscribe anytime
      </motion.p>
    </div>
  );
}
