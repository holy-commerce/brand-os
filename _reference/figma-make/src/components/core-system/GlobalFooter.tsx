/**
 * HØLY™ / CORE SYSTEM COMPONENTS / Global Footer
 * 
 * LOCKED COMPONENT - DO NOT DETACH OR REGENERATE
 * 
 * Master footer component used across all experiences.
 * Includes desktop and mobile responsive variants.
 * 
 * Usage:
 * - Home Page
 * - PDP Experience
 * - PLP Experience
 * - Ritual Finder
 * - All public pages
 * 
 * Variants: Light | Dark (default)
 */

import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Separator } from '../ui/separator';

interface GlobalFooterProps {
  theme?: 'light' | 'dark';
}

export function GlobalFooter({ theme = 'dark' }: GlobalFooterProps) {
  const bgColor = theme === 'dark' ? '#1A1A1A' : '#F9F6F0';
  const textColor = theme === 'dark' ? '#F9F6F0' : '#1A1A1A';
  const borderColor = theme === 'dark' ? '#8C8981' : '#DADADA';

  const footerLinks = {
    shop: ['All Products', 'Ritual Systems', 'Bestsellers', 'New Arrivals'],
    learn: ['About HØLY™', 'Ritual Finder', 'Studio Partners', 'Blog'],
    support: ['Contact', 'FAQ', 'Shipping', 'Returns'],
  };

  return (
    <footer 
      className="px-4 md:px-8 py-12" 
      style={{ backgroundColor: bgColor, borderTop: `2px solid ${borderColor}` }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: '600', 
              color: textColor, 
              marginBottom: '16px' 
            }}>
              Shop
            </h4>
            <div className="space-y-3">
              {footerLinks.shop.map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  style={{ 
                    display: 'block',
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '13px', 
                    color: textColor,
                    opacity: 0.7
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: '600', 
              color: textColor, 
              marginBottom: '16px' 
            }}>
              Learn
            </h4>
            <div className="space-y-3">
              {footerLinks.learn.map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  style={{ 
                    display: 'block',
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '13px', 
                    color: textColor,
                    opacity: 0.7
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: '600', 
              color: textColor, 
              marginBottom: '16px' 
            }}>
              Support
            </h4>
            <div className="space-y-3">
              {footerLinks.support.map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  style={{ 
                    display: 'block',
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '13px', 
                    color: textColor,
                    opacity: 0.7
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: '600', 
              color: textColor, 
              marginBottom: '16px' 
            }}>
              Follow
            </h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 rounded-lg transition-colors"
                style={{ color: textColor }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg transition-colors"
                style={{ color: textColor }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg transition-colors"
                style={{ color: textColor }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <Separator style={{ backgroundColor: borderColor, marginBottom: '24px' }} />
        
        {/* Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '13px', 
            color: textColor, 
            opacity: 0.6 
          }}>
            © 2025 HØLY™. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Accessibility'].map((link) => (
              <a 
                key={link} 
                href="#" 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '13px', 
                  color: textColor,
                  opacity: 0.6
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
