'use strict'

var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Discuss = mongoose.model('Discuss'),
	_ = require('lodash');



exports.create = function(req, res) {
	var discuss = new Discuss(req.body);
	Discuss.user = req.user;

	discuss.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			console.log("Guarda el Comentario");
			res.json(discuss);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.discuss);
};



exports.update = function(req, res) {
	var discuss = req.discuss;

	discuss = _.extend(discuss, req.body);

	discuss.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(discuss);
		}
	});
};

exports.delete = function(req, res) {
	var discuss = req.discuss;

	discuss.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(discuss);
		}
	});
};

exports.list = function(req, res) {
	discuss.find().sort('-created').populate('user', 'displayName').exec(function(err, discuss) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(discuss);
		}
	});
};

exports.discussByID = function(req, res, next, id) {
	discuss.findById(id).populate('user', 'displayName').exec(function(err, discuss) {
		if (err) return next(err);
		if (!discuss) return next(new Error('Error al cargar comentario ' + id));
		req.discuss = discuss;
		next();
	});
};

exports.hasAuthorization = function(req, res, next) {
	if (req.discuss.user.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};