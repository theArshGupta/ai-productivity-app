const express = require("express");

const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

// JSON API route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend is working 🔥",
    data: {
      user: "Arsh",
      role: "developer"
    }
  });
});

app.listen(3000, () => {
  console.log("Server started on 3000");
});
