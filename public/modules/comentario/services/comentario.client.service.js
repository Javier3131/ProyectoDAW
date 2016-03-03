'use strict';

angular.module('comentario').factory('Comentario', ['$resource',
	function($resource) {
		return $resource('comentario/:comentarioId', {
			comentarioId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);