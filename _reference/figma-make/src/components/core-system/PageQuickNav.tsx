import { ChevronRight } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

interface PageQuickNavProps {
  title?: string;
  items: NavItem[];
}

/**
 * PageQuickNav - Quick navigation component for long pages with multiple sections
 * Provides anchor links to scroll to specific sections within a page
 */
export function PageQuickNav({ title = "Quick Navigation", items }: PageQuickNavProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
      <h3 style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize: '14px', 
        fontWeight: '600', 
        color: '#1A1A1A',
        marginBottom: '16px',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        opacity: 0.7
      }}>
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: '#1A1A1A',
              border: '1px solid #DADADA',
              backgroundColor: '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            <ChevronRight size={14} style={{ color: '#1A1A1A', opacity: 0.5 }} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
