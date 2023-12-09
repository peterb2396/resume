

import Welcome from './Components/Welcome.jsx'
import Upload from './Components/Upload.jsx';
import Inventory from "./Components/Inventory.jsx";
import Login from "./Components/Login.jsx";
import Account from './Components/Account.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from './Components/Nav.jsx';
import Projects from './Components/Projects.jsx';
import ContactForm from './Components/ContactForm.jsx';
import Link from './Components/Link.jsx'

const MyRouter = ({host, getToken, setToken}) => {
  const location = useLocation(); // Read current route
  const currentPath = location.pathname;
  const keywords = ['link'] // Do not show navbar for these paths
  
  function showNavbar()
  {
    return keywords.some((keyword) => !currentPath.includes(keyword.toLowerCase()));
  }
   
    // If linking account, don't include header or footer.
    return (
      <>
    {/* Navbar section */}
    
    {showNavbar() && (<Nav token = {getToken}></Nav>)}
      <Routes>
          <Route index element={<Welcome token = {getToken} host = {host}/>} />
          <Route path="inventory" element={<Inventory token = {getToken} host = {host} />} />
          <Route path="login" element={<Login setToken = {setToken} token = {getToken} host = {host}/>} />
          <Route path="account" element={<Account setToken = {setToken} token = {getToken} host = {host}/>} />
          <Route path="contact" element={<ContactForm host = {host}/>} />
          <Route path="projects" element={<Projects host = {host}/>} />
          <Route path="link/musicbox" element={<Link host = {host} token = {getToken} setToken = {setToken}/>} />
          <Route path="projects/:projectId" element={<Projects host = {host} project = {JSON.parse(sessionStorage.getItem('project'))}/>} />
          <Route path = "upload" element = {(sessionStorage.getItem('admin') === "false")? (<Welcome token = {getToken} host = {host}/>): <Upload host = {host}/>}/>
      </Routes>
    {showNavbar() &&  (
    <div id = 'socials'>
      <a class = 'social' href="https://github.com/peterb2396" target="_blank" rel="noreferrer">
        <img src="github.png"  width = "30px"alt = "github"></img>
      </a>
      <a class = 'social' href="https://www.instagram.com/built.by.peter/" target="_blank" rel="noreferrer">
        <img src="insta.png"  width = "30px"alt = "instagram"></img>
      </a>
    </div>
    )}
    
    </>
  

    )

}

export default MyRouter;