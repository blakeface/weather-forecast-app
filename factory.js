(function () {
  'use strict';

  angular
  .module('weather')
  .factory('WeatherFactory', WeatherFactory);

  WeatherFactory.$inject = ['$http', '$q', '$log'];
  function WeatherFactory($http, $q, $log) {


    return {
      getWeatherData: function () {
        const weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast' +
          '?q=Bouler,CO' +
          '&units=imperial' +
          '&APPID=6e1fc93970e4f39c34301ff3e1a16977';

        const deferred = $q.defer();

        $http.get(weatherAPI)
        .then(function (success) {
          deferred.resolve(success)
        })
        .catch(function (err) {
          deferred.reject(err)
        })

        return deferred.promise;
      }
    }
  }

})();
