export namespace nav {
	
	export class NavItem {
	    id: number;
	    label: string;
	    link: string;
	    badge: number;
	
	    static createFrom(source: any = {}) {
	        return new NavItem(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.label = source["label"];
	        this.link = source["link"];
	        this.badge = source["badge"];
	    }
	}
	export class NavItems {
	    id: number;
	    name: string;
	    Item: NavItem[];
	
	    static createFrom(source: any = {}) {
	        return new NavItems(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.Item = this.convertValues(source["Item"], NavItem);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace types {
	
	export class ActivityBody {
	    project: string;
	    branch: string;
	    val: string;
	    displayTime: string;
	
	    static createFrom(source: any = {}) {
	        return new ActivityBody(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.project = source["project"];
	        this.branch = source["branch"];
	        this.val = source["val"];
	        this.displayTime = source["displayTime"];
	    }
	}
	export class ActivityItem {
	    id: number;
	    marker: string;
	    type: string;
	    body: ActivityBody;
	
	    static createFrom(source: any = {}) {
	        return new ActivityItem(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.marker = source["marker"];
	        this.type = source["type"];
	        this.body = this.convertValues(source["body"], ActivityBody);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class RepoStatus {
	    tag: string;
	    val: number;
	    time: string;
	
	    static createFrom(source: any = {}) {
	        return new RepoStatus(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.tag = source["tag"];
	        this.val = source["val"];
	        this.time = source["time"];
	    }
	}
	export class RepoMeta {
	    color: string;
	    project: string;
	    branch: string;
	    count: number;
	
	    static createFrom(source: any = {}) {
	        return new RepoMeta(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.color = source["color"];
	        this.project = source["project"];
	        this.branch = source["branch"];
	        this.count = source["count"];
	    }
	}
	export class RepoItem {
	    hasChanges: boolean;
	    user: string;
	    name: string;
	    meta: RepoMeta;
	    status: RepoStatus;
	
	    static createFrom(source: any = {}) {
	        return new RepoItem(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.hasChanges = source["hasChanges"];
	        this.user = source["user"];
	        this.name = source["name"];
	        this.meta = this.convertValues(source["meta"], RepoMeta);
	        this.status = this.convertValues(source["status"], RepoStatus);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	export class StatsCard {
	    label: string;
	    val: number;
	    trend: string;
	    changes: string;
	
	    static createFrom(source: any = {}) {
	        return new StatsCard(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.label = source["label"];
	        this.val = source["val"];
	        this.trend = source["trend"];
	        this.changes = source["changes"];
	    }
	}

}

