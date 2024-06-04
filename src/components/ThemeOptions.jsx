// we are building a theme switcher that will change the theme of the app
import React from 'react'


const ThemeOptions = ({theme}) => {

    const setTheme=()=>{
        document.querySelector('body').setAttribute('data-theme',theme);
        localStorage.setItem('theme',theme);
    }

  return (
    <div className='theme-option' id={`theme-${theme}`} onClick={setTheme} >  </div>
  )
}

export default ThemeOptions
