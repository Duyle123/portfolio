'use client';
import React from 'react';
import useColorMode from '../../../hooks/useColorMode';


export default function ThemeChanger() {
    const [colorMode, setColorMode] = useColorMode();
    const darkMode = () => {
        setColorMode("dark");
      }
      const lightMode = () => {
        setColorMode("light");
      }
    return (
        <div className="theme-changer flex flex-col">
            <p className="dark:text-white">Theme:</p>
            <div className='theme-button-holder'>
                <button onClick={darkMode} className='dark:text-white text-gray theme-button-dark' >
                    Mono
                </button>
                <button onClick={lightMode} className='dark:text-gray theme-button-light' >
                    Triad
                </button>
            </div>
        </div>
    )
}