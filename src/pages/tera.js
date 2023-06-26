
import Image from "next/image";
import '../app/globals.css';
import '../media/images/parkNYCImage.png'

import HeroImage from '../media/images/tera-group/terathumb.png';
import CloudInf from '../media/images/tera-group/cloud-inf.png';
import Microservice from '../media/images/tera-group/microservices.png';
import HireBE from '../media/images/tera-group/hire-be.jpg';
import HireFE from '../media/images/tera-group/hire-fe.jpg';
import HireDevOps from '../media/images/tera-group/hire-devops.jpg';
import HireFlutter from '../media/images/tera-group/hire-flutter.jpg';


function TeraPage () {
    return (
        <>
        <div className="flex flex-wrap justify-center">
        <div className="flex">
                <div className='relative top-0 left-0 overflow-hidden flex h-fit width-screen justify-center'>
                    <Image 
                    alt=''
                    src={HeroImage}
                    className="
                    w-[100vw] h-[80vh] 
                    object-cover"
                    >
                    </Image>
                </div>
            </div>

            <div className="h-fit max-w-[1080px] p-5">
                <p className="text-h3 strawford-bold">Post Designs</p>
                <div className="flex justify-center flex-wrap gap-5">
                    <Image 
                    alt=''
                    src={CloudInf}
                    className="
                    w-[500px] h-[500px] 
                    object-cover"
                    ></Image>
                    
                    <Image 
                    alt=''
                    src={Microservice}
                    className="
                    w-[500px] h-[500px] 
                    object-cover"
                    ></Image>
                    
                    <Image 
                    alt=''
                    src={HireBE}
                    className="
                    w-[500px] h-[500px] 
                    object-cover"
                    ></Image>
                    
                    <Image 
                    alt=''
                    src={HireFE}
                    className="
                    w-[500px] h-[500px] 
                    object-cover"
                    ></Image>
                    
                    <Image 
                    alt=''
                    src={HireDevOps}
                    className="
                    w-[500px] h-[500px] 
                    object-cover"
                    ></Image>
                    
                    <Image 
                    alt=''
                    src={HireFlutter}
                    className="
                    w-[500px] h-[500px] 
                    object-cover"
                    ></Image>
                    
                </div>
            </div>
        </div>
        </>
        
    );
}

export default TeraPage;