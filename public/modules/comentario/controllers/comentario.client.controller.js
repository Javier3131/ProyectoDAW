'use strict';


angular.module('comentario').controller('ComentarioController', ['$scope', '$stateParams', '$timeout', '$window','$location', 'Authentication', 'Comentario', 'FileUploader',
	function($scope, $stateParams, $timeout,  $window, $location, Authentication, Comentario, FileUploader) {

		$scope.authentication = Authentication;
		$scope.ListaComentarios = {};
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
				// $location.path('comentario/' + response._id);
				$location.path('articles');
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
			console.log('$scope.article._id' + $scope.article._id);


			 $scope.comentario = Comentario.query();

			 if($scope.comentario.article == $scope.article._id){
				 console.log('se cumple la condicion para el article: '+ $scope.article._id );
				 $scope.ListaComentarios = comentario;
			 }


			console.log('$scope.comentario' + $scope.comentario);
			console.log('$scope.ListaComentarios' + $scope.ListaComentarios);
		};

	}
]);
