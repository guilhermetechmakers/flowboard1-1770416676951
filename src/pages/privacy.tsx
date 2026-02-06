import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LandingFooter } from '@/components/layout/landing-footer'

export function PrivacyPage() {
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
          <h1 className="text-3xl font-semibold text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: February 2025.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Data collection</CardTitle>
              <CardDescription>What we collect and why</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p>
                We collect account information (email, name, organization), usage data (boards, nodes, edits),
                and optional integrations (e.g. connected apps). We use this to provide the service,
                improve the product, and comply with legal obligations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Retention</CardTitle>
              <CardDescription>How long we keep data</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p>
                We retain account and board data until you delete your account or request deletion.
                Audit logs and billing records may be retained for compliance as required by law.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Your rights</CardTitle>
              <CardDescription>Access, correction, deletion</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p>
                You may access, correct, or delete your personal data from the settings and profile pages.
                You may also export your data and request account deletion. For requests we cannot fulfill
                in-app, contact our data protection contact below.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Data protection contact</CardTitle>
              <CardDescription>Questions about privacy</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Contact: privacy@flowboard.example.com
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <LandingFooter />
    </div>
  )
}
