const slugify = require("slugify");
const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");
const Quiz = require("../../models/quizModel");

exports.quizValidator = [
  check("name")
    .notEmpty()
    .withMessage("Quiz required")
    .isLength({ min: 3 })
    .withMessage("Too short Quiz name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),

  check("course")
    .notEmpty()
    .withMessage("Course required")
    .isLength({ min: 3 })
    .withMessage("Too short Course name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),

  check("topic")
    .notEmpty()
    .withMessage("Topic required")
    .isLength({ min: 3 })
    .withMessage("Too short Topic name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),

  check("dueDate")
    .notEmpty()
    .withMessage("Due Date required")
    .isDate()
    .withMessage("Invalid due date")
    .custom((val) =>
      Quiz.findOne({ dueDate: val }).then((quiz) => {
        if (quiz) {
          return Promise.reject(new Error("Due Date already in use"));
        }
      })
    ),

  validatorMiddleware,
];

exports.getQuizValidator = [
  check("id").isMongoId().withMessage("Invalid Quiz id format"),

  validatorMiddleware,
];

exports.updateQuizValidator = [
  check("id").isMongoId().withMessage("Invalid Quiz id format"),

  check("name")
    .optional()

    .isLength({ min: 3 })
    .withMessage("Too short Quiz name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),

  check("course")
    .optional()

    .isLength({ min: 3 })
    .withMessage("Too short Course name"),

  check("topic")
    .optional()

    .isLength({ min: 3 })
    .withMessage("Too short Topic name"),

  check("dueDate").optional().isDate().withMessage("Invalid due date"),

  validatorMiddleware,
];

exports.deleteQuizValidator = [
  check("id").isMongoId().withMessage("Invalid Quiz id format"),

  validatorMiddleware,
];
