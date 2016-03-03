'use strict';

//Original del template.
angular.module('discuss').controller('DiscussController', ['$scope', '$stateParams', '$timeout', '$window','$location', 'Authentication', 'Discuss', 'FileUploader',
	function($scope, $stateParams, $timeout,  $window, $location, Authentication, Discuss, FileUploader) {

		$scope.authentication = Authentication;

		// Create file uploader instance
	     // $scope.uploader = new FileUploader();

	   

		// Propio del template. eq(index)
		$scope.create = function() {
			
			var discuss = new Discuss({

				comment: this.comment,
				// image: this.imageURL
			});
			
			discuss.$save(function(response) {
				$location.path('discuss/' + response._id);
				$scope.comment = '';
				

			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.update = function() {
			var discuss = $scope.discuss;

			discuss.$update(function() {
				$location.path('discuss/' + discuss._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.discuss = Discuss.query();
		};

		$scope.findOne = function() {
			$scope.discuss = Discuss.get({
				discussId: $stateParams.discussId
			});
		};


		
	}
]);