import React from 'react'

type Props = {}

function Repos({}: Props) {
  return (
      <div className="section">
        <div className="section-header">
          <span className="section-title">Repositories</span>
          <a className="section-link">View all →</a>
        </div>
        <div className="repo-list">
          <div className="repo-card has-changes">
            <div>
              <div className="repo-name"><span>kostapolin / </span>git-pulse-desktop</div>
              <div className="repo-meta">
                <span className="repo-tag"><span className="lang-dot" style={{background: '#00add8'}}></span>Go</span>
                <span className="repo-tag">⎇ main</span>
                <span className="repo-tag">◆ 142</span>
              </div>
            </div>
            <div className="repo-status">
              <span className="status-badge changes">5 changes</span>
              <span className="repo-time">2 min ago</span>
            </div>
          </div>
          <div className="repo-card">
            <div>
              <div className="repo-name"><span>kostapolin / </span>dotfiles</div>
              <div className="repo-meta">
                <span className="repo-tag"><span className="lang-dot" style={{background: "#89e051"}}></span>Shell</span>
                <span className="repo-tag">⎇ main</span>
                <span className="repo-tag">◆ 89</span>
              </div>
            </div>
            <div className="repo-status">
              <span className="status-badge clean">Clean</span>
              <span className="repo-time">1 hour ago</span>
            </div>
          </div>
          <div className="repo-card">
            <div>
              <div className="repo-name"><span>kostapolin / </span>go-microservices</div>
              <div className="repo-meta">
                <span className="repo-tag"><span className="lang-dot" style={{background:"#00add8"}}></span>Go</span>
                <span className="repo-tag">⎇ feature/auth</span>
                <span className="repo-tag">◆ 56</span>
              </div>
            </div>
            <div className="repo-status">
              <span className="status-badge behind">3 behind</span>
              <span className="repo-time">3 hours ago</span>
            </div>
          </div>
          <div className="repo-card">
            <div>
              <div className="repo-name"><span>work-org / </span>api-gateway</div>
              <div className="repo-meta">
                <span className="repo-tag"><span className="lang-dot" style={{background:"#3178c6"}}></span>TypeScript</span>
                <span className="repo-tag">⎇ develop</span>
                <span className="repo-tag">◆ 318</span>
              </div>
            </div>
            <div className="repo-status">
              <span className="status-badge clean">Clean</span>
              <span className="repo-time">Yesterday</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Repos