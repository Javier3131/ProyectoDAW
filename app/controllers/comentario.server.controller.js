'use strict'

var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Comentario = mongoose.model('Comentario'),
	_ = require('lodash');



exports.create = function(req, res) {
	var comentario = new Comentario(req.body);
	comentario.user = req.user;

	comentario.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			console.log("Guarda el Comentario");
			console.log(Comentario.user);
			console.log(req.user);
			res.json(comentario);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.comentario);
};



exports.update = function(req, res) {
	var comentario = req.comentario;

	comentario = _.extend(comentario, req.body);

	comentario.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(comentario);
		}
	});
};

exports.delete = function(req, res) {
	var comentario = req.comentario;

	comentario.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(comentario);
		}
	});
};

exports.list = function(req, res) {
	Comentario.find().sort('-created').populate('user', 'displayName').exec(function(err, comentario) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(comentario);
		}
	});
};

exports.comentarioByID = function(req, res, next, id) {
	Comentario.findById(id).populate('user', 'displayName').exec(function(err, comentario) {
		if (err) return next(err);
		if (!comentario) return next(new Error('Error al cargar comentario ' + id));
		req.comentario = comentario;
		next();
	});
};

exports.hasAuthorization = function(req, res, next) {
	if (req.comentario.user.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};