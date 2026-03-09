import React from 'react'
import Repos from '../components/Repos'
import Activity from '../components/Activity'

function Dashboard() {
  return (
    <>
    <div className="stats-grid">
      <div className="stat-card">
        <span className="stat-label">Repos tracked</span>
        <span className="stat-value">12</span>
        <span className="stat-change up">↑ +2 this week</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Commits today</span>
        <span className="stat-value">47</span>
        <span className="stat-change up">↑ +12 vs avg</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Open PRs</span>
        <span className="stat-value">8</span>
        <span className="stat-change down">↓ 3 need review</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Behind remote</span>
        <span className="stat-value">3</span>
        <span className="stat-change down">↓ needs sync</span>
      </div>
    </div>

    <div className="two-col">

    <Repos/>
    <Activity/>
    </div>
    </>
  )
}

export default Dashboard