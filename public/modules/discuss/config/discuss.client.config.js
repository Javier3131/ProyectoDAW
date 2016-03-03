'use strict';


angular.module('discuss').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('sidebar', 'Discuss', 'discuss', 'dropdown', '/discuss(/.*)?', false, null, 20);
		Menus.addSubMenuItem('sidebar', 'discuss', 'Lista de Discuss', 'discuss');
		Menus.addSubMenuItem('sidebar', 'discuss', 'Crear Discuss', 'discuss/create');
	}
]);