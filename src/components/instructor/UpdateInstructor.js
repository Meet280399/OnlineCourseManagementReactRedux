import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
//import Instructor from "../model/Instructor";
import { updateInstructor } from "../../redux/instructor/instructorActions";
//import InstructorService from "../service/InstructorService";

function UpdateInstructor() {
  const instructors = useSelector((state) => state.instructors.instructors);
  const dispatch = useDispatch();
  const { instId } = useParams();
  const [instructor, setInstructor] = useState();

  const [instNameErr, setInstructorNameErr] = useState("");
  const [instEmailErr, setInstructorEmailErr] = useState("");
  const [instMobileNoErr, setInstructorMobileNoErr] = useState(" ");
  const [instSalaryErr, setInstructorSalaryErr] = useState(" ");
  const [instGradesErr, setInstructorGradesErr] = useState(" ");

  const formValidation = () => {
    let isValid = true;
    //const instIdErr = {};
    const instNameErr = {};
    const instEmailErr = {};
    const instMobileNoErr = {};
    const instSalaryErr = {};
    const instGradesErr = {};

    // if (instructor.instructorId.trim().length <= 0) {
    //   instIdErr.instIdRequired = "Instructor ID is required";
    //   isValid = false;
    // }

    if (instructor.name.length <= 0) {
      instNameErr.instNameRequired = "Instructor Name is required";
      isValid = false;
    } else if (typeof instructor.name !== "undefined") {
      if (!instructor.name.match(/^[a-z ,.'-]+$/i)) {
        isValid = false;
        instNameErr.instNameRequired = "Only Letter are allowed";
      }
    }

    if (instructor.email.length <= 0) {
      instEmailErr.instEmailRequired = "Instructor E-Mail is required";

      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(instructor.email)
    ) {
      instEmailErr.instEmailRequired = "Email is not valid";
    }

    if (instructor.mobileNo.length <= 0) {
      instMobileNoErr.instMobileNoRequired =
        "Instructor mobile number is Required";
      isValid = false;
    } else if (instructor.mobileNo.length != 10) {
      instMobileNoErr.instMobileNoRequired = "Please 10 Digit Phone Number";
    }

    if (instructor.salary.length <= 0) {
      instSalaryErr.instSalaryRequired = "Instructor Salary is Required";
      isValid = false;
    }
    if (instructor.grades.length <= 0) {
      instGradesErr.instGradesRequired = "Instructor Grades is Required";
      isValid = false;
    }

    //setInstructorIdErr(instIdErr);
    setInstructorNameErr(instNameErr);
    setInstructorEmailErr(instEmailErr);
    setInstructorMobileNoErr(instMobileNoErr);
    setInstructorSalaryErr(instSalaryErr);
    setInstructorGradesErr(instGradesErr);
    //setCourseProjErr(courProjErr);
    return isValid;
  };

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = formValidation();
    if (!isValid) {
      return false;
    } else {
      dispatch(updateInstructor(instructor));
      navigate("/instructors");
    }
  }
  const navigate = useNavigate();

  useEffect(() => {
    setInstructor(instructors.find((e) => e.instructorId == instId));
  }, [instId]);

  return instructor ? createForm(instructor) : <div></div>;

  function createForm(instructor) {
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2>Update instructor</h2>
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
            <br></br>
            <div>
              <input
                className="form-control my-2"
                type="text"
                id="name"
                placeholder="Enter Instructor Name"
                value={instructor.name}
                onChange={(e) =>
                  setInstructor({
                    ...instructor,
                    name: e.target.value,
                  })
                }
              />
              {Object.keys(instNameErr).map((key) => {
                return (
                  <p
                    instructor={instructor}
                    key={instructor.name}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {instNameErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <div>
              <input
                className="form-control"
                type="text"
                id="email"
                placeholder="Enter Email-Id"
                value={instructor.email}
                onChange={(e) =>
                  setInstructor({
                    ...instructor,

                    email: e.target.value,
                  })
                }
              />
              {Object.keys(instEmailErr).map((key) => {
                return (
                  <p
                    instructor={instructor}
                    key={instructor.email}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {instEmailErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <div>
              <input
                className="form-control"
                type="text"
                placeholder="Instructor MobileNo"
                value={instructor.mobileNo}
                onChange={(e) => {
                  setInstructor({
                    ...instructor,
                    mobileNo: e.target.value,
                  });
                }}
              />
              {Object.keys(instMobileNoErr).map((key) => {
                return (
                  <p
                    instructor={instructor}
                    key={instructor.mobileNo}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {instMobileNoErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <div>
              <input
                className="form-control"
                type="text"
                placeholder="Instructor Salary In Rupees"
                value={instructor.salary}
                onChange={(e) => {
                  setInstructor({
                    ...instructor,
                    salary: e.target.value,
                  });
                }}
              />
              {Object.keys(instSalaryErr).map((key) => {
                return (
                  <p
                    instructor={instructor}
                    key={instructor.salary}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {instSalaryErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <div>
              <input
                className="form-control"
                type="text"
                placeholder="Instructor Grades"
                value={instructor.grades}
                onChange={(e) => {
                  setInstructor({
                    ...instructor,
                    grades: e.target.value,
                  });
                }}
              />
              {Object.keys(instGradesErr).map((key) => {
                return (
                  <p
                    instructor={instructor}
                    key={instructor.grades}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {instGradesErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <button
              className="btn btn-outline-primary mt-3"
              onClick={handleSubmit}
            >
              Update Instructor
            </button>
            <Link
              className="btn btn-outline-primary mt-3 ml-3"
              to="/instructors"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateInstructor;
