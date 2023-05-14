import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { PageDashboardComponent } from './Pages/page-dashboard/page-dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component:PageLoginComponent
  },
  {
    path:'',
    component:PageDashboardComponent,
    children:[]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
