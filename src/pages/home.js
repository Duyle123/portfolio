import React from 'react';
import admin from '../components/user-info/admin-info';
import '../app/globals.css';
import Arrow from '../media/svg/arrow.svg';
import HeroCurve from '../media/svg/hero-curve.svg';
import ThemeChanger from '../components/interactive/themeChanger';


const HeroSection = () => {

    return(
        <div className='hero-container dark:bg-black min-h-screen'>
        {/* ============ top information ============= */}
            <div className="hero-top-bar flex flex-row dark:text-white">
                <ThemeChanger className='z-10' />

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
            <div className="main-options flex flex-col dark:text-white">
                <p className="font-strawford-bold text-h2">
                DUY'S PORTFOLIO
                </p>
                <div className=""> <a className="l-link text-h3 font-strawford-light dark:hover:text-black" href="">Project</a></div>
                <div className="basis-1/3"> <a className='l-link text-h3 font-strawford-light dark:hover:text-black' href="">Writing Samples</a></div>
                <div className="basis-1/3"> <a className='l-link text-h3 font-strawford-light dark:hover:text-black' href=""><span>Contact</span></a></div>
            </div>

            {/* ============== side bar ==================== */}
            <div className="hero-right-bar">
                <a href="">
                   <Arrow /> 
                </a>
            </div>

            <div className="hero-curve">
                <HeroCurve className="absolute top-0 -z-1 pointer-events-none"/>
            </div>
    </div>
    )
}

function HomePage() {
    return (
        <HeroSection />
    );
}

export default HomePage;