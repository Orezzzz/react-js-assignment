import "./ChatWindow.css"
import { useState } from 'react';

const ChatWindow = (props) => {
    const {activeChatUser, setActiveChatUser, activeChatUserImg} = props

    const [isChatBoxEnable, setIsChatBoxEnable] = useState(false)
    const closeWindow = () => {
        setActiveChatUser("")
    }

    const chatToggle = () => {
        setIsChatBoxEnable(!isChatBoxEnable)
    }

    return (<>
        {activeChatUser && <div className={isChatBoxEnable ? "ChatWindow-active" : "ChatWindow"}>
            <div className="ChatWindow-header" onClick={() => chatToggle()}>
                <div className="ChatWindow-header-left">
                    <img className="chat-img" src={activeChatUserImg} />
                    <p className="chat-title">{activeChatUser}</p>
                </div>
                <div className="chat-pair-icons">
                <img className={isChatBoxEnable ? "down-arrow-icon-active": "down-arrow-icon"} src={require("../../../../images/down-arrow.png")} />
                <img className="down-arrow-icon" onClick={() => closeWindow()} src={require("../../../../images/cross-icon.png")} />
                </div>
            </div>
            <div className="ChatWindow-body">
                <div className="chat-messages">
                    <p className="text">Lorem Ipsum is simply dummy text of the printing</p>
                    <p className="text-1">Lorem Ipsum</p>
                </div>
                <div className="Chat-input-elements">
                    <input className="chat-input" type="text"/>
                    <img className="down-send-icon" src={require("../../../../images/send-icon.png")} />

                </div>
            </div>
        </div>}
        </>
    )
}

export default ChatWindow