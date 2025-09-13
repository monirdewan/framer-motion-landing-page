import useScroolGrow from "@/pages/hook/ScroolGrow";
import {motion} from "motion/react"

const CheapReplaceMant = () => {
    const {divRef, style} = useScroolGrow()
    return (
        <motion.div className="bg-red-500 h-[415px] rounded-2xl col-span-6 md:col-span-5"
        ref={divRef}
        style={style}
        >
            
        </motion.div>
    );
};

export default CheapReplaceMant;