'use strict';

//Original del template.
angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$timeout', '$window','$location', 'Authentication', 'Articles', 'FileUploader',
	function($scope, $stateParams, $timeout,  $window, $location, Authentication, Articles, FileUploader) {

		$scope.authentication = Authentication;

		// Create file uploader instance
	     $scope.uploader = new FileUploader();

	   

		// Propio del template. angle
		$scope.create = function() {
			var article = new Articles({

				title: this.title,
				content: this.content,
				image: this.imageURL
			});

			


			article.$save(function(response) {
				$location.path('articles/' + response._id);

				$scope.title = '';
				$scope.content = '';
				$scope.imageURL = '';

			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
				$location.path('articles/' + article._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

		$scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};


		// Called after the user selected a new picture file
	    $scope.uploader.onAfterAddingFile = function (fileItem) {
	      if ($window.FileReader) {
	        var fileReader = new FileReader();
	        fileReader.readAsDataURL(fileItem._file);

	        fileReader.onload = function (fileReaderEvent) {
	          $timeout(function () {
	            $scope.imageURL = fileReaderEvent.target.result;
	            console.log('$scope.imageURL ' + $scope.imageURL)

	          }, 0);
	        };
	      }
	    };

		$scope.uploadImagen = function (imagen) {
	      // Clear messages
	      $scope.success = $scope.error = null;
	      console.log('entro a uploadImagen en ArticlesController');
	      // console.log($scope.user.profileImageURL + 'O, ' + $scope.imageURL);

	      // Start upload
	      $scope.uploader.uploadAll();
	    };
	}
]);