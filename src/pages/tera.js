import Header from "../components/interactive/header";
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
            <Header />
            <div>
                <h1 className="">Tera Group Projects</h1>
                <Image 
                alt=''
                src={HeroImage}
                className="
                w-[100vw] h-[80vh] 
                object-cover"
                >

                </Image>
                <p>
                    This is a page for Tera.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ea necessitatibus incidunt ipsam nemo perferendis assumenda expedita autem esse deserunt nam omnis, in blanditiis cumque ad praesentium, voluptatum laborum amet.
                </p>
            </div>

            <div>
                <h1>Gallery</h1>
                <div className="flex flex-wrap">
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
        </>
        
    );
}

export default TeraPage;