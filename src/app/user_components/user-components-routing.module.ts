import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TransactionComponent} from "./transaction/transaction.component";
import {BenchmarkComponent} from "./benchmark/benchmark.component";

import {UsersComponent} from "./user/users.component";
import {SettingsComponent} from "./settings/settings.component";
import {imageOverlay} from "leaflet";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    data: {
      title: "Dashboard",
      breadcrumb: "Dashboard",
    },
  },
  {
    path: "documents",
    component: TransactionComponent,
    data: {
      title: "Documents",
      breadcrumb: "Documents",
    },
  },
  {
    path: "messages",
    component: BenchmarkComponent,
    data: {
      title: "Messages",
      breadcrumb: "Messages",
    },
  },
  {
    path: "reports",
    component: UsersComponent,
    data: {
      title: "Reports",
      breadcrumb: "Reports",
    },
  },
  {
    path: "settings",
    component: SettingsComponent,
    data: {
      title: "Settings",
      breadcrumb: "Settings",
    },
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserComponentsRoutingModule { }
