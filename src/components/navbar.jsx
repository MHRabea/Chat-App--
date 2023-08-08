import React from "react"; 
import { signOut } from "firebase/auth";
import { auth } from "../firebase";


const Navbar = () => {
    return (
        <div className="navbar">
          <span className="logo">Chat App </span>
          <div className="user">
            <span className="span">Dakota</span>
            <img src="https://media1.popsugar-assets.com/files/thumbor/iuDz1p-hktOpi3bKXpVI4W_pO3I/0x0:3109x3109/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/09/03/858/n/1922398/71052a4d5d6ec0bf3d4e13.77197492_/i/Dakota-Johnson.jpg" alt="" />
            <button onClick={()=>signOut(auth)}>Logout</button>
          </div>

        </div>
    )
} 



export default Navbar; 

