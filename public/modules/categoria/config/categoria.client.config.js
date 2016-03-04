'use strict';


angular.module('categoria').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		// Menus.addMenuItem('sidebar', 'Categoria', 'categoria', 'dropdown', '/categoria(/.*)?', false, null, 20);
		// Menus.addSubMenuItem('sidebar', 'categoria', 'Lista de Categoria', 'categoria');
		// Menus.addSubMenuItem('sidebar', 'categoria', 'Crear Categoria', 'categoria/create');
	}
]);