export class Registro {
    placa: string;
    tipoVehiculo: string;
    cilindrajeCC: number;
    fechaEntrada: Date;
    fechaSalida: Date;
    valorAPagar: number;

    /**
     *
     */
    constructor(tipoVehiculo :string, placa:string, cilindrajeCC:number, fechaEntrada:Date, fechaSalida:Date, valorAPagar:number) {
        this.tipoVehiculo = tipoVehiculo;
        this.placa = placa;
        this.cilindrajeCC = cilindrajeCC;
        this.fechaEntrada = fechaEntrada;
        this.fechaSalida = fechaSalida;
        this.valorAPagar = valorAPagar;
    }
}