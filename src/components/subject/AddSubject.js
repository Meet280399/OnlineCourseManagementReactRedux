import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import SubjectService from "../service/SubjectService";
import Subject from "../model/Subject";
import { Link } from "react-router-dom";
import { addSubject } from "../redux/subject/subjectActions";
import { connect } from "react-redux";

function AddSubject() {
  const navigate = useNavigate();
  let service = new SubjectService();
  const [state, setState] = useState({ subject: new Subject() });
  const [subIdErr, setSubjectIdErr] = useState("");
  const [subNameErr, setSubjectNameErr] = useState("");

  const formValidation = () => {
       
    let isValid = true;
    const subIdErr = {};
    const subNameErr = {};
   
     
     if (state.subject.subjectId.trim().length <= 0) {
      subIdErr.subIdRequired = "Subject ID is required";
      isValid = false;
  }
  if (state.subject.subjectName.trim().length <= 0) {
      subNameErr.subNameRequired = "Subject Name is required";
      isValid = false;
  }
  
  setSubjectIdErr(subIdErr);
  setSubjectNameErr(subNameErr);
  
  return isValid;
}

//react hook similar to component did mount in class component


function handleClick(e) {
  e.preventDefault();
  let isValid = formValidation()
  if (!isValid) {
      return false;
  }
  else {
      props.addSubject(state.subject);
      navigate('/subjects');

  }
}
  return (
    <div>
      <div>
        <form>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Subject Id"
              value={state.subject.subjectId}
              onChange={(e) => {
                setState({
                  subject: {
                    ...state.subject,
                    subjectId: e.target.value,
                  },
                });
              }}
            />
            <br></br>
            {Object.keys(subIdErr).map((key) => {
                            return <div style={{ color: "red" }}>{subIdErr[key]}</div>
                        })}
          </div>
          <div>
            <input
              className="form-control my-2"
              type="text"
              placeholder="Enter Subject Name"
              value={state.subject.subjectName}
              onChange={(e) => {
                setState({
                  subject: {
                    ...state.subject,
                    subjectName: e.target.value,
                  },
                });
              }}
            />
             {Object.keys(subNameErr).map((key) => {
                            return <div key={key} style={{ color: "red" }}>{subNameErr[key]}</div>
                        })}
            
          </div>
          
          
          <button
            className="btn btn-outline-primary mt-3"
            onClick={(e) => {
              e.preventDefault();
              service
                .addSubject(state.subject)
                .then((result) => {
                  alert("Subject is added in database. ");
                  navigate("/subjects");
                })
                .catch((error2) => {
                  alert(error2);
                });
            }}
          >
            Add Subject
          </button>
          <button className="btn btn-outline-primary mt-3" onClick={handleClick}>Add Subject</button>
          <Link className="btn btn-outline-primary mt-3 ml-3" to='/subjects'>Cancel</Link>  
          
        </form>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {

  return {
      //triger action

      addSubject: (sub) => { dispatch(addSubject(sub)) },

  };
};
export default connect(null, mapDispatchToProps)(AddSubject);

