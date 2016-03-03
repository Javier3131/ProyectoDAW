'use strict';

//Original del template.
angular.module('comentario').controller('ComentarioController', ['$scope', '$stateParams', '$timeout', '$window','$location', 'Authentication', 'Comentario', 'FileUploader',
	function($scope, $stateParams, $timeout,  $window, $location, Authentication, Comentario, FileUploader) {

		$scope.authentication = Authentication;

		// Create file uploader instance
	     // $scope.uploader = new FileUploader();

	   

		// Propio del template. eq(index)
		$scope.create = function() {
			
			var comentario = new Comentario({

				comment: this.comment,
				// image: this.imageURL
			});
			
			comentario.$save(function(response) {
				$location.path('comentario/' + response._id);
				$scope.comment = '';
				

			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.update = function() {
			var comentario = $scope.comentario;

			comentario.$update(function() {
				$location.path('comentario/' + comentario._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.comentario = Comentario.query();
		};

		$scope.findOne = function() {
			$scope.comentario = Comentario.get({
				comentarioId: $stateParams.comentarioId
			});
		};


		
	}
]);