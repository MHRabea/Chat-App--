import React, { useContext, useState } from "react";
import Img from "../imgs/AddAvatar.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";

const Input = () => {

    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        if (img) {

            const storageRef = ref(storage, uuid());
            await uploadBytesResumable(storageRef, img).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    await updateDoc(doc(db, "chats", data.chatId), {
                        messages: arrayUnion({
                            id: uuid(),
                            text,
                            senderId: currentUser.uid,
                            date: Timestamp.now(),
                            img: downloadURL
                        })
                    });
                });
            }
            );
        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now()

                })
            });
        }
        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text
            },
            [data.chatId + ".date"]: serverTimestamp()
        });
        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text
            },
            [data.chatId + ".date"]: serverTimestamp()
        });

        setText("");
        setImg(null);
    };

    return (
        <div className="input">
            <input type="text" placeholder="write a messege..." onChange={e => setText(e.target.value)} value={text} />
            <div className="send">

                <input type="file" style={{ display: "none" }} id="attach" onChange={e => setImg(e.target.files[0])} />
                <label htmlFor="attach">
                    <img className="inputImg" src={Img} alt="" />
                </label>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};



export default Input;

