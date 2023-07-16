import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


const routes:Routes=[

  //path:'/dashboard'
  //path:'/auth'
  //path:'medicos'
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},

  {path:'**',component:NopagefoundComponent}
]


@NgModule({
  declarations: [],
  imports: [
    PagesRoutingModule,
    AuthRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
