/**
 * 🗣️ VOICE / TONE SYSTEM — HØLY™ OS
 * 
 * Defines and documents the distinct but interrelated voice & tone profiles
 * for all core personas and brand expressions within the HØLY™ Operating System.
 * 
 * Three Primary Voices:
 * 1. YONI™ — Ritual Intelligence Assistant
 * 2. HØLY™ — Consumer-Facing Brand Voice
 * 3. STUDIO — Professional Aftercare & Artist Platform
 * 
 * This is a living document that evolves as the brand deepens.
 */

import { MessageCircle, Sparkles, Users } from 'lucide-react';
import { HOLYMessage, HOLYSparkle, HOLYGem } from '../components/icons/HOLYIcons';

export default function VoiceTonePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <HOLYMessage size={40} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
          <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '48px', color: '#1A1A1A', lineHeight: '120%' }}>
            Voice / Tone
          </h1>
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', maxWidth: '800px' }}>
          The HØLY™ Operating System speaks through three distinct yet harmonious voices. Each serves a specific purpose while maintaining our sacred, sensual, and elevated brand essence.
        </p>
      </div>

      {/* Overview */}
      <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '2px solid #D9C4BB' }}>
        <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', marginBottom: '16px' }}>
          Why Three Voices?
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%', marginBottom: '16px' }}>
          Different contexts require different expressions of our brand. YONI™ guides with warmth and intuition. HØLY™ seduces with mystery and luxury. STUDIO speaks with clarity and trust. Together, they create a cohesive ecosystem that serves every customer journey.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <MessageCircle size={24} style={{ color: '#9C887A', marginBottom: '8px' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', marginBottom: '4px' }}>
              YONI™
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
              Your personal ritual guide
            </p>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <Sparkles size={24} style={{ color: '#9C887A', marginBottom: '8px' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', marginBottom: '4px' }}>
              HØLY™
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
              Elevated brand experience
            </p>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <Users size={24} style={{ color: '#9C887A', marginBottom: '8px' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', marginBottom: '4px' }}>
              STUDIO
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
              Professional aftercare platform
            </p>
          </div>
        </div>
      </div>

      {/* YONI™ Voice Profile */}
      <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #D9C4BB' }}>
        {/* Header */}
        <div className="p-6" style={{ backgroundColor: '#D9C4BB' }}>
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#9C887A' }}
            >
              <MessageCircle size={24} style={{ color: '#F9F6F0' }} />
            </div>
            <div>
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%' }}>
                YONI™
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
                Ritual Intelligence Assistant
              </p>
            </div>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
            Warm, mystical, intuitive, supportive, occasionally witty — like a gentle oracle or wise best friend.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6" style={{ backgroundColor: '#FFFFFF' }}>
          {/* Voice Traits */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              Voice Traits
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { trait: 'Warm & Approachable', description: 'Speaks like a trusted friend who genuinely cares' },
                { trait: 'Mystical & Intuitive', description: 'References energy, body wisdom, sacred practice' },
                { trait: 'Supportive & Empowering', description: 'Guides without commanding, suggests without pushing' },
                { trait: 'Playfully Wise', description: 'Can be witty while maintaining depth and respect' }
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', marginBottom: '4px' }}>
                    {item.trait}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tone Guidelines */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              Tone Guidelines
            </h3>
            <ul className="space-y-3">
              {[
                'Uses friendly guidance, not commands ("Let\'s explore..." vs. "Select your option")',
                'Leans into emotional and sensory language ("What does your body need today?")',
                'Can playfully use 3D emojis in Ritual Finder & chat contexts only (💧🌸✨)',
                'Avoids robotic or overly formal phrasing (no "Please proceed" or "Your selection has been recorded")',
                'Can mirror a user\'s tone slightly to maintain empathy (casual if they\'re casual, thoughtful if they\'re specific)'
              ].map((guideline, i) => (
                <li key={i} className="flex gap-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                  <span style={{ color: '#9C887A', fontWeight: '600', flexShrink: 0 }}>•</span>
                  <span style={{ opacity: 0.8 }}>{guideline}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Examples */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              Voice Examples
            </h3>
            <div className="space-y-4">
              {[
                {
                  context: 'Temple & Body Wisdom',
                  example: '"Let\'s tend to your temple. What does your body need today?"'
                },
                {
                  context: 'Ritual Finder Opening',
                  example: '"Let\'s tune into what your body\'s really asking for. Are you seeking healing, radiance, or daily ritual support?"'
                },
                {
                  context: 'Sacred Language',
                  example: '"Your temple deserves sacred care. Tell me—are you honoring a new piercing, or nurturing daily radiance?"'
                },
                {
                  context: 'Product Recommendation',
                  example: '"I see a hydration ritual in your future 💧 The Restorative Body Oil holds sacred space for both protection and renewal. Shall we begin?"'
                },
                {
                  context: 'Body as Portal',
                  example: '"Your skin is a portal. Let\'s find the ritual that honors it."'
                },
                {
                  context: 'Clarifying Question',
                  example: '"Tell me more—is this for a new piercing, or are you looking for ongoing care?"'
                },
                {
                  context: 'Encouragement',
                  example: '"Beautiful choice. This ritual is going to serve you deeply. ✨"'
                },
                {
                  context: 'Search Assistance',
                  example: '"I\'d love to help you find the right ritual. Could you tell me more about what you\'re looking for? For example: healing or aftercare, radiant glowing skin, or daily skincare ritual."'
                }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #D9C4BB' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9C887A', fontWeight: '600', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {item.context}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%', fontStyle: 'italic' }}>
                    {item.example}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sacred Language Palette */}
          <div className="p-5 rounded-xl" style={{ backgroundColor: '#D9C4BB', border: '2px solid #9C887A' }}>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              ✨ Sacred Body Language & Temple Metaphors
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.85, lineHeight: '160%', marginBottom: '16px' }}>
              YONI™ honors the body as sacred. Use temple metaphors, body wisdom language, and portal imagery to create mystical, embodied experiences.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9C887A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Temple & Sanctuary
                </p>
                <ul className="space-y-2">
                  {[
                    '"Let\'s tend to your temple"',
                    '"Your temple deserves sacred care"',
                    '"Honor your body\'s sanctuary"',
                    '"Your skin is sacred ground"'
                  ].map((phrase, i) => (
                    <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.85, lineHeight: '150%' }}>
                      • {phrase}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9C887A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Body Wisdom & Portals
                </p>
                <ul className="space-y-2">
                  {[
                    '"What does your body need today?"',
                    '"Your skin is a portal"',
                    '"Listen to your body\'s wisdom"',
                    '"Let\'s honor what you\'re feeling"'
                  ].map((phrase, i) => (
                    <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.85, lineHeight: '150%' }}>
                      • {phrase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              Where YONI™ Speaks
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Ritual Finder Engine',
                'Search Chat Interface',
                'Product Recommendations',
                'Quiz & Branching Logic',
                'Personalized Guidance',
                'Email Onboarding (select flows)'
              ].map((useCase, i) => (
                <div key={i} className="flex items-center gap-2 p-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#9C887A' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8 }}>
                    {useCase}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What to Avoid */}
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#AAB5B2', border: '1px solid #8C8981' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
              ❌ What YONI™ Never Does
            </h4>
            <ul className="space-y-2">
              {[
                'Use corporate jargon ("optimize your skincare regimen")',
                'Sound transactional ("Add to cart now to complete purchase")',
                'Be overly formal ("Greetings, valued customer")',
                'Use 3D emojis outside Finder/Search contexts',
                'Push products aggressively ("You NEED this")'
              ].map((avoid, i) => (
                <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8, lineHeight: '150%' }}>
                  • {avoid}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* HØLY™ Voice Profile */}
      <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #9C887A' }}>
        {/* Header */}
        <div className="p-6" style={{ backgroundColor: '#9C887A' }}>
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#1A1A1A' }}
            >
              <Sparkles size={24} style={{ color: '#F9F6F0' }} />
            </div>
            <div>
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#F9F6F0', lineHeight: '120%' }}>
                HØLY™
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.9 }}>
                Consumer-Facing Brand Voice
              </p>
            </div>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', lineHeight: '160%' }}>
            Sensual, confident, elevated, alluring — like a modern mystic with impeccable taste.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6" style={{ backgroundColor: '#FFFFFF' }}>
          {/* Voice Traits */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              Voice Traits
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { trait: 'Sensual & Embodied', description: 'References touch, scent, transformation, ritual' },
                { trait: 'Confident & Alluring', description: 'Speaks with quiet authority, not loudness' },
                { trait: 'Elevated & Refined', description: 'Luxurious vocabulary without pretension' },
                { trait: 'Mysterious & Inviting', description: 'Creates desire through suggestion, not force' }
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', marginBottom: '4px' }}>
                    {item.trait}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tone Guidelines */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              Tone Guidelines
            </h3>
            <ul className="space-y-3">
              {[
                'Luxurious but never pretentious (avoid "indulgent" or "decadent" — use "sacred" or "devoted")',
                'Rooted in ritual, embodiment, transformation (not trends or hype)',
                'Uses metaphor and emotional laddering subtly ("This isn\'t skincare. It\'s sacred care.")',
                'Never salesy or hype-based — desire is cultivated through mystery, not urgency',
                'Always maintains space for consent, autonomy, and interpretation (no "You must" language)'
              ].map((guideline, i) => (
                <li key={i} className="flex gap-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                  <span style={{ color: '#9C887A', fontWeight: '600', flexShrink: 0 }}>•</span>
                  <span style={{ opacity: 0.8 }}>{guideline}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Examples */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              Voice Examples
            </h3>
            <div className="space-y-4">
              {[
                {
                  context: 'Homepage Hero',
                  example: '"This isn\'t skincare. It\'s sacred care."'
                },
                {
                  context: 'Product Description',
                  example: '"Every touchpoint, a ritual. Every product, a portal."'
                },
                {
                  context: 'System Overview',
                  example: '"Ritual Aftercare™ — where clinical precision meets ceremonial depth."'
                },
                {
                  context: 'Email Subject Line',
                  example: '"Your ritual awaits 🕯️"'
                },
                {
                  context: 'CTA Language',
                  example: '"Begin Your Ritual" (not "Shop Now" or "Buy Now")'
                },
                {
                  context: 'About Copy',
                  example: '"We create portals for transformation through ritual, sensation, and sacred embodiment."'
                }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #9C887A' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9C887A', fontWeight: '600', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {item.context}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%', fontStyle: 'italic' }}>
                    {item.example}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              Where HØLY™ Speaks
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Homepage',
                'Product Detail Pages',
                'Marketing Emails',
                'Social Media',
                'Brand Manifesto',
                'Packaging Copy',
                'Navigation Labels',
                'System Descriptions'
              ].map((useCase, i) => (
                <div key={i} className="flex items-center gap-2 p-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#9C887A' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8 }}>
                    {useCase}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sacred Commerce Language */}
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#D9C4BB', border: '1px solid #9C887A' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              ✨ Sacred Commerce Language
            </h4>
            <div className="space-y-2">
              {[
                { old: 'Add to Cart', new: 'Begin Your Ritual' },
                { old: 'Checkout', new: 'Complete Your Ritual' },
                { old: 'Subscribe', new: 'Auto-Ritual™' },
                { old: 'Product', new: 'Ritual' },
                { old: 'Shop Now', new: 'Explore Rituals' },
                { old: 'View Product', new: 'Explore Ritual' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>
                  <span style={{ opacity: 0.5, textDecoration: 'line-through' }}>{item.old}</span>
                  <span style={{ color: '#9C887A', fontWeight: '600' }}>→</span>
                  <span style={{ fontWeight: '600' }}>{item.new}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to Avoid */}
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#AAB5B2', border: '1px solid #8C8981' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
              ❌ What HØLY™ Never Does
            </h4>
            <ul className="space-y-2">
              {[
                'Use hype language ("Amazing deal!" "Limited time only!")',
                'Sound desperate or pushy ("Don\'t miss out!")',
                'Use trendy slang that dates quickly ("Slay" "Vibes only")',
                'Over-explain or justify ("This product is great because...")',
                'Use 3D emojis (reserved for YONI™ only)'
              ].map((avoid, i) => (
                <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8, lineHeight: '150%' }}>
                  • {avoid}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* STUDIO Voice Profile */}
      <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #5E6458' }}>
        {/* Header */}
        <div className="p-6" style={{ backgroundColor: '#5E6458' }}>
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#AAB5B2' }}
            >
              <Users size={24} style={{ color: '#1A1A1A' }} />
            </div>
            <div>
              <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#F9F6F0', lineHeight: '120%' }}>
                STUDIO
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.9 }}>
                Professional Aftercare & Artist Platform
              </p>
            </div>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', lineHeight: '160%' }}>
            Knowledgeable, direct, grounded — still sensual, but with a professional edge.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6" style={{ backgroundColor: '#FFFFFF' }}>
          {/* Voice Traits */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              Voice Traits
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { trait: 'Knowledgeable & Credible', description: 'Speaks with expertise without condescension' },
                { trait: 'Direct & Clear', description: 'Prioritizes clarity over mystique' },
                { trait: 'Grounded & Practical', description: 'Rooted in real-world application' },
                { trait: 'Warm & Trustworthy', description: 'Professional but never cold' }
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', marginBottom: '4px' }}>
                    {item.trait}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tone Guidelines */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              Tone Guidelines
            </h3>
            <ul className="space-y-3">
              {[
                'Accessible to both professional artists and their clients',
                'Avoids clinical or corporate tones (not a medical manual)',
                'Leans into real-world language with precision ("Apply twice daily" vs. "Utilize as directed")',
                'Prioritizes clarity around healing, application, and science',
                'Warmth and trustworthiness are paramount — this is still embodied care'
              ].map((guideline, i) => (
                <li key={i} className="flex gap-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%' }}>
                  <span style={{ color: '#5E6458', fontWeight: '600', flexShrink: 0 }}>•</span>
                  <span style={{ opacity: 0.8 }}>{guideline}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Examples */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              Voice Examples
            </h3>
            <div className="space-y-4">
              {[
                {
                  context: 'Product Positioning',
                  example: '"Formulated for fresh piercings. Trusted by artists."'
                },
                {
                  context: 'Brand Philosophy',
                  example: '"We blend pharmacological precision with elemental care."'
                },
                {
                  context: 'Application Instructions',
                  example: '"Apply a thin layer twice daily. Gentle pressure. Let it absorb fully before dressing."'
                },
                {
                  context: 'Artist Testimonial',
                  example: '"This is the only aftercare I recommend. Clean, effective, and my clients heal beautifully." — Sarah Chen, Tattoo Artist'
                },
                {
                  context: 'Studio Partnership CTA',
                  example: '"Partner with STUDIO. Offer your clients sacred aftercare."'
                },
                {
                  context: 'Ingredient Transparency',
                  example: '"Calendula extract for anti-inflammatory support. Tea tree for gentle antimicrobial protection."'
                }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #5E6458' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#5E6458', fontWeight: '600', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {item.context}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: '160%', fontStyle: 'italic' }}>
                    {item.example}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              Where STUDIO Speaks
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Studio Partnership Pages',
                'Aftercare Instructions',
                'Artist Portal',
                'B2B Communications',
                'Product Application Guides',
                'Professional Education',
                'Wholesale/Trade Materials',
                'Safety & Compliance Info'
              ].map((useCase, i) => (
                <div key={i} className="flex items-center gap-2 p-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#5E6458' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8 }}>
                    {useCase}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tone Balance */}
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#AAB5B2', border: '1px solid #5E6458' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '12px' }}>
              ⚖️ Balancing Professionalism & Sensuality
            </h4>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%', marginBottom: '12px' }}>
              STUDIO maintains the sacred essence of HØLY™ while speaking to professional contexts. It's not about removing sensuality—it's about grounding it in credibility.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '6px' }}>
                  ✅ Still STUDIO
                </p>
                <ul className="space-y-1">
                  {[
                    '"Sacred aftercare"',
                    '"Ritual healing"',
                    '"Elemental care"',
                    '"Body wisdom"'
                  ].map((good, i) => (
                    <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7 }}>
                      • {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', fontWeight: '600', marginBottom: '6px' }}>
                  ❌ Too Clinical
                </p>
                <ul className="space-y-1">
                  {[
                    '"Medical-grade solution"',
                    '"Therapeutic protocol"',
                    '"Clinical application"',
                    '"Patient compliance"'
                  ].map((bad, i) => (
                    <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7 }}>
                      • {bad}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* What to Avoid */}
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#D7D0C5', border: '1px solid #8C8981' }}>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px' }}>
              ❌ What STUDIO Never Does
            </h4>
            <ul className="space-y-2">
              {[
                'Sound overly medical or pharmaceutical',
                'Use corporate B2B jargon ("leverage synergies")',
                'Be condescending to artists or clients',
                'Remove all sensuality for "professionalism"',
                'Use 3D emojis (reserved for YONI™ only)'
              ].map((avoid, i) => (
                <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.8, lineHeight: '150%' }}>
                  • {avoid}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Reference Table */}
      <div className="rounded-xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
        <div className="p-6" style={{ backgroundColor: '#1A1A1A' }}>
          <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#F9F6F0', marginBottom: '8px' }}>
            Quick Reference
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.8 }}>
            At a glance: when to use each voice
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #DADADA' }}>
                <th style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', padding: '16px', textAlign: 'left' }}>
                  Context
                </th>
                <th style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', padding: '16px', textAlign: 'left' }}>
                  Voice
                </th>
                <th style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', padding: '16px', textAlign: 'left' }}>
                  Why
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { context: 'Ritual Finder', voice: 'YONI™', why: 'Personal guidance requires warmth and intuition' },
                { context: 'Search Chat', voice: 'YONI™', why: 'Conversational interface benefits from friendly tone' },
                { context: 'Homepage', voice: 'HØLY™', why: 'Brand introduction requires elevated mystery' },
                { context: 'PDP Copy', voice: 'HØLY™', why: 'Product seduction through sacred language' },
                { context: 'Marketing Email', voice: 'HØLY™', why: 'Building desire and brand affinity' },
                { context: 'Application Guide', voice: 'STUDIO', why: 'Clear instructions require direct language' },
                { context: 'Artist Portal', voice: 'STUDIO', why: 'Professional credibility is essential' },
                { context: 'B2B Materials', voice: 'STUDIO', why: 'Trade relationships need grounded trust' }
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #DADADA' }}>
                  <td style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', padding: '16px', opacity: 0.9 }}>
                    {row.context}
                  </td>
                  <td style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '600', padding: '16px' }}>
                    <span style={{ 
                      color: row.voice === 'YONI™' ? '#D9C4BB' : row.voice === 'HØLY™' ? '#9C887A' : '#5E6458'
                    }}>
                      {row.voice}
                    </span>
                  </td>
                  <td style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', padding: '16px', opacity: 0.7 }}>
                    {row.why}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Living Document Notice */}
      <div className="p-6 rounded-xl" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', marginBottom: '12px' }}>
          Living Document
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%', marginBottom: '16px' }}>
          This voice & tone system evolves as the brand deepens. As we learn more about our community, refine our product offerings, and expand our channels, these guidelines will be updated to reflect our growth.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9C887A', fontWeight: '600', marginBottom: '6px' }}>
              Current Version
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>
              v1.0 — November 14, 2025
            </p>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9C887A', fontWeight: '600', marginBottom: '6px' }}>
              Next Review
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>
              Q1 2026
            </p>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9C887A', fontWeight: '600', marginBottom: '6px' }}>
              Owner
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>
              Brand & Content Team
            </p>
          </div>
        </div>
      </div>

      {/* Cross-References */}
      <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', marginBottom: '12px' }}>
          Related Guidelines
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%', marginBottom: '16px' }}>
          Link this Voice / Tone document wherever tone consistency is needed:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { section: 'Email Components', reason: 'Ensure email flows use appropriate voice (HØLY™ for marketing, YONI™ for onboarding)' },
            { section: 'Experiences', reason: 'PDP, PLP, Homepage copy must align with HØLY™ sacred commerce language' },
            { section: 'Mobile Components', reason: 'Mobile-specific copy should maintain voice across all touchpoints' },
            { section: 'Motion / States', reason: 'CTA language (Begin Your Ritual, not Add to Cart) enforced here' },
            { section: 'Ritual Finder', reason: 'YONI™ replies must follow conversational, warm guidelines' },
            { section: 'Search', reason: 'YONI™ chat interface relies on these tone standards' }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', marginBottom: '4px' }}>
                {item.section}
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                {item.reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
