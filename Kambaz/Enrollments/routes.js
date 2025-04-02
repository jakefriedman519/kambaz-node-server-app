import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
    const { courseId, userId } = req.params;
    enrollmentsDao.unenrollUserInCourse(userId, courseId);
    res.send(204);
  });

  app.post("/api/enrollments/:userId/:courseId", async (req, res) => {
    const { courseId, userId } = req.params;
    const enrollments = enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.json(enrollments);
  });
  app.get("/api/enrollments/:userId", async (req, res) => {
    const { userId } = req.params;
    const enrollments = enrollmentsDao.getMyEnrollments(userId);
    res.json(enrollments);
  });
}
