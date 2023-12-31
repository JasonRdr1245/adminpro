import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      {path:'',redirectTo:'/dashboard',pathMatch:'full'},
      {path:'dashboard',component:DashboardComponent,data:{titulo:'Dashboard'}},
      {path:'dashboard/progress',component:ProgressComponent,data:{titulo:'Progress'}},
      {path:'dashboard/grafica1',component:Grafica1Component,data:{titulo:'Grafica #1'}},
      {path:'dashboard/promises',component:PromisesComponent,data:{titulo:'Promesas'}},
      {path:'dashboard/rxjs',component:RxjsComponent,data:{titulo:'Rxjs'}},
      {path:'account-settings',component:AccountSettingsComponent,data:{titulo:'Ajustes de cuenta'}},
      {path:'dashboard/:any',redirectTo:'/dashboard'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
