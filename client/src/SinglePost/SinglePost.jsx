import axios from 'axios';
import React, {useContext, useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SinglePost.css'
import {Link } from "react-router-dom"
import { Context } from '../Context/Context';
function SinglePost() {
  const PF = "http://localhost:5000/images/";
  const location=useLocation();
  const path= location.pathname.split("/")[2];
  const [post,setpost]=useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
   useEffect(()=>{
     const getPost=async ()=>{
     const res= await axios.get("/posts/"+path);
   setpost(res.data);
   setTitle(res.data.title);
   setDesc(res.data.desc);
     }
     getPost();
   },[path]);
   const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        // username: user.username,
        data: { username: user.username },
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <div className='singlepost'>
    <div className="singlePostWrapper">
    {post.photo&&(
      <img src={PF + post.photo} alt="" className="singlepostimg"/>
    )}
    {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
    <h1 className='singlePosttitle'>
    {title} 
    {post.username === user?.username && (
    <div className="singlepostedit">
    <i className="SinglePostIcon fa-solid fa-pen-to-square"   onClick={() => setUpdateMode(true)} ></i>
    <i className="SinglePostIcon  fa-solid fa-trash"      onClick={handleDelete}></i>
    </div>)}
    </h1>
        )}
   <div className="singlePostinfo">
   <Link to={`/?user=${post.username}`} className="link">
   <span className="singlePostauthor">Author:<b>{post.username}</b></span>
   </Link>
  
  <span className="singlePostdate">Date :{new Date(post.createdAt).toDateString()}</span>
   </div>
   {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
   <p className="singlepostdesc">
      {desc}
   </p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )};
    </div>
    </div>
  );
}

export default SinglePost