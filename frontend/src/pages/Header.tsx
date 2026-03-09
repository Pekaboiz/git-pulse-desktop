import React from 'react'

const Header = () => {
  return (
    <header className="header">
    <span className="header-title">Dashboard</span>
    <div className="header-divider"></div>
    <span className="header-breadcrumb">overview</span>
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