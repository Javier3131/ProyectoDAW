// 'use strict';

// var users = require('../../app/controllers/users.server.controller'),
// 	discuss = require('../../app/controllers/discuss.server.controller'),
	

// 	multiparty = require('connect-multiparty'),
// 	multipartyMiddleware = multiparty();

// module.exports = function(app) {
// 	app.route('/discuss')
// 		.get(discuss.list)
// 		.post(users.requiresLogin, discuss.create);

// 	app.route('/discuss/:discussId')
// 		.get(discuss.read)
// 		.put(users.requiresLogin, discuss.hasAuthorization, discuss.update)
// 		.delete(users.requiresLogin, discuss.hasAuthorization, discuss.delete);

// 	app.route('/discussupload').post(users.requiresLogin, multipartyMiddleware, discuss.createWithUpload);

// 	app.param('discussId', discuss.articleByID);
// };