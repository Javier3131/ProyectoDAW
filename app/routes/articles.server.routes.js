'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	articles = require('../../app/controllers/articles.server.controller'),
	
	// Agregando funcion bajada de stackoverflow 
	multiparty = require('connect-multiparty'),
	multipartyMiddleware = multiparty();
	// Agregando funcion bajada de stackoverflow 




module.exports = function(app) {
	// Article Routes
	app.route('/articles')
		.get(articles.list)
		.post(users.requiresLogin, articles.create);

	app.route('/articles/:articleId')
		.get(articles.read)
		.put(users.requiresLogin, articles.hasAuthorization, articles.update)
		.delete(users.requiresLogin, articles.hasAuthorization, articles.delete);

	// Agregando funcion bajada de stackoverflow 
	app.route('/articleupload').post(users.requiresLogin, multipartyMiddleware, articles.createWithUpload);
	// app.route('/articles')
    	
	// Agregando funcion bajada de stackoverflow 

	// Finish by binding the article middleware
	app.param('articleId', articles.articleByID);
};