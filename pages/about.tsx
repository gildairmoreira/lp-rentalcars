import Wrapper from '@/components/Wrapper'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

// CountUp
import MyCountUp from '@/components/CountUp';
import { countUpItems } from '@/Data/Data';

import { useInView } from 'react-intersection-observer';

//Animation
import { motion } from 'framer-motion';
import { smoothIn } from '@/animate';


const About = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Head >
        <title>Maverick - About</title>
      </Head>
      <Wrapper>
        <div className='flex flex-col gap-12 items-center justify-center mb-12 min-h-screen lg:flex-row lg:mb-0 pt-28 lg:pt-0 overflow-hidden'>
          <motion.div
            variants={smoothIn('right', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1 , ease:'easeInOut'}}
          >
            <Image
              src={'/about.jpg'}
              alt={"Imagem de carro"}
              width={500}
              height={400}
              className='traslate-z-0 w-[54rem] h-full'
            />
          </motion.div>

          <motion.div 
          className='lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl'
          variants={smoothIn('left', 0.5)}
          initial='hidden'
          animate={'show'}
          exit='hidden'
          transition={{ duration: 1 , ease: 'easeInOut'}}
          >
            <div className='uppercase text-WhiteGray font-medium text-sm'>
              - Transporte de Luxo
            </div>
            <div className='font-semibold text-3xl mt-8'>
              Nos valorizamos nossos clientes e queremos que eles tenham uma experiência agradável
            </div>
            <p className='text-Black text-sm mt-8 leading-7'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae alias iusto sint et sit consequatur, culpa ex voluptate cum velit blanditiis asperiores accusantium laborum quasi optio doloribus rem exercitationem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore inventore placeat explicabo quae, modi vel facilis. Vel quia exercitationem consequatur, saepe placeat non veniam tenetur nam, minima, velit sequi?
            </p>
            <button className='flex-none rounded-full bg-Red text-White px-6 py-2.5 text-sm font-normal hover:bg-black transition-all duration-300 mt-4'>
              Saiba Mais
            </button>

            {/* CountUp */}

            <div ref={ref} className='flex justify-center flex-wrap gap-12 mt-12'>
              {countUpItems.map( item => (
                <div
                  key={item.id}
                  className='text-center'>
                    <div className='text-Red text-3xl'>
                      {inView && <MyCountUp start={0} end={item.number} duration={3} />}+
                    </div>
                    <div className='text-Black mt-2 text-sm'>
                      {item.text}
                    </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </Wrapper>
    </>
  )
}

export default About