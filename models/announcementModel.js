const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "owner required"],
    },
    title: {
      type: String,
      required: [true, "title required"],
    },
    description: {
      type: String,
      required: [true, "description required"],
    },
  },
  { timestamps: true }
);

announcementSchema.pre(/^find/, function (next) {
  this.populate({
    path: "owner",
    select: "name profileImg",
  });
  next();
});

const Announcement = mongoose.model("Announcement", announcementSchema);

module.exports = Announcement;
