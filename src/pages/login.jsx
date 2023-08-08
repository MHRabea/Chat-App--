import React from  "react"; 



const Login= () => {
    return (
        <div className="formContainer">
            <div className="formWrapper"> 
            <span className="logo">Welcome to Chat!</span>
            <span className="title">login</span>
              <form >
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password" />
                <button>Sign in</button>
              </form>
            <p>if you don't have an account?  Sign up </p>
            </div>
        </div>
    ) 
}

export default Login; 

