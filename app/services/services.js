angular.module('services', [])
.factory('getCall', function($http){
	return {
		getLoans: function() {
			return $http({
				method: 'GET', 
				url: 'http://api.kivaws.org/v1/loans/newest.json'
			})
			.then(function(response){
				console.log('got response', response)
			})
		}
	}
})