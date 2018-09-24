describe('Ceiba estacionamiento controller test', function() {
    it('should add a todo', function() {
      browser.get('http://localhost:4200');
      element(by.id('tipoVehiculo')).sendKeys("CARRO");
      element(by.id('placa')).sendKeys("QET443");
      element(by.id('cilindrajeCC')).sendKeys(1200);

      var alertElement = element(by.css('.alert-warning'));
      element(by.id('ingresar')).click().then(function () {
        browser.wait(protractor.ExpectedConditions.visibilityOf(alertElement), 10000) //Wait for 10 seconds until alert is visible
          .then(function () {
            expect(alertElement.isDisplayed()).toBe(true);
            //Other operations on alert
            var registros = element.all(by.id('tableRegistros'));
            expect(registros.count()).toEqual(1);
          });
      });

    });
  });
