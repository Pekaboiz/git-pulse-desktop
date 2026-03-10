import { useEffect, useState } from "react";
import { GetReps } from "../../wailsjs/go/main/App";
import { types } from "../../wailsjs/go/models";
import RepoItem from "../components/RepoItem";

const PAGE_SIZE = 10;

function Repos() {
  const [reps, setReps] = useState<types.RepoItem[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    GetReps().then(setReps);
  }, []);

  const start = page * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const currentPage = reps.slice(start, end);
  const totalPages = Math.ceil(reps.length / PAGE_SIZE);

  return (
    <div>
      <div id="page-repos" className="page repos-layout">
        <div className="repos-list-panel">
          <div className="repos-filters">
            <input
              className="form-input"
              placeholder="Search repositories..."
            />
            <div className="filter-tabs">
              <button className="filter-tab active">All (6)</button>
              <button className="filter-tab">changes</button>
              <button className="filter-tab">clean</button>
              <button className="filter-tab">behind</button>
            </div>
          </div>
          <div className="repos-scroll">
            <RepoItem reps={currentPage} />

            <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => setPage((p) => p - 1)}
                disabled={page === 0}
              >
                ← Prev
              </button>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  alignSelf: "center",
                }}
              >
                {page + 1} / {totalPages}
              </span>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => setPage((p) => p + 1)}
                disabled={end >= reps.length}
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        <div className="repo-detail-panel">
          <div className="repo-detail-header">
            <div>
              <div className="repo-detail-title">
                <span>kostapolin / </span>git-pulse-desktop
              </div>
              <div className="repo-detail-meta">
                <span className="repo-tag">
                  <span
                    className="lang-dot"
                    style={{ background: "#00add8" }}
                  ></span>
                  Go
                </span>
                <span className="repo-tag">⎇ main</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button className="btn btn-ghost btn-sm">↻ Sync</button>
              <button className="btn btn-danger-ghost btn-sm">Remove</button>
            </div>
          </div>
          <div className="repo-detail-stats">
            <div className="detail-stat">
              <span className="detail-stat-val">142</span>
              <span className="detail-stat-label">Commits</span>
            </div>
            <div className="detail-stat">
              <span
                className="detail-stat-val"
                style={{ color: "var(--orange)" }}
              >
                5 changes
              </span>
              <span className="detail-stat-label">Status</span>
            </div>
            <div className="detail-stat">
              <span className="detail-stat-val" style={{ fontSize: "14px" }}>
                2 min ago
              </span>
              <span className="detail-stat-label">Last activity</span>
            </div>
          </div>
          <div>
            <div className="section-title" style={{ marginBottom: "10px" }}>
              Recent commits
            </div>
            <div className="activity-list">
              <div className="activity-item" style={{ cursor: "pointer" }}>
                <div className="activity-icon commit">◆</div>
                <div className="activity-body">
                  <div className="activity-text">
                    <strong>feat: add sidebar navigation component</strong>
                  </div>
                  <div className="activity-time">
                    <code style={{}/*style="font-family:var(--mono);font-size:11px;color:var(--blue);background:var(--blue-dim);padding:1px 5px;border-radius:4px"*/}>
                      a3f91bc
                    </code>{" "}
                    · kostapolin · Today 14:32
                  </div>
                </div>
              </div>
              <div className="activity-item" style={{ cursor: "pointer" }}>
                <div className="activity-icon commit">◆</div>
                <div className="activity-body">
                  <div className="activity-text">
                    <strong>fix: routing issue on settings page</strong>
                  </div>
                  <div className="activity-time">
                    <code style={{}/*style="font-family:var(--mono);font-size:11px;color:var(--blue);background:var(--blue-dim);padding:1px 5px;border-radius:4px"*/}>
                      b2e80ab
                    </code>{" "}
                    · kostapolin · Today 12:15
                  </div>
                </div>
              </div>
              <div className="activity-item" style={{ cursor: "pointer" }}>
                <div className="activity-icon commit">◆</div>
                <div className="activity-body">
                  <div className="activity-text">
                    <strong>chore: update go dependencies</strong>
                  </div>
                  <div className="activity-time">
                    <code style={{}/*style="font-family:var(--mono);font-size:11px;color:var(--blue);background:var(--blue-dim);padding:1px 5px;border-radius:4px"*/}>
                      c1d70cd
                    </code>{" "}
                    · kostapolin · Today 10:00
                  </div>
                </div>
              </div>
              <div className="activity-item" style={{ cursor: "pointer" }}>
                <div className="activity-icon commit">◆</div>
                <div className="activity-body">
                  <div className="activity-text">
                    <strong>style: update global CSS design tokens</strong>
                  </div>
                  <div className="activity-time">
                    <code style={{}/*style="font-family:var(--mono);font-size:11px;color:var(--blue);background:var(--blue-dim);padding:1px 5px;border-radius:4px"*/}>
                      d0c60ef
                    </code>{" "}
                    · kostapolin · Yesterday 18:42
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repos;
