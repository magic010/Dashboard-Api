const slugify = require("slugify");
const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");

exports.announcementValidator = [
  check("title")
    .notEmpty()
    .withMessage("Title required")
    .isLength({ min: 3 })
    .withMessage("Too short Title name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),

  check("description")
    .notEmpty()
    .withMessage("Description required")
    .isLength({ min: 3 })
    .withMessage("Too short Description name"),

  check("owner").isMongoId().withMessage("Invalid Owner id format"),

  validatorMiddleware,
];

exports.getAnnouncementValidator = [
  check("id").isMongoId().withMessage("Invalid Announcement id format"),

  validatorMiddleware,
];

exports.updateAnnouncementValidator = [
  check("id").isMongoId().withMessage("Invalid Announcement id format"),

  validatorMiddleware,
];
