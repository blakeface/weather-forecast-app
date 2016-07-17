(function () {
  'use strict';

  angular
  .module('weather')
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['WeatherFactory'];
  function MainCtrl (WeatherFactory) {
    let vm = this;

    WeatherFactory.getWeatherData().then(function (results) {
      console.log(results.data);
    })

  }
})();
