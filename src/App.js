import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs';

import useDarkMode from './Components/useDarkMode'
import './App.css';

const App = () => {
  const [theme, setTheme] = useDarkMode();

  return (
    <div className='wrapper'>
        <h2> { theme.active ? 'Dark Mode Set on !' : 'Light Mode Set on !' }  </h2>

        <div className="toggle-container">
          <BsSun className="icon-sun" />
          <input type="checkbox" id="switch" name="theme" onChange={setTheme} checked={theme.active} /> 
          <label htmlFor="switch"></label> 
          <BsMoon className="icon-moon" />
        </div>

        <div className="container">
          <h1> Light / Dark Mode </h1>

          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus repellendus dolorem eum consequatur id exercitationem nesciunt, inventore modi perferendis impedit esse, tempora officia, ipsam quae libero. Nostrum, alias dignissimos. </p>
        </div>
    </div>
  );
}
export default App;