import React from 'react'

function Commits() {
  return (
    <div id="page-commits" className="page">
      <div className="page-filters">
        <input className="form-input" style={{maxWidth:"300px"}} placeholder="Search commits, hashes, authors..."/>
        <select className="form-select">
          <option>All repos</option><option>git-pulse-desktop</option><option>dotfiles</option><option>go-microservices</option>
        </select>
        <span className="filter-count">6 commits</span>
      </div>
      <div className="commits-table">
        <div className="commits-thead"><span>Commit</span><span>Message</span><span>Repo / Branch</span><span>Changes</span><span>Date</span></div>
        <div className="commit-row">
          <code className="commit-hash">a3f91bc</code>
          <div className="commit-msg-col"><span className="commit-msg">feat: add sidebar navigation component</span><span className="commit-author">kostapolin</span></div>
          <div className="commit-repo-col"><span className="commit-repo-name">git-pulse-desktop</span><code className="commit-branch">⎇ main</code></div>
          <div className="commit-changes"><span className="file-add">+234</span><span className="file-del">−12</span><span style={{color:"var(--text-3)", fontSize:"11px"}}>2f</span></div>
          <span className="commit-date">Today 14:32</span>
        </div>
        <div className="commit-row">
          <code className="commit-hash">b2e80ab</code>
          <div className="commit-msg-col"><span className="commit-msg">fix: routing issue on settings page</span><span className="commit-author">kostapolin</span></div>
          <div className="commit-repo-col"><span className="commit-repo-name">git-pulse-desktop</span><code className="commit-branch">⎇ main</code></div>
          <div className="commit-changes"><span className="file-add">+8</span><span className="file-del">−3</span><span style={{color:"var(--text-3)", fontSize:"11px"}}>1f</span></div>
          <span className="commit-date">Today 12:15</span>
        </div>
        <div className="commit-row">
          <code className="commit-hash">c1d70cd</code>
          <div className="commit-msg-col"><span className="commit-msg">chore: update go dependencies</span><span className="commit-author">kostapolin</span></div>
          <div className="commit-repo-col"><span className="commit-repo-name">git-pulse-desktop</span><code className="commit-branch">⎇ main</code></div>
          <div className="commit-changes"><span className="file-add">+45</span><span className="file-del">−45</span><span style={{color:"var(--text-3)", fontSize:"11px"}}>2f</span></div>
          <span className="commit-date">Today 10:00</span>
        </div>
      </div>
    </div>
  )
}

export default Commits