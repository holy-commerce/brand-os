/**
 * HØLY™ / CORE SYSTEM COMPONENTS / Breadcrumb
 * 
 * LOCKED COMPONENT - DO NOT DETACH OR REGENERATE
 * 
 * Master breadcrumb component for navigation hierarchy.
 * 
 * Usage:
 * - PDP Experience
 * - PLP Experience
 * - Content Pages
 * 
 * Variants: Light | Dark
 */

import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  theme?: 'light' | 'dark';
}

export function Breadcrumb({ items, theme = 'light' }: BreadcrumbProps) {
  const textColor = theme === 'dark' ? '#F9F6F0' : '#1A1A1A';
  const borderColor = theme === 'dark' ? '#8C8981' : '#DADADA';

  return (
    <div 
      className="px-4 md:px-8 py-4" 
      style={{ borderBottom: `1px solid ${borderColor}` }}
    >
      <div className="flex items-center gap-2" style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize: '13px', 
        color: textColor, 
        opacity: 0.6 
      }}>
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.href ? (
              <a 
                href={item.href} 
                className="hover:opacity-100 transition-opacity"
                style={{ color: textColor, opacity: 0.6 }}
              >
                {item.label}
              </a>
            ) : (
              <span 
                style={{ 
                  color: textColor, 
                  opacity: index === items.length - 1 ? 1 : 0.6,
                  fontWeight: index === items.length - 1 ? '500' : '400'
                }}
              >
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <ChevronRight className="w-3 h-3" style={{ color: textColor, opacity: 0.6 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
