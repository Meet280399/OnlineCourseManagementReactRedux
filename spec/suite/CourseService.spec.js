import Course from "../../src/model/Course.js";
import CourseService from "../../src/service/CourseService.js";

describe("CourseService", () => {
  describe("find course", () => {
    it("return the course by id", () => {
      let service = new CourseService();
      service.findCourseById(104).then((result) => {
        let course = result.data;
        expect(course.courseName).toBe("Integration of IoT and ML");
      });
    });
  });

  describe("add Course", () => {
    it("adds the course", () => {
      let service = new CourseService();
      let cour = new Course();
      cour.courseId = 110;
      cour.courseName = "html";
      cour.courseDuration = 95;

      service.addCourse(cour).then((result) => {
        let course = result.data;
        expect(course.courseName).toBe("html");
      });
    });
  });

  describe("update Course", () => {
    it("update the course by id", () => {
      let service = new CourseService();
      let cour = new Course();
      cour.courseId = 110;
      cour.courseName = "Hibernate1";
      cour.courseDuration = 65;

      service.updateCourse(cour).then((result) => {
        service.findCourseById(110).then((result) => {
          let course = result.data;
          expect(course.courseName).toBe("Hibernate1");
        });
      });
    });
  });

  describe("delete Course", () => {
    it("delete the course by id", () => {
      let service = new CourseService();
      let courId = 11;
      service.deleteCourseById(courId).then(() => {
        service.findCourseById(courId).then((result) => {
          let course = result.data;
          expect(null).toBe(null);
        });
      });
    });
  });
});
