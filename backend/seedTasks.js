require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const connectDB = require("./config/db");

const tasks = [
    { title: "Finish backend basics", description: "Learn Express + MongoDB", status: "in-progress", priority: "high", tags: ["developer"] },
    { title: "Create landing page UI", description: "Design the homepage for website", status: "pending", priority: "medium", tags: ["designer"] },
    { title: "Prepare project presentation", description: "Slides for client meeting", status: "pending", priority: "high", tags: ["manager"] },
    { title: "Fix login bug", description: "Resolve authentication error", status: "in-progress", priority: "high", tags: ["developer"] },
    { title: "Write unit tests", description: "Ensure backend functions correctly", status: "pending", priority: "medium", tags: ["developer"] },
    { title: "Update user guide", description: "Add instructions for new features", status: "pending", priority: "low", tags: ["writer"] },
    { title: "Optimize images", description: "Compress images for faster loading", status: "completed", priority: "medium", tags: ["designer"] },
    { title: "Set up CI/CD", description: "Automate deployment workflow", status: "pending", priority: "high", tags: ["developer"] },
    { title: "Organize team meeting", description: "Discuss project milestones", status: "completed", priority: "medium", tags: ["manager"] },
    { title: "Design mobile app UI", description: "Prototype screens for mobile", status: "in-progress", priority: "high", tags: ["designer"] },
    { title: "Prepare budget report", description: "Finance analysis for Q1", status: "pending", priority: "high", tags: ["manager"] },
    { title: "Learn React basics", description: "Start frontend development", status: "in-progress", priority: "medium", tags: ["student"] },
    { title: "Write blog post", description: "Topic: AI in web development", status: "pending", priority: "low", tags: ["writer"] },
    { title: "Refactor code", description: "Improve code readability", status: "in-progress", priority: "medium", tags: ["developer"] },
    { title: "Conduct UX research", description: "Interview users for feedback", status: "pending", priority: "medium", tags: ["designer"] },
    { title: "Plan marketing campaign", description: "Social media strategy", status: "pending", priority: "high", tags: ["manager"] },
    { title: "Study MongoDB aggregation", description: "Prepare for advanced queries", status: "in-progress", priority: "medium", tags: ["student"] },
    { title: "Update portfolio website", description: "Add recent projects", status: "pending", priority: "low", tags: ["designer"] },
    { title: "Deploy backend to server", description: "Make API live", status: "pending", priority: "high", tags: ["developer"] },
    { title: "Prepare internship report", description: "Document project work", status: "pending", priority: "medium", tags: ["student"] }
  ];
  

const seedTasks = async () => {
  try {
    await connectDB();
    await Task.deleteMany(); // optional: clear existing tasks
    const created = await Task.insertMany(tasks);
    console.log(`Inserted ${created.length} tasks ✅`);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedTasks();
