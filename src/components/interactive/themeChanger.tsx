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
        <div className="theme-changer flex flex-col gap-10">
            <p className="dark:text-white">Theme:</p>
            <div className=''>
                <button className='dark:text-white hover:text-black order-2' onClick={darkMode}>
                    Mono
                </button>
                <button className='dark:text-white hover:text-red bg-red order-1' onClick={lightMode}>
                    Triad
                </button>
            </div>
            
        </div>
    )
}