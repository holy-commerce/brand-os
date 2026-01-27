import React, { ReactNode } from 'react';
import { HeaderNavigation, FooterBlock } from './NavigationSections';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

// ========================================
// EXPERIENCE LAYOUT COMPONENTS
// ========================================
// Shared layout components for Homepage, PLP, PDP, Ritual Finder

interface MobilePreviewFrameProps {
  children: ReactNode;
  title?: string;
  showBreadcrumbs?: boolean;
  breadcrumbItems?: { label: string; href?: string }[];
}

interface DesktopPreviewFrameProps {
  children: ReactNode;
  title?: string;
  showBreadcrumbs?: boolean;
  breadcrumbItems?: { label: string; href?: string }[];
}

// Mobile Preview Frame (375px)
export function MobilePreviewFrame({ 
  children, 
  title, 
  showBreadcrumbs = false,
  breadcrumbItems = []
}: MobilePreviewFrameProps) {
  return (
    <div className="space-y-4">
      {/* Frame Label */}
      <div className="flex items-center justify-between">
        <div>
          <h3 style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '13px',
            color: '#1A1A1A',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '4px'
          }}>
            Live Preview (Mobile – 375px)
          </h3>
          {title && (
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '12px',
              color: '#1A1A1A',
              opacity: 0.5
            }}>
              {title}
            </p>
          )}
        </div>
      </div>

      {/* Mobile Device Frame */}
      <div 
        className="mx-auto rounded-3xl overflow-hidden"
        style={{ 
          maxWidth: '375px',
          backgroundColor: '#000000',
          padding: '12px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div 
          className="rounded-2xl overflow-hidden"
          style={{ 
            backgroundColor: '#F9F6F0',
            minHeight: '667px'
          }}
        >
          {/* Breadcrumbs (if enabled) */}
          {showBreadcrumbs && breadcrumbItems.length > 0 && (
            <div className="px-4 pt-4 pb-2">
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <BreadcrumbItem>
                        {index === breadcrumbItems.length - 1 ? (
                          <BreadcrumbPage style={{ fontSize: '12px' }}>{item.label}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href={item.href || '#'} style={{ fontSize: '12px' }}>
                            {item.label}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          )}
          
          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
}

// Desktop Preview Frame (1440px)
export function DesktopPreviewFrame({ 
  children, 
  title,
  showBreadcrumbs = false,
  breadcrumbItems = []
}: DesktopPreviewFrameProps) {
  return (
    <div className="space-y-4">
      {/* Frame Label */}
      <div className="flex items-center justify-between">
        <div>
          <h3 style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '13px',
            color: '#1A1A1A',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '4px'
          }}>
            Live Preview (Desktop – 1440px)
          </h3>
          {title && (
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '12px',
              color: '#1A1A1A',
              opacity: 0.5
            }}>
              {title}
            </p>
          )}
        </div>
      </div>

      {/* Desktop Browser Frame */}
      <div 
        className="rounded-2xl overflow-hidden"
        style={{ 
          backgroundColor: '#FFFFFF',
          border: '2px solid #DADADA',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)'
        }}
      >
        {/* Browser Chrome */}
        <div 
          className="flex items-center gap-2 px-4 py-3"
          style={{ 
            backgroundColor: '#DADADA',
            borderBottom: '1px solid #B8B8B8'
          }}
        >
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF5F56' }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFBD2E' }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#27C93F' }} />
          </div>
          <div 
            className="flex-1 mx-4 px-3 py-1 rounded"
            style={{ 
              backgroundColor: '#FFFFFF',
              border: '1px solid #B8B8B8',
              fontSize: '11px',
              color: '#1A1A1A',
              opacity: 0.5
            }}
          >
            holy.co
          </div>
        </div>

        {/* Page Content */}
        <div style={{ backgroundColor: '#F9F6F0', minHeight: '800px' }}>
          {/* Header */}
          <HeaderNavigation />
          
          {/* Breadcrumbs (if enabled) */}
          {showBreadcrumbs && breadcrumbItems.length > 0 && (
            <div className="px-8 py-4">
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <BreadcrumbItem>
                        {index === breadcrumbItems.length - 1 ? (
                          <BreadcrumbPage>{item.label}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href={item.href || '#'}>
                            {item.label}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          )}
          
          {/* Main Content */}
          {children}
          
          {/* Footer */}
          <FooterBlock />
        </div>
      </div>
    </div>
  );
}

// Annotation Box Component
interface AnnotationBoxProps {
  title: string;
  children: ReactNode;
  variant?: 'info' | 'flow' | 'components';
}

export function AnnotationBox({ title, children, variant = 'info' }: AnnotationBoxProps) {
  const bgColors = {
    info: 'rgba(170, 181, 178, 0.1)',
    flow: '#F9F6F0',
    components: 'rgba(94, 100, 88, 0.05)'
  };
  
  const borderColors = {
    info: '#AAB5B2',
    flow: '#DADADA',
    components: '#5E6458'
  };

  return (
    <div 
      className="p-6 rounded-xl"
      style={{ 
        backgroundColor: bgColors[variant],
        border: `${variant === 'flow' ? '2px' : '1px'} solid ${borderColors[variant]}`
      }}
    >
      <h4 style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize: '13px',
        color: '#1A1A1A',
        fontWeight: '600',
        marginBottom: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {title}
      </h4>
      {children}
    </div>
  );
}
