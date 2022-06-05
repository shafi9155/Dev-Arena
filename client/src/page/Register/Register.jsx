import React from 'react'
import './Register.css'
import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';
function Register() {
  const [username,setusername]=useState("");
  const [email,setemail]=useState("");
  const [error,setError]=useState(false);
  const [password,setpassword]=useState("");
  const handleSubmit=async (e)=>{
   e.preventDefault();
   setError(false);
   try{
    const res=await axios.post("/auth/register",{
      username,
      email,
      password,
    });
   res.data && window.location.replace("/login");
   }
   catch(err){
    setError(true);
  
   }
  
   
  }
  return (
    <div className='Register'>
  
    <form className="registerform" onSubmit={handleSubmit}>
    <span className="registerTitle">Register</span>
    <label >Username</label>
    <input type="text" name="" id="registerInput" placeholder='Username' onChange={(e)=>
      setusername(e.target.value)
    }/>
    
      <label > Email</label>
      <input type="email" name="" id="registerInput" placeholder='Enter your email...'onChange={(e)=>
      setemail(e.target.value)
    }/>
      <label >Password</label>
      <input type="password" name="" id="registerInput" placeholder='Enter your password...'onChange={(e)=>
      setpassword(e.target.value)
    }/>
      <button className="registerbutton" type='submit'>Register</button>
    </form>
    <button className="registerloginbutton"><Link to="/login" >LOGIN</Link></button>
    {error && <span>Something went wrong</span>}
    </div>
  )
}

export default Register