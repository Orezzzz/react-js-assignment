import "./ChatBox.css"
import { useState } from 'react';
import { useSelector } from "react-redux";
import ChatWindow from "./chat-window/ChatWindow";

const ChatBox = () => {
    const [isChatBoxEnable, setIsChatBoxEnable] = useState(false)
    const [activeChatUser, setActiveChatUser] = useState("")
    const [activeChatUserImg, setActiveChatUserImg] = useState("")


    const { allUsers } = useSelector((state) => state);

    const chatToggle = () => {
        setIsChatBoxEnable(!isChatBoxEnable)
    }

    const activeUser = (name, img) => {
        setActiveChatUser(name)
        setActiveChatUserImg(img)
    }

    return(
        <>
        <div className={isChatBoxEnable ? "ChatBox-active" : "ChatBox"}>
            <div onClick={() =>chatToggle()} className="chatBox-header">
                <div className="chatBox-header-left">
                    <img className="chat-icon" src={require("../../../images/chat-icon.png")} />
                    <p className="chat-title">Chats</p>
                </div>
                <img className={isChatBoxEnable ? "down-arrow-icon-active": "down-arrow-icon"} src={require("../../../images/down-arrow.png")} />
            </div>
            <div className="chatBox-body">
                {allUsers.users.map((item, index) => (
                        <div className="chat-user-details" key={index}  onClick={() => activeUser(item.name, item.profilepicture)}><img className="chat-profile-img" src={item.profilepicture} /><p class="chat-user-name">{item.name}</p></div>                        
                ))}
            </div>
        </div>
        <ChatWindow activeChatUser={activeChatUser} setActiveChatUser={setActiveChatUser} activeChatUserImg={activeChatUserImg}/>
        </>
    )
}

export default ChatBox;