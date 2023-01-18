const factory = require("./handlersFactory");
const Quiz = require("../models/quizModel");

// @desc    Get list of quizzes
// @route   GET /api/v1/quizzes
// @access  Private/Admin

exports.getQuizzes = factory.getAll(Quiz);

// @desc    Get specific quiz by id
// @route   GET /api/v1/quizzes/:id
// @access  Private/Admin

exports.getQuiz = factory.getOne(Quiz);

// @desc    Create quiz
// @route   POST  /api/v1/quizzes
// @access  Private/Admin

exports.createQuiz = factory.createOne(Quiz);

// @desc    Update specific quiz
// @route   PUT /api/v1/quizzes/:id
// @access  Private/Admin

exports.updateQuiz = factory.updateOne(Quiz);

// @desc    Delete specific quiz
// @route   DELETE /api/v1/quizzes/:id
// @access  Private/Admin

exports.deleteQuiz = factory.deleteOne(Quiz);
