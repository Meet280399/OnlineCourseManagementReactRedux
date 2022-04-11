import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
// import Student from "./../model/Student";
import StudentService from "../../service/StudentService";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateStudent } from "../../redux/student/studentActions";
import Student from "./../../model/Student";

export default function UpdateStudent() {
  //useSelector: A hook to access the redux store's state.
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();
  const { studId } = useParams();
  const [student, setStudent] = useState();
  // const [state, setState] = useState({ student: new Student() });
  // const [courses, setCourses] = useState([]);

  // const[studIdErr, setStudentIdErr] = useState("")
  const [studNameErr, setStudentNameErr] = useState("");
  const [studEmailErr, setStudentEmailErr] = useState("");
  const [studAddressErr, setStudentAddressErr] = useState("");
  const [studMobileErr, setStudentMobileErr] = useState("");

  const formValidation = () => {
    let isValid = true;
    const studIdErr = {};
    const studNameErr = {};
    const studEmailErr = {};
    const studAddressErr = {};
    const studMobileErr = {};

    // if (sstudent.studentId.trim().length <= 0) {
    //   studIdErr.studIdRequired = "Student Id is required";
    //   isValid = false;
    // }
    if (student.studentName.trim().length <= 0) {
      studNameErr.studNameRequired = "Student Name is required";
      isValid = false;
    } else if (typeof student.studentName.trim() !== "undefined") {
      if (!student.studentName.trim().match(/^[a-z ,.'-]+$/i)) {
        isValid = false;
        studNameErr.studNameRequired = "Enter Proper Student Name";
      }
    }

    if (student.studentEmail.trim().length <= 0) {
      studEmailErr.studEmailRequired = "Student E-Mail is required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        student.studentEmail.trim()
      )
    ) {
      studEmailErr.studEmailRequired = "Email is not valid";
    }
    if (student.studentAddress.trim().length <= 0) {
      studAddressErr.studAddressRequired = "Student Address is required";
      isValid = false;
    }
    if (student.studentMobile.trim().length <= 0) {
      studMobileErr.studMobileRequired = "Student Mobile Number is required";
      isValid = false;
    } else if (student.studentMobile.trim().length != 10) {
      studMobileErr.studMobileRequired = "Please 10 Digit Phone Number";
    }

    // setStudentIdErr(studIdErr);
    setStudentNameErr(studNameErr);
    setStudentEmailErr(studEmailErr);
    setStudentAddressErr(studAddressErr);
    setStudentMobileErr(studMobileErr);
    return isValid;
  };
  // console.log("first" + JSON.stringify(student.studentMobile))

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = formValidation();
    if (!isValid) {
      return false;
    } else {
      dispatch(updateStudent(student));
      navigate("/students");
    }
  }

  // let service = new StudentService();

  const navigate = useNavigate();

  useEffect(() => {
    setStudent(students.find((e) => e.studentId == studId));
    // loadCourses();
  }, [studId]);

  return student ? createForm(student) : <div>Loading</div>;

  // async function loadCourses() {
  //   let result = await service.getAllCourse();
  //   let cours = result.data.map((cour) => {
  //     return {value: cour.courseId, display: cour.courseName};
  //   })
  //   setCourses([{ value: "-1", display: "Select Course"}, ...cours])
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   dispatch(updateStudent(student));
  //   navigate("/students");
  // }

  function createForm(student) {
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2>Update Student</h2>
          <form>
            <div>
              <input
                className="form-control"
                type="text"
                id="studentId"
                placeholder="Enter Student Id"
                value={student.studentId}
                readOnly={true}
              />
            </div>
            <div>
              {/* <div className="alert-danger">{error.nameError}</div> */}
              <input
                className="form-control my-2"
                type="text"
                id="studentName"
                placeholder="Enter Student Name"
                value={student.studentName}
                onChange={(e) =>
                  setStudent({
                    ...student,
                    studentName: e.target.value,
                  })
                }
              />
              {Object.keys(studNameErr).map((key) => {
                return (
                  <p
                    student={student}
                    key={student.studentName}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {studNameErr[key]}
                  </p>
                );
              })}
            </div>
            <div>
              {/* <div className="alert-danger">{error.emailError}</div> */}
              <input
                className="form-control my-2"
                type="text"
                id="studentEmail"
                placeholder="Enter student E-Mail"
                value={student.studentEmail}
                onChange={(e) =>
                  setStudent({
                    ...student,
                    studentEmail: e.target.value,
                  })
                }
              />
              {Object.keys(studEmailErr).map((key) => {
                return (
                  <p
                    student={student}
                    key={student.studentEmail}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {studEmailErr[key]}
                  </p>
                );
              })}
            </div>
            <div>
              {/* <div className="alert-danger">{error.addressError}</div> */}
              <input
                className="form-control my-2"
                type="text"
                id="studentAddress"
                placeholder="Enter Student Address"
                value={student.studentAddress}
                onChange={(e) => {
                  setStudent({
                    ...student,
                    studentAddress: e.target.value,
                  });
                }}
              />
              {Object.keys(studAddressErr).map((key) => {
                return (
                  <p
                    student={student}
                    key={student.studentAddress}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {studAddressErr[key]}
                  </p>
                );
              })}
            </div>
            <div>
              {/* <div className="alert-danger">{error.mobileError}</div> */}
              <input
                className="form-control my-2"
                type="text"
                id="studentMobile"
                placeholder="Enter Student Mobile"
                value={student.studentMobile}
                onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                onChange={(e) => {
                  setStudent({
                    ...student,
                    studentMobile: e.target.value,
                  });
                }}
              />
              {Object.keys(studMobileErr).map((key) => {
                return (
                  <p
                    student={student}
                    key={student.studentMobile}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {studMobileErr[key]}
                  </p>
                );
              })}
            </div>
            {/* <div>
              <select className="form-control my-2" value={student.course.courseId}
                onChange={(event) => setStudent({...student, course: {...student.course, courseId: event.target.value}})}
              >
                {courses.map((cour) => (
                  <option key={cour.value} value={cour.value}>
                    {cour.display}
                  </option>
                ))}
              </select>
            </div> */}
            <button
              className="btn btn-outline-primary mt-3"
              onClick={handleSubmit}
            >
              Update Student
            </button>
            <Link
              className="btn btn-outline-primary mt-3 ml-3"
              to={"/students"}
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
