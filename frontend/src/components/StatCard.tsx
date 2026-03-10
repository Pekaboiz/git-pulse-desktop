import React from 'react'
import { useEffect, useState } from 'react';
import {GetStats} from '../../wailsjs/go/main/App'
import {types} from '../../wailsjs/go/models'

const trendIcon  = { up: '↑', down: '↓', '': '' } as const
const trendClass = { up: 'up', down: 'down', '': '' } as const

type Trend = keyof typeof trendIcon  // 'up' | 'down' | ''

function getTrend(t: string): Trend {
    if (t === 'up' || t === 'down') return t
    return ''
}

function StatCard() {
    const [stats, setStats] = useState<types.StatsCard[]>([])

    useEffect(() => {
        GetStats().then(setStats)
    }, [])

    return (
        <>
            {stats.map((el, index) => (
                <div key={index} className="stat-card">
                    <div className="stat-label">{el.label}</div>
                    <div className="stat-value">{el.val}</div>
                    <div className={`stat-change ${trendClass[getTrend(el.trend)]}`}>
                        {trendIcon[getTrend(el.trend)]} {el.changes}
                    </div>
                </div>
            ))}
        </>
    )
}

export default StatCard