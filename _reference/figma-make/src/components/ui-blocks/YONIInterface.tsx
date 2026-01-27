import { Button } from '../ui/button';
import { Send, Package, User, Heart } from 'lucide-react';
import { HOLYDroplet, HOLYMessage, HOLYSparkle, HOLYCircle, HOLYFlower } from '../icons/HOLYIcons';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import yoniProfileImage from 'figma:asset/0ecc9d9bbd056216b0507babf7d9364c90783a1e.png';

// YONI™ AI Assistant Interface Components
// Sacred, sensual AI-powered chat and ritual guidance

// YONI Avatar/Icon
export function YONIAvatar() {
  return (
    <div 
      className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden"
      style={{ 
        border: '2px solid #AAB5B2',
        backgroundColor: '#F9F6F0'
      }}
    >
      <ImageWithFallback
        src={yoniProfileImage}
        alt="YONI Assistant"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// Welcome Screen
export function YONIChatWelcome() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-start gap-4">
        <YONIAvatar />
        <div className="flex-1 space-y-2">
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '12px', 
            color: '#1A1A1A',
            opacity: 0.6,
            fontWeight: '500',
            letterSpacing: '0.5px'
          }}>
            YONI™ AI ASSISTANT
          </p>
          <div 
            className="p-4 rounded-2xl"
            style={{ backgroundColor: '#AAB5B2' }}
          >
            <p style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '18px', 
              color: '#F9F6F0',
              lineHeight: '150%'
            }}>
              I'm YONI™. Let's tend to your temple.
            </p>
          </div>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '13px', 
            color: '#1A1A1A',
            opacity: 0.7,
            lineHeight: '160%',
            fontStyle: 'italic'
          }}>
            I'm here to guide you through ritual discovery, product questions, and aftercare support.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3 pl-14">
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '11px', 
          color: '#1A1A1A',
          opacity: 0.6,
          fontWeight: '500',
          letterSpacing: '0.5px',
          marginBottom: '8px'
        }}>
          WHAT CAN I HELP WITH?
        </p>
        <button 
          className="w-full p-4 rounded-xl text-left transition-all"
          style={{ 
            backgroundColor: '#F9F6F0',
            border: '2px solid #DADADA',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D9C4BB'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F9F6F0'}
        >
          <div className="flex items-center gap-3">
            <HOLYSparkle size={20} color="#9C887A" strokeWidth={1.5} />
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '2px' }}>
                Find My Ritual
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Personalized product guidance
              </p>
            </div>
          </div>
        </button>

        <button 
          className="w-full p-4 rounded-xl text-left transition-all"
          style={{ 
            backgroundColor: '#F9F6F0',
            border: '2px solid #DADADA',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D9C4BB'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F9F6F0'}
        >
          <div className="flex items-center gap-3">
            <Package className="w-5 h-5" style={{ color: '#AAB5B2' }} />
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '2px' }}>
                Track Order
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Check your ritual's journey
              </p>
            </div>
          </div>
        </button>

        <button 
          className="w-full p-4 rounded-xl text-left transition-all"
          style={{ 
            backgroundColor: '#F9F6F0',
            border: '2px solid #DADADA',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D9C4BB'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F9F6F0'}
        >
          <div className="flex items-center gap-3">
            <User className="w-5 h-5" style={{ color: '#1A1A1A' }} />
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '600', marginBottom: '2px' }}>
                Studio Login
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                Professional access
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

// Message Bubble - Incoming (YONI)
export function YONIMessageBubbleIncoming({ message, timestamp }: { message: string, timestamp?: string }) {
  return (
    <div className="flex items-start gap-3">
      <YONIAvatar />
      <div className="flex-1 max-w-md">
        <div 
          className="p-4 rounded-2xl rounded-tl-sm"
          style={{ backgroundColor: '#AAB5B2' }}
        >
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '14px', 
            color: '#F9F6F0',
            lineHeight: '160%',
            fontWeight: '500'
          }}>
            {message}
          </p>
        </div>
        {timestamp && (
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '11px', 
            color: '#1A1A1A',
            opacity: 0.5,
            marginTop: '6px',
            marginLeft: '8px'
          }}>
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
}

