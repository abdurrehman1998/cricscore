import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

declare const $: any;
declare interface RouteInfo {
  id: string;
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    id: "DASHBOARD",
    path: "/dashboard",
    title: "Dashboard",
    icon: "dashboard",
    class: "",
  },
  {
    id: "TEAM_MANAGEMENT",
    path: "/teams",
    title: "Team Managemnet",
    icon: "person",
    class: "",
  },
  // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
  // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
  // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
  // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
  // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    console.log(this.menuItems);
    this.menuItems.forEach((item: RouteInfo) => {
      this.translate.get(item.id).subscribe((res: string) => {
        item.title = res;
      });
    });
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
