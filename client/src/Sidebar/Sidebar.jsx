import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

function Sidebar() {
  const [cats,setCats]=useState([]);
  useEffect(()=>{
    const getCats=async ()=>{
      const res=await axios.get("/categories")
      setCats(res.data);
    }
  getCats();
  },[])
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img  className='sidebarimg' src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg" alt=""/>
            <p className='sidebarabout'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta exercitationem voluptate aliquid temporibus minima! Facilis debitis modi, eos in nam eveniet porro voluptas neque numquam? Molestias odio asperiores eius.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarlist">
        {cats.map((c)=>(
        <Link to={`/?cat=${c.name}`}  className="link">
        <li className="sidebarlistItem">{c.name}</li>
        </Link>
         
        ))}
           
            {/* <li className="sidebarlistItem">NODE</li>
            <li className="sidebarlistItem">DSA</li>
            <li className="sidebarlistItem">PYTHON</li>
            <li className="sidebarlistItem">C++</li>
            <li className="sidebarlistItem">FLUTTER</li>
            <li className="sidebarlistItem">KOTLIN</li>
            <li className="sidebarlistItem">JAVA</li> */}
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="socialicon">
        <i className=" sidebaricon   fa-brands fa-facebook-square"></i>
    <i className=" sidebaricon fa-brands fa-twitter-square"></i>
    <i className=" sidebaricon  fa-brands fa-pinterest-square"></i>
    <i className=" sidebaricon  fa-brands fa-instagram-square"></i>
    </div>
    </div>
    </div>
  )
}

export default Sidebar