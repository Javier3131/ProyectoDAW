'use strict';

//Original del template.
angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles', 'FileUploader',
	function($scope, $stateParams, $location, Authentication, Articles, FileUploader) {

		$scope.authentication = Authentication;

		// Create file uploader instance
	     // $scope.uploader = new FileUploader();

	    // Set file uploader image filter
	    // $scope.uploader.filters.push({
	    //   name: 'imageFilter',
	    //   fn: function (item, options) {
	    //     var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
	    //     return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
	    //   }
	    // });

		// Create new Article
  //           $scope.create = function(picFile) {
	         
	 //         console.log('create');
	 //         console.log(picFile);
	        
	 //        var article = new Articles({
	 //            title: this.title,
	 //            content: this.content,
	 //            image: null
	 //        });

	 //         console.log(article);

	 //         $upload.upload({
	 //            url: '/articleupload', 
	 //            method: 'POST', 
	 //            headers: {'Content-Type': 'multipart/form-data'},
	 //            fields: {article: article},
	 //            file: picFile,               
	 //        }).success(function (response, status) {
	 //              $location.path('articles/' + response._id);

	 //            $scope.title = '';
	 //            $scope.content = '';

	 //            console.log("Exitoso en el create");

	 //        }).error(function (err) {
	 //                $scope.error = err.data.message;
	 //        });

	 //    };

	    

	 //    $scope.doTimeout = function(file) {
  //        console.log('do timeout');
  //       	$timeout( function() {
  //               var fileReader = new FileReader();
  //               fileReader.readAsDataURL(file);
  //            	console.log('read');
  //               fileReader.onload = function(e) {
  //                   $timeout(function() {
  //                       file.dataUrl = e.target.result;
  //                        console.log('set url');
  //                   });
  //               };
  //           });
  //   	};


  //   	$scope.generateThumb = function(file) {
	 //        console.log('generate Thumb');
		//     if (file) {
		//         console.log('not null');
		//          console.log(file);
		//         if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
		//             $scope.doTimeout(file);
		//         }
		//     }
	 //   };




		// $scope.remove = function(article) {
		// 	if (article) {
		// 		article.$remove();

		// 		for (var i in $scope.articles) {
		// 			if ($scope.articles[i] === article) {
		// 				$scope.articles.splice(i, 1);
		// 			}
		// 		}
		// 	} else {
		// 		$scope.article.$remove(function() {
		// 			$location.path('articles');
		// 		});
		// 	}
		// };

		// Propio del template. angle
		$scope.create = function() {
			var article = new Articles({
				title: this.title,
				content: this.content
			});
			article.$save(function(response) {
				$location.path('articles/' + response._id);

				$scope.title = '';
				$scope.content = '';
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
	}
]);