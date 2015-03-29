'use strict';

/**
 * @ngdoc function
 * @name beerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beerApp
 */
angular.module('beerApp')
  .controller('MainCtrl', function ($scope) {

    $scope.beer = {	'name' : 'Piraat',
    				'description' : 'Piraat is a Belgian pale ale, made by Van Steenberge brewery. It contains 10.5% alcohol, is hoppy, and is described as \"powerful\" with \"lots of subtle flavors.\"',
    				'image_url' : 'https://coxrare.files.wordpress.com/2014/01/piraat.jpg'};

	$scope.updateUserRating = function(beer, rating){
		console.log('User rated ' + beer.name + ' ' + rating + ' stars.');
	};

	$scope.skipBeer = function(beer){
		console.log('User skipped ' + beer.name);
	};

	$scope.addBeerToDrinkList = function(beer){
		console.log('User added ' + beer.name + ' to drink list.');
	};

  });
