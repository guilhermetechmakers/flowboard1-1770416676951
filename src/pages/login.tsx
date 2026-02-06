import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(1, 'Password required'),
  remember: z.boolean().optional(),
})

type LoginForm = z.infer<typeof loginSchema>

export function LoginPage() {
  const [isSignup, setIsSignup] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { remember: false },
  })

  const onSubmit = async (_data: LoginForm) => {
    await new Promise((r) => setTimeout(r, 500))
    navigate('/dashboard')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4">
      <Link to="/" className="mb-8 flex items-center gap-2 font-semibold text-foreground">
        <Building2 className="h-6 w-6 text-primary" />
        FlowBoard
      </Link>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">
            {isSignup ? 'Create an account' : 'Welcome back'}
          </CardTitle>
          <CardDescription>
            {isSignup ? 'Enter your details to sign up.' : 'Sign in with email and password.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {isSignup && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org">Organization</Label>
                  <Input id="org" placeholder="Organization name" />
                </div>
              </>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register('password')}
              />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>
            {!isSignup && (
              <div className="flex items-center gap-2">
                <Checkbox id="remember" {...register('remember')} />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>
            )}
            {isSignup && (
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground">
                  I agree to the <Link to="/terms" className="text-primary hover:underline">Terms</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </Label>
              </div>
            )}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Please wait...' : isSignup ? 'Sign up' : 'Sign in'}
            </Button>
          </form>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full" type="button" asChild>
              <a href="#">Continue with Google</a>
            </Button>
            <Button variant="outline" className="w-full" type="button" asChild>
              <a href="#">Continue with Microsoft</a>
            </Button>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              className={cn('font-medium text-primary hover:underline')}
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? 'Log in' : 'Sign up'}
            </button>
          </p>
          {!isSignup && (
            <p className="mt-2 text-center text-sm">
              <Link to="/forgot-password" className="text-primary hover:underline">
                Forgot password?
              </Link>
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
