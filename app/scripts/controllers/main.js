'use strict';

/**
 * @ngdoc function
 * @name beerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beerApp
 */
angular.module('beerApp')
	.controller('MainCtrl', function($scope, fbutil, $timeout) {

		// synchronize a read-only, synchronized array of messages, limit to most recent 10
		$scope.beers = fbutil.syncArray('beers', {
			//limitToLast: 99
		});

		// display any errors
		$scope.beers.$loaded().catch(alert);

		$scope.beers.$loaded().then(function() {
			$scope.getBeer();
		});

		$scope.getBeer = function() {
			$scope.beer = $scope.beers[Math.floor(Math.random() * $scope.beers.length)];
			// check if user has already rated this beer?
		};


		// provide a method for adding a message
		$scope.addBeer = function(newBeer) {
			if (newBeer) {
				// push a message to the end of the array
				$scope.beers.$add({
						name: newBeer
					})
					// display any errors
					.catch(alert);
			}
		};


		function alert(msg) {
			$scope.err = msg;
			$timeout(function() {
				$scope.err = null;
			}, 5000);
		}

		// $scope.beer = {	'name' : 'Piraat',
		// 				'description' : 'Piraat is a Belgian pale ale, made by Van Steenberge brewery. It contains 10.5% alcohol, is hoppy, and is described as \"powerful\" with \"lots of subtle flavors.\"',
		// 				'image_url' : 'https://coxrare.files.wordpress.com/2014/01/piraat.jpg'};

		$scope.updateUserRating = function(beer, rating) {
			console.log('User rated ' + beer.name + ' ' + rating + ' stars.');
		};

		$scope.skipBeer = function(beer) {
			console.log('User skipped ' + beer.name);
			// $scope.beer.labels.medium =
			// 	'http://www.culinaryschools.org/clipart/beer/glass-of-beer.gif';
			//TODO reset rating
			//TODO reset image
			$scope.getBeer();
		};

		$scope.addBeerToDrinkList = function(beer) {
			console.log('User added ' + beer.name + ' to drink list.');
		};

	});


// for (var i = 0; i < 3; i++) {
//   console.log('TestLoop');
// };
