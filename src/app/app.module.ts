import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
//componentes
import { AppComponent } from './app.component';



//cambiar locale de la app
import localEs from '@angular/common/locales/es-HN';
import localFr from '@angular/common/locales/fr';
import {registerLocaleData} from  '@angular/common';
registerLocaleData(localEs);
registerLocaleData(localFr);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    AppRouterModule,
    SharedModule,
    VentasModule
  
  ],
  providers: [
    {provide: LOCALE_ID , useValue:'es-HN'} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
