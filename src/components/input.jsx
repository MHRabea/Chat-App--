import React from "react"; 
import Img from "../imgs/AddAvatar.png";
import Attach from "../imgs/attach.png";


const Input = () => {
    return (
        <div className="input">
        <input type="text" placeholder="write a messege..." />
        <div className="send">
            <img className="inputImg" src={Attach} alt="" />
            <input type="file" style ={{display:"none"}} id = "attach"/>
            <label htmlFor="attach">
                <img className="inputImg" src={Img} alt="" />
            </label>
            <button>Send</button>
        </div>
        </div>
    )
} 



export default Input; 