// Message Bubble - Outgoing (User)
export function YONIMessageBubbleOutgoing({ message, timestamp }: { message: string, timestamp?: string }) {
  return (
    <div className="flex items-start gap-3 justify-end">
      <div className="flex-1 max-w-md flex flex-col items-end">
        <div 
          className="p-4 rounded-2xl rounded-tr-sm"
          style={{ backgroundColor: '#D9C4BB' }}
        >
          <p style={{ 
            fontFamily: 'Garamond, serif', 
            fontSize: '14px', 
            color: '#1A1A1A',
            lineHeight: '160%',
            fontStyle: 'italic'
          }}>
            {message}
          </p>
        </div>
        {timestamp && (
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '11px', 
            color: '#1A1A1A',
            opacity: 0.5,
            marginTop: '6px',
            marginRight: '8px'
          }}>
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
}

// Chat Input Field
export function YONIChatInput() {
  const [message, setMessage] = useState('');

  return (
    <div className="p-4" style={{ borderTop: '2px solid #DADADA', backgroundColor: '#F9F6F0' }}>
      <div className="flex items-end gap-3">
        <div className="flex-1">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about rituals, products, or care..."
            rows={1}
            className="w-full px-4 py-3 rounded-xl resize-none"
            style={{
              border: '2px solid #DADADA',
              backgroundColor: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: '#1A1A1A',
              outline: 'none'
            }}
          />
        </div>
        <button
          className="p-3 rounded-xl transition-all"
          style={{
            backgroundColor: message.trim() ? '#1A1A1A' : '#DADADA',
            cursor: message.trim() ? 'pointer' : 'not-allowed'
          }}
          disabled={!message.trim()}
        >
          <Send className="w-5 h-5" style={{ color: '#F9F6F0' }} />
        </button>
      </div>
    </div>
  );
}

// Ritual Finder Question Flow
export function YONIRitualFinderQuestion() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const answers = [
    { id: 'ear', label: 'Ear', emoji: '👂' },
    { id: 'nose', label: 'Nose', emoji: '👃' },
    { id: 'lip', label: 'Lip', emoji: '👄' },
    { id: 'navel', label: 'Navel', emoji: '⭕' },
    { id: 'intimate', label: 'Intimate', emoji: '🌸' },
    { id: 'other', label: 'Other', emoji: '✨' }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <YONIAvatar />
        <div className="flex-1">
          <div 
            className="p-4 rounded-2xl rounded-tl-sm"
            style={{ backgroundColor: '#AAB5B2' }}
          >
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              color: '#F9F6F0',
              lineHeight: '160%',
              fontWeight: '500',
              marginBottom: '4px'
            }}>
              Beautiful. Let's begin.
            </p>
            <p style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '16px', 
              color: '#F9F6F0',
              lineHeight: '150%'
            }}>
              Where is your piercing?
            </p>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => setSelectedAnswer(answer.id)}
                className="p-3 rounded-xl transition-all"
                style={{
                  backgroundColor: selectedAnswer === answer.id ? '#D9C4BB' : '#F9F6F0',
                  border: selectedAnswer === answer.id ? '2px solid #1A1A1A' : '2px solid #DADADA',
                  cursor: 'pointer'
                }}
              >
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: '18px' }}>{answer.emoji}</span>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '13px', 
                    color: '#1A1A1A',
                    fontWeight: '600'
                  }}>
                    {answer.label}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {selectedAnswer && (
            <div className="mt-4">
              <Button
                style={{
                  width: '100%',
                  backgroundColor: '#1A1A1A',
                  color: '#F9F6F0',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  padding: '12px 24px'
                }}
              >
                Continue
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Ritual System Match Output
export function YONIRitualSystemMatch() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <YONIAvatar />
        <div className="flex-1">
          <div 
            className="p-4 rounded-2xl rounded-tl-sm"
            style={{ backgroundColor: '#AAB5B2' }}
          >
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              color: '#F9F6F0',
              lineHeight: '160%',
              fontWeight: '500'
            }}>
              Perfect. Based on your answers, I recommend Ritual Aftercare™.
            </p>
          </div>
        </div>
      </div>

      {/* Ritual System Card */}
      <div 
        className="p-6 rounded-2xl ml-14"
        style={{ backgroundColor: '#F9F6F0', border: '2px solid #AAB5B2' }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: '#AAB5B2' }}
          />
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '11px', 
            color: '#1A1A1A',
            fontWeight: '600',
            letterSpacing: '0.5px',
            opacity: 0.7
          }}>
            RITUAL AFTERCARE™
          </p>
        </div>

        <h3 style={{ 
          fontFamily: 'Garamond, serif', 
          fontSize: '24px', 
          color: '#1A1A1A',
          marginBottom: '8px'
        }}>
          Clinical meets ceremonial
        </h3>

        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '14px', 
          color: '#1A1A1A',
          opacity: 0.8,
          lineHeight: '170%',
          marginBottom: '16px'
        }}>
          Designed for fresh piercings and healing tissue. Clean, soothing, protective care that honors the healing process.
        </p>

        {/* Recommended Products */}
        <div className="space-y-3">
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '11px', 
            color: '#1A1A1A',
            fontWeight: '600',
            letterSpacing: '0.5px',
            opacity: 0.7,
            marginBottom: '8px'
          }}>
            RECOMMENDED FOR YOU
          </p>

          <div 
            className="p-4 rounded-xl flex items-center gap-4"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA' }}
          >
            <div 
              className="w-16 h-16 rounded-lg flex-shrink-0"
              style={{ backgroundColor: '#AAB5B2' }}
            />
            <div className="flex-1">
              <p style={{ 
                fontFamily: 'Garamond, serif', 
                fontSize: '16px', 
                color: '#1A1A1A',
                marginBottom: '4px'
              }}>
                hølymist™
              </p>
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '12px', 
                color: '#1A1A1A',
                opacity: 0.6
              }}>
                Prebiotics Face Mist
              </p>
            </div>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '16px', 
              color: '#1A1A1A',
              fontWeight: '600'
            }}>
              $48
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              style={{
                flex: 1,
                backgroundColor: '#1A1A1A',
                color: '#F9F6F0',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                padding: '12px 24px'
              }}
            >
              Add to Ritual
            </Button>
            <Button
              style={{
                backgroundColor: 'transparent',
                color: '#1A1A1A',
                border: '2px solid #1A1A1A',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '500',
                padding: '12px 24px'
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Order Tracking UI
export function YONIOrderTrackingUI() {
  const [orderNumber, setOrderNumber] = useState('');

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <YONIAvatar />
        <div className="flex-1">
          <div 
            className="p-4 rounded-2xl rounded-tl-sm"
            style={{ backgroundColor: '#AAB5B2' }}
          >
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              color: '#F9F6F0',
              lineHeight: '160%',
              fontWeight: '500'
            }}>
              I can help you track your ritual. What's your order number?
            </p>
          </div>

          <div className="mt-4 space-y-3">
            <input
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="e.g., HØLY-2026-0142"
              className="w-full px-4 py-3 rounded-xl"
              style={{
                border: '2px solid #DADADA',
                backgroundColor: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#1A1A1A',
                outline: 'none'
              }}
            />
            <Button
              style={{
                width: '100%',
                backgroundColor: orderNumber.trim() ? '#1A1A1A' : '#DADADA',
                color: '#F9F6F0',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                padding: '12px 24px',
                cursor: orderNumber.trim() ? 'pointer' : 'not-allowed'
              }}
              disabled={!orderNumber.trim()}
            >
              Track Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// FAQ Quick Response
export function YONIFAQResponse() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3 justify-end">
        <div className="flex-1 max-w-md flex flex-col items-end">
          <div 
            className="p-4 rounded-2xl rounded-tr-sm"
            style={{ backgroundColor: '#D9C4BB' }}
          >
            <p style={{ 
              fontFamily: 'Garamond, serif', 
              fontSize: '14px', 
              color: '#1A1A1A',
              lineHeight: '160%',
              fontStyle: 'italic'
            }}>
              Is hølymist™ safe for septum piercings?
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <YONIAvatar />
        <div className="flex-1 max-w-md">
          <div 
            className="p-4 rounded-2xl rounded-tl-sm"
            style={{ backgroundColor: '#AAB5B2' }}
          >
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              color: '#F9F6F0',
              lineHeight: '160%',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Yes, and it feels like a kiss from the ocean.
            </p>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '13px', 
              color: '#F9F6F0',
              lineHeight: '160%',
              opacity: 0.9
            }}>
              hølymist™ is formulated for all piercings, including septum. The prebiotics support your skin barrier while the mist soothes and refreshes. Spray 2-3 times daily around the piercing site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Support Options (AI-Only Structure)
