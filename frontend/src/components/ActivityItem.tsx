import React, { useEffect, useState } from 'react'
import {GetActives} from '../../wailsjs/go/main/App'
import {types} from '../../wailsjs/go/models'
import EActiveType from '../types/Repos'

function ActivityItem() {
    const [actions, setActivity] = useState<types.ActivityItem[]>([])
    
    useEffect(() => {
        GetActives().then(setActivity);
    }, [])

    function GetText(el : types.ActivityItem) : JSX.Element {
        switch (el.type as EActiveType) {
            case EActiveType.Commit : 
                return <span>Pushed <strong>{el.body.val} commits</strong> to <code>{el.body.project}</code> / {el.body.branch}</span>
            case EActiveType.Issue : 
                return <span><strong>{el.body.project}</strong> is behind remote</span>
            case EActiveType.Pr : 
                 return <span>PR merged into <code>{el.body.project}</code> / {el.body.branch}</span>
            default:
                return <span>{el.body.val}</span>
        }
    }
            
    return (
        <>
            {actions.map(el => (
                <div className="activity-item" key={el.id}>
                    <div className={`activity-icon ` + el.type}>{el.marker}</div>
                    <div className="activity-body">
                        <div className="activity-text">{GetText(el)}</div>
                        <div className="activity-time">{el.body.displayTime} ago</div>
                    </div>
                </div>
            ))}
        </>
  )
}

export default ActivityItem