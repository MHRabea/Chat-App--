import React ,{useContext}from "react"; 
import { AuthContext } from "../context/AuthContext";


const Chats = () => {

  const {currentUser} = useContext(AuthContext);
    return (
        <div className="chats">
          <div className="userChat">
           <img src={currentUser.photoURL} alt="" />
          <div className="userInfo">
           <span>{currentUser.displayName}</span>
           <p>Hello!</p>
          </div>
         </div>
         <div className="userChat">
         <img src={currentUser.photoURL} alt="" />
          <div className="userInfo">
           <span>{currentUser.displayName}</span>
           <p>Hello!</p>
          </div>
         </div>
         <div className="userChat">
         <img src={currentUser.photoURL} alt="" />
          <div className="userInfo">
           <span>{currentUser.displayName}</span>
           <p>Hello!</p>
          </div>
         </div>
         <div className="userChat">
         <img src={currentUser.photoURL} alt="" />
          <div className="userInfo">
           <span>{currentUser.displayName}</span>
           <p>Hello!</p>
          </div>
         </div>
         <div className="userChat">
         <img src={currentUser.photoURL} alt="" />
          <div className="userInfo">
           <span>{currentUser.displayName}</span>
           <p>Hello!</p>
          </div>
         </div>
         <div className="userChat">
         <img src={currentUser.photoURL} alt="" />
          <div className="userInfo">
           <span>{currentUser.displayName}</span>
           <p>Hello!</p>
          </div>
         </div>
         <div className="userChat">
         <img src={currentUser.photoURL} alt="" />
          <div className="userInfo">
           <span>{currentUser.displayName}</span>
           <p>Hello!</p>
          </div>
         </div>
         <div className="userChat">
         <img src={currentUser.photoURL} alt="" />
          <div className="userInfo">
           <span>{currentUser.displayName}</span>
           <p>Hello!</p>
          </div>
         </div>
        
        </div>
    )
} 



export default Chats; 

