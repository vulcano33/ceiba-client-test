import { Component, OnInit } from '@angular/core';
import {Registro} from '../model/registro.model';
import {RegistroService} from "../service/registro.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-registro',
  templateUrl: './add-registro.component.html',
  styleUrls: ['./add-registro.component.css']
})
export class AddRegistroComponent implements OnInit {

  tiposVehiculo = ['Carro', 'Moto'];
  registro = new Registro("CARRO", null, null, null, null, null);

  constructor(private formBuilder: FormBuilder, private router: Router, private registroService: RegistroService) { }

  onSubmit() {
    this.registroService.createRegistro(this.registro)
    .subscribe((data: Registro) => {
      console.log(">>>> Data on create: " + JSON.stringify(data));
      //let registro = {tipoVehiculo: data['tipoVehiculo'], placa: data['placa'], cilindrajeCC: data['cilindrajeCC'], fechaEntrada: data['fechaEntrada'], fechaSalida: data['fechaSalida'], valorAPagar: data['valorAPagar']};
      this.registro = data;
    });
    this.registroService.getRegistros();
      this.router.navigate(['list-registro']);
  }

  adicionarRegistro(registro: Registro): void {
    this.registroService.createRegistro(registro)
    .subscribe((data: Registro) => {
      console.log(">>>> Data on create: " + JSON.stringify(data));
      //let registro = {tipoVehiculo: data['tipoVehiculo'], placa: data['placa'], cilindrajeCC: data['cilindrajeCC'], fechaEntrada: data['fechaEntrada'], fechaSalida: data['fechaSalida'], valorAPagar: data['valorAPagar']};
      this.registro = data;
    });
      this.router.navigate(['list-registro']);
  };

  ngOnInit() {
  }

}
