import { types } from '../../wailsjs/go/models'

interface Props {
    reps: types.RepoItem[]
}

function RepoItem({ reps }: Props) {
    function getVal(val: number): string {
        return val === 0 ? "" : val.toString()
    }

    return (
        <>
            {reps.map((el, index) => (
                <div key={index} className={`repo-card ${el.hasChanges ? "has-changes" : ""}`}>
                    <div>
                        <div className="repo-name"><span>{el.user} </span>{el.name}</div>
                        <div className="repo-meta">
                            <span className="repo-tag"><span className="lang-dot" style={{ background: el.meta.color }}></span>{el.meta.project}</span>
                            <span className="repo-tag">⎇ {el.meta.branch}</span>
                            <span className="repo-tag">◆ {el.meta.count}</span>
                        </div>
                    </div>
                    <div className="repo-status">
                        <span className={`status-badge ${el.status.tag}`}>{getVal(el.status.val)} {el.status.tag}</span>
                        <span className="repo-time">{el.status.time} ago</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default RepoItem