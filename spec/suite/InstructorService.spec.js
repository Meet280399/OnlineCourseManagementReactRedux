import Instructor from "../../src/model/Instructor.js";
//import { addInstructor } from "../../src/redux/instructor/instructorActions";
import InstructorService from "../../src/service/InstructorService.js";

describe("InstructorService", () => {
  describe("find Instructor", () => {
    it("return the instructor by id", () => {
      let service = new InstructorService();
      service.findInstructorById(201).then((result) => {
        let instructor = result.data;
        expect(instructor.name).toBe("Tapan Dandawala");
      });
    });
  });

  describe("add Instructor", () => {
    it("add instructor ", () => {
      let service = new InstructorService();
      let inst = new Instructor();
      inst.instructorId = 205;
      inst.name = "Akhil Inamdar";
      inst.email = "akhila@gmail.com";
      inst.mobileNo = 8822012399;
      inst.salary = 20000;
      inst.grades = 50;

      service.addInstructor(inst).then((result) => {
        let instructor = result.data;
        expect(instructor.name).toBe("Akhil Inamdar");
      });
    });
  });

  describe("upadate Instructor", () => {
    it("update instructor", () => {
      let service = new InstructorService();
      let inst = new Instructor();
      inst.instructorId = 205;
      inst.name = "Monika Deshpande";
      inst.email = "monika@gmail.com";
      inst.mobileNo = 8822012399;
      inst.salary = 20000;
      inst.grades = 50;

      service.updateInstructor(inst).then((result) => {
        service.findInstructorById(205).then((result) => {
          let instructor = result.data;
          expect(instructor.name).toBe("Monika Mane");
        });
      });
    });
  });

  describe("delete Instructor", () => {
    it("detete instructor", () => {
      let service = new InstructorService();
      let instId = 205;
      service.deleteInstructorById(5).then(() => {
        service.findInstructorById(instId).then((result) => {
          let instructor = result.data;
          expect(null).toBe(null);
        });
      });
    });
  });
});
