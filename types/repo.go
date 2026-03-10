package types

type RepoMeta struct {
	Color   string `json:"color"`
	Project string `json:"project"`
	Branch  string `json:"branch"`
	Count   int    `json:"count"`
}

type RepoStatus struct {
	Tag  string `json:"tag"`
	Val  int    `json:"val"`
	Time string `json:"time"`
}

type RepoItem struct {
	HasChanges bool       `json:"hasChanges"`
	User       string     `json:"user"`
	Name       string     `json:"name"`
	Meta       RepoMeta   `json:"meta"`
	Status     RepoStatus `json:"status"`
}
