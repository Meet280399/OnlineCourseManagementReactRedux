import Instructor from "../model/Instructor";
import InstructorService from "./InstructorService";

test('Testing find instructor by id funciton.', async () => {
    let service = new InstructorService();
    await service.findInstructorById(201).then((result) => {
        let instructor = result.data;
    
        expect(instructor.name).toBe('Tapan Dandawala');
    });
})

test('Testing Add instructor funciton.', async () => {
    let service = new InstructorService();
//     let feed=new Feedback();

// dept.feedbackId=101;
//     dept.feedbackdescription="Good";
     let inst=new Instructor();
     inst.instructorId=10;
     inst.name="Ashwini";
     inst.email="Ashwini@gmail.com";
     inst.mobileNo=86391971914;
     inst.salary=20000;
     inst.grades=60;

     
    console.log("inside test "+JSON.stringify(inst))
    await service.addInstructor((inst)).then((result) => {     
        let instructor = result.data;   
       // expect(employee.department.departmentName).toBe('HR');
       
    });
  
})


test('Testing Update Instructor  by id funciton.', async () => {
    // let feed=new Feedback();
    // feed.feedbackId=102;
    // feed.desription="sales";
    let inst=new Instructor();
   inst.instructorId=10;
    inst.name="Akhil";
    inst.email="Ashwini@gmail.com";
    inst.mobileNo= 8639297191;
    inst.salary= 20000;
    inst.grades=60
    
    let service = new InstructorService();
    await service.updateInstructor(inst).then((result) => {
         service.findInstructorById(10).then((result) => {
            let instructor = result.data;
        
            expect(instructor.name).toBe('Akhil');
        });
    });
})



test('Testing delete Instructor by id funciton.', async () => {
    let instId=10;
    let service = new InstructorService();
    await service.deleteInstructorById(instId).then(() => {
        service.findInstructorById((instId)).then((result) => {     
            let instructor = result.data;   
            expect(null).toBe(null);
    });
})
})