import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AppHeader } from '@/components/layout/app-header'
import { DashboardSidebar } from '@/components/layout/dashboard-sidebar'
import { cn } from '@/lib/utils'

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex flex-1">
        <div
          className={cn(
            'fixed inset-y-0 left-0 z-50 w-56 shrink-0 transform bg-card transition-transform duration-300 ease-in-out md:relative md:w-auto md:translate-x-0',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <DashboardSidebar />
        </div>
        {sidebarOpen && (
          <button
            type="button"
            className="fixed inset-0 z-40 bg-[rgba(11,27,43,0.4)] md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          />
        )}
        <div className="flex flex-1 flex-col min-w-0">
          <AppHeader
            showSidebarToggle
            onMenuClick={() => setSidebarOpen((o) => !o)}
          />
          <main className="flex-1 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
