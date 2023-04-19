
import abstractBg from "../../media/images/abstract-2.webp"
import Image from "next/image";

function WritingSection() {
    return (
        <div className="bg-white">
            <div className="writing-section container mx-auto
            min-h-screen xl:max-h-[1117px] xl:min-h-[768px] xl:h-screen 
            relative strawford grid xl:grid-cols-12 overflow-hidden
            ">
                <Image src={abstractBg} alt='' 
                className="absolute left-0 top-0 w-screen"/>

                
            </div>
        </div>
        
    )
}

export default WritingSection;