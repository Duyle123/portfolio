
import Ribbon from "./ribbon";
import beVietnamFont from "@/app/fonts/beVietnam";
import '../../app/globals.css';
import WritingsCard from "../interactive/WritingsCard";
import WritingsFeatured from "../interactive/WritingsFeatured";
import Link from "next/link";

function WritingSection() {
    return (
        <div id='writing-section' className="mx-auto max-w-[2500px] h-fit overflow-hidden bg-white">
            <div className="container mx-auto min-h-screen xl:min-h-[768px] relative">
                <div className="project-heading relative grid xl:grid-cols-12 items-start pt-[130px] pb-[50px] border-b-2 bg-white">
                    <div className={`${beVietnamFont.className} text-h1 text-end col-start-3 h-fit`}>2.</div>
                    <div className="text-reg strawford-light col-span-3 h-fit pb-[45px] pt-[35px] pl-[40px]">
                    The samples below include copies that I&rsquo;ve written in past internships, in college, and also in my free time. 
                    My interests revolve around film, design, media, entertainment, and technology. 
                    </div>
                    
                    <div className="col-start-3 text-h1 strawford-bold mt-5">WRITING SAMPLES</div>

                    {/* <div className="col-span-5">
                            <AbstractSVG className="absolute top-0 -z-1 pointer-events-none xl:w-[720px] xl:h-[720px]"/>
                    </div> */}
                </div>
                <div className="container mx-auto w-screen xl:min-h-[768px] strawford">
                    {/* <Image src={abstractBg} alt='' 
                    className="absolute left-0 top-0"/> */}
                    {/* =============== Header ================= */}
                    
                    <div className="strawford h-full grid grid-cols-12">
                        <div className="bg-white relative col-span-10 grid grid-cols-10 items-start pt-[130px] pb-[200px]">
                            {/* <Ribbon title='Writings' style='vertical'/> */}
                            <div className="col-start-3 col-span-5 flex flex-col gap-20">
                                <WritingsFeatured />
                                <WritingsCard />
                                <Link href='/writings' className="bg-black text-white hover:bg-white hover:text-black pt-5 pb-5 text-h4 text-center border-black border-2">Read More</Link>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
                
    )
}

export default WritingSection;