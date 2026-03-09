import {useState} from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                ⚡️GitPulse
            </div>
            <div className="sidebar-nav">
                <nav className='nav-main'>
                    <div className="nav-section-label">Navigation</div>
                    <Link className="nav-item active" to='/'>Dashboard</Link>
                </nav>
                <nav className='nav-sys'>
                    <div className="nav-section-label">System</div>
                    <Link className='nav-item' to='/settings'>settings</Link>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
