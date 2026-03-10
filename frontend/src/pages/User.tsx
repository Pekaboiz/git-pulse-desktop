import React from 'react'

function User() {
  return (
    <div className="user-page">

      {/* ── Profile header ─────────────────────────── */}
      <div className="user-header">
        <div className="user-avatar-wrap">
          <img
            className="user-avatar-img"
            src="https://avatars.githubusercontent.com/u/1?v=4"
            alt="avatar"
          />
          <span className="user-avatar-status" />
        </div>
        <div className="user-info">
          <div className="user-display-name">Костя Полин</div>
          <div className="user-handle">@kostapolin</div>
          <div className="user-bio">Building GitPulse · Go + Wails enthusiast</div>
          <div className="user-meta">
            <span className="user-meta-item">
              <span className="user-meta-icon">📍</span> Moscow, Russia
            </span>
            <span className="user-meta-item">
              <span className="user-meta-icon">🔗</span>
              <a href="#" style={{ color: 'var(--blue)' }}>github.com/kostapolin</a>
            </span>
          </div>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <button className="btn btn-ghost btn-sm">Edit profile</button>
        </div>
      </div>

      {/* ── Stats row ──────────────────────────────── */}
      <div className="user-stats-row">
        <div className="user-stat-card">
          <span className="user-stat-val">142</span>
          <span className="user-stat-label">Commits</span>
          <span className="user-stat-change up">↑ +47 this week</span>
        </div>
        <div className="user-stat-card">
          <span className="user-stat-val">12</span>
          <span className="user-stat-label">Repos</span>
          <span className="user-stat-change up">↑ +2 this month</span>
        </div>
        <div className="user-stat-card">
          <span className="user-stat-val">8</span>
          <span className="user-stat-label">Branches</span>
          <span className="user-stat-change" style={{ color: 'var(--text-3)' }}>across 3 repos</span>
        </div>
        <div className="user-stat-card">
          <span className="user-stat-val">3</span>
          <span className="user-stat-label">Open PRs</span>
          <span className="user-stat-change down">↓ 2 need review</span>
        </div>
      </div>

      <div className="user-body">

        {/* ── Connected accounts ─────────────────────── */}
        <div className="user-section">
          <div className="section-header">
            <span className="section-title">Connected accounts</span>
            <button className="btn btn-ghost btn-sm">+ Add account</button>
          </div>

          <div className="accounts-list">

            {/* GitHub */}
            <div className="account-card connected">
              <div className="account-icon" style={{ background: '#161b22', border: '1px solid var(--border)' }}>
                <svg viewBox="0 0 16 16" fill="white" width="18" height="18">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <div className="account-info">
                <div className="account-name">GitHub</div>
                <div className="account-handle">@kostapolin</div>
                <div className="account-detail">Connected · 12 repos synced</div>
              </div>
              <div className="account-actions">
                <span className="account-badge connected">Connected</span>
                <button className="btn btn-ghost btn-xs" style={{ color: 'var(--red)' }}>Disconnect</button>
              </div>
            </div>

            {/* GitLab */}
            <div className="account-card">
              <div className="account-icon" style={{ background: '#1f1f1f', border: '1px solid var(--border)' }}>
                <svg viewBox="0 0 16 16" fill="#fc6d26" width="18" height="18">
                  <path d="M15.97 9.058l-.895-2.756L13.3.842a.37.37 0 00-.704 0L10.832 6.3H5.168L3.404.842a.37.37 0 00-.704 0L.924 6.302.03 9.058a.637.637 0 00.23.713L8 15.44l7.74-5.668a.637.637 0 00.23-.714"/>
                </svg>
              </div>
              <div className="account-info">
                <div className="account-name">GitLab</div>
                <div className="account-handle">Not connected</div>
                <div className="account-detail">Connect to sync GitLab repositories</div>
              </div>
              <div className="account-actions">
                <span className="account-badge disconnected">Not connected</span>
                <button className="btn btn-primary btn-xs">Connect</button>
              </div>
            </div>

          </div>
        </div>

        {/* ── Tokens / SSH ───────────────────────────── */}
        <div className="user-section">
          <div className="section-header">
            <span className="section-title">Access tokens</span>
            <button className="btn btn-ghost btn-sm">+ Add token</button>
          </div>

          <div className="tokens-list">
            <div className="token-row">
              <div className="token-icon">🔑</div>
              <div className="token-info">
                <div className="token-name">GitHub Personal Access Token</div>
                <div className="token-meta">
                  <code className="token-val">ghp_••••••••••••••••••••Xk3p</code>
                  <span className="token-expires">Expires Jan 2026</span>
                </div>
              </div>
              <div className="token-actions">
                <button className="btn btn-ghost btn-xs">Copy</button>
                <button className="btn btn-ghost btn-xs" style={{ color: 'var(--red)' }}>Revoke</button>
              </div>
            </div>

            <div className="token-row">
              <div className="token-icon">🔐</div>
              <div className="token-info">
                <div className="token-name">SSH Key · MacBook Pro</div>
                <div className="token-meta">
                  <code className="token-val">ed25519 SHA256:••••••••••••••••••••</code>
                  <span className="token-expires">Added Mar 2024</span>
                </div>
              </div>
              <div className="token-actions">
                <button className="btn btn-ghost btn-xs">Copy</button>
                <button className="btn btn-ghost btn-xs" style={{ color: 'var(--red)' }}>Remove</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default User