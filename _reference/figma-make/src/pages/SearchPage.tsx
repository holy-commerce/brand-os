/**
 * 📡 SEARCH — YONI™-POWERED GUIDED CHAT EXPERIENCE
 * 
 * This is NOT a traditional search bar experience.
 * It's a guided chat interface where YONI™ helps users find products through conversation.
 * 
 * Features:
 * - Natural language product queries
 * - Chat-based interface with 3D emoji
 * - Inline product/system recommendations
 * - Responsive modal design
 * - Seamless handoff to Ritual Finder for guided flow
 * 
 * Entry Points:
 * - Search icon in GlobalNavigation
 * - Search icon in mobile menu
 * - Deep links from marketing
 */

import { useState, useRef, useEffect } from 'react';
import { Search, X, Sparkles, ArrowRight, ShoppingBag, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { HOLYMessage, HOLYSparkle, HOLYCircle } from '../components/icons/HOLYIcons';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import yoniProfileImage from 'figma:asset/0ecc9d9bbd056216b0507babf7d9364c90783a1e.png';

interface ChatMessage {
  id: string;
  type: 'user' | 'yoni';
  content: string;
  timestamp: Date;
  recommendation?: {
    type: 'product' | 'system';
    name: string;
    description: string;
    price?: number;
    image?: string;
    cta: string;
    color?: string;
  };
}

// Sample product/system database for recommendations
const recommendationDatabase: Record<string, any> = {
  'aftercare': {
    type: 'system',
    name: 'Ritual Aftercare™',
    description: 'Clinical meets ceremonial healing for post-intimacy restoration',
    color: '#AAB5B2',
    cta: 'Explore Ritual Aftercare™'
  },
  'renewal': {
    type: 'system',
    name: 'Ritual Renewal™',
    description: 'Luminous transformation through sacred botanicals',
    color: '#D9C4BB',
    cta: 'Explore Ritual Renewal™'
  },
  'vital': {
    type: 'system',
    name: 'Ritual Vital™',
    description: 'Essential daily rituals for radiant skin',
    color: '#AAB5B2',
    cta: 'Explore Ritual Vital™'
  },
  'serum': {
    type: 'product',
    name: 'Daily Ritual Serum',
    description: 'Concentrated botanical essence for luminous skin',
    price: 68,
    image: 'https://images.unsplash.com/photo-1665763630810-e6251bdd392d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHNlcnVtJTIwd2hpdGV8ZW58MXx8fHwxNzYwNjY0OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Begin Ritual'
  },
  'oil': {
    type: 'product',
    name: 'Restorative Body Oil',
    description: 'Sacred oil for protection and healing',
    price: 64,
    image: 'https://images.unsplash.com/photo-1722933375700-e297a7996265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib2R5JTIwb2lsJTIwYm90dGxlfGVufDF8fHx8MTc2MzA5MzE3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Begin Ritual'
  },
  'cleanser': {
    type: 'product',
    name: 'Gentle Ritual Cleanser',
    description: 'Purifying botanical cleanser for daily renewal',
    price: 42,
    image: 'https://images.unsplash.com/photo-1556228994-79c31e86e5d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbnNlciUyMGJvdHRsZXxlbnwxfHx8fDE3NjMwOTMxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Begin Ritual'
  }
};

// Simulated YONI response logic
function getYONIResponse(query: string): { message: string; recommendationKey?: string } {
  const lowerQuery = query.toLowerCase();
  
  // Aftercare queries
  if (lowerQuery.includes('aftercare') || lowerQuery.includes('healing') || lowerQuery.includes('piercing') || lowerQuery.includes('tattoo')) {
    return {
      message: "💧 For healing and restoration, I recommend Ritual Aftercare™. It's designed for sacred recovery with clinical-grade care.",
      recommendationKey: 'aftercare'
    };
  }
  
  // Renewal queries
  if (lowerQuery.includes('renewal') || lowerQuery.includes('radiance') || lowerQuery.includes('glow') || lowerQuery.includes('brightening')) {
    return {
      message: "🌸 For luminous transformation, Ritual Renewal™ is your path. Sacred botanicals reveal radiant skin.",
      recommendationKey: 'renewal'
    };
  }
  
  // Vital queries
  if (lowerQuery.includes('daily') || lowerQuery.includes('essential') || lowerQuery.includes('routine')) {
    return {
      message: "✨ Ritual Vital™ provides essential daily rituals. Perfect for building your sacred skincare practice.",
      recommendationKey: 'vital'
    };
  }
  
  // Specific product queries
  if (lowerQuery.includes('serum')) {
    return {
      message: "🧴 Our Daily Ritual Serum is a concentrated botanical essence. It's become a cherished part of many rituals.",
      recommendationKey: 'serum'
    };
  }
  
  if (lowerQuery.includes('oil') || lowerQuery.includes('body oil')) {
    return {
      message: "💆 The Restorative Body Oil is sacred protection. Beautiful for both aftercare and renewal rituals.",
      recommendationKey: 'oil'
    };
  }
  
  if (lowerQuery.includes('cleanser') || lowerQuery.includes('wash') || lowerQuery.includes('cleanse')) {
    return {
      message: "🫧 Our Gentle Ritual Cleanser is purifying yet nurturing. Perfect for beginning your daily ritual.",
      recommendationKey: 'cleanser'
    };
  }
  
  // General greeting
  if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
    return {
      message: "👋 Hello! I'm YONI™, your ritual guide. Tell me what brings you here today—are you seeking healing, radiance, or daily ritual support?"
    };
  }
  
  // Default response
  return {
    message: "🤔 I'd love to help you find the right ritual. Could you tell me more about what you're looking for? For example:\n\n• Healing or aftercare\n• Radiant, glowing skin\n• Daily skincare ritual\n• Specific product type",
    recommendationKey: undefined
  };
}

