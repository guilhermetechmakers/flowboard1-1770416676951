import { useState } from 'react'
import { Upload, Download, FileJson, FileSpreadsheet, Image } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'

const mockHistory = [
  { id: '1', type: 'Export', format: 'PNG', date: '2025-02-05', status: 'Completed' },
  { id: '2', type: 'Import', format: 'CSV', date: '2025-02-04', status: 'Completed' },
] as const

export function ImportExportPage() {
  const [importFile, setImportFile] = useState<File | null>(null)
  const isLoading = false

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Import & Export</h1>
        <p className="text-muted-foreground">Data ingestion and content export.</p>
      </div>

      <Tabs defaultValue="import" className="space-y-6">
        <TabsList>
          <TabsTrigger value="import">Import</TabsTrigger>
          <TabsTrigger value="export">Export</TabsTrigger>
        </TabsList>
        <TabsContent value="import" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Import
              </CardTitle>
              <CardDescription>
                Upload CSV or JSON. Map columns and validate before import.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>File</Label>
                <Input
                  type="file"
                  accept=".csv,.json"
                  onChange={(e) => setImportFile(e.target.files?.[0] ?? null)}
                />
              </div>
              {importFile && (
                <p className="text-sm text-muted-foreground">
                  Selected: {importFile.name}
                </p>
              )}
              <Button variant="primary" disabled={!importFile}>
                Upload and map columns
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="export" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Export
              </CardTitle>
              <CardDescription>
                Select area or nodes. Choose format and resolution.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" size="sm">
                  <Image className="h-4 w-4 mr-2" />
                  PNG
                </Button>
                <Button variant="outline" size="sm">
                  <FileSpreadsheet className="h-4 w-4 mr-2" />
                  PDF
                </Button>
                <Button variant="outline" size="sm">
                  <FileJson className="h-4 w-4 mr-2" />
                  JSON
                </Button>
                <Button variant="outline" size="sm">
                  <FileSpreadsheet className="h-4 w-4 mr-2" />
                  CSV
                </Button>
              </div>
              <div className="space-y-2">
                <Label>Resolution</Label>
                <Input type="number" placeholder="e.g. 1920" defaultValue={1920} />
              </div>
              <Button variant="primary">Export</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Import / Export history</CardTitle>
          <CardDescription>Recent jobs and downloads</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-24 w-full" />
          ) : (
            <ul className="space-y-2">
              {mockHistory.map((h) => (
                <li
                  key={h.id}
                  className="flex items-center justify-between rounded-lg border border-border p-3 text-sm"
                >
                  <span>{h.type} · {h.format}</span>
                  <span className="text-muted-foreground">{h.date}</span>
                  <span className="text-muted-foreground">{h.status}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
