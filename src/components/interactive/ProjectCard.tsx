'use client'

import React from "react";
import ProjectInfo from "../user-info/ProjectInfo";
import Image from "next/image";

const ProjectCard = () => {

    return(
        <div>
            {ProjectInfo.map(project => {
                return(
                    <>  
                    <div className="flex container mx-auto justify-center gap-20 flex-wrap mb-10">
                        <div className="image-container hover:translate-x-2 hover:-translate-y-2 ease-out transition-all duration-200">
                            <style jsx>
                                {`
                                .image-container:hover {
                                    box-shadow: -4px 6px 26px -8px ${project.shadowColor},
                                    -11px 15px 23px -23px ${project.shadowColor},
                                    -20px 16px 46px 16px ${project.shadowColor}
                                    }
                                `}
                            </style>
                            <Image src={project.thumbnail} className={`thumbnail xl:w-[720px] xl:h-[720px] object-cover`} 
                            alt='Tera Group Co. Ltd. thumbnail, Logo in the middle'/>
                        </div>
                        <div className="description basis-[550px] xl:pt-5">
                            <style jsx>
                                {`
                                    .project-cta {
                                        background-image: linear-gradient(130deg, ${project.primaryColor} 0%, ${project.secondaryColor} 100%)
                                    }
                                `}
                            </style>
                            <div className="text-h3 strawford-bold leading-snug">
                                <a href="">
                                    {project.title}
                                </a>
                            </div>
                            <div className="project-role">
                                {project.role}
                            </div>
                            <div className="project-summary">
                                {project.summary}
                            </div>
                            <button className={`project-cta pl-10 pr-10 pt-5 pb-5 text-h4 text-white`}>
                                Explore
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