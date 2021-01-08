import React, { useState, useEffect } from 'react';


const useDarkMode = () => {
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
    };
    /* Switch Transition */
    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 1000)
    };
    
    useEffect(() => { getPreferencies() }, []);
  
    return [theme, toggleTheme]
  };

export default useDarkMode;



  
  
  
  
  





// const useDarkMode = () => {
//     const [theme, setTheme] = useState('light');
  
//     const toggleTheme = () => {
//       if (theme === 'light') {
//         setTheme('dark');
//         window.localStorage.setItem('theme', 'dark');
//       } else {
//         setTheme('light');
//         window.localStorage.setItem('theme', 'light');
//       }
//     };
    
//     useEffect(() => {
//       const localTheme = window.localStorage.getItem('theme');
  
//       if (localTheme) setTheme(localTheme);
//       else window.localStorage.setItem('theme', 'light');
//     });
  
//     return [theme, toggleTheme]
//   };