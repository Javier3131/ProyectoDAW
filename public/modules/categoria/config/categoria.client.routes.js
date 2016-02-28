'use strict';

// Setting up route
angular.module('categoria').config(['$stateProvider',
	function($stateProvider) {
		
		$stateProvider.
		state('app.listCategoria', {
			url: '/categoria',
			title: 'List Categoria',
			templateUrl: 'modules/categoria/views/list-articles.client.view.html'
		}).
		state('app.createCategoria', {
			url: '/categoria/create',
			title: 'New Categoria',
			templateUrl: 'modules/categoria/views/create-article.client.view.html'
		}).
		state('app.viewCategoria', {
			url: '/categoria/:categoriaId',
			title: 'View Categoria',
			templateUrl: 'modules/categoria/views/view-article.client.view.html',
			controller: 'CategoriaController'
		}).
		state('app.editCategoria', {
			title: 'Edit Categoria',
			url: '/categoria/:categoriaId/edit',
			templateUrl: 'modules/categoria/views/edit-article.client.view.html'
		});
	}
]);