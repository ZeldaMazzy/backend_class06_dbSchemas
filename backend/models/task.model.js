const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Must provide a name"],
		trim: true,
		maxlength: [20, "Must be 20 characters or fewer"]
	},
	completed: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Task', TaskSchema);