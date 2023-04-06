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
        <div className="theme-changer flex flex-row">
            <p>Theme:</p>
            <div className="flex flex-col">
                <button className='dark:text-white text-gray' onClick={darkMode}>
                    Mono
                </button>
                <button className='dark:text-gray ' onClick={lightMode}>
                    Triad
                </button>
            </div>
        </div>
    )
}