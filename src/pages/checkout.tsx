import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CreditCard, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const plans = [
  { id: 'monthly', name: 'Monthly', price: 12, period: 'mo' },
  { id: 'annual', name: 'Annual', price: 120, period: 'yr', save: 'Save 17%' },
] as const

export function CheckoutPage() {
  const [planId, setPlanId] = useState('annual')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await new Promise((r) => setTimeout(r, 800))
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <Check className="mx-auto h-12 w-12 text-[var(--accent)]" />
            <CardTitle className="text-2xl">Payment successful</CardTitle>
            <CardDescription>
              Your subscription is active. You can download your receipt and invoice below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">Download invoice</Button>
            <Button variant="primary" className="w-full" asChild>
              <Link to="/dashboard">Go to dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8 animate-fade-in py-8">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Checkout</h1>
        <p className="text-muted-foreground">Plan selector and payment.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Plan selector</CardTitle>
          <CardDescription>Monthly or annual billing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlanId(p.id)}
                className={cn(
                  'flex flex-1 flex-col rounded-lg border-2 p-4 text-left transition-colors',
                  planId === p.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                )}
              >
                <span className="font-medium">{p.name}</span>
                <span className="text-2xl font-semibold">${p.price}<span className="text-sm font-normal text-muted-foreground">/{p.period}</span></span>
                {'save' in p && p.save && <span className="text-sm text-[var(--accent)]">{p.save}</span>}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment
          </CardTitle>
          <CardDescription>Card, billing address, coupon</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="card">Card number</Label>
              <Input id="card" placeholder="4242 4242 4242 4242" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="exp">Expiry</Label>
                <Input id="exp" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Billing address</Label>
              <Input id="address" placeholder="Street, city, country" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="coupon">Coupon</Label>
              <Input id="coupon" placeholder="Code" />
            </div>
            <Button type="submit" variant="primary" className="w-full">
              Confirm payment
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
