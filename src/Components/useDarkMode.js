import React, { useState, useEffect } from 'react';


const useDarkMode = () => {
    const [theme, setTheme] = useState({ active: false, value: '' });

    /* get user Preferencies (Browser) */
    const getPreferencies = () => {
        const themePreference = window.localStorage.getItem('BlogTheme');
        if (themePreference) {
            themePreference === 'light' ? setTheme({ active: false, value: 'light' }) : 
            setTheme({ active: true, value: 'dark' });
            document.documentElement.setAttribute('data-theme', themePreference);
            
        } else { 
            setTheme({ active: false, value: 'light' }); 
            document.documentElement.setAttribute('data-theme', themePreference) 
        }
    };
    /* Switch Change */
    const toggleTheme = () => {
        if (theme.active) {
            trans(); 
            document.documentElement.setAttribute('data-theme', 'light')
            setTheme({...theme, active: !theme.active, value: 'light'}); 
            window.localStorage.setItem('BlogTheme', 'light');
        } else { 
            trans(); 
            document.documentElement.setAttribute('data-theme', 'dark')
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
    
    useEffect(() => { getPreferencies() }, [theme.active]);
  
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