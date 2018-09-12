import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListRegistroComponent } from './list-registro/list-registro.component';
import {routing} from './app.routing';

import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RegistroService} from "./service/registro.service";


@NgModule({
  declarations: [
    AppComponent,
    ListRegistroComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
