'use strict';

var users = require('../../app/controllers/users.server.controller'),
	comentario = require('../../app/controllers/comentario.server.controller'),
	

	multiparty = require('connect-multiparty'),
	multipartyMiddleware = multiparty();

module.exports = function(app) {
	app.route('/comentario')
		.get(comentario.list)
		.post(users.requiresLogin, comentario.create);

	app.route('/comentario/:comentarioId')
		.get(comentario.read)
		.put(users.requiresLogin, comentario.hasAuthorization, comentario.update)
		.delete(users.requiresLogin, comentario.hasAuthorization, comentario.delete);

	app.param('comentarioId', comentario.comentarioByID);
};