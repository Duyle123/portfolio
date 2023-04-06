'use client';
import React from 'react';
import useColorMode from '../../../hooks/useColorMode';



export default function ThemeChanger() {
    const [colorMode, setColorMode] = useColorMode();
    return (
        <div className="theme-changer flex flex-row">
            <p>Theme:</p>
            <div className="flex flex-col">
                <button onClick={()=>setColorMode(colorMode === 'dark')}>
                    Mono
                </button>
                <button onClick={()=>setColorMode(colorMode === 'light')}>
                    Color
                </button>
            </div>
        </div>
    )
}