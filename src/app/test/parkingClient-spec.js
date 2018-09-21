describe('Ceiba estacionamiento controller test', function() {
    it('should add a todo', function() {
      browser.get('http://localhost:4200');
      element(by.id('tipoVehiculo')).sendKeys("CARRO");
      element(by.id('placa')).sendKeys("QET443");
      element(by.id('cilindrajeCC')).sendKeys(1200);

      element(by.id('ingresar')).click();
      var todoList = element.all(by.id('tableRegistros'));
      expect(todoList.count()).toEqual(1);
    });
  });
