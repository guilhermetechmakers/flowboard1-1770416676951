import { Link } from 'react-router-dom'
import { FolderKanban, Plus, Upload, LayoutTemplate, MessageSquare, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const mockProjects = [
  { id: '1', name: 'Product roadmap', updated: '2 hours ago', collaborators: 3 },
  { id: '2', name: 'Research Q1', updated: '1 day ago', collaborators: 2 },
] as const

const mockActivity = [
  { id: '1', text: 'AI suggested 3 new nodes for "Research Q1"', time: '1h ago' },
  { id: '2', text: 'Comment on "Product roadmap"', time: '2h ago' },
] as const

export function DashboardOverviewPage() {
  const isLoading = false

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Overview</h1>
        <p className="text-muted-foreground">Your projects and recent activity.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="transition-shadow hover:shadow-card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Projects</CardTitle>
            <FolderKanban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">2</p>
            <p className="text-xs text-muted-foreground">Active boards</p>
          </CardContent>
        </Card>
        <Card className="transition-shadow hover:shadow-card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">AI suggestions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">5</p>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Projects</CardTitle>
              <Button variant="primary" size="sm" asChild>
                <Link to="/dashboard/projects/new">
                  <Plus className="h-4 w-4" />
                  New
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-16 w-full" />
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {mockProjects.map((p) => (
                    <Link
                      key={p.id}
                      to={`/board/${p.id}`}
                      className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
                    >
                      <div>
                        <p className="font-medium">{p.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Updated {p.updated} · {p.collaborators} collaborators
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Recent activity
            </CardTitle>
            <CardDescription>Comments and AI suggestions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {mockActivity.map((a) => (
                <li key={a.id} className="border-l-2 border-primary/30 pl-3 text-sm">
                  <p className="text-foreground">{a.text}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick actions</CardTitle>
          <CardDescription>New board, import, or start from a template</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="outline" asChild>
            <Link to="/dashboard/projects/new">
              <FolderKanban className="h-4 w-4" />
              New Board
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/import">
              <Upload className="h-4 w-4" />
              Import
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/templates">
              <LayoutTemplate className="h-4 w-4" />
              Templates
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
