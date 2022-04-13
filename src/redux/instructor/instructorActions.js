
import InstructorService from "../../service/InstructorService.js";
import {
    FETCH_INSTRUCTORS_REQUEST,
    FETCH_INSTRUCTORS_SUCCESS,
    FETCH_INSTRUCTORS_FAILURE,
    DELETE_INSTRUCTOR_REQUEST,
    UPDATE_INSTRUCTOR_REQUEST,
    ADD_INSTRUCTOR_REQUEST,
    SEARCH_INSTRUCTORS_REQUEST
} from "./instructorTypes.js";

export const fetchInstructorsRequest = () => {
    return {
        type: FETCH_INSTRUCTORS_REQUEST,
    };
};
export const fetchInstructorsSuccess = (instructors) => {
    return {
        type: FETCH_INSTRUCTORS_SUCCESS,
        payload: instructors //data from database
    };
};
export const fetchInstructorsFailure = (error) => {
    return {
        type: FETCH_INSTRUCTORS_FAILURE,
        payload: error,
    };
};
export const deleteInstructorRequest = (instId) => {
    return {
        type: DELETE_INSTRUCTOR_REQUEST,
        payload: instId
    };
};
export const updateInstructorRequest = (inst) => {
    return {
        type: UPDATE_INSTRUCTOR_REQUEST,
        payload: inst, //data from database
    };
};
export const addInstructorRequest = (inst) => {
    return {
        type: ADD_INSTRUCTOR_REQUEST,
        payload: inst, //data from database
    };
};
export const searchInstructor = (instId) => {
    return {
        type: SEARCH_INSTRUCTORS_REQUEST,
        payload: instId
    };
};

//get Instructors
export const fetchInstructors = () => {
    return (dispatch) => {
        let service = new InstructorService();
        service.getAllInstructors()
            .then((response) => {
                const instructors = response.data;
                dispatch(fetchInstructorsSuccess(instructors));//take action as parameter,reducer is triggered
            })
            .catch((error) => {
                dispatch(fetchInstructorsFailure(error.message));
            });
    };
};

export const deleteInstructor = (instId) => {
    
    return (dispatch) => {
        let service = new InstructorService();
        service.deleteInstructorById(instId)
            .then(() => {
                dispatch(deleteInstructorRequest(instId));
                        service.getAllInstructors()
                            .then((response) => {
                                const instructors = response.data;
                                dispatch(fetchInstructorsSuccess(instructors));//take action as parameter,reudcer is triggered
                            })
                            .catch((error) => {
                                dispatch(fetchInstructorsFailure(error.message));
                            });
            })
            .catch((error) => {
                dispatch(fetchInstructorsFailure(error.message));
            });
    };

};

export const updateInstructor = (inst) => {
    return (dispatch) => {
        let service = new InstructorService();
        service.updateInstructor(inst)
            .then((response) => {
                let instructor = response.data;
                dispatch(updateInstructorRequest(inst));//take action as parameter,reudcer is triggered
            })
            .catch((error) => {
                // dispatch(fetchEmployeesFailure(error.message));
            });
    };
};

//Adding Instructor
export const addInstructor = (inst) => {
    return (dispatch) => {
        let service = new InstructorService();
        service.addInstructor(inst)
            .then((response) => {
                const instructor = response.data;
                dispatch(addInstructorRequest(instructor));//take action as parameter,reudcer is triggered
            })
            .catch((error) => {
                // dispatch(fetchInstructorsFailure(error.message));
            });
    };
};


