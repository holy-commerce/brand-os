import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { Switch } from '../components/ui/switch';
import { Separator } from '../components/ui/separator';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ChevronRight, Plus, Search, User, Mail, AlertCircle, CheckCircle, Info } from 'lucide-react';

export default function BaseComponentsPage() {
  return (
    <div className="space-y-8">
      
      {/* Buttons */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <h2 className="mb-8" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
          Buttons
        </h2>
        <div className="space-y-8">
          <div className="flex flex-wrap gap-4">
            <Button style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>Primary Button</Button>
            <Button variant="outline" style={{ borderColor: '#DADADA', color: '#1A1A1A' }}>Secondary Button</Button>
            <Button style={{ backgroundColor: '#9C887A', color: '#F9F6F0' }}>Smoky Umber</Button>
            <Button style={{ backgroundColor: '#D9C4BB', color: '#1A1A1A' }}>Veil Clay</Button>
            <Button style={{ backgroundColor: '#AAB5B2', color: '#F9F6F0' }}>Fogstone Blue</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>
              <Plus className="mr-2 h-4 w-4" />
              With Icon
            </Button>
            <Button variant="outline" style={{ borderColor: '#DADADA', color: '#1A1A1A' }}>
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-accent-foreground">
              Ghost Button
            </Button>
            <Button disabled style={{ backgroundColor: '#DADADA', color: '#1A1A1A', opacity: 0.5 }}>
              Disabled
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>Small</Button>
            <Button size="default" style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>Medium</Button>
            <Button size="lg" style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>Large</Button>
          </div>
        </div>
      </div>

      {/* Form Inputs */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <h2 className="mb-8" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
          Form Inputs
        </h2>
        <div className="space-y-8 max-w-md">
          <div className="space-y-3">
            <Label style={{ color: '#1A1A1A' }}>Text Input</Label>
            <Input placeholder="Enter text..." style={{ borderColor: '#DADADA', backgroundColor: '#FFFFFF' }} />
          </div>
          <div className="space-y-3">
            <Label style={{ color: '#1A1A1A' }}>Focused Input</Label>
            <Input placeholder="Focused state" style={{ borderColor: '#1A1A1A', borderWidth: '2px', backgroundColor: '#FFFFFF' }} />
          </div>
          <div className="space-y-3">
            <Label style={{ color: '#1A1A1A', opacity: 0.5 }}>Disabled Input</Label>
            <Input disabled placeholder="Disabled" style={{ backgroundColor: '#F9F6F0', opacity: 0.5 }} />
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="check1" style={{ borderColor: '#DADADA' }} />
            <Label htmlFor="check1" style={{ color: '#1A1A1A' }}>Checkbox Option</Label>
          </div>
          <div className="flex items-center space-x-3">
            <Switch style={{ backgroundColor: '#1A1A1A' }} />
            <Label style={{ color: '#1A1A1A' }}>Toggle Switch</Label>
          </div>
        </div>
      </div>

      {/* Badges & Tags */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <h2 className="mb-8" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
          Badges & Tags
        </h2>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <Badge style={{ backgroundColor: '#1A1A1A', color: '#F9F6F0' }}>Default</Badge>
            <Badge style={{ backgroundColor: '#9C887A', color: '#F9F6F0' }}>Umber</Badge>
            <Badge style={{ backgroundColor: '#D9C4BB', color: '#1A1A1A' }}>Clay</Badge>
            <Badge style={{ backgroundColor: '#AAB5B2', color: '#F9F6F0' }}>Fogstone</Badge>
            <Badge variant="outline" style={{ borderColor: '#DADADA', color: '#1A1A1A' }}>Outlined</Badge>
          </div>
          <div className="flex flex-wrap gap-3">
            <Badge style={{ backgroundColor: '#9C887A', color: '#F9F6F0' }}>
              <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#F9F6F0' }}></div>
              Active
            </Badge>
            <Badge style={{ backgroundColor: '#AAB5B2', color: '#F9F6F0' }}>
              <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#FFFFFF' }}></div>
              Pending
            </Badge>
            <Badge style={{ backgroundColor: '#DADADA', color: '#1A1A1A' }}>
              <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#1A1A1A' }}></div>
              Inactive
            </Badge>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <h2 className="mb-8" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
          Navigation
        </h2>
        <div className="space-y-8">
          <Tabs defaultValue="overview" className="w-full max-w-md">
            <TabsList style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <TabsTrigger value="overview" style={{ color: '#1A1A1A' }}>Overview</TabsTrigger>
              <TabsTrigger value="products" style={{ color: '#1A1A1A' }}>Products</TabsTrigger>
              <TabsTrigger value="about" style={{ color: '#1A1A1A' }}>About</TabsTrigger>
            </TabsList>
          </Tabs>
          <nav className="flex items-center gap-2">
            <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>Home</a>
            <ChevronRight size={16} style={{ color: '#1A1A1A', opacity: 0.4 }} />
            <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>Products</a>
            <ChevronRight size={16} style={{ color: '#1A1A1A', opacity: 0.4 }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>Current</span>
          </nav>
        </div>
      </div>

      {/* Feedback Components */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <h2 className="mb-8" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
          Feedback & Alerts
        </h2>
        <div className="space-y-6 max-w-2xl">
          <div className="p-5 rounded-xl flex items-start gap-4" style={{ backgroundColor: '#9C887A', border: '1px solid #9C887A' }}>
            <Info size={20} style={{ color: '#F9F6F0', marginTop: '2px', flexShrink: 0 }} />
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0', fontWeight: '500' }}>Information</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9F6F0' }}>This is an informational message.</p>
            </div>
          </div>
          <div className="p-5 rounded-xl flex items-start gap-4" style={{ backgroundColor: '#AAB5B2', border: '1px solid #AAB5B2' }}>
            <CheckCircle size={20} style={{ color: '#1A1A1A', marginTop: '2px', flexShrink: 0 }} />
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>Success</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>Action completed successfully.</p>
            </div>
          </div>
          <div className="p-5 rounded-xl flex items-start gap-4" style={{ backgroundColor: '#D9C4BB', border: '1px solid #D9C4BB' }}>
            <AlertCircle size={20} style={{ color: '#1A1A1A', marginTop: '2px', flexShrink: 0 }} />
            <div className="space-y-2">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>Warning</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>Please review before proceeding.</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>Progress Bar</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>75%</span>
            </div>
            <Progress value={75} style={{ backgroundColor: '#DADADA' }} />
          </div>
        </div>
      </div>

      {/* Data Display */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <h2 className="mb-8" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
          Data Display
        </h2>
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <Avatar style={{ backgroundColor: '#D9C4BB' }}>
              <AvatarFallback style={{ backgroundColor: '#D9C4BB', color: '#1A1A1A' }}>JD</AvatarFallback>
            </Avatar>
            <Avatar style={{ backgroundColor: '#9C887A' }}>
              <AvatarFallback style={{ backgroundColor: '#9C887A', color: '#F9F6F0' }}>AS</AvatarFallback>
            </Avatar>
            <Avatar style={{ backgroundColor: '#AAB5B2' }}>
              <AvatarFallback style={{ backgroundColor: '#AAB5B2', color: '#F9F6F0' }}>
                <User size={20} />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <Card style={{ borderColor: '#DADADA' }}>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A', marginBottom: '16px' }}>Basic Card</CardTitle>
                <CardDescription style={{ color: '#1A1A1A', opacity: 0.7 }}>Card with title and description</CardDescription>
              </CardHeader>
            </Card>
            <Card style={{ backgroundColor: '#D9C4BB', borderColor: '#D9C4BB' }}>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A', marginBottom: '16px' }}>Accent Card</CardTitle>
                <CardDescription style={{ color: '#1A1A1A', opacity: 0.7, paddingBottom: '8px' }}>Veil Clay background</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="space-y-4 max-w-md">
            <div className="p-5 rounded-xl flex items-center gap-4" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D9C4BB' }}>
                <User size={20} style={{ color: '#1A1A1A' }} />
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>Sarah Johnson</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>Customer</p>
              </div>
            </div>
            <div className="p-5 rounded-xl flex items-center gap-4" style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#AAB5B2' }}>
                <Mail size={20} style={{ color: '#1A1A1A' }} />
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>Email Inquiry</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.6 }}>hello@holy.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Elements */}
      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #DADADA' }}>
        <h2 className="mb-8" style={{ fontFamily: 'Garamond, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', lineHeight: '120%' }}>
          Layout Elements
        </h2>
        <div className="space-y-12">
          
          {/* Section: Dividers & Separators */}
          <div className="space-y-4">
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '16px' }}>
              Dividers & Separators
            </h3>
            <div className="space-y-6 max-w-2xl">
              <div className="space-y-2">
                <Separator style={{ backgroundColor: '#DADADA' }} />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Standard divider · #DADADA · 1px
                </p>
              </div>
              <div className="space-y-2">
                <Separator style={{ backgroundColor: '#5E6458', height: '2px' }} />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Relic Green emphasis · #5E6458 · 2px
                </p>
              </div>
              <div className="space-y-2">
                <Separator style={{ backgroundColor: '#1A1A1A', height: '2px' }} />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                  Temple Black strong · #1A1A1A · 2px
                </p>
              </div>
            </div>
          </div>

          {/* Section: Product Grid Layouts */}
          <div className="space-y-4">
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '16px' }}>
              Product Grid Patterns
            </h3>
            
            {/* 4-Column Grid */}
            <div className="space-y-3">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                4-Column Grid (Desktop PLP)
              </p>
              <div className="grid grid-cols-4 gap-4">
                {['Ritual Touch', 'Ritual Vital', 'Ritual Union', 'Ritual Renewal'].map((name, i) => (
                  <div key={i} className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 p-4" style={{ backgroundColor: '#F9F6F0', border: '1px solid #D7D0C5' }}>
                    <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#D9C4BB' }}></div>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', textAlign: 'center' }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Column Grid */}
            <div className="space-y-3">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                3-Column Grid (Featured Collections)
              </p>
              <div className="grid grid-cols-3 gap-6">
                {['Discovery Set', 'Travel Ritual', 'Gift Collection'].map((name, i) => (
                  <div key={i} className="aspect-[3/4] rounded-2xl flex flex-col items-center justify-end p-6" style={{ backgroundColor: i === 1 ? '#9C887A' : '#D7D0C5', border: '1px solid #AAB5B2' }}>
                    <span style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: i === 1 ? '#FFFFFF' : '#1A1A1A', textAlign: 'center' }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2-Column Grid */}
            <div className="space-y-3">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                2-Column Grid (Editorial Content)
              </p>
              <div className="grid grid-cols-2 gap-8">
                {['Ritual Philosophy', 'Ingredient Stories'].map((name, i) => (
                  <div key={i} className="aspect-video rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#AAB5B2', border: '1px solid #8C8981' }}>
                    <span style={{ fontFamily: 'Garamond, serif', fontSize: '16px', color: '#FFFFFF' }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Container Patterns */}
          <div className="space-y-4">
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '16px' }}>
              Container & Section Patterns
            </h3>

            {/* Section Header with Background */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#F9F6F0', border: '2px solid #D7D0C5' }}>
              <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', marginBottom: '8px' }}>
                Discover Your Ritual
              </h4>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7, maxWidth: '480px' }}>
                Thoughtfully crafted formulations to support your sacred self-care practice
              </p>
            </div>

            {/* Content Card with Inset */}
            <div className="p-6 rounded-2xl space-y-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DADADA', boxShadow: '0px 2px 8px rgba(0,0,0,0.08)' }}>
              <div className="flex items-center justify-between">
                <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
                  Your Sacred Items
                </h4>
                <Badge style={{ backgroundColor: '#5E6458', color: '#FFFFFF', borderRadius: '12px', padding: '4px 12px' }}>
                  3 Items
                </Badge>
              </div>
              <div className="p-4 rounded-xl" style={{ backgroundColor: '#F9F6F0' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                  Inset content area for nested information or grouped elements
                </p>
              </div>
            </div>

            {/* Dark Background Section */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#1A1A1A', border: '2px solid #5E6458' }}>
              <h4 style={{ fontFamily: 'Garamond, serif', fontSize: '24px', color: '#FFFFFF', marginBottom: '8px' }}>
                Temple Black Container
              </h4>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#FFFFFF', opacity: 0.8, marginBottom: '16px' }}>
                Used for emphasis sections, ritual moments, or sacred messaging
              </p>
              <Button style={{ backgroundColor: '#D9C4BB', color: '#1A1A1A', border: 'none' }}>
                Begin Your Ritual
              </Button>
            </div>
          </div>

          {/* Section: Modal & Dialog Patterns */}
          <div className="space-y-4">
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '16px' }}>
              Modal & Dialog Patterns
            </h3>
            
            {/* Confirmation Modal */}
            <Card style={{ borderColor: '#DADADA', boxShadow: '0px 4px 16px rgba(0,0,0,0.12)', maxWidth: '480px' }}>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A', marginBottom: '8px' }}>
                  Remove from Your Ritual?
                </CardTitle>
                <CardDescription style={{ color: '#1A1A1A', opacity: 0.7 }}>
                  This item will be removed from your sacred collection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3 justify-end">
                  <Button variant="outline" style={{ borderColor: '#DADADA', color: '#1A1A1A' }}>
                    Keep Item
                  </Button>
                  <Button style={{ backgroundColor: '#5E6458', color: '#FFFFFF' }}>
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Success Message */}
            <Card style={{ borderColor: '#5E6458', backgroundColor: '#F9F6F0', maxWidth: '480px' }}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} style={{ color: '#5E6458', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500', marginBottom: '4px' }}>
                      Added to Your Ritual
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A1A1A', opacity: 0.7 }}>
                      Your sacred items await in the cart
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Section: Spacing Scale Reference */}
          <div className="space-y-4">
            <h3 style={{ fontFamily: 'Garamond, serif', fontSize: '18px', color: '#1A1A1A', marginBottom: '16px' }}>
              Spacing Scale Reference
            </h3>
            <div className="space-y-3">
              {[
                { label: '4px', value: '4px', usage: 'Tight spacing (icon + text)' },
                { label: '8px', value: '8px', usage: 'Small gaps (badge groups)' },
                { label: '12px', value: '12px', usage: 'Component padding' },
                { label: '16px', value: '16px', usage: 'Standard spacing' },
                { label: '24px', value: '24px', usage: 'Section gaps' },
                { label: '32px', value: '32px', usage: 'Large section spacing' },
                { label: '48px', value: '48px', usage: 'Page section dividers' },
              ].map((spacing, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="rounded" style={{ width: spacing.value, height: '32px', backgroundColor: '#D9C4BB', border: '1px solid #AAB5B2' }}></div>
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                      {spacing.label}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
                      {spacing.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}