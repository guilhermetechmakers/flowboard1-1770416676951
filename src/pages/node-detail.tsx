import { Link } from 'react-router-dom'
import { ArrowLeft, Bot, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

export function NodeDetailPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 animate-fade-in">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/board/1">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold text-foreground">Node detail</h1>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Title</CardTitle>
          <span className="text-sm text-muted-foreground">Type: text</span>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="content">Content</Label>
            <textarea
              id="content"
              className="mt-2 min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Rich text or type-specific editor"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          <CardTitle className="text-base">AI assistant</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">Summarize</Button>
          <Button variant="outline" size="sm">Expand</Button>
          <Button variant="outline" size="sm">Suggest links</Button>
          <Button variant="outline" size="sm">Generate next steps</Button>
        </CardContent>
      </Card>

      <Card>
        <Tabs defaultValue="activity">
          <TabsList>
            <TabsTrigger value="activity">Activity & history</TabsTrigger>
            <TabsTrigger value="metadata">Metadata</TabsTrigger>
          </TabsList>
          <TabsContent value="activity" className="pt-4">
            <p className="text-sm text-muted-foreground">Comments and revision history.</p>
          </TabsContent>
          <TabsContent value="metadata" className="pt-4 space-y-4">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <Label>Tags</Label>
            </div>
            <Input placeholder="Add tags" />
            <Separator />
            <div>
              <Label>Assignees</Label>
              <p className="text-sm text-muted-foreground">Assign team members</p>
            </div>
            <div>
              <Label>Due date</Label>
              <Input type="date" />
            </div>
            <div>
              <Label>Source links</Label>
              <Input placeholder="URL" />
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
