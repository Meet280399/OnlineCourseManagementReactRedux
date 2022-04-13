// import Instructor from "../../src/model/Instructor.js";
// import InstructorService from "../../src/service/InstructorService.js";

// describe("InstructorService", () => {
//   describe("find Instructor", () => {
//     it("Testing find instructor by id funciton.", () => {
//       let service = new InstructorService();
//       service.findInstructorById(201).then((result) => {
//         let instructor = result.data;
//         expect(instructor.name).toBe("Tapan Dandawala");
//       });
//     });
//   });

//   describe("add Instructor", () => {
//     let service = new InstructorService();
//       let inst = new Instructor();
//       inst.instructorId = 202;
//       inst.name = "Aryan Thakran";
//       inst.email = "aryan.thakran@gmail.com";
//       inst.mobileNo = 8790005227;
//       inst.salary = 78000;
//       inst.grades = 90;
//     it("Testing Add instructor funciton.", () => {
//       // console.log("inside test " + JSON.stringify(inst));
//       service.addInstructor(inst).then((result) => {
//         let instructor = result.data;
//         expect(instructor.name).toBe("Aryan Thakran")
//         // expect(employee.department.departmentName).toBe('HR');
//       });
//     });
//   });

//   describe("update Instructor", () => {
//     it("Testing Update Instructor  by id funciton.", () => {
//       let service = new InstructorService();

//       let inst = new Instructor();
//       inst.instructorId = 10;
//       inst.name = "Akhil";
//       inst.email = "Ashwini@gmail.com";
//       inst.mobileNo = 8639297191;
//       inst.salary = 20000;
//       inst.grades = 60;

//       service.updateInstructor(inst).then((result) => {
//         service.findInstructorById(10).then((result) => {
//           let instructor = result.data;
//           expect(instructor.name).toBe("Akhil");
//         });
//       });
//     });
//   });

//   describe("delete Instructor", () => {
//     it("Testing delete Instructor by id funciton.", () => {
//       let service = new InstructorService();
//       let instId = 10;
//       service.deleteInstructorById(instId).then(() => {
//         service.findInstructorById(instId).then((result) => {
//           let instructor = result.data;
//           expect(null).toBe(null);
//         });
//       });
//     });
//   });
// });
