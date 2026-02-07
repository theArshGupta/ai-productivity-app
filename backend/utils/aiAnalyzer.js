// utils/aiAnalyzer.js
const analyzeTask = (task) => {
    const updatedTask = { ...task }; // copy task
  
    const title = task.title.toLowerCase();
    const desc = task.description.toLowerCase();
  
    // Simple priority logic
    if (title.includes("fix") || title.includes("urgent")) updatedTask.priority = "high";
    else if (title.includes("learn") || title.includes("study")) updatedTask.priority = "medium";
    else updatedTask.priority = "low";
  
    // Simple tags logic
    const tags = [];
    if (title.includes("backend") || desc.includes("express") || desc.includes("mongodb")) tags.push("developer");
    if (title.includes("design") || desc.includes("ui") || desc.includes("ux")) tags.push("designer");
    if (title.includes("report") || desc.includes("budget")) tags.push("manager");
    if (title.includes("learn") || title.includes("study")) tags.push("student");
  
    updatedTask.tags = tags.length ? tags : ["general"];
  
    // AI metadata
    updatedTask.aiMeta = {
      confidenceScore: 80, // simple fixed score for now
      suggestedByAI: true,
      lastAnalyzedAt: new Date()
    };
  
    return updatedTask;
  };
  
  module.exports = analyzeTask;
  