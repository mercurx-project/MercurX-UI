import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserProfileComponent} from "./user-profile/user-profile.component";

const routes: Routes = [
    {
        path: "users-profile",
        component: UserProfileComponent,
        data: {
            title: "User Profile", breadcrumb: "User Profile",
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule {
}
