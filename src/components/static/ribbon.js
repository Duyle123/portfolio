'use client'

//===================== import motion ======================
import { motion, useScroll, useTransform, circOut } from 'framer-motion';


const RibbonContent = (props) => {
    let dotSymbol = "\u2B24"
    return (
        <div className='flex items-center gap-10'>
            <div className='text-h5'>{dotSymbol}</div>
            <div className='text-h2 strawford-bold'>{props.title}</div>
        </div>
    )
}

export default function Ribbon (props) {
    const { scrollYProgress } = useScroll();
    let x = useTransform(scrollYProgress, [0, 1], ['0%', '10%'], { ease: circOut })

    let ribbonRepeat = [...Array(7)];

    if (props.style === 'horizontal'){
        return (
            <motion.div style={{x}} className="absolute top-[430px] -left-[750px] shadow-lg bg-white">
                <div className="bg-white flex gap-10">
                    {ribbonRepeat.map(_=><RibbonContent key='' title={props.title} />)}
                </div>
            </motion.div>  
        )
    } else if (props.style === 'vertical'){
        return (
            <div className="absolute -rotate-90 top-[430px] left-[0px] shadow-lg bg-white">
                <div className="bg-white flex gap-10">
                    {ribbonRepeat.map(_=><RibbonContent key='' title={props.title} />)}
                </div>
            </div>
        )
    }
    else return (
        console.log(error)
    )
    
}

