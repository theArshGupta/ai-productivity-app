const express = require("express");
const router = express.Router();
// express.Router() = a mini app It helps keep routes clean and separate
//Instead of writing everything in index.js
const Task = require("../models/taskModel");
router.get("/", async (req, res) => {
    try {
      const tasks = await Task.find();
  
      res.json({
        success: true,
        count: tasks.length,
        data: tasks
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
});

// CREATE A TASK
router.post("/", async (req, res) => {
    try {
      const task = await Task.create(req.body);
  
      res.status(201).json({
        success: true,
        data: task
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
});
  
  

module.exports = router;

