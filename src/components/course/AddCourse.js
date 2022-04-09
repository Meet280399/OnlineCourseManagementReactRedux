import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Course from '../../model/Course';
import CourseService from '../../service/CourseService';
//import {Link} from "react-router-dom";

function AddCourse() {
    const navigate = useNavigate();
    let service = new CourseService();
    const [state, setState] = useState({ course: new Course() });
  return (
    <div>
        <div>
            <form>
                <div>
                    <input className="form-control" type="text" placeholder="courseId"
                        value={state.course.courseId}
                        onChange={(u) => {
                            setState({
                                course: {
                                   ...state.course,
                                   courseId: u.target.value 
                                }
                            })
                        }}
                    />
                    <br></br>
                </div>
                <div>
                    <input className="form-control my-2" type="text" placeholder="CourseName"
                        value={state.course.courseName}
                        onChange={(u) => setState({
                            course: {
                                ...state.course,
                                courseName: u.target.value
                            }
                        })}
                    />
                     <br></br>
                </div>
                <div>
                    <input className="form-control" type="text" placeholder="courseDuration"
                        value={state.course.courseDuration}
                        onChange={(u) => setState({
                            course: {
                                ...state.course,
                                courseDuration: u.target.value
                            }
                        })}
                    />
                    <br></br>
                </div>
                <button
            className="btn btn-outline-primary mt-3"
            onClick={(e) => {
              e.preventDefault();
              service
                .addCourse(state.course)
                .then((result) => {
                  alert("Course is added in database. ");
                  navigate("/courses");
                })
                .catch((error2) => {
                  alert(error2);
                });
            }}
          >
            Add Course
          </button>
          <button className="btn btn-outline-primary mt-3 ml-3" to="/courses">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCourse