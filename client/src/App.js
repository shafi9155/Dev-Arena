import Topbar from "./Topbar/Topbar";
import Home from "./page/home/Home";
import Single from "./Single/Single";
import Write from "./page/Write/Write";
import Settings from "./page/Settings/Settings";
import Login from "./page/login/Login";
import Register from "./page/Register/Register";
import { useContext } from "react";
import { Context } from "./Context/Context"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const { user } = useContext(Context);
  return (
    
   <BrowserRouter>
    <Topbar/>
     <Routes>
  
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={user ? <Home/>:<Register/>}/>
    <Route path="/login" element={user?<Home/>:<Login/>}/>
    <Route path="/write" element={user?<Write/>:<Register/>}/>
    <Route path="/settings" element={user ? <Settings/>:<Register/>}/>
    <Route path="/post/:postId" element={<Single/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
