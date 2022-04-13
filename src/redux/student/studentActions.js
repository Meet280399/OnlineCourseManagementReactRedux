import StudentService from "./../../service/StudentService.js";
import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  UPDATE_STUDENT_REQUEST,
  DELETE_STUDENT_REQUEST,
  ADD_STUDENT_REQUEST,
  SEARCH_STUDENTS_REQUEST,
} from "./studentTypes.js";

export const fetchStudentsRequest = () => {
  return {
    type: FETCH_STUDENTS_REQUEST,
  };
};

export const fetchStudentsSuccess = (students) => {
  return {
    type: FETCH_STUDENTS_SUCCESS,
    payload: students, //data from database
  };
};

export const fetchStudentsFailure = (error) => {
  return {
    type: FETCH_STUDENTS_FAILURE,
    payload: error,
  };
};

export const updateStudentRequest = (stud) => {
  return {
    type: UPDATE_STUDENT_REQUEST,
    payload: stud,
  };
};

export const deleteStudentRequest = (studId) => {
  return {
    type: DELETE_STUDENT_REQUEST,
    payload: studId,
  };
};

export const addStudentRequest = (stud) => {
  return {
    type: ADD_STUDENT_REQUEST,
    payload: stud,
  };
};

export const searchStudent = (studId) => {
  return {
    type: SEARCH_STUDENTS_REQUEST,
    payload: studId,
  };
};

// get student through fetching method function
export const fetchStudents = () => {
  return (dispatch) => {
    let service = new StudentService();
    service
      .getAllStudents()
      .then((response) => {
        const students = response.data;
        dispatch(fetchStudentsSuccess(students)); //take action as a parameter, reducer is triggered
      })
      .catch((error) => {
        dispatch(fetchStudentsFailure(error.message));
      });
  };
};

export const deleteStudent = (studId) => {
  return (dispatch) => {
    let service = new StudentService();
    service
      .deleteStudentById(studId)
      .then(() => {
        dispatch(deleteStudentRequest(studId));
        service
          .getAllStudents()
          .then((response) => {
            const students = response.data;
            dispatch(fetchStudentsSuccess(students));
          })
          .catch((error) => {
            dispatch(fetchStudentsFailure(error.message));
          });
      })
      .catch((error) => {
        dispatch(fetchStudentsFailure(error.message));
      });
  };
};

export const updateStudent = (stud) => {
  return (dispatch) => {
    let service = new StudentService();
    service
      .updateStudent(stud)
      .then((response) => {
        let student = response.data;
        dispatch(updateStudentRequest(stud));
      })
      .catch((error) => {
        // dispatch(fetchStudentsFailure(error.message))
      });
  };
};

export const addStudent = (stud) => {
  return (dispatch) => {
    let service = new StudentService();
    service
      .addStudent(stud)
      .then((response) => {
        const student = response.data;
        dispatch(addStudentRequest(student));
      })
      .catch((error) => {
        // dispatch(fetchStudentsFailure(error.message))
      });
  };
};
