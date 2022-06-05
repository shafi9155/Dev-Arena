import { Link } from 'react-router-dom';
import './Topbar.css';
import { useContext } from 'react';
import { Context } from '../Context/Context';
function Topbar() {
  
  const { user,dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const handleLogout=()=>{
   dispatch({type:"LOGOUT"})
 }
  return (
    <div className='top'>

    <div className="top-left">
    <i className=" topicon fa-brands fa-facebook-square"></i>
    <i className=" topicon fa-brands fa-twitter-square"></i>
    <i className=" topicon fa-brands fa-pinterest-square"></i>
    <i className=" topicon fa-brands fa-instagram-square"></i>
    </div>
    <div className="top-centre">
        <ul className='toplist'>
            <li className="toplistitem">
              <Link to="/" style={{textDecoration:"none" ,color:"inherit"}}>HOME</Link>
            </li>
            <li className="toplistitem"> 
             <Link to="/" style={{textDecoration:"none" ,color:"inherit"}}>ABOUT</Link></li>
            <li className="toplistitem">
            <Link to="/" style={{textDecoration:"none" ,color:"inherit"}}>CONTACT</Link></li>
            <li className="toplistitem">
            <Link to="/write" style={{textDecoration:"none" ,color:"inherit"}}>WRITE</Link></li>
            <li className="toplistitem"  onClick={handleLogout} >
           
            {user&&"LOGOUT"}</li>
        </ul>
    </div>
    <div className="top-right">
    {user?
     (<Link to="/settings">
        <img className='top-img' src={PF+user.profilepic} alt=""/>
        </Link>
     ):(
       <ul className='toplist'>
        <li className='toplistitem'>
        <Link to="/login" style={{textDecoration:"none" ,color:"inherit"}}>LOGIN</Link>
        </li>
        <li className='toplistitem'>
        <Link to="/register" style={{textDecoration:"none" ,color:"inherit"}}>REGISTER</Link>
        </li>
       </ul>
     )
    }
       
        <i className=" topsearchicon fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
  )
}

export default Topbar