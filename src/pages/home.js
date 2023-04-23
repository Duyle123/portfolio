import React from 'react';
import admin from '../components/user-info/AdminInfo';
import '../app/globals.css';


//===================== import components ======================
import ThemeChanger from '@/components/interactive/ThemeChanger';
import strawfordFont from '../app/fonts/strawford.js'
import beVietnamFont from '../app/fonts/beVietnam';
import ProjectCard from '../components/interactive/ProjectCard.tsx';
import Ribbon from '@/components/static/ribbon';

import WritingSection from '../components/static/writing.js';


//===================== import svg ======================
import Arrow from '../media/svg/arrow.svg';
import HeroCurve from '../media/svg/hero-curve.svg';
import AbstractSVG from '../media/svg/abstract.svg';


const HeroSection = () => {
    return(
        <div className='relative mx-auto max-w-[2500px]'>
            <div className='container mx-auto min-h-screen xl:max-h-[1117px] xl:min-h-[768px] xl:h-screen 
            overflow-hidden relative strawford grid xl:grid-cols-12'>

                {/* //============== Theme Changer ================ */}
                <div className="hero-left-bar xl:flex xl:col-span-2 hidden xl:backdrop-contrast-100 xl:pt-[50px] xl:pl-10">
                    <ThemeChanger />
                </div>

                {/* //============== Hero Section ================ */}
                <div className="hero xl:col-span-10">
                    {/* ============ top information ============= */}
                    <div className="hero-top-bar grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-10 dark:text-white pt-5 xl:pt-[50px]">
                        <div className="contact-info lg:col-span-2">
                            <p>{admin.email}</p>
                            <p>{admin.tel}</p>
                            <p>{admin.addressLine1}</p>
                            <p>{admin.addressLine2}</p>
                        </div>
                        
                        <div className="aspired-jobs lg:col-span-2">
                            <p>{admin.job1}</p>
                            <p>{admin.job2}</p>
                            <p>{admin.job3}</p>
                            <p>{admin.job4}</p>
                        </div>
                    </div>

                    {/* ============ main options ================*/}
                    <div className="main-options dark:text-white xl:pt-20">
                        <p className="xl:text-h2 lg:text-h3 strawford-black">
                        DUY&rsquo;S PORTFOLIO
                        </p>
                        <div className="group relative strawford-light w-fit pr-3">               
                            <a className="z-30 relative xl:text-h3 lg:text-h4
                                            duration-800 ease-out
                                            group-hover:text-white 
                                            dark:group-hover:text-black
                                            " href="#project-section">Projects</a>

                            <span className="w-0 left-0 absolute pointer-events-none z-10
                                            bg-black  transition-width h-full duration-700 ease-out 
                                            group-hover:w-full group-hover:pr-1
                                            dark:bg-white"></span>
                        </div>
                        <div className="group relative strawford-light w-fit pr-3">               
                            <a className="z-30 relative xl:text-h3 lg:text-h4
                                            duration-800 ease-out
                                            group-hover:text-white 
                                            dark:group-hover:text-black
                                            " href="">Writing Samples</a>

                            <span className="w-0 left-0 absolute pointer-events-none z-10
                                            bg-black  transition-width h-full duration-700 ease-out 
                                            group-hover:w-full group-hover:pr-1 
                                            dark:bg-white"></span>
                        </div>
                        <div className="group relative strawford-light w-fit pr-3">               
                            <a className="z-30 relative xl:text-h3 lg:text-h4 
                                            duration-800 ease-out
                                            group-hover:text-white 
                                            dark:group-hover:text-black" href="">Contact</a>

                            <span className="w-0 left-0 absolute pointer-events-none z-10
                                            bg-black  transition-width h-full duration-700 ease-out 
                                            group-hover:w-full group-hover:pr-1 
                                            dark:bg-white"></span>
                        </div>
                        <div className='xl:hidden pt-10'>
                            <a href="">
                                <Arrow className="stroke-black stroke-[4] dark:stroke-white" /> 
                            </a>
                        </div>
                    </div>
                </div>

                {/* ==============  background svg ==================== */}
                <div className="absolute container w-fit h-fit mx-auto top-[25vh] xl:-top-20
                xl:left-[400px] -left-[500px] md:-left-[200px]">
                    <HeroCurve className="absolute top-0 -z-1 stroke-black stroke-1 dark:stroke-white aspect-auto xl:w-[997px] xl:h-[1425px]"/>
                </div>
            </div>

            {/* ============== side bar ==================== */}
            <div className="hero-right-bar w-fit border-black dark:border-white border-l-2 
                absolute flex right-0 top-0 items-end 
                xl:flex min-h-screen xl:max-h-[1117px] xl:min-h-[768px] xl:h-screen hidden
                
                ">
                    <a className='pt-[700px] pb-20  pl-5 pr-5' href='#project-section'>
                        <Arrow className="stroke-black stroke-[4] dark:stroke-white" /> 
                    </a>
                </div>
        </div>
        
    )
}

const ProjectSection = () => {
    
    return(
        <div id='project-section' className='bg-[#EFEFEF] overflow-hidden xl:pb-[200px] max-w-[2500px] mx-auto shadow-lg'>

            <div className="container mx-auto min-h-screen xl:min-h-[768px] relative">
                {/* =============== Header ================= */}
                <div className="overflow-hidden relative strawford">
                    <div className="project-heading relative grid xl:grid-cols-12 items-start pt-[130px] pb-[480px]">
                        <div className={`${beVietnamFont.className} text-h1 text-end col-span-1 xl:col-span-3 h-fit`}>1.</div>
                        <div className="text-reg col-span-3 h-fit pb-[45px] pt-[85px] pl-[40px]">During my time at NYU, I&rsquo;ve learned to combine media theories and practice to make meaningful projects. 
                        What is shown below are some of my most recent works in terms of multimedia design.</div>
                        <div className='col-span-1'></div>
                        <div className="col-span-5">
                                <AbstractSVG className="absolute top-0 -z-1 pointer-events-none xl:w-[720px] xl:h-[720px]"/>
                        </div>
                    </div>
                </div>

                {/* =============== Ribbon =================== */}
                <Ribbon title='Projects' style='horizontal'/>

                {/* =================== Project Card ==================== */}
                <div className="project-list">
                    <ProjectCard />
                </div>
            </div> 
        </div>
        
        
        
    )
}

function HomePage() {
    return (
        <div className={`${strawfordFont.className}`}>
            <HeroSection/>
            <ProjectSection />
            <WritingSection />
        </div>
    );
}``

export default HomePage;