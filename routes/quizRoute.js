const express = require("express");

const {
  quizValidator,
  updateQuizValidator,
  getQuizValidator,
} = require("../utils/validators/quizValidator");

const {
  createQuiz,
  updateQuiz,
  getQuiz,
  getQuizzes,
  deleteQuiz,
} = require("../services/quizService");

const authService = require("../services/authService");

const router = express.Router();

router.use(authService.protect);

// Admin
router.use(authService.allowedTo("admin", "manager"));

router.route("/").get(getQuizzes).post(quizValidator, createQuiz);

router
  .route("/:id")
  .get(getQuizValidator, getQuiz)
  .put(updateQuizValidator, updateQuiz)
  .delete(deleteQuiz);

module.exports = router;
