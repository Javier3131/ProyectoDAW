'use strict'

var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Categoria = mongoose.model('Categoria'),
	_ = require('lodash');



exports.create = function(req, res) {
	var categoria = new Categoria(req.body);
	categoria.user = req.user;

	categoria.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			console.log("Guarda la categoria");
			res.json(categoria);
		}
	});
};


exports.read = function(req, res) {
	res.json(req.categoria);
};



exports.update = function(req, res) {
	var categoria = req.categoria;

	categoria = _.extend(categoria, req.body);

	categoria.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(categoria);
		}
	});
};


exports.delete = function(req, res) {
	var categoria = req.categoria;

	categoria.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(categoria);
		}
	});
};


exports.list = function(req, res) {
	Categoria.find().sort('-created').populate('user', 'displayName').exec(function(err, categoria) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(categoria);
		}
	});
};



exports.categoriaByID = function(req, res, next, id) {
	Categoria.findById(id).populate('user', 'displayName').exec(function(err, categoria) {
		if (err) return next(err);
		if (!categoria) return next(new Error('Failed to load categoria ' + id));
		req.categoria = categoria;
		next();
	});
};



exports.hasAuthorization = function(req, res, next) {
	if (req.categoria.user.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};