angular.module('loans', ['services', 'ngRoute'])
.config(function($routeProvider, $httpProvider){
	$routeProvider
	.when('/', {
		templateUrl: '../index.html',
		controller: 'myController'
	})
})
.controller('myController', function(getCalls, $scope){
	console.log('i am in controller', getCalls)
	getCalls.getLoans()
	.then(function(result){
		console.log('client got result', result.data.loans);
		$scope.loans = result.data.loans;
	})
})