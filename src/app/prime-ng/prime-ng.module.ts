import { NgModule } from '@angular/core';


//primeng
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';



@NgModule({
  exports:[
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
