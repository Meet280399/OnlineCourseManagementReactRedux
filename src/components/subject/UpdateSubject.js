import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateSubject } from "../../redux/subject/subjectActions";
import SubjectService from "../../service/SubjectService";

function UpdateSubject() {
  const subjects = useSelector((state) => state.subjects.subjects);
  const dispatch = useDispatch();
  const [subject, setSubject] = useState();

  let service = new SubjectService();

  const { subId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setSubject(subjects.find((e) => e.subjectId == subId));
  }, [subId]);

  return subject ? createForm(subject) : <div>Loading</div>;

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateSubject(subject));
    navigate("/subjects");
  }

  function createForm(subject) {
    return (
      <div>
        <form>
          <div>
            <input
              className="form-control"
              type="text"
              id="subjectId"
              placeholder="Enter Subject Id"
              value={subject.subjectId}
              readOnly={true}
            />
          </div>
          <div>
            <input
              className="form-control my-2"
              type="text"
              id="subjectName"
              placeholder="Enter Subject Name"
              value={subject.subjectName}
              onChange={(e) => {
                setSubject({
                    ...subject,
                    subjectName: e.target.value,
                });
              }}
            />
          </div>

          <button
            className="btn btn-outline-primary mt-3"
            onClick={handleSubmit}
          >
            Update Subject
          </button>
          <Link className="btn btn-outline-primary mt-3 ml-3" to="/subjects">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

export default UpdateSubject;
