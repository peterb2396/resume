import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import React, {useState} from 'react';
import raw from "./host.txt"
import { BrowserRouter } from "react-router-dom";

import MyRouter from './MyRouter.jsx'

const Main = () => {
  const [host, setHost] = useState("")
  

  // get host from text file
fetch(raw)
 .then(r => r.text())
 .then(text => {
  var copy = (' ' + text).slice(1);
  setHost(copy)
});

  // store username and id locally.. username for display, id for auth
  function setToken(username, id) {
    // Store the username as a token to display and allow logged-in-features
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('id', id);
  }
  
  // Get token: Returns the username token (not the id)
  function getToken() {
    return sessionStorage.getItem('username');
  }


   
  if (host)
    // If linking account, don't include header or footer.
    return (
      <>
    {/* Navbar section */}
    
    <BrowserRouter>
    <div style={{ backgroundColor: '#f0f0f0' }} >
      <MyRouter host = {host} getToken = {getToken} setToken = {setToken}></MyRouter>
      </div>
    </BrowserRouter>
    
    {(
    <div id = 'socials'>
      <a class = 'social' href="https://github.com/peterb2396" target="_blank" rel="noreferrer">
        <img src="github.png"  width = "30px"alt = "github"></img>
      </a>
      <a class = 'social' href="https://www.instagram.com/built.by.peter/" target="_blank" rel="noreferrer">
        <img src="insta.png"  width = "30px"alt = "instagram"></img>
      </a>
    </div>)}
    
    </>
  

    )

}

export default Main;
