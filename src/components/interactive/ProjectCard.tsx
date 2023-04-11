import React from "react";
import ProjectInfo from "../user-info/ProjectInfo";
import Image from "next/image";

const BlogCard = () => {

    return(
        <div>
            {ProjectInfo.map(project => {
                return(
                    <>  
                    <div className="flex">
                        <div className="image-holder">
                            <Image src={project.thumbnail} alt='Tera Group Co. Ltd. thumbnail, Logo in the middle'/>
                        </div>
                        <div className="description">
                            <div className="">
                                {project.title}
                            </div>
                            <div className="project-role">
                                {project.role}
                            </div>
                            <div className="project-summary">
                                {project.summary}
                            </div>
                        </div>
                    </div>
                        
                        
                    </>
                    
                )
            })}
        </div>
    )   
}

export default BlogCard;