import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { content } from './shared/routes/routes';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  
  {
    path: '',
    component: ContentComponent,
    children: content
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
