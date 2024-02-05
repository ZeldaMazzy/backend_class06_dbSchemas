const Task = require("../models/task.model");

const getAllTasks = async (req, res) => {
	try {
		const allTasks = await Task.find({});
		res.status(200).json({ success: true, data: allTasks });
	} catch (e) {
		console.error(e.message);
		res.status(400).json({ success: false, data: e.message });
	}
};

const getTaskById = async (req, res) => {
	try {
		const idToFind = req.params.id;
		const task = await Task.findOne({ _id: idToFind });

		res.status(200).json({ success: true, data: task });
	} catch(e) {
		console.error("Task not found.")
		res.status(404).json({ success: false, data: "Task not found." });
	}
};

const createTask = async (req, res) => {
	try {
		const newTask = await Task.create(req.body);
		res.status(201).json({ success: true, data: newTask });
	} catch (e) {
		console.error(e.message);
		res.status(400).json({ success: false, data: e.message });
	}
};

const updateTask = async (req, res) => {
	try {
		const taskIdToUpdate = req.params.id;
		const task = await Task.findOneAndUpdate(
			{ _id: taskIdToUpdate },
			req.body,
			{
				new: true,
				runValidators: true
			}
		);

		res.status(201).json({ success: true, data: task });
	} catch(e) {
		console.error(e.message);
		res.status(400).json({ success: false, data: e.message });
	}
};

const deleteTask = async (req, res) => {
	try {
		const taskIdToDelete = req.params.id;
		const task = await Task.findOneAndDelete(
			{ _id: taskIdToDelete }
		);

		res.send(204);
	} catch(e) {
		console.error(e.message);
		res.status(400).json({ success: false, data: "Task not found." });
	}
};

module.exports = {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask
}