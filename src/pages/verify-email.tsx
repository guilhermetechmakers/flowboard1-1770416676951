import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, CheckCircle, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export function VerifyEmailPage() {
  const [status] = useState<'success' | 'failure'>('success')
  const [resending, setResending] = useState(false)

  const handleResend = async () => {
    setResending(true)
    await new Promise((r) => setTimeout(r, 800))
    setResending(false)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4">
      <Link to="/" className="mb-8 flex items-center gap-2 font-semibold text-foreground">
        <Building2 className="h-6 w-6 text-primary" />
        FlowBoard
      </Link>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          {status === 'success' ? (
            <CheckCircle className="mx-auto h-12 w-12 text-[var(--accent)]" />
          ) : (
            <XCircle className="mx-auto h-12 w-12 text-destructive" />
          )}
          <CardTitle className="text-2xl">
            {status === 'success' ? 'Email verified' : 'Verification failed'}
          </CardTitle>
          <CardDescription>
            {status === 'success'
              ? 'Your email has been verified. You can continue to the dashboard.'
              : 'The verification link may have expired. Request a new one below.'}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {status === 'failure' && (
            <Button
              variant="outline"
              className="w-full"
              disabled={resending}
              onClick={handleResend}
            >
              {resending ? 'Sending...' : 'Resend verification'}
            </Button>
          )}
          <Button variant="primary" className="w-full" asChild>
            <Link to="/dashboard">Continue to dashboard</Link>
          </Button>
          <p className="text-center text-sm">
            <Link to="/login" className={cn('text-primary hover:underline')}>
              Back to login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
