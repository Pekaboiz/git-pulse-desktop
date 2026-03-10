import {useEffect, useState} from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import UserFooter from '../components/UserFooter';
import {nav} from '../../wailsjs/go/models'
import { GetNavs } from '../../wailsjs/go/main/App';

function Sidebar() {
    const location = useLocation();

    const [navitems, setNavItems] = useState<nav.NavItems[]>([])

    useEffect(() => {
        GetNavs().then(setNavItems)
    }, [])

    function SetActive(link : string) : string {
        return location.pathname == link ? "active" : ""
    }

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                ⚡️GitPulse
            </div>
            <div className="sidebar-nav">
                {navitems.map(el => (
                    <>
                        <div className="nav-section-label">{el.name}</div>
                        {el.Item.map(item => 
                            <Link className={`nav-item ` + SetActive(item.link)}  to={item.link}>{item.label}</Link>
                        )}
                    </>
                ))}
            </div>
            <UserFooter/>
        </div>
    )
}

export default Sidebar
