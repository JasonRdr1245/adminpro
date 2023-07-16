import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {
  @Input('valor') progreso: number=40;
  @Input() btnClass:string = 'btn btn-primary'
  @Output() valorSalida:EventEmitter<number> = new EventEmitter();
  get getPorcentaje(){
    return `${this.progreso}%`
  }

  cambiarValor(valor:number){
    if(this.progreso>=100 && valor>=0){
      this.valorSalida.emit(100)
      return this.progreso=100;
    }
    if(this.progreso<=0 && valor<0) {this.valorSalida.emit(100); return this.progreso=0;};
    this.valorSalida.emit(this.progreso+valor)
    return this.progreso=this.progreso+valor;

  }

  onChange(event: number){
    if(event>=100){
      this.valorSalida.emit(100);
    }else if(event<=0){
      this.valorSalida.emit(0);
    }else{
      this.valorSalida.emit(event);
    }
  }
}

