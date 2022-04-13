import SubjectService from "../../service/SubjectService.js"
import {
    FETCH_SUBJECTS_REQUEST,
    FETCH_SUBJECTS_SUCCESS,
    FETCH_SUBJECTS_FAILURE,
    DELETE_SUBJECT_REQUEST,
    UPDATE_SUBJECT_REQUEST,
    ADD_SUBJECT_REQUEST,
    SEARCH_SUBJECTS_REQUEST
} from "./subjectTypes.js";

export const fetchSubjectsRequest = () => {
    return {
        type: FETCH_SUBJECTS_REQUEST,
    };
};
export const fetchSubjectsSuccess = (subjects) => {
    return {
        type: FETCH_SUBJECTS_SUCCESS,
        payload: subjects //data from database
    };
};
export const fetchSubjectsFailure = (error) => {
    return {
        type: FETCH_SUBJECTS_FAILURE,
        payload: error,
    };
};
export const deleteSubjectRequest = (subId) => {
    return {
        type: DELETE_SUBJECT_REQUEST,
        payload: subId
    };
};
export const updateSubjectRequest = (sub) => {
    return {
        type: UPDATE_SUBJECT_REQUEST,
        payload: sub, //data from database
    };
};
export const addSubjectRequest = (sub) => {
    return {
        type: ADD_SUBJECT_REQUEST,
        payload: sub, //data from database
    };
};
export const searchSubject = (subId) => {
    return {
        type: SEARCH_SUBJECTS_REQUEST,
        payload: subId
    };
};

//get Employees
export const fetchSubjects = () => {
    return (dispatch) => {
        let service = new SubjectService();
        service.getAllSubjects()
            .then((response) => {
                const subjects = response.data;
                dispatch(fetchSubjectsSuccess(subjects));//take action as parameter,reudcer is triggered
            })
            .catch((error) => {
                dispatch(fetchSubjectsFailure(error.message));
            });
    };
};

export const deleteSubject = (subId) => {
    
    return (dispatch) => {
        let service = new SubjectService();
        service.deleteSubjectById(subId)
            .then(() => {
                dispatch(deleteSubjectRequest(subId));
                        service.getAllSubjects()
                            .then((response) => {
                                const subjects = response.data;
                                dispatch(fetchSubjectsSuccess(subjects));//take action as parameter,reudcer is triggered
                            })
                            .catch((error) => {
                                dispatch(fetchSubjectsFailure(error.message));
                            });
            })
            .catch((error) => {
                dispatch(fetchSubjectsFailure(error.message));
            });
    };

};

export const updateSubject = (sub) => {
    return (dispatch) => {
        let service = new SubjectService();
        service.updateSubject(sub)
            .then((response) => {
                let subject = response.data;
                dispatch(updateSubjectRequest(sub));//take action as parameter,reudcer is triggered
            })
            .catch((error) => {
                // dispatch(fetchSubjectsFailure(error.message));
            });
    };
};

//Adding Subject
export const addSubject = (sub) => {
    return (dispatch) => {
        let service = new SubjectService();
        service.addSubject(sub)
            .then((response) => {
                const subject = response.data;
                dispatch(addSubjectRequest(subject));//take action as parameter,reudcer is triggered
            })
            .catch((error) => {
                // dispatch(fetchSubjectsFailure(error.message));
            });
    };
};


