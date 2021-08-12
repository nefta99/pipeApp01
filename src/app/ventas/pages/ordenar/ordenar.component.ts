import { Component} from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  //nosotros: string ='nosotros';
  esMayuscula : boolean=true;
  ordernarPor : string ='';
  heroes : Heroe[]=[
    {
      nombre: 'Super man',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    }
    ,
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    }
    ,
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    }
    ,
    {
      nombre: 'Linterna verde',
      vuela: false,
      color: Color.verde
    }

  ];
 


  cambio(){
    this.esMayuscula = !this.esMayuscula;
  }

  cambiarOrden(valor : string ){
    this.ordernarPor = valor;
    console.log(valor);
  }

}
