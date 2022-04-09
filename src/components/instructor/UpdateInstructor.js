 import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Instructor from "../../model/Instructor";
import InstructorService from "../../service/InstructorService";


function UpdateInstructor() {
  const [state, setState] = useState({ instructor: new Instructor() });
  const [instructor, setInstructor] = useState();

  // const [feedbacks, setFeedbacks] = useState([]);

  let service = new InstructorService();

  const { instId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    service
      .findInstructorById(instId)
      .then((result) => {
        alert("inside updated" + JSON.stringify(result.data));
        setState({ instructor: result.data });
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div>
      <form>
        <div>
          <input
            className="form-control"
            type="text"
            id="instructorId"
            placeholder="Enter Instructor Id"
            value={state.instructor.instructorId}
            readOnly={true}
          />
        </div>
        <div>
          <input
            className="form-control my-2"
            type="text"
            id="name"
            placeholder="Enter Instructor Name"
            value={state.instructor.name}
            onChange={(e) => {
              setState({
                instructor: {
                  ...state.instructor,
                  name: e.target.value,
                },
              });
            }}
          />
        </div>
        <div>
          <input
            className="form-control my-2"
            type="text"
            id="email"
            placeholder="Enter Email"
            value={state.instructor.email}
            onChange={(e) => {
             setState({
              instructor: {
                  ...state.instructor,
                  email: e.target.value,
                },
              });
            }}
          />
        </div>

        <div>
          <input
            className="form-control my-2"
            type="text"
            id="mobileNo"
            placeholder="Enter MobileNo"
            value={state.instructor.mobileNo}
            onChange={(e) => {
             setState({
              instructor: {
                  ...state.instructor,
                  mobileNo: e.target.value,
                },
              });
            }}
          />
        </div>

        <div>
          <input
            className="form-control my-2"
            type="text"
            id="salary"
            placeholder="Enter Salary"
            value={state.instructor.salary}
            onChange={(e) => {
             setState({
              instructor: {
                  ...state.instructor,
                  salary: e.target.value,
                },
              });
            }}
          />
        </div>

        <div>
          <input
            className="form-control my-2"
            type="text"
            id="grades"
            placeholder="Enter Grades"
            value={state.instructor.grades}
            onChange={(e) => {
             setState({
              instructor: {
                  ...state.instructor,
                  grades: e.target.value,
                },
              });
            }}
          />
        </div>

              {/* <div >
               <select className="form-control my-2" value={instructor.feedback.feedbackId}
                  onChange={(event) =>
                   setInstructor({ ...instructor, feedback: { ...instructor.feedback, feedbackId: event.target.value } })
                                }
                            >
                      {feedbacks.map((feed) => (
                            <option key={feed.value} value={feed.value}>
                                   {feed.display}
                                    </option>
                                ))}
                            </select>  
                </div>         */}
        
        <button
          className="btn btn-outline-primary mt-3"
          onClick={(e) => {
            e.preventDefault();
            service
              .updateInstructor(state.instructor)
              .then(() => {
                alert("Instructor record is Updated. ");
                setState({ instructor: new Instructor() });
                navigate("/instructors");
              })
              .catch((er) => {
                alert(er);
              });
          }}
        >
          Update Instructor
        </button>
        <Link className="btn btn-outline-primary mt-3 ml-3" to="/instructors">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default UpdateInstructor;