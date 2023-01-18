const userRoute = require("./userRoute");
const authRoute = require("./authRoute");
const announcementRoute = require("./announcementRoute");
const quizRoute = require("./quizRoute");

const mountRoutes = (app) => {
  app.use("/api/v1/users", userRoute);
  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/announcements", announcementRoute);
  app.use("/api/v1/quizzes", quizRoute);
};

module.exports = mountRoutes;
