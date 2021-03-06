import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateSubject } from "../../redux/subject/subjectActions.js";
import SubjectService from "../../service/SubjectService.js";
// import Subject from "./../../model/subject";

export default function UpdateSubject() {
  //useSelector A hook to access the redux store's state.
  const subjects = useSelector((state) => state.subjects.subjects);
  const dispatch = useDispatch();
  const { subId } = useParams();
  const [subject, setSubject] = useState();

  const[subNameErr, setSubjectNameErr] = useState("");
  
//   const [error, setError] = useState({
//       idError: "",
//       nameError: "",
//   })
//   const navigate = useNavigate();

//   const service = new SubjectService();

const formValidation = () => {
    let isValid = true;
    const subIdErr = {};
    const subNameErr = {};
if (subject.subjectName.length <= 0){
    subNameErr.subNameRequired = "Subject Name is required";
    isValid = false;
} else if (typeof subject.subjectName !== "undefined") {
    if (!subject.subjectName.match(/^[a-z ,.'-]+?$/i)) {
        isValid = false;
        subNameErr.subNameRequired =" Enter proper Subject Name";
    }
}
setSubjectNameErr(subNameErr);
return isValid;
};


//   useEffect(() => {
//     setSubject(subjects.find(e => e.subjectId == subId));
    
// }, [subId])

// return (
//   (subject) ?
//       createForm(subject) :
//       <div>Loading</div>
// )

function handleSubmit(e) {
  e.preventDefault();
  let isValid = formValidation();
  if (!isValid){
      return false;
  } else {
      dispatch(updateSubject(subject));
      navigate("/subjects");
}
}

const navigate = useNavigate();

useEffect(() => {
      setSubject(subjects.find((e) => e.subjectId == subId));
        
     }, [subId]);

     return subject ? createForm(subject) : <div>Loading</div>;


function createForm(subject) {
  return (
      <div className="row">
          <div className="col-md-6 mx-auto">
              <h2>Update subject</h2>
              <form>
                  <div>
                      <input className="form-control" type="text"  id="subjectId" placeholder="Enter Subject Id"
                          value={subject.subjectId}
                          readOnly={true}
                      />
                  </div>
                  <br></br>
                  <div>
                      {/* <div className="alert-danger">{error.nameError}</div> */}
                      <input className="form-control my-2" type="text" id="subjectName" placeholder="Enter Subject Name"
                          value={subject.subjectName}
                          onChange={(e) => setSubject({ ...subject, subjectName: e.target.value, })
                        }
                      />
                      {Object.keys(subNameErr).map((key) => {
                          return (
                              <p
                              subject={subject}
                              key={subject.subjectName}
                              className="error-message"
                              style={{ color: "red" }}
                              >
                                  {subNameErr[key]}
                              </p>
                          );
                      })}
                  </div>
                  <br></br>
                  <button className="btn btn-outline-primary mt-3" onClick={handleSubmit}>Update Subject</button>
                  <Link className="btn btn-outline-primary mt-3 ml-3" to={"/subjects"}>Cancel</Link>
              </form>
          </div>
      </div>
  );
}
}


// function UpdateSubject() {
//   const [state, setState] = useState({ subject: new Subject() });

//   let service = new SubjectService();

//   const { subId } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     service
//       .findSubjectById(subId)
//       .then((result) => {
//         alert("inside updated" + JSON.stringify(result.data));
//         setState({ subject: result.data });
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   }, []);

//   return (
//     <div>
//       <form>
//         <div>
//           <input
//             className="form-control"
//             type="text"
//             id="subjectId"
//             placeholder="Enter Subject Id"
//             value={state.subject.subjectId}
//             readOnly={true}
//           />
//         </div>
//         <div>
//           <input
//             className="form-control my-2"
//             type="text"
//             id="subjectName"
//             placeholder="Enter Subject Name"
//             value={state.subject.subjectName}
//             onChange={(e) => {
//               setState({
//                 subject: {
//                   ...state.subject,
//                   subjectName: e.target.value,
//                 },
//               });
//             }}
//           />
//         </div>
        
//         <button
//           className="btn btn-outline-primary mt-3"
//           onClick={(e) => {
//             e.preventDefault();
//             service
//               .updateSubject(state.subject)
//               .then(() => {
//                 alert("Subject record is Updated. ");
//                 setState({ subject: new Subject() });
//                 navigate("/subjects");
//               })
//               .catch((er) => {
//                 alert(er);
//               });
//           }}
//         >
//           Update Subject
//         </button>
//         <Link className="btn btn-outline-primary mt-3 ml-3" to="/subjects">
//           Cancel
//         </Link>
//       </form>
//     </div>
//   );
// }

// export default UpdateSubject;