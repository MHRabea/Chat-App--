import React, { useContext, useState, useEffect } from "react";
import Messege from "./messege";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Messeges = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);


  useEffect(() => {

    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };

  }, [data.chatId]);

  return (
    <div className="messeges">
      {messages?.map((m) => (
        <Messege message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messeges;
