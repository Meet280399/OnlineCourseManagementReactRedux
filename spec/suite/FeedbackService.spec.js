// import FeedbackService from "../../src/service/FeedbackService.js";
// import Feedback from "../../src/model/Feedback.js";

// describe("FeedackService", () => {
//   describe("find Feedback", () => {
//     it("return the feedback by id", () => {
//       let service = new FeedbackService();
//       service.findFeedbackById(601).then((result) => {
//         let feedback = result.data;

//         expect(feedback.description).toBe("Good Learner");
//         {
//         }
//       });
//     });
//   });

//   describe("add Feedback", () => {
//     it("add the feedback", () => {
//       let service = new FeedbackService();
//       let feed = new Feedback();
//       feed.feedbackId = 607;
//       feed.description = "worst";
//       feed.feedbackDate = "2022-03-19";

//       // console.log("inside test "+JSON.stringify(feed))
//       service.addFeedback(feed).then((result) => {
//         let feedback = result.data;
//         expect(feedback.description).toBe("worst");
//       });
//     });
//   });

//   describe("updateFeedback", () => {
//     it("update the feedback by id", () => {
//       let feed = new Feedback();
//       feed.feedbackId = 607;
//       feed.description = "good";
//       feed.feedbackDate = "2022-03-19";

//       let service = new FeedbackService();
//       service.updateFeedback(feed).then((result) => {
//         service.findFeedbackById(607).then((result) => {
//           let feedback = result.data;
//           expect(feedback.description).toBe("good");
//         });
//       });
//     });
//   });

//   describe("delete Feedback", () => {
//     it("delete the feedback by id", () => {
//       let feedId = 607;
//       let service = new FeedbackService();
//       service.deleteFeedbackById(feedId).then(() => {
//         service.findFeedbackById(feedId).then((result) => {
//           let feedback = result.data;
//           expect(null).toBe(null);
//         });
//       });
//     });
//   });
// });
