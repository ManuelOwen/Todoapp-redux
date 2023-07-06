import "./mainnav.css";
import Profile from "./Profile";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux";

export default function Mainnav() {
  const ui = useSelector((state) => state.ui.ui);
  return (
    <div className="mainnav">
      {ui == "add" ? (
        <div className="mainnav_wrapper">
          <h2>Add Todos</h2>
          <AddTodo />
        </div>
      ) : ui == "view" ? (
        <div className="mainnav_wrapper">
          <h2>View All Todos</h2>
          <TodoList />
        </div>
      ) : ui == "profile" ? (
        <div className="mainnav_wrapper">
          <h2>User Profile</h2>
          <Profile />
        </div>
      ) : null}
    </div>
  );
}
