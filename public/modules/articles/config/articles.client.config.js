'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('sidebar', 'Sucesos', 'articles', 'dropdown', '/articles(/.*)?', false, null, 20);
		Menus.addSubMenuItem('sidebar', 'articles', 'Lista de Noticias', 'articles');
		Menus.addSubMenuItem('sidebar', 'articles', 'Crear Noticia', 'articles/create');
	}
]);