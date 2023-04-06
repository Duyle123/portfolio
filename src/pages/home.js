import React from 'react';
import admin from '../components/user-info/admin-info';
import '../app/globals.css';
import Arrow from '../media/svg/arrow.svg'
import HeroCurve from '../media/svg/hero-curve.svg'
import { ThemeProvider } from 'next-themes';
import {userState, useEffect} from 'react';
import {useTheme} from 'next-themes';

const HeroSection = () => {
    return(
        <div className='hero-container'>
        {/* ============ top information ============= */}
            <div className="hero-top-bar flex flex-row">
                <div className="theme-changer flex flex-row">
                    <p>Theme:</p>
                    <div className="theme-changer flex flex-col">
                        <button className='mono-theme-btn'>Mono</button>
                        <button className='color-theme-btn'>Color</button>
                    </div>
                </div>

                <div className="contact-info">
                    <p>{admin.email}</p>
                    <p>{admin.tel}</p>
                    <p>{admin.addressLine1}</p>
                    <p>{admin.addressLine2}</p>
                </div>
                
                <div className="aspired-jobs">
                    <p>{admin.job1}</p>
                    <p>{admin.job2}</p>
                    <p>{admin.job3}</p>
                    <p>{admin.job4}</p>
                </div>
            </div>
            

            {/* ============ main options ================*/}
            <div className="main-options flex flex-col">
                <p className="font-strawford-bold text-h2">
                DUY'S PORTFOLIO
                </p>
                <div className=""> <a className="l-link text-h3 font-strawford-light" href="">Project</a></div>
                <div className="basis-1/3"> <a className='l-link text-h3 font-strawford-light' href="">Writing Samples</a></div>
                <div className="basis-1/3"> <a className='l-link text-h3 font-strawford-light' href=""><span>Contact</span></a></div>
            </div>

            {/* ============== side bar ==================== */}
            <div className="hero-right-bar">
                <Arrow />
            </div>

            <div className="hero-curve">
                <HeroCurve className="absolute" />
            </div>
    </div>
    )
}

function HomePage() {
    const {theme, setTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <HeroSection className='min-h-screen' />
        </ThemeProvider>
    );
}

export default HomePage;