import { useScroll, useTransform } from 'motion/react';
import  { useRef } from 'react';

const useScroolGrow = () => {
      const divRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:divRef,
        offset:['0 1', '1 1']
    })
    const scaleValues = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1])
    const style = {scale:scaleValues, opacity:opacityValues, }
    return {divRef, style}
};

export default useScroolGrow;