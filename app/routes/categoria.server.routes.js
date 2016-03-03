'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	categoria = require('../../app/controllers/categoria.server.controller');
	
	// Agregando funcion bajada de stackoverflow 
	// multiparty = require('connect-multiparty'),
	// multipartyMiddleware = multiparty();
	// Agregando funcion bajada de stackoverflow 




module.exports = function(app) {
	// Article Routes
	app.route('/categoria')
		.get(categoria.list)
		.post(users.requiresLogin, categoria.create);

	app.route('/categoria/:categoriaId')
		.get(categoria.read)
		.put(users.requiresLogin, categoria.hasAuthorization, categoria.update)
		.delete(users.requiresLogin, categoria.hasAuthorization, categoria.delete);

	// Agregando funcion bajada de stackoverflow 
	// app.route('/articleupload').post(users.requiresLogin, multipartyMiddleware, categoria.createWithUpload);
	// app.route('/articles')
    	
	// Agregando funcion bajada de stackoverflow 

	// Finish by binding the article middleware
	app.param('categoriaId', categoria.categoriaByID);
};