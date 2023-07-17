import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      {path:'',redirectTo:'/dashboard',pathMatch:'full'},
      {path:'dashboard',component:DashboardComponent},
      {path:'dashboard/progress',component:ProgressComponent},
      {path:'dashboard/grafica1',component:Grafica1Component},
      {path:'account-settings',component:AccountSettingsComponent},
      {path:'dashboard/:any',redirectTo:'/dashboard'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
