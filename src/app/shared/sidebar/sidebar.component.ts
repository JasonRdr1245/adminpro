import { SidebarService } from './../../services/sidebar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {


  menu?:any[];

  constructor(private sidebarService:SidebarService){
    this.menu=sidebarService.menu;
  }



}
