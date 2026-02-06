import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LayoutTemplate, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'

const mockTemplates = [
  { id: '1', name: 'Product roadmap', description: 'Goals, milestones, and dependencies', category: 'Product' },
  { id: '2', name: 'Research board', description: 'Hypotheses, findings, and sources', category: 'Research' },
  { id: '3', name: 'Sprint planning', description: 'Stories, tasks, and assignments', category: 'Engineering' },
] as const

export function TemplatesPage() {
  const [search, setSearch] = useState('')
  const [previewId, setPreviewId] = useState<string | null>(null)

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Templates</h1>
        <p className="text-muted-foreground">Starter boards and onboarding examples.</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockTemplates.map((t) => (
          <Card
            key={t.id}
            className="transition-all duration-200 hover:scale-[1.02] hover:shadow-card-hover cursor-pointer"
            onClick={() => setPreviewId(t.id)}
          >
            <CardHeader className="pb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                <LayoutTemplate className="h-5 w-5" />
              </div>
              <CardTitle className="text-base">{t.name}</CardTitle>
              <CardDescription>{t.description}</CardDescription>
              <span className="text-xs text-muted-foreground">{t.category}</span>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); setPreviewId(t.id); }}>
                  Preview
                </Button>
                <Button size="sm" variant="primary" asChild>
                  <Link to={`/board/new?template=${t.id}`} onClick={(e) => e.stopPropagation()}>
                    Apply template
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!previewId} onOpenChange={(open) => !open && setPreviewId(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Template preview</DialogTitle>
            <DialogDescription>Interactive preview of the template.</DialogDescription>
          </DialogHeader>
          <div className="min-h-[300px] rounded-lg border border-border bg-muted/30 p-4">
            Preview area
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setPreviewId(null)}>Close</Button>
            <Button variant="primary" asChild>
              <Link to={`/board/new?template=${previewId}`}>Apply template</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
