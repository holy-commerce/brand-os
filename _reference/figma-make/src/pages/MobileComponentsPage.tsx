import { HOLYSparkle, HOLYCircle, HOLYCart, HOLYHeart, HOLYCompass, HOLYDroplet, HOLYLeaf } from '../components/icons/HOLYIcons';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { 
  MobileProgressIndicator, 
  MobileChoiceCard, 
  MobileQuizContainer,
  MobileBottomCTABar,
  MobileQuestionHeader
} from '../components/ui-blocks/RitualFinderMobile';
import { Home, Search, Heart, User, ChevronLeft, ShoppingBag, Plus, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function MobileComponentsPage() {
  const [activeTab, setActiveTab] = useState('home');
  const [liked, setLiked] = useState(false);

  return (
    <div className="space-y-8">
      {/* Page Info */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <HOLYCircle size={24} color="#1A1A1A" />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
              Mobile App Components — HØLY™
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Mobile-first components optimized for iOS and Android. Built with touch-first interactions, 48px minimum touch targets, and gesture-based navigation patterns.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* MOBILE TOKENS REFERENCE */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYSparkle size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Mobile Design Tokens
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Touch-optimized spacing, typography, and interaction patterns for mobile devices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Typography */}
            <div>
              <h3 className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                Typography (Mobile)
              </h3>
              <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '180%' }}>
                <p><strong>Display:</strong> Garamond, serif</p>
                <p><strong>UI/Body:</strong> Inter, sans-serif</p>
                <p><strong>H1:</strong> 28px / 120%</p>
                <p><strong>H2:</strong> 22px / 130%</p>
                <p><strong>H3:</strong> 18px / 140%</p>
                <p><strong>Body:</strong> 16px / 160%</p>
                <p><strong>Small:</strong> 14px / 150%</p>
                <p><strong>Caption:</strong> 12px / 140%</p>
              </div>
            </div>

            {/* Touch Targets */}
            <div>
              <h3 className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                Touch Targets
              </h3>
              <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '180%' }}>
                <p><strong>Minimum:</strong> 48px × 48px</p>
                <p><strong>Primary Button:</strong> 48px height, full-width</p>
                <p><strong>Icon Button:</strong> 48px × 48px</p>
                <p><strong>Tab Bar Item:</strong> 56px height</p>
                <p><strong>List Item:</strong> 56px min height</p>
                <p><strong>FAB:</strong> 56px × 56px</p>
              </div>
            </div>

            {/* Spacing */}
            <div>
              <h3 className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                Spacing (Mobile)
              </h3>
              <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '180%' }}>
                <p><strong>Screen Padding:</strong> 16px</p>
                <p><strong>Section Gap:</strong> 24px</p>
                <p><strong>Card Gap:</strong> 12px</p>
                <p><strong>Element Gap:</strong> 8px</p>
                <p><strong>Safe Area:</strong> Top/bottom insets</p>
                <p><strong>Bottom Nav:</strong> 80px reserved</p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE BOTTOM NAVIGATION */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-2">
              <HOLYCompass size={24} color="#1A1A1A" />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                HØLY / Mobile / Bottom Navigation
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              Primary navigation pattern with 4-5 tab items. 56px height for comfortable thumb reach.
            </p>
          </div>

          {/* Mobile Frame */}
          <div className="mx-auto" style={{ maxWidth: '375px', height: '80px', backgroundColor: '#FFFFFF', border: '2px solid #1A1A1A', borderRadius: '12px 12px 0 0', position: 'relative' }}>
            <div className="flex items-center justify-around h-full px-4">
              {[
                { id: 'home', icon: Home, label: 'Home' },
                { id: 'explore', icon: Search, label: 'Explore' },
                { id: 'rituals', icon: HOLYSparkle, label: 'Rituals', isCustom: true },
                { id: 'saved', icon: Heart, label: 'Saved' },
                { id: 'account', icon: User, label: 'Account' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex flex-col items-center justify-center gap-1"
                  style={{
                    minWidth: '48px',
                    minHeight: '48px',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    padding: '4px'
                  }}
                >
                  {tab.isCustom ? (
                    <HOLYSparkle 
                      size={24} 
                      color={activeTab === tab.id ? '#1A1A1A' : '#9C887A'} 
                    />
                  ) : (
                    <tab.icon 
                      size={24} 
                      strokeWidth={activeTab === tab.id ? 2.5 : 2}
                      color={activeTab === tab.id ? '#1A1A1A' : '#9C887A'} 
                    />
                  )}
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    color: activeTab === tab.id ? '#1A1A1A' : '#9C887A',
                    fontWeight: activeTab === tab.id ? '600' : '400'
                  }}>
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0' }}>
              <h4 className="mb-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600' }}>
                Active State
              </h4>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', lineHeight: '160%' }}>
                Color: Temple Black #1A1A1A, stroke 2.5px, font-weight 600
              </p>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0' }}>
              <h4 className="mb-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600' }}>
                Inactive State
              </h4>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', lineHeight: '160%' }}>
                Color: Smoky Umber #9C887A, stroke 2px, font-weight 400
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE HEADER */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #5E6458' }}>
          <div className="mb-6">
            <h2 className="mb-2" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
              HØLY / Mobile / Header
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Mobile navigation headers with back button, title, and optional action buttons.
            </p>
          </div>

          <div className="space-y-6">
            {/* Standard Header with Back */}
            <div>
              <p className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600' }}>
                Standard Header (with back)
              </p>
              <div className="mx-auto" style={{ maxWidth: '375px', height: '56px', backgroundColor: '#FFFFFF', border: '2px solid #1A1A1A', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '0 16px', justifyContent: 'space-between' }}>
                <button style={{ minWidth: '48px', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <ChevronLeft size={24} color="#1A1A1A" />
                </button>
                <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', margin: 0 }}>
                  Ritual Aftercare™
                </h1>
                <div style={{ minWidth: '48px' }}></div>
              </div>
            </div>

            {/* Header with Action */}
            <div>
              <p className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600' }}>
                Header with Action
              </p>
              <div className="mx-auto" style={{ maxWidth: '375px', height: '56px', backgroundColor: '#FFFFFF', border: '2px solid #1A1A1A', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '0 16px', justifyContent: 'space-between' }}>
                <button style={{ minWidth: '48px', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <ChevronLeft size={24} color="#1A1A1A" />
                </button>
                <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', margin: 0 }}>
                  Product Details
                </h1>
                <button style={{ minWidth: '48px', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <ShoppingBag size={22} color="#1A1A1A" />
                </button>
              </div>
            </div>

            {/* Branded Header */}
            <div>
              <p className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600' }}>
                Branded Header (Home)
              </p>
              <div className="mx-auto" style={{ maxWidth: '375px', height: '56px', backgroundColor: '#FFFFFF', border: '2px solid #1A1A1A', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '0 16px', justifyContent: 'space-between' }}>
                <div className="flex items-center gap-2">
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#F9F6F0', margin: 0, lineHeight: 1 }}>ø</p>
                  </div>
                  <span style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', letterSpacing: '0.5px' }}>
                    HØLY™
                  </span>
                </div>
                <button style={{ minWidth: '48px', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <Search size={22} color="#1A1A1A" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE PRODUCT CARD */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #5E6458' }}>
          <div className="mb-6">
            <h2 className="mb-2" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
              HØLY / Mobile / Product Card
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Mobile-optimized product cards with touch-friendly interactions and quick actions.
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: '375px' }}>
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
              {/* Product Image */}
              <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', backgroundColor: '#D7D0C5' }}>
                <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                  <button 
                    onClick={() => setLiked(!liked)}
                    style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <Heart size={22} color={liked ? '#1A1A1A' : '#9C887A'} fill={liked ? '#1A1A1A' : 'none'} />
                  </button>
                </div>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', margin: 0 }}>
                    [Product Image]
                  </p>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', margin: '0 0 4px 0', lineHeight: '130%' }}>
                      Ritual Aftercare™
                    </h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', margin: 0, opacity: 0.7 }}>
                      Saline Piercing Cleanser
                    </p>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1A1A1A', margin: 0, fontWeight: '600' }}>
                    $24
                  </p>
                </div>

                {/* Quick Add Button */}
                <button className="w-full mt-3 rounded-xl transition-all" style={{
                  padding: '14px',
                  backgroundColor: '#1A1A1A',
                  color: '#F9F6F0',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  minHeight: '48px'
                }}>
                  Begin Your Ritual
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE FULL-SCREEN MODAL */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #5E6458' }}>
          <div className="mb-6">
            <h2 className="mb-2" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
              HØLY / Mobile / Modal
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Full-screen modal dialogs for mobile actions, filters, and detailed content.
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: '375px', height: '600px', backgroundColor: '#F9F6F0', border: '2px solid #1A1A1A', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Modal Header */}
            <div style={{ padding: '16px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #DADADA', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <button style={{ minWidth: '48px', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer' }}>
                <ChevronLeft size={24} color="#1A1A1A" />
              </button>
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', margin: 0 }}>
                Filter Rituals
              </h2>
              <button style={{ 
                minWidth: '48px', 
                minHeight: '48px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: 'none', 
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1A1A1A'
              }}>
                Clear
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
              <div className="space-y-4">
                {/* Filter Option */}
                {['Ritual Type', 'Piercing Location', 'Price Range', 'Ingredients'].map((filter, idx) => (
                  <button 
                    key={idx}
                    className="w-full p-4 rounded-xl flex items-center justify-between transition-all"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #DADADA',
                      cursor: 'pointer',
                      minHeight: '56px'
                    }}
                  >
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '500' }}>
                      {filter}
                    </span>
                    <ChevronLeft size={20} color="#1A1A1A" style={{ transform: 'rotate(180deg)' }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '16px', backgroundColor: '#FFFFFF', borderTop: '1px solid #DADADA' }}>
              <button className="w-full rounded-xl" style={{
                padding: '16px',
                backgroundColor: '#1A1A1A',
                color: '#F9F6F0',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                minHeight: '56px'
              }}>
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* FLOATING ACTION BUTTON (FAB) */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #5E6458' }}>
          <div className="mb-6">
            <h2 className="mb-2" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
              HØLY / Mobile / FAB & Cart Button
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Floating action buttons for quick access to cart, rituals, or primary actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Standard FAB */}
            <div className="flex flex-col items-center gap-4 p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0' }}>
              <button style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#1A1A1A',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}>
                <Plus size={28} color="#F9F6F0" strokeWidth={2.5} />
              </button>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', textAlign: 'center' }}>
                Standard FAB
              </p>
            </div>

            {/* Cart FAB with Badge */}
            <div className="flex flex-col items-center gap-4 p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0' }}>
              <div style={{ position: 'relative' }}>
                <button style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#1A1A1A',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}>
                  <ShoppingBag size={24} color="#F9F6F0" strokeWidth={2} />
                </button>
                <div style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#5E6458',
                  border: '2px solid #F9F6F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#F9F6F0', fontWeight: '600' }}>
                    3
                  </span>
                </div>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', textAlign: 'center' }}>
                Cart FAB (Badge)
              </p>
            </div>

            {/* Ritual FAB */}
            <div className="flex flex-col items-center gap-4 p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0' }}>
              <button style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#D9C4BB',
                border: '2px solid #1A1A1A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <HOLYSparkle size={24} color="#1A1A1A" />
              </button>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', textAlign: 'center' }}>
                Ritual FAB
              </p>
            </div>
          </div>
        </div>

        {/* TOUCH STATES & INTERACTIONS */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #5E6458' }}>
          <div className="mb-6">
            <h2 className="mb-2" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
              HØLY / Mobile / Touch States
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Interactive states for touch feedback including press, active, and disabled states.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Button States */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0' }}>
              <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
                Button Touch States
              </h3>
              <div className="space-y-3">
                {/* Default */}
                <button className="w-full rounded-xl" style={{
                  padding: '14px',
                  backgroundColor: '#1A1A1A',
                  color: '#F9F6F0',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  minHeight: '48px'
                }}>
                  Default State
                </button>

                {/* Pressed (with opacity) */}
                <button className="w-full rounded-xl" style={{
                  padding: '14px',
                  backgroundColor: '#1A1A1A',
                  color: '#F9F6F0',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  minHeight: '48px',
                  opacity: 0.7
                }}>
                  Pressed State (70% opacity)
                </button>

                {/* Disabled */}
                <button className="w-full rounded-xl" style={{
                  padding: '14px',
                  backgroundColor: '#DADADA',
                  color: '#9C887A',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'not-allowed',
                  minHeight: '48px'
                }}>
                  Disabled State
                </button>
              </div>
            </div>

            {/* Card Press States */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0' }}>
              <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
                Card Touch States
              </h3>
              <div className="space-y-3">
                {/* Default */}
                <div className="p-4 rounded-xl transition-all" style={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #DADADA',
                  cursor: 'pointer'
                }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', margin: 0 }}>
                    Default Card
                  </p>
                </div>

                {/* Pressed */}
                <div className="p-4 rounded-xl transition-all" style={{
                  backgroundColor: '#D7D0C5',
                  border: '2px solid #1A1A1A',
                  cursor: 'pointer'
                }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', margin: 0 }}>
                    Pressed Card (background change)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Touch Feedback Guidelines */}
          <div className="mt-6 p-6 rounded-xl" style={{ backgroundColor: '#1A1A1A' }}>
            <h4 className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', fontWeight: '600' }}>
              Touch Feedback Guidelines
            </h4>
            <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', lineHeight: '160%' }}>
              <p>• <strong>Buttons:</strong> 70% opacity on press, 150ms transition</p>
              <p>• <strong>Cards:</strong> Background color shift + border change on press</p>
              <p>• <strong>Icons:</strong> Scale 0.95 on press for tactile feedback</p>
              <p>• <strong>Lists:</strong> Subtle background highlight on press</p>
              <p>• <strong>Haptics:</strong> Use light haptic feedback for confirmations</p>
              <p>• <strong>Animation:</strong> Keep under 200ms for responsive feel</p>
            </div>
          </div>
        </div>

        {/* MOBILE QUIZ COMPONENTS */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #AAB5B2' }}>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-6 h-6" style={{ color: '#AAB5B2' }} />
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
                Mobile Quiz Components
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Purpose-built components for mobile-first quiz and discovery flows. Used in Ritual Finder Engine.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
              Mobile Progress Indicator
            </h3>
            <div className="mb-4">
              <MobileProgressIndicator currentStep={2} totalSteps={3} stepLabel="Primary Goal" />
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                <strong>Usage:</strong> Sticky top progress bar for multi-step flows. Shows current step, total steps, 
                and optional label. Reduces quiz abandonment by showing progress visually.
              </p>
            </div>
          </div>

          {/* Choice Card */}
          <div className="mb-8">
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
              Mobile Choice Card
            </h3>
            <div className="space-y-3 mb-4">
              <MobileChoiceCard
                title="Healing & Recovery"
                description="Post-intimacy restoration"
                icon={<HOLYDroplet size={24} color="#AAB5B2" opacity={1} strokeWidth={1.5} />}
                color="#AAB5B2"
                selected={true}
                onClick={() => {}}
              />
              <MobileChoiceCard
                title="Touch & Sensation"
                description="Intimate wellness"
                icon={<HOLYLeaf size={24} color="#5E6458" opacity={1} strokeWidth={1.5} />}
                color="#5E6458"
                selected={false}
                onClick={() => {}}
              />
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                <strong>Usage:</strong> Large, thumb-friendly card button for quiz options. ≥48px touch target, 
                icon + title + description layout. Supports custom system colors and radio-style selection.
              </p>
            </div>
          </div>

          {/* Question Header */}
          <div className="mb-8">
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
              Mobile Question Header
            </h3>
            <div className="mb-4 p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0' }}>
              <MobileQuestionHeader 
                question="What's your primary intention?"
                subtext="Select the path that resonates most"
                icon={<HOLYSparkle size={28} color="#C9A36D" opacity={1} strokeWidth={1.5} />}
              />
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                <strong>Usage:</strong> Centered question display with optional icon or emoji. Supports subtext 
                for additional context. Keeps questions concise (&lt;10 words recommended).
              </p>
            </div>
          </div>

          {/* Bottom CTA Bar */}
          <div className="mb-8">
            <h3 className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
              Mobile Bottom CTA Bar
            </h3>
            <div className="mb-4">
              <MobileBottomCTABar
                primaryLabel="Continue"
                primaryDisabled={false}
                onPrimaryClick={() => {}}
                secondaryLabel="Back"
                onSecondaryClick={() => {}}
              />
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                <strong>Usage:</strong> Sticky bottom action bar for mobile navigation. Primary + optional secondary button. 
                Supports disabled and loading states. Keeps CTAs accessible while scrolling content.
              </p>
            </div>
          </div>

          {/* Implementation Code */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#1A1A1A' }}>
            <h4 className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', fontWeight: '600' }}>
              Implementation Example
            </h4>
            <pre style={{ 
              fontFamily: 'monospace', 
              fontSize: '11px', 
              color: '#F9F6F0', 
              lineHeight: '160%',
              overflow: 'auto',
              padding: '12px',
              borderRadius: '8px',
              backgroundColor: 'rgba(0, 0, 0, 0.3)'
            }}>
{`import { 
  MobileProgressIndicator,
  MobileChoiceCard,
  MobileQuestionHeader,
  MobileBottomCTABar
} from '../components/ui-blocks/RitualFinderMobile';

// In your quiz component:
<MobileQuizContainer currentStep={1} totalSteps={3}>
  <MobileQuestionHeader 
    question="Choose your path"
    subtext="Select your primary intention"
  />
  
  <div className="space-y-3">
    {options.map(option => (
      <MobileChoiceCard
        key={option.id}
        title={option.title}
        description={option.description}
        icon={option.icon}
        color={option.color}
        selected={selected === option.id}
        onClick={() => setSelected(option.id)}
      />
    ))}
  </div>
  
  <MobileBottomCTABar
    primaryLabel="Continue"
    primaryDisabled={!selected}
    onPrimaryClick={handleNext}
    secondaryLabel="Back"
    onSecondaryClick={handleBack}
  />
</MobileQuizContainer>`}
            </pre>
          </div>
        </div>

        {/* MOBILE SAFE AREAS */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #5E6458' }}>
          <div className="mb-6">
            <h2 className="mb-2" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
              Mobile Safe Areas & Constraints
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Account for iOS notch, bottom gesture bar, and Android navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* iOS Safe Areas */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                iOS Safe Areas
              </h3>
              <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
                <p><strong>Top Inset:</strong> 44px (notch) + status bar</p>
                <p><strong>Bottom Inset:</strong> 34px (home indicator)</p>
                <p><strong>Side Insets:</strong> Safe area + 16px padding</p>
                <p><strong>Tab Bar:</strong> 80px total height (56px + inset)</p>
                <p><strong>Status Bar:</strong> Account for Dynamic Island</p>
              </div>
            </div>

            {/* Android Guidelines */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <h3 className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600' }}>
                Android Guidelines
              </h3>
              <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%' }}>
                <p><strong>Status Bar:</strong> 24dp standard height</p>
                <p><strong>Navigation Bar:</strong> 48dp (3-button) or 32dp (gesture)</p>
                <p><strong>Material Design:</strong> 8dp grid system</p>
                <p><strong>Elevation:</strong> Use subtle shadows for depth</p>
                <p><strong>Gestures:</strong> Support swipe back navigation</p>
              </div>
            </div>
          </div>
        </div>

        {/* IMPLEMENTATION NOTES */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#5E6458' }}>
          <h2 className="mb-4" style={{ fontFamily: 'Garamond, serif', fontSize: '22px', fontWeight: '500', color: '#F9F6F0', lineHeight: '120%' }}>
            Mobile Implementation Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', fontWeight: '600' }}>
                Development
              </h3>
              <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', lineHeight: '160%' }}>
                <p>• React Native or Flutter recommended</p>
                <p>• Native components for performance</p>
                <p>• Gesture handlers for smooth interactions</p>
                <p>• Lazy loading for images and lists</p>
                <p>• Offline-first data strategy</p>
                <p>• Biometric authentication support</p>
              </div>
            </div>

            <div>
              <h3 className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', fontWeight: '600' }}>
                Design Principles
              </h3>
              <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', lineHeight: '160%' }}>
                <p>• Thumb-friendly navigation (bottom 1/3 of screen)</p>
                <p>• One-handed operation prioritized</p>
                <p>• Sacred language maintained throughout</p>
                <p>• Consistent with web brand experience</p>
                <p>• Performance: 60fps minimum</p>
                <p>• Accessibility: VoiceOver/TalkBack support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
