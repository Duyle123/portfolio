import React from 'react';
import '../app/globals.css';


//===================== import components ======================

import strawfordFont from '../app/fonts/strawford.js'
// import Ribbon from '@/components/static/ribbon';

import HeroSection from '@/components/static/HeroSection'
import WritingSection from '@/components/static/WritingSection';
import ContactSection from '@/components/static/ContactSection';
import ProjectSection from '@/components/static/ProjectSection';
import LetterSection from '@/components/static/WhoIAm';


//===================== import svg ======================
// import HeroCurve from '../media/svg/hero-curve.svg';
// import AbstractSVG from '../media/svg/abstract.svg';




function HomePage() {
    return (
        <div>
            <HeroSection />
            <LetterSection />
            <ProjectSection />
            <WritingSection />
            <ContactSection />
        </div>
    );
}``

export default HomePage;
