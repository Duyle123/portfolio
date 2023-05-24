import React from 'react';
import admin from '../components/user-info/AdminInfo';
import '../app/globals.css';


//===================== import components ======================
import Link from 'next/link';

import ThemeChanger from '@/components/interactive/ThemeChanger';
import strawfordFont from '../app/fonts/strawford.js'
import beVietnamFont from '../app/fonts/beVietnam';
import ProjectCard from '../components/interactive/ProjectCard.tsx';
// import Ribbon from '@/components/static/ribbon';

import WritingSection from '../components/static/WritingSection.js';


//===================== import svg ======================
import Arrow from '../media/svg/arrow.svg';
// import HeroCurve from '../media/svg/hero-curve.svg';
// import AbstractSVG from '../media/svg/abstract.svg';


const HeroSection = () => {
    return(
        <div className='relative mx-auto max-w-[2500px] z-1'>
            <div className='container mx-auto min-h-screen
            overflow-hidden relative strawford grid
            xl:grid-cols-12 xl:max-h-[1117px] xl:min-h-[768px] xl:h-screen
            md:grid-cols-9 md:p-0
            sm:grid-cols-5 sm:p-[20px]
            grid-cols-4 p-[15px] pt-[30px]
            '>

                {/* //============== Theme Changer ================ */}
                <div className="hero-left-bar hidden
                xl:flex xl:col-span-2 xl:backdrop-contrast-100 xl:pt-[50px] xl:pl-5
                ">
                    <ThemeChanger />
                </div>

                {/* //============== Hero Section ================ */}
                <div className="hero grid h-fit
                xl:pt-[50px] md:pt-[30px]
                xl:col-span-9 
                md:grid-cols-7 md:col-span-7 md:col-start-2 md:gap-0
                sm:grid-cols-5 sm:col-span-5 sm:gap-5
                gap-5 grid-cols-4 col-span-4
                ">
                    {/* ============ top information ============= */}
                    <div className="
                    contact-info h-fit
                    dark:text-white
                    xl:col-span-2
                    md:col-span-3 md:strawford
                    strawford-light

                    col-span-2
                    ">
                        <p>{admin.email}</p>
                        <p>{admin.tel}</p>
                        <p>{admin.addressLine2}</p>
                    </div>
                    
                    <div className="aspired-jobs h-fit
                    dark:text-white
                    xl:col-span-2
                    md:col-span-3 md:strawford
                    strawford-light

                    col-span-2">
                        <p>{admin.job1}</p>
                        <p>{admin.job2}</p>
                        <p>{admin.job3}</p>
                        <p>{admin.job4}</p>
                    </div>

                    {/* ============ main options ================*/}
                    <div className="main-options dark:text-white 
                    2xl:pt-[100px] xl:pt-[70px]
                    lg:pt-[50px]
                    md:pt-[70px] md:pb-[50px] md:col-span-7
                    col-span-4 
                    ">
                        <p className="
                        strawford-black p-0 m-0
                        lg:text-h2
                        md:text-h3 md:-translate-x-[3px] md:pb-5
                        text-h4
                        ">
                        DUY&rsquo;S PORTFOLIO
                        </p>
                        <div className="group relative strawford-light w-fit pr-3
                        xl:mt-4 mt-5 md:mb-5 lg:mb-2
                        ">               
                            <a className="z-30 relative xl:text-h3 
                                            md:text-h4
                                            text-h5
                                            duration-800 ease-out
                                            group-hover:text-white 
                                            dark:group-hover:text-black
                                            " href="#project-section">Projects</a>

                            <span className="w-0 left-0 absolute pointer-events-none z-10
                                            bg-black  transition-width h-full duration-700 ease-out 
                                            group-hover:w-full group-hover:pr-1
                                            dark:bg-white"></span>
                        </div>
                        <div className="group relative strawford-light w-fit mr-3 md:mb-5 lg:mb-2">               
                            <a className="z-30 relative xl:text-h3 
                                            md:text-h4
                                            text-h5
                                            duration-800 ease-out
                                            group-hover:text-white 
                                            dark:group-hover:text-black
                                            " href="#writing-section">Writing Samples</a>

                            <span className="w-0 left-0 absolute pointer-events-none z-10
                                            bg-black  transition-width h-full duration-700 ease-out 
                                            group-hover:w-full group-hover:pr-1 
                                            dark:bg-white"></span>
                        </div>
                        <div className="group relative strawford-light w-fit mr-3 md:mb-5 lg:mb-2">               
                            <a className="z-30 relative xl:text-h3
                                            md:text-h4
                                            text-h5
                                            duration-800 ease-out
                                            group-hover:text-white 
                                            dark:group-hover:text-black" href="">Contact</a>

                            <span className="w-0 left-0 absolute pointer-events-none z-10
                                            bg-black  transition-width h-full duration-700 ease-out 
                                            group-hover:w-full group-hover:pr-1 
                                            dark:bg-white"></span>
                        </div>


                        {/* ============== Mobile Side Bar Arrow ==================== */}
                        <div className='xl:hidden w-fit absolute 
                        sm:bottom-10 sm:right-10
                        bottom-[70px] right-5'>
                            <a className='' href="#project-section">
                                <Arrow className="stroke-black stroke-[4] dark:stroke-white w-[64px] h-[96px]" /> 
                            </a>
                        </div>
                    </div>
                </div>

                {/* ==============  background svg ==================== */}
                {/* <div className="absolute container w-fit h-fit mx-auto top-[25vh] xl:-top-20
                xl:left-[400px] -left-[500px] md:-left-[200px]">
                    <HeroCurve className="absolute top-0 -z-1 stroke-black stroke-1 dark:stroke-white aspect-auto xl:w-[997px] xl:h-[1425px]"/>
                </div> */}
            </div>

            {/* ============== side bar ==================== */}
            <div className="hero-right-bar w-fit border-black dark:border-white border-l-2 
                absolute flex right-0 top-0 items-end 
                xl:flex min-h-screen xl:max-h-[1117px] xl:min-h-[768px] xl:h-screen hidden
                ">
                    <a className='pt-[700px] pb-20  pl-5 pr-5' href='#project-section'>
                        <Arrow className="stroke-black stroke-[4] dark:stroke-white w-[64px] h-[96px]" /> 
                    </a>
                </div>
        </div>
        
    )
}

