import { Link } from 'react-router-dom'
import { FolderKanban, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const mockProjects = [
  { id: '1', name: 'Product roadmap', updated: '2 hours ago', collaborators: 3 },
  { id: '2', name: 'Research Q1', updated: '1 day ago', collaborators: 2 },
] as const

export function DashboardProjectsPage() {
  const isLoading = false

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Projects</h1>
          <p className="text-muted-foreground">All your boards and projects.</p>
        </div>
        <Button variant="primary" asChild>
          <Link to="/dashboard/projects/new">
            <Plus className="h-4 w-4 mr-2" />
            New project
          </Link>
        </Button>
      </div>

      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mockProjects.map((p) => (
            <Link key={p.id} to={`/board/${p.id}`}>
              <Card className="transition-all duration-200 hover:scale-[1.02] hover:shadow-card-hover h-full">
                <CardHeader className="pb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <FolderKanban className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{p.name}</CardTitle>
                  <CardDescription>
                    Updated {p.updated} · {p.collaborators} collaborators
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
