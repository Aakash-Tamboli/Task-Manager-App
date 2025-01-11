const mongoose = require("mongoose");
const Task = require("../Models/Task");

module.exports.getAllTasks = async (request, response) => {
  try {
    const tasks = await Task.find({});

    response.status(200).json(tasks);
  } catch (error) {
    console.error(error.message);
    response.status(400).json({ message: error.message });
  }
};
module.exports.addTask = async (request, response) => {
  try {
    const { task } = request.body;

    const vTask = await Task.create({ task });

    await vTask.save();

    response.status(200).json(vTask);
  } catch (error) {
    console.error(error.message);
    response.status(400).json({ message: error.message });
  }
};

module.exports.updateTask = async (request, response) => {
  try {
    const { id } = request.params;

    if (!id) return response.status(400).json({ message: "ID not found" });

    const vTask = await Task.findById(id);

    vTask.completed = !vTask.completed;

    await vTask.save();

    response.status(200).json(vTask);
  } catch (error) {
    console.error(error.message);
    response.status(400).json({ message: error.message });
  }
};

module.exports.deleteTask = async (request, response) => {
  try {
    const { id } = request.params;

    if (!id) return response.status(400).json({ message: "ID not found" });

    await Task.findByIdAndDelete(id);

    response.status(200).json({ message: "Task Deleted" });
  } catch (error) {
    console.error(error.message);
    response.status(400).json({ message: error.message });
  }
};
