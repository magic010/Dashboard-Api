const factory = require("./handlersFactory");
const Announcement = require("../models/announcementModel");

// @desc    Get list of announcements
// @route   GET /api/v1/announcements
// @access  Private/Admin

exports.getAnnouncements = factory.getAll(Announcement);

// @desc    Get specific announcement by id
// @route   GET /api/v1/announcements/:id
// @access  Private/Admin

exports.getAnnouncement = factory.getOne(Announcement);

// @desc    Create announcement
// @route   POST  /api/v1/announcements
// @access  Private/Admin

exports.createAnnouncement = factory.createOne(Announcement);

// @desc    Update specific announcement
// @route   PUT /api/v1/announcements/:id
// @access  Private/Admin

exports.updateAnnouncement = factory.updateOne(Announcement);

// @desc    Delete specific announcement
// @route   DELETE /api/v1/announcements/:id
// @access  Private/Admin

exports.deleteAnnouncement = factory.deleteOne(Announcement);
