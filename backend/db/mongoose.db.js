const mongoose = require("mongoose");

const connectToDatabase = async (url) => {
	try {
		console.log(url);
		const connection = await mongoose.connect(url);
		return connection;
	} catch (e) {
		console.warn(e.message);
		throw e;
	}
};

module.exports = connectToDatabase;