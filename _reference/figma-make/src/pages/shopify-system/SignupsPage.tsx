import { TM } from '../../components/core-system';
import { HOLYDocument, HOLYSparkle } from '../../components/icons/HOLYIcons';
import { useState } from 'react';

/**
 * ========================================
 * SIGNUPS PAGE
 * HØLY | Ritual Care™ Design System
 * ========================================
 * 
 * Email signup and capture experiences for Shopify.
 * Modal, embedded, inline, and mobile signup variants.
 * 
 * Engineering Handoff:
 * - Integrate with Klaviyo for email marketing
 * - Form validation and error states
 * - GDPR compliance with consent checkbox
 */

export default function SignupsPage() {
  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="max-w-7xl mx-auto p-8 space-y-20">
        
        {/* Page Header */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="flex items-center gap-3 mb-3">
              <HOLYDocument size={32} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
              <h1 style={{ fontFamily: 'Garamond, serif', fontSize: '36px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%', margin: 0 }}>
                Signup Experiences
              </h1>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.7, marginBottom: '16px' }}>
              Email capture experiences for HØLY | Ritual Care<TM />. Modal, embedded, inline, and mobile variants with Klaviyo integration.
            </p>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: '160%', opacity: 0.6, margin: 0 }}>
                <strong>Design Principles:</strong> Minimal friction. Clear value proposition. GDPR compliant. Mobile-optimized.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Signup */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Modal Signup (Welcome Popup)
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              First-visit popup with luxury aesthetic. Delayed trigger (5 seconds) to avoid disruption.
            </p>
          </div>

          <div className="p-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(26,26,26,0.5)', minHeight: '500px' }}>
            <div className="p-12 rounded-2xl max-w-md" style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
              <button
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  fontSize: '24px',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  color: '#8C8981',
                }}
              >
                ×
              </button>

              <div className="text-center space-y-6">
                <HOLYSparkle size={48} color="#D7D0C5" opacity={1} strokeWidth={1.5} />
                
                <div>
                  <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '12px' }}>
                    Begin Your Ritual
                  </h2>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                    Join the HØLY community and receive 15% off your first ritual
                  </p>
                </div>

                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      width: '100%',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: '#1A1A1A',
                      backgroundColor: '#F9F6F0',
                      padding: '14px',
                      borderRadius: '8px',
                      border: '1px solid #DADADA',
                    }}
                  />
                  <button
                    style={{
                      width: '100%',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#F9F6F0',
                      backgroundColor: '#1A1A1A',
                      padding: '14px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Subscribe
                  </button>
                </div>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#8C8981', lineHeight: '140%' }}>
                  By subscribing, you agree to receive marketing emails from HØLY<TM variant="logo" />.
                  You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
              Shopify Section: sections/popup-newsletter.liquid
            </p>
            <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<div id="newsletterPopup" class="popup-overlay">
  <div class="popup-modal">
    <button class="popup-close" onclick="closePopup()">×</button>
    
    <div class="popup-content">
      {% render 'icon', icon_name: 'sparkle', size: 48 %}
      
      <h2>{{ section.settings.heading }}</h2>
      <p>{{ section.settings.subtext }}</p>
      
      <form action="/contact#newsletter" method="post" class="newsletter-form">
        <input type="hidden" name="contact[tags]" value="newsletter">
        <input 
          type="email" 
          name="contact[email]" 
          placeholder="Enter your email"
          required
        >
        <button type="submit" class="btn-primary">
          {{ section.settings.button_text }}
        </button>
      </form>
      
      <p class="popup-legal">
        {{ section.settings.legal_text }}
      </p>
    </div>
  </div>
</div>

<script>
// Show popup after 5 seconds if not previously dismissed
setTimeout(() => {
  if (!localStorage.getItem('newsletterDismissed')) {
    document.getElementById('newsletterPopup').classList.add('active');
  }
}, 5000);

function closePopup() {
  document.getElementById('newsletterPopup').classList.remove('active');
  localStorage.setItem('newsletterDismissed', 'true');
}
</script>`}
            </pre>
          </div>
        </section>

        {/* Embedded Signup */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Embedded Signup (Footer)
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Newsletter signup in footer. Single-line inline form.
            </p>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#1A1A1A', border: '2px solid #1A1A1A' }}>
            <div className="max-w-md mx-auto space-y-4">
              <div className="text-center">
                <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#F9F6F0', lineHeight: '120%', marginBottom: '8px' }}>
                  Join the Ritual
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#F9F6F0', opacity: 0.7 }}>
                  Sacred wisdom, new arrivals, and exclusive offers
                </p>
              </div>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  style={{
                    flex: 1,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#1A1A1A',
                    backgroundColor: '#F9F6F0',
                    padding: '12px',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                />
                <button
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1A1A1A',
                    backgroundColor: '#D7D0C5',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
              Shopify Snippet: snippets/newsletter-inline.liquid
            </p>
            <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<div class="newsletter-inline">
  <h3>{{ title }}</h3>
  <p>{{ description }}</p>
  
  <form action="/contact#newsletter" method="post" class="newsletter-form-inline">
    <input type="hidden" name="contact[tags]" value="newsletter">
    <div class="form-row">
      <input 
        type="email" 
        name="contact[email]" 
        placeholder="Your email"
        required
      >
      <button type="submit" class="btn-secondary">
        Subscribe
      </button>
    </div>
  </form>
</div>`}
            </pre>
          </div>
        </section>

        {/* Inline CTA Signup */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Inline CTA Signup
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Full-width banner for homepage or mid-page placement.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
            <div 
              className="p-16 flex flex-col items-center justify-center gap-6"
              style={{ 
                background: 'linear-gradient(135deg, #D9C4BB 0%, #AAB5B2 100%)',
                minHeight: '300px',
              }}
            >
              <div className="text-center max-w-xl space-y-4">
                <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '40px', color: '#1A1A1A', lineHeight: '120%' }}>
                  Receive Sacred Wisdom
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
                  Join our community to receive ritual guidance, new arrivals, and exclusive access
                </p>
              </div>

              <div className="flex gap-3 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#1A1A1A',
                    backgroundColor: '#FFFFFF',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: '2px solid rgba(26,26,26,0.1)',
                  }}
                />
                <button
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#F9F6F0',
                    backgroundColor: '#1A1A1A',
                    padding: '14px 32px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
              Shopify Section: sections/newsletter-banner.liquid
            </p>
            <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<div class="newsletter-banner" style="
  background: linear-gradient(135deg, 
    {{ section.settings.color_start }}, 
    {{ section.settings.color_end }}
  );
