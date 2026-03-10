package main

import (
	"context"
	"gitpulse/types"
	"gitpulse/types/nav"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) GetStats() []types.StatsCard {
	return []types.StatsCard{
		{Label: "Repos tracked", Val: 12, Trend: types.TrendUp, Changes: "+2 this week"},
		{Label: "Commits today", Val: 47, Trend: types.TrendUp, Changes: "+12 vs avg"},
		{Label: "Open PRs", Val: 8, Trend: types.TrendDown, Changes: "3 need review"},
		{Label: "Behind Remote", Val: 3, Trend: types.TrendDown, Changes: "need sync"},
	}
}

func (a *App) GetReps() []types.RepoItem {
	var repoItems = []types.RepoItem{
		{HasChanges: true, User: "kostapolin / ", Name: "git-pulse-desktop",
			Meta:   types.RepoMeta{Color: "#00add8", Project: "GO", Branch: "main", Count: 97},
			Status: types.RepoStatus{Tag: "changes", Val: 5, Time: "5 min"},
		},
		{HasChanges: false, User: "work-of / ", Name: "dotfiles",
			Meta:   types.RepoMeta{Color: "#89e051", Project: "Shell", Branch: "main", Count: 14},
			Status: types.RepoStatus{Tag: "clean", Time: "40 min"},
		},
		{HasChanges: false, User: "kostapolin / ", Name: "go-microservices",
			Meta:   types.RepoMeta{Color: "#00add8", Project: "GO", Branch: "feautereature/auth", Count: 2},
			Status: types.RepoStatus{Tag: "behind", Val: 3, Time: "1 hour"},
		},
	}

	return repoItems
}

func (a *App) GetActives() []types.ActivityItem {
	return []types.ActivityItem{
		{Id: 1, Marker: "◆", Type: types.Commit, Body: types.ActivityBody{Project: "git-pulse-desktop", Branch: "main", Val: "3", DisplayTime: "2 hours"}},
		{Id: 2, Marker: "⟲", Type: types.Pr, Body: types.ActivityBody{Project: "api-gateway", Branch: "main", Val: "#47", DisplayTime: "20 min"}},
		{Id: 3, Marker: "◆", Type: types.Commit, Body: types.ActivityBody{Project: "go-microservices", Branch: "feature/auth", Val: "3", DisplayTime: "3 hours"}},
		{Id: 4, Marker: "!", Type: types.Issue, Body: types.ActivityBody{Project: "go-microservices", Branch: "origin/main", Val: "3", DisplayTime: "1 hour"}},
	}
}

func (a *App) GetNavs() []nav.NavItems {
	return []nav.NavItems{
		{Id: 1, Name: "Navigation",
			Item: []nav.NavItem{
				{Id: 1, Label: "Dashboard", Link: "/"},
				{Id: 3, Label: "Repos", Link: "/repos", Badge: 15},
				{Id: 4, Label: "Commits", Link: "/commits"},
				{Id: 5, Label: "Branches", Link: "/branches"},
				{Id: 6, Label: "Activity", Link: "/activity"},
			}},
		{Id: 2, Name: "System",
			Item: []nav.NavItem{
				{Id: 7, Label: "Settings", Link: "/settings"},
			}},
	}
}
