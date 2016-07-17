# weather-forecast-app

This app was built with Angular within a strict 4-hour timeframe.

##Hosting:  
Deployed with Firebase at:  
https://weather-forecaster-87672.firebaseapp.com/

###To deploy:  
   $ npm install -g firebase-tools  
   $ firebase login  
   $ firebase init  
   $ firebase deploy  

For further assistance, visit https://firebase.google.com/docs/hosting/

##Roadblocks
1. Firebase disabled all non-https endpoints, which means I'm unable to make a client-side API request to the OpenWeatherMap API.  
  - The solution is to either switch hosting providers or make the API call server-side - since this is a front-end app, there currently isn't a server.
  - As of now, the site isn't being hosted... :(
2. NgClass
  - Each box should have a dynamically set background dependent on the "Weather Description." For unknown reasons, the class isn't being set.

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
