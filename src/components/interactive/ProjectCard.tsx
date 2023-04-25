'use client'

import React from "react";
import ProjectInfo from "../user-info/ProjectInfo";
import Image from "next/image";
import Link from "next/link";


//create individual cards
const ProjectCard = () => {
    return(
        <div className="grid grid-cols-4
        xl:grid-cols-12
        md:grid-cols-9
        sm:grid-cols-5

        ">
        <div className="grid grid-flow-row
        xl:col-span-8 xl:col-start-3
        md:col-span-7 md:col-start-2 md:p-0
        sm:col-span-5 sm:p-[20px]
        col-span-4 p-[15px] gap-[100px]
        ">
            {ProjectInfo.map(project => {
                return(
                    <>  
                    <div className="container mx-auto justify-center
                    flex flex-wrap 
                    sm:justify-start
                    xl:mb-20 
                    md:gap-[40px] md:mb-10
                    sm:w-full
                    w-full gap-[20px]
                    ">
                        <Link key={''} href={project.link} target="_blank">
                            <div className="image-container hover:translate-x-1 hover:-translate-y-2 ease-out transition-all duration-500">
                                <style jsx>
                                    {`
                                    .image-container:hover {
                                        box-shadow:   -7px 7px 39px -23px ${project.shadowColor},
                                        -4px 9px 15px 0px ${project.shadowColor},
                                        -12px 22px 59px -4px ${project.shadowColor},
                                        0px 10px 50px -8px ${project.shadowColor}
                                        }
                                    `}
                                </style>
                                <Image src={project.thumbnail} className={`thumbnail
                                2xl:w-[550px] 2xl:h-[550px]
                                xl:w-[480px] xl:h-[480px]
                                sm:w-full sm:h-auto
                                w-[90vw] h-[290px]
                                
                                object-cover`} 
                                alt={project.thumbnailAlt}/>
                            </div>
                        </Link>
                        
                        {/* ========================= DESCRIPTION ========================== */}
                        <div className="description
                        2xl:pt-10 2xl:w-[430px]
                        xl:pt-5 xl:w-[400px]
                        lg:w-11/12
                        md:pl-5 md:w-5/6
                        ">
                            <style jsx>
                                {`.project-cta {background-image: linear-gradient(130deg, ${project.primaryColor} 0%, ${project.secondaryColor} 100%)}`}
                            </style>

                            <div className="leading-tight strawford-bold
                            lg:text-h3
                            md:text-h4
                            sm:text-h4
                            text-h5 pb-2">
                                <a href={project.link} className='project-title-link' target="_blank">
                                    {project.title}
                                </a>
                            </div>

                            <div className="project-role text-gray
                            
                            pb-2
                            ">
                                Roles: {project.role}
                            </div>
                            <div className="project-summary
                            md:pb-7
                            pb-5">
                                {project.summary}
                            </div>
                            <button className={`project-cta text-white pt-2 pb-2
                            xl:text-h4
                            md:w-fit
                            text-h5 w-full
                            `}>
                                <Link className="pr-7 pl-7 pt-4 pb-4" href={project.link} target="_blank">Explore</Link>
                            </button>
                        </div>
                    </div>
                    </>
                    
                )
            })}
        </div>
        </div>
    )   
}

export default ProjectCard