export function YONIEscalationOptions() {
  return (
    <div className="flex items-start gap-3">
      <YONIAvatar />
      <div className="flex-1">
        <div 
          className="p-4 rounded-2xl rounded-tl-sm mb-4"
          style={{ backgroundColor: '#AAB5B2' }}
        >
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '14px', 
            color: '#F9F6F0',
            lineHeight: '160%',
            fontWeight: '500'
          }}>
            I'm here to help. How can I assist you today?
          </p>
        </div>

        <div className="space-y-2">
          <button 
            className="w-full p-3 rounded-xl text-left transition-all"
            style={{ 
              backgroundColor: '#F9F6F0',
              border: '1px solid #DADADA',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D9C4BB'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F9F6F0'}
          >
            <div className="flex items-start gap-2">
              <HOLYDroplet size={16} color="#1A1A1A" strokeWidth={1.5} className="flex-shrink-0" style={{ marginTop: '2px' }} />
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', marginBottom: '2px' }}>
                  Ask YONI™
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                  For product questions, ritual guidance, and personal support
                </p>
              </div>
            </div>
          </button>

          <button 
            className="w-full p-3 rounded-xl text-left transition-all"
            style={{ 
              backgroundColor: '#F9F6F0',
              border: '1px solid #DADADA',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D9C4BB'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F9F6F0'}
          >
            <div className="flex items-start gap-2">
              <HOLYMessage size={16} color="#AAB5B2" strokeWidth={1.5} className="flex-shrink-0" style={{ marginTop: '2px' }} />
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: '600', marginBottom: '2px' }}>
                  Professional Access
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.7, lineHeight: '150%' }}>
                  For studios, piercers, and wholesale inquiries
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