// ========================================
// MAIN SEARCH MODAL COMPONENT
// ========================================

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRitualFinder: () => void;
}

function SearchModal({ isOpen, onClose, onOpenRitualFinder }: SearchModalProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        type: 'yoni',
        content: "✨ Welcome! I'm YONI™, your personal ritual guide. Ask me anything about our products, or tell me what you're looking for and I'll help you find your perfect ritual.",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate YONI thinking and responding
    setTimeout(() => {
      const response = getYONIResponse(inputValue);
      const yoniMessage: ChatMessage = {
        id: `yoni-${Date.now()}`,
        type: 'yoni',
        content: response.message,
        timestamp: new Date(),
        recommendation: response.recommendationKey 
          ? recommendationDatabase[response.recommendationKey] 
          : undefined
      };

      setMessages(prev => [...prev, yoniMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(26, 26, 26, 0.85)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl overflow-hidden"
        style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="p-6 flex items-center justify-between"
          style={{ borderBottom: '1px solid #DADADA' }}
        >
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-full overflow-hidden"
              style={{ border: '2px solid #D9C4BB' }}
            >
              <ImageWithFallback 
                src={yoniProfileImage}
                alt="YONI™"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', lineHeight: '120%' }}>
                YONI™ Search
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.6 }}>
                Your ritual guide
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-colors hover:bg-gray-100"
            style={{ border: 'none', cursor: 'pointer', background: 'transparent' }}
          >
            <X size={20} style={{ color: '#1A1A1A' }} />
          </button>
        </div>

        {/* Ritual Finder CTA Banner */}
        <div
          className="px-6 py-3 flex items-center justify-between transition-colors cursor-pointer hover:bg-gray-50"
          style={{ borderBottom: '1px solid #DADADA', backgroundColor: '#F9F6F0' }}
          onClick={onOpenRitualFinder}
        >
          <div className="flex items-center gap-2">
            <Sparkles size={16} style={{ color: '#9C887A' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>
              <span style={{ fontWeight: '600' }}>Prefer a guided experience?</span> Launch Ritual Finder
            </p>
          </div>
          <ArrowRight size={16} style={{ color: '#1A1A1A', opacity: 0.6 }} />
        </div>

        {/* Messages Area */}
        <div 
          className="flex-1 overflow-y-auto p-6 space-y-6"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          {messages.map((message) => (
            <div key={message.id}>
              {/* Message Bubble */}
              <div className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {message.type === 'yoni' && (
                  <div 
                    className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
                    style={{ border: '1px solid #D9C4BB' }}
                  >
                    <ImageWithFallback 
                      src={yoniProfileImage}
                      alt="YONI™"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div
                  className="max-w-[75%] rounded-2xl px-4 py-3"
                  style={{
                    backgroundColor: message.type === 'user' ? '#1A1A1A' : '#F9F6F0',
                    color: message.type === 'user' ? '#F9F6F0' : '#1A1A1A'
                  }}
                >
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '14px', 
                    lineHeight: '160%',
                    whiteSpace: 'pre-line'
                  }}>
                    {message.content}
                  </p>
                </div>
              </div>

              {/* Recommendation Card (if present) */}
              {message.recommendation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 ml-11"
                >
                  <div 
                    className="rounded-xl p-4 space-y-3"
                    style={{ 
                      backgroundColor: message.recommendation.color || '#F9F6F0',
                      border: '2px solid #DADADA' 
                    }}
                  >
                    {message.recommendation.image && (
                      <div className="w-full h-32 rounded-lg overflow-hidden">
                        <ImageWithFallback 
                          src={message.recommendation.image}
                          alt={message.recommendation.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '4px' }}>
                        {message.recommendation.name}
                      </h3>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                        {message.recommendation.description}
                      </p>
                    </div>
                    {message.recommendation.price && (
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600' }}>
                        ${message.recommendation.price}
                      </p>
                    )}
                    <button
                      className="w-full py-3 rounded-lg transition-all hover:opacity-90"
                      style={{
                        backgroundColor: '#1A1A1A',
                        color: '#F9F6F0',
                        border: 'none',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      {message.recommendation.cta}
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3">
              <div 
                className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
                style={{ border: '1px solid #D9C4BB' }}
              >
                <ImageWithFallback 
                  src={yoniProfileImage}
                  alt="YONI™"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="rounded-2xl px-4 py-3 flex items-center gap-1"
                style={{ backgroundColor: '#F9F6F0' }}
              >
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#9C887A' }}
                />
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#9C887A' }}
                />
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#9C887A' }}
                />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div 
          className="p-4"
          style={{ borderTop: '1px solid #DADADA', backgroundColor: '#F9F6F0' }}
        >
          <div className="flex gap-3">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about products, rituals, or anything else..."
              className="flex-1 px-4 py-3 rounded-lg"
              style={{
                border: '1px solid #DADADA',
                backgroundColor: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#1A1A1A',
                outline: 'none'
              }}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="px-6 py-3 rounded-lg transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                backgroundColor: '#1A1A1A',
                color: '#F9F6F0',
                border: 'none',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// MAIN PAGE COMPONENT
// ========================================

export default function SearchPage() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [ritualFinderModalOpen, setRitualFinderModalOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <HOLYMessage size={40} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
          <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', lineHeight: '120%' }}>
            Search — YONI™ Guided
          </h1>
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', maxWidth: '800px' }}>
          Chat-first search powered by YONI™. This is not a traditional search bar—it's a conversational interface that helps you discover the right ritual through natural dialogue.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#9C887A' }}>
            <MessageCircle size={24} style={{ color: '#F9F6F0' }} />
          </div>
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', marginBottom: '8px' }}>
            Natural Language
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Ask questions naturally. YONI™ understands your needs and responds with personalized recommendations.
          </p>
        </div>

        <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#D9C4BB' }}>
            <Sparkles size={24} style={{ color: '#1A1A1A' }} />
          </div>
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', marginBottom: '8px' }}>
            Inline Recommendations
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Products and systems appear directly in the chat with images, pricing, and instant "Begin Ritual" CTAs.
          </p>
        </div>

        <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#AAB5B2' }}>
            <ArrowRight size={24} style={{ color: '#1A1A1A' }} />
          </div>
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A', marginBottom: '8px' }}>
            Guided Handoff
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
            Prefer a structured flow? Launch Ritual Finder directly from the search modal for step-by-step guidance.
          </p>
        </div>
      </div>

      {/* Live Demo */}
      <div className="rounded-2xl p-8 space-y-6" style={{ backgroundColor: '#D9C4BB', border: '2px solid #9C887A' }}>
        <div className="space-y-2">
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A' }}>
            Try YONI™ Search
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
            Click the button below to launch the search modal. Try asking questions like:
          </p>
          <ul className="space-y-2 ml-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
            <li>• "I need something for healing my new piercing"</li>
            <li>• "What's good for daily glowing skin?"</li>
            <li>• "Show me your best serum"</li>
            <li>• "I'm looking for a gentle cleanser"</li>
          </ul>
        </div>

        <button
          onClick={() => setSearchModalOpen(true)}
          className="flex items-center gap-3 px-8 py-4 rounded-lg transition-all hover:opacity-90"
          style={{
            backgroundColor: '#1A1A1A',
            color: '#F9F6F0',
            border: 'none',
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          <Search size={20} />
          Launch Search Modal
        </button>
      </div>

      {/* Implementation Guide */}
      <div className="rounded-xl p-6 space-y-6" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
        <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A' }}>
          Implementation Guide
        </h2>

        <div className="space-y-4">
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
              Entry Points
            </h3>
            <ul className="space-y-2 ml-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              <li>• Search icon in GlobalNavigation (desktop)</li>
              <li>• Search icon in mobile menu drawer</li>
              <li>• Deep links from marketing emails</li>
              <li>• "Need help?" CTAs on PDP pages</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
              Chat Behavior
            </h3>
            <ul className="space-y-2 ml-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              <li>• User types natural language query</li>
              <li>• YONI™ responds with helpful guidance (1-2s delay for realism)</li>
              <li>• If query relates to product/system, recommendation card appears inline</li>
              <li>• User can continue conversation or click CTA to begin ritual</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
              Design Principles
            </h3>
            <ul className="space-y-2 ml-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
              <li>• <strong>3D emoji for YONI™ only</strong> — message bubbles use emoji sparingly (✨💧🌸)</li>
              <li>• <strong>2D icons for UI</strong> — buttons, headers use lucide-react icons</li>
              <li>• <strong>Mobile-first responsive</strong> — works 375px → 1440px+</li>
              <li>• <strong>Escape to Ritual Finder</strong> — persistent banner for guided flow</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Notes */}
      <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', marginBottom: '16px' }}>
          Technical Notes
        </h2>
        <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
          <p><strong>Current Implementation:</strong> Simulated YONI™ responses with keyword matching. Recommendations pulled from local database.</p>
          <p><strong>Future Integration:</strong> Connect to AI backend (OpenAI, Claude, or custom) for true conversational understanding. Integrate with product catalog API for real-time inventory and pricing.</p>
          <p><strong>Modal Behavior:</strong> Clicking outside or pressing ESC closes modal. Chat history persists during session but resets on close.</p>
          <p><strong>Accessibility:</strong> Full keyboard navigation, screen reader friendly with aria-labels, focus management.</p>
        </div>
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {searchModalOpen && (
          <SearchModal 
            isOpen={searchModalOpen}
            onClose={() => setSearchModalOpen(false)}
            onOpenRitualFinder={() => {
              setSearchModalOpen(false);
              setRitualFinderModalOpen(true);
              // In production, this would navigate to Ritual Finder or open its modal
            }}
          />
        )}
      </AnimatePresence>

      {/* Placeholder for Ritual Finder Modal */}
      {ritualFinderModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(26, 26, 26, 0.85)' }}
          onClick={() => setRitualFinderModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Sparkles size={48} style={{ color: '#9C887A', margin: '0 auto 16px' }} />
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', marginBottom: '12px' }}>
              Ritual Finder
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, marginBottom: '24px' }}>
              This would launch the full Ritual Finder experience. Navigate to the Ritual Finder page to see the complete guided flow.
            </p>
            <button
              onClick={() => setRitualFinderModalOpen(false)}
              className="px-6 py-3 rounded-lg"
              style={{
                backgroundColor: '#1A1A1A',
                color: '#F9F6F0',
                border: 'none',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
