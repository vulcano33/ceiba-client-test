import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Registro} from "../model/registro.model";

@Injectable()
export class RegistroService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/registros';

  getRegistros() {
    return this.http.get<Registro[]>(this.baseUrl);
  }

  createRegistro(registro: Registro) {
    return this.http.post(this.baseUrl, registro);
  }

  updateRegistro(registro: Registro) {
    return this.http.put<Registro>(this.baseUrl, registro);
  }
}