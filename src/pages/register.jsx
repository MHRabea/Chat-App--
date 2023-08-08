import React, { useState } from  "react"; 
import Add from "../imgs/AddAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth ,storage,db } from "../firebase";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {doc ,setDoc} from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom"; 

const Register= () => {
  const[err,setErr] = useState(false);
  const navigate =useNavigate()
   const handleSubmit = async (event)=>{
    event.preventDefault()
    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];
  try {
    const res=  await createUserWithEmailAndPassword(auth, email, password)
    const storageRef = ref(storage, displayName);

    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on('state_changed', 
      (snapshot) => {
       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

      }, 
      (error) => {
        setErr(true); 
        },
        ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL,
            })
            await setDoc(doc(db,"users",res.user.uid),{
              uid: res.user.uid,  
              displayName,
              email,
              photoURL : downloadURL,
            });
            await setDoc(doc(db,"userChats",res.user.uid),{})
            navigate("/")
        });
      }
    );
    
  }catch(err){
    setErr(true );
  }
  


  
  }
    return (
        <div className="formContainer">
            <div className="formWrapper"> 
            <span className="logo">Welcome to Chat!</span>
            <span className="title">Register</span>
              <form  onSubmit={handleSubmit}>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password" />
                <input type="file"  id="avatarImg" style={{display:"none"}}/>
                <label htmlFor="avatarImg" > 
                   <img src={Add} className="avatarImg" alt="" />
                   <span>Choose a profile picture </span>
                </label>
                <button>Sign up</button>
                {err && <span>Something went wrong</span> }
              </form>
            <p> You already have an account?  Login</p>
            </div>
        </div>
    )
}

export default Register; 

