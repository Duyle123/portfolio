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
    let y = useTransform(scrollYProgress, [0, 1], ['0%', '10%'], { ease: circOut })

    let ribbonRepeat = [...Array(15)];

    if (props.style === 'horizontal'){
        return (
            <motion.div className="absolute top-[430px] -left-[1325px] shadow-lg bg-white">
                <div className="flex gap-10">
                    {ribbonRepeat.map(_=><RibbonContent key='' title={props.title} />)}
                </div>
            </motion.div>  
        )
    } else if (props.style === 'vertical'){
        return (
            <motion.div className="absolute top-0 -right-[2880px] -rotate-90 shadow-lg bg-white">
                <div className="flex gap-10">
                    {ribbonRepeat.map(_=><RibbonContent key='' title={props.title} />)}
                </div>
            </motion.div>
        )
    }
    else return (
        console.log(error)
    )
    
}

