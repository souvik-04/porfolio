import{motion}from 'framer-motion';

import{styles}from '../styles'
import{ComputersCanvas}from './canvas';
import { section } from 'framer-motion/client';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>Hero
    <div className={`${styles.paddingX} absolute inset0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
        <div className='w-1 sm:h-80 h-40 violet-gradient'/>
      </div>
      <div>
        <h1 className={`${styles.heroHeadText}
        text-white`}>Hi, I'm <span className='text-[#915eff]'>Souvik</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a computer science student, I love <br className='sm:block hidden'/> web development
        </p>
      </div>
    </div>
    <ComputersCanvas/>
    <div className='absolute xs:bottom-0 bottom-0 w-full flex justify-center items-center'>
      <a href="#about">
    <div className="W-[35px] h-[50px] rounded-2xl border-2 border-secondary flex justify-center items-start p-1">
      <motion.dev
      animate={{
        y:[0, 30, 0]
      }}
      transition={{
        duration:1.5,
        repeat:Infinity,
        repeatType:'loop'
      }}
      className="w-2 h-2 rounded-full bg-secondary mb-1"
      />
    </div>
    </a>
    </div>
    </section>
  )
}

export default Hero