import React from 'react';
import admin from '../components/user-info/admin-info';
import '../app/globals.css';

//===================== import components ======================
import ThemeChanger from '../components/interactive/themeChanger';
import strawfordFont from '../app/fonts/strawford.js'
import beVietnamFont from '../app/fonts/beVietnam';

//===================== import svg ======================
import Arrow from '../media/svg/arrow.svg';
import HeroCurve from '../media/svg/hero-curve.svg';
import AbstractSVG from '../media/svg/abstract.svg';

const HeroSection = () => {
    return(
        <div className='container dark:bg-black min-h-screen overflow-hidden relative strawford flex justify-center'>
            <div className="hero-left-bar">
                <ThemeChanger className='z-10' />
            </div>
            <div className="hero">
                {/* ============ top information ============= */}
                <div className="hero-top-bar flex flex-row dark:text-white">

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
                <div className="main-options dark:text-white">
                    <p className="text-h2 strawford-black">
                    DUY'S PORTFOLIO
                    </p>
                    <div className="group relative strawford-light w-fit pr-3">               
                        <a className="z-30 relative text-h3
                                        duration-800 ease-out
                                        group-hover:text-white 
                                        dark:group-hover:text-black" href="">Projects</a>

                        <span className="w-0 left-0 absolute pointer-events-none z-10
                                        bg-black  transition-width h-full duration-700 ease-out 
                                        group-hover:w-full group-hover:pr-1 
                                        dark:bg-white"></span>
                    </div>
                    <div className="group relative strawford-light w-fit pr-3">               
                        <a className="z-30 relative text-h3
                                        duration-800 ease-out
                                        group-hover:text-white 
                                        dark:group-hover:text-black" href="">Writing Samples</a>

                        <span className="w-0 left-0 absolute pointer-events-none z-10
                                        bg-black  transition-width h-full duration-700 ease-out 
                                        group-hover:w-full group-hover:pr-1 
                                        dark:bg-white"></span>
                    </div>
                    <div className="group relative strawford-light w-fit pr-3">               
                        <a className="z-30 relative text-h3 
                                        duration-800 ease-out
                                        group-hover:text-white 
                                        dark:group-hover:text-black" href="">Contact</a>

                        <span className="w-0 left-0 absolute pointer-events-none z-10
                                        bg-black  transition-width h-full duration-700 ease-out 
                                        group-hover:w-full group-hover:pr-1 
                                        dark:bg-white"></span>
                    </div>
                </div>
            </div>
                {/* ============== side bar ==================== */}
            <div className="hero-right-bar w-fit min-h-screen pl-5 pr-5 pb-20 border-black dark:border-white border-l-2 absolute flex right-0 top-0 items-end">
                <a href="">
                    <Arrow className="stroke-black stroke-[4] dark:stroke-white" /> 
                </a>
            </div>
            <div className="hero-curve absolute -top-20 ">
                <HeroCurve className="absolute top-0 -z-1 pointer-events-none stroke-black stroke-1 dark:stroke-white"/>
            </div>
        </div>
    )
}

const ProjectSection = () => {
    let sectionName = 'Project';
    let ribbonRepeat = [...Array(12)];
    return(
        <div className="project-heading relative flex flex-wrap">
            <div className={`${beVietnamFont.className} text-h1`}>1.</div>
            <div className="text-reg">During my time at NYU, I've learned to combine media theories and practice to make meaningful projects. 
            What is shown below are some of my most recent works in terms of Web design and development.</div>
            <div className="">
            <div className="hero-curve">
                <AbstractSVG className="absolute top-0 -z-1 pointer-events-none"/>
            </div></div>
            <div className="flex">
                {ribbonRepeat.map(_=><div>{sectionName}</div>)}
            </div>
        </div>
    )
}

function HomePage() {
    return (
        <div className={`${strawfordFont.className} flex flex-col `}>
            <HeroSection/>
            <ProjectSection />
        </div>
    );
}``

export default HomePage;