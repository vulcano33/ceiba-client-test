import { Component, OnInit } from '@angular/core';
import {Registro} from '../model/registro.model';
import {RegistroService} from "../service/registro.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-registro',
  templateUrl: './add-registro.component.html',
  styleUrls: ['./add-registro.component.css']
})
export class AddRegistroComponent implements OnInit {

  tiposVehiculo = ['Carro', 'Moto'];
  registro = new Registro("CARRO", null, null, null, null, null);
  registroSalida: Registro;
  registros: Registro[];

  constructor(private router: Router, private registroService: RegistroService) { }

  onSubmit() {
    this.registroService.createRegistro(this.registro)
    .subscribe((data: Registro) => {
      this.registros.push(data);
    });
  }

  retirarRegistro(registro: Registro): void {
    this.registroService.updateRegistro(registro).subscribe((data: Registro) => {
      this.registroSalida = data;
    });
  }

  obtenerRegistros(): void {
    this.registroService.getRegistros().subscribe(registros => this.registros = registros);
  }

  ngOnInit() {
    this.obtenerRegistros();
  }

}
