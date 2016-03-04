'use strict';

//Original del template.
angular.module('categoria').controller('CategoriaController', ['$scope', '$stateParams', '$timeout', '$window','$location', 'Authentication', 'Categoria', 'FileUploader',
	function($scope, $stateParams, $timeout,  $window, $location, Authentication, Categoria, FileUploader) {

		$scope.authentication = Authentication;

		// Create file uploader instance
	     // $scope.uploader = new FileUploader();

	   

		// Propio del template. angle
		$scope.create = function() {
			
			var categoria = new Categoria({

				title: this.title,
				content: this.content
				// image: this.imageURL
			});
			
			categoria.$save(function(response) {
				$location.path('categoria/' + response._id);
				$scope.title = '';
				$scope.content = '';
				

			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.update = function() {
			var categoria = $scope.categoria;

			categoria.$update(function() {
				$location.path('categoria/' + categoria._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.categoria = Categoria.query();
		};

		$scope.findOne = function() {
			$scope.categoria = Categoria.get({
				categoriaId: $stateParams.categoriaId
			});
		};


		
	}
]);