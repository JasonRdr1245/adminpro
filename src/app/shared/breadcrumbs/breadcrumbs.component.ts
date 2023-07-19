import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router, RouterEvent } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public titulo?:string;
  private tituloSubs$:Subscription;
  constructor(private router:Router) {

    this.tituloSubs$=this.getDataRuta()


  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe()
  }

  private getDataRuta(){
    return this.router.events
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
      map((event:ActivationEnd) => event.snapshot.data)
    ).subscribe(data=>{
      this.titulo=data['titulo']
      document.title=`Admin-pro-${data['titulo']}`//destruyelo si se hace logout
    });;
  }

}
