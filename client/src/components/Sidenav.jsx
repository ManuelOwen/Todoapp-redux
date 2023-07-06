import "./sidenav.css";
import { FaUserTie } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import { TfiViewListAlt } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { addUI } from "../redux/uiSlice";

export default function Sidenav() {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addUI("add"));
  };
  const handleView = () => {
    dispatch(addUI("view"));
  };
  const handleProfile = () => {
    dispatch(addUI("profile"));
  };
  return (
    <div className="sidenav">
      <div className="sidenav_wrapper">
        <div className="sidenav_title" onClick={handleProfile}>
          <FaUserTie className="icon" /> Profile
        </div>
      </div>
      <div className="sidenav_wrapper">
        <div className="sidenav_item" onClick={handleAdd}>
          <AiFillFileAdd className="icon2" />
          Add Todo
        </div>
        <div className="sidenav_item" onClick={handleView}>
          <TfiViewListAlt className="icon2" />
          View Todo
        </div>
      </div>
    </div>
  );
}
