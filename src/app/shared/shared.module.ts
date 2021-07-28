import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modulo personalizado que hicimos
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

//Componentes
import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
