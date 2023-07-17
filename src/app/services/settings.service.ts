import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme: Element|null= document.querySelector('#theme');
  public links:NodeListOf<Element>=document.querySelectorAll('.selector');
  constructor() {
    let tema=localStorage.getItem('theme')||'./assets/css/colors/default.css'
    this.linkTheme?.setAttribute('href',tema);
  }

  changeTheme(theme:string){

    const url=`./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href',url);
    localStorage.setItem('theme',url);
    this.checkCurrentTheme();
  }

  chargeData(){
    this.links=document.querySelectorAll('.selector')
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){


    this.links?.forEach(elem=>{
      elem.classList.remove('working');

      const btnTheme=elem.getAttribute('data-theme')
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.linkTheme?.getAttribute('href')
      if(btnThemeUrl ===currentTheme){
        elem.classList.add('working')
      }
    })
  }

}
