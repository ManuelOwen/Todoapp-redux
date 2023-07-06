import "./profile.css";
import userAvator from "../assets/userAvator.webp";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <div className="profile">
      <div className="userAvator">
        <img className="userAvator-img" src={userAvator} alt="no_pic" />
      </div>
      <div className="user-Details">
        <h2>Username</h2>
        <p>{user?.username}</p>
        <h2>Email</h2>
        <p>{user?.email}</p>
        <h2>User-Id</h2>
        <p>{user?.id}</p>
      </div>
    </div>
  );
}
