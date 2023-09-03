import "./Header.css"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectedUser } from "../../../redux/actions/usersActions" 
import { useState } from 'react';

const Header = () => {

    const [isprofileClicked, setIsprofileClicked]=useState("")

    const { sectionSelected, allUsers } = useSelector((state) => state);
    const { selectedUserDetail } = useSelector((state) => state.selectedUserDetail);

    const dispatch = useDispatch();

    const selectUser = (item) => {
        dispatch(selectedUser(item))
    }

    const profileClicked = () => {
        if(isprofileClicked){
            setIsprofileClicked("")
        }
        else{
            setIsprofileClicked("active")
        }
    }

    return (<div>
        <div className="Header">
          <div>{sectionSelected.section}</div>
          <div className="header-right-section" onClick={()=> profileClicked()}><img className="profile-image" src={selectedUserDetail.profilepicture}/><p>{selectedUserDetail.username}</p></div>
        </div>
          <div className={isprofileClicked=="active"?"all-users":"all-users-inactive"}>
          <div className="users-container-home">
            <div className="users-container-header-home">
            <img className="hearder-profile-picture" src={selectedUserDetail.profilepicture} />
              <p className="header-name-home">{selectedUserDetail.name}</p>
              <p className="header-email-home">{selectedUserDetail.email}</p>
            </div>
            <div className="username-container-home"> 
              {allUsers.users.map((item, index) => (
              <Link className="username-underline" to="/home" >
                <div className="username-home" key={index} onClick={()=>{selectUser(item)}}><img className="user-profile-img-home" src={item.profilepicture}/><>{item.name}</></div>
              </Link>
              ))}
            </div>
            <button><Link to="/">Sign out</Link></button>
          </div>
        </div>
        </div>
          
    )
}

export default Header