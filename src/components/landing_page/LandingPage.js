import { useEffect } from "react";
import "../landing_page/LandingPage.css"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, selectedUser } from "../../redux/actions/usersActions" 
import { Link } from "react-router-dom";

function LandingPage() {
  const { allUsers } = useSelector((state) => state);
  const dispatch = useDispatch();

/* ---getting the users data from here---*/
  const fetchUsers = async () => {
    const response = await axios
      .get("https://panorbit.in/api/users.json")
      .catch((err) => {
        console.log("err", err);
      });
      dispatch(setUsers(response.data)) 
  }

  useEffect(() => {
    fetchUsers();
  },[])

  /* --- end for API---*/

  const selectUser = (item) => {
    dispatch(selectedUser(item))
  }
    return (
      <div className="Landing-page">
        <svg className="wave-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(93, 54, 201)" fill-opacity="1" d="M0,32L34.3,74.7C68.6,117,137,203,206,240C274.3,277,343,267,411,229.3C480,192,549,128,617,106.7C685.7,85,754,107,823,133.3C891.4,160,960,192,1029,176C1097.1,160,1166,96,1234,74.7C1302.9,53,1371,75,1406,85.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        <svg className="wave-background-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(93, 54, 201)" fill-opacity="1" d="M0,32L34.3,74.7C68.6,117,137,203,206,240C274.3,277,343,267,411,229.3C480,192,549,128,617,106.7C685.7,85,754,107,823,133.3C891.4,160,960,192,1029,176C1097.1,160,1166,96,1234,74.7C1302.9,53,1371,75,1406,85.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        <div className="users-container">
          <div className="users-container-header">
            <p className="header-text">Select an account</p>
          </div>
          <div className="username-container"> 
            {allUsers.users.map((item, index) => (
            <Link className="username-underline" to="/home" >
              <div className="username" key={index} onClick={() => selectUser(item)}><img className="user-profile-img" src={item.profilepicture}/><>{item.name}</></div>
            </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  export default LandingPage;