import './home.css'
import axios from "axios";
import Sidebar from '../../Sidebar/Sidebar'
import Posts from '../../Posts/Posts'
import Header from '../../Header/Header'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
function Home() {
  const [posts,setPosts]=useState([]);
  const {search}=useLocation();

  useEffect(()=>{
    const fetchPosts=async()=>{
     const res=  await axios.get("posts"+search); 
        setPosts(res.data); 
    }
  fetchPosts();
 
  },[search]);
  return (
    <div>
   <Header/>
    <div className="home">
    <Posts posts={posts} />
    <Sidebar/>
      
    </div>
  </div>
  )
}

export default Home