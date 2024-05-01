import React, { useState } from 'react'
import './ThemeToggle.css'

function TheamToggle() {
  const [changeTheme, setChangeTheme] = useState("light")
  const [active, setActive] = useState(false)
  console.log(active)
  function handleThemeToggle() { 
    setActive(!active)
  }
  return (
    <>
      <div className="body" data-theme={!active ? "light" : "dark"}>
        <div className="theme-btn-container">
          <h5>Light</h5>
          <div className="theme-btn" onClick={handleThemeToggle}>
            <div className={active ? "theme-btn-inner active" : "theme-btn-inner"} >
            </div>
          </div>
          <h5>Dark</h5>
        </div>
        <div className="container">
          <h4 className='text-grow'>Theme Toggle</h4>
          <h1 className='text-grow'>EGWIMCODES</h1>
        </div>
        </div>
    </>
  )
}

export default TheamToggle