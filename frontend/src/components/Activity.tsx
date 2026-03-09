import React from 'react'

type Props = {}

const Activity = (props: Props) => {
  return (
      <div className="section">
        <div className="section-header">
          <span className="section-title">Recent Activity</span>
          <a className="section-link">View all →</a>
        </div>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon commit">◆</div>
            <div className="activity-body">
              <div className="activity-text">Pushed <strong>3 commits</strong> to <code>git-pulse-desktop</code> / main</div>
              <div className="activity-time">2 minutes ago</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon pr">⟲</div>
            <div className="activity-body">
              <div className="activity-text">PR <strong>#42</strong> merged into <code>api-gateway</code> / main</div>
              <div className="activity-time">1 hour ago</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon commit">◆</div>
            <div className="activity-body">
              <div className="activity-text">Pushed <strong>1 commit</strong> to <code>go-microservices</code> / feature/auth</div>
              <div className="activity-time">3 hours ago</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon issue">!</div>
            <div className="activity-body">
              <div className="activity-text"><strong>go-microservices</strong> is 3 commits <strong>behind</strong> origin/main</div>
              <div className="activity-time">3 hours ago</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon commit">◆</div>
            <div className="activity-body">
              <div className="activity-text">Pushed <strong>7 commits</strong> to <code>dotfiles</code> / main</div>
              <div className="activity-time">Yesterday, 18:42</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Activity