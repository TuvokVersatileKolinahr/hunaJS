
console.log('app.js');

var app = angular.module('default', ['ngRoute'])


// TODO implement it

.config(function($routeProvider, $locationProvider) {
 
  $routeProvider
  	.when('/', {
	  controller: 'MainController',
	  templateUrl: '/js/app/modules/main/main.html'
	});

   $locationProvider.html5Mode('true');

}); // end config
