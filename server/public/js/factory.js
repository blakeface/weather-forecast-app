(function () {
  'use strict';

  angular
  .module('weather')
  .factory('WeatherFactory', WeatherFactory);

  WeatherFactory.$inject = ['$http', '$q', '$log'];
  function WeatherFactory($http, $q, $log) {


    return {
      getWeatherData: function () {
        const weatherAPI = '//api.openweathermap.org/data/2.5/forecast' +
          '?q=Bouler,US' +
          '&units=imperial' +
          '&APPID=6e1fc93970e4f39c34301ff3e1a16977';

        const deferred = $q.defer();

        $http.get(weatherAPI)
        .then(function (success) {
          deferred.resolve(success)
        })
        .catch(function (err) {
          $log.warn(err)
          deferred.reject(err)
        })

        return deferred.promise;
      },

      renameWeather: function (description) {
        if (description === 'Thunderstorm') return 'Thunderstorms';
        if (description === 'Drizzle') return 'Light Showers';
        if (description === 'Rain') return 'Rainy';
        if (description === 'Snow') return 'Snowy';
        if (description === 'Atmosphere') return 'Smoggy';
        if (description === 'Clear') return 'Sunny Skys';
        if (description === 'Clouds') return 'Cloudy';
        if (description === 'Extreme') return 'Extreme Weather!';
        if (description === 'Additional') return 'Windy';
      },

    }
  }

})();
