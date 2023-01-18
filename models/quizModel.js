const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    course: { type: String, required: true },
    topic: { type: String, required: true },
    dueDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
