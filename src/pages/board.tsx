import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MousePointer2,
  Hand,
  Link2,
  Square,
  LayoutGrid,
  Undo2,
  Redo2,
  ZoomIn,
  ZoomOut,
  Grid3X3,
  Bot,
  Users,
  Share2,
  History,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const mockNodes = [
  { id: '1', title: 'Research Q1', type: 'text', x: 100, y: 100 },
  { id: '2', title: 'Findings', type: 'note', x: 320, y: 100 },
  { id: '3', title: 'Next steps', type: 'task', x: 540, y: 100 },
] as const

export function BoardPage() {
  const [tool, setTool] = useState<'select' | 'pan'>('select')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [showGrid, setShowGrid] = useState(true)

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col">
      <div className="flex items-center gap-1 border-b border-border bg-card px-2 py-2">
        <Button
          variant={tool === 'select' ? 'secondary' : 'ghost'}
          size="icon"
          onClick={() => setTool('select')}
          aria-label="Select"
        >
          <MousePointer2 className="h-4 w-4" />
        </Button>
        <Button
          variant={tool === 'pan' ? 'secondary' : 'ghost'}
          size="icon"
          onClick={() => setTool('pan')}
          aria-label="Pan"
        >
          <Hand className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Connect">
          <Link2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Create node">
          <Square className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Auto layout">
          <LayoutGrid className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" className="h-6" />
        <Button variant="ghost" size="icon" aria-label="Undo">
          <Undo2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Redo">
          <Redo2 className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" className="h-6" />
        <Button variant="ghost" size="icon" aria-label="Zoom in">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Zoom out">
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          variant={showGrid ? 'secondary' : 'ghost'}
          size="icon"
          onClick={() => setShowGrid(!showGrid)}
          aria-label="Toggle grid"
        >
          <Grid3X3 className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-1 min-h-0">
        <div className="flex-1 relative overflow-hidden bg-muted/30">
          {showGrid && (
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(rgb(var(--border)) 1px, transparent 1px),
                  linear-gradient(90deg, rgb(var(--border)) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }}
            />
          )}
          <div className="absolute inset-0 p-8">
            {mockNodes.map((n) => (
              <Card
                key={n.id}
                className={cn(
                  'absolute w-48 cursor-pointer transition-all duration-200 hover:shadow-card-hover',
                  selectedId === n.id && 'ring-2 ring-primary shadow-glow'
                )}
                style={{ left: n.x, top: n.y }}
                onClick={() => setSelectedId(n.id)}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold">{n.title}</CardTitle>
                  <span className="text-xs text-muted-foreground">{n.type}</span>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                  Double-click to edit
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="absolute bottom-4 right-4 rounded border border-border bg-card p-2 shadow">
            <p className="text-xs text-muted-foreground">Minimap</p>
            <div className="h-24 w-32 rounded bg-muted" />
          </div>
        </div>

        <aside className="w-80 shrink-0 border-l border-border bg-card flex flex-col">
          <Tabs defaultValue="ai" className="flex-1 flex flex-col min-h-0">
            <TabsList className="w-full justify-start rounded-none border-b px-2">
              <TabsTrigger value="ai" className="gap-2">
                <Bot className="h-4 w-4" />
                AI Agent
              </TabsTrigger>
              <TabsTrigger value="node">Node</TabsTrigger>
            </TabsList>
            <TabsContent value="ai" className="flex-1 overflow-auto p-4 m-0">
              <p className="text-sm text-muted-foreground mb-4">
                Suggestions and action cards appear here.
              </p>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Suggested next step</CardTitle>
                </CardHeader>
                <CardContent className="text-xs">
                  Add a "Conclusion" node and connect to "Next steps".
                </CardContent>
                <div className="flex gap-2 p-2">
                  <Button size="sm" variant="primary">Apply</Button>
                  <Button size="sm" variant="ghost">Dismiss</Button>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="node" className="flex-1 overflow-auto p-4 m-0">
              {selectedId ? (
                <div>
                  <p className="text-sm font-medium">Node detail</p>
                  <p className="text-xs text-muted-foreground">Metadata, AI summary, comments</p>
                  <Link to={`/board/node/${selectedId}`}>
                    <Button variant="outline" size="sm" className="mt-2">Open full panel</Button>
                  </Link>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Select a node to view details.</p>
              )}
            </TabsContent>
          </Tabs>
          <div className="flex items-center gap-2 border-t border-border p-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Collaborators</span>
            <Button variant="ghost" size="icon" className="ml-auto" aria-label="Share">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </aside>
      </div>

      <div className="flex items-center gap-2 border-t border-border bg-card px-2 py-1">
        <History className="h-4 w-4 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">Version history</span>
        <div className="flex-1 h-2 max-w-xs rounded bg-muted" />
      </div>
    </div>
  )
}
