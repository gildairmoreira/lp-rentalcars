import Car from '@/components/Car'
import Stack from '@/components/Stack'
import Wrapper from '@/components/Wrapper'
import Head from 'next/head'
import React from 'react'

//Animation
import { motion, useInView } from 'framer-motion'
import {smoothIn} from '../animate.js'


export default function Home() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <Head >
        <title>Maverick - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Wrapper className='flex flex-col justify-center min-h-screen xl:h-screen overflow-hidden'>
        {/* Gradient Background */}
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full mix-blend-multiply filter blur-xl sm:w-[68.75rem]'></div>

        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full filter blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-33rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>


        <div className='w-full h-full justify-center text-center'>
          <div className='w-full h-full flex flex-col xl:justify-between'>
            <motion.div 
            variants={smoothIn('down',0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mb-2 lg:mt-8 mt-4'>
              <Stack />
            </motion.div>

            {/* Content Container */}
            <div className='flex flex-col xl:gap-4'>
              {/* Heading */}
              <motion.h1
              variants={smoothIn('down',0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h1 xl:text-5xl'>Book. Perfect. {" "}
                <span className='text-Red'>Ride.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
              variants={smoothIn('down',0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='text-Black mx-auto max-w-xl flex justify-center xl:text-sm'>
                Car Dealer é o tema WordPress premium para concessionárias de automóveis mais atraente, criativo, moderno e multifuncional. Ideal para sites de concessionárias, empresas ou sites corporativos. Expresse seu estilo na estrada com nossas diversas variações de cores de veículos, oferecendo opções personalizadas para cada viagem. Melhore os visuais com pontos interativos, fornecendo detalhes e criando narrativas envolventes dentro de suas imagens sem esforço.
              </motion.p>

              {/* Button */}
              <motion.div 
              variants={smoothIn('up',0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='flex gap-4 justify-center mt-2'>
                <button className='flex rounded-full bg-Red px-6 py-2 text-sm font-normal hover:bg-Black transition-all duration-300 text-White'>Ver Detalhes</button>
                <button className='flex rounded-full bg-Red px-6 py-2 text-sm font-normal hover:bg-Black transition-all duration-300 text-White'>Alugar</button>
              </motion.div>
            </div>

            <div className='xl:mt-0 mt-8 w-full xl:h-[45vh]'>
              <motion.div 
              ref={ref}
              variants={smoothIn('left',0.5)}
              initial='hidden'
              animate={isInView ? 'show' : 'hidden'}
              exit='hidden'
              transition={{duration:1,ease:'easeInOut'}}
              className='w-full h-full flex justify-center items-center'>
                <Car />
              </motion.div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
