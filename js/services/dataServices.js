angular.module('skyStream')
.factory('DataService', function($http){
  var apiKey = 't0bygtv4nwlrifc9sigricr063nnt1x'

  console.log('Enter in factory module')

  function getGames() {
    var url = 'https://api.twitch.tv/kraken/games/top?&client_id=t0bygtv4nwlrifc9sigricr063nnt1x'
    return $http.get(url)
    console.log('callingAPI');
  }

  return{
    getGames: getGames
  }
});

// THIS AJAX CALL IS WORKING
// var url = 'https://api.twitch.tv/kraken/games/top?&client_id=t0bygtv4nwlrifc9sigricr063nnt1x'
//
// $.ajax({
//   url: url
// })
//   .then(function (data) {
//     console.log(data)
//   })