
import abstractBg from "../../media/images/abstract-2.webp"
import Image from "next/image";
import Ribbon from "./ribbon";

function WritingSection() {
    return (
        <div className="mx-auto max-w-[2500px] h-fit overflow-hidden">
            <div className="bg-white relative h-fit">
                <div className="writing-section container mx-auto
                min-h-screen xl:max-h-[1117px] xl:min-h-[768px] xl:h-screen 
                relative strawford grid xl:grid-cols-12
                ">
                    <Image src={abstractBg} alt='' 
                        className="absolute left-0 top-0 w-screen"/>
                    <Ribbon title='Writings' style='vertical'/>
                </div>
                
            </div>    
        </div>
        
        
    )
}

export default WritingSection;