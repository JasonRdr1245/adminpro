import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles:[]
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs:Subscription;
  constructor(){
    // const obs$= new Observable<number>(observer=>{
    //   let i=0;
    //   const intervalo=setInterval(()=>{
    //     i++;
    //     observer.next(i)
    //     if(i===4){
    //       clearInterval(intervalo);
    //       observer.complete();
    //     }
    //     if(i===2){
    //       observer.error('i llego al valor de 2')
    //     }
    //   },1000)

    // })

    // obs$.pipe(
    //   retry(1)
    // ).subscribe(
    //   valor=> console.log('Subs:',valor),
    //   error=> console.log('error:',error),
    //   ()=> console.log('complete')
    // );
    this.intervalSubs=this.retornaIntervalo().subscribe(console.log)
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe()
  }

  retornaIntervalo():Observable<number>{
    return interval(1000).pipe(
      map(valor=>valor+1),
      filter(valor=> (valor%2===0)?true:false),
      //take(4)
    )
  }

}
