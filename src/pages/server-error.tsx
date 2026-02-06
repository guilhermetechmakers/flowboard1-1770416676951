import { Link } from 'react-router-dom'
import { RefreshCw, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ServerErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold text-foreground">500</CardTitle>
          <CardDescription className="text-lg">
            Something went wrong on our end. We’re sorry for the inconvenience.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="primary"
            className="w-full"
            onClick={() => window.location.reload()}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link to="/about">
              <HelpCircle className="h-4 w-4 mr-2" />
              Contact support
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
