import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import SubjectService from "../../service/SubjectService";
import Subject from "../../model/Subject";
import { Link } from "react-router-dom";
import { addSubject } from "../../redux/subject/subjectActions";
import { connect } from "react-redux";

function AddSubject(props) {
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
    } else if (typeof state.subject.subjectName.trim() !== "undefined") {
      if (!state.subject.subjectName.trim().match(/^[a-z ,.'-]+$/i)) {
        isValid = false;

        subNameErr.subNameRequired = "Enter Proper Subject Name";
      }
    }

    setSubjectIdErr(subIdErr);
    setSubjectNameErr(subNameErr);

    return isValid;
  };

  //react hook similar to component did mount in class component

  function handleClick(e) {
    e.preventDefault();
    let isValid = formValidation();
    if (!isValid) {
      return false;
    } else {
      props.addSubject(state.subject);
      navigate("/subjects");
    }
  }
  return (
    <div className="add">
      <div>
        <form className="addForm">
          <div className="addInput">
            <div className="label-div">
              <label>Enter Subject Id</label>
            </div>
            <input
              className="form-control"
              type="text"
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
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
            {Object.keys(subIdErr).map((key) => {
              return (
                <p className="error-message" style={{ color: "red" }}>
                  {subIdErr[key]}
                </p>
              );
            })}
          </div>
          <div className="addInput">
            <div className="label-div">
              <label>Enter Subject Name</label>
            </div>
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
              return (
                <p className="error-message" key={key} style={{ color: "red" }}>
                  {subNameErr[key]}
                </p>
              );
            })}
          </div>

          {/* <button
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
          
          </button> */}
          <button
            className="btn btn-outline-success mt-3 btn-custom"
            onClick={handleClick}
          >
            Add Subject
          </button>
          <Link
            className="btn btn-outline-danger mt-3 ml-3 btn-custom"
            to="/subjects"
          >
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    //triger action

    addSubject: (sub) => {
      dispatch(addSubject(sub));
    },
  };
};
export default connect(null, mapDispatchToProps)(AddSubject);
