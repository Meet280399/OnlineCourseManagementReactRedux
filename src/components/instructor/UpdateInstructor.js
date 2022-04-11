import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Instructor from "../../model/Instructor";
import InstructorService from "../../service/InstructorService";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {updateInstructor} from '../../redux/instructor/instructorActions'

function UpdateInstructor() {
  const instructors = useSelector((state) => state.instructors.instructors);
  const dispatch = useDispatch();
  const [instructor, setInstructor] = useState();

  let service = new InstructorService();

  const { instId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setInstructor(instructors.find((e) => e.instructorId == instId));
  }, [instId]);

  return instructor ? createForm(instructor) : <div>Loading</div>;

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateInstructor(instructor));
    navigate("/instructors");
  }

  function createForm(instructor) {
    return (
      <div>
        <form>
          <div>
            <input
              className="form-control"
              type="text"
              id="instructorId"
              placeholder="Enter Instructor Id"
              value={instructor.instructorId}
              readOnly={true}
            />
          </div>
          <div>
            <input
              className="form-control my-2"
              type="text"
              id="name"
              placeholder="Enter Instructor Name"
              value={instructor.name}
              onChange={(e) => {
                setInstructor({
                    ...instructor,
                    name: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <input
              className="form-control my-2"
              type="text"
              id="email"
              placeholder="Enter Email "
              value={instructor.email}
              onChange={(e) => {
                setInstructor({
                    ...instructor,
                    email: e.target.value,
                });
              }}
            />
          </div>

          <div>
            <input
              className="form-control my-2"
              type="text"
              id="name"
              placeholder="Enter Mobile NO"
              value={instructor.mobileNo}
              onChange={(e) => {
                setInstructor({
                    ...instructor,
                    mobileNo: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <input
              className="form-control my-2"
              type="text"
              id="salary"
              placeholder="Enter Salary "
              value={instructor.salary}
              onChange={(e) => {
                setInstructor({
                    ...instructor,
                    salary: e.target.value,
                });
              }}
            />
          </div>

          <div>
            <input
              className="form-control my-2"
              type="text"
              id="grades"
              placeholder="Enter Instructor Grades"
              value={instructor.grades}
              onChange={(e) => {
                setInstructor({
                    ...instructor,
                    grades: e.target.value,
                });
              }}
            />
          </div>

          <button
            className="btn btn-outline-primary mt-3"
            onClick={handleSubmit}
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
}

export default UpdateInstructor;
