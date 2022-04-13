// import StudentService from "../../src/service/StudentService.js";
// import Student from "../../src/model/Student.js";

// // test("Testing delete Student by id function.", async () => {
// //
// // });

// describe("StudentService", () => {
//   describe("find Student", () => {
//     it("return the student by id", () => {
//       let service = new StudentService();
//       service.findStudentById(303).then((result) => {
//         let student = result.data;
//         expect(student.studentName).toBe("Rohit Khan");
//         {
//           // console.log("student" + JSON.stringify(result.data));
//         }
//       });
//     });
//   });
//   describe("add Student", () => {
//     let service = new StudentService();
//     let stud = new Student();
//     stud.studentId = 315;
//     stud.studentName = "Rohit Sharma";
//     stud.studentEmail = "rohit.sharma@gmail.com";
//     stud.studentAddress = "Mumbai";
//     stud.studentMobile = 8745327865;
//     it("adds the student", () => {
//       // console.log("inside test" + JSON.stringify(stud));
//       service.addStudent(stud).then((result) => {
//         let student = result.data;
//         expect(student.studentName).toBe("Rohit Sharma");
//       });
//     });
//   });
//   describe("update Student", () => {
//     let service = new StudentService();
//     let stud = new Student();
//     stud.studentId = 315;
//     stud.studentName = "Rohit Khan";
//     stud.studentEmail = "rohit.khan@gmail.com";
//     stud.studentAddress = "Mumbai";
//     stud.studentMobile = 8745327865;
//     it("update the student by id", () => {
//       service.updateStudent(stud).then((result) => {
//         service.findStudentById(303).then((result) => {
//           let student = result.data;
//           expect(student.studentName).toBe("Rohit Khan");
//         });
//       });
//     });
//   });
//   describe("delete Student", () => {
//     let service = new StudentService();
//     let studId = 315;
//     it("delete the student by id", () => {
//       service.deleteStudentById(studId).then(() => {
//         service.findStudentById(studId).then((result) => {
//           let student = result.data;
//           expect(null).toBe(null);
//         });
//       });
//     });
//   });
// });
