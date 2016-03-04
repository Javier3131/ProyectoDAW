'use strict';

// Setting up route
angular.module('categoria').config(['$stateProvider',
	function($stateProvider) {
		
		$stateProvider.
		state('app.listCategoria', {
			url: '/categoria',
			title: 'List Categoria',
			templateUrl: 'modules/categoria/views/list-categoria.client.view.html'
		}).
		state('app.createCategoria', {
			url: '/categoria/create',
			title: 'New Categoria',
			templateUrl: 'modules/categoria/views/create-categoria.client.view.html'
		}).
		state('app.viewCategoria', {
			url: '/categoria/:categoriaId',
			title: 'View Categoria',
			templateUrl: 'modules/categoria/views/view-categoria.client.view.html',
			controller: 'CategoriaController'
		}).
		state('app.editCategoria', {
			title: 'Edit Categoria',
			url: '/categoria/:categoriaId/edit',
			templateUrl: 'modules/categoria/views/edit-categoria.client.view.html'
		});
	}
]);