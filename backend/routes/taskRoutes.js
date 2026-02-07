const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");
const analyzeTask = require("../utils/aiAnalyzer"); // AI function

console.log("Task routes loaded ✅");

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({
      success: true,
      count: tasks.length,
      message: "OK",
      data: tasks
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// CREATE a task
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, data: task });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// UPDATE a task by ID
router.put("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedData = req.body;

    const task = await Task.findByIdAndUpdate(taskId, updatedData, { new: true });
    if (!task) return res.status(404).json({ success: false, message: "Task not found" });

    res.json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE a task by ID
router.delete("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndDelete(taskId);
    if (!task) return res.status(404).json({ success: false, message: "Task not found" });

    res.json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// AI ANALYZE a task by ID
router.post("/analyze/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    console.log("Analyzing task ID:", taskId);

    let task = await Task.findById(taskId);
    if (!task) {
      console.log("Task not found");
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    console.log("Task found:", task.title);

    // Run AI analysis
    const updatedTask = analyzeTask(task.toObject());
    console.log("AI suggested priority:", updatedTask.priority);

    // Save changes in DB
    task = await Task.findByIdAndUpdate(taskId, updatedTask, { new: true });
    console.log("Task updated in DB");

    res.json({ success: true, data: task });
  } catch (error) {
    console.error("Error analyzing task:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
