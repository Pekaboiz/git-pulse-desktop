import React, { useEffect, useState } from 'react'
import Activity from '../components/Activity'
import StatCard from '../components/StatCard'
import RepoItem from '../components/RepoItem'
import { types } from '../../wailsjs/go/models'
import { GetReps } from '../../wailsjs/go/main/App'

function Dashboard() {
  const [reps, setReps] = useState<types.RepoItem[]>([])

    useEffect(() => {
        GetReps().then(setReps)
    }, [])

  return (
    <>
      <div className="stats-grid">
        <StatCard/>
      </div>

      <div className="two-col">
        <div className="section">
        <div className="section-header">
          <span className="section-title">Repositories</span>
          <a className="section-link">View all →</a>
        </div>
        <div className="repo-list">
          <RepoItem reps={reps.slice(0, 5)} />
        </div>
      </div>
        <Activity/>
      </div>
    </>
  )
}

export default Dashboard