const ProjectSection = () => {
    
    return(
        <div id='project-section' className='bg-[#EFEFEF] overflow-hidden xl:pb-[200px] max-w-[2500px] mx-auto z-10'>
            <div className="container mx-auto min-h-screen xl:min-h-[768px] relative">
                {/* =============== Header ================= */}
                <div className="overflow-hidden relative">
                    <div className="project-heading relative grid 
                    xl:grid-cols-12 xl:pt-[130px] 
                    md:p-0 md:grid-cols-9 md:gap-0 md:pt-[100px] md:pb-[100px] md:mb-[150px]
                    sm:p-[20px] sm:pb-[70px] sm:mb-[100px]
                    p-[15px] pt-[50px] pb-[50px] gap-5 auto-rows-min
                    mb-[50px] border-b-2
                    ">
                        <div className={`${beVietnamFont.className} 
                        text-h1 xl:text-end
                        xl:col-start-3 xl:col-span-1
                        md:col-start-2 md:col-span-2 md:translate-x-0
                        text-start -translate-x-[12px] pb-5 h-min
                        `}>1.</div>

                        <div className="sm:text-h3 text-h4 h-fit -translate-x-[4px]
                        strawford-bold md:hidden">PROJECTS</div>

                        <div className="text-reg h-min strawford-light 
                        xl:col-span-4 xl:pb-[45px] xl:pt-[35px] xl:pl-[60px]
                        lg:col-span-3 lg:pt-[30px]
                        md:col-start-4 md:col-span-5 md:pt-[30px]
                        ">
                        Throughout my time at New York University, I have cultivated a profound understanding of media theories and practical applications. This adept integration has enabled me to initiate projects that make a difference. 
                        Displayed below is a selection of my most recent endeavors within the domain of multimedia design.
                        </div>
                        
                        <div className="strawford-bold 
                        xl:col-start-3 xl:col-span-9 xl:text-h1
                        md:block md:text-h2 md:col-span-7 md:col-start-2 md:pt-10
                        hidden text-h4
                        ">PROJECTS</div>

                        {/* <div className="col-span-5">
                                <AbstractSVG className="absolute top-0 -z-1 pointer-events-none xl:w-[720px] xl:h-[720px]"/>
                        </div> */}
                    </div>
                </div>

                {/* =============== Ribbon =================== */}
                {/* <Ribbon title='Projects' style='horizontal'/> */}

                {/* =================== Project Card ==================== */}
                <div className="project-list flex flex-col gap-10">
                    <ProjectCard />
                    <div className='flex justify-center'>
                        <Link href='/projects' className="
                        flex
                        w-[350px]
                        xl:w-[900px]
                        md:w-[570px]
                        sm:w-[420px]
                         text-black hover:text-black 
                        text-center duration-400
                        hover:underline
                        pt-5 pb-5 text-h4 ">
                            <Arrow className="stroke-black stroke-[4] dark:stroke-black w-[64px] h-[206px] -rotate-90" />
                            <div>
                                See All
                            </div> 
                            
                        </Link>
                    </div>
                    
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