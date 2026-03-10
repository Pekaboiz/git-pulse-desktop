package types

type ActivityType string

const (
	Commit ActivityType = "commit"
	Issue  ActivityType = "issue"
	Pr     ActivityType = "pr"
)

type ActivityBody struct {
	Project     string `json:"project"`
	Branch      string `json:"branch"`
	Val         string `json:"val"`
	DisplayTime string `json:"displayTime"`
}

type ActivityItem struct {
	Id     int          `json:"id"`
	Marker string       `json:"marker"`
	Type   ActivityType `json:"type"`
	Body   ActivityBody `json:"body"`
}
