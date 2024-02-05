const express = require("express");
const app = express();
require("dotenv").config();

const PORT = 5001;
const SERVER_URL = `http://localhost:${PORT}`;
const connectToDatabase = require("./backend/db/mongoose.db");

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello");
});

app.use("/api/v1/tasks", require("./backend/routes/task.route"));

const start = async () => {
	try {
		await connectToDatabase(process.env.MONGODB_URL);

		app.listen(PORT, () => {
			console.log("App is running on port ", PORT);
			console.log("The server is ", SERVER_URL);
		});
	} catch (e) {
		console.error("There was an issue starting the application: ", e);
	};
};

start();
