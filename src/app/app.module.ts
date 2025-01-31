import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiprimercomponenteComponent } from './vmtdev/miprimercomponente/miprimercomponente.component';
import { EjemploComponent } from './vmtdev/ejemplo/ejemplo.component';
import { Ejemplo2Component } from './vmtdev/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './vmtdev/ejemplo3/ejemplo3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MiprimercomponenteComponent,
    EjemploComponent,
    Ejemplo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ejemplo2Component,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
