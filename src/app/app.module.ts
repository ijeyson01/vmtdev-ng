import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiprimercomponenteComponent } from './vmtdev/miprimercomponente/miprimercomponente.component';
import { LoginComponent } from './vmtdev/login/login.component';
import { SignupComponent } from './vmtdev/signup/signup.component';
import { AuthenticationComponent } from './vmtdev/authentication/authentication.component';
import { FormsModule } from '@angular/forms';
import { CrudModule } from './modules/crud/crud.module';
import { SharedModule } from './modules/shared/shared.module';
import { ShopcartModule } from './modules/shopcart/shopcart.module';
import { NotfoundComponent } from './common/shared/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MiprimercomponenteComponent,
    LoginComponent,
    AuthenticationComponent,
    NotfoundComponent
  ],
  imports: [
    SignupComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CrudModule,
    SharedModule,
    ShopcartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
