import React from 'react'
import { Link } from 'react-router-dom'

export default function UserFooter() {
  return (
    <Link to="/user" className="sidebar-footer">
      <div className="sidebar-user">
        <div className="user-avatar">КП</div>
        <div className="user-info">
          <div className="user-name">Костя</div>
          <div className="user-handle">@kostapolin</div>
        </div>
      </div>
    </Link>
  )
}