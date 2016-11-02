angular.module('loans', ['services', 'ngRoute'])
.config(function($routeProvider, $httpProvider){
	$routeProvider
	.when('/', {
		templateUrl: '../index.html',
		controller: 'myController'
	})
})
.controller('myController', function(getCall){
	console.log('i am in controller')
})