import { Routes } from "@angular/router";

import {DashboardComponent} from "../../user_components/dashboard/dashboard.component";
import {TransactionComponent} from "../../user_components/transaction/transaction.component";
import {BenchmarkComponent} from "../../user_components/benchmark/benchmark.component";
import {UsersComponent} from "../../user_components/user/users.component";
import {SettingsComponent} from "../../user_components/settings/settings.component";
import {UserProfileComponent} from "../../components/users/user-profile/user-profile.component";
import {UserEditsComponent} from "../../components/users/user-edits/user-edits.component";
import {RoleGuard} from "../../auth/login/role-guard";
import {ViewTransactionComponent} from "../../user_components/view-transaction/view-transaction.component";

export const content: Routes = [
    {
        path: 'network',
        data: {
            title: "",
            breadcrumb: "",
        },
        loadChildren: () => import('../../user_components/tasks/tasks.module').then(m => m.TasksModule),
    },


    {
        path: "dashboard",
        component: DashboardComponent,
        data: {
            title: "Dashboard",
            breadcrumb: "Dashboard",
            requiredRole: 'ROLE_RESEARCHER'
        }, canActivate: [RoleGuard],
},
    {
        path: "transaction",
        component: TransactionComponent,
        data: {
            title: "Transactions",
            breadcrumb: "Transactions",
            requiredRole: 'ROLE_ADMIN'
        }, canActivate: [RoleGuard],
    },
    {
        path: "view-transaction",
        component: ViewTransactionComponent,
        data: {
            title: "View Transactions",
            breadcrumb: "View Transactions",
            requiredRole: 'ROLE_ADMIN'
        }, canActivate: [RoleGuard],
    },
    {
        path: "benchmark",
        component: BenchmarkComponent,
        data: {
            title: "Benchmark",
            breadcrumb: "Messages",
            requiredRole: 'ROLE_ADMIN'
        }, canActivate: [RoleGuard],
    },
    {
        path: "users",
        component: UsersComponent,
        data: {
            title: "Reports",
            breadcrumb: "Reports",
            requiredRole: 'ROLE_ADMIN'
        }, canActivate: [RoleGuard],
    },
    {
        path: "settings",
        component: SettingsComponent,
        data: {
            title: "Settings",
            breadcrumb: "Settings",
            requiredRole: 'ROLE_ADMIN'
        }, canActivate: [RoleGuard],
    },
];


