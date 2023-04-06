'use client';
import React from 'react';
import useColorMode from '../../../hooks/useColorMode';



export default function ThemeChanger() {
    const [colorMode, setColorMode] = useColorMode();
    const monoMode = () => {
        setColorMode("dark");
      }
      const lightMode = () => {
        setColorMode("light");
      }
    return (
        <div className="theme-changer flex flex-row">
            <p>Theme:</p>
            <div className="flex flex-col">
                <button onClick={monoMode}>
                    Mono
                </button>
                <button onClick={lightMode}>
                    Color
                </button>
            </div>
        </div>
    )
}