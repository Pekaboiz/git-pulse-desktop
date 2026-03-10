import React from 'react'

function Branches() {
  return (
    <div id="page-branches" className="page">
      <div className="page-filters">
        <select className="form-select">
          <option>All repos</option>
          <option>git-pulse-desktop</option>
          <option>go-microservices</option>
          <option>dotfiles</option>
        </select>
        <span className="filter-count">6 branches</span>
      </div>

      <div className="section">
        <div className="section-header">
          <span className="section-title">
            <span style={{ color: "var(--text-3)" }}>◈</span> git-pulse-desktop
          </span>
          <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--text-3)" }}>
            3 branches
          </span>
        </div>
        <div className="branches-table">

          <div className="branch-row is-current">
            <div className="branch-name-col">
              <code className="branch-name"><span className="branch-dot">●</span>⎇ main</code>
              <span className="badge-default">default</span>
              <span className="badge-current">current</span>
            </div>
            <div className="branch-sync">
              <span className="b-synced">✓ synced</span>
            </div>
            <div className="branch-last">
              <span className="commit-msg" style={{ fontSize: "12px" }}>feat: add sidebar</span>
              <span className="commit-author" style={{ fontSize: "11px" }}>kostapolin · 2 min ago</span>
            </div>
            <div className="branch-actions">
              <button className="btn btn-ghost btn-xs">Checkout</button>
            </div>
          </div>

          <div className="branch-row">
            <div className="branch-name-col">
              <code className="branch-name">⎇ feature/modals</code>
            </div>
            <div className="branch-sync">
              <span className="b-ahead">↑ 4 ahead</span>
              <span className="b-behind">↓ 1 behind</span>
            </div>
            <div className="branch-last">
              <span className="commit-msg" style={{ fontSize: "12px" }}>wip: modal components</span>
              <span className="commit-author" style={{ fontSize: "11px" }}>kostapolin · 1 hour ago</span>
            </div>
            <div className="branch-actions">
              <button className="btn btn-ghost btn-xs">Checkout</button>
              <button className="btn btn-ghost btn-xs" style={{ color: "var(--red)" }}>Delete</button>
            </div>
          </div>

          <div className="branch-row">
            <div className="branch-name-col">
              <code className="branch-name">⎇ fix/routing</code>
            </div>
            <div className="branch-sync">
              <span className="b-ahead">↑ 1 ahead</span>
              <span className="b-behind">↓ 3 behind</span>
            </div>
            <div className="branch-last">
              <span className="commit-msg" style={{ fontSize: "12px" }}>fix: react router setup</span>
              <span className="commit-author" style={{ fontSize: "11px" }}>kostapolin · 3 hours ago</span>
            </div>
            <div className="branch-actions">
              <button className="btn btn-ghost btn-xs">Checkout</button>
              <button className="btn btn-ghost btn-xs" style={{ color: "var(--red)" }}>Delete</button>
            </div>
          </div>

        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <span className="section-title">
            <span style={{ color: "var(--text-3)" }}>◈</span> go-microservices
          </span>
          <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--text-3)" }}>
            2 branches
          </span>
        </div>
        <div className="branches-table">

          <div className="branch-row">
            <div className="branch-name-col">
              <code className="branch-name">⎇ main</code>
              <span className="badge-default">default</span>
            </div>
            <div className="branch-sync">
              <span className="b-synced">✓ synced</span>
            </div>
            <div className="branch-last">
              <span className="commit-msg" style={{ fontSize: "12px" }}>chore: update go.mod</span>
              <span className="commit-author" style={{ fontSize: "11px" }}>kostapolin · Yesterday</span>
            </div>
            <div className="branch-actions">
              <button className="btn btn-ghost btn-xs">Checkout</button>
            </div>
          </div>

          <div className="branch-row is-current">
            <div className="branch-name-col">
              <code className="branch-name"><span className="branch-dot">●</span>⎇ feature/auth</code>
              <span className="badge-current">current</span>
            </div>
            <div className="branch-sync">
              <span className="b-ahead">↑ 5 ahead</span>
              <span className="b-behind">↓ 3 behind</span>
            </div>
            <div className="branch-last">
              <span className="commit-msg" style={{ fontSize: "12px" }}>feat: JWT middleware</span>
              <span className="commit-author" style={{ fontSize: "11px" }}>kostapolin · 3 hours ago</span>
            </div>
            <div className="branch-actions">
              <button className="btn btn-ghost btn-xs">Checkout</button>
              <button className="btn btn-ghost btn-xs" style={{ color: "var(--red)" }}>Delete</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Branches