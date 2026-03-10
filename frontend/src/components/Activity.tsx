import React from 'react'
import ActivityItem from './ActivityItem'

type Props = {}

const Activity = (props: Props) => {
  return (
      <div className="section">
        <div className="section-header">
          <span className="section-title">Recent Activity</span>
          <a className="section-link">View all →</a>
        </div>
        <div className="activity-list">
          <ActivityItem/>
        </div>
      </div>
  )
}

export default Activity