import { SettingsService } from './../../services/settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit{

  constructor(private settingsService:SettingsService){}
  ngOnInit(): void {
    this.settingsService.chargeData();
  }
  changeTheme(theme:string){
    this.settingsService.changeTheme(theme)
    this.settingsService.checkCurrentTheme()
  }




}
