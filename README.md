# weather-forecast-app

This app was built with Angular within a strict 4-hour timeframe.  
Please visit the "submitted" branch to view the submitted draft.  
The following is refactored to included a testing suite and a package manager.

###To run app locally:  
    $ npm install
    $ nodemon  


###To run tests:  
    $ npm test  

##Roadblocks
1. NgClass
  - Each box should have a dynamically set background dependent on the "Weather Description." For unknown reasons, the class isn't being set.
2. Testing suite
  - Used Karma to test Angular controller and factory. Need to increase scope of tests.

##Future Features
1. A simple / detailed switch
  - This switch would show / hide more data
2. Style
3. Ionic
  - Since this was built with Angular, it would be relatively simple to rebuild it as an Ionic app.
4. Location
  - As of now, the location is hard-coded.
  - I would like to add a input box to change the API param.
  - I would also like to implement a request geolocation feature with $window.navigator.geolocation
