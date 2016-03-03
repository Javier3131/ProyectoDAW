'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Article = mongoose.model('Article'),
	_ = require('lodash'),
	multiparty = require('multiparty'),
	uuid = require('uuid'),
	// Agregando funcion bajada de stackoverflow 
	fs = require('fs'),
	// Agregando funcion bajada de stackoverflow 
	Categoria = mongoose.model('Categoria');

/**
 * Create a article, propio del template
 */
exports.create = function(req, res) {
	var article = new Article(req.body);
	article.user = req.user;

	article.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			console.log("Guarda el articulo");
			res.json(article);
		}
	});
};



/**
 * Create a article with Upload, Agregando funcion bajada de stackoverflow
 */
exports.createWithUpload = function(req, res) {

    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {

        var file = req.files.file;
        console.log(file.name);
        console.log(file.type);
        console.log(file.path);
        console.log(req.body.article);

        var art = JSON.parse(req.body.article);
        var article = new Article(art);
        article.user = req.user;
        var tmpPath = file.path;
        var extIndex = tmpPath.lastIndexOf('.');
        var extension = (extIndex < 0) ? '' : tmpPath.substr(extIndex);
        var fileName = uuid.v4() + extension;
        var destPath = './public/uploads/' + fileName;

        article.image = '/uploads/' + fileName;

        var is = fs.createReadStream(tmpPath);
        var os = fs.createWriteStream(destPath);

        if(is.pipe(os)) {
            fs.unlink(tmpPath, function (err) { //To unlink the file from temp path after copy
                if (err) {
                    console.log(err);
                }
            });
            article.save(function(err) {
                if (err) {
                    return res.status(400).send({
                        message: errorHandler.getErrorMessage(err)
                    });
                } else {
                    res.jsonp(article);
                    console.log("Exitoso createWithUpload");
                }
            });
        } else
            return res.json('File not uploaded');
    });

};

// Agregando funcion bajada de stackoverflow


/**
 * Show the current article
 */
exports.read = function(req, res) {
	res.json(req.article);
};

/**
 * Update a article
 */
exports.update = function(req, res) {
	var article = req.article;

	article = _.extend(article, req.body);

	article.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(article);
		}
	});
};

/**
 * Delete an article
 */
exports.delete = function(req, res) {
	var article = req.article;

	article.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(article);
		}
	});
};

/**
 * List of Articles
 */
exports.list = function(req, res) {
	Article.find().sort('-created').populate('user', 'displayName').exec(function(err, articles) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(articles);
		}
	});
};

/**
 * Article middleware
 */
exports.articleByID = function(req, res, next, id) {
	Article.findById(id).populate('user', 'displayName').exec(function(err, article) {
		if (err) return next(err);
		if (!article) return next(new Error('Failed to load article ' + id));
		req.article = article;
		next();
	});
};

/**
 * Article authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.article.user.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};


//Javier - Agregando Funcionalidad de categorias a los articulos
exports.listCat = function(req, res) {
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