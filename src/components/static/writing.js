
import abstractBg from "../../media/images/abstract-2.webp"
import Image from "next/image";
import Ribbon from "./ribbon";
import beVietnamFont from "@/app/fonts/beVietnam";
import '../../app/globals.css';

function WritingSection() {
    return (
        <div id='writing-section' className="mx-auto max-w-[2500px] h-fit overflow-hidden">
            <div className="bg-white relative h-fit grid">
                <div className="writing-section container mx-auto w-screen
                min-h-screen xl:max-h-[1117px] xl:min-h-[768px] xl:h-screen 
                relative strawford">
                    <Image src={abstractBg} alt='' 
                    className="absolute left-0 top-0"/>
                    {/* =============== Header ================= */}
                    <div className="overflow-hidden relative strawford">
                        <div className="project-heading relative grid xl:grid-cols-12 items-start pt-[130px] pb-[480px]">
                            <div className={`${beVietnamFont.className} text-h1 text-end col-span-1 xl:col-span-3 h-fit`}>2.</div>
                            <div className="text-reg col-span-3 h-fit pb-[45px] pt-[90px] pl-[40px]">The samples below include copies that I&rsquo;ve written in past internships, in college, and also in my free time. My interests revolve around film, design, media, entertainment, and technology. </div>
                            <div className='col-span-1'></div>
                        </div>
                    </div>
                   
                    
                    <Ribbon title='Writings' style='vertical'/>


                </div>
                
            </div>    
        </div>   
    )
}

export default WritingSection;