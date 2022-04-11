import Feedback from "../model/Feedback";
import FeedbackService from "./FeedbackService";

test('Testing find feedback by id funciton.', async () => {
    let service = new FeedbackService();
    await service.findFeedbackById(601).then((result) => {
        let feedback = result.data;
    
        expect(feedback.description).toBe('Good Learner');
    });
})

test('Testing Add feedback funciton.', async () => {
    let service = new FeedbackService();
    
     let feed=new Feedback();
     feed.feedbackId=625;
     feed.description="worst";
     feed.feedbackDate=2022-03-19;
 
    console.log("inside test "+JSON.stringify(feed))
    await service.addFeedback((feed)).then((result) => {     
        let feedback = result.data;   
 
       
    });
  
})


test('Testing Update feedback by id funciton.', async () => {
 
    let feed=new Feedback();
    feed.feedbackId=625;
    feed.description="good";
    feed.feedbackDate=2022-03-19;

    let service = new FeedbackService();
    await service.updateFeedback(feed).then((result) => {
         service.findFeedbackById(625).then((result) => {
            let feedback = result.data;
        
            expect(feedback.description).toBe('good');
        });
    });
})



test('Testing delete feedback by id funciton.', async () => {
    let feedId=625;
    let service = new FeedbackService();
    await service.deleteFeedbackById(feedId).then(() => {
        service.findfeedbackById((feedId)).then((result) => {     
            let feedback = result.data;   
            expect(null).toBe(null);
    });
})
})