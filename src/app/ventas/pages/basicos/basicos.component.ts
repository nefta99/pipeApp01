import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower : string  ='israel';
  nombreUpper: string  ='ISRAEL';
  nombreCompleto: string ='isRael neFTALI';

  fecha : Date = new Date();

}
