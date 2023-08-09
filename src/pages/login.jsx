import React , {useState} from  "react"; 
import {useNavigate, Link} from "react-router-dom";
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";


const Login= () => {
  const[ err ,setErr] = useState(false);
  const navigate =useNavigate()
   const handleSubmit = async (event)=>{
    event.preventDefault()
    const email = event.target[0].value;
    const password = event.target[1].value;

    try{
      await signInWithEmailAndPassword(auth,email,password);
      navigate("/")

    } catch(err){
    setErr(true);
  }
  };
    return (
        <div className="formContainer">
            <div className="formWrapper"> 
            <span className="logo">Welcome to Chat!</span>
            <span className="title">login</span>
              <form onSubmit={handleSubmit} >
                <input type="email" placeholder="Email" autoComplete="off"/>
                <input type="password" placeholder="Password" autoComplete="off"/>
                <button>Sign in</button>
                {err && <span>Something went wrong</span> }

              </form>
            <p>if you don't have an account?  <Link to="/register">Sign up</Link></p>

            </div>
        </div>
    ) 
}

export default Login; 

