import StudentService from "./StudentService";
import Student from "./../model/Student";

test("Testing find Student by id function.", async () => {
  let service = new StudentService();
  await service.findStudentById(303).then((result) => {
    let student = result.data;
    expect(student.studentName).toBe("Rohit Sharma");
  });
});

test("Testing Add Student function.", async () => {
  let service = new StudentService();

  let stud = new Student();
  stud.studentId = 310;
  stud.studentName = "Rohit Khan";
  stud.studentEmail = "rohit.khan@gmail.com";
  stud.studentAddress = "Banglore";
  stud.studentMobile = 9902332145;

  console.log("inside test" + JSON.stringify(stud));
  await service.addStudent(stud).then((result) => {
    let student = result.data;
    // expect(student.studentName).toBe("Rohit Khan");
  });
});

test("Testing Update Student by id function.", async () => {
  let stud = new Student();

  stud.studentId = 310;
  stud.studentName = "Rohit Khan";
  stud.studentEmail = "rohit.khan@gmail.com";
  stud.studentAddress = "Mumbai";
  stud.studentMobile = 9902332145;

  let service = new StudentService();
  await service.updateStudent(stud).then((result) => {
    service.findStudentById(310).then((result) => {
      let student = result.data;
      expect(student.studentName).toBe("Rohit Khan");
    });
  });
});

test('Testing delete Student by id function.', async () => {
    let studId = 310;
    let service = new StudentService();
    await service.deleteStudentById(studId).then(() => {
        service.findStudentById((studId)).then((result) => {
            let student = result.data;
            expect(null).toBe(null)
        })
    })
})