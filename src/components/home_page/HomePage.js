import { useSelector } from "react-redux";
import "./HomePage.css"
import { useState } from "react";
import SideBar from "./side_bar/SideBar"
import Header from "./header/Header"
import Usercontent from "./user_content/Usercontent";
import ChatBox from "./chat_box/ChatBox"

function HomePage() {
    return (
      <div className="HomePage">
        <SideBar />
        <Header />
        <Usercontent />
        <ChatBox />
      </div>
    );
  }
  
  export default HomePage;