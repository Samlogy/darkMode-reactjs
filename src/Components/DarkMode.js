import React, { useState, useEffect } from "react";
import { BsMoon } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';

import "./style.css";

const DarkMode = () => {
  const getInitialMode = () => {
    const isReturningUser = "dark-mode" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark-mode"));

    if (isReturningUser) return savedMode; // if preferred color scheme is dark --> dark
    else return false;
  };

  const [darkMode, setDarkMode] = useState(getInitialMode());

  const toggleMode = () => {
   setDarkMode(!darkMode);

   if(darkMode){
     trans(); document.documentElement.setAttribute('data-theme', 'light');
   }else{
     trans(); document.documentElement.setAttribute('data-theme', 'dark');
   }
  };

  const getPreferencies = () => {
    if(darkMode){
      trans(); document.documentElement.setAttribute('data-theme', 'light');
    }else{
      trans(); document.documentElement.setAttribute('data-theme', 'dark');
    }
  };
  
  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    getPreferencies();
  }, []);

  let trans = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
          document.documentElement.classList.remove('transition');
      }, 1000)
  };

    return(
      <div className="container">
        <h1>Light / Dark Mode</h1>
        <div className="toggle-container">
                <FaSun className="sun-icon" />
                <input type="checkbox" id="switch" name="theme" checked={darkMode}
                       onChange={toggleMode} />
                <label for="switch">Toggle</label>
                <BsMoon className="moon-icon" />
        </div>
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus repellendus dolorem eum consequatur id exercitationem nesciunt, inventore modi perferendis impedit esse, tempora officia, ipsam quae libero. Nostrum, alias dignissimos.</p>
      </div>
    )
}

export default DarkMode;




