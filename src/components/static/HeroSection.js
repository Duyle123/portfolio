import ThemeChanger from "../interactive/ThemeChanger"
import Arrow from '../../media/svg/arrow.svg'

import admin from '../user-info/AdminInfo';


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
                        <div>{admin.email}</div>
                        <div>{admin.tel}</div>
                        <div>{admin.addressLine2}</div>
                    </div>
                    
                    <div className="aspired-jobs h-fit
                    dark:text-white
                    xl:col-span-2
                    md:col-span-3 md:strawford
                    strawford-light
                    col-span-2">
                        <div>{admin.job1}</div>
                        <div>{admin.job2}</div>
                        <div>{admin.job3}</div>
                        <div>{admin.job4}</div>
                    </div>

                    {/* ============ main options ================*/}
                    <div className="main-options dark:text-white 
                    2xl:pt-[100px] xl:pt-[70px]
                    lg:pt-[50px]
                    md:pt-[70px] md:pb-[50px] md:col-span-7
                    col-span-4 
                    ">
                        <div className="
                        strawford-black p-0 m-0
                        lg:text-h2
                        md:text-h3 md:-translate-x-[3px] md:pb-5
                        text-h4
                        ">
                        DUY&rsquo;S PORTFOLIO
                        </div>
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

export default HeroSection;