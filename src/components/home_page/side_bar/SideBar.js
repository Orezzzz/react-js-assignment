import { useSelector, useDispatch } from "react-redux";
import "./SideBar.css"
import { useState } from "react";
import { selectedSection } from './../../../redux/actions/usersActions';

const SideBar = () => {
  const dispatch = useDispatch();

  const [isProfileEnable, setIsProfileEnable] = useState("active")
  const [isPostEnable, setIsPostEnable] = useState("")
  const [isGalleryEnable, setIsGalleryEnable] = useState("")
  const [isTodoEnable, setIsTodoEnable] = useState("")

  const onCLickSideBar = (section) => {
    dispatch(selectedSection(section))
    if(section === "Profile"){
      if(isProfileEnable === ""){
        setIsProfileEnable("active")
        setIsPostEnable("")
        setIsGalleryEnable("")
        setIsTodoEnable("")
      }
    }
    else if(section === "Post"){
      if(isPostEnable === ""){
        setIsPostEnable("active")
        setIsProfileEnable("")
        setIsGalleryEnable("")
        setIsTodoEnable("")
      }
    }
    else if(section === "Gallery"){
      if(isGalleryEnable === ""){
        setIsGalleryEnable("active")
        setIsProfileEnable("")
        setIsPostEnable("")
        setIsTodoEnable("")
      }
    }
    else if(section === "ToDo"){
      if(isTodoEnable === ""){
        setIsTodoEnable("active")
        setIsProfileEnable("")
        setIsPostEnable("")
        setIsGalleryEnable("")
      }
    }
  }
    return (
        <div className="side-bars">
          <a onClick={()=>onCLickSideBar("Profile")} className={`side-bars-links-${isProfileEnable}`} href="#">
            <span>Profile</span>
            <div className={`side-arrow-1-${isProfileEnable}`}><img className={`side-arrow-icon-${isProfileEnable}`} src={require("../../../images/next.png")} /></div>
            <div className={`side-arrow-semi-arrow-1-${isProfileEnable}`}></div>
            <div className={`side-arrow-small-circle-1-1-${isProfileEnable}`}></div> 
            <div className={`side-arrow-small-circle-2-1-${isProfileEnable}`}></div> 
          </a>
          <a onClick={()=>onCLickSideBar("Post")} className={`side-bars-links-${isPostEnable}`} href="#">
            <span>Post</span>
            <div className={`side-arrow-2-${isPostEnable}`}><img className={`side-arrow-icon-${isPostEnable}`} src={require("../../../images/next.png")} /></div>
            <div className={`side-arrow-semi-arrow-2-${isPostEnable}`}></div>
            <div className={`side-arrow-small-circle-1-2-${isPostEnable}`}></div> 
            <div className={`side-arrow-small-circle-2-2-${isPostEnable}`}></div> 
          </a>
          <a onClick={()=>onCLickSideBar("Gallery")} className={`side-bars-links-${isGalleryEnable}`} href="#">
            <span>Gallery</span>
            <div className={`side-arrow-3-${isGalleryEnable}`}><img className={`side-arrow-icon-${isGalleryEnable}`} src={require("../../../images/next.png")} /></div>
            <div className={`side-arrow-semi-arrow-3-${isGalleryEnable}`}></div>
            <div className={`side-arrow-small-circle-1-3-${isGalleryEnable}`}></div> 
            <div className={`side-arrow-small-circle-2-3-${isGalleryEnable}`}></div> 
          </a>
          <a onClick={()=>onCLickSideBar("ToDo")} className={`side-bars-links-${isTodoEnable}`} href="#">
            <span>ToDo</span>
            <div className={`side-arrow-4-${isTodoEnable}`}><img className={`side-arrow-icon-${isTodoEnable}`} src={require("../../../images/next.png")} /></div>
            <div className={`side-arrow-semi-arrow-4-${isTodoEnable}`}></div>
            <div className={`side-arrow-small-circle-1-4-${isTodoEnable}`}></div> 
            <div className={`side-arrow-small-circle-2-4-${isTodoEnable}`}></div> 
          </a>
        </div>
    )
}

export default SideBar