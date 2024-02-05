const express = require("express"); 
const router = express.Router();

const { 
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask 
} = require("../controllers/task.controller");

router.route("/").get(getAllTasks);

router.route('/:id').get(getTaskById);

router.route('/').post(createTask);

router.route('/:id').patch(updateTask);

router.route('/:id').delete(deleteTask);

module.exports = router;