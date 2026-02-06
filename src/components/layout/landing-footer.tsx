import { Link } from 'react-router-dom'
import { Building2 } from 'lucide-react'

const footerLinks = [
  { to: '/terms', label: 'Terms of Service' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/docs', label: 'Docs' },
  { to: '/contact', label: 'Contact' },
] as const

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 md:flex md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Building2 className="h-5 w-5 text-primary" />
          <span className="font-medium text-foreground">FlowBoard</span>
        </div>
        <nav className="mt-4 flex flex-wrap gap-6 md:mt-0" aria-label="Footer">
          {footerLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
