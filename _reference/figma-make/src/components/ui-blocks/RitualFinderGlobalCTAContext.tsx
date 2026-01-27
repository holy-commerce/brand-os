import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface RitualFinderCTAState {
  isVisible: boolean;
  canProceed: boolean;
  onBack: () => void;
  onDiscover: () => void;
}

interface RitualFinderCTAContextType {
  ctaState: RitualFinderCTAState;
  setCTAState: (state: RitualFinderCTAState) => void;
  hideCTA: () => void;
}

const RitualFinderCTAContext = createContext<RitualFinderCTAContextType | undefined>(undefined);

export function RitualFinderCTAProvider({ children }: { children: ReactNode }) {
  const [ctaState, setCTAState] = useState<RitualFinderCTAState>({
    isVisible: false,
    canProceed: false,
    onBack: () => {},
    onDiscover: () => {}
  });

  const hideCTA = useCallback(() => {
    setCTAState(prev => ({ ...prev, isVisible: false }));
  }, []);

  const updateCTAState = useCallback((state: RitualFinderCTAState) => {
    setCTAState(state);
  }, []);

  return (
    <RitualFinderCTAContext.Provider value={{ ctaState, setCTAState: updateCTAState, hideCTA }}>
      {children}
    </RitualFinderCTAContext.Provider>
  );
}

export function useRitualFinderCTA() {
  const context = useContext(RitualFinderCTAContext);
  if (context === undefined) {
    throw new Error('useRitualFinderCTA must be used within RitualFinderCTAProvider');
  }
  return context;
}
