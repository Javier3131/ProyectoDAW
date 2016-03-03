'use strict';

angular.module('categoria').factory('Categoria', ['$resource',
	function($resource) {
		return $resource('categoria/:articleId', {
			categoriaId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);