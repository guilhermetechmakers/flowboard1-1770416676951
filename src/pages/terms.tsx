import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LandingFooter } from '@/components/layout/landing-footer'

export function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
          <Link to="/" className="font-semibold text-foreground">
            FlowBoard
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Link>
        </div>
      </header>
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-3xl font-semibold text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: February 2025. Archived versions available on request.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Agreement</CardTitle>
              <CardDescription>Acceptable use and liability</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p>
                By using FlowBoard you agree to these terms. You must use the service in compliance with
                applicable laws and not misuse the platform (e.g. spam, abuse, illegal content). We provide
                the service &quot;as is&quot; and disclaim warranties to the extent permitted by law. Our liability
                is limited as set forth in the full terms.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Versioning</CardTitle>
              <CardDescription>Changes to terms</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p>
                We may update these terms from time to time. We will notify you of material changes.
                Continued use after changes constitutes acceptance. Archived versions are available
                upon request.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <LandingFooter />
    </div>
  )
}
