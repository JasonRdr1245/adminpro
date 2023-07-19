import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles:[]
})
export class PromisesComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    this.getUsuarios().then(usuarios=>{
      console.log(usuarios)
    }).catch(error=>console.log(error))
    //esta parte es sincrona y si se acepta muestra un resolve, si no reject y muestra un error
    // const promesa=new Promise((resolve,reject)=>{

    //   if(false){
    //     resolve('Hola Mundo')
    //   }
    //   else{
    //     reject('Algo salio mal');
    //   }

    // });
    // esta parte es asincrona
    // promesa.then((mensaje)=>{
    //   console.log(mensaje)
    // }).catch(error=>console.log('error en mi promesa',error))
  }

  getUsuarios(){
    return new Promise((resolve,reject)=>{
      fetch('https://reqres.in/api/users')
      .then(resp=>resp.json()).then(body=>resolve(body.data))
      .catch(error=> reject(error));

    })
  }

}
