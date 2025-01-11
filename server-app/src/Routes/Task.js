const express = require("express");
const {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
} = require("../Controlllers/Task");

const router = express.Router();

router.get("/Task", getAllTasks);

router.post("/Task", addTask);

router.put("/Task/:id", updateTask);

router.delete("/Task/:id", deleteTask);

module.exports.router = router;
