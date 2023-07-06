import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./todolist.css";
import UpdateForm from "./UpdateForm";

import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodos } from "../redux/todosSlice";

function TodoList() {
  const [showEditForm, setShowEditForm] = useState(false);
  const [tempTodo, setTempTodo] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDelete = async (id) => {
    dispatch(deleteTodo(id));
    dispatch(fetchTodos());
  };

  const handleToggle = (data) => {
    setTempTodo(data);
    setShowEditForm(!showEditForm);
  };

  return (
    <div className="todo_wrapper">
      {todos &&
        todos.map((todo, index) => {
          return (
            <div className="card" key={todo.id}>
              <p>{todo.description}</p>
              <AiFillDelete
                className="delIcon"
                onClick={() => handleDelete(todo.id)}
              />
              <AiFillEdit
                className="delIcon"
                onClick={() => handleToggle(todo)}
              />
              {showEditForm && (
                <UpdateForm
                  setShowEditForm={setShowEditForm}
                  todo={tempTodo}
                  getTodos={fetchTodos}
                />
              )}
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
