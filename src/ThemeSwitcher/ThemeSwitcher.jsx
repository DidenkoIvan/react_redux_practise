import React from 'react';
import { useTheme } from "../ThemeContext/ThemeContext";

function ThemeSwitcher(){
    const { theme, toggleTheme } = useTheme()


    return (
        <button onClick={toggleTheme} className='theme_switcher'>
            Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
    )
}

export default ThemeSwitcher;