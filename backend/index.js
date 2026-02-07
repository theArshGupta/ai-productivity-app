 

require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const app = express();

// connect database
connectDB();

// middlewares
app.use(express.json()); // parse JSON

// routes
app.get("/", (req, res) => res.send("HOME PAGE"));

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend is working 🔥",
    data: { user: "Arsh", role: "developer" }
  });
});

app.use("/api/tasks", taskRoutes); //Any request that starts with /api/tasks → send it to taskRoutes.js”

app.listen(3000, () => console.log("Server started on 3000"));
