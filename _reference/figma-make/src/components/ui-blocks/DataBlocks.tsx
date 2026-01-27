import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { HOLYLeaf } from '../icons/HOLYIcons';

export function MetricCard() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
            Daily Rituals Completed
          </p>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4" style={{ color: '#AAB5B2' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#AAB5B2', fontWeight: '500' }}>
              +12%
            </span>
          </div>
        </div>
        <p style={{ fontFamily: 'Garamond, serif', fontSize: '36px', color: '#1A1A1A', lineHeight: '100%' }}>
          42
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
          This month
        </p>
      </CardContent>
    </Card>
  );
}

export function MetricCardWithIcon() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: '#D9C4BB' }}
          >
            <HOLYLeaf size={20} color="#1A1A1A" />
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4" style={{ color: '#AAB5B2' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#AAB5B2', fontWeight: '500' }}>
              +8%
            </span>
          </div>
        </div>
        <p style={{ fontFamily: 'Garamond, serif', fontSize: '32px', color: '#1A1A1A', lineHeight: '100%', marginBottom: '8px' }}>
          156
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
          Wellness Minutes
        </p>
      </CardContent>
    </Card>
  );
}

export function MetricCardNegative() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
            Stress Level
          </p>
          <div className="flex items-center gap-1">
            <TrendingDown className="w-4 h-4" style={{ color: '#AAB5B2' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#AAB5B2', fontWeight: '500' }}>
              -18%
            </span>
          </div>
        </div>
        <p style={{ fontFamily: 'Garamond, serif', fontSize: '36px', color: '#1A1A1A', lineHeight: '100%' }}>
          Low
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.6 }}>
          Improvement from last week
        </p>
      </CardContent>
    </Card>
  );
}

export function ChartContainerPlaceholder() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <CardHeader>
        <CardTitle style={{ fontFamily: 'Garamond, serif', color: '#1A1A1A' }}>
          Ritual Consistency
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className="w-full rounded-xl flex items-center justify-center"
          style={{ height: '240px', backgroundColor: '#F9F6F0', border: '1px dashed #DADADA' }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.5 }}>
            Chart placeholder
          </p>
        </div>
        <div className="flex items-center justify-center gap-8 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#AAB5B2' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
              Completed
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D9C4BB' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A' }}>
              Missed
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ComparisonTableRow() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <CardContent className="p-0">
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: '1px solid #DADADA' }}>
              <th 
                className="text-left p-4"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, fontWeight: '500' }}
              >
                Metric
              </th>
              <th 
                className="text-right p-4"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, fontWeight: '500' }}
              >
                This Week
              </th>
              <th 
                className="text-right p-4"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, fontWeight: '500' }}
              >
                Last Week
              </th>
              <th 
                className="text-right p-4"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7, fontWeight: '500' }}
              >
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #DADADA' }}>
              <td className="p-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
                Morning Rituals
              </td>
              <td className="text-right p-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                7
              </td>
              <td className="text-right p-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
                5
              </td>
              <td className="text-right p-4">
                <div className="flex items-center justify-end gap-1">
                  <TrendingUp className="w-3 h-3" style={{ color: '#AAB5B2' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#AAB5B2', fontWeight: '500' }}>
                    +40%
                  </span>
                </div>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #DADADA' }}>
              <td className="p-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
                Wellness Minutes
              </td>
              <td className="text-right p-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                156
              </td>
              <td className="text-right p-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
                148
              </td>
              <td className="text-right p-4">
                <div className="flex items-center justify-end gap-1">
                  <TrendingUp className="w-3 h-3" style={{ color: '#AAB5B2' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#AAB5B2', fontWeight: '500' }}>
                    +5%
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
                Meditation Sessions
              </td>
              <td className="text-right p-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>
                4
              </td>
              <td className="text-right p-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>
                4
              </td>
              <td className="text-right p-4">
                <div className="flex items-center justify-end gap-1">
                  <Minus className="w-3 h-3" style={{ color: '#DADADA' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.5, fontWeight: '500' }}>
                    0%
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

export function ProgressMetricCard() {
  return (
    <Card style={{ borderColor: '#DADADA' }}>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <p style={{ fontFamily: 'Garamond, serif', fontSize: '20px', color: '#1A1A1A' }}>
            Monthly Goal Progress
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
            30 rituals completed this month
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '32px', color: '#1A1A1A', fontWeight: '500' }}>
              30
            </span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A1A1A', opacity: 0.7 }}>
              / 45 goal
            </span>
          </div>
          
          <div className="w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: '#F9F6F0' }}>
            <div 
              className="h-full transition-all"
              style={{ backgroundColor: '#AAB5B2', width: '67%' }}
            />
          </div>
          
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7 }}>
            67% complete · 15 rituals remaining
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { value: '7', label: 'Day Streak', change: '+2', trending: 'up' },
        { value: '42', label: 'Total Rituals', change: '+12%', trending: 'up' },
        { value: '156', label: 'Wellness Min', change: '+8%', trending: 'up' },
        { value: '92%', label: 'Consistency', change: '0%', trending: 'neutral' }
      ].map((stat, index) => (
        <div 
          key={index}
          className="p-6 rounded-xl"
          style={{ backgroundColor: '#F9F6F0', border: '1px solid #DADADA' }}
        >
          <div className="space-y-3">
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '28px', color: '#1A1A1A', lineHeight: '100%' }}>
              {stat.value}
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#1A1A1A', opacity: 0.7 }}>
              {stat.label}
            </p>
            {stat.trending === 'up' && (
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" style={{ color: '#AAB5B2' }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#AAB5B2', fontWeight: '500' }}>
                  {stat.change}
                </span>
              </div>
            )}
            {stat.trending === 'neutral' && (
              <div className="flex items-center gap-1">
                <Minus className="w-3 h-3" style={{ color: '#DADADA' }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#1A1A1A', opacity: 0.5, fontWeight: '500' }}>
                  {stat.change}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
