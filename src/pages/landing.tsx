import { Link } from 'react-router-dom'
import { Bot, LayoutGrid, Users, Plug, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LandingFooter } from '@/components/layout/landing-footer'
import { cn } from '@/lib/utils'

const features = [
  {
    title: 'AI agent',
    description: 'Context-aware AI that summarizes, suggests next steps, and generates content.',
    icon: Bot,
  },
  {
    title: 'Visual board',
    description: 'Infinite canvas with nodes and edges for ideas, research, and workflows.',
    icon: LayoutGrid,
  },
  {
    title: 'Collaboration',
    description: 'Real-time presence, comments, and shared editing for teams.',
    icon: Users,
  },
  {
    title: 'Integrations',
    description: 'Connect with Google Drive, Notion, Slack, and GitHub.',
    icon: Plug,
  },
] as const

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="font-semibold text-foreground">
            FlowBoard
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </Link>
            <Button variant="primary" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-card to-background px-4 py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,99,255,0.08),transparent)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="text-hero font-semibold tracking-tight text-foreground md:text-5xl">
              AI-assisted collaborative visual board for teams
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Organize ideas, research, data, and workflows as connected flowchart nodes. Summarize, propose, and generate with a context-aware AI agent.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link to="/signup">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-24" aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">
            Features
          </h2>
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-2xl font-semibold text-foreground md:text-3xl">
              Everything you need to map and collaborate
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ title, description, icon: Icon }, i) => (
                <Card
                  key={title}
                  className={cn(
                    'transition-all duration-200 hover:scale-[1.02] hover:shadow-card-hover',
                    'animate-fade-in-up'
                  )}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Live demo
            </h2>
            <p className="mt-2 text-muted-foreground">
              Explore a read-only sample board.
            </p>
            <div className="mt-8 flex min-h-[320px] items-center justify-center rounded-lg border border-border bg-muted/50">
              <Link to="/demo" className="text-primary hover:underline">
                Open sample board →
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-24" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="text-center text-2xl font-semibold text-foreground md:text-3xl">
            Simple pricing
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            Free tier to start. Upgrade when you need more.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>For small teams getting started.</CardDescription>
                <p className="text-2xl font-semibold">$0<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full" asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Unlimited boards and AI credits.</CardDescription>
                <p className="text-2xl font-semibold">$12<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
              </CardHeader>
              <CardContent>
                <Button variant="primary" className="w-full" asChild>
                  <Link to="/checkout">Upgrade</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="border-t border-border px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-xl font-semibold text-foreground">
              Trusted by teams everywhere
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              {['Acme', 'Beta Co', 'Gamma Inc'].map((name) => (
                <span key={name} className="text-sm font-medium">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  )
}
