import { RegistroService } from "./registro.service";
import { TestBed } from "@angular/core/testing";
import{HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('RegistroService', () => {

    let registroService: RegistroService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({ 
            imports: [HttpClientTestingModule],
            providers: [RegistroService] 
        });            
        registroService = TestBed.get(RegistroService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('debe crear un registro usando un método POST', () => {
        const registroEntrada = {tipoVehiculo: "CARRO", placa:"QET443", cilindrajeCC: 1200, fechaEntrada: null, fechaSalida: null, valorAPagar: null};
        registroService.createRegistro(registroEntrada).subscribe(registro => {
            expect(registro).not.toBeNull();
        });

        const request = httpMock.expectOne(`${registroService.baseUrl}`); 
        expect(request.request.method).toBe('POST');
        request.flush(registroEntrada);
    });
  });