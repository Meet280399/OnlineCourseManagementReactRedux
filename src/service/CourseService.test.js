import Course from "../model/Course";
import CourseService from "./CourseService";

test("Testing find Course by id function.", async () => {
  let service = new CourseService();
  await service.findCourseById(5).then((result) => {
    let course = result.data;
    expect(course.courseName).toBe("css");
  });
});

test("Testing Add course function.", async () => {
  let service = new CourseService();

  let cour = new Course();
  cour.courseId = 3;
  cour.courseName = "HTML";
  cour.courseDuration = 25;
  console.log("inside test" + JSON.stringify(cour));
  await service.addCourse(cour).then((result) => {
    let course = result.data;
    //expect(course.courseName).toBe('HTML')
  });
});

test("Testing Update course by id function.", async () => {
  let cour = new Course();
  cour.courseId = 3;
  cour.courseName = "Database";
  cour.courseDuration = 25;
  let service = new CourseService();
  await service.updateCourse(cour).then((result) => {
    service.findCourseById(cour).then((result) => {
      let course = result.data;
      expect(course.courseName).toBe("Database");
    });
  });
});

// test("Testing delete Course by id funciton.", async () => {
//   let courId = 3;
//   let service = new CourseService();
//   await service.deleteCourseById(courId).then(() => {
//     service.findCourseById(courId).then((result) => {
//       let course = result.data;
//       expect(null).toBe(null);
//     });
//   });
// });
