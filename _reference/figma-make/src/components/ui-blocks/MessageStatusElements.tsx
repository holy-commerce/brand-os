import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { CheckCircle, AlertCircle, Info, X, AlertTriangle } from 'lucide-react';

export function SuccessBanner() {
  return (
    <div 
      className="flex items-start gap-4 p-5 rounded-xl"
      style={{ backgroundColor: '#AAB5B2', border: '1px solid #AAB5B2' }}
    >
      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#1A1A1A', marginTop: '2px' }} />
      <div className="flex-1 space-y-2">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
          Success
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8 }}>
          Your ritual preferences have been saved
        </p>
      </div>
      <Button variant="ghost" size="icon">
        <X className="w-4 h-4" style={{ color: '#1A1A1A' }} />
      </Button>
    </div>
  );
}

export function ErrorBanner() {
  return (
    <div 
      className="flex items-start gap-4 p-5 rounded-xl"
      style={{ backgroundColor: '#D9C4BB', border: '1px solid #D9C4BB' }}
    >
      <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#1A1A1A', marginTop: '2px' }} />
      <div className="flex-1 space-y-2">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
          Error
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8 }}>
          Unable to process payment. Please check your details and try again.
        </p>
      </div>
      <Button variant="ghost" size="icon">
        <X className="w-4 h-4" style={{ color: '#1A1A1A' }} />
      </Button>
    </div>
  );
}

export function InfoBanner() {
  return (
    <div 
      className="flex items-start gap-4 p-5 rounded-xl"
      style={{ backgroundColor: '#9C887A', border: '1px solid #9C887A' }}
    >
      <Info className="w-5 h-5 flex-shrink-0" style={{ color: '#F9F6F0', marginTop: '2px' }} />
      <div className="flex-1 space-y-2">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', fontWeight: '500' }}>
          Information
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', opacity: 0.8 }}>
          Our studio will be closed for the winter solstice, December 21-22
        </p>
      </div>
      <Button variant="ghost" size="icon">
        <X className="w-4 h-4" style={{ color: '#F9F6F0' }} />
      </Button>
    </div>
  );
}

export function WarningBanner() {
  return (
    <div 
      className="flex items-start gap-4 p-5 rounded-xl"
      style={{ backgroundColor: '#F9F6F0', border: '2px solid #9C887A' }}
    >
      <AlertTriangle className="w-5 h-5 flex-shrink-0" style={{ color: '#1A1A1A', marginTop: '2px' }} />
      <div className="flex-1 space-y-2">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
          Warning
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.8 }}>
          This product is low in stock. Order soon to secure your ritual essentials.
        </p>
      </div>
      <Button variant="ghost" size="icon">
        <X className="w-4 h-4" style={{ color: '#1A1A1A' }} />
      </Button>
    </div>
  );
}

export function TooltipComponent() {
  return (
    <div 
      className="p-3 rounded-lg shadow-lg max-w-xs"
      style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0', boxShadow: '0px 4px 16px rgba(0,0,0,0.16)' }}
    >
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', lineHeight: '150%' }}>
        All HØLY products are formulated with clean, plant-based ingredients and tested for purity
      </p>
    </div>
  );
}

export function ModalDialogComponent() {
  return (
    <Card 
      className="max-w-md"
      style={{ borderColor: '#DADADA', boxShadow: '0px 8px 32px rgba(0,0,0,0.12)' }}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
              Leave Your Ritual?
            </CardTitle>
            <CardDescription style={{ color: '#1A1A1A', opacity: 0.7 }}>
              Your cart items will be saved for your return
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon">
            <X className="w-4 h-4" style={{ color: '#1A1A1A' }} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-3 justify-end">
          <Button variant="outline" style={{ borderColor: '#DADADA', color: '#1A1A1A' }}>
            Stay
          </Button>
          <Button style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>
            Leave
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function ToastNotification() {
  return (
    <div 
      className="flex items-start gap-4 p-4 rounded-xl shadow-lg max-w-sm"
      style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA', boxShadow: '0px 8px 24px rgba(0,0,0,0.08)' }}
    >
      <div 
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: '#AAB5B2' }}
      >
        <CheckCircle className="w-4 h-4" style={{ color: '#1A1A1A' }} />
      </div>
      <div className="flex-1 space-y-1">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
          Added to Cart
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7 }}>
          Daily Ritual Serum has been added to your cart
        </p>
      </div>
      <Button variant="ghost" size="icon">
        <X className="w-4 h-4" style={{ color: '#1A1A1A' }} />
      </Button>
    </div>
  );
}

export function InlineErrorMessage() {
  return (
    <div className="flex items-start gap-2">
      <AlertCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#1A1A1A', marginTop: '2px' }} />
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.8 }}>
        Please enter a valid email address
      </p>
    </div>
  );
}

export function LoadingStateCard() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <CardContent className="p-8 text-center space-y-4">
        <div 
          className="w-12 h-12 rounded-full mx-auto animate-spin"
          style={{ border: '3px solid #F9F6F0', borderTopColor: '#1A1A1A' }}
        />
        <div className="space-y-2">
          <p style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A' }}>
            Preparing Your Ritual
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
            Please wait while we process your order...
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function ConfirmationDialog() {
  return (
    <Card 
      className="max-w-md"
      style={{ borderColor: '#DADADA', boxShadow: '0px 8px 32px rgba(0,0,0,0.12)' }}
    >
      <CardContent className="p-8 space-y-6">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
          style={{ backgroundColor: '#AAB5B2' }}
        >
          <CheckCircle className="w-8 h-8" style={{ color: '#1A1A1A' }} />
        </div>
        
        <div className="text-center space-y-3">
          <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#1A1A1A' }}>
            Welcome to the Circle
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1A1A1A', opacity: 0.8, lineHeight: '150%' }}>
            Your account has been created. Begin exploring your sacred wellness journey.
          </p>
        </div>
        
        <Button className="w-full" style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}

export function SystemMaintenanceBanner() {
  return (
    <div 
      className="w-full p-4 text-center"
      style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}
    >
      <div className="flex items-center justify-center gap-3">
        <Info className="w-4 h-4" />
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
          Scheduled maintenance: Our site will be offline Sunday, 2-4 AM PST
        </p>
      </div>
    </div>
  );
}
