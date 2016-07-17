(function () {
  'use strict';

  angular
  .module('weather')
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['WeatherFactory'];
  function MainCtrl (WeatherFactory) {
    let vm = this;
    vm.forecasts = [];
    let description = [];
    let descriptionString = '';

    WeatherFactory.getWeatherData().then(function (results) {

      let counter = 1;
      let day = 0;
      let avgTemp = Number(results.data.list[0].main.temp);
      let minTemp = Number(results.data.list[0].main.temp_min);
      let maxTemp = Number(results.data.list[0].main.temp_max);
      description.push( WeatherFactory.renameWeather(results.data.list[0].weather[0].main) )

      for (var i = 1; i < results.data.list.length; i++) {
        let prevMoment = results.data.list[i-1].dt_txt.slice(0, 10);
        let currMoment = results.data.list[i].dt_txt.slice(0, 10);
        let weather = results.data.list[i].weather;

        if (prevMoment === currMoment) {
          counter++;
          avgTemp += Number(results.data.list[i].main.temp);
          if ( minTemp > Number(results.data.list[i].main.temp_min) ) minTemp = Number(results.data.list[i].main.temp_min);
          if ( maxTemp < Number(results.data.list[i].main.temp_max) ) maxTemp = Number(results.data.list[i].main.temp_max);
          if ( !description.includes(WeatherFactory.renameWeather(weather[0].main)) ) description.push( WeatherFactory.renameWeather(weather[0].main) );

        } else {
          avgTemp = avgTemp / counter;
          if (description.length > 1) {
            description.forEach(function (value, i) {
              console.log(value, i);
              if (i === description.length-1) description[i] = "and then " + value.toLowerCase();
              else if (i !== 0) description[i] = value.toLowerCase();
            });
            descriptionString = description.join(', ');
          } else descriptionString = description.join();

          vm.forecasts[day] = {
            avgTemp,
            minTemp,
            maxTemp,
            descriptionString,
          };

          counter = 1;
          avgTemp = Number(results.data.list[i].main.temp);
          minTemp = Number(results.data.list[i].main.temp_min);
          maxTemp = Number(results.data.list[i].main.temp_max);
          description = [WeatherFactory.renameWeather(weather[0].main)];
          day++;
        }
      }

    })
  }
})();