// Complete Chat Interface (Assembled) — Production Version
export function YONICompleteChatInterface() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Chat Trigger Button (Desktop/Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full shadow-lg transition-all"
        style={{
          backgroundColor: '#1A1A1A',
          cursor: 'pointer',
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 1000
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <HOLYMessage size={24} color="#F9F6F0" strokeWidth={1.5} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="rounded-2xl shadow-2xl overflow-hidden"
          style={{ 
            backgroundColor: '#FFFFFF',
            border: '2px solid #DADADA',
            position: 'fixed',
            bottom: '96px',
            right: '24px',
            width: '420px',
            maxHeight: '640px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000
          }}
        >
          {/* Header */}
          <div 
            className="p-4 flex items-center justify-between"
            style={{ backgroundColor: '#1A1A1A', borderBottom: '2px solid #DADADA' }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
                style={{ 
                  border: '2px solid #AAB5B2',
                  backgroundColor: '#F9F6F0'
                }}
              >
                <ImageWithFallback
                  src={yoniProfileImage}
                  alt="YONI Assistant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  color: '#F9F6F0',
                  fontWeight: '600',
                  marginBottom: '2px'
                }}>
                  YONI™ Assistant
                </p>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '11px', 
                  color: '#F9F6F0',
                  opacity: 0.7
                }}>
                  Online · AI Ritual Guide
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ cursor: 'pointer', color: '#F9F6F0', fontSize: '20px' }}
            >
              ×
            </button>
          </div>

          {/* Messages Area */}
          <div 
            className="flex-1 p-6 space-y-6 overflow-y-auto"
            style={{ backgroundColor: '#FFFFFF', maxHeight: '480px' }}
          >
            <YONIChatWelcome />
          </div>

          {/* Input Area */}
          <YONIChatInput />
        </div>
      )}
    </div>
  );
}

// Chat Interface Demo (Contained) — For Design System Display
export function YONIChatInterfaceDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '500px' }}>
      {/* Chat Trigger Button (Demo - Absolute Position) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full shadow-lg transition-all"
        style={{
          backgroundColor: '#1A1A1A',
          cursor: 'pointer',
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          zIndex: 10
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <HOLYMessage size={24} color="#F9F6F0" strokeWidth={1.5} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="rounded-2xl shadow-2xl overflow-hidden"
          style={{ 
            backgroundColor: '#FFFFFF',
            border: '2px solid #DADADA',
            position: 'absolute',
            bottom: '96px',
            right: '24px',
            width: '420px',
            maxWidth: 'calc(100% - 48px)',
            maxHeight: '640px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 10
          }}
        >
          {/* Header */}
          <div 
            className="p-4 flex items-center justify-between"
            style={{ backgroundColor: '#1A1A1A', borderBottom: '2px solid #DADADA' }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
                style={{ 
                  border: '2px solid #B3C4C1',
                  backgroundColor: '#F9F6F0'
                }}
              >
                <ImageWithFallback
                  src={yoniProfileImage}
                  alt="YONI Assistant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px', 
                  color: '#F9F6F0',
                  fontWeight: '600',
                  marginBottom: '2px'
                }}>
                  YONI™ Assistant
                </p>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '11px', 
                  color: '#F9F6F0',
                  opacity: 0.7
                }}>
                  Online · AI Ritual Guide
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ cursor: 'pointer', color: '#F9F6F0', fontSize: '20px', border: 'none', background: 'transparent' }}
            >
              ×
            </button>
          </div>

          {/* Messages Area */}
          <div 
            className="flex-1 p-6 space-y-6 overflow-y-auto"
            style={{ backgroundColor: '#FFFFFF', maxHeight: '480px' }}
          >
            <YONIChatWelcome />
          </div>

          {/* Input Area */}
          <YONIChatInput />
        </div>
      )}
    </div>
  );
}
