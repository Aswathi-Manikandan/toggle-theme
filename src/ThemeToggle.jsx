import React, { useState } from 'react'

export default function ThemeToggle() {
    const[darkMode,setDarkMode] = useState(false)

    const ToggleTheme=()=>{
        setDarkMode(!darkMode)
    }

    const applyStyle = {
        backgroundColor : darkMode? 'black':'white',
        color : darkMode?'white':'black',
        height: '100vh',                               // Full screen height
        display: 'flex',                               // Flexbox for centering content
        alignItems: 'center',
        justifyContent: 'center',
    }
  return (
    <div style={applyStyle}>
        <button onClick={ToggleTheme} > SWITCH TO {darkMode?"light":"dark"}MODE</button>
        <h1>{darkMode?'dark':'light'}MODE ON</h1>
    </div>
  )
}
