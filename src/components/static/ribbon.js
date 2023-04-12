'use client'

//===================== import motion ======================
import { motion, useScroll, useTransform, circOut } from 'framer-motion';


const RibbonContent = () => {
    let dotSymbol = "\u2B24"
    return (
        <div className='flex items-center gap-10'>
            <div className='text-h5'>{dotSymbol}</div>
            <div className='text-h2 strawford-bold'>Projects</div>
        </div>
    )
}

export default function Ribbon () {
    let ribbonRepeat = [...Array(20)];
    const { scrollYProgress } = useScroll();
    let x = useTransform(scrollYProgress, [0, 1], ['0%', '5%'], { ease: circOut })
    return (
        <motion.div style={{ x }} className="absolute top-[430px] -left-[5000px] shadow-lg bg-white">
          <div className="bg-white flex gap-10">
              {ribbonRepeat.map(_=><RibbonContent key={''} />)}
          </div>
        </motion.div>  
    )
}

