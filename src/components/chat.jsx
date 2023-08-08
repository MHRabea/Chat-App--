import React from "react"; 
import Call from "../imgs/call2.png";
import AddContact from "../imgs/add2.png";
import More from "../imgs/more3.png";
import Messeges from "./messeges";
import Input from "./input";






const Chat = () => {
    return (
        <div className="chat">
        <div className="chatInfo">
          <span> Elle </span>
          <div className="chatIcons">
          <img src={AddContact} alt="Add contact" />
            <img src={Call} alt="call" />
            <img src={More} alt="more" />
          </div>
        </div>
        <Messeges  />
        <Input  />
        </div>
    )
} 



export default Chat; 

