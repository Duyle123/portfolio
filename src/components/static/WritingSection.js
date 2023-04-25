
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
                <div className="project-heading relative grid 
                    xl:grid-cols-12 xl:pt-[130px] 
                    md:p-0 md:grid-cols-9 md:gap-0 md:pt-[100px] md:pb-[100px]
                    sm:p-[20px] sm:pb-[70px]
                    p-[15px] pt-[50px] pb-[50px] gap-5 auto-rows-min
                    mb-[150px] border-b-2">
                    <div className={`${beVietnamFont.className} text-h1 xl:text-end
                        xl:col-start-3 xl:col-span-1
                        md:col-start-2 md:col-span-2 md:translate-x-0
                        text-start -translate-x-[12px] pb-5 h-min`}>2.</div>
                    <div className="sm:text-h3 text-h4 h-fit -translate-x-[4px]
                        strawford-bold md:hidden">WRITING SAMPLES</div>

                    <div className="text-reg h-min strawford-light 
                        xl:col-span-4 xl:pb-[45px] xl:pt-[35px] xl:pl-[60px]
                        lg:col-span-3 lg:pt-[35px]
                        md:col-start-4 md:col-span-5 md:pt-[30px]">
                    The samples below include copies that I&rsquo;ve written in past internships, in college, and also in my free time. 
                    My interests revolve around film, design, media, entertainment, and technology. 
                    </div>
                    
                    <div className="strawford-bold 
                        xl:col-start-3 xl:col-span-9 xl:text-h1
                        lg:translate-x-[10px] lg:leading-[9rem] lg:pt-7
                        md:block md:text-h2 md:col-span-7 md:col-start-2 md:pt-10
                        hidden text-h4">WRITING SAMPLES</div>

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