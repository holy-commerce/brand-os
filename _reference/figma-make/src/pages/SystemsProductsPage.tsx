/**
 * HØLY™ Design System — Systems & Products Page
 * 
 * Master reference for all HØLY™ systems and SKUs with proper trademark enforcement.
 * Codifies the brand's core offering across 5 ritual verticals and complete product SKUs.
 * Organized by system with consistent card layout and proper hierarchy.
 */

import { useState } from 'react';
import { Download, Copy, Check } from 'lucide-react';
import { 
  HOLYPackage, 
  HOLYGem,
  HOLYIconAftercare,
  HOLYIconRenewal,
  HOLYIconTouch,
  HOLYIconUnion,
  HOLYIconVital
} from '../components/icons/HOLYIcons';
import { LabelStack, PurposeLabel, TimeLabel, TM, renderWithTM } from '../components/core-system';
import { 
  HOLY_PRODUCT_DATABASE, 
  exportAsCSV, 
  exportAsJSON,
  getSystemSummary 
} from '../components/ProductDatabase';

export default function SystemsProductsPage() {
  const [copied, setCopied] = useState<'csv' | 'json' | null>(null);

  const handleCopyCSV = () => {
    navigator.clipboard.writeText(exportAsCSV());
    setCopied('csv');
    setTimeout(() => setCopied(null), 2000);
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(exportAsJSON());
    setCopied('json');
    setTimeout(() => setCopied(null), 2000);
  };

  const handleDownloadCSV = () => {
    const blob = new Blob([exportAsCSV()], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'holy-product-database.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([exportAsJSON()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'holy-product-database.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-12">
      
      {/* Page Header */}
      <div className="p-8 rounded-2xl bg-white border-2 border-[#DADADA]">
        <div className="flex items-center gap-3 mb-3">
          <HOLYPackage size={32} color="#1A1A1A" />
          <h1 style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
            {renderWithTM('HØLY™ / Systems & Products')}
          </h1>
        </div>
        <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
          Master reference for all {renderWithTM('HØLY™')} systems and SKUs. Five ritual care verticals designed to elevate healing, beauty, embodiment, intimacy, and longevity through intentional product design and sacred language.
        </p>
      </div>

      {/* Product Database Export */}
      <div className="p-8 rounded-2xl bg-white border-2 border-[#DADADA]">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Download size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Exportable Product Database
            </h2>
          </div>
          <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
            Complete catalog of all 33 HØLY™ SKUs with full metadata. Export as CSV or JSON for integration, reference, or documentation.
          </p>
        </div>

        {/* Database Summary */}
        <div className="p-6 rounded-xl mb-6" style={{ backgroundColor: '#F9F6F0', border: '1px solid #D7D0C5' }}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
            {getSystemSummary().map((system) => {
              const systemNames: Record<string, string> = {
                AFT: 'Ritual Aftercare™',
                REN: 'Ritual Renewal™',
                TCH: 'Ritual Touch™',
                UNI: 'Ritual Union™',
                VIT: 'Ritual Vital™'
              };
              return (
                <div key={system.code} className="text-center">
                  <div style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A' }}>
                    {system.count}
                  </div>
                  <div className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    {systemNames[system.code]}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center pt-4 border-t" style={{ borderColor: '#D7D0C5' }}>
            <div style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A' }}>
              33 Total Products
            </div>
            <div className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
              Across 5 ritual care systems
            </div>
          </div>
        </div>

        {/* Export Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleDownloadCSV}
            className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all"
            style={{ 
              backgroundColor: '#1A1A1A', 
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <Download size={18} />
            Download CSV
          </button>
          <button
            onClick={handleCopyCSV}
            className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all"
            style={{ 
              backgroundColor: copied === 'csv' ? '#5E6458' : '#FFFFFF',
              color: copied === 'csv' ? '#FFFFFF' : '#1A1A1A',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              border: '2px solid #DADADA',
              cursor: 'pointer'
            }}
          >
            {copied === 'csv' ? <Check size={18} /> : <Copy size={18} />}
            {copied === 'csv' ? 'Copied!' : 'Copy CSV'}
          </button>
          <button
            onClick={handleDownloadJSON}
            className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all"
            style={{ 
              backgroundColor: '#1A1A1A', 
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <Download size={18} />
            Download JSON
          </button>
          <button
            onClick={handleCopyJSON}
            className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all"
            style={{ 
              backgroundColor: copied === 'json' ? '#5E6458' : '#FFFFFF',
              color: copied === 'json' ? '#FFFFFF' : '#1A1A1A',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              border: '2px solid #DADADA',
              cursor: 'pointer'
            }}
          >
            {copied === 'json' ? <Check size={18} /> : <Copy size={18} />}
            {copied === 'json' ? 'Copied!' : 'Copy JSON'}
          </button>
        </div>

        {/* Database Fields Reference */}
        <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', marginBottom: '8px' }}>
            <strong>Exported Fields:</strong>
          </p>
          <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', lineHeight: '160%' }}>
            Index • SKU • Product Name • System • Focus Area • Function/Purpose • Core Materials • Application & Experience • Purpose Labels • Time Labels
          </p>
        </div>
      </div>

      {/* Product Classification System - Now using unified Label System */}
      {/* See LabelSystemPage for complete label documentation */}

      {/* Ritual Care™ System Index */}
      <div className="p-8 rounded-2xl bg-white border-2 border-[#DADADA]">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <HOLYGem size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              {renderWithTM('Ritual Care™ System Index')}
            </h2>
          </div>
          <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
            Five system verticals define {renderWithTM("HØLY's™")} approach to ritual wellness across healing, renewal, touch, connection, and vitality.
          </p>
        </div>

        {/* Systems Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[#DADADA]">
                <th className="text-left p-4 bg-[#F9F6F0]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A' }}>
                  System Name
                </th>
                <th className="text-left p-4 bg-[#F9F6F0]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A' }}>
                  Focus Area
                </th>
                <th className="text-left p-4 bg-[#F9F6F0]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A' }}>
                  Product Count
                </th>
                <th className="text-left p-4 bg-[#F9F6F0]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A' }}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#DADADA]">
                <td className="p-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A' }}>
                  {renderWithTM('Ritual Aftercare™')}
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
                  Piercing Healing
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
                  10 SKUs
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Cleansing, protection, comfort, and scar repair
                </td>
              </tr>
              <tr className="border-b border-[#DADADA]">
                <td className="p-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A' }}>
                  {renderWithTM('Ritual Renewal™')}
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
                  Skin & Beauty
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
                  6 SKUs
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Red light prep, exfoliation, barrier restoration
                </td>
              </tr>
              <tr className="border-b border-[#DADADA]">
                <td className="p-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A' }}>
                  {renderWithTM('Ritual Touch™')}
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
                  Body Tools
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
                  5 SKUs
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Massage, lymph care, oils, embodied pleasure
                </td>
              </tr>
              <tr className="border-b border-[#DADADA]">
                <td className="p-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A' }}>
                  {renderWithTM('Ritual Union™')}
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
                  Intimacy
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
                  5 SKUs
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Sensual connection, affirmation, sexual wellness
                </td>
              </tr>
              <tr>
                <td className="p-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A' }}>
                  {renderWithTM('Ritual Vital™')}
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
                  Longevity
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
                  7 SKUs
                </td>
                <td className="p-4 opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Breath, heat/cold therapy, adaptogens, hydration
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ========================================
          RITUAL AFTERCARE™
          ======================================== */}
      <div className="p-8 rounded-2xl border-2 border-[#AAB5B2]" style={{ backgroundColor: 'rgba(170, 181, 178, 0.08)' }}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <HOLYIconAftercare size={24} color="#AAB5B2" />
            <h2 style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Ritual Aftercare™
            </h2>
          </div>
          <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
            Complete product ecosystem for piercing healing. Ten essential SKUs designed to cleanse, protect, comfort, and restore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* hølymist™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#AAB5B2]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølymist™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-AFT-001
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Cleanse" size="sm" />
                <PurposeLabel purpose="Hydrate" size="sm" />
                <TimeLabel time="Ritual" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Gently cleanses and hydrates fresh piercings with sterile saline mist
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  0.9% sterile saline solution in pressurized spray bottle
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Spray 2-3 times daily. Ultra-fine mist ensures gentle, thorough coverage
                </p>
              </div>
            </div>
          </div>

          {/* hølyrest™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#AAB5B2]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølyrest™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-AFT-002
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Protect" size="sm" />
                <TimeLabel time="Evening" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Protects healing piercings during sleep with ergonomic ear suspension
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Memory foam core with central slit for ear suspension
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Place ear in slit to suspend piercing. Zero-pressure healing
                </p>
              </div>
            </div>
          </div>

          {/* hølyveil™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#AAB5B2]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølyveil™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-AFT-003
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Protect" size="sm" />
                <TimeLabel time="Evening" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Silky, hypoallergenic pillowcase that fits seamlessly over hølyrest™
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Bamboo silk blend or organic cotton sateen
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Daily visible layer. Like luxury bedding for your healing ritual
                </p>
              </div>
            </div>
          </div>

          {/* hølyring™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#AAB5B2]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølyring™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-AFT-004
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Protect" size="sm" />
                <TimeLabel time="Ritual" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Reinforces slit opening on DTC hølyrest™ for consistent suspension
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Medical-grade silicone ring with smooth edges
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Insert into slit. Rinse with warm water and mild soap
                </p>
              </div>
            </div>
          </div>

          {/* hølycup™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#AAB5B2]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølycup™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-AFT-005
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Protect" size="sm" />
                <TimeLabel time="Evening" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Portable donut-style insert compatible with any pillow (Amazon version)
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Soft-touch silicone or memory foam donut insert
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Place on any pillow. Wipe with cleanser. Travel ready
                </p>
              </div>
            </div>
          </div>

          {/* hølyguard™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#AAB5B2]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølyguard™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-AFT-006
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Protect" size="sm" />
                <TimeLabel time="Ritual" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Shields jewelry from friction, snagging, and irritation during healing
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Medical-grade adhesive disk with breathable silicone dome
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Peel and apply over jewelry. Wear during sports or high-contact activities
                </p>
              </div>
            </div>
          </div>

          {/* hølypatch™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#AAB5B2]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølypatch™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-AFT-007
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Treat" size="sm" />
                <TimeLabel time="Evening" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Targeted treatment for piercing bumps and irritation keloids
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Hydrocolloid patch with soothing serum (chamomile, tea tree)
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Apply to clean, dry bump overnight. Remove gently in morning
                </p>
              </div>
            </div>
          </div>

          {/* hølywand™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#AAB5B2]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølywand™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-AFT-008
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Cleanse" size="sm" />
                <TimeLabel time="Ritual" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Precisely removes crust buildup without disturbing healing tissue
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Ultra-soft microfiber tips on precision stick (disposable)
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Soak tip in saline. Gently sweep around piercing. Discard after use
                </p>
              </div>
            </div>
          </div>

          {/* hølykit™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#AAB5B2]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølykit™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-AFT-009
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Cleanse" size="sm" />
                <PurposeLabel purpose="Protect" size="sm" />
                <TimeLabel time="Ritual" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  All-in-one starter kit with essential aftercare products for new piercings
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Curated bundle: hølymist™, hølyrest™, hølyveil™, hølywand™, hølyguard™
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Everything you need for healing. Premium packaging with ritual guide
                </p>
              </div>
            </div>
          </div>

          {/* hølyshroud™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#AAB5B2]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølyshroud™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-AFT-010
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Protect" size="sm" />
                <TimeLabel time="Evening" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Protective barrier between hølyrest™ and hølyveil™ for hygiene
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Waterproof breathable membrane with soft cotton lining
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Slip over hølyrest™ before applying hølyveil™. Machine washable
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================
          RITUAL RENEWAL™
          ======================================== */}
      <div className="p-8 rounded-2xl border-2 border-[#D9C4BB]" style={{ backgroundColor: 'rgba(217, 196, 187, 0.12)' }}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <HOLYIconRenewal size={24} color="#D9C4BB" strokeWidth={1.5} />
            <h2 style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Ritual Renewal™
            </h2>
          </div>
          <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
            Skin renewal and beauty ritual system. Six SKUs for red light therapy prep, exfoliation, hydration, and barrier restoration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* hølyprep™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#D9C4BB]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølyprep™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-REN-001
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Prep" size="sm" />
                <PurposeLabel purpose="Hydrate" size="sm" />
                <TimeLabel time="Ritual" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Antioxidant thermal mist prepares skin for red light therapy sessions
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Rose water, niacinamide, hyaluronic acid, vitamin C
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Mist face before red light sessions. Enhances light penetration
                </p>
              </div>
            </div>
          </div>

          {/* hølybuff™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#D9C4BB]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølybuff™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-REN-002
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Prep" size="sm" />
                <TimeLabel time="Evening" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Enzyme exfoliator for gentle radiant ritual resurfacing
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Papaya enzymes, lactic acid, aloe vera, kaolin clay
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Apply to damp skin 2-3x weekly. Massage gently. Rinse with warm water
                </p>
              </div>
            </div>
          </div>

          {/* hølymask™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#D9C4BB]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølymask™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-REN-003
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Treat" size="sm" />
                <PurposeLabel purpose="Hydrate" size="sm" />
                <TimeLabel time="Ritual" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Bioactive face mask optimized for use during red light therapy
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Collagen peptides, niacinamide, centella asiatica, hyaluronic acid
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Apply before red light. Leave on 10-15 minutes. Enhances therapy benefits
                </p>
              </div>
            </div>
          </div>

          {/* hølybarrier™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#D9C4BB]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølybarrier™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-REN-004
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Treat" size="sm" />
                <PurposeLabel purpose="Protect" size="sm" />
                <TimeLabel time="Evening" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Post-exfoliation ceramide serum restores skin barrier integrity
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Ceramide complex, squalane, peptides, niacinamide
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Apply after exfoliation or cleansing. Press gently into skin
                </p>
              </div>
            </div>
          </div>

          {/* hølyglow™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#D9C4BB]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølyglow™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-REN-005
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Hydrate" size="sm" />
                <TimeLabel time="Morning" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Brightening hydration dew for radiant luminosity and deep moisture
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Vitamin C, licorice root, glycerin, rose water, pearl extract
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Apply morning and evening after cleansing. Lightweight, dewy finish
                </p>
              </div>
            </div>
          </div>

          {/* hølytone™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#D9C4BB]">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                    hølytone™
                  </h3>
                  <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                    SKU: HOLY-REN-006
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <PurposeLabel purpose="Prep" size="sm" />
                <TimeLabel time="Ritual" size="sm" />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Mineral balancing toner preps skin and restores pH balance
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Witch hazel, rose water, niacinamide, mineral salts, aloe
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Apply with cotton pad after cleansing. Refreshing, cooling sensation
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================
          RITUAL TOUCH™
          ======================================== */}
      <div className="p-8 rounded-2xl border-2 border-[#9C887A]" style={{ backgroundColor: 'rgba(156, 136, 122, 0.10)' }}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <HOLYIconTouch size={24} color="#9C887A" />
            <h2 style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Ritual Touch™
            </h2>
          </div>
          <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
            Body tools and embodied pleasure ritual system. Five SKUs for massage, lymphatic care, exfoliation, and sensory connection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* hølyoil™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#9C887A]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølyoil™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-TCH-001
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Sensual ritual body oil for massage and embodied pleasure practices
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Jojoba oil, sweet almond oil, vitamin E, jasmine, sandalwood
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Warm in palms. Apply to body with slow, intentional strokes
                </p>
              </div>
            </div>
          </div>

          {/* hølytool™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#9C887A]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølytool™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-TCH-002
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Gua sha-inspired fascia wand for tension release and sculpting
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Rose quartz or stainless steel with ergonomic curves
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Use with hølyoil™. Glide along fascia lines. Apply gentle pressure
                </p>
              </div>
            </div>
          </div>

          {/* hølyroll™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#9C887A]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølyroll™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-TCH-003
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Body tool for lymphatic massage and drainage support
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Jade or obsidian roller with dual-sided design
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Roll toward lymph nodes. Use after shower. Refrigerate for cooling
                </p>
              </div>
            </div>
          </div>

          {/* hølyscrub™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#9C887A]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølyscrub™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-TCH-004
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Purifying salt and botanical exfoliant for full-body renewal
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Dead Sea salt, coconut oil, lavender, eucalyptus, sugar crystals
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Apply to damp skin in circular motions. Rinse thoroughly
                </p>
              </div>
            </div>
          </div>

          {/* hølysoak™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#9C887A]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølysoak™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-TCH-005
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Therapeutic ritual bath soak for deep relaxation and muscle recovery
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Epsom salt, magnesium flakes, chamomile, rose petals, lavender
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Add to warm bath. Soak 15-20 minutes. Breathe deeply
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================
          RITUAL UNION™
          ======================================== */}
      <div className="p-8 rounded-2xl border-2 border-[#5E6458]" style={{ backgroundColor: 'rgba(94, 100, 88, 0.08)' }}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <HOLYIconUnion size={24} color="#5E6458" />
            <h2 style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Ritual Union™
            </h2>
          </div>
          <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
            Intimacy and connection ritual system. Five SKUs for sensual wellness, affirmation, and sacred partnership practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* hølybalm™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#5E6458]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølybalm™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-UNI-001
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Intimate healing balm for comfort, moisture, and sensitive skin care
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Shea butter, calendula, vitamin E, chamomile, coconut oil
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Apply to intimate areas as needed. Soothes and protects
                </p>
              </div>
            </div>
          </div>

          {/* hølyscent™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#5E6458]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølyscent™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-UNI-002
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Scent ritual for sensual connection and aromatherapy intimacy
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Ylang ylang, patchouli, vanilla, bergamot essential oil blend
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Diffuse or apply to pulse points. Creates sacred ambiance
                </p>
              </div>
            </div>
          </div>

          {/* hølyyes™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#5E6458]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølyyes™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-UNI-003
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Affirmation deck or sensory ritual cards for partner connection
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Premium card stock with embossed HØLY™ mark, linen texture
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Draw cards together. Read prompts aloud. Explore and affirm
                </p>
              </div>
            </div>
          </div>

          {/* hølytouch™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#5E6458]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølytouch™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-UNI-004
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Couples' massage oil for shared ritual and tender connection
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Grapeseed oil, rose otto, neroli, vanilla, skin-safe warming agents
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Warm between palms. Apply with slow, intentional touch
                </p>
              </div>
            </div>
          </div>

          {/* hølypulse™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#5E6458]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølypulse™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-UNI-005
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Tool or wearable for rhythmic intimacy practice and breath sync
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Vibration module, silicone casing, guided rhythm patterns
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Follow breath prompts. Sync rhythm with partner. Deepens presence
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================
          RITUAL VITAL™
          ======================================== */}
      <div className="p-8 rounded-2xl border-2 border-[#D7D0C5]" style={{ backgroundColor: 'rgba(215, 208, 197, 0.15)' }}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <HOLYIconVital size={24} color="#D7D0C5" />
            <h2 style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Ritual Vital™
            </h2>
          </div>
          <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
            Longevity and vitality ritual system. Seven SKUs for breathwork, heat/cold therapy, adaptogens, and nervous system support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* hølyvitality™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#D7D0C5]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølyvitality™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-VIT-001
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Daily adaptogen and longevity complex for sustained energy and resilience
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Ashwagandha, rhodiola, cordyceps, lion's mane, reishi, CoQ10
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Take 2 capsules daily with water. Morning ritual for vitality
                </p>
              </div>
            </div>
          </div>

          {/* hølyresurge™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#D7D0C5]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølyresurge™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-VIT-002
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Nighttime nervous system serum for deep rest and cellular repair
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Magnesium glycinate, L-theanine, GABA, passionflower, valerian
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Take 1 hour before sleep. Supports restorative rest cycles
                </p>
              </div>
            </div>
          </div>

          {/* hølyshield™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#D7D0C5]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølyshield™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-VIT-003
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Environmental defense veil protects against pollution and oxidative stress
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Niacinamide, vitamin C, green tea extract, peptides, SPF minerals
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Apply as final skincare step. Lightweight barrier with antioxidants
                </p>
              </div>
            </div>
          </div>

          {/* hølycalm™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#D7D0C5]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølycalm™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-VIT-004
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Breathwork and aromatherapy sensory set for stress regulation
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Inhaler stick with lavender, frankincense, guided breath card
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Inhale deeply. Follow breath pattern. Resets nervous system
                </p>
              </div>
            </div>
          </div>

          {/* hølybodyregen™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#D7D0C5]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølybodyregen™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-VIT-005
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Fascia-support body treatment for muscle recovery and flexibility
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Arnica, magnesium oil, CBD, collagen peptides, menthol
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Massage into sore muscles post-workout. Cooling, soothing relief
                </p>
              </div>
            </div>
          </div>

          {/* hølyfire™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#D7D0C5]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølyfire™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-VIT-006
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Heat therapy balm or wrap for circulation and deep tissue warmth
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Capsaicin, ginger extract, cinnamon, warming clay, infrared fabric
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Apply to target area. Gentle warming sensation. Enhances blood flow
                </p>
              </div>
            </div>
          </div>

          {/* hølyflow™ */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#D7D0C5]">
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
                hølyflow™
              </h3>
              <p className="opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
                SKU: HOLY-VIT-007
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Function / Purpose
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Circulation and energy elixir for vitality and hydration support
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Core Materials
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Ginseng, beetroot extract, cayenne, B-vitamins, electrolytes
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>
                  Application & Experience
                </p>
                <p className="opacity-70" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', lineHeight: '160%' }}>
                  Mix with water. Drink before exercise or morning ritual. Energizing
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
