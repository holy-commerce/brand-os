import { ReactNode } from 'react';

// ========================================
// MOBILE QUIZ PROGRESS INDICATOR
// ========================================
// Sticky top progress bar for mobile quiz flows
// Shows current step and completion percentage

interface MobileProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabel?: string;
}

export function MobileProgressIndicator({ 
  currentStep, 
  totalSteps, 
  stepLabel 
}: MobileProgressIndicatorProps) {
  const percentage = (currentStep / totalSteps) * 100;
  
  return (
    <div 
      className="sticky top-0 z-50 bg-white"
      style={{ 
        borderBottom: '1px solid #DADADA',
        padding: '12px 16px'
      }}
    >
      {/* Step Counter */}
      <div className="flex items-center justify-between mb-2">
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '12px', 
          color: '#1A1A1A',
          fontWeight: '600',
          letterSpacing: '0.5px',
          textTransform: 'uppercase'
        }}>
          Step {currentStep} of {totalSteps}
        </p>
        {stepLabel && (
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '11px', 
            color: '#1A1A1A',
            opacity: 0.6
          }}>
            {stepLabel}
          </p>
        )}
      </div>
      
      {/* Progress Bar */}
      <div 
        className="w-full h-1 rounded-full overflow-hidden"
        style={{ backgroundColor: '#F9F6F0' }}
      >
        <div 
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ 
            backgroundColor: '#C9A36D',
            width: `${percentage}%`
          }}
        />
      </div>
    </div>
  );
}

// ========================================
// MOBILE CHOICE CARD BUTTON
// ========================================
// Large, thumb-friendly card button for quiz options
// Min 48px touch target, full-width on mobile

interface MobileChoiceCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  selected?: boolean;
  color?: string;
  onClick: () => void;
}

export function MobileChoiceCard({ 
  title, 
  description, 
  icon, 
  selected = false,
  color = '#C9A36D',
  onClick 
}: MobileChoiceCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left"
      style={{
        backgroundColor: selected ? `${color}15` : '#FFFFFF',
        border: `2px solid ${selected ? color : '#DADADA'}`,
        borderRadius: '12px',
        padding: '16px',
        minHeight: '72px',
        cursor: 'pointer',
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.98)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
      onTouchStart={(e) => {
        e.currentTarget.style.transform = 'scale(0.98)';
      }}
      onTouchEnd={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {icon && (
        <div 
          className="flex-shrink-0"
          style={{ 
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            backgroundColor: selected ? `${color}20` : '#F9F6F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {icon}
        </div>
      )}
      
      <div className="flex-1 min-w-0">
        <h4 style={{ 
          fontFamily: 'Garamond, serif', 
          fontSize: '18px', 
          color: '#1A1A1A',
          marginBottom: description ? '4px' : '0',
          lineHeight: '130%'
        }}>
          {title}
        </h4>
        
        {description && (
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '13px', 
            color: '#1A1A1A',
            opacity: 0.7,
            lineHeight: '150%'
          }}>
            {description}
          </p>
        )}
      </div>
      
      {/* Selection Indicator */}
      <div 
        className="flex-shrink-0"
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: `2px solid ${selected ? color : '#DADADA'}`,
          backgroundColor: selected ? color : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {selected && (
          <div 
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF'
            }}
          />
        )}
      </div>
    </button>
  );
}

// ========================================
// MOBILE QUIZ CONTAINER
// ========================================
// Container for mobile quiz screens with proper spacing

interface MobileQuizContainerProps {
  children: ReactNode;
  showProgress?: boolean;
  currentStep?: number;
  totalSteps?: number;
  stepLabel?: string;
}

export function MobileQuizContainer({ 
  children, 
  showProgress = true,
  currentStep = 1,
  totalSteps = 3,
  stepLabel
}: MobileQuizContainerProps) {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: '#F9F6F0' }}
    >
      {showProgress && (
        <MobileProgressIndicator 
          currentStep={currentStep}
          totalSteps={totalSteps}
          stepLabel={stepLabel}
        />
      )}
      
      <div className="flex-1 overflow-y-auto">
        <div style={{ padding: '20px 16px', maxWidth: '600px', margin: '0 auto' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ========================================
// MOBILE BOTTOM CTA BAR
// ========================================
// Sticky bottom action bar for mobile (Continue, Back, etc.)

interface MobileBottomCTABarProps {
  primaryLabel: string;
  primaryDisabled?: boolean;
  onPrimaryClick: () => void;
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
  loading?: boolean;
}

export function MobileBottomCTABar({ 
  primaryLabel,
  primaryDisabled = false,
  onPrimaryClick,
  secondaryLabel,
  onSecondaryClick,
  loading = false
}: MobileBottomCTABarProps) {
  return (
    <div 
      className="sticky bottom-0 z-40 bg-white"
      style={{ 
        borderTop: '1px solid #DADADA',
        padding: '12px 16px',
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div className="flex gap-3">
        {secondaryLabel && onSecondaryClick && (
          <button
            onClick={onSecondaryClick}
            className="flex-shrink-0"
            style={{
              backgroundColor: 'transparent',
              border: '2px solid #DADADA',
              borderRadius: '8px',
              padding: '14px 20px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              color: '#1A1A1A',
              cursor: 'pointer',
              transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              minWidth: '48px'
            }}
          >
            {secondaryLabel}
          </button>
        )}
        
        <button
          onClick={onPrimaryClick}
          disabled={primaryDisabled || loading}
          className="flex-1"
          style={{
            backgroundColor: primaryDisabled ? '#DADADA' : '#1A1A1A',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 24px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: '600',
            color: '#F9F6F0',
            cursor: primaryDisabled ? 'not-allowed' : 'pointer',
            opacity: primaryDisabled ? 0.5 : 1,
            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            minHeight: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          {loading ? (
            <>
              <div 
                className="animate-spin"
                style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid #F9F6F0',
                  borderTopColor: 'transparent',
                  borderRadius: '50%'
                }}
              />
              <span>Loading...</span>
            </>
          ) : (
            primaryLabel
          )}
        </button>
      </div>
    </div>
  );
}

// ========================================
// MOBILE QUESTION HEADER
// ========================================
// Question display with optional emoji/icon

interface MobileQuestionHeaderProps {
  question: string;
  subtext?: string;
  emoji?: string;
  icon?: ReactNode;
}

export function MobileQuestionHeader({ 
  question, 
  subtext, 
  emoji,
  icon 
}: MobileQuestionHeaderProps) {
  return (
    <div className="mb-6">
      {(emoji || icon) && (
        <div className="mb-4 flex justify-center">
          {emoji ? (
            <span style={{ fontSize: '48px', lineHeight: '1' }}>{emoji}</span>
          ) : icon ? (
            <div style={{ 
              width: '56px', 
              height: '56px',
              borderRadius: '12px',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              {icon}
            </div>
          ) : null}
        </div>
      )}
      
      <h2 style={{ 
        fontFamily: 'Garamond, serif', 
        fontSize: '26px', 
        color: '#1A1A1A',
        textAlign: 'center',
        lineHeight: '130%',
        marginBottom: subtext ? '8px' : '0'
      }}>
        {question}
      </h2>
      
      {subtext && (
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '14px', 
          color: '#1A1A1A',
          opacity: 0.7,
          textAlign: 'center',
          lineHeight: '160%'
        }}>
          {subtext}
        </p>
      )}
    </div>
  );
}
