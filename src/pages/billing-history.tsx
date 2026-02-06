import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const mockTransactions = [
  { id: '1', date: '2025-02-05', amount: 12, status: 'Paid', invoice: 'INV-001' },
  { id: '2', date: '2025-01-05', amount: 12, status: 'Paid', invoice: 'INV-002' },
] as const

const mockCredits = [
  { name: 'Week 1', credits: 120 },
  { name: 'Week 2', credits: 180 },
  { name: 'Week 3', credits: 220 },
  { name: 'Week 4', credits: 190 },
] as const

export function BillingHistoryPage() {
  const isLoading = false

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Billing history</h1>
        <p className="text-muted-foreground">Transactions and AI credit usage.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
          <CardDescription>Date, amount, status, invoice link</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-32 w-full" />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-2 font-medium">Date</th>
                    <th className="pb-2 font-medium">Amount</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium">Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTransactions.map((t) => (
                    <tr key={t.id} className="border-b border-border hover:bg-muted/50">
                      <td className="py-3">{t.date}</td>
                      <td className="py-3">${t.amount}</td>
                      <td className="py-3">{t.status}</td>
                      <td className="py-3">
                        <a href="#" className="text-primary hover:underline">{t.invoice}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <Button variant="outline" size="sm" className="mt-4">
            <Download className="h-4 w-4 mr-2" />
            Download CSV
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI credits usage</CardTitle>
          <CardDescription>Breakdown by period</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-[200px] w-full" />
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={[...mockCredits]}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgb(var(--card))',
                    border: '1px solid rgb(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Line type="monotone" dataKey="credits" stroke="rgb(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
