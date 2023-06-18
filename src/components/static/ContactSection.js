'use client'

import Link from "next/link";
import beVietnamFont from '../../app/fonts/beVietnam';
import { useRouter } from "next/navigation";

function ContactSection() {
    const router = useRouter();

    return (
        <div id='contact-section' className="mx-auto max-w-[2500px] h-fit overflow-hidden bg-black">
            <div className="container mx-auto min-h-screen xl:min-h-[768px] relative text-white">
                <div className="relative grid 
                    xl:grid-cols-12 xl:pt-[130px] 
                    md:p-0 md:grid-cols-9 md:gap-0 md:pt-[100px] md:pb-[100px] md:mb-[150px]
                    sm:p-[20px] sm:pb-[70px] sm:mb-[100px]
                    p-[15px] pt-[50px] pb-[50px] gap-5 auto-rows-min
                    mb-[50px] border-b-2">
                        <div className={`${beVietnamFont.className} 
                        text-h1 xl:text-end
                        xl:col-start-3 xl:col-span-1
                        md:col-start-2 md:col-span-2 md:translate-x-0
                        text-start -translate-x-[12px] pb-5 h-min
                        `}>3.</div>
                        <p className="col-start-3 col-span-4 strawford-bold text-h4">Let&apos;s Make Something Happen :)</p>
                        <div className="col-span-4">
                            <button type="button" onClick={()=>{router.push('mailto:ddl8997@nyu.edu')}} >
                                Send Me An Email
                            </button>
                        </div>
                </div>

                
            </div>
        </div >
        )
        
}

export default ContactSection;