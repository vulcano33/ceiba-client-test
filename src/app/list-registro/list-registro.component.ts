import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RegistroService} from "../service/registro.service";
import {Registro} from "../model/registro.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-registro',
  templateUrl: './list-registro.component.html',
  styleUrls: ['./list-registro.component.css']
})
export class ListRegistroComponent implements OnInit {

  registroForm: FormGroup;
  registros: Registro[];
  registroSalida: Registro;
  tipoVehiculo: string;
  placa: string;
  cilindraje: number;
  constructor(private formBuilder: FormBuilder, private router: Router, private registroService: RegistroService) { };

  public ngOnInit() {
    this.registroForm = this.formBuilder.group({
      tipoVehiculo: [''],
      placa: [''],
      cilindrajeCC: ['']
    });

    this.registroService.getRegistros()
      .subscribe( data => {
        console.log(">>>> " + JSON.stringify(data));
        this.registros = data;
      });
  };

  obtenerRegistros(): void {
    this.registroService.getRegistros()
    .subscribe( data => {
      this.registros = data;
    });
  };

  adicionarRegistro(registro: Registro): void {
    this.registroService.createRegistro(registro)
      .subscribe( data => {
        this.registros = this.registros.filter(reg => reg !== registro);
      })
  };

  retirarRegistro(registro: Registro): void {
    this.registroService.updateRegistro(registro)
    .subscribe((data: Registro) => {
      this.registroSalida = data;
    });

    this.obtenerRegistros();
  };
}