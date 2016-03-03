'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var DiscussSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	
	comment: {
		type: String,
		default: '',
		trim: true,
		required: 'Comentario no puede estar vacio'
	},
	
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	
	article: {
		type: Schema.ObjectId,
		ref: 'article'
	}
});

mongoose.model('Discuss', DiscussSchema);