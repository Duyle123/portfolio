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
        <div className="theme-changer flex">
            <p className="text-white">Theme:</p>
            <button className='dark:text-white text-white' onClick={darkMode}>
                Mono
            </button>
            <button className='dark:text-white' onClick={lightMode}>
                Triad
            </button>
        </div>
    )
}