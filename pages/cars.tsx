import Wrapper from '@/components/Wrapper'
import { projects } from '@/Data/Data'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

// Animation
import { motion } from 'framer-motion'
import { smoothIn } from '@/animate'

const cars = () => {

  return (
    <>
      <Head>
        <title>Maverick - Cars</title>
      </Head>
      <Wrapper>
        <div className='flex flex-col pt-40 items-center text-center'>
          <motion.div
            variants={smoothIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}
            >
            <div className='uppercase tracking-widest text-sm text-WhiteGray'>
              -Carros Exclusivos
            </div>
            <div className='font-semibold text-3xl mt-8 text-Black'>
              Luxury Limousine For Maximum Satisfaction. Enjoy.
            </div>
            <p className='text-Black text-sm mt-8 leading-7 max-w-3xl'>
              O que oferecemos é o transporte de luxo e uma experiência confortável
              para sua segurança e conforto. Ganhe 15% de desconto em seu aluguel! Escolha seu
              modelo
            </p>
          </motion.div>

          <motion.div
            variants={smoothIn('right', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 my-8 md:px-8'
          >
            {
              projects.map(project => {
                return (
                  <div key={project.id} className='bg-Blur p-10'>
                    <div className='w-full relative group'>
                      <img src={project.img} alt="Card" className='w-full h-full' />
                    </div>

                    <div className='font-semibold text-Black text-start text-2xl mt-8'>
                      {project.name}
                    </div>
                    <div className='mt-2'>
                      <Image
                        src="/star.png"
                        alt='Avaliação'
                        width={80}
                        height={5}
                      />
                    </div>

                    <div className='text-Black mt-6 text-start'>
                      {project.des}
                    </div>

                    <div className='text-start'>
                      $ <span className='text-[64px]'>180</span> / Por Dia
                    </div>

                    <div className='flex mt-5 flex-wrap gap-2'>
                      <span className='border-[#bfa37c] border w-full py-4 px-8 text-Black tracking-widest text-sm'>{project.detail}</span>
                    </div>

                  </div>
                )
              })
            }
          </motion.div>

        </div>
      </Wrapper>
    </>
  )
}

export default cars