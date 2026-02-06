import { createBrowserRouter, Navigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { LandingPage } from '@/pages/landing'
import { LoginPage } from '@/pages/login'
import { ForgotPasswordPage } from '@/pages/forgot-password'
import { VerifyEmailPage } from '@/pages/verify-email'
import { DemoPage } from '@/pages/demo'
import { DashboardOverviewPage } from '@/pages/dashboard-overview'
import { DashboardAnalyticsPage } from '@/pages/dashboard-analytics'
import { DashboardProjectsPage } from '@/pages/dashboard-projects'
import { DashboardUsersPage } from '@/pages/dashboard-users'
import { SettingsPage } from '@/pages/settings'
import { BoardPage } from '@/pages/board'
import { NodeDetailPage } from '@/pages/node-detail'
import { TemplatesPage } from '@/pages/templates'
import { ImportExportPage } from '@/pages/import-export'
import { AboutPage } from '@/pages/about'
import { AdminDashboardPage } from '@/pages/admin-dashboard'
import { ProfilePage } from '@/pages/profile'
import { CheckoutPage } from '@/pages/checkout'
import { BillingHistoryPage } from '@/pages/billing-history'
import { PrivacyPage } from '@/pages/privacy'
import { TermsPage } from '@/pages/terms'
import { NotFoundPage } from '@/pages/not-found'
import { ServerErrorPage } from '@/pages/server-error'

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <LoginPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/verify-email', element: <VerifyEmailPage /> },
  { path: '/demo', element: <DemoPage /> },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardOverviewPage /> },
      { path: 'analytics', element: <DashboardAnalyticsPage /> },
      { path: 'projects', element: <DashboardProjectsPage /> },
      { path: 'projects/new', element: <Navigate to="/dashboard/projects" replace /> },
      { path: 'users', element: <DashboardUsersPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'admin', element: <AdminDashboardPage /> },
    ],
  },
  { path: '/board/:boardId', element: <BoardPage /> },
  { path: '/board/node/:nodeId', element: <NodeDetailPage /> },
  { path: '/templates', element: <TemplatesPage /> },
  { path: '/import', element: <ImportExportPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '/checkout', element: <CheckoutPage /> },
  { path: '/billing', element: <BillingHistoryPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/500', element: <ServerErrorPage /> },
  { path: '*', element: <NotFoundPage /> },
])
