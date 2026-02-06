import { Link } from 'react-router-dom'
import { Users, FolderKanban, Bot, Shield, Flag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Skeleton } from '@/components/ui/skeleton'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const mockUsage = [
  { name: 'Mon', users: 12, boards: 8, credits: 120 },
  { name: 'Tue', users: 14, boards: 10, credits: 180 },
  { name: 'Wed', users: 15, boards: 12, credits: 220 },
] as const

export function AdminDashboardPage() {
  const isLoading = false

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground">Org admin controls, billing, compliance, analytics.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">24</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Boards</CardTitle>
            <FolderKanban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">18</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">AI credits (month)</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">1,240</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">User management</TabsTrigger>
          <TabsTrigger value="billing">Billing & plans</TabsTrigger>
          <TabsTrigger value="security">Security & audit</TabsTrigger>
          <TabsTrigger value="flags">Feature flags</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>Active users, boards, AI credit usage</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-[240px] w-full" />
              ) : (
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={[...mockUsage]}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgb(var(--card))',
                        border: '1px solid rgb(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Line type="monotone" dataKey="users" stroke="rgb(var(--primary))" strokeWidth={2} />
                    <Line type="monotone" dataKey="credits" stroke="rgb(var(--accent))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User management</CardTitle>
              <CardDescription>Invite, roles, deactivate</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="primary">Invite user</Button>
              <p className="mt-4 text-sm text-muted-foreground">User list and roles.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing & plans</CardTitle>
              <CardDescription>Invoices, upgrade</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="primary" asChild>
                <Link to="/checkout">Upgrade plan</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security & audit logs
              </CardTitle>
              <CardDescription>Immutable audit logs for compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline">Download audit log</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flags" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flag className="h-5 w-5" />
                Feature flags
              </CardTitle>
              <CardDescription>Toggle AI features and integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>AI features</Label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label>Integrations</Label>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
