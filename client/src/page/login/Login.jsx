import React,{useRef,useContext} from 'react'
import './Login.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
function Login() {
  const userRef=useRef();
  const passwordRef=useRef();
  const {user,dispatch,isFetching}=useContext(Context);
  
  const handleSubmit= async(e)=>{
   e.preventDefault();
   dispatch({type:"LOGIN_START"});
   try{
const res= await axios.post("/auth/login",{
username:userRef.current.value,
password:passwordRef.current.value,
});
dispatch({type:"LOGIN_SUCCESS",payload:res.data});
   }
   catch(err){
    dispatch({type:"LOGIN_FAILURE"});
   }
   
  }
 console.log(user);
  return (
    <div className='Login'>
 
    <form className="loginform"  onSubmit={handleSubmit} >
    <span className="loginTitle">Login</span>
      <label >Username</label>
      <input type="text" name="" id="loginInput" placeholder='Enter your username...'
        ref={userRef}
      />
      <label >Password</label>
      <input type="password" name="" id="loginInput" placeholder='Enter your password...'
              ref={passwordRef}
      />
      <button className="loginbutton" type='submit' disabled={isFetching} >Login</button>
    </form>
    <button className="loginregisterbutton"><Link to="/register" >REGISTER</Link></button>
    </div>
  )
}

export default Login