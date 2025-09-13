import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import macExposed from '@/assets/images/macbook-exposed.png'
import {motion}  from 'motion/react'

const HeroSection = () => {
    const intro = {
        hidden:{opacity:0 , },
        visible:{
            opacity:1,
            transition:{
                duration:0.5,
                staggerChildren:0.5,
                delayChildren:1
            }
        }
    }

    const introChildren = {
        hidden:{opacity:0, y:-50},
        visible:{
            opacity:1,
            y:50,
            transition:{
                y:{
                duration:0.5,
                type:"spring" as const,
                bounce:.5
                }
            }
        }
    }

    const laptop = {
        initial:{y:0, rotate:"30deg", scale:5},
        animate:{
            y:20,
            rotate:0,
            scale:1,
            transition:{
                duration:1,
                y:{
                    duration:2, repeat:Infinity,
                     repeatType:"reverse" as const,
                      ease:"easeInOut" as const, 
                }
            }
        }
    }

    return (
       <div className='overflow-hidden'>
         <Container className='grid grid-cols-1 md:grid-cols-2  h-screen pt-6 place-content-center '>
           <motion.div
           variants={intro}
           initial="hidden"
           animate="visible"
           >
            <motion.h1 className='xl:text-8xl md:text-6xl text-4xl font-bold text-nowrap'
            variants={introChildren}
            >
                <span className='text-gray'>Don't worry.</span>
                <br></br>
                <span>We'll fix it.</span>
            </motion.h1>
            <motion.p className='mt-2.5 max-w-[50ch]'
             variants={introChildren}
            
            >Welcome to <span> iRepair</span>, your one-stop place for all kinds of <span> Macbook repairs</span> and diagnostics.</motion.p>
           <motion.div
            variants={introChildren}
           >
             <Button className='mt-1.5'>Book a service</Button>
           </motion.div>
           </motion.div>
           <motion.div className='mt-10 p-5'
           variants={laptop}
           initial="initial"
           animate="animate"
           >
            <img className='rotate-[-30deg] h-[90%]  object-contain' src={macExposed} alt="" />
           </motion.div>
        </Container>
       </div>
    );
};

export default HeroSection;