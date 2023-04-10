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
            <p className="dark:text-white pr-[20px]">Theme:</p>
            <div className='grid grid-rows-2 '>
                <button className='dark:text-white hover:text-white' onClick={darkMode}>
                    Mono
                </button>
                <button className='dark:text-white hover:text-white' onClick={lightMode}>
                    Triad
                </button>
            </div>
            
        </div>
    )
}