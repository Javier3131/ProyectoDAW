'use strict';

// Setting up route
angular.module('comentario').config(['$stateProvider',
	function($stateProvider) {
		
		$stateProvider.
		state('app.listComentario', {
			url: '/comentario',
			title: 'List Comentario',
			templateUrl: 'modules/comentario/views/list-comentario.client.view.html'
		}).
		state('app.createComentario', {
			url: '/comentario/create',
			title: 'New Comentario',
			templateUrl: 'modules/comentario/views/create-comentario.client.view.html'
		}).
		state('app.viewComentario', {
			url: '/comentario/:comentarioId',
			title: 'View Comentario',
			templateUrl: 'modules/comentario/views/view-comentario.client.view.html',
			controller: 'ComentarioController'
		}).
		state('app.editComentario', {
			title: 'Edit Comentario',
			url: '/comentario/:comentarioId/edit',
			templateUrl: 'modules/comentario/views/edit-comentario.client.view.html'
		});
	}
]);