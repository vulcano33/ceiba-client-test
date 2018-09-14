import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {routing} from './app.routing';

import {HttpClientModule} from "@angular/common/http";
import {RegistroService} from "./service/registro.service";
import { AddRegistroComponent } from './add-registro/add-registro.component';
import { FormsModule } from '@angular/forms';
import { RegistroSalidaComponent } from './registro-salida/registro-salida.component';


@NgModule({
  declarations: [
    AppComponent,
    AddRegistroComponent,
    RegistroSalidaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
