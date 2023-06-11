import Link from 'next/link';

import beVietnamFont from '../../app/fonts/beVietnam';
import ProjectCard from '../interactive/ProjectCard';
import VerticalArrow from '../../media/svg/vertical-arrow.svg'

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
                        Throughout my time at New York University, 
                        I have cultivated a profound understanding of media theories and practical applications. 
                        This adept integration has enabled me to work on, as well as lead projects that makes a difference. 
                        Displayed below are some of my most recent works.
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
                <div className="project-list flex flex-col gap-10 pb-10">
                    <ProjectCard />
                    <div className='m-auto'>
                        <Link href='/projects' className="group gap-5
                        flex justify-left content-center items-center
                        overflow-hidden text-black hover:text-black 
                        text-center duration-400
                        pt-5 pb-5 text-h4">                            
                            <div className='strawford-bold
                            w-fit pt-[5px]
                            '>
                                FULL LIBRARY
                            </div>
                            <VerticalArrow className="stroke-black dark:stroke-black w-[0px] h-[31px] object-scale-down 
                            group-hover:w-[47px] transition-width ease-in-out duration-500" />  
                        </Link>
                    </div>
                    
                </div>
                
            </div> 
        </div>   
    )
}

export default ProjectSection