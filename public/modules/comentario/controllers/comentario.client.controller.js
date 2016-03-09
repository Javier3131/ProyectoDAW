'use strict';


angular.module('comentario').controller('ComentarioController', ['$scope', '$stateParams', '$timeout', '$window','$location', 'Authentication', 'Comentario', 'FileUploader',
	function($scope, $stateParams, $timeout,  $window, $location, Authentication, Comentario, FileUploader) {

		$scope.authentication = Authentication;

		// Create file uploader instance
	     // $scope.uploader = new FileUploader();

	   

		// Propio del template. eq(index)
		$scope.create = function() {

			console.log('Aca en el client controller en el create');
			console.log('this.article ' + this.article._id);
			
			var comentario = new Comentario({

				comment: this.comment,
				// Si trae el json del article, hay que ver donde truena esto
				article: this.article._id
				// image: this.imageURL
			});
			
			comentario.$save(function(response) {
				$location.path('comentario/' + response._id);
				$scope.comment = '';
				//$scope.article = '';
				

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

			console.log('$scope.comentario' + $scope.comentario);
		};

		$scope.findOne = function() {
			$scope.comentario = Comentario.get({
				comentarioId: $stateParams.comentarioId
			});
		};

		$scope.findComentariosPorArticulo = function() {
			$scope.comentario = Comentario.query();
		};
		
	}
]);