import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject, fromEvent } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";

export interface Menu {
  headTitle1?: string;
  level?: number;
  headTitle2?: string;
  path?: string;
  title?: string;
  type?: string;
  icon?: string;
  role?: string;
  active?: boolean;
  bookmark?: boolean;
  pinnedData?: boolean;
  items?: Menu[];
  children?: Menu[];
}

@Injectable({
  providedIn: "root",
})

export class NavService {
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
      window.innerWidth
  );

  private unsubscriber: Subject<any> = new Subject();

  public language: boolean = false;

  public collapseSidebar: boolean = window.innerWidth < 1200 ? true : false;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize")
        .pipe(debounceTime(0), takeUntil(this.unsubscriber))
        .subscribe((evt: any) => {
          this.setScreenWidth(evt.target.innerWidth);
          if (evt.target.innerWidth < 1200) {
            this.collapseSidebar = true;
          } else {
            this.collapseSidebar = false;
          }
        });
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    {
      headTitle1: "General",
    },
    {
      level: 1,
      path: "/dashboard",
      title: "Dashboards",
      icon: "home",
      type: "link",
      role: "ROLE_RESEARCHER"
    },
    {
      level: 1,
      path: "/network",
      title: "Network",
      icon: "task",
      type: "link",
      role: "ROLE_ADMIN"
    },
    {
      level: 1,
      path: "/users",
      title: "Users",
      icon: "charts",
      type: "link",
      role: "ROLE_ADMIN"
    },
    {
      level: 1,
      title: "Transaction",
      icon: "file",
      type: "sub",
      role: "ROLE_ADMIN",
      children: [
        { path: "/transaction", title: "Create Transaction", type: "link",  role: "ROLE_ADMIN" },
        { path: "/view-transaction", title: "View Transaction", type: "link" , role: "ROLE_ADMIN"},
      ],
    },
    {
      level: 1,
      path: "/benchmark",
      title: "Benchmark",
      icon: "file",
      type: "link",
      role: "ROLE_RESEARCHER"
    },
    {
      level: 1,
      path: "/settings",
      title: "Settings",
      icon: "knowledgebase",
      type: "link",
      role: "ROLE_ADMIN"
    },
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

  ngOnDestroy() {
    this.unsubscriber.complete();
  }
}
