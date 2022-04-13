// import SubjectService from "../../src/service/SubjectService.js";
// import Subject from "../../src/model/Subject.js";

// describe("SubjectService", () => {
//   describe("find Subject", () => {
//     it("return the subject by id", () => {
//       let service = new SubjectService();
//       service.findSubjectById(506).then((result) => {
//         let subject = result.data;
//         except(subject.subName).toBe("ReactJs");
//       });
//     });
//   });
//   describe("add Subject", () => {
//     it("adds the subject", () => {
//       let service = new SubjectService();
//       let sub = new Subject();
//       sub.subjectId = 15;
//       sub.subjectName = "python";
//       service.addSubject(sub).then((result) => {
//         let subject = result.data;
//       });
//     });
//   });

//   describe("update Subject", () => {
//     it("update the subject by id", () => {
//       let service = new SubjectService();
//       let sub = new Subject();
//       sub.subjectId = 15;
//       sub.subjectName = "html sql";
//       service.updateSubject(sub).then((result) => {
//         service.findSubjectById(15).then((result) => {
//           let subject = result.data;
//           expect(subject.subjectName).toBe("html sql");
//         });
//       });
//     });
//   });
//   describe("delete Subject", () => {
//     it("delete the subject by id", () => {
//       let service = new SubjectService();
//       let subId = 15;
//       service.deleteSubjectById(subId).then(() => {
//         service.findSubjectById(subId).then((result) => {
//           let subject = result.data;
//           expect(null).toBe(null);
//         });
//       });
//     });
//   });
// });
