import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[
    {
      titulo:'Principal',
      icono: 'mdi mdi-gauge',
      submenu:[
        {titulo: 'Main',url:'/dashboard'},
        {titulo:'progressBar',url:'/dashboard/progress'},
        {titulo:'Graficas',url:'/dashboard/grafica1'},
        {titulo:'Promises',url:'/dashboard/promises'},
        {titulo:'Rxjs',url:'/dashboard/rxjs'}
      ]
    }
  ];

  constructor() { }
}
