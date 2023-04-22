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
    let ribbonRepeat = [...Array(5)];
    const { scrollYProgress } = useScroll();
    let x = useTransform(scrollYProgress, [0, 1], ['0%', '5%'], { ease: circOut })
    return (
        <motion.div style={{ x }} className="absolute top-[430px] -left-[0px] shadow-lg bg-white">
          <div className="bg-white flex gap-10">
              {ribbonRepeat.map(_=><RibbonContent key='' title={props.title} />)}
          </div>
        </motion.div>  
    )
}

