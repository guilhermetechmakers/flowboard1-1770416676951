import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  Users,
  FolderKanban,
  ChevronLeft,
  ChevronRight,
  Building2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { to: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/dashboard/projects', label: 'Projects', icon: FolderKanban },
  { to: '/dashboard/users', label: 'Users', icon: Users },
  { to: '/dashboard/settings', label: 'Settings', icon: Settings },
] as const

const SIDEBAR_STORAGE_KEY = 'flowboard-sidebar-collapsed'

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem(SIDEBAR_STORAGE_KEY) === 'true'
    } catch {
      return false
    }
  })
  const location = useLocation()

  const toggle = () => {
    const next = !collapsed
    setCollapsed(next)
    try {
      localStorage.setItem(SIDEBAR_STORAGE_KEY, String(next))
    } catch {
      /**/
    }
  }

  return (
    <aside
      className={cn(
        'flex flex-col border-r border-border bg-card transition-[width] duration-300 ease-in-out',
        collapsed ? 'w-[72px]' : 'w-56'
      )}
    >
      <div className="flex h-14 items-center justify-between border-b border-border px-3">
        {!collapsed && (
          <Link to="/dashboard" className="flex items-center gap-2 font-semibold">
            <Building2 className="h-6 w-6 text-primary" />
            FlowBoard
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggle}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      <nav className="flex-1 space-y-1 p-2">
        {navItems.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to || (to !== '/dashboard' && location.pathname.startsWith(to))
          return (
            <Link key={to} to={to}>
              <span
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  collapsed && 'justify-center px-2'
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span>{label}</span>}
              </span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
