import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Check, CreditCard, Truck, MapPin } from 'lucide-react';
import { HOLYSparkle } from '../icons/HOLYIcons';

export function AddressSummaryBlock() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
            Shipping Address
          </CardTitle>
          <Button variant="ghost" size="sm" style={{ color: '#1A1A1A' }}>
            Edit
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
          Sarah Johnson
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
          123 Ritual Way, Apt 4B
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
          San Francisco, CA 94102
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
          United States
        </p>
      </CardContent>
    </Card>
  );
}

export function ShippingOptionBlock() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <CardHeader>
        <CardTitle style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
          Shipping Method
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div 
          className="flex items-start gap-4 p-4 rounded-xl cursor-pointer"
          style={{ border: '2px solid #1A1A1A', backgroundColor: '#F9F6F0' }}
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Truck className="w-4 h-4" style={{ color: '#1A1A1A' }} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Standard Shipping
              </p>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7 }}>
              5-7 business days · Carbon-neutral delivery
            </p>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
            Free
          </p>
        </div>
        
        <div 
          className="flex items-start gap-4 p-4 rounded-xl cursor-pointer"
          style={{ border: '1px solid #DADADA', backgroundColor: '#FFFFFF' }}
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Truck className="w-4 h-4" style={{ color: '#1A1A1A' }} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                Express Shipping
              </p>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7 }}>
              2-3 business days
            </p>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
            $12
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function PaymentMethodSelector() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <CardHeader>
        <CardTitle style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
          Payment Method
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Credit Card - Selected */}
        <div 
          className="flex items-center gap-4 p-4 rounded-xl cursor-pointer"
          style={{ border: '2px solid #1A1A1A', backgroundColor: '#F9F6F0' }}
        >
          <CreditCard className="w-5 h-5" style={{ color: '#1A1A1A' }} />
          <div className="flex-1">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
              Credit Card
            </p>
            <div className="flex gap-2 mt-1">
              {/* Visa */}
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                <rect width="32" height="20" rx="2" fill="#1A1F71"/>
                <path d="M13.8 6.8l-2.4 6.4h-1.6l-1.2-4.6c-.1-.3-.2-.4-.4-.5-.4-.2-.9-.4-1.4-.5l0-.2h2.5c.3 0 .6.2.6.6l.6 3.2 1.5-3.8h1.8zm7.2 4.3c0-1.7-2.3-1.8-2.3-2.5 0-.2.2-.4.7-.5.2 0 .9-.1 1.6.3l.3-1.4c-.4-.1-.9-.3-1.5-.3-1.6 0-2.7.9-2.7 2.1 0 .9.8 1.4 1.4 1.7.6.3.8.5.8.8 0 .4-.5.6-.9.6-.8 0-1.2-.1-1.8-.4l-.3 1.5c.4.2 1.2.3 2 .3 1.7 0 2.8-.8 2.8-2.2zm4.2 2.1h1.6l-1.4-6.4h-1.5c-.3 0-.6.2-.7.5l-2.5 5.9h1.7l.3-.9h2.1l.2.9zm-1.8-2.1l.9-2.4.5 2.4h-1.4zm-7.1-4.3l-1.3 6.4h-1.6l1.3-6.4h1.6z" fill="white"/>
              </svg>
              
              {/* Mastercard */}
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                <rect width="32" height="20" rx="2" fill="#F4F4F4"/>
                <circle cx="12" cy="10" r="5" fill="#EB001B"/>
                <circle cx="20" cy="10" r="5" fill="#FF5F00"/>
                <path d="M16 6.5c-1.1.9-1.8 2.2-1.8 3.5s.7 2.6 1.8 3.5c1.1-.9 1.8-2.2 1.8-3.5s-.7-2.6-1.8-3.5z" fill="#FF5F00"/>
              </svg>
              
              {/* Amex */}
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                <rect width="32" height="20" rx="2" fill="#006FCF"/>
                <path d="M9.5 7.5h2.2l-.6 1.5h1.5l.6-1.5h2.2l-.9 2.1.9 2.1h-2.2l-.6-1.5h-1.5l.6 1.5H9.5l-.9-2.1.9-2.1zm11.8 0l2.7 4.2h-2l-.4-.7h-2.4l-.4.7h-2l2.7-4.2h1.8zm-.9 2.2l-.6-1-.6 1h1.2z" fill="white"/>
              </svg>
            </div>
          </div>
          <div 
            className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#1A1A1A' }}
          >
            <Check className="w-3 h-3" style={{ color: '#F9F6F0' }} />
          </div>
        </div>
        
        {/* Apple Pay */}
        <div 
          className="flex items-center gap-4 p-4 rounded-xl cursor-pointer"
          style={{ border: '1px solid #DADADA', backgroundColor: '#FFFFFF' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16.5 7.5c-.6 0-1.5-.4-2.4-.4-1.2 0-2.5.7-3.1 1.8-1.3 2.3-.4 5.8.9 7.7.7.9 1.4 1.9 2.5 1.9 1 0 1.4-.7 2.6-.7 1.2 0 1.5.7 2.6.7 1.1 0 1.7-.9 2.4-1.8.8-1.1 1.1-2.1 1.1-2.2 0 0-2.1-.8-2.1-3.2 0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-3-1.6-.8-.1-1.5.4-2.2.4zm-.8-1.8c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.3.9.1 1.7-.4 2.3-1.1z" fill="#000000"/>
          </svg>
          <div className="flex-1">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
              Apple Pay
            </p>
          </div>
        </div>
        
        {/* Google Pay */}
        <div 
          className="flex items-center gap-4 p-4 rounded-xl cursor-pointer"
          style={{ border: '1px solid #DADADA', backgroundColor: '#FFFFFF' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.5 11.5v2.2h3.1c-.1.7-.8 2-3.1 2-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4c1.1 0 1.8.5 2.2.9l1.7-1.7C15.4 7.2 14.1 6.5 12.5 6.5c-3.1 0-5.7 2.5-5.7 5.7s2.5 5.7 5.7 5.7c3.3 0 5.5-2.3 5.5-5.6 0-.4 0-.7-.1-1h-5.4z" fill="#4285F4"/>
            <path d="M6.8 9.5l1.2.9c.3-.9 1.2-1.6 2.2-1.6v-2c-1.6 0-3 .8-3.8 2.1l.4.6z" fill="#EA4335"/>
            <path d="M12.5 17.8c1.5 0 2.8-.5 3.8-1.3l-1.8-1.5c-.5.3-1.1.5-1.9.5-1.5 0-2.7-1-3.2-2.3l-1.2.9c.9 1.8 2.7 3 4.3 2.7z" fill="#34A853"/>
            <path d="M7.8 12.3c-.1-.3-.2-.7-.2-1.1s.1-.7.2-1.1l-1.2-.9c-.4.7-.6 1.5-.6 2.3s.2 1.6.6 2.3l1.2-.9.0-.6z" fill="#FBBC05"/>
          </svg>
          <div className="flex-1">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
              Google Pay
            </p>
          </div>
        </div>
        
        {/* PayPal */}
        <div 
          className="flex items-center gap-4 p-4 rounded-xl cursor-pointer"
          style={{ border: '1px solid #DADADA', backgroundColor: '#FFFFFF' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8.3 20L9.2 14.5h-2.4L8.3 7h5.4c1.8 0 3.2.4 4 1.2.8.8 1 2 .7 3.5-.2 1-.6 1.8-1.2 2.5-.6.7-1.3 1.2-2.2 1.5-.8.3-1.8.4-2.9.4h-1.3L9.8 20H8.3z" fill="#003087"/>
            <path d="M15.8 7h1.4l-1 6.5c-.1.7-.5 1.3-1 1.7-.5.4-1.1.6-1.9.6h-1.1l.5-3.3h1.2c.6 0 1-.1 1.3-.4.3-.3.5-.7.6-1.3l.5-3.8h.5z" fill="#0070E0"/>
            <path d="M10.5 14.5h1.3c.8 0 1.4-.2 1.9-.6.5-.4.9-1 1-1.7l.5-3.3c.1-.7 0-1.2-.3-1.6-.3-.4-.8-.5-1.5-.5h-3.4l-1 7.5.5.2z" fill="#003087"/>
          </svg>
          <div className="flex-1">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
              PayPal
            </p>
          </div>
        </div>
        
        {/* Amazon Pay */}
        <div 
          className="flex items-center gap-4 p-4 rounded-xl cursor-pointer"
          style={{ border: '1px solid #DADADA', backgroundColor: '#FFFFFF' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18.5 16c-3.8 2.8-9.3 4.3-14 4.3-6.6 0-12.6-2.5-17.1-6.6-.4-.3 0-.8.4-.5 5.3 3.1 11.8 5 18.6 5 4.6 0 9.6-1 14.2-3 .7-.3 1.3.5.6 1-.2.3-.5.6-.7.8z" fill="#FF9900"/>
            <path d="M20.3 14c-.5-.6-3.2-.3-4.4-.1-.4 0-.5-.3-.1-.5 2.2-1.5 5.7-1.1 6.1-.6.4.6-.1 4.4-2.3 6.2-.3.3-.6.1-.5-.2.5-1.2 1.6-3.9 1.2-4.8z" fill="#FF9900"/>
            <path d="M18.2 5.5V4.8c0-.1 0-.2.2-.2h3.5c.1 0 .2.1.2.2v.6c0 .1-.1.2-.2.3l-1.8 2.6c.7 0 1.4.1 2 .4.1.1.2.2.2.3v.7c0 .1-.1.2-.2.2-1.2-.6-2.8-.7-4.1 0-.1 0-.2-.1-.2-.2V9c0-.1 0-.3.1-.4l2.1-3h-1.6c-.1 0-.2-.1-.2-.2v-.9zm-6.7 4.9h-.9c-.1 0-.2-.1-.2-.2V4.8c0-.1.1-.2.2-.2h.9c.1 0 .2.1.2.2v.7h0c.2-.8.7-1 1.4-1 .6 0 1.3.2 1.7.9.2-.7.8-.9 1.5-.9 1 0 1.6.4 1.6 1.7v3.2c0 .1-.1.2-.2.2h-.9c-.1 0-.2-.1-.2-.2V7.5c0-.5 0-.8-.3-1-.2-.2-.5-.2-.8-.2s-.8.2-1 .5c-.2.3-.2.7-.2 1.1v2.3c0 .1-.1.2-.2.2h-.9c-.1 0-.2-.1-.2-.2V7.5c0-.9-.1-1.5-.9-1.5-.8 0-.9.6-.9 1.5v2.7c0 .1-.1.2-.2.2zm-5.4 0c-.1 0-.2-.1-.2-.2l-.8-2.1c-.1-.2-.1-.3-.3-.3h-1.2l-.8 2.1c0 .1-.1.2-.2.2h-.9c-.1 0-.2-.1-.2-.2l2.5-6.2c0-.1.1-.2.2-.2h1c.1 0 .2.1.2.2l2.5 6.2c0 .1-.1.2-.2.2h-.4zm-1.3-3.1h1.4l-.7-1.9h0l-.7 1.9z" fill="#221F1F"/>
          </svg>
          <div className="flex-1">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
              Amazon Pay
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function RitualAffirmationDisplay() {
  return (
    <div 
      className="p-8 rounded-2xl text-center max-w-2xl mx-auto"
      style={{ backgroundColor: '#D9C4BB' }}
    >
      <div className="mb-6 flex justify-center">
        <HOLYSparkle size={40} color="#1A1A1A" opacity={0.8} strokeWidth={1.5} />
      </div>
      <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A', marginBottom: '16px' }}>
        Your Ritual Begins
      </h3>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.8, lineHeight: '160%' }}>
        Thank you for choosing sacred self-care. Your order is being prepared with intention and will arrive in 5-7 days.
      </p>
      <div 
        className="mt-6 p-4 rounded-xl inline-block"
        style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
      >
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
          Order #HL-2025-0142
        </p>
      </div>
    </div>
  );
}

export function CheckoutSummaryCard() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <CardHeader>
        <CardTitle style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
            Subtotal (3 items)
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
            $188
          </p>
        </div>
        <div className="flex justify-between">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
            Shipping
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
            Free
          </p>
        </div>
        <div className="flex justify-between">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
            Tax
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
            $15.04
          </p>
        </div>
        <div 
          className="pt-4 mt-4 flex justify-between"
          style={{ borderTop: '1px solid #DADADA' }}
        >
          <p style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A' }}>
            Total
          </p>
          <p style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', fontWeight: '500' }}>
            $203.04
          </p>
        </div>
        <Button 
          className="w-full py-6" 
          style={{ 
            backgroundColor: '#1A1A1A', 
            color: '#F9F6F0',
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          Complete Order
        </Button>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6, textAlign: 'center' }}>
          Carbon-neutral shipping included
        </p>
      </CardContent>
    </Card>
  );
}

export function OrderTrackingBlock() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <CardHeader>
        <CardTitle style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
          Order Tracking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start gap-4">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#1A1A1A' }}
          >
            <Check className="w-4 h-4" style={{ color: '#F9F6F0' }} />
          </div>
          <div className="flex-1">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
              Order Confirmed
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7 }}>
              Oct 15, 2:34 PM
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#1A1A1A' }}
          >
            <Check className="w-4 h-4" style={{ color: '#F9F6F0' }} />
          </div>
          <div className="flex-1">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
              Prepared with Intention
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7 }}>
              Oct 16, 9:15 AM
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#9C887A' }}
          >
            <Truck className="w-4 h-4" style={{ color: '#F9F6F0' }} />
          </div>
          <div className="flex-1">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
              In Transit
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7 }}>
              Expected Oct 20
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 opacity-40">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ border: '2px solid #DADADA' }}
          >
            <MapPin className="w-4 h-4" style={{ color: '#1A1A1A' }} />
          </div>
          <div className="flex-1">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
              Delivered
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7 }}>
              Pending
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
