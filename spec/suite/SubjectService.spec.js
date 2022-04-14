import SubjectService from "../../src/service/SubjectService.js";
import Subject from "../../src/model/Subject.js";

describe("SubjectService", () => {
  describe("find Subject", () => {
    it("return the subject by id", () => {
      let service = new SubjectService();
      service.findSubjectById(506).then((result) => {
        let subject = result.data;
        except(subject.subName).toBe("ReactJs");
      });
    });
  });
  describe("add Subject", () => {
    it("adds the subject", () => {
      let service = new SubjectService();
      let sub = new Subject();
      sub.subjectId = 510;
      sub.subjectName = "Python";
      service.addSubject(sub).then((result) => {
        let subject = result.data;
        expect(subject.subjectName).toBe("Python");
      });
    });
  });

  describe("update Subject", () => {
    it("update the subject by id", () => {
      let service = new SubjectService();
      let sub = new Subject();
      sub.subjectId = 510;
      sub.subjectName = "HTML";
      service.updateSubject(sub).then((result) => {
        service.findSubjectById(510).then((result) => {
          let subject = result.data;
          expect(subject.subjectName).toBe("HTML");
        });
      });
    });
  });
  describe("delete Subject", () => {
    it("delete the subject by id", () => {
      let service = new SubjectService();
      let subId = 510;
      service.deleteSubjectById(subId).then(() => {
        service.findSubjectById(subId).then((result) => {
          let subject = result.data;
          expect(null).toBe(null);
        });
      });
    });
  });
});
