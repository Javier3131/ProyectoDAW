'use strict';

angular.module('discuss').factory('Discuss', ['$resource',
	function($resource) {
		return $resource('discuss/:articleId', {
			discussId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);