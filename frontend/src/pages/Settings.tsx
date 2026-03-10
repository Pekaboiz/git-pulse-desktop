import React from 'react'

function Settings() {
  return (
    <div id="page-settings" className="page">
      <div className="settings-layout">

        <div className="settings-card">
          <div className="settings-card-title">General</div>

          <div className="settings-row">
            <div className="s-label">
              <div className="s-label-title">Sync interval</div>
              <div className="s-label-desc">How often to check for remote changes</div>
            </div>
            <select className="form-select" defaultValue="Every 5 minutes">
              <option>Every 1 minute</option>
              <option>Every 5 minutes</option>
              <option>Every 15 minutes</option>
              <option>Every 30 minutes</option>
              <option>Every hour</option>
            </select>
          </div>

          <div className="settings-row">
            <div className="s-label">
              <div className="s-label-title">Default branch name</div>
              <div className="s-label-desc">Used when creating new repos</div>
            </div>
            <input
              className="form-input"
              style={{ width: "160px" }}
              defaultValue="main"
            />
          </div>

          <div className="settings-row">
            <div className="s-label">
              <div className="s-label-title">Launch at login</div>
              <div className="s-label-desc">Start GitPulse automatically on macOS login</div>
            </div>
            <button className="toggle on">
              <span className="toggle-knob"></span>
            </button>
          </div>

          <div className="settings-row">
            <div className="s-label">
              <div className="s-label-title">Theme</div>
              <div className="s-label-desc">Application appearance</div>
            </div>
            <div className="theme-selector">
              <button className="theme-opt active">◐ dark</button>
              <button className="theme-opt">○ light</button>
              <button className="theme-opt">◑ system</button>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <div className="settings-card-title">Notifications</div>

          <div className="settings-row">
            <div className="s-label">
              <div className="s-label-title">Enable notifications</div>
              <div className="s-label-desc">Show macOS system notifications</div>
            </div>
            <button className="toggle on">
              <span className="toggle-knob"></span>
            </button>
          </div>

          <div className="settings-sub">
            <div className="settings-row">
              <div className="s-label">
                <div className="s-label-title">Branch behind remote</div>
                <div className="s-label-desc">Alert when local branch falls behind</div>
              </div>
              <button className="toggle on">
                <span className="toggle-knob"></span>
              </button>
            </div>

            <div className="settings-row">
              <div className="s-label">
                <div className="s-label-title">Pull request events</div>
                <div className="s-label-desc">Alert on PR open, merge, close</div>
              </div>
              <button className="toggle off">
                <span className="toggle-knob"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <div className="settings-card-title">About</div>
          <div className="settings-about">
            <div className="about-logo">⚡</div>
            <div>
              <div style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: "15px" }}>
                Git<span style={{ color: "var(--accent)" }}>Pulse</span>
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--text-3)", marginTop: "2px" }}>
                v0.1.0 · Built with Go + Wails
              </div>
            </div>
            <button className="btn btn-ghost btn-sm" style={{ marginLeft: "auto" }}>
              Check for updates
            </button>
          </div>
        </div>

        <div className="settings-footer">
          <button className="btn btn-primary">
            Save changes
          </button>
        </div>

      </div>
    </div>
  )
}

export default Settings 