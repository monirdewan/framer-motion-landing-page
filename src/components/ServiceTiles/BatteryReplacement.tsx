import useScroolGrow from '@/pages/hook/ScroolGrow';
import {motion} from 'motion/react'

const BatteryReplacement = () => {
    const {divRef, style} = useScroolGrow()
   
    return (
        <motion.div className="bg-red-500 h-[415px] rounded-2xl col-span-12"
        style={style}
        ref={divRef}
        >
           <div className='' ></div> 
        </motion.div>
    );
};

export default BatteryReplacement;