const express = require("express");

const {
  announcementValidator,
  updateAnnouncementValidator,
  getAnnouncementValidator,
} = require("../utils/validators/announcementsValidator");

const {
  createAnnouncement,
  updateAnnouncement,
  getAnnouncement,
  getAnnouncements,
  deleteAnnouncement,
} = require("../services/announcementService");

const authService = require("../services/authService");

const router = express.Router();

router.use(authService.protect);
// Admin
router.use(authService.allowedTo("admin", "manager"));

router
  .route("/")
  .get(getAnnouncements)
  .post(announcementValidator, createAnnouncement);

router
  .route("/:id")
  .get(getAnnouncementValidator, getAnnouncement)
  .put(updateAnnouncementValidator, updateAnnouncement)
  .delete(deleteAnnouncement);

module.exports = router;
