import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSubject, fetchSubjects } from "../../redux/subject/subjectActions";
function SubjectHome({ subjectsData, fetchSubjects, deleteSub }) {//bcm prop of comp

    useEffect(() => {
        fetchSubjects();
    }, []);

    return subjectsData.loading ? (
        <h2>Loading</h2>
    ) : subjectsData.error ? (
        <h2>{subjectsData.error}</h2>
    ) : (
        <div className="py-4">
            <table className="table border shadow">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Subject Id</th>
                        <th scope="col">Subject Name</th>
                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {subjectsData.subjects.map((subject, index) => (
                        <tr key={index}>
                            <td>{subject.subjectId}</td>
                            <td>{subject.subjectName}</td>
                            
                            <td>
                                <Link
                                    className="btn btn-outline-primary mr-2"
                                    to={`/subjects/update/${subject.subjectId}`}
                                >
                                    Modify
                                </Link>
                                <button
                                    className="btn btn-outline-primary mr-2"
                                    onClick={() => deleteSub(subject.subjectId)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}
const mapStateToProps = (state) => {// redux state
    return {
        subjectsData: state.subjects,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSubjects: () => { dispatch(fetchSubjects()) },
        deleteSub: (subId) => { dispatch(deleteSubject(subId)) },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SubjectHome);

