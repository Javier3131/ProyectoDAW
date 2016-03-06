'use strict';


angular.module('comentario').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('sidebar', 'Comentario', 'comentario', 'dropdown', '/comentario(/.*)?', false, null, 20);
		Menus.addSubMenuItem('sidebar', 'comentario', 'Lista de Comentario', 'comentario');
		Menus.addSubMenuItem('sidebar', 'comentario', 'Crear Comentario', 'comentario/create');
	}
]);