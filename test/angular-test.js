describe('MainCtrl', function() {

  beforeEach(module('weather'));

  var MainCtrl, scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    WeatherFactory.getWeatherData().then((results) => {results})
  }));

  it('makes a successful API call to OpenWeatherMaps', function () {
    expect(results.status).toEqual(200);
  });

});