">
  <div class="newsletter-banner-content">
    <h2>{{ section.settings.heading }}</h2>
    <p>{{ section.settings.subtext }}</p>
    
    <form action="/contact#newsletter" method="post" class="newsletter-banner-form">
      <input type="hidden" name="contact[tags]" value="newsletter,homepage">
      <input 
        type="email" 
        name="contact[email]" 
        placeholder="{{ section.settings.placeholder }}"
        required
      >
      <button type="submit" class="btn-primary">
        {{ section.settings.button_text }}
      </button>
    </form>
  </div>
</div>`}
            </pre>
          </div>
        </section>

        {/* Mobile Optimized */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Mobile Optimized Signup
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Bottom-drawer signup for mobile devices. Stacks form vertically.
            </p>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #DADADA' }}>
              <div className="p-8" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <HOLYSparkle size={32} color="#D7D0C5" opacity={1} strokeWidth={1.5} />
                    <button style={{ fontSize: '20px', border: 'none', background: 'none', cursor: 'pointer', color: '#8C8981' }}>
                      ×
                    </button>
                  </div>

                  <div>
                    <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
                      Welcome to HØLY<TM variant="logo" />
                    </h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
                      Join our community for 15% off your first ritual
                    </p>
                  </div>

                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Email address"
                      style={{
                        width: '100%',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        color: '#1A1A1A',
                        backgroundColor: '#F9F6F0',
                        padding: '16px',
                        borderRadius: '8px',
                        border: '1px solid #DADADA',
                      }}
                    />
                    <button
                      style={{
                        width: '100%',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#F9F6F0',
                        backgroundColor: '#1A1A1A',
                        padding: '16px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                      }}
                    >
                      Get 15% Off
                    </button>
                  </div>

                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#8C8981', lineHeight: '140%', textAlign: 'center' }}>
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
              Mobile Drawer CSS
            </p>
            <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1A1A1A', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`@media (max-width: 768px) {
  .newsletter-drawer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    z-index: 1000;
  }

  .newsletter-drawer.active {
    transform: translateY(0);
  }
}`}
            </pre>
          </div>
        </section>

        {/* Klaviyo Integration */}
        <section className="space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Klaviyo Integration
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, lineHeight: '160%' }}>
              Connect signup forms to Klaviyo for email marketing automation.
            </p>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
            <div className="space-y-6">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#F9F6F0', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Klaviyo Form Submission
                </p>
                <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<form id="newsletterForm">
  <input type="email" name="email" required>
  <button type="submit">Subscribe</button>
</form>

<script>
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = e.target.email.value;
  
  // Klaviyo API submission
  fetch('https://a.klaviyo.com/api/v2/list/YOUR_LIST_ID/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: 'YOUR_API_KEY',
      profiles: [{ email: email }]
    })
  })
  .then(response => {
    // Show success message
    alert('Thank you for subscribing!');
  })
  .catch(error => {
    // Show error message
    alert('Something went wrong. Please try again.');
  });
});
</script>`}
                </pre>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: '#5E6458' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#F9F6F0', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Alternative: Shopify Native Form
                </p>
                <pre style={{ fontFamily: 'monospace', fontSize: '11px', color: '#F9F6F0', lineHeight: '160%', margin: 0, overflow: 'auto' }}>
{`<form action="/contact#newsletter" method="post">
  <input type="hidden" name="contact[tags]" value="newsletter">
  <input type="email" name="contact[email]" required>
  <button type="submit">Subscribe</button>
</form>

<!-- Then sync Shopify customers to Klaviyo via integration -->`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Notes */}
        <section className="space-y-6">
          <div>
            <h2 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '120%', marginBottom: '8px' }}>
              Engineering Handoff Notes
            </h2>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#1A1A1A', border: '2px solid #1A1A1A' }}>
            <div className="space-y-4">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Form Validation
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Use HTML5 validation (required, type="email"). Add custom error messages for better UX. Show inline validation states (success, error).
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  GDPR Compliance
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Include clear consent language. Add optional checkbox for explicit consent in EU. Link to privacy policy. Store consent timestamps in Klaviyo.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Popup Timing
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  Delay popup by 5-10 seconds. Don't show if user previously dismissed (use localStorage). Don't show on mobile on first page load.
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#D7D0C5', fontWeight: '600', marginBottom: '4px' }}>
                  Success States
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9F6F0', lineHeight: '160%', opacity: 0.8 }}>
                  After successful signup, replace form with thank you message. Optionally offer discount code or redirect to Ritual Finder.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
