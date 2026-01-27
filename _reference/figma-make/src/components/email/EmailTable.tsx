import React from 'react';

interface EmailTableProps {
  width?: string;
  cellPadding?: string | number;
  cellSpacing?: string | number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

/**
 * EmailTable component that automatically wraps children in tbody for proper HTML structure
 * Prevents React DOM nesting warnings in email templates
 */
export function EmailTable({ 
  width = "100%", 
  cellPadding = "0", 
  cellSpacing = "0",
  style,
  children 
}: EmailTableProps) {
  return (
    <table width={width} cellPadding={cellPadding} cellSpacing={cellSpacing} style={style}>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}
