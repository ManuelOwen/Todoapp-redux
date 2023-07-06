import { useEffect, useState } from "react";
import "./updateform.css";
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/todosSlice";

const UpdateForm = ({ setShowEditForm, todo, getTodos }) => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(todo.description);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = todo?.id;
    dispatch(updateTodo({ id, description }));
    dispatch(getTodos());
  };
  return (
    <div className="updateForm">
      <form className="form">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          id="description"
        ></textarea>
        <div className="btn-wrapper">
          <button onClick={() => setShowEditForm(false)}>exit</button>
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default UpdateForm;
