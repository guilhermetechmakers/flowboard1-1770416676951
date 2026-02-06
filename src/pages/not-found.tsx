import { Link } from 'react-router-dom'
import { Search, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold text-foreground">404</CardTitle>
          <CardDescription className="text-lg">
            Page not found. The page you’re looking for doesn’t exist or was moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-9"
              aria-label="Search"
            />
          </div>
          <Button variant="primary" className="w-full" asChild>
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Go home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
