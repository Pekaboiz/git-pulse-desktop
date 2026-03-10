package types

type StatsTrend string

const (
	TrendUp   StatsTrend = "up"
	TrendDown StatsTrend = "down"
	TrendNone StatsTrend = ""
)

type StatsCard struct {
	Label   string     `json:"label"`
	Val     int        `json:"val"`
	Trend   StatsTrend `json:"trend"`
	Changes string     `json:"changes"`
}
