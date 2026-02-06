import { Link } from 'react-router-dom'
import { HelpCircle, BookOpen, Video, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const faqs = [
  { q: 'How do I create a new board?', a: 'From the dashboard, click "New Board" or use the quick actions panel.' },
  { q: 'How does the AI agent work?', a: 'The AI agent analyzes your nodes and suggests next steps, summaries, and links.' },
  { q: 'Can I invite collaborators?', a: 'Yes. Use the share button on a board to invite team members.' },
] as const

function AccordionDemo() {
  return (
    <div className="space-y-2">
      {faqs.map(({ q, a }) => (
        <div key={q} className="rounded-lg border border-border">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium">
              {q}
              <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
              {a}
            </div>
          </details>
        </div>
      ))}
    </div>
  )
}

export function AboutPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">About & Help</h1>
        <p className="text-muted-foreground">Documentation and support resources.</p>
      </div>

      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <HelpCircle className="h-5 w-5" />
          FAQ
        </h2>
        <AccordionDemo />
      </section>

      <section aria-labelledby="guides-heading">
        <h2 id="guides-heading" className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Getting started guides
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="transition-shadow hover:shadow-card-hover">
            <CardHeader>
              <CardTitle className="text-base">Quick start</CardTitle>
              <CardDescription>Create your first board in 5 minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" asChild>
                <Link to="/docs/quickstart">
                  Read guide
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-shadow hover:shadow-card-hover">
            <CardHeader>
              <CardTitle className="text-base">Collaboration</CardTitle>
              <CardDescription>Invite teammates and work together</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" asChild>
                <Link to="/docs/collaboration">
                  Read guide
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section aria-labelledby="videos-heading">
        <h2 id="videos-heading" className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <Video className="h-5 w-5" />
          Video tutorials
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">Video tutorials and walkthroughs are available in the docs.</p>
            <Button variant="outline" className="mt-4" asChild>
              <Link to="/docs/videos">Watch videos</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Contact support
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
            <CardDescription>We’ll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Subject" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Your message"
              />
            </div>
            <Button variant="primary">Send</Button>
          </CardContent>
        </Card>
      </section>

      <p className="text-sm text-muted-foreground">
        <Link to="/docs" className="text-primary hover:underline">Docs</Link>
        {' · '}
        <Link to="/status" className="text-primary hover:underline">Status</Link>
      </p>
    </div>
  )
}
