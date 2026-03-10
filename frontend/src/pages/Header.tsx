import React from 'react'
import { useLocation } from 'react-router-dom'

const PAGE_TITLES: Record<string, { title: string; breadcrumb: string }> = {
  '/':          { title: 'Dashboard',  breadcrumb: 'overview' },
  '/repos':     { title: 'Repos',      breadcrumb: 'all repos' },
  '/commits':   { title: 'Commits',    breadcrumb: 'history' },
  '/branches':  { title: 'Branches',   breadcrumb: 'all branches' },
  '/activity':  { title: 'Activity',   breadcrumb: 'feed' },
  '/settings':  { title: 'Settings',   breadcrumb: 'preferences' },
  '/user':      { title: 'Profile',    breadcrumb: 'account' },
}

const Header = () => {
  const { pathname } = useLocation()

  // Если путь не найден — фолбэк
  const { title, breadcrumb } = PAGE_TITLES[pathname] ?? { title: pathname, breadcrumb: '' }

  return (
    <header className="header">
      <span className="header-title">{title}</span>
      <div className="header-divider"></div>
      <span className="header-breadcrumb">{breadcrumb}</span>
      <div className="header-actions">
        <div className="status">
          <div className="status-dot"></div>
          <span className="status-monitor">monitoring</span>
        </div>
        <div className="header-divider"></div>
        <button className="btn btn-ghost">↻ Sync all</button>
        <button className="btn btn-primary">+ Add repo</button>
      </div>
    </header>
  )
}

export default Header