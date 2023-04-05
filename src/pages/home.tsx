import React from 'react';
import admin from '../components/user-info/admin-info'


function HomePage() {
    return (
        <>
            {/* ============ top information ============= */}
            <div className="theme-changer flex flex-row">
                <p>Theme:</p>
                <div className="theme-changer flex flex-col">
                    <button>Mono</button><button>Color</button>
                </div>
            </div>
            

            <div className="contact-info">
                <p>{admin.email}</p>
                <p>{admin.tel}</p>
                <p>{admin.addressLine1}</p>
                <p>{admin.addressLine2}</p>
            </div>
            
            <div className="aspired-jobs">
                <p>{admin.job1}</p>
                <p>{admin.job2}</p>
                <p>{admin.job3}</p>
                <p>{admin.job4}</p>
            </div>

            {/* ============ main options ================*/}
            <div className="main-options flex flex-col">
                <p className="font-strawford-bold text-h2">
                DUY'S PORTFOLIO
                </p>
                <div className={"basis-1/3"}><a className='relative transition-all group' href="">
                    <span className='w-0 absolute bg-black left-0 ease-out duration-500 transition-all group-hover:w-full'></span>
                    <span className=''>Project</span></a>
                </div>
                <div className={"basis-1/3"}> <a href="">Writing Samples</a></div>
                <div className={"basis-1/3"}> <a href=""><span>Contact</span></a></div>
            </div>
            
        </>
        

    );
}

export default HomePage;