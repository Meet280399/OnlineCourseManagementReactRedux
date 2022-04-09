import { useNavigate ,Link} from "react-router-dom";
import { useState } from "react";
import Instructor from "../../model/Instructor";
import InstructorService from "../../service/InstructorService";


function AddInstructor() {
    const navigate = useNavigate();
    let service = new InstructorService();
    const [state, setState] = useState({ instructor: new Instructor() });
    const [feedbacks, setFeedbacks] = useState([]);
  return (
    <div>
        <div>
            <form>
                <div>
                    <input className="form-control" type="text" placeholder="Instructor Id"
                        value={state.instructor.instructorId}
                        onChange={(u) => {
                            setState({
                                instructor: {
                                   ...state.instructor,
                                   instructorId: u.target.value 
                                }
                            })
                        }}
                    />
                    <br></br>
                </div>
                <div>
                    <input className="form-control my-2" type="text" placeholder="Instructor Name"
                        value={state.instructor.name}
                        onChange={(u) => setState({
                            instructor: {
                                ...state.instructor,
                                name: u.target.value
                            }
                        })}
                    />
                     <br></br>
                </div>
                <div>
                    <input className="form-control" type="text" placeholder="Instructor Email"
                        value={state.instructor.email}
                        onChange={(u) => setState({
                            instructor: {
                                ...state.instructor,
                                email: u.target.value
                            }
                        })}
                    />
                    <br></br>
                </div>

                <div>
                    <input className="form-control" type="text" placeholder="Instructor MobileNo"
                        value={state.instructor.mobileNo}
                        onChange={(u) => {
                            setState({
                                instructor: {
                                   ...state.instructor,
                                   mobileNo: u.target.value 
                                }
                            })
                        }}
                    />
                    <br></br>
                </div>

                <div>
                    <input className="form-control" type="text" placeholder="Instructor Salary"
                        value={state.instructor.salary}
                        onChange={(u) => {
                            setState({
                                instructor: {
                                   ...state.instructor,
                                   salary: u.target.value 
                                }
                            })
                        }}
                    />
                    <br></br>
                </div>

                <div>
                    <input className="form-control" type="text" placeholder="Instructor Grades"
                        value={state.instructor.grades}
                        onChange={(u) => {
                            setState({
                                instructor: {
                                   ...state.instructor,
                                   grades: u.target.value 
                                }
                            })
                        }}
                    />
                    <br></br>
                </div>

                <div>
                <select
                            className="form-control my-2"
                            value={state.instructor.feedback.feedbackId}
                            onChange={(event) =>
                                setState({ instructor: { ...state.instructor, feedback: { ...state.instructor.feedback, feedbackId: event.target.value } } })
                            }
                        >
                            {feedbacks.map((feed) => (
                                <option key={feed.value} value={feed.value}>
                                    {feed.display}
                                </option>
                            ))}
                        </select>
                        <br></br>
                </div>


                <button
            className="btn btn-outline-primary mt-3"
            onClick={(e) => {
              e.preventDefault();
              service
                .addInstructor(state.instructor)
                .then((result) => {
                  alert("Instructor is added in database. ");
                  navigate("/instructors");
                })
                .catch((error2) => {
                  alert(error2);
                });
            }}
          >
            Add Instructor
          </button>
          <Link className="btn btn-outline-primary mt-3 ml-3" to="/instructors">
          Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddInstructor