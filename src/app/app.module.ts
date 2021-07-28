import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';

//componentes
import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    AppRouterModule,
    SharedModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
