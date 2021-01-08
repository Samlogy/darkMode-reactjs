import React, { useState, useEffect } from 'react'
import useDarkMode from './Components/useDarkMode'
import { BsMoon, BsSun } from 'react-icons/bs';

import './App.css';

const App = () => {
  // const [theme, toggleTheme] = useDarkMode();
  // const themeMode = theme === 'light' ? 'lightTheme' : 'darkTheme';
  const [theme, setTheme] = useState({});

/* get user Preferencies (Browser) */
const getPreferencies = () => {
  const themePreference = window.localStorage.getItem('BlogTheme');
  if(themePreference){
    themePreference === 'light' ? setTheme({ active: false, value: 'light' }) : 
    setTheme({ active: true, value: 'dark' });
  }else{ setTheme({ active: false, value: 'light'}) }
};

/* Switch Change */
const toggleTheme = () => {
  if(theme.active) {
    trans(); 
    setTheme({...theme, active: !theme.active, value: 'light'}); 
    window.localStorage.setItem('BlogTheme', 'light');
  } else { 
    trans(); 
    setTheme({...theme, active: !theme.active, value: 'dark'}); 
    window.localStorage.setItem('BlogTheme', 'dark');
  } 
}

/* Switch Transition */
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
};

useEffect(() => { getPreferencies() }, []);


  return (
    <div className={theme.active ? "wrapper dark" : 'wrapper'}>
        <h2> { theme.active ? 'Dark Mode Set on !' : 'Light Mode Set on !' }  </h2>

        <div className="toggle-container">
          <BsSun className="icon-sun" />
          <input type="checkbox" id="switch" name="theme" onChange={toggleTheme} checked={theme.active} /> <label htmlFor="switch"></label> 
          <BsMoon className="icon-moon" />
        </div>

        <div className="container">
          <h1>Light / Dark Mode</h1>

          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus repellendus dolorem eum consequatur id exercitationem nesciunt, inventore modi perferendis impedit esse, tempora officia, ipsam quae libero. Nostrum, alias dignissimos. </p>
        </div>
    </div>
  );
}
export default App;