'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var ComentarioSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},

	comment: {
		type: String,
		default: '',
		trim: true,
		required: 'Comentario no puede estar vacio'
	},
	
	
	
});

mongoose.model('Comentario', ComentarioSchema);