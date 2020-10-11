const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'contacts'
	},
	comment: {
		type: String,
		required: true
    },
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Contact', ContactSchema);
