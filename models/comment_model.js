// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const CommentSchema = new Schema({
// 	Contact: {
// 		type: Schema.Types.ObjectId,
// 		ref: 'contacts'
// 	},
// 	Comment: {
// 		type: String,
// 		required: true
// 	},
// 	date: {
// 		type: Date,
// 		default: Date.now
// 	}
// });

// module.exports = mongoose.model('comment', CommentSchema);


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	content: { type: String, required: true }
},
	{ timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model("comment", CommentSchema);