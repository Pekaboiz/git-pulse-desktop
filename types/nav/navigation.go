package nav

type NavItems struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
	Item []NavItem
}

type NavItem struct {
	Id    int    `json:"id"`
	Label string `json:"label"`
	Link  string `json:"link"`
	Badge int    `json:"badge"`
}
