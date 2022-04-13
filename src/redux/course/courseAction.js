import CourseService from "../../service/CourseService.js";
import {
    FETCH_COURSES_REQUEST,
    FETCH_COURSES_SUCCESS,
    FETCH_COURSES_FAILURE,
    DELETE_COURSE_REQUEST,
    UPDATE_COURSE_REQUEST,
    ADD_COURSE_REQUEST,
    SEARCH_COURSES_REQUEST
} from "./courseTypes.js";

export const fetchCoursesRequest = () => {
    return {
        type: FETCH_COURSES_REQUEST,
    };
};
export const fetchCoursesSuccess = (courses) => {
    return {
        type: FETCH_COURSES_SUCCESS,
        payload: courses
    };
};
export const fetchCoursesFailure = (error) => {
    return {
        type: FETCH_COURSES_FAILURE,
        payload: error,
    };
};
export const deleteCourseRequest = (courId) => {
    return {
        type: DELETE_COURSE_REQUEST,
        payload: courId
    };
};
export const updateCourseRequest = (cour) => {
    return {
        type: UPDATE_COURSE_REQUEST,
        payload: cour, 
    };
};
export const addCourseRequest = (cour) => {
    return {
        type: ADD_COURSE_REQUEST,
        payload: cour, 
    };
};
export const searchCourse = (courId) => {
    return {
        type: SEARCH_COURSES_REQUEST,
        payload: courId
    };
};


//get Courses
export const fetchCourses = () => {
    return (dispatch) => {
        let service = new CourseService();
        service.getAllCourses()
            .then((response) => {
                const courses = response.data;
                dispatch(fetchCoursesSuccess(courses));
            })
            .catch((error) => {
                dispatch(fetchCoursesFailure(error.message));
            });
    };
};

export const deleteCourse = (courId) => {
    
    return (dispatch) => {
        let service = new CourseService();
        service.deleteCourseById(courId)
            .then(() => {
                dispatch(deleteCourseRequest(courId));
                        service.getAllCourses()
                            .then((response) => {
                                const courses = response.data;
                                dispatch(fetchCoursesSuccess(courses));//take action as parameter,reudcer is triggered
                            })
                            .catch((error) => {
                                dispatch(fetchCoursesFailure(error.message));
                            });
            })
            .catch((error) => {
                dispatch(fetchCoursesFailure(error.message));
            });
    };

};

export const updateCourse = (cour) => {
    return (dispatch) => {
        let service = new CourseService();
        service.updateCourse(cour)
            .then((response) => {
                let course = response.data;
                dispatch(updateCourseRequest(cour));//take action as parameter,reudcer is triggered
            })
            .catch((error) => {
                // dispatch(fetchCoursesFailure(error.message));
            });
    };
};

//Adding Course
export const addCourse = (cour) => {
    return (dispatch) => {
        let service = new CourseService();
        service.addCourse(cour)
            .then((response) => {
                const course = response.data;
                dispatch(addCourseRequest(course));//take action as parameter,reudcer is triggered
            })
            .catch((error) => {
                // dispatch(fetchCoursesFailure(error.message));
            });
    };
};

