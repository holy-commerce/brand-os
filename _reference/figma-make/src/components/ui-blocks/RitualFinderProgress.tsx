import { motion } from 'motion/react';

// ========================================
// RITUAL FINDER PROGRESS INDICATOR
// ========================================
// Visual step tracker for guided quiz flow

interface RitualFinderProgressProps {
  currentStep: number;
  totalSteps: number;
  isMobile?: boolean;
}

export function RitualFinderProgress({ 
  currentStep, 
  totalSteps, 
  isMobile = false 
}: RitualFinderProgressProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="w-full">
      {/* Step Counter */}
      <div className="flex items-center justify-between mb-3">
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: isMobile ? '11px' : '12px',
          color: '#1A1A1A',
          opacity: 0.6,
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Step {currentStep} of {totalSteps}
        </p>
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: isMobile ? '11px' : '12px',
          color: '#1A1A1A',
          opacity: 0.5
        }}>
          {Math.round((currentStep / totalSteps) * 100)}% Complete
        </p>
      </div>

      {/* Progress Bar */}
      <div 
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: '#DADADA' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ 
            backgroundColor: '#5E6458',
            width: `${(currentStep / totalSteps) * 100}%`
          }}
          initial={{ width: 0 }}
          animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Step Dots */}
      <div className="flex items-center justify-between mt-3">
        {steps.map((step) => (
          <div
            key={step}
            className="flex flex-col items-center gap-1"
            style={{ flex: 1 }}
          >
            <motion.div
              className="rounded-full"
              style={{
                width: isMobile ? '8px' : '10px',
                height: isMobile ? '8px' : '10px',
                backgroundColor: step <= currentStep ? '#5E6458' : '#DADADA',
                border: step === currentStep ? '2px solid #1A1A1A' : 'none'
              }}
              initial={{ scale: 0.8 }}
              animate={{ 
                scale: step === currentStep ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: isMobile ? '9px' : '10px',
              color: '#1A1A1A',
              opacity: step <= currentStep ? 0.7 : 0.4,
              fontWeight: step === currentStep ? '600' : '400'
            }}>
              {step === 1 && 'Goal'}
              {step === 2 && 'Refine'}
              {step === 3 && 'Result'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
