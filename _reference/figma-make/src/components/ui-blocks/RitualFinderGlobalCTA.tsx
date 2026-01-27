// ========================================
// RITUAL FINDER GLOBAL CTA BAR
// ========================================
// Global sticky overlay for "Discover My Ritual" CTA
// Sits on top of all document elements with z-index priority

interface RitualFinderGlobalCTAProps {
  isVisible: boolean;
  canProceed: boolean;
  onBack: () => void;
  onDiscover: () => void;
}

export function RitualFinderGlobalCTA({ 
  isVisible, 
  canProceed, 
  onBack, 
  onDiscover 
}: RitualFinderGlobalCTAProps) {
  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white"
      style={{ 
        borderTop: '1px solid #DADADA',
        padding: '12px 16px',
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.04)',
        zIndex: 9999 // Global overlay priority
      }}
    >
      <div className="flex gap-3">
        <button
          onClick={onBack}
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
            minWidth: '48px'
          }}
        >
          Back
        </button>
        
        <button
          onClick={() => canProceed && onDiscover()}
          disabled={!canProceed}
          className="flex-1"
          style={{
            backgroundColor: canProceed ? '#1A1A1A' : '#DADADA',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 24px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: '600',
            color: '#F9F6F0',
            cursor: canProceed ? 'pointer' : 'not-allowed',
            opacity: canProceed ? 1 : 0.5,
            minHeight: '48px'
          }}
        >
          Discover My Ritual
        </button>
      </div>
    </div>
  );
}
