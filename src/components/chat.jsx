import React, { useContext } from "react";
import Call from "../imgs/call2.png";
import AddContact from "../imgs/add.png";
import More from "../imgs/more.png";
import Cam from "../imgs/cam.png";
import Messeges from "./messeges";
import Input from "./input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName} </span>
        <img src={data.user?.photoURL} alt="" />
        <div className="chatIcons">
          <img src={AddContact} alt="Add contact" />
          <img src={Call} alt="call" />
          <img src={Cam} alt="videocall" />
          <img src={More} alt="more" />
        </div>
      </div>
      <Messeges />
      <Input />
    </div>
  );
};

export default Chat;
