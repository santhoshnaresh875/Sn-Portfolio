import React from 'react'
import { TbBrandMysql } from "react-icons/tb";
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
     initial: {y:-10},
     animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
     }
})

const Technologies = () => {
  return (
    <div className='pb-6'>
      <motion.h2 whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{ duration:1.5}} className="my-20 py-10 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{opacity:1,x:0}}
      initial={{opacity:0,y:-100}}
      transition={{ duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
      <motion.div
      initial="initial"
      animate="animate"
      variants={iconVariants(2.5)} className='p-4'>
            <FaHtml5 className='text-7xl text-red-500'/>
        </motion.div>
        <motion.div initial="initial"
      animate="animate"
      variants={iconVariants(3)} className='p-4'>
            <IoLogoCss3 className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div initial="initial"
      animate="animate"
      variants={iconVariants(5)} className='p-4'>
            <FaBootstrap className='text-7xl text-violet-500'/>
        </motion.div>
        <motion.div initial="initial"
      animate="animate"
      variants={iconVariants(2)} className='p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div initial="initial"
      animate="animate"
      variants={iconVariants(6)} className='p-4'>
            <FaNodeJs className='text-7xl text-green-500'/>
        </motion.div>
        <motion.div initial="initial"
      animate="animate"
      variants={iconVariants(4)} className='p-4'>
            <SiExpress className='text-7xl text-white-500'/>
        </motion.div>
        <motion.div initial="initial"
      animate="animate"
      variants={iconVariants(1)} className='p-4'>
            <SiMongodb className='text-7xl text-cyan-500'/>
        </motion.div>
        <motion.div initial="initial"
      animate="animate"
      variants={iconVariants(2)} className='p-4'>
            <TbBrandMysql className='text-7xl text-sky-700'/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
