'use client'

import React from "react";
import ProjectInfo from "../user-info/ProjectInfo";
import Image from "next/image";
import Link from "next/link";


//create individual cards
const ProjectCard = () => {
    return(
        <div>
            {ProjectInfo.map(project => {
                return(
                    <>  
                    <div className="flex container mx-auto justify-center gap-[100px] flex-wrap mb-20">
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
                                <Image src={project.thumbnail} className={`thumbnail xl:w-[580px] xl:h-[580px] object-cover`} 
                                alt={project.thumbnailAlt}/>
                            </div>
                        </Link>
                        
                        <div className="description basis-[450px] xl:pt-5">
                            <style jsx>
                                {`
                                    .project-cta {
                                        background-image: linear-gradient(130deg, ${project.primaryColor} 0%, ${project.secondaryColor} 100%)
                                    }
                                `}
                            </style>
                            <div className="text-h3 leading-tight pb-5">
                                <a href={project.link} className='project-title-link' target="_blank">
                                    {project.title}
                                </a>
                            </div>
                            <div className="project-role text-h5 pb-5">
                                Roles: {project.role}
                            </div>
                            <div className="project-summary pb-10">
                                {project.summary}
                            </div>
                            <button className={`project-cta text-h4 pt-2 pb-2 text-white`}>
                                <Link className="pr-7 pl-7 pt-4 pb-4" href={project.link} target="_blank">Explore</Link>
                            </button>
                        </div>
                    </div>
                    </>
                    
                )
            })}
        </div>
    )   
}

export default ProjectCard