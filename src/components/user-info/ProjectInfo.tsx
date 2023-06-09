import teraImage from "../../media/images/tera-group/terathumb.png";
import parkNYCImage from "../../media/images/parkNYCImage.png";
import netflixImage from "../../media/images/netflix-mass-media.png";

const ProjectInfo = [{
        id: '1',
        title: 'Tera Group Designs',
        role: 'STRATEGY; COPY; DESIGN',
        summary: "As a digital marketing intern at Tera Group / VTVcab, I've led initiatives in web and graphic design for one of its projects. I've also managed content creation on all of their platforms.",
        thumbnail: teraImage,
        thumbnailAlt:'Tera Group Co. Ltd. Technology Company with 3-d made logo, Slogan says Tera Cells Make The Universe. Made by Duy Le and Dong Luong',
        primaryColor: '#8210A5',
        secondaryColor: '#BD572D',
        shadowColor: '#F1C5FE',
        link: '/tera'
    },
    {
        id: '2',
        title: 'NYC Park Accessibility',
        role: 'ALL ASPECTS',
        summary: "Inequality in green space distribution is apparent in New York City's richest and poorest neighborhoods. As an effort to create awareness and raise funding, I've created a multimedia website to ",
        thumbnail: parkNYCImage,
        thumbnailAlt:"Landing Page of Duy Le's Park Accessiblity Project, Coded using HTML, CSS, and JS. The project aims to make raise funding for Park spaces in NYc's Poorest neighborhood.",
        primaryColor: '#477134',
        secondaryColor: '#BD8C2D',
        shadowColor: '#CAE2C6',
        link: '/projects/DMTP_climate_change_project/index.html'
    },
    {
        id: '3',
        title: 'Mass Media Machine',
        role: 'DESIGN; CODE; COPY',
        summary: 'The culture industry in the modern world is influenced by its own commercialization. Through the successful commercialization of their popular platform, Netflix has been able to exploit mass culture, redefining habits,  in favor of its dominant position in the entertainment industry.',
        thumbnail: netflixImage,
        thumbnailAlt:'Netflix - A Mass Media Machine. A Project by Duy Le',
        primaryColor: '#E50914',
        secondaryColor: '#B1060F',
        shadowColor: '#E39DA1',
        link: '/projects/culture_industries/index.html'
    }
]

export default ProjectInfo;