/**
 * HØLY™ Theme Provider — Root Architecture
 * 
 * Provides theme context and adaptive token system across the entire application.
 * Enables instant theme switching and ensures all components inherit from root tokens.
 * 
 * @version 3.0
 * @sacred True zero-fragmentation architecture
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Apply theme class to document root
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

/**
 * Design Token Hook
 * 
 * Provides direct access to CSS custom properties for programmatic use
 */
export function useDesignTokens() {
  const getToken = (tokenName: string): string => {
    if (typeof window === 'undefined') return '';
    return getComputedStyle(document.documentElement)
      .getPropertyValue(tokenName)
      .trim();
  };

  return {
    // Colors
    background: getToken('--background'),
    foreground: getToken('--foreground'),
    accent: getToken('--accent'),
    accentForeground: getToken('--accent-foreground'),
    
    // Shadows
    shadowHover: getToken('--shadow-hover'),
    shadowActive: getToken('--shadow-active'),
    shadowPersistent: getToken('--shadow-persistent'),
    shadowGlass: getToken('--shadow-glass'),
    
    // Motion
    durationFast: getToken('--duration-fast'),
    durationNormal: getToken('--duration-normal'),
    easeSmooth: getToken('--ease-smooth'),
    easeSacred: getToken('--ease-sacred'),
    
    // Radius
    radiusMd: getToken('--radius-md'),
    radiusLg: getToken('--radius-lg'),
    radiusXl: getToken('--radius-xl'),
    radius2xl: getToken('--radius-2xl'),
    
    // Spacing
    spaceMd: getToken('--space-md'),
    spaceLg: getToken('--space-lg'),
    spaceXl: getToken('--space-xl'),
    
    // Typography
    fontDisplay: getToken('--font-display'),
    fontBody: getToken('--font-body'),
    
    // Custom getter
    get: getToken
  };
}

export default ThemeProvider;
