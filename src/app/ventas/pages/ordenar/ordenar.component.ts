import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  //nosotros: string ='nosotros';
  esMayuscula : boolean=true;
  
  constructor() { }

  ngOnInit(): void {
  }


  cambio(){
    this.esMayuscula = !this.esMayuscula;
  }
}
