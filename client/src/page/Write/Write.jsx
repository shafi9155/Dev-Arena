import React,{useState,useContext} from 'react'
import './Write.css'
import axios from 'axios';
import { Context } from '../../Context/Context';
function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className='Write'>
     {file && (
        <img className="writeimg" src={URL.createObjectURL(file)} alt="" />
      )}
   
        <form className='Writeform' onSubmit={handleSubmit}>
        <div className="writeformgroup">
        <label htmlFor="fileinput">
        <i className=" writeicon fa-solid fa-plus"></i>
        </label>
            <input type='file' id='fileinput' style={{display:"none"}}  onChange={(e) => setFile(e.target.files[0])}/>
         <input type="text" placeholder="Title" className='writeinput' autoFocus={true}  onChange={e=>setTitle(e.target.value)} /> 
         </div>  
         <div className="writeformgroup">
             <textarea  type="text" className='writeinput writetext' placeholder='Write here'    onChange={e=>setDesc(e.target.value)}></textarea>
         </div>
         <button className="writesubmit">Publish</button>   
         </form>
    </div>
  )
}

export default Write