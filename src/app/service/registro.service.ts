import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Registro} from "../model/registro.model";
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegistroService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/registros';

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getRegistros() {
    return this.http.get<Registro[]>(this.baseUrl);
  }

  createRegistro(registro: Registro): Observable<Registro> {
    return this.http.post<Registro>(this.baseUrl, registro, httpOptions).pipe(
      tap((registro: Registro) => console.log(`added registro w/ id=${registro.placa}`)),
      catchError(this.handleError<Registro>('addRegistro'))
    );;
  }

  updateRegistro(registro: Registro) {
    return this.http.put<Registro>(this.baseUrl, registro);
  }
}