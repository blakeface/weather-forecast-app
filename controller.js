(function () {
  'use strict';

  angular
  .module('weather')
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['WeatherFactory'];
  function MainCtrl (WeatherFactory) {
    let vm = this;
  }

})();
