import React from 'react';
import useColorMode from '../../../hooks/useColorMode';

//changed name
export default function themeChanger() {
    const [colorMode, setColorMode] = useColorMode();
    const darkMode = () => {
        setColorMode("dark");
      }
    const lightMode = () => {
        setColorMode("light");
    }
    return (
        <div className="theme-changer flex flex-row gap-[30px]">
            <p className="dark:text-white">Theme:</p>
            <div className='flex flex-col gap-[10px]'>
                <button className='theme-button-dark dark:text-black dark:bg-white
                pr-5 pl-5 order-2 dark:order-1' onClick={darkMode}>
                    Mono
                </button>
                <button className='theme-button-light dark:text-white text-white bg-black text-left
                pr-5 pl-5 order-1 dark:order-2' onClick={lightMode}>
                    Triad
                </button> 
            </div>
        </div>
    )
}