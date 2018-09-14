import { Component, OnInit, Input } from '@angular/core';
import {Registro} from '../model/registro.model';

@Component({
  selector: 'app-registro-salida',
  templateUrl: './registro-salida.component.html',
  styleUrls: ['./registro-salida.component.css']
})
export class RegistroSalidaComponent implements OnInit {

  @Input() registro: Registro;

  constructor() { }

  ngOnInit() {
  }

}
