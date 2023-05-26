import Header from "../components/interactive/header";
import Image from "next/image";
import '../app/globals.css';
import '../media/images/parkNYCImage.png'

import HeroImage from '../media/images/five-broken-cameras/hug-tree.jpg';

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
        </>
        
    );
}

export default TeraPage;