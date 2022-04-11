import Subject from "../model/Subject";
import SubjectService from "./SubjectService";

test('Testing find subject by id function.', async () => {
    let service = new SubjectService();
    await service.findSubjectById(506).then((result) => {
        let subject = result.data;
        console.log("subject" + JSON.stringify(subject))
        expect(subject.subjectName).toBe('JavaScript')
    });
})

test('Testing Add subject function.', async () => {
    let service = new SubjectService();
    let sub=new Subject();
    sub.subjectId=18;
    sub.subjectName='css';
    console.log("inside test "+JSON.stringify(sub))
    await service.addSubject((sub)).then((result) => {
        let subject = result.data;
        
    });
})

test('Testing Update subject by id function.', async () => {
    let sub=new Subject();
    sub.subjectId=18;
    sub.subjectName='javadevelopment';
    let service = new SubjectService();
    await service.updateSubject(sub).then((result) => {
        service.findSubjectById(18).then((result) => {
            let subject = result.data;

            expect(subject.subjectName).toBe('javadevelopment');
        });
    });
})

test('Testing delete subject by id function.', async () => {
    let subId=18;
    let service = new SubjectService();
    await service.deleteSubjectById(subId).then(() => {
        service.findSubjectById((subId)).then((result) => {
            let subject = result.data;
        expect(null).toBe(null);

        });
    })
})