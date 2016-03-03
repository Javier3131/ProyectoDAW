'use strict';

// Setting up route
angular.module('discuss').config(['$stateProvider',
	function($stateProvider) {
		
		$stateProvider.
		state('app.listDiscuss', {
			url: '/discuss',
			title: 'List Discuss',
			templateUrl: 'modules/discuss/views/list-discuss.client.view.html'
		}).
		state('app.createDiscuss', {
			url: '/discuss/create',
			title: 'New Discuss',
			templateUrl: 'modules/discuss/views/create-discuss.client.view.html'
		}).
		state('app.viewDiscuss', {
			url: '/discuss/:discussId',
			title: 'View Discuss',
			templateUrl: 'modules/discuss/views/view-discuss.client.view.html',
			controller: 'DiscussController'
		}).
		state('app.editDiscuss', {
			title: 'Edit Discuss',
			url: '/discuss/:discussId/edit',
			templateUrl: 'modules/discuss/views/edit-discuss.client.view.html'
		});
	}
]);