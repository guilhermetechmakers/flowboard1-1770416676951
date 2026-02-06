import { Link } from 'react-router-dom'
import { LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LandingFooter } from '@/components/layout/landing-footer'

export function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="font-semibold text-foreground">
            FlowBoard
          </Link>
          <Button variant="primary" asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-semibold text-foreground">Live demo</h1>
          <p className="mt-2 text-muted-foreground">
            Read-only sample board. Sign up to create and edit your own boards.
          </p>
          <div className="mt-8 flex min-h-[400px] items-center justify-center rounded-lg border border-border bg-muted/30">
            <div className="text-center">
              <LayoutGrid className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-4 text-muted-foreground">Sample board viewer (placeholder)</p>
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/board/demo">Open sample board</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  )
}
