import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
// import Student from "./../model/Student";
import StudentService from "./../service/StudentService";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateStudent } from "./../redux/student/studentActions";

export default function UpdateStudent() {
  //useSelector: A hook to access the redux store's state.
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();
  const { studId } = useParams();
  const [student, setStudent] = useState();
  // const [courses, setCourses] = useState([]);

  let service = new StudentService();

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

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateStudent(student));
    navigate("/students");
  }

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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
              <input
                className="form-control my-2"
                type="text"
                id="studentMobile"
                placeholder="Enter Student Mobile"
                value={student.studentMobile}
                onChange={(e) => {
                  setStudent({
                    ...student,
                    studentMobile: e.target.value,
                  });
                }}
              />
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
            <button className="btn btn-outline-primary mt-3" onClick={handleSubmit}>Update Student</button>
            <Link className="btn btn-outline-primary mt-3 ml-3" to={'/students'}>Cancel</Link>
          </form>
        </div>
      </div>
    );
  }
}

